export default {
    layout: 'default',
    data() {
        return {
            teamMembers: [
                { name: '김민수', initial: '김', color: '#0052CC', position: '백엔드 개발자', tasks: [
                    { title: 'API 서버 리팩토링', progress: 85 },
                    { title: 'DB 마이그레이션', progress: 100 },
                    { title: '모니터링 대시보드', progress: 40 }
                ]},
                { name: '이서연', initial: '이', color: '#00875A', position: '프론트엔드 개발자', tasks: [
                    { title: 'UI 디자인 시스템', progress: 60 },
                    { title: '반응형 레이아웃', progress: 90 },
                    { title: '접근성 검수', progress: 20 }
                ]},
                { name: '박지훈', initial: '박', color: '#FF991F', position: 'QA 엔지니어', tasks: [
                    { title: '결제 모듈 테스트', progress: 100 },
                    { title: '회귀 테스트 자동화', progress: 55 }
                ]},
                { name: '최유진', initial: '최', color: '#DE350B', position: '기획자', tasks: [
                    { title: '고객 대시보드 기획', progress: 30 },
                    { title: '요구사항 정리', progress: 70 },
                    { title: '경쟁사 분석', progress: 100 }
                ]}
            ]
        };
    }
};
