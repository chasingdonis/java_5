var churchillSpeech = {
      'author': 'Churchill',
      'year': 1940,
      'yearIsBCE': false,
      'authorAge': '66'
    },
    ghandiSpeech = {
      'author': 'Ghandi',
      'year': 1942,
      'yearIsBCE': false,
      'authorAge': '73'
    },
    demosthenesSpeech = {
      'author': 'Demosthenes',
      'year': 342,
      'yearIsBCE': true,
      'authorAge': '42'
    },
    speechesArray = [churchillSpeech, ghandiSpeech, demosthenesSpeech];

var name = window.prompt("What's your name?");

if (name.length > 0 && name != "null") {
    console.log ("Hi " + name + "!");
} else{
    console.log( "Ok, I'll cal you User.");
};

document.getElementById('BtnDonate').addEventListener('click', function(){
var favor = window.prompt("Who is your favorite author? Please enter Churchill, Ghandi, or Demosthenes");
    
    switch(favor) {
    case "Churchill":
    console.log( churchillSpeech.author + ' was ' + churchillSpeech.authorAge + ' during this speech.');
    break;
            
    case "Ghandi":
    console.log( ghandiSpeech.author + ' was ' + ghandiSpeech.authorAge + ' during this speech.' );
    break;
            
    case "Demosthenes":
    console.log(demosthenesSpeech.author + ' was ' + demosthenesSpeech.authorAge + ' during this speech.' );
    break;
            
    default:
    console.log("You haven't entered a name");
     break;
    }
});

document.getElementById('BtnChurchill').addEventListener('click', function(){
  console.log('This speech was written by ' + churchillSpeech.author + ' in ' + churchillSpeech.year);
    
  if(churchillSpeech.yearIsBCE == true) {
 console.log("This speech took place before the common era.");
 }else
 {console.log("This speech took place during the common era.");};
});   

document.getElementById('BtnGhandi').addEventListener('click', function(){
 console.log('This speech was written by ' + ghandiSpeech.author + ' in ' + ghandiSpeech.year);
    
 if(ghandiSpeech.yearIsBCE == true) {
 console.log("This speech took place before the common era.");
 }else
 {console.log("This speech took place during the common era.");};
});

document.getElementById('BtnDemosthenes').addEventListener('click', function(){
 console.log('This speech was written by ' + demosthenesSpeech.author + ' in ' + demosthenesSpeech.year);
    
 if(demosthenesSpeech.yearIsBCE == true) {
 console.log("This speech took place before the common era.");
 }else
 {console.log("This speech took place during the common era.");};
});