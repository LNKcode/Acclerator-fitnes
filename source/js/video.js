function findVideos() {
  const videos = document.querySelectorAll('.about__video');

  for (let i = 0; i < videos.length; i++) {
    setupVideo(videos[i]);
  }
}

function setupVideo(video) {
  const link = video.querySelector('.about__video-link');
  const linkHref = link.getAttribute('href');
  const button = video.querySelector('.about__video-icon');
  const id = convertToEmbedURL(linkHref);

  video.addEventListener('click', () => {
    const iframe = createIframe(id);
    link.remove();
    button.remove();
    video.appendChild(iframe);
  });

  link.removeAttribute('href');
  video.classList.add('video--enabled');
}

function convertToEmbedURL(url) {
  // Проверяем, что ссылка начинается с короткого формата
  if (url.startsWith('https://youtu.be/')) {
    // Извлекаем ID видео, который идет после "https://youtu.be/"
    const videoId = url.split('youtu.be/')[1];
    // Формируем новую ссылку с embed и параметром autoplay=1
    return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  } else {
    // Если формат ссылки не тот, возвращаем исходную ссылку или предупреждение
    console.error('Неправильный формат ссылки');
    return url;
  }
}

function createIframe(id) {
  const iframe = document.createElement('iframe');

  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('allow', 'autoplay');
  iframe.setAttribute('src', id);
  iframe.classList.add('about__video-picture');

  return iframe;
}

export {findVideos};

