const player = document.getElementById('video');
const buttons = document.querySelectorAll('[data-video]');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    player.src = 'https://www.youtube-nocookie.com/embed/' + button.dataset.video + '?autoplay=1';
    player.title = button.textContent;
    buttons.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
  });
});
