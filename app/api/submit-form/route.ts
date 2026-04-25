import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
})

const emailTemplates = {
  'account-validation': {
    subject: 'Account Validation Request - Capital Review Management',
    to: 'info@capitalreviewmanagement.com',
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
    subject: 'Bankruptcy Notification - Capital Review Management',
    to: 'info@capitalreviewmanagement.com',
    template: (data: any) => `
      <h2>Bankruptcy Notification</h2>
      <p><strong>Account Number:</strong> ${data.accountNumber}</p>
      <p><strong>Creditor:</strong> ${data.creditor}</p>
      <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
      <p><strong>Address:</strong> ${data.address}, ${data.city}, ${data.state} ${data.zipCode}</p>
      <p><strong>Phone:</strong> ${data.phoneNumber}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Bankruptcy Case Number:</strong> ${data.bankruptcyCaseNumber}</p>
      <p><strong>Bankruptcy Chapter:</strong> ${data.bankruptcyChapter}</p>
      <p><strong>Filing Court:</strong> ${data.filingCourt}</p>
      <p><strong>Filing Date:</strong> ${data.filingDate}</p>
      <p><strong>Comments:</strong> ${data.comments || 'None provided'}</p>
      <p><strong>Files Uploaded:</strong> ${data.uploadedFiles ? data.uploadedFiles.length + ' file(s)' : 'No files uploaded'}</p>
      <p><strong>Consent Given:</strong> ${data.consent ? 'Yes' : 'No'}</p>
      <p><strong>Submission Date:</strong> ${new Date().toLocaleString()}</p>
      ${data.uploadedFiles ? `<p><strong>Note:</strong> Files were uploaded with this submission.</p>` : ''}
    `
  },
  'remove-number': {
    subject: 'Remove My Number Request - Capital Review Management',
    to: 'info@capitalreviewmanagement.com',
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
    subject: 'Feedback Submission - Capital Review Management',
    to: 'info@capitalreviewmanagement.com',
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
    subject: 'Account Dispute - Capital Review Management',
    to: 'info@capitalreviewmanagement.com',
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
    const body = await request.json()
    const { formType, formData } = body

    if (!emailTemplates[formType as keyof typeof emailTemplates]) {
      return NextResponse.json({ error: 'Invalid form type' }, { status: 400 })
    }

    const template = emailTemplates[formType as keyof typeof emailTemplates]
    const hasFiles = formData.uploadedFiles && formData.uploadedFiles.length > 0
    let htmlContent = template.template(formData)

    if (hasFiles) {
      const fileList = formData.uploadedFiles.map((file: any) => {
        if (file.url) {
          return `<li><a href="${file.url}" target="_blank" style="color: #0A5638; text-decoration: underline;">${file.name}</a> (${file.size} bytes)</li>`
        }
        return `<li>${file.name} (${file.size} bytes)</li>`
      }).join('')

      htmlContent += `
        <div style="margin-top: 20px; padding: 15px; background-color: #f8f9fa; border-left: 4px solid #0A5638;">
          <h3 style="color: #0A5638; margin-top: 0;">Files Uploaded (${formData.uploadedFiles.length})</h3>
          <ul style="margin: 10px 0;">${fileList}</ul>
          <p style="margin: 10px 0; color: #6c757d; font-size: 14px;"><strong>Note:</strong> Files are stored securely and can be downloaded using the links above.</p>
        </div>
      `
    }

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: template.to,
      subject: template.subject,
      html: htmlContent
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({ message: 'Form submitted successfully' }, { status: 200 })
  } catch (error) {
    console.error('Error submitting form:', error)
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    return NextResponse.json({ error: 'Failed to submit form', details: errorMessage }, { status: 500 })
  }
}
