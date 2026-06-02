# FELPEN FRIENDS — Portfolio Website

> Brand Designer & AI Vibe Coder | 브랜드 디자이너 & AI 바이브 코더

**Live Site:** [포트폴리오 바로가기](https://guhakim.github.io/felpen-Friends-Portfolio/)  
**Contact:** felpen@naver.com  
**Blog:** [blog.naver.com/zhsksdhahxp](https://blog.naver.com/zhsksdhahxp)

---

## 프로젝트 개요

펠펜프렌즈(Felpen Friends) 브랜드 디자인 스튜디오의 공식 포트폴리오 웹사이트입니다.  
브랜드 아이덴티티, 캐릭터 디자인, 패키지 디자인, AI Vibe Coding 프로젝트를 소개합니다.

**제작 방식:** AI Vibe Coding (Claude AI + Claude Code)  
**제작 기간:** 2026년 5월  
**제작자:** 김구하 (펠펜프렌즈 대표)

---

## 기술 스택

| 구분 | 기술 |
|------|------|
| **마크업** | HTML5 |
| **스타일링** | Tailwind CSS (CDN) |
| **폰트** | Sora, Inter (Google Fonts) |
| **인터랙션** | Vanilla JavaScript |
| **폼 전송** | Web3Forms API |
| **Framer 버전** | React (FelpenPortfolio.tsx) |
| **AI 도구** | Claude AI (Anthropic), Claude Code |

빌드 도구 없이 순수 HTML/CSS/JS로 제작되어 별도 설치 없이 바로 실행 가능합니다.

---

## 파일 구조

```
portfolio/
├── index.html                    # 메인 페이지 (전체 사이트)
├── style.css                     # 구버전 CSS (미사용 / 참고용)
├── script.js                     # 구버전 JS (미사용 / 참고용)
├── FelpenPortfolio.tsx           # Framer 코드 컴포넌트 버전
├── README.md                     # 프로젝트 문서
└── images/
    ├── 1.png                     # 메인 캐릭터 이미지 (Hero)
    ├── package/
    │   ├── main/석류.png          # 석류 패키지 — 썸네일
    │   └── detail/석류_패키지_디자인_최종.jpg  # 석류 패키지 — 상세
    ├── character/
    │   ├── main/캐릭터 메인.png   # 캐릭터 디자인 — 썸네일
    │   └── detail/캐릭터.png      # 캐릭터 디자인 — 상세
    ├── logo/
    │   ├── main/logo 메인.png     # 로고 디자인 — 썸네일
    │   └── detail/logo.png        # 로고 디자인 — 상세
    └── AI Coding Development/
        ├── main/CleanShot 2026-05-31 at 21.04.20.png  # MarkMind — 썸네일
        └── detail/MarkMind - AI 북마크 정리.pdf        # MarkMind — 상세
```

---

## 사이트 구성 (섹션별)

### 1. Navigation
- 상단 고정 네비게이션 (sticky)
- Work / More / About / Contact 링크
- **Hire Me** CTA 버튼 (Contact 섹션으로 스크롤)
- 배경 blur 효과 적용

### 2. Hero Section
- 타이틀: "Brand Designer & AI Vibe Coder."
- 서울 위치 뱃지, 캐릭터 이미지 (기울어진 카드 스타일)
- "I am Felpen" 바운스 뱃지
- View Work / Start a Project 버튼

### 3. Skills Marquee
- 무한 좌측 스크롤 애니메이션
- 기술 태그: Illustration / Photoshop / Branding / Package / Character / AI / Web App
- hover 시 일시정지

### 4. Selected Clients (카테고리 그리드)
- 8개 카테고리 컬러 그리드 (네온 그린, 마젠타, 블루 등)
- 각 카드 → 해당 프로젝트로 앵커 링크

### 5. Featured Work (대표 프로젝트 4개)

| # | 프로젝트명 | 카테고리 | 연도 |
|---|-----------|---------|------|
| 1 | 그대로 짜낸 순수 석류 100% | Package Design | 2025 |
| 2 | MarkMind | AI Vibe Coding | 2025 |
| 3 | Felpen Friends | Character Design | 2024 |
| 4 | 커피도시 부산 BI 로고 디자인 | Brand Identity | 2024 |

- 클릭 시 프로젝트 상세 모달 오픈
- 카드 hover: 기울기 + 스케일 애니메이션

### 6. More Work
- 8개 추가 카테고리 (색상 placeholder)
- Package / Landing Page / AI Brand Kit / Editorial / Type System / Motion / Vibe UI / Web Design

### 7. About Section
- 스튜디오 소개 텍스트
- Skills & Tools 태그 목록

### 8. Footer / Contact
- 이메일 버튼 (문의 모달 오픈)
- Instagram / Blog / LinkedIn 링크
- © 2025 Felpen Friends

---

## 기능 상세

### 모달 시스템 (3종)

**① 프로젝트 상세 모달**
- 카드 클릭 시 오픈
- 이미지 또는 PDF embed 표시
- 프로젝트 제목, 카테고리, 설명, 외부 링크

**② About 모달**
- 탭 4개: Intro / Experience / Skills & Tools / Awards
- Experience: 현직 대표 + 강사 이력 + 일본 애니메이션 작화 경력
- Awards: 2017~2023 공모전 수상 이력 12건

**③ 프로젝트 의뢰 모달 (Contact Form)**
- 이름, 이메일, 연락처, 프로젝트 유형, 예산, 마감일, 설명
- Web3Forms API로 실제 이메일 전송
- 전송 성공/실패 상태 표시

### 디자인 시스템
- **Primary Color:** `#143de7` (파랑)
- **Secondary Color:** `#ab3525` (빨강)
- **Accent:** `#ffe173` (노랑)
- **Charcoal:** `#363636` (기본 텍스트/테두리)
- **Background:** `#fbf9f8` (아이보리)
- **Border Style:** 3px solid #363636 (네오브루탈리즘)
- **Button Style:** offset shadow 효과 (btn-offset)
- **Font:** Sora (헤드라인) + Inter (본문)
- **Radius:** 최소화 (0.125rem) — 각진 디자인 지향

---

## 제작된 프로그램 / 프로젝트

### MarkMind — AI 북마크 정리 서비스
- **분류:** AI Vibe Coding / Web App
- **기술:** AI 기반 북마크 자동 분류
- **특징:** 저장한 링크를 AI가 분석해 카테고리별 자동 정리, 반응형 웹
- **제작 방식:** 디자인부터 개발까지 AI Vibe Coding으로 구현
- **링크:** [markmind-nu.vercel.app](https://markmind-nu.vercel.app)
- **상세자료:** `images/AI Coding Development/detail/MarkMind - AI 북마크 정리.pdf`

### 그대로 짜낸 순수 석류 100% — 패키지 디자인
- **분류:** Package Design
- **연도:** 2025
- **특징:** 첨가물 없는 프리미엄 석류 주스 브랜드 패키지, 석류 일러스트 + 화이트 베이스로 '순수함' 시각화

### Felpen Friends — 캐릭터 IP
- **분류:** Character Design
- **연도:** 2024
- **특징:** 오리지널 캐릭터 IP 개발, 고유 세계관/성격 설계, 컬러 시스템/표정 가이드/포즈 라이브러리 포함
- **링크:** [블로그 바로가기](https://blog.naver.com/zhsksdhahxp/221873859620)

### 커피도시 부산 BI 로고 디자인
- **분류:** Brand Identity
- **연도:** 2024
- **특징:** 부산의 바다·항구·커피 문화를 로고에 함축, 굿즈 및 다양한 매체에 적용 가능한 브랜드 시스템
- **링크:** [블로그 바로가기](https://blog.naver.com/zhsksdhahxp/222727035178)

### 펠펜프렌즈 포트폴리오 웹사이트 (본 프로젝트)
- **분류:** AI Vibe Coding / Web
- **연도:** 2026
- **기술:** HTML5, Tailwind CSS, Vanilla JS, Web3Forms
- **제작 방식:** Claude AI + Claude Code (AI Vibe Coding)
- **특징:** 빌드 도구 없는 경량 싱글 페이지, 네오브루탈리즘 디자인, 모달 3종, 문의 폼 연동

---

## 로컬 실행 방법

```bash
# 저장소 클론
git clone https://github.com/guhakim/felpen-Friends-Portfolio.git

# 브라우저에서 직접 열기
open index.html
```

별도 서버나 패키지 설치 없이 `index.html`을 브라우저에서 바로 열면 됩니다.

---

## 개발 기획 및 히스토리

| 날짜 | 내용 |
|------|------|
| 2026-05-30 | 이미지 폴더 구조 설계 및 초기 파일 생성 |
| 2026-05-31 | 포트폴리오 사이트 전체 제작 완료 (index.html) |
| 2026-05-31 | Framer 코드 컴포넌트 버전 제작 (FelpenPortfolio.tsx) |
| 2026-05-31 22:05 | 최종 백업 생성 (portfolio_backup_20260531_2205.zip) |
| 2026-06-02 | GitHub 저장소 등록 및 README 작성 |
| 2026-06-02 | 석류 패키지 메인 이미지 교체 (png → jpeg) |
| 2026-06-02 | 캐릭터 메인 이미지 교체 (820×820px 신규 버전) |
| 2026-06-02 | 로고 메인 이미지 교체 (커피도시 부산 BI 신규 버전) |
| 2026-06-02 | More Work 섹션 카테고리 라벨 영문 통일 (Illustration, AI, Package, Logo, Character 등) |

---

## 제작자 소개

**펠펜프렌즈 (Felpen Friends)**  
브랜드에 생명을 불어넣는 디자이너이자, AI와 함께 코드로 세상을 바꾸는 바이브 코더.

- 일본 TV 애니메이션 원화/동화 작화 경력 (나루토, 원피스, 도라에몽, 공각기동대 외)
- SBS 아카데미 아트웍 드로잉 강사
- 2023 패스핵 메이커톤 대상, Big Data Hackathon 대상 외 다수 수상
- 제주 웹툰 캠퍼스 입주 기업 선정

---

© 2025 Felpen Friends. All rights reserved.
