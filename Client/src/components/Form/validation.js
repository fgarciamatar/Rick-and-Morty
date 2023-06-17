

const validation = (userData) => {
    const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    const passwordRegex = /.*\d+.*/;
    let errors = {};
    //  Username
    if(!userData.email) errors.email="Por favor completa este campo.";
    else if(userData.email.length > 35) errors.email="No puede superar los 35 caracteres.";
    else if (!emailRegex.test(userData.email)) errors.email="Email invalido.";
    // Pasword
    if(!userData.password) errors.password ="Ingrese una contraseña"
    else if(userData.password.length < 6 || userData.password.length > 10) errors.password="Longitud de contraseña invalida (ingrese de 6-10 caracteres).";
    else if(!passwordRegex.test(userData.password)) errors.password="La contraseña debe tener al menos un numero.";
return errors;
}
export default validation

