# 배포 가이드 (Deployment Guide)

이 문서는 CEDAR HILL Global Prep 웹사이트를 서버에 배포하고 도메인에 연결하는 방법을 안내합니다.

## 🚀 배포 옵션

### 옵션 1: Vercel (추천 - 가장 쉬움)

Vercel은 Next.js를 만든 회사에서 제공하는 플랫폼으로, Next.js 프로젝트에 최적화되어 있습니다.

#### 단계별 가이드:

1. **Vercel 계정 생성**
   - https://vercel.com 접속
   - GitHub 계정으로 로그인 (또는 이메일로 가입)

2. **프로젝트 배포**
   - Vercel 대시보드에서 "Add New Project" 클릭
   - GitHub 저장소 연결 (또는 코드 직접 업로드)
   - 프로젝트 설정:
     - Framework Preset: Next.js
     - Root Directory: `./` (기본값)
   - "Deploy" 클릭

3. **도메인 연결**
   - Vercel 대시보드 → 프로젝트 → Settings → Domains
   - "Add Domain" 클릭
   - 도메인 입력 (예: `www.cedarhgp.org`)
   - DNS 설정 안내에 따라 도메인 제공업체에서 DNS 레코드 추가:
     ```
     Type: A
     Name: @
     Value: 76.76.21.21
     
     Type: CNAME
     Name: www
     Value: cname.vercel-dns.com
     ```
   - SSL 인증서는 자동으로 발급됩니다 (Let's Encrypt)

4. **환경 변수 설정 (필요시)**
   - Settings → Environment Variables에서 추가

#### 장점:
- ✅ 무료 플랜 제공
- ✅ 자동 SSL 인증서
- ✅ 자동 배포 (Git push 시)
- ✅ CDN 자동 설정
- ✅ Next.js 최적화

---

### 옵션 2: Netlify

#### 단계별 가이드:

1. **Netlify 계정 생성**
   - https://netlify.com 접속
   - GitHub 계정으로 로그인

2. **프로젝트 배포**
   - "Add new site" → "Import an existing project"
   - GitHub 저장소 선택
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `.next`
   - "Deploy site" 클릭

3. **도메인 연결**
   - Site settings → Domain management
   - "Add custom domain" 클릭
   - DNS 설정 안내에 따라 레코드 추가

---

### 옵션 3: 자체 서버 (VPS/클라우드)

AWS, Google Cloud, Azure, 또는 일반 VPS 서버를 사용하는 경우:

#### 필요한 것:
- Node.js 18+ 설치
- PM2 (프로세스 관리자)
- Nginx (리버스 프록시)

#### 배포 스크립트:

```bash
# 1. 서버에 프로젝트 클론
git clone <your-repo-url>
cd my-site

# 2. 의존성 설치
npm install

# 3. 프로덕션 빌드
npm run build

# 4. PM2로 실행
npm install -g pm2
pm2 start npm --name "cedarhill-site" -- start
pm2 save
pm2 startup

# 5. Nginx 설정 (예시)
# /etc/nginx/sites-available/cedarhillprep
server {
    listen 80;
    server_name www.cedarhgp.org cedarhgp.org;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}

# 6. SSL 인증서 (Let's Encrypt)
sudo certbot --nginx -d www.cedarhgp.org -d cedarhgp.org
```

---

## 🔍 검색 엔진 등록 (SEO)

### 1. Google Search Console 등록

1. **Google Search Console 접속**
   - https://search.google.com/search-console
   - Google 계정으로 로그인

2. **속성 추가**
   - "속성 추가" 클릭
   - 도메인 또는 URL 접두어 선택
   - 소유권 확인:
     - 방법 1: HTML 파일 업로드
     - 방법 2: HTML 태그 (layout.tsx에 추가)
     - 방법 3: DNS 레코드 추가

3. **Sitemap 제출**
   - 좌측 메뉴 → "Sitemaps"
   - `https://www.cedarhgp.org/sitemap.xml` 입력
   - "제출" 클릭

4. **URL 검사**
   - 상단 검색창에 메인 페이지 URL 입력
   - "색인 생성 요청" 클릭

### 2. 네이버 웹마스터 도구 등록

1. **네이버 서치어드바이저 접속**
   - https://searchadvisor.naver.com
   - 네이버 계정으로 로그인

2. **사이트 등록**
   - "웹마스터 도구" → "사이트 추가"
   - 도메인 입력
   - 소유권 확인 (HTML 태그 또는 파일)

3. **사이트맵 제출**
   - "요청" → "사이트맵 제출"
   - `https://www.cedarhgp.org/sitemap.xml` 입력

### 3. 다음(Daum) 검색 등록

1. **다음 검색 등록**
   - https://register.search.daum.net/index.daum 접속
   - 사이트 URL 등록

---

## 📝 배포 전 체크리스트

- [ ] `src/app/layout.tsx`의 `metadataBase` URL을 실제 도메인으로 변경
- [ ] `src/app/sitemap.ts`의 `baseUrl`을 실제 도메인으로 변경
- [ ] `src/app/robots.ts`의 `sitemap` URL을 실제 도메인으로 변경
- [ ] Google Search Console 인증 코드를 `layout.tsx`에 추가 (선택)
- [ ] 프로덕션 빌드 테스트: `npm run build && npm start`
- [ ] 모든 이미지 경로 확인
- [ ] 연락처 정보 확인 (전화번호 등)

---

## 🔧 프로덕션 빌드 테스트

로컬에서 프로덕션 빌드를 테스트하려면:

```bash
# 빌드
npm run build

# 프로덕션 모드로 실행
npm start

# 브라우저에서 http://localhost:3000 접속하여 확인
```

---

## 📞 문제 해결

### 빌드 오류
- `npm run build` 실행하여 오류 확인
- TypeScript 오류 수정
- 의존성 재설치: `rm -rf node_modules package-lock.json && npm install`

### 도메인 연결 안 됨
- DNS 전파 대기 (최대 48시간, 보통 몇 시간)
- DNS 레코드 확인: `nslookup www.cedarhgp.org`
- Vercel/Netlify 대시보드에서 도메인 상태 확인

### 검색에 안 나옴
- Google Search Console에서 색인 상태 확인
- Sitemap 제출 확인
- robots.txt 접근 가능한지 확인: `https://www.cedarhgp.org/robots.txt`
- 몇 주 정도 시간이 걸릴 수 있음

---

## 📚 추가 리소스

- [Next.js 배포 문서](https://nextjs.org/docs/deployment)
- [Vercel 문서](https://vercel.com/docs)
- [Google Search Console 도움말](https://support.google.com/webmasters)
- [네이버 서치어드바이저 도움말](https://searchadvisor.naver.com/help)

