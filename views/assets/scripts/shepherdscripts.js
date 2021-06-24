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
