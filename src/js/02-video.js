import vimeo from 'vimeo'
    const iframe = document.querySelector('iframe');
    const player = new Vimeo.Player(iframe);

    player.on('play', function() {
        console.log('played the video!');
    });

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });


const onPlay = function (data) {
        console.log(data.seconds)
    // data is an object containing properties specific to that event
    localStorage.setItem("videoplayer-current-time", JSON.stringify(data.seconds))
};

player.on('play', onPlay);


const currentTime = localStorage.getItem("videoplayer-current-time")

// console.log(currentTime) 


player.setCurrentTime(currentTime).catch(function (error) {
    console.log(error)
})
