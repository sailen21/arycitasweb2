import React from 'react';
import { Container,  Typography, Grid, ThemeProvider } from '@material-ui/core';
import theme from './Estilos/theme';
import useStyles from './Estilos/styles';
import TarjetaImagen from './tarjetaLugar';
import { imagenesLugar1, imagenesLugar2, imagenesLugar3 } from './Constantes/constantes';

export default function Lugares(){
    const classes = useStyles();
    return(
        <Container component="main"  className={classes.container}>
            <ThemeProvider theme={theme}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12}>
                        <Typography gutterBottom variant="h4" component="h2" align="center">Lugares de entrega</Typography>
                    </Grid>
                  {/*  <Grid item xs={12} sm={4}>
                        <TarjetaImagen nombreLugar = "Chedraui Jacarandas" descripcion = "Hora: 14:40  a 14:55" nombreImagen = {imagenesLugar1}/>
                    </Grid> */}
                    <Grid item xs={12} sm={6}>
                        <TarjetaImagen descripcion = "Hora: 15:30  a 16:00" nombreLugar = "Cuernavaca Plazuela" nombreImagen = {imagenesLugar2}/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TarjetaImagen nombreLugar = "WalMart Jiutepec" descripcion = "Hora: 17:45 a 18:00" nombreImagen = {imagenesLugar3}/>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                            <Typography gutterBottom variant="h3" component="h2" align="center">¡Gracias Por Tu Apoyo!</Typography>
                            <Typography gutterBottom variant="body2" component="h2" align="justify">
                                Nota: El comprobante de tu depósito o tranferencia debe ser enviado a más tardar el día miércoles 12:00 pm, SIN TU COMPROBANTE NO SE HARÁ EL ENVIO.
                            </Typography>
                    </Grid>
                </Grid>
            </ThemeProvider>
        </Container>
    
    );
}