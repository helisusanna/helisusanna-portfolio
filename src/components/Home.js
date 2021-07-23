import { React, useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';

import './styles.css';

import { Grid,
        Divider,
        Typography,
        List,
        ListItem,
        ListItemIcon,
        ListItemText,
        Collapse,
        Accordion,
        AccordionSummary,
        AccordionDetails,
        }  from '@material-ui/core';

/*images*/
import backgroundImage from './images/section1.jpg'

/*Icons*/
import ExpandMore from '@material-ui/icons/ExpandMore'
import ExpandLess from '@material-ui/icons/ExpandLess'
import CodeIcon from '@material-ui/icons/Code';
import WebIcon from '@material-ui/icons/Web';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const useStyles = makeStyles((theme) => ({
    grid: {
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        [theme.breakpoints.down('sm')]: {
            backgroundAttachment: 'fixed',
            backgroundPosition: 'top center',
            height: '900px',
        },
        [theme.breakpoints.down('xs')]: {
            backgroundSize: "300%"
        },
        width: '100vw',
        height: '100vh'
    },
    gridItem: {
        paddingTop: theme.spacing(8),
        paddingLeft: theme.spacing(8),
        [theme.breakpoints.up('1400')]: {
            padding: theme.spacing(8),
        },
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(2),
        },
        [theme.breakpoints.down('xs')]: {
            padding: theme.spacing(0),
        },
    },
    gridInside: {
        [theme.breakpoints.up('sm')]: {
            paddingLeft: theme.spacing(9),
        },
    },
    heading: {
        [theme.breakpoints.down('md')]: {
            paddingTop: theme.spacing(1),
            paddingLeft: theme.spacing(8),
            fontSize: "3em",
        },
        [theme.breakpoints.down('324')]: {
            paddingTop: theme.spacing(1),
            fontSize: "2.5em",
        },
    },
    pieImage: {
        width: "40%",
        [theme.breakpoints.down('sm')]: {
            display: "none",
        },
    },
    smfont:{
        fontSize: "0.5em",
    },
    listMd: {
        width: '100%',
        [theme.breakpoints.down('md')]: {
            display: "none",
        },
    },
    accordionMd: {
        width: '100%',
        [theme.breakpoints.up('lg')]: {
            display: "none",
        },
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(8),
        },
        [theme.breakpoints.down('md')]: {
            paddingTop: theme.spacing(0),
            padding: theme.spacing(2),
        },
        [theme.breakpoints.down('xs')]: {
            padding: theme.spacing(0),
        },
    },
    accordion: {
        marginTop: '3%',
        backgroundColor : "transparent",
        backgroundImage: "linear-gradient(to right, rgba(234,229,237,0.8), rgba(234,229,237,0.5));",
        [theme.breakpoints.down('360')]: {
            margin: 0,
            padding: 0
        },
    },
    accordionDiv: {
        [theme.breakpoints.down('960')]: {
            marginTop: "10%",
        },
        [theme.breakpoints.down('360')]: {
            margin: 0,
            padding: 0
        },
    },
    merkonomika: {
        display: "none",
        [theme.breakpoints.up('1610')]: {
            display: "block",
        },
    },
    hideMd:{
        [theme.breakpoints.down('md')]: {
            display: "none",
        },
    }
}));

function Home() {
    const classes = useStyles();

    const [expanded, setExpanded] = useState('panel2');
    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };
    
    const [ECTProgress, setECTProgress] = useState(0);
    const [ECTValue, setECTValue] = useState(184);
    const [KAProgress, setKAProgress] = useState(0);
    const [KAValue, setKAValue] = useState(4.67);

    const Progress = () => {
            const timer = setInterval(() => {
                setECTProgress((prev) => 
                (prev >= ECTValue ? setECTProgress(ECTValue) : prev + 10));
            }, 60);
    
            const timerka = setInterval(() => {
                setKAProgress((prev) => 
                (prev >= KAValue ? setKAProgress(KAValue) : prev + 1.17));
            }, 160);
    
            return () => {
            clearInterval(timerka);
            clearInterval(timer);
            };
    }
    useEffect(() => {
        Progress();
    }, []);
    
    return (


        <Grid container 
        className={classes.grid}
        direction="row"
        >
            <Grid item xs={12} sm={6} md={5} className={[classes.listMd, classes.gridItem]}>
                <Typography variant="h2" id="tekofont">HELI SUSANNA</Typography>
                <Typography>= <i>{"{business controller, designer, coder}"}</i></Typography>
                <Divider/>

                <div>
                    <List>
                        <ListItem>
                            <ListItemText>
                                <b>Tietojenkäsittelyn opinnot ovat lopputyötä vaille valmiita</b>
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <CodeIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Etsin lopputyöpaikkaa ja valmistumisen jälkeen toivon työllistyväni koodin pariin"/>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <ThumbUpIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Minulla on useita mielenkiinnon kohteita ja olen avoin hyvin monipuolisiin tehtäviin"/>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <WebIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Osaamista tällä hetkellä on eniten käyttöliittymistä ja liiketoiminnasta"/>
                        </ListItem>
                    </List>
                    <Divider/>
                    <List>
                        <ListItem>
                            <ListItemIcon>
                                <ArrowForwardIosIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Informaatioteknologian tradenomi" secondary="Kaakkois-Suomen ammattikorkeakoulu | 2019-"/>
                        </ListItem>
                    </List>
                    <Grid container md={12} className={classes.gridInside}>
                        <Grid item md={6}>
                            <Typography variant="h6" id="tekofont">KESKIARVO</Typography>
                            <Typography variant="h2" component="h3" id="tekofont">{KAProgress}<span id="tekofont" className={classes.smfont}>/5</span></Typography>
                        </Grid>
                        <Grid item md={6}>
                            <Typography variant="h6" id="tekofont">OPINTOPISTEET</Typography>
                            <Typography variant="h2" component="h3" id="tekofont">{ECTProgress}<span id="tekofont" className={classes.smfont}>/210</span></Typography>
                        </Grid>
                    </Grid>

                    <List>
                        <ListItem>
                            <ListItemIcon>
                                <ArrowForwardIosIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Merkonomi" secondary="Liiketalous ja hallinto | 2012-2015"/>
                        </ListItem>
                    </List>
                    <Grid item md={6} className={[classes.gridInside, classes.merkonomika]}>
                        <Typography variant="h6" id="tekofont">NÄYTTÖTODISTUKSEN KESKIARVO</Typography>
                        <Typography variant="h2" component="h3" id="tekofont">3<span id="tekofont" className={classes.smfont}>/3</span></Typography>
                    </Grid>

                </div>
            </Grid>

            <Grid item xs={12} sm={10} md={6} className={classes.accordionMd}>
                <Typography variant="h2" id="tekofont" className={classes.heading}>HELI SUSANNA</Typography>
                <Typography className={[classes.hideMd, classes.heading]}>= {"{business controller, designer, coder}"}</Typography>
                <Divider className={classes.hideMd}/>
                <div className={classes.accordionDiv}>
                    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} className={classes.accordion}>
                        <AccordionSummary
                        expandIcon={<ExpandMore />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                        >
                            <Typography>Tietojenkäsittelyn opinnot ovat lopputyötä vaille valmiita</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <List>
                                <ListItem>
                                    <ListItemIcon>
                                        <CodeIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary="Etsin lopputyöpaikkaa ja valmistumisen jälkeen toivon työllistyväni koodin pariin"/>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <ThumbUpIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary="Minulla on useita mielenkiinnon kohteita ja olen avoin hyvin monipuolisiin tehtäviin"/>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <WebIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary="Osaamista tällä hetkellä on eniten käyttöliittymistä ja liiketoiminnasta"/>
                                </ListItem>
                            </List>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} className={classes.accordion}>
                        <AccordionSummary
                        expandIcon={<ExpandMore />}
                        aria-controls="panel2bh-content"
                        id="panel2bh-header"
                        >
                            <Typography>Informaatioteknologian tradenomi</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <List>
                                <ListItem>
                                    <ListItemText primary="Kaakkois-Suomen ammattikorkeakoulu | 2019-"/>
                                </ListItem>
                                <ListItem>
                                    <Typography variant="h6" id="tekofont">KESKIARVO</Typography>
                                </ListItem>
                                <ListItem>
                                    <Typography variant="h2" component="h3" id="tekofont">{KAProgress}<span id="tekofont" className={classes.smfont}>/5</span></Typography>
                                </ListItem>
                                <ListItem>
                                    <Typography variant="h6" id="tekofont">OPINTOPISTEET</Typography>
                                </ListItem>
                                <ListItem>
                                    <Typography variant="h2" component="h3" id="tekofont">{ECTProgress}<span id="tekofont" className={classes.smfont}>/210</span></Typography>
                                </ListItem>
                            </List>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} className={classes.accordion}>
                        <AccordionSummary
                        expandIcon={<ExpandMore />}
                        aria-controls="panel3bh-content"
                        id="panel3bh-header"
                        >
                            <Typography>Liiketalouden merkonomi</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <List>
                                <ListItem>
                                    <ListItemText primary="Etelä-Kymenlaakson ammattiopisto | 2012-2015"/>
                                </ListItem>
                                <ListItem>
                                    <Typography variant="h6" id="tekofont">NÄYTTÖTODISTUKSEN KESKIARVO</Typography>
                                </ListItem>
                                <ListItem>
                                    <Typography variant="h2" component="h3" id="tekofont">3<span id="tekofont" className={classes.smfont}>/3</span></Typography>
                                </ListItem>
                            </List>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </Grid>

        </Grid>
    );
}
export default Home;