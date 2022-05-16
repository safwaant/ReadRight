function renderText(annotatedText) {
    console.log("Beginning rendering text")
    for(let [k,v] of Object.entries(annotatedText)){
        let div = document.createElement("span");
        div.innerHTML = k + "  ";
        switch(v){
            case 0:
                div.classList.add("text_correct");
                break;
            case 1:
                div.classList.add("text_wrong");
                break;
            case 2:
                div.classList.add("text_out_of_order");   
                break; 
            case 3: 
                div.classList.add("text_missing");    
                break;
        }
        document.getElementById("result").appendChild(div);
        console.log(k);
    }
    console.log("Finished rendering text");


}