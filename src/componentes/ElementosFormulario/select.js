import { FormControl, Grid, InputLabel, Select } from "@material-ui/core";

export default function ElementoSelect(props) {
    const classes = props.classes;
    const name = props.name;
    const label = props.label;
    const handleEvento = props.handleEvento;
    const datos = props.datos;
    const subDato = props.subDato;
    const bandera = props.bandera;
    return (
        <>
            <Grid item xs={12}>
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel htmlFor={name} > {label} </InputLabel>
                    <Select
                        native
                        onChange={handleEvento}
                        label={label}
                        inputProps={{
                            name: name,
                            id: name,
                        }}
                    >
                        <option value={-1}>Seleccione una opción</option>
                        {
                            bandera === 1 ? (
                                datos.map((item, i) => (
                                    <option key={subDato + i} value={i}> {item[subDato]} </option>
                                ))
                            ) : (
                                datos.map((item, i) => (
                                    <option key={subDato + i} value={item}> {item} </option>
                                ))
                            )
                        }
                    </Select>
                </FormControl>
            </Grid>
        </>
    );
}