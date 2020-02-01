
    console.log('success');
let validate = ()=>{

    let name = document.myForm.Name.value;
    let eMail = document.myForm.Email.value;
    let phone = document.myForm.Phone.value;
    let gender = document.myForm.Gender.value;

    if(name === '' ){
        alert('Please input your name!');
        return false;
    }

    if(gender === '-1'){
        alert('Please input your gender!');
        return false;
    }

    if(eMail === ''){
        alert('Please input your e-mail!');
        return false;
    }

    if(phone === '' || isNaN(phone) || phone.length <= 9){
        alert('Please input valid phonenumber!');
        return false;
    }
}

// document.querySelector('button').addEventListener('click',() =>{
//     let name = document.myForm.Name.value;
//     let eMail = document.myForm.Email.value;
//     let phone = document.myForm.Phone.value;
//     let gender = document.myForm.Gender.value;

//     if(name === '' ){
//         alert('Please input your name!');
//         return false;
//     }

//     if(gender === '-1'){
//         alert('Please input your gender!');
//         return false;
//     }

//     if(eMail === ''){
//         alert('Please input your e-mail!');
//         return false;
//     }

//     if(phone === '' || isNaN(phone) || phone.length <= 9){
//         alert('Please input valid phonenumber!');
//         return false;
//     }

// })

document.querySelector('.reset').addEventListener('click',() =>{
    document.myForm.Name.value = '';
    document.myForm.Email.value = '';
    document.myForm.Phone.value = '';
    document.myForm.Gender.value = -1;
    document.myForm.Subject.value = '';
    document.myForm.Message.value = '';

})