export interface EmailData {
  name?: string;
  email: string;
  message?: string;
  type: 'waitlist' | 'contact';
}

export const sendEmail = async (emailData: EmailData): Promise<{ success: boolean; error?: string }> => {
  try {
    const response = await fetch('http://localhost:3001/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailData),
    });

    if (!response.ok) {
      throw new Error('Failed to send email');
    }

    const data = await response.json();
    return data;

  } catch (error: any) {
    console.error('Email sending error:', error);
    return { 
      success: false, 
      error: error.message || 'Failed to send email' 
    };
  }
};
