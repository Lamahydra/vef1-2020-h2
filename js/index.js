

async function getVideo(){
	const response = await fetch('./videos.json');
	const data = await response.json();
	console.log(data.categories[0]);

	document.getElementById('firstTitle').textContent = data.categories[0].title;
	document.getElementById('secondTitle').textContent = data.categories[1].title;
	document.getElementById('thirdTitle').textContent = data.categories[2].title;
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