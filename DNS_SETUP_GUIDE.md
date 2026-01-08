# DNS 설정 가이드 - cedarhgp.org

## Vercel에서 요구하는 DNS 레코드

### 1. 루트 도메인 (cedarhgp.org)
```
Type: A
Name: @ (또는 비워두기)
Value: 216.198.79.1
TTL: 3600 (또는 기본값)
```

### 2. www 서브도메인 (www.cedarhgp.org)
```
Type: CNAME
Name: www
Value: 35be45713bb2f082.vercel-dns-017.com.
TTL: 3600 (또는 기본값)
```

---

## 주요 도메인 제공업체별 설정 방법

### 가비아 (Gabia)
1. https://www.gabia.com 접속 → 로그인
2. **도메인** → **도메인 관리** 클릭
3. `cedarhgp.org` 선택 → **DNS 관리** 클릭
4. **레코드 추가** 클릭
5. 위의 두 레코드 추가

### 후이즈 (Whois)
1. https://whois.co.kr 접속 → 로그인
2. **도메인 관리** → `cedarhgp.org` 선택
3. **DNS 설정** 클릭
4. **레코드 추가** 클릭
5. 위의 두 레코드 추가

### 네임칩 (Namecheap)
1. https://www.namecheap.com 접속 → 로그인
2. **Domain List** → `cedarhgp.org` 선택
3. **Advanced DNS** 탭 클릭
4. **Add New Record** 클릭
5. 위의 두 레코드 추가

### GoDaddy
1. https://www.godaddy.com 접속 → 로그인
2. **My Products** → `cedarhgp.org` 선택
3. **DNS** 탭 클릭
4. **Add** 버튼 클릭
5. 위의 두 레코드 추가

### 카페24
1. https://www.cafe24.com 접속 → 로그인
2. **도메인** → **도메인 관리**
3. `cedarhgp.org` 선택 → **DNS 관리**
4. 레코드 추가

---

## 설정 후 확인

1. **DNS 전파 대기**: 보통 몇 분~몇 시간 소요 (최대 48시간)
2. **Vercel에서 확인**: 
   - Vercel 대시보드 → 프로젝트 → Settings → Domains
   - "Refresh" 버튼 클릭
   - 상태가 "Valid Configuration"으로 변경되면 완료!

3. **온라인 도구로 확인**:
   - https://dnschecker.org 접속
   - `cedarhgp.org` 입력 → A 레코드 확인
   - `www.cedarhgp.org` 입력 → CNAME 레코드 확인

---

## 문제 해결

### "Invalid Configuration"이 계속 표시되는 경우
- DNS 전파 대기 (최대 48시간)
- 레코드 값이 정확한지 확인
- 기존 레코드와 충돌하는지 확인
- 도메인 제공업체에 문의

### CNAME 값의 점(.) 처리
- 일부 제공업체는 끝의 점(.)을 자동으로 제거합니다
- 점이 있어도 없어도 작동합니다
- 제공업체가 점을 요구하면 포함하세요

---

## 참고
- DNS 변경은 전 세계에 전파되는데 시간이 걸립니다
- Vercel은 SSL 인증서를 자동으로 발급합니다
- 설정이 완료되면 `https://cedarhgp.org`와 `https://www.cedarhgp.org` 모두 접속 가능합니다



