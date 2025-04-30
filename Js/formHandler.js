export const resetForm = (form,submitedEmail,submitedName,submiteduserGitHub)=> {
    
  form.reset();
  submitedEmail.value = '';
  submitedName.value = '';
  submiteduserGitHub.value = '';
  isImageUploaded = false; 
}