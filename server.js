import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables from .env file
dotenv.config({ path: join(__dirname, ".env") });

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Email templates
function getBetaWelcomeTemplate(name) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Welcome to eGO Beta Program</title>
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            
            body {
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                line-height: 1.6;
                color: #333;
                background: linear-gradient(135deg, #ffffff 0%, #FFF9C4 100%);
                min-height: 100vh;
                padding: 20px;
            }
            
            .container {
                max-width: 650px;
                margin: 0 auto;
                background: #ffffff;
                border-radius: 16px;
                box-shadow: 0 12px 40px rgba(0, 0, 0, 0.08);
                overflow: hidden;
                border: 1px solid rgba(255, 249, 196, 0.3);
            }
            
            .header {
                background: linear-gradient(135deg, #ffffff 0%, #FFF9C4 50%, #FFF59D 100%);
                padding: 50px 40px;
                text-align: center;
                position: relative;
                overflow: hidden;
            }
            
            .header::before {
                content: '';
                position: absolute;
                top: -50%;
                left: -50%;
                width: 200%;
                height: 200%;
                background: radial-gradient(circle, rgba(255, 249, 196, 0.3) 0%, transparent 70%);
                animation: float 6s ease-in-out infinite;
            }
            
            @keyframes float {
                0%, 100% { transform: translateY(0px) rotate(0deg); }
                50% { transform: translateY(-20px) rotate(2deg); }
            }
            
            .logo {
                position: relative;
                z-index: 2;
                font-size: 2.8em;
                font-weight: 800;
                color: #333;
                margin-bottom: 15px;
                text-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
                background: linear-gradient(135deg, #FBC02D, #FDD835);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
            }
            
            .tagline {
                position: relative;
                z-index: 2;
                font-size: 1.2em;
                color: #555;
                font-weight: 500;
                margin-bottom: 10px;
            }
            
            .company {
                position: relative;
                z-index: 2;
                font-size: 0.95em;
                color: #666;
                font-weight: 400;
                opacity: 0.8;
            }
            
            .content {
                padding: 45px 40px;
            }
            
            .greeting {
                font-size: 1.5em;
                color: #333;
                margin-bottom: 25px;
                font-weight: 600;
            }
            
            .content p {
                margin-bottom: 22px;
                color: #555;
                font-size: 1.05em;
                line-height: 1.7;
            }
            
            .stats {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
                gap: 20px;
                margin: 35px 0;
                padding: 30px;
                background: linear-gradient(135deg, #ffffff 0%, #FFF9C4 100%);
                border-radius: 12px;
                border: 1px solid rgba(255, 245, 157, 0.4);
            }
            
            .stat {
                text-align: center;
                padding: 10px;
            }
            
            .stat-number {
                font-size: 2.2em;
                font-weight: 800;
                color: #FBC02D;
                display: block;
                margin-bottom: 8px;
                text-shadow: 0 2px 4px rgba(251, 192, 45, 0.2);
            }
            
            .stat-label {
                font-size: 0.9em;
                color: #666;
                font-weight: 500;
                line-height: 1.3;
            }
            
            .features {
                background: linear-gradient(135deg, #FFF9C4 0%, #ffffff 100%);
                padding: 35px 30px;
                border-radius: 12px;
                margin: 35px 0;
                border-left: 4px solid #FBC02D;
                box-shadow: 0 4px 20px rgba(251, 192, 45, 0.1);
            }
            
            .features h3 {
                color: #333;
                margin-bottom: 20px;
                font-size: 1.4em;
                font-weight: 700;
            }
            
            .features ul {
                list-style: none;
                padding: 0;
            }
            
            .features li {
                margin-bottom: 16px;
                padding-left: 30px;
                position: relative;
                color: #555;
                font-size: 1.05em;
                line-height: 1.6;
            }
            
            .features li:before {
                content: "✓";
                position: absolute;
                left: 0;
                color: #FBC02D;
                font-weight: bold;
                font-size: 1.3em;
                top: -2px;
            }
            
            .features strong {
                color: #333;
                font-weight: 600;
            }
            
            .download-section {
                background: linear-gradient(135deg, #ffffff 0%, #FFF59D 100%);
                padding: 35px 30px;
                border-radius: 12px;
                margin: 35px 0;
                text-align: center;
                border: 1px solid rgba(255, 245, 157, 0.3);
            }
            
            .download-section h3 {
                color: #333;
                margin-bottom: 20px;
                font-size: 1.4em;
                font-weight: 700;
            }
            
            .qr-placeholder {
                width: 160px;
                height: 160px;
                background: #ffffff;
                border: 2px dashed #FBC02D;
                margin: 25px auto;
                border-radius: 12px;
                display: flex;
                align-items: center;
                justify-content: center;
                color: #FBC02D;
                font-weight: 600;
                font-size: 1.1em;
                box-shadow: 0 4px 15px rgba(251, 192, 45, 0.1);
                transition: all 0.3s ease;
            }
            
            .qr-placeholder:hover {
                transform: translateY(-2px);
                box-shadow: 0 6px 20px rgba(251, 192, 45, 0.15);
            }
            
            .app-links {
                display: flex;
                justify-content: center;
                gap: 20px;
                margin-top: 25px;
                flex-wrap: wrap;
            }
            
            .app-link {
                background: linear-gradient(135deg, #FBC02D 0%, #FDD835 100%);
                color: #333;
                text-decoration: none;
                padding: 16px 28px;
                border-radius: 50px;
                font-weight: 600;
                font-size: 1.05em;
                transition: all 0.3s ease;
                box-shadow: 0 4px 15px rgba(251, 192, 45, 0.3);
                border: none;
                cursor: pointer;
            }
            
            .app-link:hover {
                transform: translateY(-3px);
                box-shadow: 0 8px 25px rgba(251, 192, 45, 0.4);
            }
            
            .cta-button {
                display: inline-block;
                background: linear-gradient(135deg, #FBC02D 0%, #FDD835 100%);
                color: #333;
                text-decoration: none;
                padding: 18px 40px;
                border-radius: 50px;
                font-weight: 700;
                font-size: 1.1em;
                margin: 25px 0;
                transition: all 0.3s ease;
                box-shadow: 0 6px 20px rgba(251, 192, 45, 0.3);
                text-transform: uppercase;
                letter-spacing: 0.5px;
            }
            
            .cta-button:hover {
                transform: translateY(-3px);
                box-shadow: 0 10px 30px rgba(251, 192, 45, 0.4);
            }
            
            .signature {
                margin-top: 40px;
                padding-top: 30px;
                border-top: 2px solid #FFF9C4;
            }
            
            .company-name {
                color: #FBC02D;
                font-weight: 700;
                font-size: 1.1em;
            }
            
            .footer {
                background: linear-gradient(135deg, #FFF9C4 0%, #FFF59D 100%);
                padding: 30px 40px;
                text-align: center;
                color: #666;
                font-size: 0.95em;
                border-top: 1px solid rgba(255, 245, 157, 0.5);
            }
            
            .footer p {
                margin-bottom: 8px;
                line-height: 1.6;
            }
            
            .footer .brand {
                font-weight: 700;
                color: #333;
                font-size: 1.05em;
            }
            
            @media (max-width: 700px) {
                body {
                    padding: 15px;
                }
                
                .container {
                    border-radius: 12px;
                }
                
                .header {
                    padding: 35px 25px;
                }
                
                .logo {
                    font-size: 2.2em;
                }
                
                .tagline {
                    font-size: 1.1em;
                }
                
                .content {
                    padding: 35px 25px;
                }
                
                .features, .download-section {
                    padding: 25px 20px;
                }
                
                .stats {
                    grid-template-columns: 1fr;
                    padding: 25px 20px;
                }
                
                .app-links {
                    flex-direction: column;
                    align-items: center;
                }
                
                .app-link {
                    width: 200px;
                }
                
                .footer {
                    padding: 25px 20px;
                }
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <div class="logo">eGO</div>
                <div class="tagline">Revolutionary Public Transportation Tracking for Metro Manila</div>
                <div class="company">Powered by Innewgen</div>
            </div>
            
            <div class="content">
                <h2 class="greeting">Welcome to the Future of Commuting!</h2>
                <p>Thank you for joining the eGO beta testing program. You are now part of an exclusive group helping to revolutionize public transportation in Metro Manila, where 79% of commuters currently experience excessive waiting times.</p>
                
                <div class="stats">
                    <div class="stat">
                        <span class="stat-number">25m 30s</span>
                        <span class="stat-label">Average 10km trip time</span>
                    </div>
                    <div class="stat">
                        <span class="stat-number">240hrs</span>
                        <span class="stat-label">Annual traffic exposure</span>
                    </div>
                    <div class="stat">
                        <span class="stat-number">#1</span>
                        <span class="stat-label">Worst traffic globally</span>
                    </div>
                </div>
                
                <div class="features">
                    <h3>Your Beta Access Includes:</h3>
                    <ul>
                        <li><strong>eGO Commute App</strong> - Real-time vehicle tracking and capacity monitoring</li>
                        <li><strong>eGO Transit App</strong> - Streamlined operations for drivers and conductors</li>
                        <li><strong>Live GPS Tracking</strong> - Precise vehicle locations using Kalman Filter algorithms</li>
                        <li><strong>Capacity Indicators</strong> - Color-coded passenger load information</li>
                        <li><strong>Arrival Predictions</strong> - Accurate ETAs for better trip planning</li>
                        <li><strong>GTFS Integration</strong> - Comprehensive Metro Manila route data</li>
                        <li><strong>Direct Feedback Channel</strong> - Your input shapes the final product</li>
                    </ul>
                </div>
                
                <div class="download-section">
                    <h3>Beta Download Instructions</h3>
                    <p style="margin-bottom: 20px; color: #555;">We will notify you via email when the beta versions are ready for download. The apps will be available through:</p>
                    
                    <div class="qr-placeholder">
                        QR Code<br>
                        <span style="font-size: 0.9em; opacity: 0.7;">(Coming Soon)</span>
                    </div>
                    
                    <div class="app-links">
                        <a href="#" class="app-link">eGO Commute Beta</a>
                        <a href="#" class="app-link">eGO Transit Beta</a>
                    </div>
                    
                    <p style="font-size: 0.9em; color: #666; margin-top: 20px;">
                        Android 7.0+ required • Optimized for budget smartphones
                    </p>
                </div>
                
                <p>This project, developed by <span class="company-name">Innewgen</span>, aims to support the government's Public Transport Modernization Program (PTMP) through digital innovation and data-driven solutions.</p>
                
                <div style="text-align: center; margin: 35px 0;">
                    <a href="https://ego.innewgen.com" class="cta-button">Learn More About eGO</a>
                </div>
                
                <p>Questions about the beta program? Reply to this email and our development team will assist you promptly.</p>
                
                <div class="signature">
                    <p>Best regards,</p>
                    <p><strong class="company-name">The Innewgen Development Team</strong></p>
                    <p><em>Innovating the future of transportation technology</em></p>
                </div>
            </div>
            
            <div class="footer">
                <p>You are receiving this email because you registered for eGO beta access.</p>
                <p class="brand">eGO - Efficient Way to Go</p>
                <p>Making public transportation smarter, more efficient, and more reliable for everyone.</p>
                <p style="margin-top: 15px; font-size: 0.85em; opacity: 0.8;">© 2024 Innewgen. All rights reserved.</p>
            </div>
        </div>
    </body>
    </html>
  `;
}

function getContactConfirmationTemplate(name) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Message Received - eGO Team</title>
      <style>
        body { 
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; 
          line-height: 1.6; 
          color: #333; 
          margin: 0; 
          padding: 0; 
          background-color: #f8f9fa;
        }
        .container { 
          max-width: 600px; 
          margin: 0 auto; 
          background: white;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .header { 
          background: linear-gradient(135deg, #28a745 0%, #20c997 100%); 
          color: white; 
          padding: 40px 30px; 
          text-align: center;
        }
        .header h1 { 
          margin: 0; 
          font-size: 28px; 
          font-weight: bold;
        }
        .content { 
          padding: 40px 30px; 
        }
        .content h2 { 
          color: #333; 
          margin-bottom: 20px;
        }
        .highlight-box { 
          background: #d4edda; 
          border: 1px solid #c3e6cb; 
          color: #155724; 
          padding: 20px; 
          border-radius: 8px; 
          margin: 20px 0;
        }
        .footer { 
          background: #f8f9fa; 
          padding: 20px 30px; 
          text-align: center; 
          color: #6c757d; 
          font-size: 14px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>✅ Message Received!</h1>
        </div>
        
        <div class="content">
          <h2>Hi ${name}!</h2>
          
          <p>Thank you for reaching out to the eGO team! We've successfully received your message and really appreciate you taking the time to contact us.</p>
          
          <div class="highlight-box">
            <strong>⏰ Response Time:</strong> We'll get back to you within 24 hours during business days.
          </div>
          
          <p>Your interest and feedback help us build a better public transportation experience for everyone. Whether you have questions, suggestions, or partnership inquiries, we're here to help!</p>
          
          <p>In the meantime, feel free to explore our website and consider joining our beta program if you haven't already.</p>
          
          <p>Thanks again for your message!</p>
          
          <p>Best regards,<br><strong>The eGO Team</strong></p>
        </div>
        
        <div class="footer">
          <p>eGO - Revolutionary Public Transportation Tracking<br>
          Making your commute smarter, faster, and more reliable.</p>
        </div>
      </div>
    </body>
    </html>
  `;
}

// Email API route
app.post("/api/send-email", async (req, res) => {
  try {
    const { name, email, type, message } = req.body;

    console.log(`📧 Email request received:`, { name, email, type });
    console.log(
      `🔑 API Key loaded: ${
        process.env.RESEND_API_KEY
          ? process.env.RESEND_API_KEY.substring(0, 10) + "..."
          : "Not loaded"
      }`
    );

    if (!email) {
      return res
        .status(400)
        .json({ success: false, error: "Email is required" });
    }

    // Check if API key is loaded
    if (!process.env.RESEND_API_KEY) {
      console.error("❌ RESEND_API_KEY not found in environment variables");
      return res.status(500).json({
        success: false,
        error: "Email service configuration error",
      });
    }

    const emailData = {
      from: "eGO Team <noreply@updates.innewgen.com>",
      to: [email],
      subject:
        type === "waitlist"
          ? "🚌 Welcome to eGO Beta - Your Spot is Reserved!"
          : "✅ We Received Your Message - eGO Team",
      html:
        type === "waitlist"
          ? getBetaWelcomeTemplate(name || "Beta Tester")
          : getContactConfirmationTemplate(name || "There"),
    };

    console.log(`📤 Sending email to Resend API...`);

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify(emailData),
    });

    console.log(`📨 Resend API response status: ${response.status}`);

    if (!response.ok) {
      const errorData = await response.json();
      console.log(`❌ Resend API error:`, errorData);
      throw new Error(errorData.message || "Failed to send email");
    }

    const data = await response.json();
    console.log(`✅ Email sent successfully:`, data.id);
    res.json({ success: true, data });
  } catch (error) {
    console.error("❌ Email sending error:", error.message);
    res.status(500).json({
      success: false,
      error: error.message || "Failed to send email",
    });
  }
});

// Health check route
app.get("/api/health", (req, res) => {
  res.json({ status: "OK", message: "Email server is running" });
});

app.listen(PORT, () => {
  console.log(`🚀 Email server running on port ${PORT}`);
  console.log(
    `📧 Email API available at http://localhost:${PORT}/api/send-email`
  );
});
