const dropArea = document.querySelector('.drag-drop-area');
const avatar = document.getElementById('avatar');
const userName = document.getElementById('userName');
const userEmail = document.getElementById('userEmail');
const githubUser = document.getElementById('githubUser');
const btn = document.querySelector('button');



dropArea.addEventListener('click', ()=> {
    avatar.click()
});

dropArea.addEventListener('dragover', ()=>{
    dropArea.classList.add('drag-area');
    console.log('Dragover');
})

dropArea.addEventListener('dragleave', ()=>{
    dropArea.classList.remove('drag-area');
    console.log('Dragleave');
})

dropArea.addEventListener('drop', (event)=>{
    event.preventDefault();
    console.log('Drop');
})
