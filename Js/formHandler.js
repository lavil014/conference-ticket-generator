

export const resetForm = ()=>{
  form.reset();

    userEmailAddress.value = "";
    userFullName.value = "";
    gitHubUserNickName.value = "";
    imageUploaded = false;
}

 export const submitForm = (e)=>{
  
  e.preventDefault();

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
        updateUI();
      }

      resetForm()

}