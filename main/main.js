document.addEventListener("DOMContentLoaded", function() {
  // 더 보기 메뉴
  const moreBtn = document.querySelector('.more-btn');
  const moreMenu = document.querySelector('.more-menu');

  moreBtn.addEventListener('click', function(event) {
    moreMenu.classList.toggle('hidden');
  });

  document.addEventListener('click', function(e) {
    if (!moreMenu.contains(e.target) && !moreBtn.contains(e.target)) {
      moreMenu.classList.add('hidden');
    }
  });

  const menuItems = moreMenu.querySelectorAll('li');
  menuItems.forEach((item) => {
    item.addEventListener('click', function() {
      alert(`${item.textContent} 메뉴 선택됨 (기능 구현은 자유롭게!)`);
    });
  });
});



