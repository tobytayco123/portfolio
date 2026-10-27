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
    resizeMessage();
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

const albums = [{"title": "Together (feat. Matt Sligar) - Single", "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/23/d9/27/23d9272f-bf3d-1932-7957-0b20a1dee2e1/artwork.jpg/600x600bb.jpg", "url": "https://music.apple.com/us/album/together-feat-matt-sligar-single/1761763015?uo=4", "tracks": [{"title": "Together (feat. Matt Sligar)", "src": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/1a/8f/55/1a8f55c4-952b-e56a-f358-54a07673121b/mzaf_11605432378079146908.plus.aac.p.m4a", "url": "https://music.apple.com/us/album/together-feat-matt-sligar/1761763015?i=1761763016&uo=4"}], "date": "2024-08-23", "streaming": {}}, {"title": "Pam! (Dr. Dog Walkin Lady) - Single", "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/c3/c1/9e/c3c19ede-fafe-51be-ade5-7d61cd908e59/artwork.jpg/600x600bb.jpg", "url": "https://music.apple.com/us/album/pam-dr-dog-walkin-lady-single/1756651178?uo=4", "tracks": [{"title": "Pam! (Dr. Dog Walkin Lady)", "src": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/e4/ad/97/e4ad97ca-367d-b232-e2f4-9540ad44bed5/mzaf_17119540905543636909.plus.aac.p.m4a", "url": "https://music.apple.com/us/album/pam-dr-dog-walkin-lady/1756651178?i=1756651179&uo=4"}, {"title": "Pam! (Dr. Dog Walkin Lady) (feat. Kammeron Frost & Cobey Gong) [REMIX]", "src": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/80/63/46/8063462f-6a24-fa51-2a45-b77ec24c9767/mzaf_6812778510173248802.plus.aac.p.m4a", "url": "https://music.apple.com/us/album/pam-dr-dog-walkin-lady-feat-kammeron-frost-cobey-gong-remix/1756651178?i=1756651180&uo=4"}], "date": "2024-07-12", "streaming": {}}, {"title": "Lady Macbeth", "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/a7/ea/39/a7ea39ca-defe-8995-af0d-60b68567e8b2/artwork.jpg/600x600bb.jpg", "url": "https://music.apple.com/us/album/lady-macbeth/1733436402?uo=4", "tracks": [{"title": "TIME and SPACE (Intro) (feat. George Ariza)", "src": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/6c/31/8e/6c318e70-5e65-94af-9768-e59f4b8055ab/mzaf_8432848209643218320.plus.aac.p.m4a", "url": "https://music.apple.com/us/album/time-and-space-intro-feat-george-ariza/1733436402?i=1733436403&uo=4"}, {"title": "Not There (Interlude) (feat. Aakriti Raj)", "src": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/25/1c/c5/251cc575-bf45-8525-c20b-01fd6afa431f/mzaf_8889135386016335202.plus.aac.p.m4a", "url": "https://music.apple.com/us/album/not-there-interlude-feat-aakriti-raj/1733436402?i=1733436678&uo=4"}, {"title": "Stop... For a Minute (feat. Aakriti Raj & Prazul)", "src": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/a7/0d/8e/a70d8eb1-4578-f300-40cf-62ffce986360/mzaf_17797055876763398239.plus.aac.p.m4a", "url": "https://music.apple.com/us/album/stop-for-a-minute-feat-aakriti-raj-prazul/1733436402?i=1733436679&uo=4"}, {"title": "Hot Water (feat. Aakriti Raj & George Ariza)", "src": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/33/c7/a3/33c7a3a7-cd64-ce76-47e8-6daf5c84c6a4/mzaf_5443263302639723565.plus.aac.p.m4a", "url": "https://music.apple.com/us/album/hot-water-feat-aakriti-raj-george-ariza/1733436402?i=1733436680&uo=4"}, {"title": "Chanel (feat. Jahvon Morse & Amber Lara)", "src": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/57/e7/21/57e7217f-a545-410a-c5c5-d83e4fcf8d7d/mzaf_2728860838908626574.plus.aac.p.m4a", "url": "https://music.apple.com/us/album/chanel-feat-jahvon-morse-amber-lara/1733436402?i=1733436681&uo=4"}, {"title": "All The Time Now (feat. George Ariza)", "src": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/b3/94/e2/b394e257-b195-9c21-44e6-28359eba0226/mzaf_2085512868789892548.plus.aac.p.m4a", "url": "https://music.apple.com/us/album/all-the-time-now-feat-george-ariza/1733436402?i=1733436682&uo=4"}, {"title": "FADED (feat. ANDY, Matt Sligar & Wavesondakeys)", "src": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/e5/6b/ce/e56bce0e-3f1c-4cac-4262-8724a4f09cce/mzaf_5395651835591986431.plus.aac.p.m4a", "url": "https://music.apple.com/us/album/faded-feat-andy-matt-sligar-wavesondakeys/1733436402?i=1733436683&uo=4"}, {"title": "Lemme Come Over (feat. Wavesondakeys, Lola De Los Santos, Dhruv Banerji, Cristina Armayo & ANDY)", "src": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/5c/cd/e7/5ccde7e9-4f1c-636b-fc62-d93df6c90093/mzaf_7265986553337101277.plus.aac.p.m4a", "url": "https://music.apple.com/us/album/lemme-come-over-feat-wavesondakeys-lola-de-los/1733436402?i=1733436685&uo=4"}, {"title": "CLEARING MY CONSCIENCE (Interlude) (feat. Aakriti Raj)", "src": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/38/87/0e/38870eb6-6f10-24cd-fc0d-1fec9424f141/mzaf_2257722066432046610.plus.aac.p.m4a", "url": "https://music.apple.com/us/album/clearing-my-conscience-interlude-feat-aakriti-raj/1733436402?i=1733436688&uo=4"}, {"title": "CHIC", "src": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/16/c0/b5/16c0b5fd-59cf-44eb-2175-c95e0f8719f5/mzaf_11614441639263762388.plus.aac.p.m4a", "url": "https://music.apple.com/us/album/chic/1733436402?i=1733436689&uo=4"}, {"title": "Fair is Foul (feat. Wavesondakeys & Ding Sng)", "src": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/82/7c/d6/827cd690-8f3b-5ac0-94e3-457b88f61037/mzaf_9178400075403479967.plus.aac.p.m4a", "url": "https://music.apple.com/us/album/fair-is-foul-feat-wavesondakeys-ding-sng/1733436402?i=1733436690&uo=4"}, {"title": "I F*****g Killed Him (feat. Snarling Wretch, Cobey Gong & Amber Lara)", "src": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/80/ed/03/80ed0399-9ac2-e00c-abc9-51c5e48e23b5/mzaf_13103998832499350015.plus.aac.p.m4a", "url": "https://music.apple.com/us/album/i-f-g-killed-him-feat-snarling-wretch-cobey-gong-amber-lara/1733436402?i=1733436691&uo=4"}, {"title": "I Thought She Loved Me (the end) (feat. Wavesondakeys)", "src": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/12/1a/b3/121ab303-b652-d5ae-4244-c16fd4cb8758/mzaf_18110090684235554931.plus.aac.p.m4a", "url": "https://music.apple.com/us/album/i-thought-she-loved-me-the-end-feat-wavesondakeys/1733436402?i=1733436693&uo=4"}], "date": "2024-04-01", "streaming": {"soundcloud": "https://soundcloud.com/tobiasluketaylor-cohen/sets/lady-macbeth"}}, {"title": "All the Time Now (feat. George Ariza) - Single", "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/c1/3c/27/c13c27bc-b55d-d76c-bba2-0ed05b557e18/735910732146_cover.jpg/600x600bb.jpg", "url": "https://music.apple.com/us/album/all-the-time-now-feat-george-ariza-single/1652642071?uo=4", "tracks": [{"title": "All the Time Now (feat. George Ariza)", "src": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/86/98/2b/86982bf9-b38f-3424-c1a8-56e542b6e350/mzaf_4920840111406510472.plus.aac.p.m4a", "url": "https://music.apple.com/us/album/all-the-time-now-feat-george-ariza/1652642071?i=1652642072&uo=4"}], "date": "2022-11-18", "streaming": {}}, {"title": "Hot Water (feat. Aakriti Raj & George Ariza) - Single", "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/18/58/57/1858575a-7f8e-4d30-9524-89aff8be6afb/735910269161_cover.jpg/600x600bb.jpg", "url": "https://music.apple.com/us/album/hot-water-feat-aakriti-raj-george-ariza-single/1636297272?uo=4", "tracks": [{"title": "Hot Water (feat. Aakriti Raj & George Ariza)", "src": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/27/56/55/275655f0-527c-c4c8-fbb9-34626f1200b8/mzaf_11737078424255538330.plus.aac.p.m4a", "url": "https://music.apple.com/us/album/hot-water-feat-aakriti-raj-george-ariza/1636297272?i=1636297273&uo=4"}], "date": "2022-08-05", "streaming": {}}, {"title": "Silk Sheets - EP", "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/54/65/b3/5465b3c0-7b9e-310e-9393-1de32f8ea99a/689690075057_cover.jpg/600x600bb.jpg", "url": "https://music.apple.com/us/album/silk-sheets-ep/1592366371?uo=4", "tracks": [{"title": "Motown (Intro) [feat. George Ariza]", "src": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/fb/cc/8f/fbcc8f8e-00a8-803d-5567-7abf69b7f94f/mzaf_12367249231893132511.plus.aac.p.m4a", "url": "https://music.apple.com/us/album/motown-intro-feat-george-ariza/1592366371?i=1592366373&uo=4"}, {"title": "Silk Sheets", "src": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/98/3e/5c/983e5c32-daf4-713a-1294-208ba4063b8e/mzaf_11950142107713882595.plus.aac.p.m4a", "url": "https://music.apple.com/us/album/silk-sheets/1592366371?i=1592366736&uo=4"}, {"title": "Sherlock Holmes", "src": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/ea/f7/0c/eaf70cff-5abb-b55c-4102-6b4172de8ddc/mzaf_1807084339447402937.plus.aac.p.m4a", "url": "https://music.apple.com/us/album/sherlock-holmes/1592366371?i=1592366737&uo=4"}, {"title": "Rooftop (Outro)", "src": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/99/d3/13/99d313c6-05aa-fa19-36f1-3b742610b285/mzaf_3978521738667715019.plus.aac.p.m4a", "url": "https://music.apple.com/us/album/rooftop-outro/1592366371?i=1592366739&uo=4"}], "date": "2021-10-31", "streaming": {"spotify": "https://open.spotify.com/album/4gB2Rb9tLp1ycyzFz8qL1P"}}, {"title": "Tapatío - Single", "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/0c/80/2e/0c802e2b-0198-59c4-9571-be288297a7d2/689690202071_cover.jpg/600x600bb.jpg", "url": "https://music.apple.com/us/album/tapat%C3%ADo-single/1582479008?uo=4", "tracks": [{"title": "Tapatío", "src": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/41/60/41/416041de-6fcb-5471-f574-c6391523bd98/mzaf_6836318987282882447.plus.aac.p.m4a", "url": "https://music.apple.com/us/album/tapat%C3%ADo/1582479008?i=1582479009&uo=4"}], "date": "2021-08-21", "streaming": {}}];

const audio = document.getElementById('audio');
const albumGrid = document.getElementById('album-grid');
const trackList = document.getElementById('tracks');
let selectedAlbum;
let selectedTrack = 0;

function selectTrack(index, play) {
  selectedTrack = index;
  const track = selectedAlbum.tracks[index];
  audio.src = track.src;
  document.getElementById('track-title').textContent = track.title;
  document.querySelectorAll('#tracks button').forEach((button, i) => button.setAttribute('aria-pressed', String(i === index)));
  if (play && track.src) audio.play().catch(() => {});
}

function selectAlbum(index) {
  selectedAlbum = albums[index];
  document.getElementById('album-title').textContent = selectedAlbum.title;
  document.getElementById('album-cover').src = selectedAlbum.cover;
  document.getElementById('album-cover').alt = selectedAlbum.title;
  const streaming = document.getElementById('streaming-links');
  streaming.replaceChildren(document.createTextNode('Audio preview! Full release available on:'), document.createElement('br'));
  const services = [
    ['youtubeMusic', 'YouTube Music', 'https://music.youtube.com/@Tobias_Luke'],
    ['spotify', 'Spotify', 'https://open.spotify.com/artist/6AdGrIxfwfN20nZf3G04xV'],
    ['appleMusic', 'Apple Music', selectedAlbum.url],
    ['soundcloud', 'SoundCloud', 'https://soundcloud.com/tobiasluketaylor-cohen'],
    ['tidal', 'Tidal', 'https://tidal.com/artist/5424280']
  ];
  services.forEach(([key, name, fallback], i) => {
    if (i) streaming.append(document.createTextNode(' · '));
    const link = document.createElement('a');
    link.textContent = name;
    link.href = selectedAlbum.streaming[key] || fallback;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    streaming.append(link);
  });
  trackList.replaceChildren();
  selectedAlbum.tracks.forEach((track, i) => {
    const button = document.createElement('button');
    button.textContent = (i + 1) + '. ' + track.title;
    button.disabled = !track.src;
    button.addEventListener('click', () => selectTrack(i, true));
    trackList.append(button);
  });
  document.querySelectorAll('#album-grid button').forEach((button, i) => button.setAttribute('aria-pressed', String(i === index)));
  selectTrack(0, false);
}

albums.forEach((album, i) => {
  const button = document.createElement('button');
  const cover = document.createElement('img');
  cover.src = album.cover;
  cover.alt = '';
  cover.loading = 'lazy';
  const title = document.createElement('span');
  title.textContent = album.title;
  button.append(cover, title);
  button.addEventListener('click', () => selectAlbum(i));
  albumGrid.append(button);
});
audio.addEventListener('ended', () => {
  if (selectedTrack + 1 < selectedAlbum.tracks.length) selectTrack(selectedTrack + 1, true);
});
window.addEventListener('hashchange', () => {
  if (location.hash !== '#music') audio.pause();
});
selectAlbum(0);

document.addEventListener('pointerdown', event => {
  if (event.button !== 0 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const shapes = [
    '<ellipse cx="8" cy="19" rx="4" ry="3"/><path d="M11 19V3h2v16z"/>',
    '<ellipse cx="7" cy="19" rx="4" ry="3"/><path d="M10 19V2h2c0 5 7 4 6 10-1-3-4-3-6-5v12z"/>',
    '<ellipse cx="5" cy="19" rx="4" ry="3"/><ellipse cx="18" cy="16" rx="4" ry="3"/><path d="M8 19V5l13-3v14h-2V7l-9 2v10z"/>'
  ];
  const count = 1 + Math.floor(Math.random() * 3);
  for (let i = 0; i < count; i++) {
    const note = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    note.setAttribute('viewBox', '0 0 24 24');
    note.setAttribute('aria-hidden', 'true');
    note.classList.add('music-note');
    note.innerHTML = shapes[Math.floor(Math.random() * shapes.length)];
    note.style.left = event.clientX + 'px';
    note.style.top = event.clientY + 'px';
    document.body.append(note);
    const angle = Math.random() * Math.PI * 2;
    const distance = 60 + Math.random() * 60;
    const x = Math.cos(angle) * distance - 11;
    const y = Math.sin(angle) * distance - 11;
    const rotation = Math.random() * 100 - 50;
    const animation = note.animate([
      {transform: 'translate(-50%, -50%) scale(0.6)', opacity: 1},
      {transform: 'translate(' + x + 'px, ' + y + 'px) rotate(' + rotation + 'deg)', opacity: 0}
    ], {duration: 750, easing: 'ease-out'});
    animation.onfinish = () => note.remove();
  }
});

const messageField = document.getElementById('message');
function resizeMessage() {
  messageField.style.height = 'auto';
  messageField.style.height = messageField.scrollHeight + 2 + 'px';
}
messageField.addEventListener('input', resizeMessage);
window.addEventListener('resize', () => {
  if (contact.open) resizeMessage();
});
