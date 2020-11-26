function functRelated(relNum, id){
	if(relNum>0){
		for(let i=0; i<relNum.length; i++){
			document.getElementById(id).innerHTML = '<img src="">';
			document.getElementById(id).innerHTML = '<div class="time"><span></span></div>';
			document.getElementById(id).innerHTML = '<h3><span></span></h3>';
			document.getElementById(id).innerHTML = '<p><span></span></p>';


		}

	}
}

//data.videos[relNum[i]].poster


async function clickVideo(number){
	const response = await fetch('./videos.json');
	const data = await response.json();
	console.log(data.videos[number]);
	const relatedNum = data.videos[number].related;
	console.log(relatedNum);



	document.getElementById('rewindBtn').src = './img/back.svg';
	//TODO play needs onclick to become pause
	document.getElementById('playBtn').src = './img/play.svg';
	document.getElementById('forwardBtn').src =  './img/next.svg';
	document.getElementById('fullscreenBtn').src = './img/fullscreen.svg';
	//TODO sound needs onclick to become mute/sound
	document.getElementById('soundBtn').src = './img/mute.svg';
	document.getElementById('videoTitill').textContent = data.videos[number].title;
	document.getElementById('loremIps').textContent = data.videos[number].description;
	document.getElementById('relatedVideos').textContent = 'Tengd myndbönd';


	//document.getElementById('tag-id').innerHTML = '<ol><li>html data</li></ol>';


}
clickVideo(0);