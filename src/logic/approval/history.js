export default {
    layout: 'default',
    data() {
        return {
            currentFilter: 'all',
            filters: [
                { label: '전체', value: 'all' },
                { label: '승인', value: '승인' },
                { label: '대기', value: '대기' },
                { label: '반려', value: '반려' }
            ],
            history: [
                { id: 1, type: '휴가', title: '연차 휴가 (3/20~21)', requester: '박지훈', approver: '관리자', requestDate: '03-08', processDate: null, status: '대기' },
                { id: 2, type: '경비', title: '2월 교통비 청구', requester: '최유진', approver: '관리자', requestDate: '03-01', processDate: '03-02', status: '승인' },
                { id: 3, type: '휴가', title: '반차 (2/10 오전)', requester: '관리자', approver: '홍길동', requestDate: '02-08', processDate: '02-09', status: '승인' },
                { id: 4, type: '구매', title: '키보드 구매 요청', requester: '이서연', approver: '관리자', requestDate: '02-05', processDate: '02-06', status: '승인' },
                { id: 5, type: '야근', title: '1/30 야근 신청', requester: '김민수', approver: '관리자', requestDate: '01-29', processDate: '01-30', status: '승인' },
                { id: 6, type: '출장', title: '대전 출장 (1/25)', requester: '박지훈', approver: '관리자', requestDate: '01-20', processDate: '01-21', status: '반려' }
            ]
        };
    },
    computed: {
        filteredHistory() {
            if (this.currentFilter === 'all') return this.history;
            return this.history.filter(h => h.status === this.currentFilter);
        }
    },
    methods: {
        getTypeClass(type) {
            const map = { '휴가': 'bg-success-subtle text-success', '경비': 'bg-primary-subtle text-primary', '야근': 'bg-warning-subtle text-warning', '출장': 'bg-info-subtle text-info', '구매': 'bg-secondary-subtle text-secondary' };
            return map[type] || 'bg-secondary-subtle text-secondary';
        },
        getStatusClass(status) {
            const map = { '승인': 'bg-success-subtle text-success', '대기': 'bg-warning-subtle text-warning', '반려': 'bg-danger-subtle text-danger' };
            return map[status] || 'bg-secondary-subtle text-secondary';
        }
    }
};
