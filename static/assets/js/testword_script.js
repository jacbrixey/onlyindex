

new URLSearchParams(window.location.search).forEach((value,name)=>{

    console.log(name)
    console.log(value)
    var fileword = value;


    var url = "./static/assets/chowords/" + fileword + ".json";


    var xhr = new XMLHttpRequest();
    xhr.open('HEAD', url, false);
    xhr.send();
    console.log(xhr)

    document.getElementById("wordsearched").innerHTML =`<h1>${fileword} </h1>`




    if (xhr.status == "404") {
        //console.log("File doesn't exists");
        let div = document.createElement('p')
        div.innerHTML =`<h3>No results found</h3>`
        document.getElementById("word").appendChild(div)

    } else  {
        console.log("here");
        /*needs slash in front of static to make absolute path and go around internationalization middleware*/
        $.getJSON("/static/assets/words/" + fileword + ".json", function(data){


                var senses = data['sense'];
                console.log(senses.length)
                var audios = data['audio']
                var variant = data['variant']
                var relations = data['relations']
                var usage = data['usage-type']

                for (var i = 0; i <senses.length; i++){
                    let wording = senses[i];
                    wordtemplate(wording, audios, variant,relations,usage)


                }
            });

    }
    })



function wordtemplate(wording, mp3, variant, relations,usage){
var examples = wording['examples']

console.log(wording.sciencename)
console.log(mp3[0])


//var exCHO = wording['exCho'];
//var exENG = wording['exEng'];

let div = document.createElement('p')
div.innerHTML =`
<div class="row container border-bottom">
            <div class="col-md-3 col-sm-12">


                <div class="row">
                    <div class="col-md-12 col-sm-6 ">
                        <h3>Usage: ${wording.POS}</h4>
                        ${mp3.map((item, i)=>
				    `<p class = "text-success" style="font-size:18px;"> audio:
						<audio controls>
                            <source src="/mediafiles/${item}" type="audio/mpeg">
                            Your browser does not support the audio element.
                        </audio>
                        </p>
				    `
				).join('')}


						<p style="font-size:18px;">Variants: ${variant}</p>
						<p style="font-size:16px;">Usage: ${usage}</p>
						<p style="font-size:16px;">Scientific name: ${wording.sciencename}</p>

						<br>
                    </div>
                </div>
            </div>

            <div class="col-md-7 col-sm-12 border-start border-1">
				<h3>Definition: ${wording.defin}</h3>

				${examples.map((item, i)=>
				    `<h4 style="padding-left:18px;">${item.choctaw} </h4>
				    <h5 class="text-muted" style="padding-left:18px;" >${item.english}</h5>
				    `
				).join('')}
				${relations.map((itm, j)=>
				`$<h5>Related word: {itm.rel}</h5>
				`
				).join('')}

            </div>
            <div class="col-md-2 col-sm-12">
                <p> Text search coming soon!  </p>
            </div>
            <br>
        </div>

       `
document.getElementById("word").appendChild(div)

}



// Get the main
const main = document.querySelector(".maincontent");




