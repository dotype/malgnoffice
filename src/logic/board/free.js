export default {
    layout: 'default',
    data() {
        return {
            posts: [
                { id: 12, title: '오늘 점심 뭐 먹을까요?', author: '이서연', date: '2026-03-09', views: 23, comments: 8, isNew: true },
                { id: 11, title: '주말 등산 모임 참여자 모집', author: '박지훈', date: '2026-03-08', views: 45, comments: 12, isNew: true },
                { id: 10, title: '근처 맛집 추천합니다', author: '최유진', date: '2026-03-07', views: 67, comments: 15, isNew: false },
                { id: 9, title: '사내 동호회 활동 안내', author: '김민수', date: '2026-03-05', views: 89, comments: 5, isNew: false },
                { id: 8, title: '재택근무 팁 공유', author: '정하은', date: '2026-03-03', views: 112, comments: 20, isNew: false },
                { id: 7, title: '사내 카페 메뉴 변경 요청', author: '이서연', date: '2026-02-28', views: 78, comments: 7, isNew: false },
                { id: 6, title: '봄 나들이 장소 추천', author: '박지훈', date: '2026-02-25', views: 56, comments: 3, isNew: false }
            ]
        };
    }
};
