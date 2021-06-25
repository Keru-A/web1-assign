//fetch image for shepherd page
fetch ('https://api.unsplash.com/photos/tBY61CbBJg8?client_id=I3qdnpZXWiIkcwPOmvVcZ9yWwdepIH36eEonzKTA3ug')
    .then(res => {
        return res.json();
    })
    
    .then(data => {
            console.log(data.urls.raw);
            let img = document.getElementById("shepherdbackgroundimg");
            img.src = (data.urls.raw);
        })

//fetch image for wide shepherd
fetch ('https://api.unsplash.com/photos/lOLywaWn8VY?client_id=I3qdnpZXWiIkcwPOmvVcZ9yWwdepIH36eEonzKTA3ug')
    .then(res => {
        return res.json();
    })
    
    .then(data => {
            console.log(data.urls.raw);
            let img = document.getElementById("shepherdwideimg");
            img.src = (data.urls.raw);
        })

//fetch image for shepherd blurb
fetch ('https://api.unsplash.com/photos/lfy5UQnAJUE?client_id=I3qdnpZXWiIkcwPOmvVcZ9yWwdepIH36eEonzKTA3ug')
    .then(res => {
        return res.json();
    })
    
    .then(data => {
            console.log(data.urls.raw);
            let img = document.getElementById("shepherdblurbimg");
            img.src = (data.urls.raw);
        })

//scroll to top function
topButton = document.getElementById("topbutton");

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}