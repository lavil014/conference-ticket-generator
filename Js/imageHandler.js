const imageInput = document.getElementById('avatar');
const events = ['dragleave','dragover','dragenter','drop'];
const dropArea = document.getElementById('dropArea');




export const displayImage = (file)=>{
    
  if(file && file.type.startsWith('image/')){

      let reader = new FileReader()
      
      reader.onload = ()=>{
        avatarImage.src = reader.result;
      }
        
      reader.readAsDataURL(file);

      return true;
        
  } else{
      alert('Select an image');
      return false;
  }

}

export const inputToClick = ()=>{
    dropArea.addEventListener('click', ()=>{
    imageInput.click();
  })
} 

export const changeInputImage = ()=>{
    dropArea.addEventListener('change', (e)=>{
    
    let file = imageInput.files[0]; 
    
    isImageUploaded =  displayImage(file);
  })
}

export const eventHandlers = ()=>{
  events.forEach((event)=>{

    dropArea.addEventListener(event, (e)=>{

        e.preventDefault();
        e.stopPropagation()

        if(event === 'drop'){
            let file = e.dataTransfer.files[0];

           isImageUploaded =  displayImage(file);
        }
        
    })
  })
}

