import throttle from 'lodash/throttle';
    
    const iframe = document.querySelector('iframe');
    const player = new Vimeo.Player(iframe);
    let currentTime = null;
    const onPlay = throttle(function ({ seconds }) {
        currentTime = seconds;

        localStorage.setItem("videoplayer-current-time", currentTime)
    }, 1000);

    player.on('timeupdate', onPlay);
console.log(localStorage.getItem("videoplayer-current-time"));

player.getCurrentTime().then(function(seconds) {
    // seconds = the current playback position
}).catch(function(error) {
    // an error occurred
});
