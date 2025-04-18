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
    avatar : document.getElementById('avatar')
}

const {form, dropArea ,imageInput , fullName, userEmail, userGitHub, submitBtn,userFullName, userEmailAddress, gitHubUserNickName, avatar } = tags;

const submitForm = (e)=>{

    e.preventDefault()

    //Get user's data from imputs
    let submitedName = fullName.value.trim();
    let submitedEmail = userEmail.value.trim();
    let submiteduserGitHub = userGitHub.value.trim();


    //Update UI
    userEmailAddress.textContent = submitedEmail;
    userFullName.textContent = submitedName;
    gitHubUserNickName.textContent = submiteduserGitHub;
    document.querySelectorAll('span')[5].textContent = submitedName;
}

const displayImage = (file)=>{

    if(file){
        console.log('File exists');
    }else {
        console.log('File does not exist');
    }
}

dropArea.addEventListener('click', ()=>{
    imageInput.click();
})

dropArea.addEventListener('change', (e)=>{
    
    let file = imageInput.files[0];
    let reader = new FileReader()
    console.log(file.name);

    console.log(reader.result);

    reader.onload = ()=>{
        console.log(reader.result);
    }



    console.log(reader.readAsDataURL(file));
})







form.addEventListener('submit', submitForm);

