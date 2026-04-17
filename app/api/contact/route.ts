import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validate inputs
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    // Since this is a Vercel Serverless Function, here is where one would integrate EmailJS, Resend, or Nodemailer.
    // E.g., await resend.emails.send({ ... })
    // For now, we simulate a successful email send:
    await new Promise((resolve) => setTimeout(resolve, 1200));

    // Return a success JSON response
    return NextResponse.json(
      { success: true, message: 'Message sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact error:', error);
    return NextResponse.json(
      { error: 'Internal server error.' },
      { status: 500 }
    );
  }
}
