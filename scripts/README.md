# Email Domain Update Scripts

This directory contains scripts to update all email addresses from `@capitalreviewmgt.com` to `@capitalreviewmgt.com` across your entire project.

## Available Scripts

### 1. PowerShell Script (Recommended for Windows)
- **File**: `update_email_domain.ps1`
- **Usage**: `powershell -ExecutionPolicy Bypass -File "scripts/update_email_domain.ps1"`

### 2. Python Script (Cross-platform)
- **File**: `update_email_domain.py`
- **Usage**: `python scripts/update_email_domain.py`

### 3. Batch File (Easy Windows execution)
- **File**: `run_email_update.bat`
- **Usage**: Double-click the file or run `scripts/run_email_update.bat`

## What the Scripts Do

The scripts will:

1. **Scan** all files in your project recursively
2. **Identify** files that contain email addresses (HTML, TSX, JS, CSS, MD, TXT, etc.)
3. **Skip** system directories like `.git`, `node_modules`, `.next`, etc.
4. **Replace** all occurrences of `@capitalreviewmgt.com` with `@capitalreviewmgt.com`
5. **Report** which files were modified and how many replacements were made

## File Types Processed

The scripts will process these file types:
- HTML files (`.html`, `.htm`)
- React/Next.js files (`.tsx`, `.ts`, `.js`, `.jsx`)
- Style files (`.css`, `.scss`, `.sass`)
- Documentation (`.md`, `.txt`)
- Configuration files (`.json`, `.xml`, `.yaml`, `.yml`, `.env`)
- Script files (`.py`, `.sh`, `.bat`, `.ps1`)
- And many more text-based file types

## Directories Skipped

The scripts automatically skip these directories:
- `.git` (version control)
- `node_modules` (dependencies)
- `.next` (Next.js build)
- `.vercel` (Vercel deployment)
- `.vscode` (VS Code settings)
- `dist`, `build` (build outputs)
- And other system directories

## Safety Features

- **Backup**: Consider backing up your project before running the script
- **Preview**: The script shows you exactly which files will be modified
- **Error Handling**: Gracefully handles files that can't be read or written
- **Encoding**: Properly handles UTF-8 encoding

## Example Output

```
Email Domain Update Script
=========================
Project root: C:\Users\username\project
Changing: @capitalreviewmgt.com → @capitalreviewmgt.com

Scanning for files to process...
Found 156 files to check

✓ app/contact/page.tsx (7 replacements)
✓ components/Footer.tsx (1 replacements)
✓ EMAIL_SETUP.md (5 replacements)
✓ contact.html (8 replacements)
...

Summary:
  Files modified: 45
  Total replacements: 127

✅ Successfully updated 127 email addresses across 45 files!
```

## Running the Script

### Option 1: PowerShell (Recommended)
```powershell
cd C:\path\to\your\project
powershell -ExecutionPolicy Bypass -File "scripts/update_email_domain.ps1"
```

### Option 2: Python
```bash
cd C:\path\to\your\project
python scripts/update_email_domain.py
```

### Option 3: Batch File (Windows)
```cmd
cd C:\path\to\your\project
scripts\run_email_update.bat
```

## Customization

You can modify the scripts to change different domains by editing these variables:

**PowerShell**:
```powershell
$OldDomain = "@capitalreviewmgt.com"
$NewDomain = "@capitalreviewmgt.com"
```

**Python**:
```python
OLD_DOMAIN = '@capitalreviewmgt.com'
NEW_DOMAIN = '@capitalreviewmgt.com'
```

## Troubleshooting

### PowerShell Execution Policy Error
If you get an execution policy error, run:
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### Permission Denied
Make sure you have write permissions to the project directory.

### No Files Modified
If no files are modified, it means all email addresses are already using the new domain.

## Support

If you encounter any issues, check:
1. File permissions
2. PowerShell execution policy
3. Python installation (if using Python script)
4. That you're running the script from the project root directory

