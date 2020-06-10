$(document).ready(function() {
  $("form#wordpuzzle").submit(function(event) {
    const sentence = $("input#sentence").val();
    const dashedPuzzle = [];
    
    for (let index = 0; index < sentence.length; index++) {
      var character = sentence[index]; 
      if (character === 'a' || character === 'e' || character === 'i' || character === 
      'o' || character === 'u') {
        dashedPuzzle[index] = '-'
      } else {      
        dashedPuzzle[index] = character;
      }
    }

    $("#puzzle").text(dashedPuzzle.join(''));
    $("#wordpuzzle").hide();
    $("#puzzle").show();
    console.log(dashedPuzzle); 

    event.preventDefault();

  });
});