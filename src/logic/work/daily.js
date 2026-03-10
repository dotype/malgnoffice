export default {
    layout: 'default',
    data() {
        return {
            showForm: false,
            form: { done: '', doing: '', todo: '', issues: '' },
            reports: [
                { id: 1, author: '관리자', initial: '관', date: '2026-03-09', done: 'API 엔드포인트 구현 완료 (사용자, 결재)', doing: '프론트엔드 대시보드 연동', todo: '테스트 코드 작성' },
                { id: 2, author: '김민수', initial: '김', date: '2026-03-09', done: '서버 모니터링 시스템 세팅', doing: '로그 수집 파이프라인 구축', todo: '알림 연동' },
                { id: 3, author: '이서연', initial: '이', date: '2026-03-09', done: '디자인 시스템 컴포넌트 5개 추가', doing: '반응형 레이아웃 수정', todo: '접근성 검수' }
            ]
        };
    },
    methods: {
        handleSubmit() {
            if (!this.form.done && !this.form.doing) return;
            this.reports.unshift({
                id: Date.now(),
                author: '관리자',
                initial: '관',
                date: new Date().toISOString().slice(0, 10),
                done: this.form.done,
                doing: this.form.doing,
                todo: this.form.todo
            });
            this.form = { done: '', doing: '', todo: '', issues: '' };
            this.showForm = false;
        }
    }
};
