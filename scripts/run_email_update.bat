@echo off
echo Email Domain Update Script
echo =========================
echo.
echo This script will update all email addresses from @eliteportmgmt.com to @eliteportmgmt.com
echo.
echo Press any key to continue or Ctrl+C to cancel...
pause >nul

echo.
echo Running PowerShell script...
powershell -ExecutionPolicy Bypass -File "%~dp0update_email_domain.ps1"

echo.
echo Script completed!
pause

