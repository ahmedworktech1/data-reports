@echo off
chcp 65001 >nul
echo Starting ToolsHub...
echo Open: http://127.0.0.1:8099
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0hub.ps1"
pause
