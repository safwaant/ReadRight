if("webkitSpeechRecognition" in window){
    let speechRecognition = new webkitSpeechRecognition();
    speechRecognition.continous = true;
    speechRecognition.interimResults = true;
    speechRecognition.lang = "en-US";
    let textBox = $("#textbox");
    let instructions = $("#instructions")
    let transcript = "";

    console.log("Speech Recognition Created");

    speechRecognition.onstart = () => {
        instructions.text("Recording Voice");
    }

    speechRecognition.onspeechend = () => {
        instructions.text("Finished Recording");
    }

    speechRecognition.onerror = () => {
        instructions.text("Error: Failed to Record");
    }

    speechRecognition.onresult = (event) => {
        for(let i  = event.resultIndex; i < event.results.length; i++){
            if(event.results[i].isFinal){
                transcript += event.results[i][0].transcript;
            }
        }
        console.log(transcript);
        textBox.val(transcript);
    }
    
    $("#stop").click((event)=>{
        speechRecognition.stop();
        textBox.val("");
        transcript = "";
    });

    $("#go").click((event) => { 
        transcript = "";       
        speechRecognition.start();
    });

} else {
    console.log("Failed to load speech recognition");
}
