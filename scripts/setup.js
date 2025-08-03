#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🚀 Setting up Elite Portfolio Management website...');

// Check if package.json exists
if (!fs.existsSync('package.json')) {
  console.error('❌ package.json not found. Please run this script from the project root.');
  process.exit(1);
}

// Create public directory if it doesn't exist
const publicDir = path.join(__dirname, '..', 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
  console.log('✅ Created public directory');
}

// Copy logo to public directory
const logoSource = path.join(__dirname, '..', 'LOGO', 'thread-viewer-1.png');
const logoDest = path.join(publicDir, 'logo.png');

if (fs.existsSync(logoSource)) {
  fs.copyFileSync(logoSource, logoDest);
  console.log('✅ Copied logo to public directory');
} else {
  console.log('⚠️  Logo not found, you may need to add your logo to the public directory');
}

console.log('\n📦 Installing dependencies...');
console.log('Run: npm install');

console.log('\n🚀 Starting development server...');
console.log('Run: npm run dev');

console.log('\n🎉 Setup complete! Your Elite Portfolio Management website is ready.');
console.log('Visit http://localhost:3000 to see your site.'); 