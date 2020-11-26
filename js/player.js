

async function clickVideo(number){
	const response = await fetch('./videos.json');
	const data = await response.json();
	console.log(data.videos[number]);



	document.getElementById('rewindBtn').src = './img/back.svg';
	//play needs onclick to become pause
	document.getElementById('playBtn').src = './img/play.svg';
	document.getElementById('forwardBtn').src =  './img/next.svg';
	document.getElementById('fullscreenBtn').src = './img/fullscreen.svg';
	//sound needs onclick to become mute/sound
	document.getElementById('soundBtn').src = './img/mute.svg';
	document.getElementById('videoTitill').textContent = data.videos[number].title;
	document.getElementById('loremIps').textContent = data.videos[number].description;
	document.getElementById('relatedVideos').textContent = 'Tengd myndbönd';

}
clickVideo(0);