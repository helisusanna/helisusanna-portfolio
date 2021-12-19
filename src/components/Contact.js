import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { useForm, ValidationError } from '@formspree/react';
import './styles.css';
// Material-ui
import { Grid, TextField, Button, Snackbar, Badge, CircularProgress, Backdrop, Divider, Typography,}  from '@material-ui/core';
// Icons
import CloseIcon from '@material-ui/icons/Close';
import MailIcon from '@material-ui/icons/Mail';
import OpenInBrowser from '@material-ui/icons/OpenInNewOutlined';
import SendIcon from '@material-ui/icons/Send';
// Images
import backgroundImage from './images/bg.png'
import backgroundImageTrans from './images/bg-trans.png'

const useStyles = makeStyles((theme) => ({
    grid: {
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        [theme.breakpoints.down('md')]: {
            backgroundImage: `url(${backgroundImageTrans})`,
            backgroundAttachment: 'fixed',
            backgroundPosition: 'top center',
        },
    },
    conGrid: {
        [theme.breakpoints.up('sm')]: {
            padding: theme.spacing(4),
        },
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(2),
        },
    },
    itemGrid: {
        padding: theme.spacing(2),
        [theme.breakpoints.down('md')]: {
            paddingBottom: theme.spacing(2),
            paddingTop: theme.spacing(2),
        },
    },
    img: {
        width: "100%",
    },
    header: {
        opacity: 0.5,
        marginLeft:theme.spacing(1),
    },
    txtform: {
        '& > *': {
          margin: theme.spacing(3),
          maxWidth: 400,
          [theme.breakpoints.down('465')]: {
            maxWidth: 250,
            margin: theme.spacing(1),
        },
        },
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#FFE821',
    },
    p: {
        marginLeft: theme.spacing(3),
        [theme.breakpoints.down('465')]: {
            maxWidth: 300,
            margin: theme.spacing(1),
        },
    },
    p2: {
        fontSize: "1.3em",
    },
}));

function Contact() {
    const classes = useStyles();

    const [open, setOpen] = React.useState(true);
    const [state, handleSubmit] = useForm("xdoyldkl");
    const handleClose = () => {
        setOpen(false);
      };
    const close = (
        <>
        <Badge badgeContent={1} color="secondary"><MailIcon/></Badge>
        <Button color="secondary" size="small" onClick={handleClose}>
          <CloseIcon/>
        </Button>
        </>
    );
    const alert = (
        <Snackbar message="Kiitos viestistä, palaan sinulle parin päivän sisällä!" action={close} open={open} autoHideDuration={6000}/>
    )
    if (state.succeeded) {
        return alert;
    }

    return (
        <div className={classes.grid}>
            <Grid container
            className={[classes.conGrid, 'slideanim']}
            direction="row"
            justifyContent="center"
            alignItems="center">
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Typography variant="h4" className={classes.header}>Laita viestiä!</Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Divider/>
                </Grid>
            </Grid>
            <Grid container
            className={[classes.conGrid, 'slideanim']}
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start">
                <Grid item xs={12} sm={8} md={6} lg={6}  className={classes.itemGrid}>
                    {(state.submitting)
                    ? <>
                        <Backdrop open={true} className={classes.backdrop}>
                            <CircularProgress color="inherit" />
                        </Backdrop>
                    </>
                    :
                    <>
                    <p className={classes.p}>
                       <p id="tekofont" className={classes.p2}>Tästä voit laittaa mulle helposti viestiä</p> 
                        Liittyen mihin vain. Mieluusti osallistun koodiprojekteihin, joissa pääsen kehittymään. Lisäksi teen valokuvauksia ja sisältöä mediaan.
                    </p>
                    <form onSubmit={handleSubmit} className={classes.txtform} autoComplete="off">
                        <TextField fullWidth label="Sähköpostiosoitteesi" htmlFor="email" id="email" type="email" name="email"/>
                        <ValidationError 
                            prefix="Email" 
                            field="email"
                            errors={state.errors}
                        />
                        <TextField fullWidth label="Viestisi" id="message" name="message"/>
                        <ValidationError 
                            prefix="Message" 
                            field="message"
                            errors={state.errors}
                        />
                        <Button type="submit" variant="contained" color="primary" endIcon={<SendIcon/>}>
                            Lähetä
                        </Button>
                    </form>
                    </>
                    }
                </Grid>

            </Grid>
        </div>
    );
}
export default Contact;