

// var formObject = [];

// const addInStorage = (ev) =>{
//     ev.preventDefault();
//     let obj = {
//         id : Date.now(),
//         fullname : document.getElementById('fullname').value,
//         email : document.getElementById('emailaddr').value,
//         phone : document.getElementById('phonenumr').value ,
//         gender : document.getElementById('gen').value
//     };
//     formObject.push(obj);
//     document.forms[0].reset();

//     console.log('added',{formObject});
//     let pre = document.querySelector('#msg pre');
//     pre.textContent = '\n' + JSON.stringify(formObject, '\t',2);

//     localStorage.setItem('MyList',JSON.stringify(formObject));

// }

// document.getElementById("subm").addEventListener('click',addInStorage);