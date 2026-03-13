// ページトップへ戻るボタンの表示・非表示を制御
function initPageTop() {
  const pageTopBtn = document.querySelector('.js-pagetop');
  if (!pageTopBtn) return; // ボタンがないページでは何もしない

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) { // 300pxスクロールしたら表示
      pageTopBtn.classList.add('is-show');
    } else {
      pageTopBtn.classList.remove('is-show');
    }
  });

  pageTopBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // base.scssのscroll-behaviorと組み合わせてスムーズに
    });
  });
}