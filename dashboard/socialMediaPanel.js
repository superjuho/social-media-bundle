const twitchInput = document.getElementById('twitch');
const instagramInput = document.getElementById('instagram');
const youtubeInput = document.getElementById('youtube');

function send() {
	const data = {twitch: twitchInput.value, instagram: instagramInput.value, youtube: youtubeInput.value};
	nodecg.sendMessage('showSocialMedia', data);
}

function hide() {
	nodecg.sendMessage('hideMediaSpinner');
}

function show() {
	nodecg.sendMessage('showMediaSpinner');
}
