export default {
    layout: 'default',
    data() {
        return {
            departments: [
                { name: '개발팀', color: '#0052CC', members: [
                    { name: '홍길동', initial: '홍', position: '팀장' },
                    { name: '김민수', initial: '김', position: '시니어 개발자' },
                    { name: '이서연', initial: '이', position: '프론트엔드 개발자' },
                    { name: '정하은', initial: '정', position: '주니어 개발자' }
                ]},
                { name: '기획팀', color: '#00875A', members: [
                    { name: '장영실', initial: '장', position: '팀장' },
                    { name: '최유진', initial: '최', position: '서비스 기획자' },
                    { name: '한지민', initial: '한', position: '기획자' }
                ]},
                { name: 'QA팀', color: '#FF991F', members: [
                    { name: '이순신', initial: '이', position: '팀장' },
                    { name: '박지훈', initial: '박', position: 'QA 엔지니어' }
                ]},
                { name: '경영지원팀', color: '#6554C0', members: [
                    { name: '유관순', initial: '유', position: '팀장' },
                    { name: '신사임당', initial: '신', position: '인사 담당' },
                    { name: '세종', initial: '세', position: '재무 담당' }
                ]}
            ]
        };
    }
};
