import throttle from 'lodash/throttle';
    
    const iframe = document.querySelector('iframe');
    const player = new Vimeo.Player(iframe);
    let currentTime = null;
    const onPlay = throttle(function ({ seconds }) {
        currentTime = seconds;

        localStorage.setItem("videoplayer-current-time", currentTime)
    }, 1000);

    player.on('timeupdate', onPlay);    

    const seconds = localStorage.getItem("videoplayer-current-time");

    if (seconds) {
    player.setCurrentTime(seconds)
        .then(function (seconds) { })
        .catch(function (error) {
        switch (error.name) {
            case 'RangeError':
                break;
            default:
                break;
            }
        });
    }