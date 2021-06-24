// fetch image for husky page
fetch ('https://api.unsplash.com/photos/54jiFcnouyw?client_id=I3qdnpZXWiIkcwPOmvVcZ9yWwdepIH36eEonzKTA3ug')
    .then(res => {
        return res.json();
    })
    
    .then(data => {
            console.log(data.urls.raw);
            let img = document.getElementById("huskybackgroundimg");
            img.src = (data.urls.raw);
        })
