import React,{ useEffect, useState } from 'react';
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 350,
      width: 350,
      margin: theme.spacing(2),
      /* backgroundColor:"blue" */
    },
    media: {
      height: 350,
     
      alignItems: 'rigth',
    },
}));
 
export default function TarjetaImagen(props){
    const classes = useStyles();
    const [index, setIndex] = useState(0); 

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(index => index + 1);
            if(index === 2){
                setIndex(0);
            }
        
        }, 3000);
        return () => clearInterval(interval);
        }, [index]);
    
    return(
        <Card className={classes.root}>
                <CardMedia
                    className={classes.media}
                    image={ "../imagenes/lugares/" + props.nombreImagen[index]}
                    title="Lugar"
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="h2">
                        {props.nombreLugar}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.descripcion}
                    </Typography>
                </CardContent>
        </Card>
    );
}
