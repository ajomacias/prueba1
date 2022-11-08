/*
Ejercicio 4: obteniendo correos de usuarios

1.Crear un arreglo con 5 objetos, cada uno de estos objetos debe de tener
las propiedades nombre, email y edad, con valores asignados por ti.
2. Crear un arreglo de nombre correos y guardar todos los correos que existan 
en el arreglo del primer paso(debes de acceder a los correos apoyandote en lo 
aprendido anteriormente).

3. Enviar tu ejercicio al correo tony.ospino@academlo.com
*/

const users = [
    {
        nombre : 'Anderson',
        email: 'anderk222@gmail.com',
        edad : 19
    },
    {
        nombre : 'Joel',
        email: 'joelk222@gmail.com',
        edad : 18
    },
    {
        nombre : 'Maria',
        email: 'mariak222@gmail.com',
        edad : 19
    },
    {
        nombre : 'Manuel',
        email: 'mank222@gmail.com',
        edad : 24
    },
    {
        nombre : 'Katherin',
        email: 'kathk222@gmail.com',
        edad : 19
    },

]


function respuesta(array){

    let emailsGuardados = [];

    for( let i in array ){

        emailsGuardados.push(array[i].email)

    }

    return emailsGuardados;

}

const emailsGuardados = respuesta(users);

console.log(emailsGuardados);

//Esxisten muchas otras formas de hacer esta tarea
