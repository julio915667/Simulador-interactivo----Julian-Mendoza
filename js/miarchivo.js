let surname
function email(mail){
    if(surname !== "" ){
        let email = prompt("Email:")
    }
    return email
}
function password(pass){
    if(email !== "" ){
        let password = prompt("Password:")
    }
    return password
}
function user(username){
    if(password !== "" ){
        let usuario = prompt("Usuario:")
    }
    return usuario
}

let name = prompt("Nombre")
if(name !== "" ){
    surname = prompt("Apellido")
    email(surname)
    password(email)
    user(password)
} else{
    alert("Error Name",name ,"Incorrecto")
    while(name !== "Julian"){
        name = prompt("Nombre")
        surname = prompt("Apellido")
    email(surname)
    password(email)
    user(password)
    }
    }
