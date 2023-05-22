

const validation = (userData, errors, setErrors) => {
    const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    const passwordRegex = /\d/;
    //  Username
    if(!userData.email) setErrors({...errors, email:"Por favor completa este campo."});
    else if(userData.email.length > 35) setErrors({...errors, email:"No puede superar los 35 caracteres."});
    else if (!emailRegex.test(userData.email)) setErrors({...errors, email:"Email invalido."});
    else setErrors({...errors, email:""});
    // Pasword
    if(userData.password.length < 6 || userData.password.length > 10) setErrors({...errors, password:"Longitud de contraseña invalida (ingrese de 6-10 caracteres)."});
    else if(!passwordRegex.test(userData.password)) setErrors({...errors, password:"La contraseña debe tener al menos un numero."});
    else setErrors({...errors, password:""});
}
export default validation

