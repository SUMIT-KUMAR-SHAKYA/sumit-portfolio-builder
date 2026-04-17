import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validate inputs
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Required fields are missing.' },
        { status: 400 }
      );
    }

    // Configure Nodemailer (Use Environment Variables for credentials)
    const transporter = nodemailer.createTransport({
      service: 'gmail', // or your preferred provider
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email to the Site Owner (Sumit)
    const mailOptions = {
        from: `Portfolio Contact <${process.env.EMAIL_USER}>`,
        to: "sumitshakyaportfolio@gmail.com", // Your monitoring email
        subject: `[PRO] New Portfolio Contact: ${subject}`,
        html: `
            <div style="font-family: sans-serif; color: #333; max-width: 600px; padding: 20px; border: 1px solid #eee;">
                <h2 style="color: #0ea5e9;">New Message Received</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Subject:</strong> ${subject}</p>
                <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
                <p><strong>Message:</strong></p>
                <p style="white-space: pre-wrap;">${message}</p>
                <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
                <p style="font-size: 12px; color: #999;">Sent from your Next.js Portfolio v2.0</p>
            </div>
        `,
    };

    // Send the email (In production, ensure env vars are set)
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
        await transporter.sendMail(mailOptions);
    } else {
        console.warn("Email credentials missing. Simulating success...");
        await new Promise((resolve) => setTimeout(resolve, 1000));
    }

    return NextResponse.json(
      { success: true, message: 'Instant notification sent!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { error: 'Failed to send notification.' },
      { status: 500 }
    );
  }
}
