function functRelated(relNum, id){
	if(relNum>0){
		for(let i=0; i<relNum.length; i++){
			document.getElementById(id[i]).innerHTML = '<img src="">';
			document.getElementById(id[i]).innerHTML = '<div class="time"><span></span></div>';
			document.getElementById(id[i]).innerHTML = '<h3><span></span></h3>';
			document.getElementById(id[i]).innerHTML = '<p><span></span></p>';
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
	var x11 = "/videos/small.mp4";


	document.getElementById('videoContainer').innerHTML = '<video width="320" height="240" controls id="videoContr"><source src="'+ data.videos[number].video +'" type="video/mp4"></video>';
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



	//controls for video.js HTML5 video player
    var myVideo = document.getElementById("videoContr"); 

    function playPause() { 
        if (myVideo.paused) 
            myVideo.play(); 
        else 
            myVideo.pause(); 
    } 

    function makeBig() { 
        myVideo.width = 560; 
    } 

    function makeSmall() { 
        myVideo.width = 320; 
    } 

    function makeNormal() { 
        myVideo.width = 420; 
    } 

     function skip(value) {
            var video = document.getElementById("videoContr");
            video.currentTime += value;
     }    
     //https://stackoverflow.com/questions/38604103/how-can-you-make-video-js-skip-forwards-and-backwards-15-seconds

     function restart() {
            var video = document.getElementById("videoContr");
            video.currentTime = 0;
        }