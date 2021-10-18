const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray =[];
const count = 10;
const apiKey ='';
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;



//helper function to set attributes on DOM ELEMENTS
 
function setAttribute(element, attributes){
	for(const key in attributes){
		element.setAttribute(key,attributes[key])
	}
}
//create elements for links 7 photos, add to dom

function displayPhotos(){
	//run function for each 
	photosArray.forEach((photo) =>{
		// create <a> to link unsplash
		const item = document.createElement('a');
		
		setAttribute(item, {
			href:  photo.links.html,
			target: '_blank'
		})

		//create <img> for photo

		const img = document.createElement('img');
		setAttribute(img, {
			src: photo.urls.regular,
			alt: photo.alt_description,
			title: photo.alt_description,
		})
		
		//put <img inside <a> then poth inside image container
		item.appendChild(img);
		imageContainer.appendChild(item);


	});
}

// GET PHOTOS FROM UNSPLASH API
async function getPhotos(){
	try{
		const response = await fetch(apiUrl);
		photosArray = await response.json();
		displayPhotos();
		console.log(photosArray)
		 
	}catch(error){
		//catch error here

	}
}
//check to see if scrolling near bottom of page, load more photos

window.addEventListener('scroll',()=>{
	if(window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000){
		getPhotos();
	}
})

//on load
getPhotos();