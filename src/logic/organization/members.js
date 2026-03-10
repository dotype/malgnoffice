export default {
    layout: 'default',
    data() {
        return {
            searchQuery: '',
            members: [
                { id: 1, name: '김대표', initial: '김', color: '#0052CC', department: '경영', position: '대표이사', email: 'ceo@malgnsoft.com', phone: '010-1234-5678', joinDate: '2020-01-01' },
                { id: 2, name: '홍길동', initial: '홍', color: '#0052CC', department: '개발팀', position: '팀장', email: 'hong@malgnsoft.com', phone: '010-2345-6789', joinDate: '2020-03-15' },
                { id: 3, name: '김민수', initial: '김', color: '#0052CC', department: '개발팀', position: '시니어 개발자', email: 'kim@malgnsoft.com', phone: '010-3456-7890', joinDate: '2021-06-01' },
                { id: 4, name: '이서연', initial: '이', color: '#00875A', department: '개발팀', position: '프론트엔드 개발자', email: 'lee@malgnsoft.com', phone: '010-4567-8901', joinDate: '2022-01-10' },
                { id: 5, name: '정하은', initial: '정', color: '#6554C0', department: '개발팀', position: '주니어 개발자', email: 'jung@malgnsoft.com', phone: '010-5678-9012', joinDate: '2024-03-01' },
                { id: 6, name: '장영실', initial: '장', color: '#00875A', department: '기획팀', position: '팀장', email: 'jang@malgnsoft.com', phone: '010-6789-0123', joinDate: '2020-05-20' },
                { id: 7, name: '최유진', initial: '최', color: '#DE350B', department: '기획팀', position: '서비스 기획자', email: 'choi@malgnsoft.com', phone: '010-7890-1234', joinDate: '2022-09-01' },
                { id: 8, name: '이순신', initial: '이', color: '#FF991F', department: 'QA팀', position: '팀장', email: 'yi@malgnsoft.com', phone: '010-8901-2345', joinDate: '2021-01-15' },
                { id: 9, name: '박지훈', initial: '박', color: '#FF991F', department: 'QA팀', position: 'QA 엔지니어', email: 'park@malgnsoft.com', phone: '010-9012-3456', joinDate: '2023-04-01' },
                { id: 10, name: '유관순', initial: '유', color: '#6554C0', department: '경영지원팀', position: '팀장', email: 'yoo@malgnsoft.com', phone: '010-0123-4567', joinDate: '2020-02-01' }
            ]
        };
    },
    computed: {
        filteredMembers() {
            if (!this.searchQuery) return this.members;
            return this.members.filter(m => m.name.includes(this.searchQuery));
        }
    }
};
