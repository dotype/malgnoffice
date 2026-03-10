export default {
    layout: 'default',
    data() {
        return {
            pendingItems: [
                { id: 1, type: '휴가', title: '연차 휴가 신청 (3/20~3/21)', content: '개인 사유로 연차 사용합니다.', requester: '박지훈', initial: '박', avatarColor: '#FF991F', date: '2026-03-08' },
                { id: 2, type: '경비', title: '3월 교통비 청구', content: '고객사 미팅 출장 택시비 35,000원', requester: '최유진', initial: '최', avatarColor: '#DE350B', date: '2026-03-07' },
                { id: 3, type: '구매', title: '모니터 구매 요청', content: '개발용 32인치 모니터 1대 (550,000원)', requester: '김민수', initial: '김', avatarColor: '#0052CC', date: '2026-03-06' },
                { id: 4, type: '야근', title: '3/10 야근 신청', content: '배포 일정으로 인한 야근 예정', requester: '이서연', initial: '이', avatarColor: '#00875A', date: '2026-03-06' },
                { id: 5, type: '출장', title: '부산 고객사 출장 (3/15)', content: 'ABC 고객사 현장 미팅', requester: '박지훈', initial: '박', avatarColor: '#FF991F', date: '2026-03-05' }
            ]
        };
    },
    methods: {
        handleApprove(id) {
            if (confirm('승인하시겠습니까?')) {
                this.pendingItems = this.pendingItems.filter(item => item.id !== id);
            }
        },
        handleReject(id) {
            if (confirm('반려하시겠습니까?')) {
                this.pendingItems = this.pendingItems.filter(item => item.id !== id);
            }
        },
        getTypeClass(type) {
            const map = { '휴가': 'bg-success-subtle text-success', '경비': 'bg-primary-subtle text-primary', '야근': 'bg-warning-subtle text-warning', '출장': 'bg-info-subtle text-info', '구매': 'bg-secondary-subtle text-secondary' };
            return map[type] || 'bg-secondary-subtle text-secondary';
        }
    }
};
