export default {
    layout: 'default',
    data() {
        return {
            selectedMember: 'all',
            members: [
                { name: '김민수', initial: '김', color: '#0052CC' },
                { name: '이서연', initial: '이', color: '#00875A' },
                { name: '박지훈', initial: '박', color: '#FF991F' },
                { name: '최유진', initial: '최', color: '#DE350B' }
            ],
            schedules: [
                { id: 1, date: '03-09', time: '09:30', title: '주간 팀 미팅', member: '김민수', initial: '김', avatarColor: '#0052CC', location: '회의실 A' },
                { id: 2, date: '03-09', time: '14:00', title: 'UI 디자인 리뷰', member: '이서연', initial: '이', avatarColor: '#00875A', location: '화상' },
                { id: 3, date: '03-10', time: '10:00', title: 'QA 테스트', member: '박지훈', initial: '박', avatarColor: '#FF991F', location: '개발팀' },
                { id: 4, date: '03-10', time: '15:00', title: '기획 회의', member: '최유진', initial: '최', avatarColor: '#DE350B', location: '회의실 B' },
                { id: 5, date: '03-11', time: '09:00', title: '스프린트 플래닝', member: '김민수', initial: '김', avatarColor: '#0052CC', location: '대회의실' },
                { id: 6, date: '03-12', time: '11:00', title: '코드 리뷰', member: '이서연', initial: '이', avatarColor: '#00875A', location: '개발팀' }
            ]
        };
    },
    computed: {
        filteredSchedules() {
            if (this.selectedMember === 'all') return this.schedules;
            return this.schedules.filter(s => s.member === this.selectedMember);
        }
    }
};
