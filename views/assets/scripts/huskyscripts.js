// fetch image for husky page
fetch ('https://api.unsplash.com/photos/mtMFJz071Cs?client_id=I3qdnpZXWiIkcwPOmvVcZ9yWwdepIH36eEonzKTA3ug')
    .then(res => {
        return res.json();
    })
    
    .then(data => {
            console.log(data.urls.raw);
            let img = document.getElementById("huskybackgroundimg");
            img.src = (data.urls.raw);
        })

// //fetch image for wide husky image
fetch ('https://api.unsplash.com/photos/oIuDXlOJSiE?client_id=I3qdnpZXWiIkcwPOmvVcZ9yWwdepIH36eEonzKTA3ug')
    .then(res => {
        return res.json();
    })
    
    .then(data => {
            console.log(data.urls.raw);
            let img = document.getElementById("huskywideimg");
            img.src = (data.urls.raw);
        })

// //fetch image for husky blurb
fetch ('https://api.unsplash.com/photos/LmJ3n1MfrTI?client_id=I3qdnpZXWiIkcwPOmvVcZ9yWwdepIH36eEonzKTA3ug')
    .then(res => {
        return res.json();
    })
    
    .then(data => {
            console.log(data.urls.raw);
            let img = document.getElementById("huskyblurbimg");
            img.src = (data.urls.raw);
        })

topButton = document.getElementById("topbutton");

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

