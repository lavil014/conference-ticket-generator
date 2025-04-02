const dropArea = document.querySelector('.drag-drop-area');
const avatar = document.getElementById('avatar');
const userName = document.getElementById('userName');
const userEmail = document.getElementById('userEmail');
const githubUser = document.getElementById('githubUser');
const btn = document.querySelector('button');



dropArea.addEventListener('click', ()=> {
    avatar.click()
});

dropArea.addEventListener('dragover', (event)=>{

    event.preventDefault()

    dropArea.classList.add('drag-area');
    
})

dropArea.addEventListener('dragleave', ()=>{
    dropArea.classList.remove('drag-area');
    
})

dropArea.addEventListener('drop', (event)=>{
    event.preventDefault()

    let files = event.dataTransfer.files;

    if(files.length > 1){
        console.log('You can only add one avatar')
    } else{
        console.log('Your avatar has been added succesfully');
    }    
})
