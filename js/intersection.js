// 監視対象の要素が画面内に入ったら .is-animated を付与する
function initIntersection() {
  const targets = document.querySelectorAll('.js-fade-in-left, .js-fade-up, .js-fade-left, .js-fade-right');

  const options = {
    root: null, // ビューポートを基準にする
    rootMargin: '0px 0px -5% 0px', 
    threshold: 0 // 少しでも重なったら実行
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-animated');
        // 一度アニメーションしたら監視を解除する場合（実務でよく使われます）
        observer.unobserve(entry.target);
      }
    });
  }, options);

  targets.forEach(target => {
    observer.observe(target);
  });
}