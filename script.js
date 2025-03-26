const dropArea = document.querySelector('.drag-drop-area');
const avatar = document.getElementById('avatar');
const userName = document.getElementById('userName');
const userEmail = document.getElementById('userEmail');
const githubUser = document.getElementById('githubUser');
const btn = document.querySelector('button');



dropArea.addEventListener('click', (e)=> {
    avatar.click()
    console.log(e.target);
    console.log(avatar.value);
});

dropArea.addEventListener('drop', (e)=>{
    
    let userData = e.dataTransfer.files[0];

    console.log(userData);
})