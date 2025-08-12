import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Email configuration
const transporter = nodemailer.createTransport({
  service: 'gmail', // You can change this to your email provider
  auth: {
    user: process.env.EMAIL_USER, // Add this to your .env file
    pass: process.env.EMAIL_PASS  // Add this to your .env file
  }
})

// Email templates for different form types
const emailTemplates = {
  'account-validation': {
    subject: 'Account Validation Request - Elite Portfolio Management',
    to: 'validation@eliteportfoliomgmt.com',
    template: (data: any) => `
      <h2>Account Validation Request</h2>
      <p><strong>Account Number:</strong> ${data.accountNumber}</p>
      <p><strong>Creditor:</strong> ${data.creditor}</p>
      <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
      <p><strong>Address:</strong> ${data.address}, ${data.city}, ${data.state} ${data.zipCode}</p>
      <p><strong>Phone:</strong> ${data.phoneNumber}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Consent Given:</strong> ${data.consent ? 'Yes' : 'No'}</p>
      <p><strong>Electronic Delivery Requested:</strong> ${data.electronicDelivery ? 'Yes' : 'No'}</p>
      <p><strong>Submission Date:</strong> ${new Date().toLocaleString()}</p>
    `
  },
  'bankruptcy-notification': {
    subject: 'Bankruptcy Notification - Elite Portfolio Management',
    to: 'info@eliteportfoliomgmt.com',
    template: (data: any) => `
      <h2>Bankruptcy Notification</h2>
      <p><strong>Account Number:</strong> ${data.accountNumber}</p>
      <p><strong>Creditor:</strong> ${data.creditor}</p>
      <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
      <p><strong>Address:</strong> ${data.address}, ${data.city}, ${data.state} ${data.zipCode}</p>
      <p><strong>Phone:</strong> ${data.phoneNumber}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Bankruptcy Case Number:</strong> ${data.bankruptcyCaseNumber}</p>
      <p><strong>Bankruptcy Case Number:</strong> ${data.bankruptcyCaseNumber}</p>
      <p><strong>Bankruptcy Chapter:</strong> ${data.bankruptcyChapter}</p>
      <p><strong>Filing Court:</strong> ${data.filingCourt}</p>
      <p><strong>Filing Date:</strong> ${data.filingDate}</p>
      <p><strong>Comments:</strong> ${data.comments || 'None provided'}</p>
      <p><strong>Files Uploaded:</strong> ${data.uploadedFiles ? data.uploadedFiles.length + ' file(s)' : 'No files uploaded'}</p>
      <p><strong>Consent Given:</strong> ${data.consent ? 'Yes' : 'No'}</p>
      <p><strong>Submission Date:</strong> ${new Date().toLocaleString()}</p>
      ${data.uploadedFiles ? `<p><strong>Note:</strong> Files were uploaded with this submission. Please check the file upload system or contact the user for document delivery.</p>` : ''}
    `
  },
  'remove-number': {
    subject: 'Remove My Number Request - Elite Portfolio Management',
    to: 'compliance@eliteportfoliomgmt.com',
    template: (data: any) => `
      <h2>Remove My Number Request</h2>
      <p><strong>Account Number:</strong> ${data.accountNumber}</p>
      <p><strong>Creditor:</strong> ${data.creditor}</p>
      <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
      <p><strong>Address:</strong> ${data.address}, ${data.city}, ${data.state} ${data.zipCode}</p>
      <p><strong>Phone Number to Remove:</strong> ${data.phoneNumberToRemove}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Reason:</strong> ${data.reason}</p>
      <p><strong>Consent Given:</strong> ${data.consent ? 'Yes' : 'No'}</p>
      <p><strong>Submission Date:</strong> ${new Date().toLocaleString()}</p>
    `
  },
  'compliment-complaint': {
    subject: 'Feedback Submission - Elite Portfolio Management',
    to: 'info@eliteportfoliomgmt.com',
    template: (data: any) => `
      <h2>Feedback Submission</h2>
      <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
      <p><strong>Account Number:</strong> ${data.accountNumber}</p>
      <p><strong>Creditor:</strong> ${data.creditor}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phoneNumber}</p>
      <p><strong>Feedback Type:</strong> ${data.feedbackType}</p>
      <p><strong>Subject:</strong> ${data.subject}</p>
      <p><strong>Message:</strong></p>
      <p>${data.message}</p>
      <p><strong>Consent Given:</strong> ${data.consent ? 'Yes' : 'No'}</p>
      <p><strong>Submission Date:</strong> ${new Date().toLocaleString()}</p>
    `
  },
  'dispute-account': {
    subject: 'Account Dispute - Elite Portfolio Management',
    to: 'compliance@eliteportfoliomgmt.com',
    template: (data: any) => `
      <h2>Account Dispute</h2>
      <p><strong>Account Number:</strong> ${data.accountNumber}</p>
      <p><strong>Creditor:</strong> ${data.creditor}</p>
      <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
      <p><strong>Address:</strong> ${data.address}, ${data.city}, ${data.state} ${data.zipCode}</p>
      <p><strong>Phone:</strong> ${data.phoneNumber}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Dispute Reason:</strong> ${data.disputeReason}</p>
      <p><strong>Dispute Details:</strong></p>
      <p>${data.disputeDetails}</p>
      <p><strong>Consent Given:</strong> ${data.consent ? 'Yes' : 'No'}</p>
      <p><strong>Submission Date:</strong> ${new Date().toLocaleString()}</p>
    `
  }
}

export async function POST(request: NextRequest) {
  try {
    console.log('API route called')
    console.log('Environment variables:', {
      EMAIL_USER: process.env.EMAIL_USER,
      EMAIL_PASS: process.env.EMAIL_PASS ? '***' : 'NOT SET'
    })

    const body = await request.json()
    const { formType, formData } = body

    console.log('Form type:', formType)
    console.log('Form data:', formData)

    // Validate form type
    if (!emailTemplates[formType as keyof typeof emailTemplates]) {
      console.log('Invalid form type:', formType)
      return NextResponse.json(
        { error: 'Invalid form type' },
        { status: 400 }
      )
    }

    const template = emailTemplates[formType as keyof typeof emailTemplates]
    
    // Check if there are uploaded files
    const hasFiles = formData.uploadedFiles && formData.uploadedFiles.length > 0
    let htmlContent = template.template(formData)
    
         // Add file information to email if files were uploaded
     if (hasFiles) {
       const fileList = formData.uploadedFiles.map((file: any) => {
         if (file.url) {
           return `<li><a href="${file.url}" target="_blank" style="color: #007bff; text-decoration: underline;">${file.name}</a> (${file.size} bytes) - <strong>Download Available</strong></li>`
         } else {
           return `<li>${file.name} (${file.size} bytes) - <em>Upload in progress</em></li>`
         }
       }).join('')
       
       htmlContent += `
         <div style="margin-top: 20px; padding: 15px; background-color: #f8f9fa; border-left: 4px solid #007bff;">
           <h3 style="color: #007bff; margin-top: 0;">📎 Files Uploaded (${formData.uploadedFiles.length})</h3>
           <ul style="margin: 10px 0;">
             ${fileList}
           </ul>
                                               <p style="margin: 10px 0; color: #6c757d; font-size: 14px;">
               <strong>Note:</strong> Files are stored securely in Vercel Blob Storage and can be downloaded using the links above.
             </p>
         </div>
       `
     }

    console.log('Email template generated')
    console.log('Files uploaded:', hasFiles ? formData.uploadedFiles.length : 0)

    // Send email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: template.to,
      subject: template.subject,
      html: htmlContent
    }

    console.log('Attempting to send email...')
    console.log('Mail options:', {
      from: mailOptions.from,
      to: mailOptions.to,
      subject: mailOptions.subject
    })

    await transporter.sendMail(mailOptions)

    console.log('Email sent successfully')

    return NextResponse.json(
      { message: 'Form submitted successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error submitting form:', error)
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    console.error('Error details:', {
      name: error instanceof Error ? error.name : 'Unknown',
      message: errorMessage,
      stack: error instanceof Error ? error.stack : 'No stack trace'
    })
    return NextResponse.json(
      { error: 'Failed to submit form', details: errorMessage },
      { status: 500 }
    )
  }
}
