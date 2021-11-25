import React, { useEffect, useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { fechaNumero } from './Funciones';
import moment from 'moment';
import axios from 'axios';
import { baseUrl2, columnas0, columnas1, columnas2, personaEnvio } from './Constantes/constantes';
import { Button, ButtonGroup, Container } from '@material-ui/core';
import { createTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';

const defaultTheme = createTheme();
const useStyles = makeStyles((theme) => ({

  container: {
    maxHeight: "100%",
    maxWidth: "100%",
    margin: theme.spacing(1, 0.5, 1.5),
    '& .MuiSvgIcon-root': {
      marginRight: theme.spacing(0.5),
    },

    '& .MuiInput-underline:before': {
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
  },

}),
  { defaultTheme },
);
export default function TablaCitas() {
  const classes = useStyles();
  const [filas, setFilas] = useState([]);
  const [columnas, setColumnas] = useState([]);

  const obtenerDatos = async (tipoEntrega = 0) => {
    const fechaSiguiente = fechaNumero()
    var fechaAnterior = moment(fechaSiguiente).add(-7, 'days');
    fechaAnterior = moment(fechaAnterior).format('YYYY-MM-DD')
    const res = await axios.get(`${baseUrl2}`, {
      params: {
        fechaAnterior: fechaAnterior,
        fechaSiguiente: fechaSiguiente,
        tipoEntrega: tipoEntrega
      }
    });
    const filas = await res.data;
    setFilas(filas)
    /* console.table(filas) */
  };

  const reemplazarLugar = () => {
    filas.forEach(function (item) {
      if (item.lugar === "0") {
        item.lugar = "Chedraui Jacarandas";
      } else if (item.lugar === "1") {
        item.lugar = "Centro Cuernavaca Plazuela";
      } else if (item.lugar === "2") {
        item.lugar = "WalMart Jiutepec";
      } else if (item.lugar === "3") {
        item.lugar = "Envio a punto fijo";
      } else if (item.lugar === "4") {
        item.lugar = "Envio a domicilio";
      }
    });
  }

  const reemplazarPersona = () => {
    filas.forEach(function (item) {
      if (item.personaConQuienEnvia === "0") {
        item.personaConQuienEnvia = "Isabella Torres Samano";
      } else if (item.personaConQuienEnvia === "1") {
        item.personaConQuienEnvia = "Sonia Cruz";
      } else if (item.personaConQuienEnvia === "2") {
        item.personaConQuienEnvia = "Invierno Betsie ";
      }
    });
  }

  const remplazarDestino = () => {
    var aux;
    filas.forEach(function (item) {
      if (item.personaConQuienEnvia === "0") {
        aux = (personaEnvio[0].lugares[parseInt(item.lugarEnviar)].ciudad);
        aux = aux[0];
        item.lugarEnviar = aux.split("costo", 1);
      } else if (item.personaConQuienEnvia === "1") {
        aux = (personaEnvio[0].lugares[parseInt(item.lugarEnviar)].ciudad);
        aux = aux[0];
        item.lugarEnviar = aux.split("costo", 1);
      } else if (item.personaConQuienEnvia === "2") {
        aux = (personaEnvio[0].lugares[parseInt(item.lugarEnviar)].ciudad);
        aux = aux[0];
        item.lugarEnviar = aux.split("costo", 1);
      }
    });

  }

  useEffect(() => {
    setColumnas(columnas0);
    obtenerDatos();

  }, []);

  useState(remplazarDestino(), reemplazarPersona(), reemplazarLugar());

  const cargarPuntosEntrega = () => {
    setColumnas(columnas0);
    obtenerDatos(0);

  }
  const cargarPuntosFijos = () => {
    setColumnas(columnas1);
    obtenerDatos(1);

  }
  const cargarEntregaDomicilio = () => {
    setColumnas(columnas2);
    obtenerDatos(2);

  }

  return (
    <Container component="main" maxWidth="xs" className={classes.container}>

      <div>
        <br />
        <div>
          <ButtonGroup variant="outlined" aria-label="outlined button group">
            <Button onClick={cargarPuntosEntrega} >Puntos de Entrega</Button>
            <Button onClick={cargarPuntosFijos}>Punto Fijo</Button>
            <Button onClick={cargarEntregaDomicilio}>Entregas a Domicilio</Button>
          </ButtonGroup>
        </div>
        <br />
        <div style={{ height: 400, width: '100%' }}>

          <DataGrid
            rows={filas}
            columns={columnas}
            pageSize={5}
            rowsPerPageOptions={[5]}
          />
        </div>

      </div>
    </Container>
  );
}

