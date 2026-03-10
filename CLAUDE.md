# Malgn Office

## 프로젝트 개요

맑은소프트의 사내 그룹웨어 시스템. 일정관리, 근태관리, 일일업무, 결제관리 등 사내 협업에 필요한 기능을 제공한다.

### 현재 구현 상태

- **로그인**: 이메일/비밀번호 인증, 역할별 로그인(admin, editor, analyst, viewer), 개발모드 지원
- **대시보드(홈)**: 통계 카드, 인코딩 상태, 최근 활동, 인기 동영상 테이블
- **레이아웃**: 헤더(검색, 알림, 사용자 메뉴) + 접이식 사이드바(아코디언 메뉴), 모바일 반응형
- **에러 페이지**: 404, 400, 401, 403, 500 에러 처리

### 재사용 컴포넌트

| 컴포넌트 | 설명 |
|----------|------|
| `DatePicker.js` | 날짜 선택 |
| `FileUpload.js` | 파일 업로드 (진행률 표시) |
| `Table.js` | 데이터 테이블 (정렬, 필터, 페이지네이션) |
| `Sidebar.js` | 네비게이션 사이드바 |
| `Loading.js` | 로딩 인디케이터 |
| `DynamicInclude.js` | 동적 콘텐츠 로더 |
| `HtmlInclude.js` | HTML 콘텐츠 삽입 |

### 설정

- **API 기본 URL**: `/api`
- **개발 모드**: 기본 활성화
- **인증**: localStorage 기반 토큰/사용자 정보 저장
- **사용자 역할**: ADMIN, EDITOR, VIEWER, ANALYST

## 기술 스택

- **프레임워크**: Vue 3 (CDN)
- **라우터**: ViewLogic Router 1.4.0 (파일 기반 라우팅)
- **CSS**: Bootstrap 5.3.3 + 최소한의 커스텀 CSS (`css/base.css`)
- **빌드**: 없음 (정적 파일 서빙)

## 프로젝트 구조

```
project/
├── index.html              # 진입점 (Vue, ViewLogic, Bootstrap CDN 로드)
├── css/base.css            # 커스텀 CSS (Bootstrap 우선, 최소화)
├── src/
│   ├── views/              # HTML 템플릿 (CSS 금지)
│   │   ├── layout/         # 레이아웃 템플릿
│   │   └── {page}.html     # 페이지 뷰
│   ├── logic/              # JavaScript 로직
│   │   ├── layout/         # 레이아웃 스크립트
│   │   └── {page}.js       # 페이지 로직
│   └── components/         # 재사용 컴포넌트
├── i18n/                   # 다국어 파일 (선택)
└── docs/                   # 상세 문서
```

## 핵심 규칙

1. **파일 쌍**: `views/{name}.html` ↔ `logic/{name}.js` 반드시 동일 이름
2. **폴더 = 라우트**: `goals/my-goals.html` → `#/goals/my-goals`
3. **CSS**: HTML에 `<style>` 태그 금지, 모든 CSS는 `css/base.css`
4. **라우팅**: `this.navigateTo()` 사용, `window.location` 직접 조작 금지
5. **비동기**: `async/await` 사용, `Promise.then/catch` 금지
6. **레이아웃**: `layout: null` 사용, `layout: false` 금지

## 상세 문서

기능별 상세 문서는 `docs/` 폴더 참조:

| 문서                                                     | 내용                                                       |
| -------------------------------------------------------- | ---------------------------------------------------------- |
| [docs/routing.md](docs/routing.md)                       | 파일 기반 라우팅, 페이지 이동, 파라미터                    |
| [docs/data-fetching.md](docs/data-fetching.md)           | dataURL 자동 로딩, 수동 API 호출                           |
| [docs/forms.md](docs/forms.md)                           | 명령형/선언적 폼 처리                                      |
| [docs/api.md](docs/api.md)                               | $api 메서드 (GET/POST/PUT/DELETE), 에러 처리               |
| [docs/auth.md](docs/auth.md)                             | 인증 설정, 로그인/로그아웃, 토큰 관리                      |
| [docs/i18n.md](docs/i18n.md)                             | 다국어 설정, 메시지 파일, 언어 전환                        |
| [docs/components.md](docs/components.md)                 | 컴포넌트 생성/등록                                         |
| [docs/components-builtin.md](docs/components-builtin.md) | 내장 컴포넌트 상세 (DatePicker, Table, Sidebar 등)         |
| [docs/layout.md](docs/layout.md)                         | 레이아웃 시스템, 레이아웃 지정                             |
| [docs/patterns.md](docs/patterns.md)                     | 공통 패턴 (로딩 상태, 에러 처리, 폼 밸리데이션, 검색/필터) |
| [docs/advanced.md](docs/advanced.md)                     | 라이프사이클, computed, watch, 캐싱, 상태 관리             |
| [docs/configuration.md](docs/configuration.md)           | ViewLogicRouter 전체 설정 옵션                             |

## 커맨드

다음 커맨드를 사용하여 빠르게 작업할 수 있습니다:

| 커맨드              | 설명                          |
| ------------------- | ----------------------------- |
| `/create-page`      | 새 페이지 (view + logic) 생성 |
| `/create-component` | 새 재사용 컴포넌트 생성       |
| `/create-layout`    | 새 레이아웃 생성              |

## 템플릿

`.claude/templates/` 폴더에 변형 패턴 포함 템플릿 문서가 있습니다:

| 템플릿         | 용도                                       |
| -------------- | ------------------------------------------ |
| `page.md`      | 페이지 (정적, 목록, 상세, 폼 4가지 변형)   |
| `component.md` | 컴포넌트 (기본, 슬롯, v-model 3가지 변형)  |
| `layout.md`    | 레이아웃 (네비게이션, 사이드바 2가지 변형) |

## 개발 서버

```bash
python -m http.server 8000
# 또는 VS Code Live Server (포트 5502)
```

## 추가 리소스

- **GitHub**: https://github.com/hopegiver/viewlogic
- **npm**: https://www.npmjs.com/package/viewlogic
