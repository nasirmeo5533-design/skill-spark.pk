@echo off
echo ========================================
echo   SkillSpark - One-Click Deploy
echo ========================================
echo.

echo [1/2] GitHub pe push kar raha hai...
git add .
git commit -m "update: site improvements %date% %time%"
git push origin main

echo.
echo [2/2] Vercel pe deploy kar raha hai...
vercel --prod --yes

echo.
echo ========================================
echo   Deploy Complete!
echo ========================================
pause
