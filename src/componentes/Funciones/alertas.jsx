import swal from "sweetalert";
/* import withReactContent from 'sweetalert2-react-content' */


export  const  mostrarAlerta = (history) =>{
    swal({
        title: "Pedido Registrado!",
        text: "tu pedido ha sido registrado con exito",
        icon: "success",
        button: "Aceptar",
        timer: "2000"
    }).then((value)=>{
        history.push('/lugares');
    });
}

