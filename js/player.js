/** Add times, only deals with positive values
** @param {string} t0 : time in h[:mm[:ss]] format
** @param {string} t1 : time in same format as t0
** @returns {string} summ of t0 and t1 in h:mm:ss format
**/
function addTimes(t0, t1) {
  return secsToTime(timeToSecs(t0) + timeToSecs(t1));
}

// Convert time in H[:mm[:ss]] format to seconds
function timeToSecs(time) {
  let [h, m] = time.split(':');
  return h*3600 + (m|0)*60;
}

// Convert seconds to time in H:mm:ss format
function secsToTime(seconds) {
  let z = n => (n<10? '0' : '') + n; 
  return (seconds / 3600 | 0) + ':' +
       z((seconds % 3600) / 60 | 0)
}


function functRelated(relNum, id){
	console.log("hi");
}


function dateConvertion(epochz){
	let current = new Date();
	let differenceMS = current.getTime() - epochz;
	let years = Math.floor(differenceMS / (1000 * 3600 * 24 *365)); 
	let months = Math.floor(differenceMS / (1000 * 3600 * 24 * 30)); 
	let weeks = Math.floor(differenceMS / (1000 * 3600 * 24 * 7)); 
	let days = Math.floor(differenceMS / (1000 * 3600 * 24)); 
	let hours = Math.floor(differenceMS / (1000 * 3600)); 
	if(years>0){
		if(years==1){
			return "Fyrir 1 ári síðan";
		}
		else return "Fyrir " + years + " árum síðan";
	}
	else if(months>0){
		if(months==1){
			return "Fyrir 1 mánuði síðan";
		}
		else return "Fyrir " + months + " mánuðum síðan";
	}
	else if(weeks>0){
		if(weeks==1){
			return "Fyrir 1 viku síðan";
		}
		else return "Fyrir " + weeks + " vikum síðan";
	}
	else if(days>0){
		if(days==1){
			return "Fyrir 1 degi síðan";
		}
		else return "Fyrir " + days + " dögum síðan";
	}
	else if(hours>0){
		if(hours==1){
			return "Fyrir 1 klukkustund síðan";
		}
		else return "Fyrir " + hours + " klukkustundum síðan";
	}
	else return "Innan við klukkustund";
}






//data.videos[relNum[i]].poster


async function clickVideo(number){
	const response = await fetch('./videos.json');
	const data = await response.json();
	console.log(data.videos[number]);
	const relatedNum = data.videos[number].related;
	console.log(relatedNum);
	var x11 = "/videos/small.mp4";
	const relatedItemArr = ['relatedItem1','relatedItem2','relatedItem3'];
	let time = "00:00:00";


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
	for(let i=0;i<relatedNum.length;i++){
		document.getElementById(relatedItemArr[i]).innerHTML = '<div><img src="'+ data.videos[relatedNum[i]].poster +'"> <div class="time"><span>'+ addTimes('0:' + data.videos[relatedNum[i]].duration, time) +'</span></div> <h3><span>'+ data.videos[relatedNum[i]].title +'</span></h3> <p><span>'+dateConvertion(data.videos[relatedNum[i]].created) + '</span></p></div>';

	}
	/*
	
	if(relatedNum[0]>=0){
			document.getElementById('relatedItem1').innerHTML = '<div><img src="'+ data.videos[relatedNum[0]].poster +'"> <div class="time"><span>'+ dateConvertion(data.videos[relatedNum[0]].created) +'</span></div> <h3><span>'+ data.videos[relatedNum[0]].title +'</span></h3> <p><span>'+ '</span></p></div>';

	}
	if(relatedNum[1]>=0){
			document.getElementById('relatedItem2').innerHTML = '<div><img src="'+ data.videos[relatedNum[1]].poster +'"> <div class="time"><span>'+ dateConvertion(data.videos[relatedNum[1]].created) +'</span></div> <h3><span>'+ data.videos[relatedNum[1]].title +'</span></h3> <p><span>'+ '</span></p></div>';

	}
	if(relatedNum[1]>=0){
			document.getElementById('relatedItem3').innerHTML = '<div><img src="'+ data.videos[relatedNum[2]].poster +'"> <div class="time"><span>'+ dateConvertion(data.videos[relatedNum[2]].created) +'</span></div> <h3><span>'+ data.videos[relatedNum[2]].title +'</span></h3> <p><span>'+ '</span></p></div>';

	}*/

	
		
	


	//document.getElementById('tag-id').innerHTML = '<ol><li>html data</li></ol>';


}
clickVideo(1);    



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
	 function ChangeVideo(){
		 window.open("player.html")
	 }