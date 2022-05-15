function renderText(annotatedText) {
    // let colors = {
    //     0:
    //     1:
    //     2:
    // }
    for(let [k,v] in annotatedText){
        let div = document.createElement("p");
        div.innerHTML = k;
        switch(v){
            case 0:
                div.classList.add("text_correct");
            case 1:
                div.classList.add("text_wrong");
            case 2:
                div.classList.add("text_out_of_order");    
            case 3: 
                div.classList.add("text_missing");    
        }
        document.getElementById("textbox").appendChild(div);
    }
    


}