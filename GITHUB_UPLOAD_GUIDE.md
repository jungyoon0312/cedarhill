# GitHub 업로드 가이드

## 방법 1: GitHub 웹사이트에서 직접 업로드 (가장 쉬움) ⭐ 추천

### 1단계: 새 저장소 만들기
1. https://github.com 접속 후 로그인
2. 우측 상단 **+** 버튼 클릭 → **New repository** 선택
3. 저장소 설정:
   - **Repository name**: `cedarhill-site` (원하는 이름)
   - **Public** 또는 **Private** 선택
   - ⚠️ **"Initialize this repository with a README"는 체크하지 마세요**
4. **Create repository** 클릭

### 2단계: 파일 업로드
1. 저장소 페이지에서 **"uploading an existing file"** 링크 클릭
   - 또는 **"Add file"** → **"Upload files"** 클릭
2. 파일 탐색기에서 `C:\Users\JUNGYOON\Desktop\my-site` 폴더 열기
3. 다음을 **제외**하고 모든 파일/폴더를 드래그 앤 드롭:
   - ❌ `node_modules` 폴더 (용량이 너무 큼)
   - ❌ `.next` 폴더 (자동 생성됨)
   - ❌ `.git` 폴더 (있다면)
4. 하단에 **"Commit changes"** 클릭

---

## 방법 2: Git 명령어 사용 (터미널)

### 사전 준비
1. Git이 설치되어 있어야 합니다
   - 설치 확인: `git --version`
   - 없으면: https://git-scm.com/download/win

### 1단계: GitHub에 새 저장소 만들기
- 방법 1과 동일 (웹사이트에서 저장소 생성)

### 2단계: 터미널에서 명령어 실행

프로젝트 폴더에서 다음 명령어를 순서대로 실행하세요:

```bash
# 1. 프로젝트 폴더로 이동
cd C:\Users\JUNGYOON\Desktop\my-site

# 2. Git 초기화 (처음 한 번만)
git init

# 3. 모든 파일 추가
git add .

# 4. 첫 번째 커밋
git commit -m "Initial commit"

# 5. GitHub 저장소 연결 (YOUR_USERNAME과 REPO_NAME을 실제 값으로 변경)
git remote add origin https://github.com/YOUR_USERNAME/cedarhill-site.git

# 6. GitHub에 업로드
git push -u origin main
```

**주의**: 
- `YOUR_USERNAME`을 본인의 GitHub 사용자명으로 변경
- `cedarhill-site`를 실제 저장소 이름으로 변경
- `main` 브랜치가 안 되면 `master`로 시도

### 인증 문제 해결
- GitHub에서 Personal Access Token이 필요할 수 있습니다
- Settings → Developer settings → Personal access tokens → Generate new token

---

## 업로드 후 Vercel 연결

1. https://vercel.com 접속
2. GitHub 계정으로 로그인
3. **Add New Project** 클릭
4. 방금 만든 저장소 선택
5. **Deploy** 클릭

끝! 🎉

