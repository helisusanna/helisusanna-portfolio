import { React, useCallback, useState, useEffect, useRef, withStyles } from "react";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles, useTheme, createMuiTheme, ThemeProvider  } from '@material-ui/core/styles';
import './portfolio.css';
import './scripts.js';
import './styles.css';

import Gallery from "react-photo-gallery";
import { portfolioDetails } from "./portfolioDetails";
import { KeyboardArrowLeft, KeyboardArrowRight, AddSharp, Close, GitHub} from '@material-ui/icons';
import OpenInBrowser from '@material-ui/icons/OpenInNewOutlined';

import { Button, 
        Typography,
        Divider,
        Avatar,
        Fab,
        IconButton,
        Grid,
        Chip,
        MobileStepper,
        Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, 
        }  from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    conGrid: {
        [theme.breakpoints.up('sm')]: {
            padding: theme.spacing(4),
        },
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(2),
        },
        [theme.breakpoints.down('xs')]: {
            padding: theme.spacing(0),
        },
    },
    header: {
        opacity: 0.5,
        [theme.breakpoints.down('xs')]: {
            padding: theme.spacing(2),
        },
    },
    headerDivider: {
        [theme.breakpoints.down('xs')]: {
            marginLeft: theme.spacing(2),
            marginRight: theme.spacing(2),
        },
        marginBottom: theme.spacing(6),
    },
    img: {
        height: "auto",
       // overflow: 'hidden',
        display: 'block',
        width: '100%',
        cursor: 'pointer',
       /* [theme.breakpoints.down('sm')]: {
            width: "100%",
            height: "auto",
        },*/
    },
    absolute: {
        position: 'absolute',
        bottom: theme.spacing(2),
        right: theme.spacing(3),
    },
    fab: {
        margin: theme.spacing(2),
        backgroundColor: "#FFE821",
        "&:hover":{backgroundColor:"#FFB814"}
    },
    titleChip: {
        margin: theme.spacing(2),
    },
    contentText: {
        margin: theme.spacing(2),
    },
    dialogbtn: {
        marginLeft: theme.spacing(4),
    }
}));

function Portfolio() {
    const classes = useStyles();
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const [open, setOpen] = useState(false);
    const [scroll, setScroll] = useState('paper');
    const [currentImage, setCurrentImage] = useState(0);
    const [activeStep, setActiveStep] = useState(0);
    const [maxSteps, setMaxSteps] = useState(0);
      
    /*react-photo-galleryä varten
    const handleOpen = useCallback((event, { photo, index, scrollType }) => {
        setCurrentImage(index);
        setScroll(scrollType);
        setOpen(true);
    }, []);
                    <Gallery
                    className={classes.img}
                    photos={portfolioDetails}
                    direction={"row"}
                    onClick={handleOpen}
                />
    */

    const handleOpen = (id) => {
        setCurrentImage(id);
        setOpen(true);
    }

    const handleOpenMd = (id) => {
        console.log(window.screen.width)
        if(window.screen.width>600){
            setCurrentImage(id);
            setOpen(true);
        }
    }
  
    const handleClose = () => {
        setOpen(false);
    };

    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
      }

    const descriptionElementRef = useRef(null);
    useEffect(() => {
        if (!open) {
            setActiveStep(0);
        }
        if (open) {
            calculateMaxSteps();
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
            descriptionElement.focus();
            }
        }
    }, [open]);

    const calculateMaxSteps = () => {
        setMaxSteps(portfolioDetails[currentImage].content.length);
    }

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const Chips = (id) => {
        let chips = [];
        for(const photo in portfolioDetails){
            if(portfolioDetails[photo].id === id){
                for(const tag in portfolioDetails[photo].tags){
                    chips.push(<Chip label={`${Object.values(portfolioDetails[photo].tags[tag])}`} color="secondary" />)
                }
            }
        }
        return chips;
      }

    return (
        <ThemeProvider theme={theme}>
            <Grid 
            container         
            className={[classes.conGrid, 'slideanim']}
            direction="row"
            justify="center"
            spacing={1}>
            <Grid item xs={12} sm={8} md={8} lg={12}>
                <Typography variant="h2" className={classes.header}>Portfolio</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <Divider className={classes.headerDivider}/>
            </Grid>
                {portfolioDetails.map((photo) => {
                    return(
                        <Grid item xs={12} sm={5} md={5} lg={3} id="galleryItem">
                            <img
                            src={photo.src}
                            alt={photo.alts}
                            className={classes.img}
                            id={photo.className}
                            onClick={() => { handleOpenMd(photo.id)}}/>
                            <div id="overlay" onClick={() => { handleOpenMd(photo.id)}}>      
                                <Chip color="primary" size="small" label={photo.title} className={classes.titleChip}/>   
                                <div id="chips">
                                <Fab className={classes.fab} onClick={() => { handleOpen(photo.id)}}>
                                    <AddSharp/>
                                </Fab>
                                </div>
                                <div id="chips">
                                    {Chips(photo.id)}
                                </div>
                            </div>
                        </Grid>
                    );
                })}
                <Dialog
                    open={open}
                    onClose={handleClose}
                    scroll={scroll}
                    fullScreen={fullScreen}
                    maxWidth="md"
                    aria-labelledby="scroll-dialog-title"
                    aria-describedby="scroll-dialog-description"
                >
                    <DialogTitle id="scroll-dialog-title">{portfolioDetails[currentImage].title}</DialogTitle>
                    <DialogContent dividers={scroll === 'paper'}>
                        
                        <img
                            className={classes.img}
                            src={Object.values(portfolioDetails[currentImage].content[activeStep])}
                            alt={portfolioDetails[currentImage].alt}
                        />
                        {(maxSteps>1)
                        ?
                        <MobileStepper
                        variant="dots"
                        steps={maxSteps}
                        position="static"
                        activeStep={activeStep}
                        nextButton={
                            <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps-1}>
                            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                            </Button>
                        }
                        backButton={
                            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                            </Button>
                        }
                        />
                        :null}
                        <DialogContentText
                            id="scroll-dialog-description"
                            ref={descriptionElementRef}
                            tabIndex={-1}
                            className={classes.contentText}
                        >
                            <Typography variant="h6">{portfolioDetails[currentImage].description1}</Typography><br/>
                            <p>{portfolioDetails[currentImage].description2}</p><br/>
                            <p>{portfolioDetails[currentImage].description3}</p>
                        </DialogContentText>

                    </DialogContent>
                    <DialogActions>
                        {(portfolioDetails[currentImage].link1)
                        ?<Fab 
                            className={classes.dialogbtn}
                            onClick={() => openInNewTab(portfolioDetails[currentImage].link1)}
                            size="small"
                            color="secondary">
                                <GitHub/>
                            </Fab>
                        :null}
                        {(portfolioDetails[currentImage].link2)
                        ? <Fab 
                            className={classes.dialogbtn}
                            onClick={() => openInNewTab(portfolioDetails[currentImage].link2)}
                            size="small"
                            color="secondary">
                                <OpenInBrowser/>
                            </Fab>
                        :null}
                        <Fab 
                        onClick={handleClose} 
                        size="small"
                        color="primary">
                            <Close/>
                        </Fab>
                    </DialogActions>
                </Dialog>
                </Grid>
        </ThemeProvider>
    );
}
export default Portfolio;