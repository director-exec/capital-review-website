import { NextRequest, NextResponse } from 'next/server'
import { put } from '@vercel/blob'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get('file') as File
    
    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      )
    }

    console.log('Uploading file to Vercel Blob Storage:', {
      name: file.name,
      size: file.size,
      type: file.type
    })

    // Upload file to Vercel Blob Storage
    const blob = await put(file.name, file, {
      access: 'public',
    })

    console.log('File uploaded successfully to Vercel Blob:', {
      url: blob.url
    })

    return NextResponse.json({
      url: blob.url,
      size: file.size,
      uploadedAt: new Date().toISOString()
    })
  } catch (error) {
    console.error('Error uploading file:', error)
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    console.error('Error details:', {
      name: error instanceof Error ? error.name : 'Unknown',
      message: errorMessage,
      stack: error instanceof Error ? error.stack : 'No stack trace'
    })
    return NextResponse.json(
      { error: 'Failed to upload file', details: errorMessage },
      { status: 500 }
    )
  }
}
