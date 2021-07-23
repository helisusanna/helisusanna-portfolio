import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { useForm, ValidationError } from '@formspree/react';
import './styles.css';

import { Grid, 
        TextField,
        Button,
        Snackbar,
        Badge,
        CircularProgress,
        Backdrop,
        Divider,
        Box,
        Typography,
     }  from '@material-ui/core';

import CloseIcon from '@material-ui/icons/Close';
import MailIcon from '@material-ui/icons/Mail';
import OpenInBrowser from '@material-ui/icons/OpenInNewOutlined';
import SendIcon from '@material-ui/icons/Send';

import gallerylink from './images/gallery_link.jpg'

const useStyles = makeStyles((theme) => ({
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
            maxWidth: 250,
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
            <Grid container
            className={[classes.conGrid, 'slideanim']}
            direction="row"
            justify="center"
            alignItems="center">

                <Grid item xs={12} sm={8} md={8} lg={12} className={classes.itemGrid}>
                    <Typography variant="h4" className={classes.header}>Laita viestiä!</Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Divider/>
                </Grid>


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
                       <p id="tekofont" className={classes.p2}>Etsin toimeksiantajaa lopputyölleni.</p> 
                        Opinnäytetyön aihe ei ole vielä varma, mutta ajatuksena olisi tehdä lopputyö käyttöliittymäkehitykseen tai dataan liittyen.
                        Toiveena on tietysti myös työllistyä!
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
                        <Button type="submit" variant="contained" color="secondary" endIcon={<SendIcon/>}>
                            Lähetä
                        </Button>
                    </form>
                    </>
                    }
                </Grid>

                    <Grid item xs={12} sm={8} md={6} lg={6} className={classes.itemGrid}>
                        <Grid item >
                            <div id="image">
                                <a href={`https://bhehy002.myportfolio.com/`} target="_blank">
                                    <img className={classes.img} src={gallerylink} alt="helisusanna dev"/>
                                </a>
                                <div id="imageoverlay">
                                    <Button 
                                    variant="contained"
                                    color="primary"
                                    id="btn"
                                    startIcon={<OpenInBrowser/>}
                                    component="a" 
                                    href={`https://bhehy002.myportfolio.com/`} 
                                    target="_blank"
                                    >
                                        Valokuvagalleriaan
                                    </Button>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
            </Grid>
    );
}
export default Contact;