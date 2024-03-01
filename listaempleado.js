const trabajadores = [];


function agregarTrabajador() {
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const correo = document.getElementById('correo').value;
    const departamento = document.getElementById('departamento').value;

    
    const nuevoTrabajador = {
        nombre,
        apellido,
        correo,
        departamento
    };

   
    trabajadores.push(nuevoTrabajador);

    
    actualizarListaTrabajadores();

   
    actualizarResumen();
}


function actualizarListaTrabajadores() {
    const lista = document.getElementById('lista-trabajadores');
    lista.innerHTML = ''; 

    trabajadores.forEach(trabajador => {
        const li = document.createElement('li');
        li.textContent = `${trabajador.nombre} ${trabajador.apellido} (${trabajador.departamento})`;
        lista.appendChild(li);
    });
}


function actualizarResumen() {
    const resumen = document.getElementById('resumen');
    const resumenPorDepartamento = {};

    trabajadores.forEach(trabajador => {
        if (!resumenPorDepartamento[trabajador.departamento]) {
            resumenPorDepartamento[trabajador.departamento] = 1;
        } else {
            resumenPorDepartamento[trabajador.departamento]++;
        }
    });

    resumen.textContent = JSON.stringify(resumenPorDepartamento, null, 2);
}


document.getElementById('formulario').addEventListener('submit', function (event) {
    event.preventDefault(); 
    agregarTrabajador();
});