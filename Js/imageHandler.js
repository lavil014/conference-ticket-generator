export const displayImage = (file)=>{
    
  if(file && file.type.startsWith('image/')){

      let reader = new FileReader()
      
      reader.onload = ()=>{
        avatarImage.src = reader.result;
        imageUploaded = true
      }
        
      reader.readAsDataURL(file);
        
  } else{
      alert('Select an image');
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
    
    displayImage(file);
  })
}

export const eventHandlers = ()=>{
  events.forEach((event)=>{

    dropArea.addEventListener(event, (e)=>{

        e.preventDefault();
        e.stopPropagation()

        if(event === 'drop'){
            let file = e.dataTransfer.files[0];

            displayImage(file);
        }
        
    })
  })
}