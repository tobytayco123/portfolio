const player = document.getElementById('video');
const buttons = document.querySelectorAll('[data-video]');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    player.src = 'https://www.youtube-nocookie.com/embed/' + button.dataset.video + '?autoplay=1&enablejsapi=1';
    player.title = button.textContent;
    buttons.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
  });
});

const pages = document.querySelectorAll('.page');

function showPage() {
  const name = location.hash.slice(1);
  const page = ['about', 'music', 'professional'].includes(name) ? name : 'videos';
  pages.forEach(section => section.hidden = section.id !== page);
  requestAnimationFrame(() => {
    document.querySelectorAll('.page:not([hidden]) iframe[data-src]').forEach(frame => {
      frame.src = frame.dataset.src;
      frame.removeAttribute('data-src');
    });
  });
  document.querySelectorAll('.intro a').forEach(link => {
    if (link.getAttribute('href') === '#' + page) {
      link.setAttribute('aria-current', 'page');
    } else {
      link.removeAttribute('aria-current');
    }
  });
  document.querySelectorAll('.page[hidden] iframe').forEach(frame => {
    frame.contentWindow.postMessage(JSON.stringify({event: 'command', func: 'pauseVideo', args: []}), 'https://www.youtube-nocookie.com');
  });
}

window.addEventListener('hashchange', showPage);
showPage();

const contact = document.getElementById('contact');
document.querySelectorAll('#contact-link, .contact-link').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    contact.showModal();
  });
});
document.getElementById('close-contact').addEventListener('click', () => contact.close());
contact.addEventListener('click', event => {
  const bounds = contact.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) {
    contact.close();
  }
});
document.getElementById('contact-form').addEventListener('submit', event => {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  location.href = 'mailto:tobytayco123@gmail.com?subject=' + encodeURIComponent('Howdy!🎵') + '&body=' + encodeURIComponent('From: ' + email + '\n\n' + message);
});
