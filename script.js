
const count = 10;
const apiKey ='';
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;


// GET PHOTOS FROM UNSPLASH API
async function getPhotos(){
	try{
		const response = await fetch(apiUrl);
		const data = await response.json();
		consol.log(data);
	}catch(error){
		//catch error here

	}
}


//on load
getPhotos();