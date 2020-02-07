let firebaseConfig = {
    apiKey: "AIzaSyAInG44Tb1JVAaJx5ZGkltP10TFyy61pBU",
    authDomain: "localhost",
    projectId: "fir-cpe-7263b",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
let db = firebase.firestore();
console.log('success');


let validateEmail = (eMail) =>{
    let check = false;
   for(let i = 0; i < eMail.length;i++){
       if(eMail[0]=== '@'){
           check = false
       }else if(eMail[i] == '@'){
           check = true;
       }
   }
     
         return check;
}

let validate = ()=>{

    let name = document.myForm.Name.value;
    let eMail = document.myForm.Email.value;
    let gender = document.myForm.Gender.value;
    let details = document.myForm.Message.value;

    if(name === '' ){
        alert('Please input your name!');
        return false;
    }

    if(gender === '-1'){
        alert('Please input your gender!');
        return false;
    }

    if(eMail === '' && !validateEmail(eMail)){
        alert('Please input your e-mail!');
        return false;
    }

    if(details === ''){
        alert('Please input your details!');
        return false;
    }
    db.collection("contact").add({
        name:name,
        gender:Number(gender),
        email:eMail,
        details:details,
    })
    .then(function(docRef) {
        document.myForm.Name.value = '';
        document.myForm.Email.value = '';
        document.myForm.Gender.value = -1;
        document.myForm.Message.value = '';
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });


}

document.querySelector('.reset').addEventListener('click',() =>{
    document.myForm.Name.value = '';
    document.myForm.Email.value = '';
    document.myForm.Gender.value = -1;
    document.myForm.Message.value = '';

})

document.querySelector('.submit').addEventListener('click',validate);


db.collection("contact").onSnapshot(doc => {
    let table = $('tbody')[0];
    let count = 0;
    let female = 0;
    let male = 0;
    let other = 0;
    let sumother = document.querySelector('.other');
    let summale = document.querySelector('.male');
    let sumfemale = document.querySelector('.female');

    // document.querySelectorAll('tbody tr').forEach(item => item.remove());
    $('tbody tr').remove();
    doc.forEach(item => {
        console.log(item.data());
        let row = table.insertRow(-1);
        let firstCell = row.insertCell(0);
        let secondCell = row.insertCell(1);
        let thirdCell = row.insertCell(2);
        let Gen = '';
        let email='';
        email+=item.data().email[0];
        for(let i = 1;i <item.data().email.length;i++ ){
            if(item.data().email[i] === '@'){
                email+='@'
            }else if(item.data().email[i] === '.'){
                email+='.'
            }else{
                email+='x'
            }
        }
        switch(item.data().gender){
            case 3 : Gen = 'Others';count++;other++;break;
            case 2 : Gen = 'Female';count++;female++;break;
            case 1 : Gen = 'Male';count++;male++;break;
        }
        firstCell.textContent = 'Name: '+item.data().name;
        secondCell.textContent = 'Gender: '+Gen;
        thirdCell.textContent = 'Email: '+email;

    });
    sumfemale.textContent ='Female: '+ (female/count)*100+'%';
    summale.textContent ='Male: '+ (male/count)*100+'%';
    sumother.textContent ='Others: '+ (other/count)*100+'%';
})

