var wordlist = [];
var wordsource = {};

var fileEscapes = [
  ["á", "a"],
  ["í", "i"],
  ["ó","o"]
];

$(".search").typeahead({
  source: wordlist,
  highlighter: function(item){
    return "<span>" + wordsource[ item ].official[0] + "</span>";
  },
  updater: function(item){

    var fileword = wordsource[ item ].official[0];
    for(var i=0;i<fileEscapes.length;i++){
      fileword = replaceAll(fileword, fileEscapes[i][0], fileEscapes[i][1]);
    }
    return wordsource[ item ].official[0];
  }
});

function removeAccents(content){
  var accents = {
    "a": ["á"],
    "e": ["é"],
    "i": ["í"],
    "o": ["ó"],
    "-": ["/"]
  };
  for(var letter in accents){
    for(var a=0;a<accents[letter].length;a++){
      content = replaceAll(content, accents[letter][a], letter);
    }
  }
  return content;
}


function replaceAll(src, oldr, newr){
  while(src.indexOf(oldr) > -1){
    src = src.replace(oldr, newr);
  }
  return src;
}

$.getJSON("/static/assets/js/words.json", function(rows){
  for(var r=0;r<rows.length;r++){
    var words = replaceAll(rows[r], '"', '').split(',');
    for(var w=0;w<words.length;w++){
      words[w] = words[w].split(":")[0].split(".")[0];
    }
    var slugs = words.concat();
    for(var s=0;s<slugs.length;s++){
      slugs[s] = removeAccents( slugs[s].toLowerCase() );
    }
    wordlist.push(slugs[0]);
    wordsource[ slugs[0] ] = {
      official: words

    };

  }
});


//buttons to fill in accented characters in search bar
$('#btn1').on('click', function () {
        var text = $('#text');
        text.val(text.val() + 'á');
});
$('#btn2').on('click', function () {
        var text = $('#text');
        text.val(text.val() + 'í');
});
$('#btn3').on('click', function () {
        var text = $('#text');
        text.val(text.val() + 'ó');
});
$('#btn4').on('click', function () {
        var text = $('#text');
        text.val(text.val() + 'a̱');
});
$('#btn5').on('click', function () {
        var text = $('#text');
        text.val(text.val() + 'i̱');
});
$('#btn6').on('click', function () {
        var text = $('#text');
        text.val(text.val() + 'o̱');
});



