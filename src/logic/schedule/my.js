export default {
    layout: 'default',
    data() {
        return {
            showAddForm: false,
            currentFilter: 'all',
            filters: [
                { label: '전체', value: 'all' },
                { label: '회의', value: '회의' },
                { label: '업무', value: '업무' },
                { label: '개인', value: '개인' }
            ],
            schedules: [
                { id: 1, title: '주간 팀 미팅', date: '03-09', time: '09:30', location: '3층 회의실 A', category: '회의', color: '#0052CC' },
                { id: 2, title: '클라이언트 미팅', date: '03-09', time: '14:00', location: '화상 (Zoom)', category: '회의', color: '#0052CC' },
                { id: 3, title: 'API 문서 작성', date: '03-10', time: '10:00', location: '-', category: '업무', color: '#00875A' },
                { id: 4, title: '점심 약속', date: '03-11', time: '12:00', location: '강남역', category: '개인', color: '#FF991F' },
                { id: 5, title: '스프린트 리뷰', date: '03-12', time: '15:00', location: '5층 대회의실', category: '회의', color: '#0052CC' },
                { id: 6, title: '코드 리팩토링', date: '03-13', time: '09:00', location: '-', category: '업무', color: '#00875A' }
            ]
        };
    },
    computed: {
        filteredSchedules() {
            if (this.currentFilter === 'all') return this.schedules;
            return this.schedules.filter(s => s.category === this.currentFilter);
        }
    },
    methods: {
        getCategoryClass(category) {
            const map = { '회의': 'bg-primary-subtle text-primary', '업무': 'bg-success-subtle text-success', '개인': 'bg-warning-subtle text-warning' };
            return map[category] || 'bg-secondary-subtle text-secondary';
        }
    }
};
