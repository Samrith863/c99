var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();
function restart(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}
recognition.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML=content;
    console.log(content);
    talk();
}

function talk(){
var synth=window.speechSynthesis;
var speak_data=document.getElementById("textbox").value;
var utter=new SpeechSynthesisUtterance(speak_data);
synth.speak(utter);
Webcam.attach(camera);
}

var camera=document.getElementById("cam");
Webcam.set({
    height:250,
    width:360,
    image_format:'jpg',
    jpg_quality:90
});