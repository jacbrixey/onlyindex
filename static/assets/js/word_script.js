var wordsalllist = [
"kata̱lichih",
  "pisachokmah",
  "tabókoli",
  "á mi̱tih",
  "áh"
]


var fileEscapes = [
  ["á", "á"],
  ["í", "í"],
  ["ó","ó"]
];

function fixaccents(fileword){


    for(var i=0;i<fileEscapes.length;i++){
      fileword = replaceAll(fileword, fileEscapes[i][0], fileEscapes[i][1]);
    }
    return fileword;
  }

new URLSearchParams(window.location.search).forEach((value,name)=>{


    var fileword1 = value;
    var fileword = fixaccents(fileword1)
    var url = "./static/assets/words/" + fileword + ".json";
    document.getElementById("wordsearched").innerHTML =`<h1>${fileword} </h1>`





        //console.log("File doesn't exists");


        $.getJSON("/static/assets/words/" + fileword + ".json")
        .done(function (data) { //if word found
         var senses = data['sense'];
//                console.log(senses.length)
                var audios = data['audio']
                var variant = data['variant']
                var usage = data['usage-type']
                var complexrelations = data['complexrelations']
                var comparerelations = data['comparerelations']


                for (var i = 0; i <senses.length; i++){
                    let wording = senses[i];
                    wordtemplate(wording, audios, variant, usage, complexrelations, comparerelations, fileword)
                }})

        .fail(function (jqXHR, textStatus, errorThrown) {//if word not found


            var arrlev = [];
            var countarrlev = 0;
            var resultlev = 0;


            for (var i = 0; i<wordsalllist.length; i++){
                let wording2 = wordsalllist[i];
                resultlev = levenshtein (wording2, fileword)
                if (resultlev <3){
                    arrlev[countarrlev] = wording2
                    countarrlev+=1
                }
            }


            console.log(countarrlev)
            console.log('hello')
            let div = document.createElement('p')
            div.innerHTML =
            `
            <h3 >No results found</h3>
            <h4 style="padding-left:36px;">Did you mean: </h4>

            ${arrlev.map((item, j)=>
		        `<li style="padding-left:36px;"><a href="http://localhost:8000/en/word?word=${item}"> ${item}</a></li>
				    `
				).join('')}
            `
            document.getElementById("noword").appendChild(div)

             });



        /*needs slash in front of static to make absolute path and go around internationalization middleware*/
/*        $.getJSON("/static/assets/words/" + fileword + ".json", function(data){


                var senses = data['sense'];
//                console.log(senses.length)
                var audios = data['audio']
                var variant = data['variant']
                var usage = data['usage-type']
                var complexrelations = data['complexrelations']


                for (var i = 0; i <senses.length; i++){
                    let wording = senses[i];
                    wordtemplate(wording, audios, variant, usage, complexrelations)
                }

            });*/


    })

function levenshtein(s, t) {
    if (s === t) {
        return 0;
    }
    var n = s.length, m = t.length;
    if (n === 0 || m === 0) {
        return n + m;
    }
    var x = 0, y, a, b, c, d, g, h;
    var p = new Uint16Array(n);
    var u = new Uint32Array(n);
    for (y = 0; y < n;) {
        u[y] = s.charCodeAt(y);
        p[y] = ++y;
    }

    for (; (x + 3) < m; x += 4) {
        var e1 = t.charCodeAt(x);
        var e2 = t.charCodeAt(x + 1);
        var e3 = t.charCodeAt(x + 2);
        var e4 = t.charCodeAt(x + 3);
        c = x;
        b = x + 1;
        d = x + 2;
        g = x + 3;
        h = x + 4;
        for (y = 0; y < n; y++) {
            a = p[y];
            if (a < c || b < c) {
                c = (a > b ? b + 1 : a + 1);
            }
            else {
                if (e1 !== u[y]) {
                    c++;
                }
            }

            if (c < b || d < b) {
                b = (c > d ? d + 1 : c + 1);
            }
            else {
                if (e2 !== u[y]) {
                    b++;
                }
            }

            if (b < d || g < d) {
                d = (b > g ? g + 1 : b + 1);
            }
            else {
                if (e3 !== u[y]) {
                    d++;
                }
            }

            if (d < g || h < g) {
                g = (d > h ? h + 1 : d + 1);
            }
            else {
                if (e4 !== u[y]) {
                    g++;
                }
            }
            p[y] = h = g;
            g = d;
            d = b;
            b = c;
            c = a;
        }
    }

    for (; x < m;) {
        var e = t.charCodeAt(x);
        c = x;
        d = ++x;
        for (y = 0; y < n; y++) {
            a = p[y];
            if (a < c || d < c) {
                d = (a > d ? d + 1 : a + 1);
            }
            else {
                if (e !== u[y]) {
                    d = c + 1;
                }
                else {
                    d = c;
                }
            }
            p[y] = d;
            c = a;
        }
        h = d;
    }

    return h;
}



function takeMeThere(a) {
//    console.log('made it here')
    var searchParams = new URLSearchParams(window.location.search);

    searchParams.set(a);

    window.location.search = searchParams.toString();
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




