# Living Lab (자취연구소) 💬
2024년 멀티캠퍼스 채용연계 풀스택 개발자 부트캠프 (스프링 & 리액트)
- 프로젝트 주제 : 1인 가구 및 자취생들을 위한 정보 공유 커뮤니티
- 배포주소 : https://livinglab2.kro.kr:22222/ (배포 종료)

# 목차
1. 프로젝트 소개
2. 개발 기간
3. 멤버 구성
4. 개발 환경
5. 프로젝트 구조
6. 프로젝트 아키텍처
- 백엔드 설계
- 채팅 기능 설계
- ERD 설계
7. 시연 영상
8. 화면 별 기능 설명

## 1. 프로젝트 소개
- 주제 : 1인 가구 및 자취생들을 위한 정보공유 커뮤니티
- 목적 
  - 1인 가구들이 서로 연결되고 소통할 수 있는 공간을 제공하여 사회적 고립감 해소 <br>
  - 공동 관심사를 기반으로 한 다양한 온/오프라인 이벤트 참여  <br>
  - 실시간 채팅을 통해 회원들이 주도적으로 참여하고 운영할 수 있는 지속 가능한 커뮤니티 구축  <br>
- 주요기능
  - 간편한 로그인 기능(소셜 로그인)
  - 사용자 위치 기반 주변 편의시설 정보 추천 (검색, 지도 API)
  - 사용자 위치 기반 근처 자취생들간 매칭되어 공동구매, 동네모임, 동네장터 활성화 (참여하기 기능을 통한 매칭)
  - 사용자 위치 기반 근처 자취방 정보 공유 및 단기 임대
  - 웹소켓을 활용한 커뮤니티 이용자간의 개인/단체채팅 기능

## 2. 개발 기간
- 프로젝트 일정 : 2024.05.10 ~ 2024.07.08
- 프로젝트 발표 : 2024.07.08

## 3. 팀원 구성 
- 김준현 (팀장) : 공동구매, 동네 모임 참여하기 기능 API 개발, OAuth 2.0을 이용한 소셜 로그인 개발, 실시간 위치 기반 지도 기능 개발
- 이정운 (팀원) : 웹소켓을 활용한 채팅 기능 API 개발, 배포 환경 구축
- 최영은 (팀원) : 커뮤니티 게시판 CRUD 기능 API 개발 및 화면 구현, 마이페이지 화면 구현
- 안정호 (팀원) : 홈 디자인 설계, 커뮤니티 상세페이지 구현
- 유우상 (팀원) : 자취방 쉐어 페이지 CRUD 기능 API 개발 및 화면 구현

## 4. 개발환경
- BackEnd : Java 17, SpringBoot 3.2.5, Spring Data JPA, MySQL
- FrontEnd : React 18, Tailwind CSS, Redux, JavaScript, CSS
  ### 관련 기술
    1. 상태 관리  <br>
      - Redux Toolkit 사용  <br>
        - @reduxjs/toolkit을 통한 상태 관리 구현  <br>
        - Slice 패턴을 사용하여 상태 로직 모듈화 (loginSlice 등)
        - configureStore를 통한 스토어 설정
    2. 라우팅  <br>
      - React Router v6 사용  <br>
        - createBrowserRouter를 사용한 선언적 라우팅  <br>
        - 코드 스플리팅과 결합된 라우팅 구조  <br>
        - 중첩 라우팅 (Nested Routes) 적극 활용  <br>
    3. 코드 최적화  <br>
      - React.lazy()와 Suspense 사용  <br>
        - 동적 임포트를 통한 코드 스플리팅  <br>
        - 컴포넌트 레벨의 지연 로딩 구현  <br>
        - 로딩 상태 처리를 위한 Suspense 활용  <br>
    4. 커스텀 훅  <br>
      - 다수의 커스텀 훅 구현  <br>
        - useCustomLogin : 로그인 관련 로직  <br>
        - useCustomMove : 페이지 이동 관련 로직  <br>
        - useCustomMyPage : 마이페이지 관련 로직  <br>
        - 기타 도메인별 커스텀 훅들  <br>
    5. API 통신  <br>
      - 도메인별로 분리된 API 모듈 구조  <br>
      - RESTful API 클라이언트 구현  <br>
      - 소셜 로그인 (카카오) 통합  <br>
    6. 프로젝트 구조  <br>
      - 기능별 모듈화된 구조 (components, pages, layouts 등)  <br>
      - 재사용 가능한 컴포넌트 아키텍처  <br>
      - 유틸리티 함수들의 분리  <br>

## 5. 프로젝트 구조
```
LivingLab
├── front                    # 프론트엔드 (React)
│   └── lab
│       ├── public          # 정적 파일
│       ├── src             # React 소스 코드
│       │   ├── api        # API 통신 관련 코드
│       │   ├── components # 재사용 가능한 컴포넌트
│       │   ├── hooks      # 커스텀 훅
│       │   ├── layouts    # 레이아웃 컴포넌트
│       │   ├── pages      # 페이지 컴포넌트
│       │   ├── resources  # 리소스 파일 (이미지 등)
│       │   ├── router     # 라우팅 설정
│       │   ├── slices     # Redux 슬라이스
│       │   ├── util       # 유틸리티 함수
│       │   ├── App.js     # 앱 루트 컴포넌트
│       │   └── store.js   # Redux 스토어 설정
│       ├── package.json    # 프론트엔드 의존성 관리
│       └── tailwind.config.js # Tailwind CSS 설정
│
├── back                     # 백엔드 (Spring Boot)
│   └── lab
│       ├── src
│       │   └── main
│       │       ├── java    # Java 소스 코드
│       │       │   └── com
│       │       │       └── example
│       │       │           └── lab
│       │       │               ├── config     # 설정 파일
│       │       │               ├── controller # API 컨트롤러
│       │       │               ├── domain     # 도메인 모델
│       │       │               ├── dto        # 데이터 전송 객체
│       │       │               ├── repository # 데이터 접근 계층
│       │       │               └── service    # 비즈니스 로직
│       │       └── resources  # 설정 파일 및 리소스
│       ├── build.gradle    # 백엔드 의존성 관리
│       └── upload          # 파일 업로드 디렉토리
│
└── upload                   # 공통 업로드 디렉토리
```

## 6. 프로젝트 아키텍처
### 백엔드 설계
![image](https://github.com/user-attachments/assets/15e8d3a5-a1a8-4f29-bf6e-aa4c5bc6b1e7)

### 채팅기능 설게
![image](https://github.com/user-attachments/assets/424147b6-5690-4475-994d-6d701e4b7133)

### ERD 설계
![image](https://github.com/user-attachments/assets/89d82eab-eab4-4590-971a-971405162979)

## 7. [시연영상](https://www.youtube.com/watch?v=_C6SEo7vG4U)
![image](https://github.com/user-attachments/assets/8e3cbed1-9c05-4db2-be18-d5581880cfa7)

## 8. 화면 별 기능 설명
| 홈화면 | 로그인 화면 | 
|----------|----------|
| <img src="https://github.com/user-attachments/assets/b03a4c81-da53-44d3-b148-63f841d78361" width="500"/> | <img src="https://github.com/user-attachments/assets/74f9341b-fe93-4dd5-8761-5a310705129d" width="500"/> 

| 공동구매 목록 | 상세페이지 |
|---------------|------------|
| <img src="https://github.com/user-attachments/assets/74fefaf1-4102-4537-b2a7-17df6239ce46" width="500"/> <br> - 최신순, 마감임박 순, 거리순, 좋아요 순 정렬 기능 존재 <br> - #배달음식, #생필품, #식료품, #가구/가전, #기타로 구분하여 게시물 조회 | <img src="https://github.com/user-attachments/assets/f743a7f7-1980-405d-846e-024d7e66c580" width="500"/> <br> - 작성자가 글 작성을 하면 채팅방이 생성되고 자동으로 참여 <br> - 그 외의 인원들은 참여하기 버튼을 눌러 참여 및 채팅방 입장 <br> - 참여 x 버튼을 누르면 참여하지 않게 되고, 채팅방에서 퇴장 <br> - 해당 게시물에서 공동 구매 장소를 설정하면 지도로 나타내어 한눈에 확인 <br> - 좋아요 기능을 통해 자신이 저장해놓은 게시물을 마이페이지에서 확인

| 동네모임 목록 | 상세페이지 |
|---------------|------------|
| <img src="https://github.com/user-attachments/assets/65562918-7a09-4ac9-8202-df67efa69ffa" width="1000"/> <br> - 최신순, 마감임박 순, 거리순, 좋아요 순 정렬 기능 존재 <br> - #운동, #문화생활, #반려동물, #취미생활, #기타로 구분하여 게시물 조회 | <img src="https://github.com/user-attachments/assets/f7c2f278-950b-4ee7-a940-c8dda9123f06" width="500"/> <img src="https://github.com/user-attachments/assets/a4fd4273-85c8-47f8-adfa-5f250442d4d8" width="500"/> <br> - 위치 설정을 누르면 현재 실시간 위치 확인<br> - 자리를 옮기면 변경된 실시간 위치가 저장 <br> - 거리순 정렬로 게시물을 보면 반경 5km 내에 작성한 게시물들을 확인 가능

| 자취방 쉐어 목록 | 상세페이지 |
|---------------|------------|
| <img src="https://github.com/user-attachments/assets/bd1ce44b-4373-4062-8e0b-ca974136df3d" width="500"/> <br> - 최신순, 낮은 가격 순, 좋아요 순 정렬 기능 존재 <br> - 낮은 가격 순은 최적 1박 비용부터 시작되며 전체 몇 박을 나눈 값. <br> - 검색창에서 지역(예: 강남구, 논현동 등)을 검색 후, 해당 지역의 매물 확인 | <img src="https://github.com/user-attachments/assets/0248c0e8-7687-49e1-9e03-25f176363828" width="500"/> <br> - 해당 자취방에 대한 상세한 정보 확인 <br> - 자취방 주변 은행, 마트, 약국, 주유소, 카페, 편의점 확인 <br> - 문의하기를 통한 1:1 채팅 기능 존재


| 마이페이지 | 채팅 모음 |
|---------------|------------|
| <img src="https://github.com/user-attachments/assets/d5fa470a-6bff-4f9f-9926-3248e65ad550" width="500"/> <br> - 자신이 작성한 게시글, 댓글 모음 | <img src="https://github.com/user-attachments/assets/7697ae94-154f-4111-8b54-d9abd585d19d" width="500"/> <br> - 작성글 및 참여하기를 통해 생성된 채팅방 모음 <br> - 일대일 채팅 및 단체 채팅방 기능

