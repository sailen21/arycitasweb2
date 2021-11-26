var moment = require('moment');
const dias = [
    'Domingo',
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado',
    'Domingo'
  ];

const meses = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre'
  ];
export function calcularEntrega(){
    
    var dateNow = new Date(); 
    var fechaActual = arreglarFecha(dateNow);
    var numeroDia = new Date(fechaActual).getDay();
    var nombreDia = dias[numeroDia+1];
    var fechaAux = fechaActual;
    var fechaAuxFormateada;
    if(nombreDia !== "Viernes"){
        while (nombreDia !== "Viernes") {
            fechaAux = moment(fechaAux).add(1,'days');
            fechaAuxFormateada = moment(fechaAux).format('YYYY-MM-DD')
            numeroDia = new Date(fechaAuxFormateada).getDay();
            nombreDia = dias[numeroDia+1];
        }
        fechaActual = moment(fechaAuxFormateada).format('YYYY-MM-DD')
    }else{
        fechaActual = moment(fechaActual).format('YYYY-MM-DD')
    }
   
    var fechaCadena = darFormatoFecha(new Date(fechaActual))
    return fechaCadena
    
};

export function fechaNumero(){
  
    var dateNow = new Date(); 
    var fechaActual = arreglarFecha(dateNow);
    var numeroDia = new Date(fechaActual).getDay();
    var nombreDia = dias[numeroDia+1];
    var fechaAux = fechaActual;
    var fechaAuxFormateada
    if(nombreDia !== "Miércoles"){
        while (nombreDia !== "Miércoles") {
            fechaAux = moment(fechaAux).add(1,'days');
            fechaAuxFormateada = moment(fechaAux).format('YYYY-MM-DD')
            numeroDia = new Date(fechaAuxFormateada).getDay();
            nombreDia = dias[numeroDia+1];
        }
        fechaActual = moment(fechaAuxFormateada).format('YYYY-MM-DD')
    }else{
        fechaActual = moment(fechaActual).format('YYYY-MM-DD')
    }
    
    return  fechaActual 
    
};

export function arreglarFecha(dateNow){
    
    var year = dateNow.getFullYear(); 
    var monthWithOffset = dateNow.getMonth() + 1; 
    var month =
    monthWithOffset.toString().length < 2 
        ? `0${monthWithOffset}`
        : monthWithOffset;
    var date =
    (dateNow.getUTCDate()+1).toString().length < 2 
        ? `0${dateNow.getDate()}`
        : dateNow.getDate();

    return  `${year}-${month}-${date}`;
}

export function darFormatoFecha(fechaActual){
    var year = fechaActual.getFullYear(); 
    var date =
    fechaActual.getUTCDate().toString().length < 2 
        ? `0${fechaActual.getUTCDate()}`
        : fechaActual.getUTCDate();

    return `${dias[fechaActual.getDay()+1]} ${date} de ${meses[fechaActual.getMonth()]} de ${year}`;
}

export  function fechaRegistro(){
    var dateNow = new Date();
  
    var fechaAux = (dateNow.toLocaleDateString('es-ES', undefined)).toString()
    fechaAux = fechaAux.split('/');
    var fecha = new Date(`${fechaAux[2]}/${fechaAux[1]}/${fechaAux[0]}`)

    var year = fecha.getFullYear(); 
    var monthWithOffset = dateNow.getMonth() + 1; 
    var month =
    monthWithOffset.toString().length < 2 
        ? `0${monthWithOffset}`
        : monthWithOffset;
    var date =
    (dateNow.getDate()).toString().length < 2 
        ? `0${dateNow.getDate()}`
        : dateNow.getDate();
    return  `${year}-${month}-${date}`;
    
}