import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    console.log('Test email API called')
    console.log('Environment variables:', {
      EMAIL_USER: process.env.EMAIL_USER,
      EMAIL_PASS: process.env.EMAIL_PASS ? '***' : 'NOT SET'
    })

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    })

    // Test email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'info@eliteportmgmt.com',
      subject: 'Test Email - Elite Portfolio Management',
      html: `
        <h2>Test Email</h2>
        <p>This is a test email to verify the email configuration is working.</p>
        <p><strong>Sent at:</strong> ${new Date().toLocaleString()}</p>
      `
    }

    console.log('Sending test email...')
    await transporter.sendMail(mailOptions)
    console.log('Test email sent successfully')

    return NextResponse.json(
      { message: 'Test email sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Test email error:', error)
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    return NextResponse.json(
      { error: 'Failed to send test email', details: errorMessage },
      { status: 500 }
    )
  }
}
