import { Grid, TextField } from "@material-ui/core";

export default function ElementoTextField2(props) {
    const name = props.name;
    const label = props.label;
    const evento = props.evento;
    const sizeGrid = props.sizeGrid;
    const tipo  = props.tipo;
    return (
        <>
            <Grid item xs={sizeGrid}>
                <TextField
                    name={name}
                    variant="outlined"
                    required
                    fullWidth
                    id={name}
                    label={label}
                    type={tipo}
                    onChange={evento}
                   
                />
            </Grid>
        </>
    );
}