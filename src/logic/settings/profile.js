export default {
    layout: 'default',
    data() {
        return {
            profile: {
                name: '관리자',
                employeeId: 'MS-2020-001',
                email: 'admin@malgnsoft.com',
                phone: '010-1234-5678',
                department: '개발팀',
                position: '팀장',
                role: 'ADMIN'
            }
        };
    },
    methods: {
        handleSave() {
            alert('정보가 저장되었습니다.');
        }
    }
};
