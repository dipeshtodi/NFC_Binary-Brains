const sendChatBtn=document.querySelector(".chat-input i");
const chatInput=document.querySelector(".chat-input textarea")
const chatbox=document.querySelector(".chatbox")



let userMessage;

const API_KEY="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";

const createChatLi=(message,className)=>{//Create a chat <li> element with passed message and className
    const chatLi=document.createElement("li")
    chatLi.classList.add("chat",className);
    let chatContent=className==="outgoing"?`<p>${message}</p>`:`<i class='material-icons'>smart_toy</i><p><p>${message}</p>`
    chatLi.innerHTML=chatContent;
    return chatLi;
}

const generateResponse=(incomingChatLi)=>{


    const API_URL="https://api.openai.com/v1/chat/completions";
    const messageElement=incomingChatLi.querySelector("p");

    const requestOptions={//this is only for converting data in json file so that we can easily fetch the content from the API data
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${API_KEY}`
        },
        body:JSON.stringify({
            model: "gpt-3.5-turbo-0613",
            messages:
            [{role: "user",content:userMessage}]

        })
    }

    fetch(API_URL,requestOptions).then(res=>res.json()).then(data=>{
        messageElement.textContent=data.choices[0].message.content;
        console.log(data)
    }).catch((err)=>{
        messageElement.textContent="Oops! Something went wrong.. ";    })
}

const handleChat=()=>{
    userMessage=chatInput.value.trim();
    
    if(!userMessage) return;
    chatbox.appendChild(createChatLi(userMessage,"outgoing"));//this is for handling the chat in layout and append the user's message to the chatbot 

    // chatbox.scrollTo(0,chatbox.scrollHeight);

    setTimeout(()=>{
        const incomingChatLi=createChatLi("","incoming")
        chatbox.appendChild(incomingChatLi);
        generateResponse(incomingChatLi);
    },600);

}
sendChatBtn.addEventListener("click",handleChat);