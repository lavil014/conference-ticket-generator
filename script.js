const form = document.querySelector('form');
const dropArea = document.querySelector('.drag-drop-area');
const avatar = document.getElementById('avatar');
const inputs = document.querySelectorAll('input');
const btn = document.querySelector('button');


/*
dropArea.addEventListener('click', ()=> {
    avatar.click()
});

avatar.addEventListener('change', (event)=>{

    let files = event.target.files[0];

    if(files.length > 1){
        console.log('You can only add one avatar')
    } else{
        console.log('Your avatar has been added succesfully');
        avatar.files = files;
        previewImage(files);

    }  
})

dropArea.addEventListener('dragover', (event)=>{

    event.preventDefault()

    dropArea.classList.add('drag-area');
    
})

dropArea.addEventListener('dragleave', ()=>{
    dropArea.classList.remove('drag-area');
})

dropArea.addEventListener('drop', (event)=>{
    event.preventDefault()

    let files = event.dataTransfer.files[0];

    const {name} = files;

    console.log(name);

    if(files.length > 1){
        console.log('You can only add one avatar')
    } else{
        console.log('Your avatar has been added succesfully');
    }    
})

*/ 

form.addEventListener('submit',(e)=>{

    e.preventDefault()

    

    console.log('form has been submited')
})




inputs.forEach((input)=>{
    input.addEventListener('change', ()=>{

        let inputInfo = input.value.trim();
        
        console.log(inputInfo);
    })
})

