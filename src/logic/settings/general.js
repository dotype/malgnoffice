export default {
    layout: 'default',
    data() {
        return {
            settings: {
                approvalNotification: true,
                scheduleNotification: true,
                boardNotification: false,
                emailNotification: true,
                workStart: '09:00',
                workEnd: '18:00'
            }
        };
    },
    methods: {
        handleSave() {
            alert('설정이 저장되었습니다.');
        }
    }
};
