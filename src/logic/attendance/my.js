export default {
    layout: 'default',
    data() {
        return {
            currentMonth: new Date().getMonth() + 1,
            monthlySummary: { workDays: 18, totalHours: 162, late: 1, earlyLeave: 0 },
            records: [
                { date: '03-07 (금)', checkIn: '09:00', checkOut: '18:00', hours: '9h 0m', status: '정상' },
                { date: '03-06 (목)', checkIn: '08:50', checkOut: '18:05', hours: '9h 15m', status: '정상' },
                { date: '03-05 (수)', checkIn: '09:15', checkOut: '19:00', hours: '9h 45m', status: '지각' },
                { date: '03-04 (화)', checkIn: '09:02', checkOut: '18:30', hours: '9h 28m', status: '정상' },
                { date: '03-03 (월)', checkIn: '08:55', checkOut: '18:10', hours: '9h 15m', status: '정상' }
            ]
        };
    },
    methods: {
        getStatusClass(status) {
            const map = { '정상': 'bg-success-subtle text-success', '지각': 'bg-danger-subtle text-danger', '조퇴': 'bg-warning-subtle text-warning' };
            return map[status] || 'bg-secondary-subtle text-secondary';
        }
    }
};
