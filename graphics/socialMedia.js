import { gsap } from '../node_modules/gsap/index.js';

const twitchElement = document.getElementById('twitchAccount');
const instagramElement = document.getElementById('instagramAccount');
const youtubeElement = document.getElementById('youtubeAccount');
const twitchAccount = document.getElementById('twitch');
const instagramAccount = document.getElementById('instagram');
const youtubeAccount = document.getElementById('youtube');
const socialBox = document.querySelector('.social-box');



const tl = gsap.timeline();
nodecg.listenFor('showSocialMedia', (data) => {
twitchAccount.innerHTML = data.twitch;
instagramAccount.innerHTML = data.instagram;
youtubeAccount.innerHTML = data.youtube;
window.setInterval(thisCallback, 2100);

function thisCallback() {
twitchElement.style["opacity"] = 0.8;
tl.from([twitchElement], 5, {opacity: 0}, "+=1");
tl.to([twitchElement], 1, {opacity: 0});
instagramElement.style["opacity"] = 0.8;
tl.from([instagramElement], 5, {opacity: 0}, "+=1");
tl.to([instagramElement], 1, {opacity: 0});
youtubeElement.style["opacity"] = 0.8;
tl.from([youtubeElement], 5, {opacity: 0}, "+=1");
tl.to([youtubeElement], 1, {opacity: 0});
};

})

nodecg.listenFor('showMediaSpinner', () => {
	socialBox.style["opacity"] = "1";
});

nodecg.listenFor('hideMediaSpinner', () => {
	socialBox.style["opacity"] = "0";
});
