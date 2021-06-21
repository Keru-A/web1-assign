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



        $(function () {
            $(".navhome").on("click", function (ev) {
                ev.preventDefault();
                $(".content_div").animate({
                    "margin-left": $(".content_div").width() + 100
                }).promise().done(function () {
                    $(".content_div").load("/three", function () {
                        $(".content_div").css({
                            "margin-left": -1000
                        });
                        $(".content_div").animate({
                            "margin-left": 0
                        });
                    });
                });
            });
        });
