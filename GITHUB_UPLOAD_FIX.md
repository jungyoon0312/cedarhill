# GitHub 업로드 문제 해결 가이드

## 문제
파일이 너무 커서 GitHub에 업로드할 수 없습니다.

## 해결 방법

### 방법 1: GitHub 웹에서 선택적으로 업로드 (추천)

**업로드할 때 다음을 제외하세요:**

#### ❌ 제외할 폴더:
- `node_modules` (용량이 매우 큼)
- `.next` (자동 생성되는 빌드 파일)
- `generated_images`
- `failed_prompts`

#### ❌ 제외할 파일:
- `public/images/Flyer1-simple.pdf` (96MB - 너무 큼!)
- `public/images/Flyer2-FullText.pdf` (1MB)

#### ✅ 업로드할 것:
- `src` 폴더 전체
- `public` 폴더 (PDF 제외)
- `package.json`
- `package-lock.json`
- `tsconfig.json`
- `next.config.ts`
- `postcss.config.mjs`
- `eslint.config.mjs`
- `.gitignore`
- `README.md`
- `DEPLOYMENT_GUIDE.md`
- `GITHUB_UPLOAD_GUIDE.md`
- 기타 설정 파일들

---

### 방법 2: Git 명령어 사용 (더 안전)

터미널에서 다음 명령어를 실행하세요:

```bash
# 1. 프로젝트 폴더로 이동
cd C:\Users\JUNGYOON\Desktop\my-site

# 2. Git 초기화 (처음 한 번만)
git init

# 3. 모든 파일 추가 (.gitignore에 있는 파일은 자동 제외됨)
git add .

# 4. 커밋
git commit -m "Initial commit"

# 5. GitHub 저장소 연결 (YOUR_USERNAME을 실제 값으로 변경)
git remote add origin https://github.com/YOUR_USERNAME/cedarhill-site.git

# 6. 업로드
git push -u origin main
```

**주의**: `main`이 안 되면 `master`로 시도하세요.

---

### 방법 3: PDF 파일 처리

PDF 파일이 필요하다면:

1. **압축**: PDF 압축 도구 사용 (예: SmallPDF, ILovePDF)
2. **다른 저장소**: GitHub Releases에 별도로 업로드
3. **외부 저장소**: Google Drive, Dropbox 등에 업로드 후 링크 연결
4. **제외**: 일단 제외하고 나중에 필요할 때 추가

---

## 빠른 체크리스트

업로드 전 확인:
- [ ] `node_modules` 폴더 제외
- [ ] `.next` 폴더 제외
- [ ] `Flyer1-simple.pdf` 제외 (96MB)
- [ ] `Flyer2-FullText.pdf` 제외 (선택)
- [ ] `generated_images` 폴더 제외
- [ ] `failed_prompts` 폴더 제외







