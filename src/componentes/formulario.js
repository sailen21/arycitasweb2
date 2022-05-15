import React, { useState } from 'react';
import { Grid, Container, Avatar, ThemeProvider, Modal } from '@material-ui/core';
import axios from 'axios';
import { mostrarAlerta, calcularEntrega, fechaRegistro } from './Funciones';
import theme from './Estilos/theme';
import useStyles from './Estilos/styles';
import { useNavigate  } from "react-router-dom";
import { lugares, baseUrl, personaEnvio, formaPago } from './Constantes/constantes'
import FormularioDireccion from './fomularioDireccion';
import ElementoTextField from './ElementosFormulario/textField';
import ElementoSelect from './ElementosFormulario/select';
import ElementoButton from './ElementosFormulario/button';
import ElementoTextField2 from './ElementosFormulario/textField2';
/*import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';*/
/* import Alert from '@mui/material/Alert'; */
/* import Stack from '@mui/material/Stack';
import { useForm } from 'react-hook-form'; */

export default function Formulario() {
    const classes = useStyles();
    const navigate = useNavigate ();
    const [fechaRegis] = useState(fechaRegistro());

    const [fechaEntrega] = useState(calcularEntrega);
    const [mostrarDestino, setMostrarDestino] = useState(false);
    const [mostrarDias, setMostrarDias] = useState(false);
    const [modal, setModal] = useState(false)
    const [idLugar, setIdLugar] = useState(-1);
    const [idPersonaEnvio, setIdPersonaEnvio] = useState(-1);
    const [idCiudad, setIdCiudad] = useState(-1);
    const [state, setState] = React.useState({
        nombre: '',
        lugar: '',
        personaConQuienEnvia: '',
        lugarEnviar: '',
        dia: '',
        hora: '',
        fecha: '',
        formaPago: '',
        fechaRegistro: fechaRegis,
        texto: "Fecha de Entrega",
        municipio: '',
        colonia: '',
        calle: '',
        numeroExterior: '',
        telefono: '',
        tipoEntrega: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setState(prevState => ({
            ...prevState,
            [name]: value
        }));

    };

    const handleCargarHoraPersonas = (e) => {
        const opcion = e.target.value;
        setIdLugar(opcion);
        handleChange(e);
        if (opcion === "0" || opcion === "1" || opcion === "2" || opcion === "4") {
            if (opcion === "4") {
                controladorModalAbrir()
            }
            setMostrarDestino(false)
            setMostrarDias(false)
        }


    };

    const handleCargarLugares = (e) => {
        const opcion = e.target.value;
        setIdPersonaEnvio(opcion);
        handleChange(e);
        setMostrarDestino(true);


    };
    const handleCargarDias = (e) => {
        const opcion = e.target.value;
        setIdCiudad(opcion);
        setMostrarDias(true);
        handleChange(e);

    };

    function handleSubmit(event) {
        cambiarTipoEntrega();
        registrarDatos();
        mostrarAlerta(navigate);
        event.target.reset();
        event.preventDefault();
    }

    function handleSubmitDomicilio(event) {
        /* document.getElementById("hora").value = "De 10:00 am a 6:00 pm"
        document.getElementById("lugar").value = "4" */
        setModal(false);
        event.preventDefault();
    }

    const controladorModalCerrar = () => {
        setModal(false);
        document.getElementById("lugar").value = "-1";
        setIdLugar(-1);
        state.municipio = '';
        state.colonia = '';
        state.calle = '';
        state.numeroExterior = '';
        state.telefono = '';
        state.tipoEntrega = '';

    }

    const controladorModalAbrir = () => {
        state.texto = "Fecha de Envío";

        setModal(true)
    }

    /* Funciones CRUD: Insert */
    const registrarDatos = async () => {
        await axios.post(baseUrl, state).then(response => {
            setState(response.data);
        });
    };
    function cambiarTipoEntrega() {

        if (state.lugar === "0" || state.lugar === "1" || state.lugar === "2") {
            state.tipoEntrega = 0;
        } else if (state.lugar === "3") {
            state.tipoEntrega = 1;
        } else if (state.lugar === "4") {
            state.tipoEntrega = 2;

        }
    }
    return (
       
        <Container component="main" maxWidth="xs" className={classes.container}>
            <ThemeProvider theme={theme}>
               {/*  <CssBaseline /> */}
                <div className={classes.paper}>
                    <Avatar alt="Ary" src="../imagenes/avatar.jfif" className={classes.large} />
                    <form className={classes.form} onSubmit={handleSubmit} id="formu">
                        <Grid container spacing={2}>
                            <ElementoTextField2 // Nombre de usuaurio en facebook
                                name={"nombre"}
                                label={"Nombre de tu usuario de Facebook"}
                                evento={handleChange}
                                sizeGrid={12}
                                tipo={"text"}
                            />
                            <ElementoSelect // Muestra los luagres o tipos de entrega 
                                classes={classes}
                                handleEvento={handleCargarHoraPersonas}
                                label={"Lugar de entrega"}
                                name={"lugar"}
                                datos={lugares}
                                subDato={"lugar"}
                                bandera={1}
                            />
                            {
                                idLugar === "3" ? (
                                    <ElementoSelect // Muestra los nombres de las personas con quien se hacen envios
                                        classes={classes}
                                        handleEvento={handleCargarLugares}
                                        label={"Nombre de la persona con quien envia"}
                                        name={"personaConQuienEnvia"}
                                        datos={personaEnvio}
                                        subDato={"nombre"}
                                        bandera={1}
                                    />
                                ) : (idLugar !== -1 && (
                                (< ElementoTextField // Muestra la siguiente fecha disponible para entregar
                                        name={"hora"}
                                        label={"Hora de entrega"}
                                        evento={handleChange}
                                        value={state.hora = lugares[idLugar].horas[0]}
                                        sizeGrid={12}
                                        readOnly={true}
                                       
                                    />)/*,(
                                         <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
                                        This is a success alert — check it out!
                                      </Alert> 
                                    )
                                   */

                                )
                                )
                            }
                            {
                                mostrarDestino && (
                                    <ElementoSelect // Muestra el municipio a donde se va a enviar
                                        classes={classes}
                                        handleEvento={handleCargarDias}
                                        label={"Destino"}
                                        name={"lugarEnviar"}
                                        datos={personaEnvio[idPersonaEnvio].lugares}
                                        subDato={"ciudad"}
                                        bandera={1}
                                    />
                                )
                            }
                            {
                                mostrarDias && (
                                    <ElementoSelect // Muestra los dias disponibles para poder recolectar
                                        classes={classes}
                                        handleEvento={handleChange}
                                        label={"Dia de recoleccion"}
                                        name={"dia"}
                                        datos={personaEnvio[idPersonaEnvio].lugares[idCiudad].dias}
                                        subDato={""}
                                        bandera={0}
                                    />
                                )
                            }
                            {
                                idLugar === "3" || idLugar === "4" ? (
                                    <ElementoSelect // Muestra dos formas de pago dispobibles: deposito y transferencia 
                                        classes={classes}
                                        handleEvento={handleChange}
                                        label={"Forma de Pago"}
                                        name={"formaPago"}
                                        datos={formaPago[1].tipoPago}
                                        subDato={""}
                                        bandera={0}
                                    />
                                ) : (
                                    <ElementoSelect // Muestra  tres formas de pago dispobibles: Efectivo, deposito y transferencia 
                                        classes={classes}
                                        handleEvento={handleChange}
                                        label={"Forma de Pago"}
                                        name={"formaPago"}
                                        datos={formaPago[0].tipoPago}
                                        subDato={""}
                                        bandera={0}
                                    />
                                )
                            }

                            {
                                state.formaPago === "Transferencia bancaria" ? ( // Muestra la informacion de las tarjetas
                                    <ElementoTextField
                                        name={"cuenta"}
                                        label="Banco Azteca Debito"
                                        evento={handleChange}
                                        sizeGrid={12}
                                        readOnly={true}
                                        value={"5512-3823-5249-3466"}
                                    />
                                ) : (state.formaPago === "Depósito en Oxxo" && (
                                    <ElementoTextField
                                        name={"cuenta"}
                                        label="Banco Santander - Debito"
                                        evento={handleChange}
                                        sizeGrid={12}
                                        readOnly={true}
                                        value={"5579-1001-7613-6628"}
                                    />
                                ))
                            }
                            <ElementoTextField // Muestra la siguiente fecha disponible para entregar
                                name={"fecha"}
                                label={state.texto}
                                evento={handleChange}
                                value={state.fecha = fechaEntrega}
                                sizeGrid={12}
                                readOnly={true}
                            />
                        </Grid>
                        <br />
                        <ElementoButton
                            classes={classes}
                            color={"primary"}
                            texto={"Guardar"}
                            tipo={"submit"}
                        />
                    </form>
                </div>
                <Modal open={modal} onClose={controladorModalCerrar} backdrop="static" disableEnforceFocus disableEscapeKeyDown  >
                    <div>
                        <FormularioDireccion
                            classes={classes}
                            handleSubmitDomicilio={handleSubmitDomicilio}
                            handleChange={handleChange}
                            controladorModalAbrir={controladorModalAbrir}
                            controladorModalCerrar={controladorModalCerrar}
                        />
                    </div>
                </Modal>
            </ThemeProvider>
        </Container>
        
    );
    
}
