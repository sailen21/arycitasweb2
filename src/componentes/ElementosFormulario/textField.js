import { Grid, TextField } from "@material-ui/core";

export default function ElementoTextField(props) {
    const name = props.name;
    const label = props.label;
    const evento = props.evento;
    const sizeGrid = props.sizeGrid;
    const readOnly = props.readOnly;
    const value = props.value;
    
    const bandera = props.bandera;
    var text;
    if(bandera){
         text = props.helperText;
    }else{
         text = " ";
    }
    return (
        <>
            <Grid item xs={sizeGrid}>
                <TextField
                    name={name}
                    variant="outlined"
                    required
                    fullWidth
                    value = {value}
                    id={name}
                    label={label}
                    onChange={evento}
                    helperText={text}
                    InputProps={{
                        readOnly: readOnly,
                    }}
                />
            </Grid>
        </>
    );
}