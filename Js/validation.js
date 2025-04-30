import {updateUI} from


export const validateInputs = (submitedName,emailRegex,submitedEmail,submiteduserGitHub)=>{
  
  if(submitedName === ''){
    alert('Information is incomplete, provide a valid name');  
  }else if(!emailRegex.test(submitedEmail)){
    alert('Your email address is invalid')
  }else if(submiteduserGitHub ===''){
    alert('Provide a valid username');
  } else {
    updateUI()
  }
}