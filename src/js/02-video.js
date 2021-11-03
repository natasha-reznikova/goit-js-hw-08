import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOCALSTORAGE_KEY = "videoplayer-current-time"



player.setCurrentTime(localStorage.getItem(LOCALSTORAGE_KEY));

player.on('timeupdate', throttle(data => localStorage.setItem(LOCALSTORAGE_KEY, data.seconds), 1000));

