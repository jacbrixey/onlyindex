
var words =[
"kata̱lichih",
  "pisachokmah",
  "tabókoli",
  "á mi̱tih",
  "áh"
]

var wordlengthfile = 27;//4368 is number of words in words.json
var randonum = Math.floor(Math.random() * wordlengthfile);
console.log(randonum)



var fileword = words[randonum];
console.log(fileword)



var url = "./static/assets/words/" + fileword + ".json";


var xhr = new XMLHttpRequest();
xhr.open('HEAD', url, false);
//xhr.send();
console.log(xhr)

document.getElementById("wordsearched").innerHTML =`<h1>${fileword} </h1>`


if (xhr.status == "404") {
        //console.log("File doesn't exists");
        let div = document.createElement('p')
        div.innerHTML =`<h3>No results found</h3>`
        document.getElementById("word").appendChild(div)

    } else  {

        /*needs slash in front of static to make absolute path and go around internationalization middleware*/
        $.getJSON("/static/assets/words/" + fileword + ".json", function(data){


                var senses = data['sense'];
                console.log(senses.length)
                var audios = data['audio']
                var variant = data['variant']
                var usage = data['usage-type']
                var complexrelations = data['complexrelations']


                for (var i = 0; i <senses.length; i++){
                    let wording = senses[i];
                    wordtemplate(wording, audios, variant, usage, complexrelations, fileword)
                }

            });

    }




function wordtemplate(wording, mp3, variant, usage, complexrelations, comparerelations, fileword){
var examples = wording['examples']
var senserelations = wording['relations']

//console.log(wording.sciencename)


//var exCHO = wording['exCho'];
//var exENG = wording['exEng'];

let div = document.createElement('p')
div.innerHTML =`
<div class="row container border-bottom">
            <div class="col-md-4 col-sm-12">


                <div class="row">
                    <div class="col-md-12 col-sm-6 ">
                        <h3>Usage: ${wording.POS}</h3>
                        ${mp3.map((item, i)=>
				    `<p class = "text-success" style="font-size:18px;"> audio:
						<audio controls style="width: 80%;">
                            <source src="/mediafiles/${item}" type="audio/mpeg">
                            Your browser does not support the audio element.
                        </audio>
                        </p>
				    `
				).join('')}

						${variant ? `<p style="font-size:18px;">Variants: ${variant}</p>`: ""}
						${usage ? `<p style="font-size:16px;">Usage: ${usage}</p>` :""}
						${wording.sciencename ? `<p style="font-size:16px;">Scientific name: ${wording.sciencename}</p>` :""}


						<br>
                    </div>
                </div>
            </div>

            <div class="col-md-8 col-sm-12 border-start border-1">

				<h3>Definition: ${wording.defin}</h3>

				${examples.map((item, i)=>
				    `<h4 style="padding-left:18px;">${item.choctaw} </h4>
				    <h5 class="text-muted" style="padding-left:18px;" >${item.english}</h5>
				    `
				).join('')}

                <br>
                <h5>Related word(s):</h5>
                ${complexrelations.map((item, k)=>

				    `<h4>Compound(s) or variant(s): </h4>
				    <h4 style="padding-left:18px;"> ${item.complexrelatedvalue} -  <a href="http://jacbrixey.pythonanywhere.com/en/word?word=${item.complexrelatedword}">${item.complexrelatedword} </a></h4>

				    `
				).join('')}
				<br>

				${comparerelations.map((item, n)=>
				    `<h4 style="padding-left:18px;"> See also: -  <a href="http://jacbrixey.pythonanywhere.com/en/word?word=${item.compareelatedvalue}">${item.compareelatedvalue} </a></h4>
				    `
				).join('')}

                <br>

				${senserelations.map((item, j)=>
				    `<h4>Synonym(s) or antonym(s): </h4>
				    <h4 style="padding-left:18px;"> ${item.relatedtype} - <a href="http://jacbrixey.pythonanywhere.com/en/word?word=${item.relatedword}">${item.relatedword}</a></h4>
				    `
				).join('')}
                <p> See more examples of <a href="http://jacbrixey.pythonanywhere.com/en/text?${fileword}">${fileword}</a> in texts (coming soon!) </p>
                <br>
            </div>

        </div>

       `
document.getElementById("word").appendChild(div)
}



// Get the main
const main = document.querySelector(".maincontent");




