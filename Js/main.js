import {tags} from './tags.js';
import { resetForm } from './formHandler.js';
import { updateUI } from './ui.js';




const {form, dropArea ,imageInput , fullName, userEmail, userGitHub, submitBtn,userFullName, userEmailAddress, gitHubUserNickName, avatar, avatarImage, events, formSection, ticketSection, backHomeBtn } = tags;

let isImageUploaded = false;



const submitForm = (e)=>{
  e.preventDefault();
  
  //Get user's data from inputs
  let submitedName = fullName.value.trim();
  let submitedEmail = userEmail.value.trim();
  let submiteduserGitHub = userGitHub.value.trim();

  //Validate is imageInput is empty
  if(!isImageUploaded){
    alert('Add a valid Image');

    return;
  }

  if (submitedName === ''){
    alert('Information is incomplete, provide a valid name');  
    } else if(!emailRegex.test(submitedEmail)){
        alert('Your email address is invalid')
    } else if(submiteduserGitHub === ''){
        alert('Provide a valid username');
    } else{
        //Update UI
        updateUI(userEmailAddress,userFullName,submiteduserGitHub,formSection,ticketSection);
    }

  resetForm(form,submitedEmail,submitedName,submiteduserGitHub);

}

dropArea.addEventListener('click', ()=>{
  imageInput.click();
})

const displayImage = ()=>{
  
  let file = imageInput.files[0];

  if(file && file.type.startsWith('/image')){
    let reader = new FileReader();

    reader.onload = ()=>{
      avatarImage.src = reader.result;
    }

    reader.readAsDataURL(file);
  
  }

  
  

 
}



console.log(displayImage)

form.addEventListener('submit', submitForm);