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

const dropArea = document.getElementById('drop-area');
const imageInput = document.getElementById('fileInput');
const message = document.getElementById('message');
const preview = document.getElementById('file-content');
const previewImage = document.getElementById('previewImage');
const events = ['dragleave','dragover','dragenter','drop'];



dropArea.addEventListener('click', ()=>{
    imageInput.click();
})

events.forEach((event)=>{
    dropArea.addEventListener(event,(e)=>{
        
        e.preventDefault();
        e.stopPropagation();
        console.log(e.target); 

    })
})

imageInput.addEventListener('change',(e)=>{
    let file = imageInput.files[0];
    let reader = new FileReader()
    
    
    reader.onload = ()=>{
        previewImage.src=reader.result;
        preview.textContent = 'Your image has been uploaded succesfully'
        console.log(reader);

    }

    reader.error = ()=>{
        console.error('There was an error while uploading your image');
    }

    if(file){
        reader.readAsDataURL(file);
    }

})



const readFile = (inputTag,e)=>{

    let file = inputTag.files[0];
    let reader = new FileReader();

    reader.onload = ()=>{
        
    }
}