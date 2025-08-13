#!/usr/bin/env python3
"""
Email Domain Update Script
Changes all occurrences of @eliteportmgmt.com to @eliteportmgmt.com
"""

import os
import re
import sys
from pathlib import Path
from typing import List, Tuple

# Configuration
OLD_DOMAIN = '@eliteportmgmt.com'
NEW_DOMAIN = '@eliteportmgmt.com'

# File extensions to process
TEXT_EXTENSIONS = {
    '.html', '.htm', '.tsx', '.ts', '.js', '.jsx', '.css', '.scss', '.sass',
    '.md', '.txt', '.json', '.xml', '.yaml', '.yml', '.env', '.config',
    '.py', '.sh', '.bat', '.ps1', '.sql', '.php', '.rb', '.java', '.cpp',
    '.c', '.h', '.hpp', '.cs', '.vb', '.swift', '.kt', '.go', '.rs', '.php'
}

# Directories to skip
SKIP_DIRS = {
    '.git', 'node_modules', '.next', '.vercel', '__pycache__', '.vscode',
    'dist', 'build', 'coverage', '.nyc_output', 'logs', 'tmp', 'temp'
}

# Files to skip
SKIP_FILES = {
    'package-lock.json', 'yarn.lock', 'pnpm-lock.yaml',
    '.DS_Store', 'Thumbs.db', 'desktop.ini'
}

def should_process_file(file_path: Path) -> bool:
    """Check if a file should be processed."""
    # Skip if file is in skip list
    if file_path.name in SKIP_FILES:
        return False
    
    # Skip if file is in skip directory
    for part in file_path.parts:
        if part in SKIP_DIRS:
            return False
    
    # Check file extension
    return file_path.suffix.lower() in TEXT_EXTENSIONS

def find_files_to_process(root_dir: Path) -> List[Path]:
    """Find all files that should be processed."""
    files_to_process = []
    
    for file_path in root_dir.rglob('*'):
        if file_path.is_file() and should_process_file(file_path):
            files_to_process.append(file_path)
    
    return files_to_process

def process_file(file_path: Path) -> Tuple[bool, int]:
    """
    Process a single file and replace email domains.
    Returns (was_modified, number_of_replacements)
    """
    try:
        # Read file content
        with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
            content = f.read()
        
        # Count occurrences
        old_count = content.count(OLD_DOMAIN)
        
        if old_count == 0:
            return False, 0
        
        # Replace all occurrences
        new_content = content.replace(OLD_DOMAIN, NEW_DOMAIN)
        
        # Write back to file
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        
        return True, old_count
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False, 0

def main():
    """Main function to update email domains across the project."""
    # Get the project root directory
    script_dir = Path(__file__).parent
    project_root = script_dir.parent
    
    print(f"Email Domain Update Script")
    print(f"=========================")
    print(f"Project root: {project_root}")
    print(f"Changing: {OLD_DOMAIN} → {NEW_DOMAIN}")
    print()
    
    # Find all files to process
    print("Scanning for files to process...")
    files_to_process = find_files_to_process(project_root)
    print(f"Found {len(files_to_process)} files to check")
    print()
    
    # Process files
    modified_files = 0
    total_replacements = 0
    
    for file_path in files_to_process:
        was_modified, replacements = process_file(file_path)
        if was_modified:
            modified_files += 1
            total_replacements += replacements
            print(f"✓ {file_path.relative_to(project_root)} ({replacements} replacements)")
    
    print()
    print(f"Summary:")
    print(f"  Files modified: {modified_files}")
    print(f"  Total replacements: {total_replacements}")
    
    if modified_files > 0:
        print(f"\n✅ Successfully updated {total_replacements} email addresses across {modified_files} files!")
    else:
        print(f"\nℹ️  No files were modified. All email addresses are already using the new domain.")

if __name__ == "__main__":
    main()

