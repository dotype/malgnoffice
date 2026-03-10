export default {
    layout: 'default',
    data() {
        return {
            currentTime: '',
            currentDate: new Date().toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' }),
            checkIn: null,
            checkOut: null,
            weekRecords: [
                { date: '03-03 (월)', checkIn: '08:55', checkOut: '18:10', workHours: '9시간 15분', status: '정상' },
                { date: '03-04 (화)', checkIn: '09:02', checkOut: '18:30', workHours: '9시간 28분', status: '정상' },
                { date: '03-05 (수)', checkIn: '09:15', checkOut: '19:00', workHours: '9시간 45분', status: '지각' },
                { date: '03-06 (목)', checkIn: '08:50', checkOut: '18:05', workHours: '9시간 15분', status: '정상' },
                { date: '03-07 (금)', checkIn: '09:00', checkOut: '18:00', workHours: '9시간 0분', status: '정상' }
            ]
        };
    },
    mounted() {
        this.updateTime();
        this._timer = setInterval(() => this.updateTime(), 1000);
    },
    beforeUnmount() {
        clearInterval(this._timer);
    },
    methods: {
        updateTime() {
            this.currentTime = new Date().toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
        },
        handleCheckIn() {
            this.checkIn = new Date().toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' });
        },
        handleCheckOut() {
            this.checkOut = new Date().toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' });
        },
        getStatusClass(status) {
            const map = { '정상': 'bg-success-subtle text-success', '지각': 'bg-danger-subtle text-danger', '조퇴': 'bg-warning-subtle text-warning', '결근': 'bg-danger-subtle text-danger' };
            return map[status] || 'bg-secondary-subtle text-secondary';
        }
    }
};
