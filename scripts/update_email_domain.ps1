# Email Domain Update Script for PowerShell
# Changes all occurrences of @eliteportmgmt.com to @eliteportmgmt.com

param(
    [string]$ProjectRoot = ".",
    [string]$OldDomain = "@eliteportmgmt.com",
    [string]$NewDomain = "@eliteportmgmt.com"
)

# File extensions to process
$TextExtensions = @(
    '.html', '.htm', '.tsx', '.ts', '.js', '.jsx', '.css', '.scss', '.sass',
    '.md', '.txt', '.json', '.xml', '.yaml', '.yml', '.env', '.config',
    '.py', '.sh', '.bat', '.ps1', '.sql', '.php', '.rb', '.java', '.cpp',
    '.c', '.h', '.hpp', '.cs', '.vb', '.swift', '.kt', '.go', '.rs'
)

# Directories to skip
$SkipDirs = @(
    '.git', 'node_modules', '.next', '.vercel', '__pycache__', '.vscode',
    'dist', 'build', 'coverage', '.nyc_output', 'logs', 'tmp', 'temp'
)

# Files to skip
$SkipFiles = @(
    'package-lock.json', 'yarn.lock', 'pnpm-lock.yaml',
    '.DS_Store', 'Thumbs.db', 'desktop.ini'
)

function Should-ProcessFile {
    param([string]$FilePath)
    
    $fileName = [System.IO.Path]::GetFileName($FilePath)
    $extension = [System.IO.Path]::GetExtension($FilePath).ToLower()
    
    # Skip if file is in skip list
    if ($SkipFiles -contains $fileName) {
        return $false
    }
    
    # Skip if file is in skip directory
    foreach ($skipDir in $SkipDirs) {
        if ($FilePath -like "*\$skipDir\*") {
            return $false
        }
    }
    
    # Check file extension
    return $TextExtensions -contains $extension
}

function Update-EmailDomain {
    param([string]$FilePath)
    
    try {
        # Read file content
        $content = Get-Content -Path $FilePath -Raw -Encoding UTF8 -ErrorAction SilentlyContinue
        
        if ($null -eq $content) {
            return @{ Modified = $false; Replacements = 0 }
        }
        
        # Count occurrences
        $oldCount = ([regex]::Matches($content, [regex]::Escape($OldDomain))).Count
        
        if ($oldCount -eq 0) {
            return @{ Modified = $false; Replacements = 0 }
        }
        
        # Replace all occurrences
        $newContent = $content -replace [regex]::Escape($OldDomain), $NewDomain
        
        # Write back to file
        Set-Content -Path $FilePath -Value $newContent -Encoding UTF8
        
        return @{ Modified = $true; Replacements = $oldCount }
        
    } catch {
        Write-Host "Error processing $FilePath : $($_.Exception.Message)" -ForegroundColor Red
        return @{ Modified = $false; Replacements = 0 }
    }
}

# Main execution
Write-Host "Email Domain Update Script" -ForegroundColor Cyan
Write-Host "=========================" -ForegroundColor Cyan
Write-Host "Project root: $ProjectRoot" -ForegroundColor Yellow
Write-Host "Changing: $OldDomain → $NewDomain" -ForegroundColor Yellow
Write-Host ""

# Get the absolute path
$ProjectRoot = Resolve-Path $ProjectRoot

# Find all files to process
Write-Host "Scanning for files to process..." -ForegroundColor Green
$filesToProcess = Get-ChildItem -Path $ProjectRoot -Recurse -File | Where-Object { Should-ProcessFile $_.FullName }
Write-Host "Found $($filesToProcess.Count) files to check" -ForegroundColor Green
Write-Host ""

# Process files
$modifiedFiles = 0
$totalReplacements = 0

foreach ($file in $filesToProcess) {
    $result = Update-EmailDomain $file.FullName
    
    if ($result.Modified) {
        $modifiedFiles++
        $totalReplacements += $result.Replacements
        $relativePath = $file.FullName.Substring($ProjectRoot.Length + 1)
        Write-Host "✓ $relativePath ($($result.Replacements) replacements)" -ForegroundColor Green
    }
}

Write-Host ""
Write-Host "Summary:" -ForegroundColor Cyan
Write-Host "  Files modified: $modifiedFiles" -ForegroundColor Yellow
Write-Host "  Total replacements: $totalReplacements" -ForegroundColor Yellow

if ($modifiedFiles -gt 0) {
    Write-Host ""
    Write-Host "✅ Successfully updated $totalReplacements email addresses across $modifiedFiles files!" -ForegroundColor Green
} else {
    Write-Host ""
    Write-Host "ℹ️  No files were modified. All email addresses are already using the new domain." -ForegroundColor Blue
}

