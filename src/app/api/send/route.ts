import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    try {
        const { name, email, message } = await req.json();
        console.log('Incoming contact request:', { name, email });

        if (!process.env.RESEND_API_KEY) {
            console.error('RESEND_API_KEY is not defined in environment variables');
            return NextResponse.json({ error: 'Mail system not configured (API key missing)' }, { status: 500 });
        }

        const resend = new Resend(process.env.RESEND_API_KEY);

        if (!name || !email || !message) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const { data, error } = await resend.emails.send({
            from: 'Portfolio Contact <onboarding@resend.dev>',
            to: ['nathommprasad@gmail.com'],
            subject: `New Portfolio Message from ${name}`,
            html: `
        <h2>New Message from Your Portfolio</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
        });

        if (error) {
            console.error('Resend API Error:', error);
            return NextResponse.json({ error }, { status: 500 });
        }

        console.log('Email sent successfully:', data);
        return NextResponse.json({ data });
    } catch (error: any) {
        console.error('API Route Error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
