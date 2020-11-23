//browser-sync start --server --files ["* .html", "* .js", "* .css"]
let videoMinute;
let videoHours;
let videoDays;
let videoWeeks;
let videoYears;
let v6;
let v1h = 0;
let v2h = 0;
let v3h = 0;
let v4h = 0;
let v5h = 0;
let v6h = 0;

var minutes = 635052; // 635052 = (24*60)*365 + (24*60)*30*2 + (24*60)*14 + (24*60)*2 + 12;
getDataHR(minutes); // 1 year, 2 months, 2 week, 2 days, 12 minutes

function getDataHR (newMinutes) {
    MINS_PER_YEAR = 24 * 365 * 60;
    MINS_PER_MONTH = 24 * 30 * 60;
    MINS_PER_WEEK = 24 * 7 * 60;
    MINS_PER_DAY = 24 * 60;
    MINS_PER_HOUR= 60;
    minutes = newMinutes;
    years = Math.floor(minutes / MINS_PER_YEAR);
    minutes = minutes - years * MINS_PER_YEAR;
    months = Math.floor(minutes / MINS_PER_MONTH);
    minutes = minutes - months * MINS_PER_MONTH;
    weeks = Math.floor(minutes / MINS_PER_WEEK);
    minutes = minutes - weeks * MINS_PER_WEEK;
    days = Math.floor(minutes / MINS_PER_DAY);
    minutes = minutes - days * MINS_PER_DAY;
    hours = Math.floor(minutes / MINS_PER_HOUR);
    minutes = minutes - hours * MINS_PER_DAY;

    let x = new Date(years, months, days, hours, minutes, 0, 0);
    console.log(x);

    return years + " year(s) " + months + " month(s) " + weeks + " week(s) " + days + " day(s) " + hours + " hour(s)" + minutes + " minute(s)"
    //return hrData; // 1 year, 2 months, 2 week, 2 days, 12 minutes
}


async function getVideo(){
	const response = await fetch('./videos.json');
	const data = await response.json();
	console.log(data.categories[0]);

	//TITLES
	document.getElementById('firstTitle').textContent = data.categories[0].title;
	document.getElementById('secondTitle').textContent = data.categories[1].title;
	document.getElementById('thirdTitle').textContent = data.categories[2].title;

	//HOW LONG VIDEO IS
	let v1 = data.videos[0].duration;
	let v2 = data.videos[1].duration;
	let v3 = data.videos[2].duration;
	let v4 = data.videos[3].duration;
	let v5 = data.videos[4].duration;
	let v6 = data.videos[5].duration;
	videoMinute = {v1, v2, v3, v4, v5, v6} 

	console.log(getDataHR(v3));


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
	console.log(data.videos[firstV].poster);
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
	console.log(data.videos[firstV].poster);

}
getVideo();

/*
fetch('./videos.json')
	.then(function(resp){
		return resp.json();

	})
	.then(function(data){
		console.log(data);
	});*/