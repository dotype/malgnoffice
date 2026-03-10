export default {
    layout: 'default',
    data() {
        return {
            vacationSummary: { total: 15, used: 3, remaining: 12 },
            vacationHistory: [
                { id: 1, period: '02-10 ~ 02-11', type: '연차', days: 2, reason: '개인 사유', status: '승인' },
                { id: 2, period: '01-27', type: '반차(오전)', days: 0.5, reason: '병원 방문', status: '승인' },
                { id: 3, period: '01-15', type: '반차(오후)', days: 0.5, reason: '가족 행사', status: '승인' },
                { id: 4, period: '03-20 ~ 03-21', type: '연차', days: 2, reason: '여행', status: '대기' }
            ]
        };
    },
    methods: {
        getStatusClass(status) {
            const map = { '승인': 'bg-success-subtle text-success', '대기': 'bg-warning-subtle text-warning', '반려': 'bg-danger-subtle text-danger' };
            return map[status] || 'bg-secondary-subtle text-secondary';
        }
    }
};
