# SkillSpark Deploy Script
# Yeh script GitHub aur Vercel pe ek sath deploy karti hai

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  SkillSpark - One-Click Deploy" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Step 1: Git add, commit, push
Write-Host "[1/3] GitHub pe push kar raha hai..." -ForegroundColor Yellow
git add .

$commitMsg = Read-Host "Commit message likho (ya Enter dabao default ke liye)"
if ([string]::IsNullOrWhiteSpace($commitMsg)) {
    $commitMsg = "update: site improvements $(Get-Date -Format 'yyyy-MM-dd HH:mm')"
}

git commit -m $commitMsg
git push origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host "[OK] GitHub pe push ho gaya!" -ForegroundColor Green
} else {
    Write-Host "[ERROR] GitHub push failed!" -ForegroundColor Red
    exit 1
}

# Step 2: Vercel pe deploy
Write-Host ""
Write-Host "[2/3] Vercel pe deploy kar raha hai..." -ForegroundColor Yellow
vercel --prod --yes

if ($LASTEXITCODE -eq 0) {
    Write-Host "[OK] Vercel pe deploy ho gaya!" -ForegroundColor Green
} else {
    Write-Host "[ERROR] Vercel deploy failed!" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Green
Write-Host "  Deploy Complete!" -ForegroundColor Green
Write-Host "  GitHub: https://github.com/nasirmeo5533-design/skill-spark.pk" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Green
