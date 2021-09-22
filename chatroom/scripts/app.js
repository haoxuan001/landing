//dom queries
const chatList =document.querySelector('.chat-list');
const newChatform = document.querySelector('.new-chat');
const newNameForm = document.querySelector('.new-name');
const updateMessage = document.querySelector('.update-mssg');
const rooms = document.querySelector('.chat-rooms');


//add a new chat
newChatform.addEventListener('submit',event =>{
    event.preventDefault();
    const message = newChatform.message.value.trim();
    chatroom.addChat(message)
    .then(()=>newChatform.requestFullscreen())
    .catch(error=>{
        console.log(error);
    });

});

//update user name
newNameForm.addEventListener('submit',event=>{
    event.preventDefault();
    const newName =newNameForm.name.value.trim();
    chatroom.updateName(newName);
    //reset the form
    newNameForm.reset();
    //show and hide the updated message
    updateMessage.innerText =`Your name was updated as ${newName}` ;
    setTimeout(()=>updateMessage.innerText='',3000);
});
//update the chat room
rooms.addEventListener('click',event=>{
    if(event.target.tagName === 'BUTTON'){
        chatUI.clear();
        chatroom.updateRoom(event.target.getAttribute('id'));
        chatroom. getChats(chat => chatUI.render(chat));
    }
});
//check local storage for the name
const username  = localStorage.username ? localStorage.username : 'anon';

// class instances
const chatUI =new ChatUI(chatList);
const chatroom = new Chatroom('gaming', username);
//get charts and render
chatroom.getChats(data => {
    chatUI.render(data);
});
