export default {
    layout: 'default',
    data() {
        return {
            posts: [
                { id: 8, title: '2026년 상반기 워크샵 안내', author: '인사팀', date: '2026-03-07', views: 124, important: true, isNew: true },
                { id: 7, title: '사내 보안 교육 필수 이수 안내', author: '보안팀', date: '2026-03-05', views: 98, important: true, isNew: true },
                { id: 6, title: '3월 급여 지급일 변경 안내', author: '경영지원팀', date: '2026-03-03', views: 201, important: false, isNew: false },
                { id: 5, title: '신규 복지 제도 시행 안내', author: '인사팀', date: '2026-02-28', views: 312, important: false, isNew: false },
                { id: 4, title: '사옥 엘리베이터 점검 안내 (3/1)', author: '시설관리팀', date: '2026-02-27', views: 156, important: false, isNew: false },
                { id: 3, title: '설 연휴 근무 일정 안내', author: '인사팀', date: '2026-02-10', views: 287, important: false, isNew: false },
                { id: 2, title: '2026년 경영 목표 공유', author: '대표이사', date: '2026-01-15', views: 456, important: false, isNew: false },
                { id: 1, title: '신년사 - 함께 성장하는 2026년', author: '대표이사', date: '2026-01-02', views: 523, important: false, isNew: false }
            ]
        };
    }
};
