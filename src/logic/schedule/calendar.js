export default {
    layout: 'default',
    data() {
        const now = new Date();
        const y = now.getFullYear();
        const m = now.getMonth() + 1;
        const dayNames = ['일', '월', '화', '수', '목', '금', '토'];

        return {
            currentYear: y,
            currentMonth: m,
            todayLabel: `${y}년 ${String(m).padStart(2, '0')}월 ${String(now.getDate()).padStart(2, '0')}일 (${dayNames[now.getDay()]})`,
            categories: [
                { key: 'schedule', label: '일정', color: '#2962FF', visible: true },
                { key: 'education', label: '교육', color: '#FF6D00', visible: true },
                { key: 'vacation', label: '휴가', color: '#00C853', visible: true }
            ],
            // 여러 날 걸치는 이벤트 (startDate ~ endDate)
            multiDayEvents: [
                { id: 'm1', startDate: `${y}-03-01`, endDate: `${y}-03-01`, title: '삼일절', style: 'holiday' },
                { id: 'm2', startDate: `${y}-03-02`, endDate: `${y}-03-02`, title: '대체 휴일', style: 'holiday' },
                { id: 'm3', startDate: `${y}-03-09`, endDate: `${y}-03-11`, title: '주승윤 휴가', style: 'vacation', category: 'vacation' },
                { id: 'm4', startDate: `${y}-03-09`, endDate: `${y}-03-10`, title: '최현희 예비군', style: 'military', category: 'vacation' },
                { id: 'm5', startDate: `${y}-03-13`, endDate: `${y}-03-13`, title: '주혜린 건강검진', style: 'vacation', category: 'vacation' },
                { id: 'm6', startDate: `${y}-03-13`, endDate: `${y}-03-14`, title: '이재경 예비군', style: 'military', category: 'vacation' },
                { id: 'm7', startDate: `${y}-03-25`, endDate: `${y}-03-26`, title: '공공팀 워케이션', style: 'highlight' },
                { id: 'm8', startDate: `${y}-03-27`, endDate: `${y}-03-27`, title: '월간재점검데이', style: 'highlight' },
                { id: 'm9', startDate: `${y}-03-19`, endDate: `${y}-03-20`, title: '이우림 휴가', style: 'vacation', category: 'vacation' },
                { id: 'm10', startDate: `${y}-03-16`, endDate: `${y}-03-17`, title: '권지혜 연차', style: 'vacation', category: 'vacation' },
                { id: 'm11', startDate: `${y}-04-01`, endDate: `${y}-04-01`, title: '★ 전사정례회의', style: 'highlight' },
                { id: 'm12', startDate: `${y}-04-02`, endDate: `${y}-04-02`, title: '최현희 오후반차', style: 'vacation', category: 'vacation' },
            ],
            // 단일 이벤트 (하루 안에 끝나는 것)
            events: [
                // 휴가 (단일)
                { id: 'v1', date: `${y}-03-03`, title: '박재현 연차', type: 'vacation', subtype: 'full' },
                { id: 'v2', date: `${y}-03-03`, title: '조승래 연차', type: 'vacation', subtype: 'full' },
                { id: 'v3', date: `${y}-03-03`, title: '서상민 오전반차', type: 'vacation', subtype: 'am' },
                { id: 'v4', date: `${y}-03-03`, title: '조도식 연차', type: 'vacation', subtype: 'full' },
                { id: 'v5', date: `${y}-03-04`, title: '이윤석 연차', type: 'vacation', subtype: 'full' },
                { id: 'v6', date: `${y}-03-06`, title: '김채린 연차', type: 'vacation', subtype: 'full' },
                { id: 'v7', date: `${y}-03-06`, title: '조승래 건강검진', type: 'vacation', subtype: 'full' },
                { id: 'v8', date: `${y}-03-09`, title: '이정은 오후반차', type: 'vacation', subtype: 'pm' },
                { id: 'v9', date: `${y}-03-09`, title: '나혜진 오후반차', type: 'vacation', subtype: 'pm' },
                { id: 'v10', date: `${y}-03-10`, title: '이준호 오전반차', type: 'vacation', subtype: 'am' },
                { id: 'v11', date: `${y}-03-11`, title: '이갑혜 오전반차', type: 'vacation', subtype: 'am' },
                { id: 'v12', date: `${y}-03-12`, title: '이윤석 연차', type: 'vacation', subtype: 'full' },
                { id: 'v13', date: `${y}-03-13`, title: '권지혜 연차', type: 'vacation', subtype: 'full' },
                { id: 'v14', date: `${y}-03-13`, title: '안병훈 연차', type: 'vacation', subtype: 'full' },
                { id: 'v15', date: `${y}-03-13`, title: '최현희 연차', type: 'vacation', subtype: 'full' },
                { id: 'v16', date: `${y}-03-13`, title: '김성은 연차', type: 'vacation', subtype: 'full' },
                { id: 'v17', date: `${y}-03-17`, title: '조승래 연차', type: 'vacation', subtype: 'full' },
                { id: 'v18', date: `${y}-03-18`, title: '김경은 연차', type: 'vacation', subtype: 'full' },
                { id: 'v19', date: `${y}-03-20`, title: '최현희 오후반차', type: 'vacation', subtype: 'pm' },
                { id: 'v20', date: `${y}-03-20`, title: '임기돈 건강검진', type: 'vacation', subtype: 'full' },
                { id: 'v21', date: `${y}-03-20`, title: '임기돈 오후반차', type: 'vacation', subtype: 'pm' },
                { id: 'v22', date: `${y}-03-20`, title: '전혜린 연차', type: 'vacation', subtype: 'full' },
                { id: 'v23', date: `${y}-03-24`, title: '장태우 연차', type: 'vacation', subtype: 'full' },
                { id: 'v24', date: `${y}-03-24`, title: '최현희 오후반차', type: 'vacation', subtype: 'pm' },
                { id: 'v25', date: `${y}-03-25`, title: '최현희 오전반차', type: 'vacation', subtype: 'am' },
                { id: 'v26', date: `${y}-03-26`, title: '권지혜 오전반차', type: 'vacation', subtype: 'am' },
                { id: 'v27', date: `${y}-03-20`, title: '김서현 휴가', type: 'vacation', subtype: 'full' },

                // 일정
                { id: 's1', date: `${y}-03-04`, title: '★ 전사정례회의', type: 'schedule' },
                { id: 's2', date: `${y}-03-05`, title: '09:00 회의 - 크리에이티브LMS', type: 'schedule' },
                { id: 's3', date: `${y}-03-05`, title: '09:30 주간 학습 #6 현장클리닉', type: 'schedule' },
                { id: 's4', date: `${y}-03-05`, title: '13:30 외부미팅 - KAMCO', type: 'schedule' },
                { id: 's5', date: `${y}-03-06`, title: '10:00 외부 미팅 보안점 상이 인...', type: 'schedule' },
                { id: 's6', date: `${y}-03-06`, title: '10:00 외부미팅 - 정보산업진흥원', type: 'schedule' },
                { id: 's7', date: `${y}-03-09`, title: '10:30 경영진 회의', type: 'schedule' },
                { id: 's8', date: `${y}-03-09`, title: '14:00 회의 - 크리에이티브LMS(...', type: 'schedule' },
                { id: 's9', date: `${y}-03-09`, title: '15:00 점미팅 - 마니트', type: 'schedule' },
                { id: 's10', date: `${y}-03-10`, title: '09:30 에듀킬 고객사 (모바일 환경...', type: 'schedule' },
                { id: 's11', date: `${y}-03-10`, title: '10:30 경영진 회의', type: 'schedule' },
                { id: 's12', date: `${y}-03-10`, title: '13:00 LMS 교육 - 드론확산협회...', type: 'schedule' },
                { id: 's13', date: `${y}-03-10`, title: '14:00 리더십 피드백 미팅', type: 'schedule' },
                { id: 's14', date: `${y}-03-10`, title: '14:00 면접 - 손○○', type: 'schedule' },
                { id: 's15', date: `${y}-03-10`, title: '14:30 LMS 교육 - 한국처재림(...', type: 'schedule' },
                { id: 's16', date: `${y}-03-10`, title: '15:00 면접 - 미○○', type: 'schedule' },
                { id: 's17', date: `${y}-03-10`, title: '16:00 화상미팅 - 한경모집(설...', type: 'schedule' },
                { id: 's18', date: `${y}-03-10`, title: '16:00 면접 - 곽○○', type: 'schedule' },
                { id: 's19', date: `${y}-03-11`, title: '09:30 WEHAGO SmartA 10 ...', type: 'schedule' },
                { id: 's20', date: `${y}-03-11`, title: '10:00 환금결영팀 벅스터디 14...', type: 'schedule' },
                { id: 's21', date: `${y}-03-11`, title: '11:00 외부미팅 - 연합뉴스경제', type: 'schedule' },
                { id: 's22', date: `${y}-03-12`, title: '09:00 회의 - 크리에이티브LMS', type: 'schedule' },
                { id: 's23', date: `${y}-03-12`, title: '10:00 컨설팅 벅스터디', type: 'schedule' },
                { id: 's24', date: `${y}-03-13`, title: '권혜미 오후반차', type: 'schedule' },
                { id: 's25', date: `${y}-03-16`, title: '10:00 1차면접 [컨설팅옥스]', type: 'schedule' },
                { id: 's26', date: `${y}-03-16`, title: '11:00 오리엔테이스 미팅', type: 'schedule' },
                { id: 's27', date: `${y}-03-17`, title: '14:00 팀장 코칭 - 최현희', type: 'schedule' },
                { id: 's28', date: `${y}-03-17`, title: '14:00 외부미팅 - 콜렉시스 (연결...', type: 'schedule' },
                { id: 's29', date: `${y}-03-17`, title: '15:30 리더십 코칭 - 이윤석', type: 'schedule' },
                { id: 's30', date: `${y}-03-25`, title: '07:00 정기 배포 [컴플클라우드]', type: 'schedule' },
                { id: 's31', date: `${y}-03-27`, title: '09:00 고객사 교육_상호테이ス(...', type: 'schedule' },
                { id: 's32', date: `${y}-03-27`, title: '17:00 환급 LMS 스킨 매칭(시...', type: 'schedule' },

                // 교육
                { id: 'e1', date: `${y}-03-04`, title: '14:00 팀장 리더십 교육', type: 'education' },
                { id: 'e2', date: `${y}-03-04`, title: '16:00 환급 고객사 교육_배움화(...', type: 'education' },
                { id: 'e3', date: `${y}-03-04`, title: '16:00 코드리뷰', type: 'education' },
                { id: 'e4', date: `${y}-03-05`, title: '14:00 LMS 교육 - 세대청쿡경영...', type: 'education' },
                { id: 'e5', date: `${y}-03-05`, title: '16:00 외부미팅 - 뉴스사사놀이...', type: 'education' },
                { id: 'e6', date: `${y}-03-06`, title: '13:00 LMS 교육 - 드론확산협회', type: 'education' },
                { id: 'e7', date: `${y}-03-06`, title: '14:00 OMP 영업 교육', type: 'education' },
                { id: 'e8', date: `${y}-03-06`, title: '15:00 온보딩교육(입문이러닝...', type: 'education' },
                { id: 'e9', date: `${y}-03-10`, title: '14:00 LMS 교육 - 한국웰에이징', type: 'education' },
                { id: 'e10', date: `${y}-03-10`, title: '14:00 외부미팅 - 세이브세컨드...', type: 'education' },
                { id: 'e11', date: `${y}-03-10`, title: '14:30 팀장 단체 미팅_고마...', type: 'education' },
                { id: 'e12', date: `${y}-03-11`, title: '14:00 외부미팅 - 세이브세컨드...', type: 'education' },
                { id: 'e13', date: `${y}-03-11`, title: '14:00 LMS 교육 - 한국웰에이징', type: 'education' },
                { id: 'e14', date: `${y}-03-11`, title: '14:00 온보딩교육 공콘클라우드', type: 'education' },
                { id: 'e15', date: `${y}-03-12`, title: '14:30 리더십 코칭_나혜진...', type: 'education' },
                { id: 'e16', date: `${y}-03-12`, title: '15:30 팀장 코칭 - 나혜진', type: 'education' },
                { id: 'e17', date: `${y}-03-13`, title: '13:00 온라인세미나 - 다이닝 관리', type: 'education' },
                { id: 'e18', date: `${y}-03-18`, title: '07:00 공급LMS 전체 배포 (공급...', type: 'education' },
                { id: 'e19', date: `${y}-03-19`, title: '14:00 셀프리더십 교육 (A조)삼성', type: 'education' },
                { id: 'e20', date: `${y}-03-19`, title: '15:00 셀프리더십 교육 (B조)삼성', type: 'education' },
                { id: 'e21', date: `${y}-03-13`, title: '15:00 고객사 교육_프로퍼더(...', type: 'education' },
                { id: 'e22', date: `${y}-03-12`, title: '15:30 팀장 코칭 - 나혜진', type: 'education' },
                { id: 'e23', date: `${y}-03-27`, title: '09:00 고객사 교육_상호테이ス(...', type: 'education' },
            ],
            showAddMenu: false,
            majorEvents: [
                { id: 1, title: '전사정례회의', datetime: '2026년 03월 04일 (수) 10시 30분 ~ 13시 00분' },
                { id: 2, title: '전사정례회의', datetime: '2026년 04월 01일 (수) 10시 30분 ~ 13시 00분' }
            ]
        };
    },
    computed: {
        visibleTypes() {
            const types = ['holiday', 'highlight'];
            this.categories.forEach(c => { if (c.visible) types.push(c.key); });
            return types;
        },
        calendarWeeks() {
            const y = this.currentYear;
            const m = this.currentMonth - 1;
            const firstDay = new Date(y, m, 1).getDay();
            const daysInMonth = new Date(y, m + 1, 0).getDate();
            const daysInPrevMonth = new Date(y, m, 0).getDate();
            const today = new Date();
            const weeks = [];
            let allDays = [];

            // 이전 달
            for (let i = firstDay - 1; i >= 0; i--) {
                const d = daysInPrevMonth - i;
                const pm = m === 0 ? 12 : m;
                const py = m === 0 ? y - 1 : y;
                allDays.push(this.buildDay(py, pm, d, false, today));
            }
            // 현재 달
            for (let d = 1; d <= daysInMonth; d++) {
                allDays.push(this.buildDay(y, m + 1, d, true, today));
            }
            // 다음 달
            const remaining = 7 - (allDays.length % 7);
            if (remaining < 7) {
                for (let d = 1; d <= remaining; d++) {
                    const nm = m + 2 > 12 ? 1 : m + 2;
                    const ny = m + 2 > 12 ? y + 1 : y;
                    allDays.push(this.buildDay(ny, nm, d, false, today));
                }
            }

            // 7일씩 끊어서 주 생성
            for (let i = 0; i < allDays.length; i += 7) {
                const weekDays = allDays.slice(i, i + 7);
                const weekStart = weekDays[0].dateStr;
                const weekEnd = weekDays[6].dateStr;
                const spans = this.buildSpans(weekDays, weekStart, weekEnd);
                const wkNum = this.getWeekNum(weekDays[3].dateStr);
                weeks.push({ weekNum: wkNum, days: weekDays, spans });
            }

            return weeks;
        }
    },
    methods: {
        toDateStr(y, m, d) {
            return `${y}-${String(m).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
        },
        buildDay(y, m, d, currentMonth, today) {
            const dateStr = this.toDateStr(y, m, d);
            const isToday = currentMonth && today.getFullYear() === y && today.getMonth() + 1 === m && today.getDate() === d;

            // 단일 이벤트 필터
            const singleEvents = this.events.filter(e => {
                if (e.date !== dateStr) return false;
                if (e.type === 'vacation') return this.visibleTypes.includes('vacation');
                return this.visibleTypes.includes(e.type);
            });

            return { day: d, month: m, year: y, dateStr, currentMonth, isToday, singleEvents };
        },
        buildSpans(weekDays, weekStart, weekEnd) {
            const items = [];
            const visible = this.visibleTypes;

            this.multiDayEvents.forEach(ev => {
                if (ev.category && !visible.includes(ev.category)) return;
                if (!ev.category && !visible.includes(ev.style)) return;

                const evStart = ev.startDate;
                const evEnd = ev.endDate;
                if (evEnd < weekStart || evStart > weekEnd) return;

                let startCol = 1;
                let endCol = 7;
                for (let i = 0; i < 7; i++) {
                    if (weekDays[i].dateStr <= evStart) startCol = i + 1;
                    if (weekDays[i].dateStr <= evEnd) endCol = i + 1;
                }
                if (evStart < weekStart) startCol = 1;
                if (evEnd > weekEnd) endCol = 7;

                const width = endCol - startCol + 1;
                const showTitle = evStart >= weekStart;

                items.push({ id: ev.id, title: ev.title, style: ev.style, col: startCol, width, showTitle });
            });

            // 레인 배치: 겹치지 않는 스팬을 같은 행에 배치
            const lanes = [];
            items.forEach(item => {
                const itemEnd = item.col + item.width - 1;
                let placed = false;
                for (const lane of lanes) {
                    let overlap = false;
                    for (const existing of lane) {
                        const existEnd = existing.col + existing.width - 1;
                        if (!(itemEnd < existing.col || item.col > existEnd)) {
                            overlap = true;
                            break;
                        }
                    }
                    if (!overlap) {
                        lane.push(item);
                        placed = true;
                        break;
                    }
                }
                if (!placed) {
                    lanes.push([item]);
                }
            });

            return lanes;
        },
        getWeekNum(dateStr) {
            const d = new Date(dateStr);
            const onejan = new Date(d.getFullYear(), 0, 1);
            return Math.ceil(((d - onejan) / 86400000 + onejan.getDay() + 1) / 7);
        },
        goToday() {
            const now = new Date();
            this.currentYear = now.getFullYear();
            this.currentMonth = now.getMonth() + 1;
        },
        prevMonth() {
            if (this.currentMonth === 1) { this.currentMonth = 12; this.currentYear--; }
            else { this.currentMonth--; }
        },
        nextMonth() {
            if (this.currentMonth === 12) { this.currentMonth = 1; this.currentYear++; }
            else { this.currentMonth++; }
        },
        openAddForm(type) {
            this.showAddMenu = false;
            const labels = { schedule: '일정', education: '교육', vacation: '휴가', holiday: '휴일' };
            alert(`${labels[type]} 등록 폼을 준비 중입니다.`);
        }
    }
};
