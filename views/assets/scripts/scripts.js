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






    // fetch("https://reqres.in/api/users?page=2")
    //     .then(res => res.json())
    //     .then(data => {
    //         data.data.forEach(u => {                
    //             let li = document.createElement("li");
    //             let container = document.createElement("div");

    //             let nameDiv = document.createElement("div")
    //             nameDiv.innerHTML = `${u.first_name} ${u.last_name}`

    //             let emailDiv = document.createElement("div")
    //             emailDiv.innerHTML = `${u.email}`
    //             container.append(nameDiv,emailDiv);

    //             let img = document.createElement("img");
    //             img.src = u.avatar;

    //             li.append(img,container);

    //             document.querySelector("#cards").append(li);
    //         })
    //     });