import React, { useState } from 'react';
import { sendEmail } from '../utils/emailService';

interface FormData {
  name: string;
  email: string;
}

export default function BetaSignupForm() {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '' });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.email) {
      setMessage('Please enter your email address.');
      setIsSuccess(false);
      return;
    }

    setLoading(true);
    setMessage('');

    try {
      const result = await sendEmail({
        name: formData.name,
        email: formData.email,
        type: 'waitlist'
      });

      if (result.success) {
        setIsSuccess(true);
        setMessage('🎉 Amazing! You\'re now on the beta list. Check your email for confirmation!');
        setFormData({ name: '', email: '' });
      } else {
        setIsSuccess(false);
        setMessage(result.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setIsSuccess(false);
      setMessage('Failed to join beta. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div>
          <label htmlFor="beta-name" className="block text-sm font-medium text-card-foreground mb-2">
            Name (Optional)
          </label>
          <input
            type="text"
            id="beta-name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 border border-border rounded-lg bg-background text-card-foreground focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
            placeholder="Your name"
          />
        </div>
        
        <div>
          <label htmlFor="beta-email" className="block text-sm font-medium text-card-foreground mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="beta-email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            className="w-full px-4 py-3 border border-border rounded-lg bg-background text-card-foreground focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
            placeholder="your.email@example.com"
          />
        </div>

        <div className="text-xs text-muted-foreground">
          By signing up, you agree to receive updates about the eGO beta program. 
          We'll never spam or share your email.
        </div>
      </div>

      <button
        type="submit"
        disabled={loading || !formData.email}
        className="btn-hero w-full group"
      >
        {loading ? (
          <>
            <div className="animate-spin h-5 w-5 border-2 border-primary-foreground border-t-transparent rounded-full mr-2" />
            Joining Beta...
          </>
        ) : (
          <>
            Reserve My Beta Spot
            <svg className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </>
        )}
      </button>

      {message && (
        <div className={`p-4 rounded-lg text-center font-medium ${
          isSuccess 
            ? 'bg-green-50 text-green-800 border border-green-200' 
            : 'bg-red-50 text-red-800 border border-red-200'
        }`}>
          {message}
        </div>
      )}
    </form>
  );
}
