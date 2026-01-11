# 검색 엔진 등록 가이드

이 문서는 CEDAR HILL Global Prep 웹사이트를 Google과 네이버 검색에 등록하는 방법을 안내합니다.

## 📋 사전 준비사항

1. **도메인 확인**: `https://www.cedarhgp.org`가 정상적으로 작동하는지 확인
2. **Sitemap 확인**: `https://www.cedarhgp.org/sitemap.xml`이 정상적으로 접근 가능한지 확인
3. **Robots.txt 확인**: `https://www.cedarhgp.org/robots.txt`가 정상적으로 접근 가능한지 확인

---

## 🔍 Google 검색 등록 (Google Search Console)

### 1단계: Google Search Console 접속
- URL: https://search.google.com/search-console
- Google 계정으로 로그인

### 2단계: 속성 추가
1. "속성 추가" 클릭
2. 속성 유형 선택: **"URL 접두어"** 선택
3. 웹사이트 URL 입력: `https://www.cedarhgp.org`
4. "계속" 클릭

### 3단계: 소유권 확인
Google에서 제공하는 인증 방법 중 하나를 선택:

**방법 1: HTML 파일 업로드 (권장)**
1. Google에서 제공하는 HTML 파일 다운로드
2. 프로젝트의 `public/` 폴더에 업로드
3. GitHub에 커밋 및 푸시
4. Vercel 배포 완료 후 Google Search Console에서 "확인" 클릭

**방법 2: HTML 태그**
1. Google에서 제공하는 메타 태그 복사
2. `src/app/layout.tsx` 파일의 `metadata.verification.google`에 추가
   ```typescript
   verification: {
     google: "your-google-verification-code",
   },
   ```
3. GitHub에 커밋 및 푸시
4. Vercel 배포 완료 후 Google Search Console에서 "확인" 클릭

**방법 3: Google Analytics (이미 사용 중인 경우)**
- Google Analytics가 이미 연결되어 있다면 자동으로 인증됩니다.

### 4단계: Sitemap 제출
1. Google Search Console 좌측 메뉴에서 **"Sitemaps"** 클릭
2. "새 사이트맵 추가"에 `sitemap.xml` 입력
3. "제출" 클릭
4. 상태가 "성공"으로 표시될 때까지 대기 (보통 몇 분~몇 시간 소요)

### 5단계: URL 검사 (선택사항)
1. "URL 검사" 도구 사용
2. 홈페이지 URL 입력: `https://www.cedarhgp.org`
3. "색인 생성 요청" 클릭 (선택사항)

### ✅ 완료 확인
- Google Search Console에서 "색인 생성" > "페이지" 메뉴에서 색인된 페이지 수 확인
- 보통 1-2주 내에 검색 결과에 노출되기 시작합니다.

---

## 🔍 네이버 검색 등록 (네이버 서치어드바이저)

### 1단계: 네이버 서치어드바이저 접속
- URL: https://searchadvisor.naver.com/
- 네이버 계정으로 로그인

### 2단계: 사이트 등록
1. "웹마스터 도구" 메뉴 클릭
2. "사이트 추가" 클릭
3. 사이트 URL 입력: `https://www.cedarhgp.org`
4. 사이트 이름 입력: `CEDAR HILL Global Prep`
5. "확인" 클릭

### 3단계: 사이트 소유 확인
네이버에서 제공하는 인증 방법 중 하나를 선택:

**방법 1: HTML 파일 업로드 (권장)**
1. 네이버에서 제공하는 HTML 파일 다운로드
2. 프로젝트의 `public/` 폴더에 업로드
3. GitHub에 커밋 및 푸시
4. Vercel 배포 완료 후 네이버 서치어드바이저에서 "확인" 클릭

**방법 2: 메타 태그**
1. 네이버에서 제공하는 메타 태그 복사
2. `src/app/layout.tsx` 파일의 `<head>` 섹션에 추가:
   ```tsx
   <meta name="naver-site-verification" content="your-verification-code" />
   ```
3. GitHub에 커밋 및 푸시
4. Vercel 배포 완료 후 네이버 서치어드바이저에서 "확인" 클릭

### 4단계: Sitemap 제출
1. 네이버 서치어드바이저 좌측 메뉴에서 **"요청"** > **"사이트맵 제출"** 클릭
2. 사이트맵 URL 입력: `https://www.cedarhgp.org/sitemap.xml`
3. "확인" 클릭

### 5단계: RSS 제출 (선택사항)
- 공지사항이나 블로그가 있다면 RSS 피드도 제출할 수 있습니다.

### ✅ 완료 확인
- 네이버 서치어드바이저에서 "요청" > "수집 현황" 메뉴에서 수집된 페이지 수 확인
- 보통 1-2주 내에 검색 결과에 노출되기 시작합니다.

---

## 📊 검색 결과 노출 확인

### Google 검색
1. Google에서 `site:cedarhgp.org` 검색
2. 또는 `"CEDAR HILL Global Prep"` 검색

### 네이버 검색
1. 네이버에서 `site:cedarhgp.org` 검색
2. 또는 `"씨더힐 글로벌 프렙"` 검색

---

## 🚀 SEO 최적화 팁

### 1. 정기적인 콘텐츠 업데이트
- 공지사항을 정기적으로 업데이트하면 검색 엔진이 더 자주 방문합니다.
- `src/app/community/page.tsx`의 공지사항을 업데이트하세요.

### 2. 키워드 최적화
현재 설정된 주요 키워드:
- 영어유치원
- 글로벌 교육
- 유아교육
- 인천 유치원
- 영어 몰입 교육
- Cognia 인증
- STEAM 교육
- Pre-K
- 인천 학익동

### 3. 구조화된 데이터 (JSON-LD)
- 이미 `src/app/layout.tsx`에 EducationalOrganization 스키마가 추가되어 있습니다.
- Google과 네이버 모두 구조화된 데이터를 인식합니다.

### 4. 모바일 최적화
- 이미 반응형 디자인이 적용되어 있습니다.
- Google은 모바일 친화적인 사이트를 우선적으로 색인합니다.

### 5. 페이지 로딩 속도
- Vercel을 사용하고 있어 자동으로 최적화됩니다.
- 이미지 최적화를 위해 Next.js Image 컴포넌트 사용을 권장합니다.

---

## ⚠️ 주의사항

1. **인증 코드 보안**: 인증 코드는 공개 저장소에 커밋되어도 문제없지만, 필요시 환경 변수로 관리할 수 있습니다.

2. **색인 생성 시간**: 
   - Google: 보통 1-2주
   - 네이버: 보통 1-2주
   - 첫 등록 후 즉시 노출되지 않을 수 있습니다.

3. **Sitemap 업데이트**: 
   - 새로운 페이지를 추가하면 `src/app/sitemap.ts`를 업데이트하세요.
   - 자동으로 재배포되면 검색 엔진이 새로운 페이지를 인식합니다.

4. **Robots.txt**: 
   - 현재 모든 페이지가 색인 가능하도록 설정되어 있습니다.
   - 특정 페이지를 숨기려면 `src/app/robots.ts`를 수정하세요.

---

## 📞 문제 해결

### Google Search Console에서 색인이 안 될 때
1. "URL 검사" 도구로 개별 페이지 확인
2. "색인 생성 요청" 사용
3. Sitemap이 정상적으로 제출되었는지 확인
4. Robots.txt가 페이지를 차단하지 않는지 확인

### 네이버에서 수집이 안 될 때
1. 네이버 서치어드바이저의 "수집 현황" 확인
2. 오류 메시지 확인
3. 사이트맵이 정상적으로 제출되었는지 확인
4. Robots.txt가 페이지를 차단하지 않는지 확인

---

## ✅ 체크리스트

- [ ] Google Search Console에 사이트 등록
- [ ] Google 소유권 확인 완료
- [ ] Google에 Sitemap 제출
- [ ] 네이버 서치어드바이저에 사이트 등록
- [ ] 네이버 소유권 확인 완료
- [ ] 네이버에 Sitemap 제출
- [ ] 구조화된 데이터 (JSON-LD) 확인
- [ ] 모든 페이지의 메타데이터 확인
- [ ] 모바일 최적화 확인
- [ ] 페이지 로딩 속도 확인

---

## 📚 참고 자료

- [Google Search Console 도움말](https://support.google.com/webmasters)
- [네이버 서치어드바이저 도움말](https://searchadvisor.naver.com/guide)
- [Schema.org EducationalOrganization](https://schema.org/EducationalOrganization)
- [Next.js Metadata API](https://nextjs.org/docs/app/api-reference/functions/generate-metadata)

