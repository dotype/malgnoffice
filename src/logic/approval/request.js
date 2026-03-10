export default {
    layout: 'default',
    data() {
        return {
            form: { type: '', title: '', content: '', approver: '', startDate: '', endDate: '', amount: '' },
            approvers: [
                { id: 1, name: '홍길동', position: '팀장' },
                { id: 2, name: '장영실', position: '부서장' },
                { id: 3, name: '이순신', position: '본부장' }
            ]
        };
    },
    methods: {
        handleSubmit() {
            if (!this.form.type || !this.form.title || !this.form.approver) {
                alert('필수 항목을 모두 입력해주세요.');
                return;
            }
            alert('결재 요청이 완료되었습니다.');
            this.navigateTo('/approval/history');
        }
    }
};
