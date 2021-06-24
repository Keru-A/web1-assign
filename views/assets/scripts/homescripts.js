//Display breeds on mouseover


// fetch image for homepage from unsplash api

fetch ('https://api.unsplash.com/photos/Qu-T7JOu-Iw?client_id=I3qdnpZXWiIkcwPOmvVcZ9yWwdepIH36eEonzKTA3ug')
    .then(res => {
        return res.json();
    })

    .then(data => {
            console.log(data.urls.raw);
            let img = document.getElementById("homebackgroundimg");
            img.src = (data.urls.raw);
        })


//fetch image for home page husky link
fetch ('https://api.unsplash.com/photos/NKN25UfGfkQ?client_id=I3qdnpZXWiIkcwPOmvVcZ9yWwdepIH36eEonzKTA3ug')
    .then(res => {
        return res.json();
    })
        
    .then(data => {
            console.log(data.urls.raw);
            let img = document.getElementById("breedoneimgsrc");
             img.src = (data.urls.raw);
        })

//fetch image for home page shepherd link
fetch ('https://api.unsplash.com/photos/Ce2FZDbx2T0?client_id=I3qdnpZXWiIkcwPOmvVcZ9yWwdepIH36eEonzKTA3ug')
    .then(res => {
        return res.json();
    })
    
    .then(data => {
            console.log(data.urls.raw);
            let img = document.getElementById("breedtwoimgsrc");
            img.src = (data.urls.raw);
        })


//Scroll to Top button
topButton = document.getElementById("topbutton");

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}