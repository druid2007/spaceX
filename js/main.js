const defaultAttributes = {
    autoplay: true,
    controls: false,
    loop: true,
    muted: true,
    playsInline: true
}

var instance = new vidbg('.video-bg', {
    mp4: '/video/world.mp4', // URL or relative path to MP4 video
    webm: '/video/world.webm', // URL or relative path to webm video
    poster: '/video/poster.jpg', // URL or relative path to fallback image
    overlay: false, // Boolean to display the overlay or not
}, defaultAttributes);

var rellax = new Rellax('.rocket');
