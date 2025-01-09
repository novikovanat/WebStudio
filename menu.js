(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-menu]'),
    closeModalBtn: document.querySelector('[data-modal-close-menu]'),
    modal: document.querySelector('[data-modal-menu]'),
    mobilePortfolioLink: document.querySelector('[data-mobile-portfolio-link]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.mobilePortfolioLink.addEventListener('click', closeModal);

  window.addEventListener('orientationchange', function (event) {
    closeModal();
  });

  function toggleModal() {
    refs.modal.classList.toggle('is-open');
  }

  function closeModal() {
    refs.modal.classList.remove('is-open');
  }
})();
