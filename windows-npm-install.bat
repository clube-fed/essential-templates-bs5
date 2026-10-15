@echo off
:: Change the directory to where this batch file lives
cd /d "%~dp0"

:: Put your command below
echo Currently running in: %cd%
npm install
pause
