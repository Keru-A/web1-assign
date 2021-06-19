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


fetch ('https://api.unsplash.com/photos/54jiFcnouyw?client_id=I3qdnpZXWiIkcwPOmvVcZ9yWwdepIH36eEonzKTA3ug')
    .then(res => {
        return res.json();
    })
    
    .then(data => {
            console.log(data.urls.raw);
            let img = document.getElementById("huskybackgroundimg");
            img.src = (data.urls.raw);
        })
