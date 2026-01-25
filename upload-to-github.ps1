# GitHub 업로드 스크립트
# 사용 방법: 이 파일을 실행하기 전에 아래 YOUR_USERNAME과 REPO_NAME을 실제 값으로 변경하세요

$GITHUB_USERNAME = "YOUR_USERNAME"  # GitHub 사용자명으로 변경
$REPO_NAME = "cedarhill-site"        # 저장소 이름으로 변경

Write-Host "GitHub에 업로드 준비 중..." -ForegroundColor Green

# 커밋
Write-Host "`n1. 파일 커밋 중..." -ForegroundColor Yellow
git commit -m "Initial commit: CEDAR HILL Global Prep website"

# 원격 저장소 연결
Write-Host "`n2. GitHub 저장소 연결 중..." -ForegroundColor Yellow
git remote add origin "https://github.com/$GITHUB_USERNAME/$REPO_NAME.git"

# 업로드
Write-Host "`n3. GitHub에 업로드 중..." -ForegroundColor Yellow
git branch -M main
git push -u origin main

Write-Host "`n✅ 업로드 완료!" -ForegroundColor Green
Write-Host "GitHub에서 확인: https://github.com/$GITHUB_USERNAME/$REPO_NAME" -ForegroundColor Cyan







