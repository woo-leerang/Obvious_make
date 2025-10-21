$(document).ready(function () {
    const $targets = $('.sa');

    // 옵션: 한 번 보이면 다시 숨기지 않으려면 { once: true } 같은 로직을 추가
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // jQuery로 클래스 추가
        $(entry.target).addClass('show');
        // 필요하면 한 번만 애니메이션 실행하도록 관찰 해제
        observer.unobserve(entry.target);
      }
    });
  }, {
    root: null,           // 뷰포트
    rootMargin: '0px 0px -10% 0px', // 요소가 화면에 10% 들어오면 트리거
    threshold: 0          // 교차 비율 임계값
  });

  // 모든 대상 요소 관찰 시작
  $targets.each((i, el) => observer.observe(el));
});