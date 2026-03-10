export default {
    layout: 'default',

    data() {
        return {
            userName: '관리자',
            today: new Date().toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' }),
            attendance: {
                checkIn: null,
                checkOut: null
            },
            summary: {
                pendingApprovals: 5,
                todaySchedules: 3,
                remainingLeaves: 12,
                totalLeaves: 15
            },
            todaySchedules: [
                { id: 1, time: '09:30', title: '주간 팀 미팅', location: '3층 회의실 A', color: '#0052CC' },
                { id: 2, time: '14:00', title: '클라이언트 미팅', location: '화상 (Zoom)', color: '#00875A' },
                { id: 3, time: '16:30', title: '코드 리뷰', location: '개발팀 자리', color: '#FF991F' }
            ],
            notices: [
                { id: 1, title: '2026년 상반기 워크샵 안내', date: '03-07', important: true },
                { id: 2, title: '사내 보안 교육 필수 이수 안내', date: '03-05', important: true },
                { id: 3, title: '3월 급여 지급일 변경 안내', date: '03-03', important: false },
                { id: 4, title: '신규 복지 제도 시행 안내', date: '02-28', important: false }
            ],
            teamTasks: [
                { id: 1, name: '김민수', initial: '김', avatarColor: '#0052CC', task: 'API 서버 리팩토링', progress: 85, status: '진행중' },
                { id: 2, name: '이서연', initial: '이', avatarColor: '#00875A', task: 'UI 디자인 시스템 구축', progress: 60, status: '진행중' },
                { id: 3, name: '박지훈', initial: '박', avatarColor: '#FF991F', task: '결제 모듈 테스트', progress: 100, status: '완료' },
                { id: 4, name: '최유진', initial: '최', avatarColor: '#DE350B', task: '고객 대시보드 개발', progress: 30, status: '진행중' },
                { id: 5, name: '정하은', initial: '정', avatarColor: '#6554C0', task: '문서 정리 및 배포', progress: 0, status: '대기' }
            ],
            recentActivities: [
                { id: 1, icon: 'bi bi-file-earmark-check', message: '박지훈님이 휴가 신청을 결재 요청했습니다.', time: '10분 전' },
                { id: 2, icon: 'bi bi-journal-text', message: '이서연님이 일일업무를 등록했습니다.', time: '30분 전' },
                { id: 3, icon: 'bi bi-chat-dots', message: '자유게시판에 새 글이 등록되었습니다.', time: '1시간 전' },
                { id: 4, icon: 'bi bi-calendar-plus', message: '주간 팀 미팅이 등록되었습니다.', time: '2시간 전' },
                { id: 5, icon: 'bi bi-megaphone', message: '새 공지사항: 상반기 워크샵 안내', time: '3시간 전' }
            ]
        };
    },

    async mounted() {
        // TODO: API에서 대시보드 데이터 로드
    },

    methods: {
        handleCheckIn() {
            this.attendance.checkIn = new Date().toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' });
        },
        handleCheckOut() {
            this.attendance.checkOut = new Date().toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' });
        },
        getStatusClass(status) {
            const map = {
                '진행중': 'bg-primary-subtle text-primary',
                '완료': 'bg-success-subtle text-success',
                '대기': 'bg-secondary-subtle text-secondary'
            };
            return map[status] || 'bg-secondary-subtle text-secondary';
        }
    }
};
