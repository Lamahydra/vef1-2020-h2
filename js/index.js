//browser-sync start --server --files ["* .html", "* .js", "* .css"]


function getDataHR (newMinutes) {
    let MINS_PER_YEAR = 24 * 365 * 60;
    let MINS_PER_MONTH = 24 * 30 * 60;
    let MINS_PER_WEEK = 24 * 7 * 60;
    let MINS_PER_DAY = 24 * 60;
    let MINS_PER_HOUR= 60;
    let minutes = newMinutes;

    let years= Math.floor(minutes / MINS_PER_YEAR);
    minutes = minutes - years * MINS_PER_YEAR;
    let months = Math.floor(minutes / MINS_PER_MONTH);
    minutes = minutes - months * MINS_PER_MONTH;
    let weeks = Math.floor(minutes / MINS_PER_WEEK);
    minutes = minutes - weeks * MINS_PER_WEEK;
    let days = Math.floor(minutes / MINS_PER_DAY);
    minutes = minutes - days * MINS_PER_DAY;
    let hours = Math.floor(minutes / MINS_PER_HOUR);
    minutes = minutes - hours * MINS_PER_DAY;

    let time = {minutes, hours, days, weeks, months, years};

    return time;
}

var utcSeconds = 1604246400;
var d = new Date(0); // The 0 there is the key, which sets the date to the epoch
d.setUTCSeconds(utcSeconds);
console.log(d);

// JavaScript program to illustrate  
    // calculation of no. of days between two date  
  
    // To set two dates to two variables 
  /*  var date1 = new Date("06/30/2019"); 
var date2 = new Date("07/30/2019"); 
  
// To calculate the time difference of two dates 
var Difference_In_Time = date2.getTime() - date1.getTime(); 
  
// To calculate the no. of days between two dates 
var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24); 
  
//To display the final no. of days (result) 
document.write("Total number of days between dates  <br>"
               + date1 + "<br> and <br>" 
               + date2 + " is: <br> " 
               + Difference_In_Days); */

function dateConvertion(epochz){
	let current = new Date();
	let differenceMS = current.getTime() - epochz;

	var days = differenceMS / (1000 * 3600 * 24); 
console.log(days)

}
dateConvertion(1604246400000)




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


async function getVideo(){
	const response = await fetch('./videos.json');
	const data = await response.json();


	let time = "00:00:00";
	console.log(data.videos)
	console.log(getDataHR(data.videos[0].created))




	//TITLES
	document.getElementById('firstTitle').textContent = data.categories[0].title;
	document.getElementById('secondTitle').textContent = data.categories[1].title;
	document.getElementById('thirdTitle').textContent = data.categories[2].title;
	//NYLEG MYNDBÖND
	const nyRod = data.categories[0].videos;
	const firstV = nyRod[0]-1;
	const secondV = nyRod[1]-1;
	const thirdV = nyRod[2]-1;
	document.getElementById('firstrowH1').textContent = data.videos[firstV].title;
	document.getElementById('firstrowH2').textContent = data.videos[secondV].title;
	document.getElementById('firstrowH3').textContent = data.videos[thirdV].title;
	document.getElementById('firstrowIMG1').src = data.videos[firstV].poster;
	document.getElementById('firstrowIMG2').src = data.videos[secondV].poster;
	document.getElementById('firstrowIMG3').src = data.videos[thirdV].poster;
	document.getElementById('firstrowVD1').textContent = addTimes('0:' + data.videos[firstV].duration, time);
	document.getElementById('firstrowVD2').textContent = addTimes('0:' + data.videos[secondV].duration, time);
	document.getElementById('firstrowVD3').textContent = addTimes('0:' + data.videos[thirdV].duration, time);
	//KENNSLUMYNDBÖND
	const kennRod = data.categories[1].videos;
	const firstK = kennRod[0]-1;
	const secondK = kennRod[1]-1;
	const thirdK = kennRod[2]-1;
	const fourthK = kennRod[3]-1;
	const fifthK = kennRod[4]-1;
	const sixthK = kennRod[5]-1;
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
	//SKEMMTIMYNDBÖND
	const skRod = data.categories[2].videos;
	const firstS = skRod[0]-1;
	const secondS = skRod[1]-1;
	const thirdS = skRod[2]-1;
	const fourthS = skRod[3]-1;
	const fifthS = skRod[4]-1;
	const sixthS = skRod[5]-1;
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

}

getVideo();
