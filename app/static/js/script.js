document.addEventListener('DOMContentLoaded', function () {
    const popup = document.getElementById('contactPopup');
    const openPopupBtn = document.getElementById('openContactPopup');
    const closePopupBtn = document.querySelector('.contact-popup__close');
  
    openPopupBtn.addEventListener('click', function (e) {
      e.preventDefault();
      popup.style.display = 'flex';
    });
  
    closePopupBtn.addEventListener('click', function () {
      popup.style.display = 'none';
    });
  
    window.addEventListener('click', function (e) {
      if (e.target === popup) {
        popup.style.display = 'none';
      }
    });
  });
  