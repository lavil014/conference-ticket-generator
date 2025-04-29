const tags = {
    form : document.querySelector('form'),
    dropArea : document.getElementById('dropArea'),
    imageInput : document.getElementById('avatar'),
    fullName: document.getElementById('userName'),
    userEmail: document.getElementById('userEmail'),
    userGitHub: document.getElementById('githubUser'),
    submitBtn : document.querySelector('button'),
    userFullName: document.getElementById('user-full-name'),
    newUserName: document.querySelectorAll('span')[5],
    userEmailAddress :document.getElementById('user-email-address'),
    gitHubUserNickName : document.getElementById('user-github'),
    avatar : document.getElementById('avatar'),
    avatarImage : document.getElementById('avatarImage'), 
    events : ['dragleave','dragover','dragenter','drop'],
    formSection : document.getElementById('classSection'),
    ticketSection : document.getElementById('ticketSection'),
    backHomeBtn: document.getElementById('backHome'), 
}

let isImageUploaded = false;

const {form, dropArea ,imageInput , fullName, userEmail, userGitHub, submitBtn,userFullName, userEmailAddress, gitHubUserNickName, avatar, avatarImage, events, formSection, ticketSection, backHomeBtn } = tags;


import { resetForm } from "./formHandler.js";
import { displayImage, inputToClick,changeInputImage,eventHandlers } from "./imageHandler.js"; 
import { updateUI } from "./ui.js";


const submitForm = (e)=>{
  
    e.preventDefault();

        if(!isImageUploaded){
            alert('Add a valid Imagge'); 

            return;
        }
  
        //Get user's data from imputs
        let submitedName = fullName.value.trim();
        let submitedEmail = userEmail.value.trim();
        let submiteduserGitHub = userGitHub.value.trim();
        let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
        if(submitedName === ''){
          alert('Information is incomplete, provide a valid name');
        } else if(!emailRegex.test(submitedEmail)){
          alert('Your email address is invalid');
        } else if(submiteduserGitHub === ''){
          alert('Provide a valid username');
        } else{
          updateUI(userEmailAddress,userFullName,gitHubUserNickName,formSection,ticketSection);
        }
  
        resetForm(form,userEmailAddress,userFullName,gitHubUserNickName,imageUploaded);
  
  }

form.addEventListener('submit',submitForm);


