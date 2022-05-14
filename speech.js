if("webkitSpeechRecognition" in window){
    let speechRecognition = new webkitSpeechRecognition();
    speechRecognition.continous = true;
    speechRecognition.interimResults = true;
    let textBox = $("#textBox");
    let content = "";

    console.log("Speech Recognition Created");

    speechRecognition.onstart = () => {
        instructions.text("Recording Voice");
    }

    let instructions = $("#instructions")

    $("#go").click((event) => {
        if(content.length){
            content +="";
        }
        speechRecognition.start();
    });

} else {
    console.log("Failed to load speech recognition");
}

