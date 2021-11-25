import {makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(5),
    width: theme.spacing(16),
    height: theme.spacing(16),
  },
  paper: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(0),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
     
    },
    avatar: {
      marginBottom: theme.spacing(20),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', 
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(2, 0, 2),
    },
    formControl: {
        margin: theme.spacing(0),
        width:'100%'
      },

    textField: {
        margin: theme.spacing(1)
    },
    large: {
        width: theme.spacing(25),
        height: theme.spacing(25),
        marginBottom: theme.spacing(2),
        marginTop: theme.spacing(1),
    },
    
    container:{
        maxHeight: "100%",
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(0),
        /* height:window.innerHeight-25 */
    },
    modal: {
      position: 'absolute',
      width: 400,
      backgroundColor: "#fffff8",
      border: '1px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2,4,3),
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    }
     
      
}));

export default useStyles;