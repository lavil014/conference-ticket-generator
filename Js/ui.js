export const updateUI = ()=>{
  userEmailAddress.textContent = submitedEmail;
  userFullName.textContent = submitedName;
  gitHubUserNickName.textContent = submiteduserGitHub;
  document.querySelectorAll('span')[5].textContent = submitedName;
  formSection.style.display = 'none'
  ticketSection.style.display = 'flex'; 
}