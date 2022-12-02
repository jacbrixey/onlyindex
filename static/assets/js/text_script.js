new URLSearchParams(window.location.search).forEach((value,name)=>{

    console.log(name)

    var url = "./static/assets/texts/" + name + ".json";
    document.getElementById("textsearched").innerHTML =`<h1>${name} </h1>`





        //console.log("File doesn't exists");


        $.getJSON("/static/assets/texts/" + name + ".json")
        .done(function (data) { //if word found
                    console.log(data)


				});

        /*.fail(function (jqXHR, textStatus, errorThrown) {//if word not found




            console.log(countarrlev)
            console.log('hello')
            let div = document.createElement('p')
            div.innerHTML =
            `
            <h3 >No results found</h3>
            <h4 style="padding-left:36px;">No results </h4>
            `
            document.getElementById("notext").appendChild(div)

             });*/





    })

    // Get the main
const main = document.querySelector(".maincontent");