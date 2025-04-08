const form = document.querySelector('form');
const userfullName = document.getElementById('user-name');
const useremailAddress = document.getElementById('user-email-address');
const githubUser = document.getElementById('githubUserName');
const displayeduserName = document.getElementById('user-name-displayed')

form.addEventListener('submit', (e)=>{

    e.preventDefault()

    let userName = document.getElementById('nameInput').value;
    let email= document.getElementById('emailInput').value;
    let github = document.getElementById('githubInput').value;


   

    userfullName.textContent = userName;
    displayeduserName.textContent = userName;
    useremailAddress.textContent = email;
    githubUser.textContent = github;

})
