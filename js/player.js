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
  
	  
		  
	  
  
  
	  //document.getElementById('tag-id').innerHTML = '<ol><li>html data</li></ol>';
  
  
  }
  clickVideo(0);    
  
  
  
	  //controls for video.js HTML5 video player
  
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