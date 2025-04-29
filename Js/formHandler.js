

export const resetForm = (form,userEmailAddress,userFullName,gitHubUserNickName,imageUploaded)=>{
  form.reset();

    userEmailAddress.value = "";
    userFullName.value = "";
    gitHubUserNickName.value = "";
    imageUploaded = false;
}

