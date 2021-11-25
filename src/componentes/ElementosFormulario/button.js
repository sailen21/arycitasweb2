import { Button, Grid } from "@material-ui/core";

export default function ElementoButton(props) {
    const classes = props.classes;
    const color = props.color;
    const texto = props.texto;
    const sizeGrid = props.sizeGrid;
    const onClick = props.onClick;
    const tipo = props.tipo;
    return (
        <>
            <Grid item xs={sizeGrid}>
                <Button
                    type={tipo}
                    fullWidth
                    variant="contained"
                    color={color}
                    className={classes.submit}
                    onClick = {onClick}
                >
                    {texto}
                </Button>
            </Grid>
        </>
    );
}