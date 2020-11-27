//browser-sync start --server --files ["* .html", "* .js", "* .css"]

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


  let relatedNum;
  
async function clickVideo(number){
	  const response = await fetch('./videos.json');
	  const data = await response.json();
	  const relatedItemArr = ['relatedItem1','relatedItem2','relatedItem3'];
	  for(let i=0; i<3; i++){
		  document.getElementById(relatedItemArr[i]).innerHTML = "";
	  }
	  if(data.videos[number].related.length>0){
		  relatedNum = data.videos[number].related;
	  }
	  console.log(relatedNum);
	  var x11 = "/videos/small.mp4";
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
		  document.getElementById(relatedItemArr[i]).innerHTML = '<div><img src="'+ data.videos[relatedNum[i]-1].poster +'"> <div class="time"><span>'+ addTimes('0:' + data.videos[relatedNum[i]-1].duration, time) +'</span></div> <h3><span>'+ data.videos[relatedNum[i]-1].title +'</span></h3> <p><span>'+dateConvertion(data.videos[relatedNum[i]-1].created) + '</span></p></div>';
  
	  }
  
  } 

  let firstV;
  let secondV;
  let thirdV;
  let firstK;
  let secondK;
  let thirdK;
  let fourthK;
  let fifthK;
  let sixthK;
  let firstS;
  let secondS;
  let thirdS;
  let fourthS;
  let fifthS;
  let sixthS;

  let firstpageArr; 


async function getVideo(){
	const response = await fetch('./videos.json');
	const data = await response.json();

	let time = "00:00:00";
	console.log("herroooo");

	//TITLES
	document.getElementById('firstTitle').textContent = data.categories[0].title;
	document.getElementById('secondTitle').textContent = data.categories[1].title;
	document.getElementById('thirdTitle').textContent = data.categories[2].title;
	//NYLEG MYNDBÖND
	let nyRod = data.categories[0].videos;
	firstV = nyRod[0]-1;
	secondV = nyRod[1]-1;
	thirdV = nyRod[2]-1;
	document.getElementById('firstrowH1').textContent = data.videos[firstV].title;
	document.getElementById('firstrowH2').textContent = data.videos[secondV].title;
	document.getElementById('firstrowH3').textContent = data.videos[thirdV].title;
	document.getElementById('firstrowIMG1').src = data.videos[firstV].poster;
	document.getElementById('firstrowIMG2').src = data.videos[secondV].poster;
	document.getElementById('firstrowIMG3').src = data.videos[thirdV].poster;
	document.getElementById('firstrowVD1').textContent = addTimes('0:' + data.videos[firstV].duration, time);
	document.getElementById('firstrowVD2').textContent = addTimes('0:' + data.videos[secondV].duration, time);
	document.getElementById('firstrowVD3').textContent = addTimes('0:' + data.videos[thirdV].duration, time);
	document.getElementById('firstrowDC1').textContent = dateConvertion(data.videos[firstV].created);
	document.getElementById('firstrowDC2').textContent = dateConvertion(data.videos[secondV].created);
	document.getElementById('firstrowDC3').textContent = dateConvertion(data.videos[thirdV].created);
	//KENNSLUMYNDBÖND
	let kennRod = data.categories[1].videos;
	firstK = kennRod[0]-1;
	secondK = kennRod[1]-1;
	thirdK = kennRod[2]-1;
	fourthK = kennRod[3]-1;
	fifthK = kennRod[4]-1;
	sixthK = kennRod[5]-1;
	document.getElementById('secondrowH1').textContent = data.videos[firstK].title;
	document.getElementById('secondrowH2').textContent = data.videos[secondK].title;
	document.getElementById('secondrowH3').textContent = data.videos[thirdK].title;
	document.getElementById('secondrowH4').textContent = data.videos[fourthK].title;
	document.getElementById('secondrowH5').textContent = data.videos[fifthK].title;
	document.getElementById('secondrowH6').textContent = data.videos[sixthK].title;
	document.getElementById('secondrowIMG1').src = data.videos[firstK].poster;
	document.getElementById('secondrowIMG2').src = data.videos[secondK].poster;
	document.getElementById('secondrowIMG3').src = data.videos[thirdK].poster;
	document.getElementById('secondrowIMG4').src = data.videos[fourthK].poster;
	document.getElementById('secondrowIMG5').src = data.videos[fifthK].poster;
	document.getElementById('secondrowIMG6').src = data.videos[sixthK].poster;
	document.getElementById('secondrowVD1').textContent = addTimes('0:' + data.videos[firstK].duration, time);
	document.getElementById('secondrowVD2').textContent = addTimes('0:' + data.videos[secondK].duration, time);
	document.getElementById('secondrowVD3').textContent = addTimes('0:' + data.videos[thirdK].duration, time);
	document.getElementById('secondrowVD4').textContent = addTimes('0:' + data.videos[fourthK].duration, time);
	document.getElementById('secondrowVD5').textContent = addTimes('0:' + data.videos[fifthK].duration, time);
	document.getElementById('secondrowVD6').textContent = addTimes('0:' + data.videos[sixthK].duration, time);
	document.getElementById('secondrowDC1').textContent = dateConvertion(data.videos[firstK].created);
	document.getElementById('secondrowDC2').textContent = dateConvertion(data.videos[secondK].created);
	document.getElementById('secondrowDC3').textContent = dateConvertion(data.videos[thirdK].created);
	document.getElementById('secondrowDC4').textContent = dateConvertion(data.videos[fourthK].created);
	document.getElementById('secondrowDC5').textContent = dateConvertion(data.videos[fifthK].created);
	document.getElementById('secondrowDC6').textContent = dateConvertion(data.videos[sixthK].created);
	//SKEMMTIMYNDBÖND
	const skRod = data.categories[2].videos;
	firstS = skRod[0]-1;
	secondS = skRod[1]-1;
	thirdS = skRod[2]-1;
	fourthS = skRod[3]-1;
	fifthS = skRod[4]-1;
	sixthS = skRod[5]-1;
	document.getElementById('thirdrowH1').textContent = data.videos[firstS].title;
	document.getElementById('thirdrowH2').textContent = data.videos[secondS].title;
	document.getElementById('thirdrowH3').textContent = data.videos[thirdS].title;
	document.getElementById('thirdrowH4').textContent = data.videos[fourthS].title;
	document.getElementById('thirdrowH5').textContent = data.videos[fifthS].title;
	document.getElementById('thirdrowH6').textContent = data.videos[sixthS].title;
	document.getElementById('thirdrowIMG1').src = data.videos[firstS].poster;
	document.getElementById('thirdrowIMG2').src = data.videos[secondS].poster;
	document.getElementById('thirdrowIMG3').src = data.videos[thirdS].poster;
	document.getElementById('thirdrowIMG4').src = data.videos[fourthS].poster;
	document.getElementById('thirdrowIMG5').src = data.videos[fifthS].poster;
	document.getElementById('thirdrowIMG6').src = data.videos[sixthS].poster;
	document.getElementById('thirdrowVD1').textContent = addTimes('0:' + data.videos[firstS].duration, time);
	document.getElementById('thirdrowVD2').textContent = addTimes('0:' + data.videos[secondS].duration, time);
	document.getElementById('thirdrowVD3').textContent = addTimes('0:' + data.videos[thirdS].duration, time);
	document.getElementById('thirdrowVD4').textContent = addTimes('0:' + data.videos[fourthS].duration, time);
	document.getElementById('thirdrowVD5').textContent = addTimes('0:' + data.videos[fifthS].duration, time);
	document.getElementById('thirdrowVD6').textContent = addTimes('0:' + data.videos[sixthS].duration, time);
	document.getElementById('thirdrowDC1').textContent = dateConvertion(data.videos[firstS].created);
	document.getElementById('thirdrowDC2').textContent = dateConvertion(data.videos[secondS].created);
	document.getElementById('thirdrowDC3').textContent = dateConvertion(data.videos[thirdS].created);
	document.getElementById('thirdrowDC4').textContent = dateConvertion(data.videos[fourthS].created);
	document.getElementById('thirdrowDC5').textContent = dateConvertion(data.videos[fifthS].created);
	document.getElementById('thirdrowDC6').textContent = dateConvertion(data.videos[sixthS].created);

	firstpageArr = {
  	firstV, secondV, thirdV, firstK, secondK, thirdK, fourthK, fifthK, sixthK, firstS, secondS, thirdS, fourthS, fifthS, sixthS
  	};
  console.log(firstpageArr);

}
getVideo();


function playPause() { 
	var myVideo = document.getElementById("videoContr"); 
	if(myVideo.paused){
		myVideo.play();
		document.getElementById('playBtn').src = './img/pause.svg';
	}
	else{
		myVideo.pause();
		document.getElementById('playBtn').src = './img/play.svg';
	}
} 
function toggleFullScreen() {
	var myVideo = document.getElementById("videoContr"); 
  
	if (!document.fullscreenElement) {
		myVideo.requestFullscreen();
	} 
		else {
			if (document.exitFullscreen) {
				myVideo.exitFullscreen(); 
			}
		}
	}
  
function skip(value) {
	var video = document.getElementById("videoContr");
	video.currentTime += value;
}
  
function mutesound(){
	var video = document.getElementById("videoContr");
	if (video.muted == false) {    
		video.muted = true;
		document.getElementById('soundBtn').src = './img/unmute.svg';
	}
	else {
		video.muted = false;
		document.getElementById('soundBtn').src = './img/mute.svg';
	}
}
  
  
function ChangeVideo(n){
	clickVideo(relatedNum[n]-1);
}



function link(number){
	window.location.href="./player.html";
	clickVideo(firstpageArr[number]);
}