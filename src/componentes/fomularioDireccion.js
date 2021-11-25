import { Typography, Grid } from '@material-ui/core';
import ElementoButton from './ElementosFormulario/button';
import ElementoTextField2 from './ElementosFormulario/textField2';
import { lugaresDomicilio } from './Constantes/constantes';
import ElementoSelect from './ElementosFormulario/select';
export default function FormularioDireccion(props) {
    const classes = props.classes;
    const handleSubmitDomicilio = props.handleSubmitDomicilio;
    const handleChange = props.handleChange;
    const controladorModalCerrar = props.controladorModalCerrar;

    return (
        <div className={classes.modal}>
            <form className={classes.form} noValidate={false} autoComplete="off" onSubmit={handleSubmitDomicilio} id="">
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant="h6" component="h6" gutterBottom>
                            Datos de entrega a domicilio
                        </Typography>
                    </Grid>
                    <ElementoSelect // Muestra dos formas de pago dispobibles: deposito y transferencia 
                        classes={classes}
                        handleEvento={handleChange}
                        label={"Municipio"}
                        name={"municipio"}
                        datos={lugaresDomicilio[0].municipio}
                        subDato={""}
                        bandera={0}
                    />
                    <ElementoTextField2 // Nombre de usuaurio en facebook
                        name={"colonia"}
                        label={"Colonia"}
                        evento={handleChange}
                        sizeGrid={12}
                        tipo={"text"}
                    />
                    <ElementoTextField2 // Nombre de usuaurio en facebook
                        name={"calle"}
                        label={"Calle"}
                        evento={handleChange}
                        sizeGrid={8}
                        tipo={"text"}
                    />
                    <ElementoTextField2 // Nombre de usuaurio en facebook
                        name={"numeroExterior"}
                        label={"N° Ext."}
                        evento={handleChange}
                        sizeGrid={4}
                        tipo={"number"}
                    />
                    <ElementoTextField2 // Nombre de usuaurio en facebook
                        name={"telefono"}
                        label={"Telefono"}
                        evento={handleChange}
                        sizeGrid={12}
                        tipo={"number"}
                    />
                    <ElementoButton
                        classes={classes}
                        color={"secondary"}
                        texto={"¡Cancelar!"}
                        onClick={controladorModalCerrar}
                        sizeGrid={6}
                        tipo={"button"}
                    />
                    <ElementoButton
                        classes={classes}
                        color={"primary"}
                        texto={"¡Listo!"}
                        sizeGrid={6}
                        tipo={"submit"}
                    />


                </Grid>
            </form>
        </div>
    );
}