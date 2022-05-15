
if("webkitSpeechRecognition" in window){
    let speechRecognition = new webkitSpeechRecognition();
    speechRecognition.continous = true;
    speechRecognition.interimResults = true;
    speechRecognition.lang = "en-US";
    let textBox = $("#textbox");
    let instructions = $("#instructions")
    let transcript = "";
    let recording = false;


    const annotatedText = {
        "Cat":0,
        "in":0,
        "uh":2,
        "the":0,
        "bat":1
      }


    console.log("Speech Recognition Created");

    speechRecognition.onstart = () => {
        instructions.text("Recording Voice");
    }

    speechRecognition.onspeechend = () => {
        instructions.text("Finished Recording");
        document.getElementById('go_text').classList.toggle('fa-stop');
        document.getElementById('go_text').classList.toggle('fa-play');
        recording = false;
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
    
    /*$("#stop").click((event)=>{
        speechRecognition.stop();
        textBox.val("");
    });*/

    $("#submit").click((event) => {
        /*let promptText = document.getElementsById("prompt").value;
        let compareObj = new ComparisonAlgoObj(promptText, transcript);
        const annotatedText = compareObj.compareAlgo();*/
        renderText(annotatedText);
        
    });

    $("#go").click((event) => {
        if (recording) {
            document.getElementById('go_text').classList.toggle('fa-stop');
            document.getElementById('go_text').classList.toggle('fa-play');
            speechRecognition.stop();
            textBox.val("");
            recording = false;
        } else {
            
            document.getElementById('go_text').classList.toggle('fa-play');
            document.getElementById('go_text').classList.toggle('fa-stop');
            transcript = "";
            speechRecognition.start();
            recording = true;
        }      
    });

} else {
    console.log("Failed to load speech recognition");
}
