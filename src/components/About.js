import { React, useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import './styles.css';
import './scripts.js';
import {CircleProgress} from 'react-gradient-progress'
// images
import pieImage from './images/part_piechart_2.png'
// avatars
import jsAvatar from './images/avatar/js.png'
import cssAvatar from './images/avatar/css.png'
import reactAvatar from './images/avatar/react.png'
import nodeAvatar from './images/avatar/node.png'
import cAvatar from './images/avatar/c.png'
import phpAvatar from './images/avatar/php.png'
import pyAvatar from './images/avatar/py.png'
import jupAvatar from './images/avatar/jup.png'
import sqlAvatar from './images/avatar/sql.png'
import sqlserverAvatar from './images/avatar/sqlserver.png'
import netAvatar from './images/avatar/netcore.png'
import azureAvatar from './images/avatar/azure.png'
import restAvatar from './images/avatar/rest.png'
import jsonAvatar from './images/avatar/json.png'
import xmlAvatar from './images/avatar/xml.png'
import adobeAvatar from './images/avatar/adobe.png'
import unityAvatar from './images/avatar/unity.png'
import supAvatar from './images/avatar/sup.png'
import psAvatar from './images/avatar/ps.png'
import aiAvatar from './images/avatar/ai.png'
import aeAvatar from './images/avatar/ae.png'
import idAvatar from './images/avatar/id.png'
import prAvatar from './images/avatar/pr.png'
import fbAvatar from './images/avatar/fb.png'
import googleAvatar from './images/avatar/google.png'
import adsAvatar from './images/avatar/ads.png'
import crmAvatar from './images/avatar/crm.png'
import officeAvatar from './images/avatar/office.png'
import msAvatar from './images/avatar/ms.png'
import excelAvatar from './images/avatar/excel.png'
// icons
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Check from '@material-ui/icons/CheckCircleOutlineOutlined';
// Material-ui
import { Grid, List, Divider, Collapse, LinearProgress, Typography, Box, Chip, Avatar,}  from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    header: {
        opacity: 0.5,
        marginLeft:theme.spacing(1),
    },
    conGrid: {
        [theme.breakpoints.up('sm')]: {
            padding: theme.spacing(4),
        },
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(2),
        },
        //backgroundImage: `url(${backgroundImage})`,
        //backgroundRepeat: 'no-repeat',
       // backgroundSize: 'cover',
    },
    circle: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(3),
        display: "flex",
       // paddingLeft: theme.spacing(9),
       /* [theme.breakpoints.down('md')]: {
            paddingLeft: theme.spacing(4),
        },
       [theme.breakpoints.down('sm')]: {
            paddingLeft: theme.spacing(25),
        },
        [theme.breakpoints.down('xs')]: {
            paddingLeft: theme.spacing(4),
        },*/
    },
    rootBar: {
        height: 8,
        backgroundColor: '#f0f0f0',
        marginBottom: theme.spacing(1),
      },
    blueBar: {
        height: 8,
        backgroundImage: `linear-gradient(90deg, #63A0FF 50%, #FF87BD 100%)`
    },
    yellowBar: {
        height: 8,
        backgroundImage: `linear-gradient(90deg, #FFB814 50%, #FF87BD 100%)`
    },
    indigoBar: {
        height: 8,
        backgroundImage: `linear-gradient(90deg, #1230C7 50%, #63A0FF 100%)`
    },
    list: {
        width: '100%',
       // maxWidth: 400,
        [theme.breakpoints.up('sm')]: {
            padding: theme.spacing(1),
        },
        [theme.breakpoints.down('sm')]: {
          //  maxWidth: 400,
        },
    },
    mdList: {
        [theme.breakpoints.down('sm')]: {
            display: "none",
        },
    },
    smList: {
        marginTop: theme.spacing(1),
        [theme.breakpoints.up('md')]: {
            display: "none",
        },
    },
    chip: {
        backgroundColor: 'transparent',
        border: 'solid #CCCCCC 0.5px',
        margin: "1%",
    },
    pointer: {
        [theme.breakpoints.up('md')]: {
            cursor: "pointer",
        },
    },
    itemGrid: {
        [theme.breakpoints.up('sm')]: {
            padding: theme.spacing(2),
        },
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(0),
        },
        [theme.breakpoints.down('md')]: {
            paddingBottom: theme.spacing(2),
            paddingTop: theme.spacing(2),
        },
    },
    pieImage: {
        width: "80%",
        /*[theme.breakpoints.down('1620')]: {
            width: "75%",
        },*/
        [theme.breakpoints.down('1600')]: {
            width: "100%",
        },
        [theme.breakpoints.down('md')]: {
            width: "80%",
        },
    },
    p:{
        fontSize : "1.1em",
    },
    textGrid: {
        padding: theme.spacing(2),
        [theme.breakpoints.down('md')]: {
            padding: theme.spacing(0),
        },
        [theme.breakpoints.down('md')]: {
            paddingBottom: theme.spacing(2),
            paddingTop: theme.spacing(2),
        },
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
    },
}));

function About() {

    const classes = useStyles();

    const [codingProgress, setCodingProgress] = useState(0);
    const [codingValue, setCodingValue] = useState(65);
    const [frontValue, setFrontValue] = useState(80);
    const [backValue, setBackValue] = useState(75);
    const [dataValue, setDataValue] = useState(60);
    const [mobileValue, setMobileValue] = useState(40);

    const [designProgress, setDesignProgress] = useState(0);
    const [designValue, setDesignValue] = useState(60);
    const [uiValue, setUiValue] = useState(65);
    const [uxValue, setUxValue] = useState(55);
    const [threeValue, setThreeValue] = useState(35);
    const [gdValue, setGdValue] = useState(70);

    const [businessProgress, setBusinessProgress] = useState(0);
    const [businessValue, setBusinessValue] = useState(90);
    const [thValue, setThValue] = useState(75);
    const [adminValue, setAdminValue] = useState(80);
    const [sdValue, setSdValue] = useState(55);
    const [dmValue, setDmValue] = useState(65);

    const [openCoding, setOpenCoding] = useState(false);
    const [openDesign, setOpenDesign] = useState(false);
    const [openBusiness, setOpenBusiness] = useState(false);

    const handleClickCoding = () => {
      setOpenCoding(!openCoding);
    };
    const handleClickDesign = () => {
        setOpenDesign(!openDesign);
    };
    const handleClickBusiness = () => {
        setOpenBusiness(!openBusiness);
    };

    const Progress = () => {
        if(document.getElementById("con").classList.contains('slideanim')){
            const timer = setInterval(() => {
                setCodingProgress((prev) => 
                (prev >= codingValue ? setCodingProgress(codingValue) : prev + 1));
                setDesignProgress((prev) => 
                (prev >= designValue ? setDesignProgress(designValue) : prev + 1));
                setBusinessProgress((prev) => 
                (prev >= businessValue ? setBusinessProgress(businessValue) : prev + 1));
            }, 60);
    
            return () => {
            clearInterval(timer);
            };
        }
    }
    useEffect(() => {
        Progress();
    }, []);

    return (
    <>
        <Grid container
        id="con" 
        className={[classes.conGrid, 'slideanim']}
        direction="row"
        justify="center"
        alignItems="center" 
        >
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <Typography variant="h2" className={classes.header}>About</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <Divider/>
            </Grid>
            <Grid item xs={12} sm={8} md={8} lg={5} className={classes.itemGrid}>
                <img src={pieImage} className={classes.pieImage}/>
            </Grid>

            <Grid 
            container 
            direction="row"   
            justifyContent="space-between"
            alignItems="center" 
            xs={12} sm={8} md={12} lg={5}>

                <Grid item xs={12} sm={12} md={4} lg={12} className={classes.itemGrid}>
                    
                    <Typography variant="h6" id="tekofont">Part business administrator</Typography>
                    <ui className={classes.p}>
                        <li>Kuusi vuotta rahoitusalalla, jota ennen palvelualan töitä.</li>
                        <li>Yläasteelta lähtien yrittäjyysopintoja sekä yhteistöitä pienyrittäjien kanssa.</li>
                        <li>Sivutyönä digitaalisen markkinoinnin tehtäviä.</li>
                        <li>Teen tasaisesti ja rauhallisesti. Järjestän ongelmat tyynesti hallintaan.</li>
                    </ui>
                    
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={12} className={classes.itemGrid}>
                    <Typography variant="h6" id="tekofont">Part coder</Typography>
                    <ui className={classes.p}>
                        <li>Opiskellut sekä tehnyt omia sovellusprojekteja vaihtelevin tekniikoin.</li>
                        <li>Matemaattisesti lahjakas ja taitava teoreettisessa tietojenkäsittelyssä.</li>
                        <li>Tietojenkäsittelyn opintojen painotus ohjelmistokehityksessä.</li>
                        <li>Tutuimmat tekniikat ja työvälineet; React, - Native, Node, Python, C#, Microsoft</li>
                    </ui>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={12} className={classes.itemGrid}>
                    <Typography variant="h6" id="tekofont">Part designer</Typography>
                    <ui className={classes.p}>
                        <li>Käyttöliittymäkehitys ja datalähtöisyys kiehtoo.</li>
                        <li>Vahva näkemys käyttäjäkokemuksesta ja taitoa toteuttaa.</li>
                        <li>10 vuotta harrastuneisuutta graafisesta suunnittelusta, valokuvauksesta ja Adoben työkaluista.</li>
                    </ui>
                </Grid>
            </Grid>

            <Grid item xs={12} sm={8} md={4}>
                <List className={classes.list}>
                    <Box justifyContent="center"
                        alignItems="center"
                        className={classes.circle}
                    >
                        <CircleProgress 
                        width={150}
                        strokeLinecap='square'
                        percentage={codingProgress} 
                        strokeWidth={8} 
                        secondaryColor="#f0f0f0"
                        primaryColor={['#63A0FF','#FF87BD']}
                        />
                    </Box>
                    <span>Front-end</span>
                    <LinearProgress
                    variant="determinate" 
                    value={frontValue} 
                    classes={{ root: classes.rootBar, bar: classes.blueBar }}
                    />
                    <span>Back-end</span>
                    <LinearProgress
                    variant="determinate" 
                    value={backValue} 
                    classes={{ root: classes.rootBar, bar: classes.blueBar }}
                    />
                    <span>Data ja tietokannat</span>
                    <LinearProgress 
                    variant="determinate" 
                    value={dataValue} 
                    classes={{ root: classes.rootBar, bar: classes.blueBar }}
                    />
                    <span>Mobiilikehitys</span>
                    <LinearProgress 
                    variant="determinate" 
                    value={mobileValue} 
                    classes={{ root: classes.rootBar, bar: classes.blueBar }}
                    />
                    {openCoding ? <ExpandLess className={[classes.pointer, classes.mdList]} onClick={handleClickCoding}/> : <ExpandMore className={[classes.pointer, classes.mdList]}  onClick={handleClickCoding}/>}
                    <Collapse in={openCoding} timeout="auto" unmountOnExit>
                        <Box className={classes.mdList}>
                                <Chip avatar={<Avatar alt="JavaScript" src={jsAvatar} />} label="JavaScript" className={classes.chip} />
                                <Chip avatar={<Avatar alt="CSS" src={cssAvatar} />}label="CSS" className={classes.chip} />
                                <Chip avatar={<Avatar alt="React" src={reactAvatar} />} label="React" className={classes.chip} />
                                <Chip avatar={<Avatar alt="Node" src={nodeAvatar} />}label="NodeJS" className={classes.chip} />
                                <Chip avatar={<Avatar alt="React Native" src={reactAvatar} />} label="React Native" className={classes.chip} />
                                <Chip avatar={<Avatar alt="C#" src={cAvatar} />} label="C#" className={classes.chip} />
                                <Chip avatar={<Avatar alt=".NET" src={netAvatar} />} label=".NET" className={classes.chip}/>
                                <Chip avatar={<Avatar alt="PHP" src={phpAvatar} />} label="PHP" className={classes.chip} />
                                <Chip avatar={<Avatar alt="Python" src={pyAvatar} />} label="Python" className={classes.chip} />
                                <Chip avatar={<Avatar alt="Jupyter" src={jupAvatar} />} label="Jupyter" className={classes.chip} />
                                <Chip avatar={<Avatar alt="SQL/NoSQL" src={sqlAvatar} />} label="SQL/NoSQL" className={classes.chip} />
                                <Chip avatar={<Avatar alt="SSMS" src={sqlserverAvatar} />} label="SSMS" className={classes.chip}/>
                                <Chip avatar={<Avatar alt="REST" src={restAvatar} />} label="REST" className={classes.chip} />
                                <Chip avatar={<Avatar alt="JSON" src={jsonAvatar} />} label="JSON" className={classes.chip} />
                                <Chip avatar={<Avatar alt="XML" src={xmlAvatar} />} label="XML" className={classes.chip} />
                                <Chip avatar={<Avatar alt="Azure fundamentals" src={azureAvatar} />} label="Azure fundamentals" className={classes.chip}/>
                        </Box>
                    </Collapse>
                </List>
            </Grid>
        
            <Grid item sm={8} xs={12} className={classes.smList}>
                <Box className={classes.smList}>
                    <Chip avatar={<Avatar alt="JavaScript" src={jsAvatar} />} label="JavaScript" className={classes.chip} />
                    <Chip avatar={<Avatar alt="CSS" src={cssAvatar} />}label="CSS" className={classes.chip} />
                    <Chip avatar={<Avatar alt="React" src={reactAvatar} />} label="React" className={classes.chip} />
                    <Chip avatar={<Avatar alt="React Native" src={reactAvatar} />} label="React Native" className={classes.chip} />
                    <Chip avatar={<Avatar alt="Node" src={nodeAvatar} />}label="NodeJS" className={classes.chip} />
                    <Chip avatar={<Avatar alt="C#" src={cAvatar} />} label="C#" className={classes.chip} />
                    <Chip avatar={<Avatar alt=".NET" src={netAvatar} />} label=".NET" className={classes.chip}/>
                    <Chip avatar={<Avatar alt="PHP" src={phpAvatar} />} label="PHP" className={classes.chip} />
                    <Chip avatar={<Avatar alt="Python" src={pyAvatar} />} label="Python" className={classes.chip} />
                    <Chip avatar={<Avatar alt="Jupyter" src={jupAvatar} />} label="Jupyter" className={classes.chip} />
                    <Chip avatar={<Avatar alt="SQL/NoSQL" src={sqlAvatar} />} label="SQL/NoSQL" className={classes.chip} />
                    <Chip avatar={<Avatar alt="SSMS" src={sqlserverAvatar} />} label="SSMS" className={classes.chip}/>
                    <Chip avatar={<Avatar alt="REST" src={restAvatar} />} label="REST" className={classes.chip} />
                    <Chip avatar={<Avatar alt="JSON" src={jsonAvatar} />} label="JSON" className={classes.chip} />
                    <Chip avatar={<Avatar alt="XML" src={xmlAvatar} />} label="XML" className={classes.chip} />
                    <Chip avatar={<Avatar alt="Azure fundamentals" src={azureAvatar} />} label="Azure fundamentals" className={classes.chip}/>
                </Box>
            </Grid>
            
            <Grid item xs={12} sm={8} md={4}>
                <List className={classes.list}>
                    <Box justifyContent="center"
                        alignItems="center"
                        className={classes.circle}
                    >
                        <CircleProgress 
                        width={150}
                        strokeLinecap='square'
                        percentage={designProgress} 
                        strokeWidth={8} 
                        secondaryColor="#f0f0f0"
                        primaryColor={['#FFB814','#FF87BD']}
                        />
                    </Box>
                    <span>UI-suunnittelu</span>
                    <LinearProgress 
                    variant="determinate" 
                    value={uiValue} 
                    classes={{ root: classes.rootBar, bar: classes.yellowBar }}
                    />
                    <span>UX-suunnittelu</span>
                    <LinearProgress 
                    variant="determinate" 
                    value={uxValue} 
                    classes={{ root: classes.rootBar, bar: classes.yellowBar }}
                    />
                    <span>3D</span>
                    <LinearProgress 
                    variant="determinate" 
                    value={threeValue} 
                    classes={{ root: classes.rootBar, bar: classes.yellowBar }}
                    />
                    <span>Graafinen suunnittelu</span>
                    <LinearProgress 
                    variant="determinate" 
                    value={gdValue} 
                    classes={{ root: classes.rootBar, bar: classes.yellowBar }}
                    />
                    {openDesign ? <ExpandLess className={[classes.pointer, classes.mdList]} onClick={handleClickDesign}/>: <ExpandMore className={[classes.pointer, classes.mdList]}  onClick={handleClickDesign}/>}
                    <Collapse in={openDesign} timeout="auto" unmountOnExit>
                        <Box className={classes.mdList}>
                                <Chip avatar={<Avatar alt="Adobe Creative Cloud" src={adobeAvatar} />} label="Adobe Creative Cloud" className={classes.chip} />
                                <Chip avatar={<Avatar alt="Unity" src={unityAvatar} />} label="Unity" className={classes.chip} />
                                <Chip avatar={<Avatar alt="SketchUp" src={supAvatar} />} label="SketchUp" className={classes.chip} />
                                <Chip avatar={<Avatar alt="Photoshop" src={psAvatar} />} label="Photoshop" className={classes.chip} />
                                <Chip avatar={<Avatar alt="Illustrator" src={aiAvatar} />} label="Illustrator" className={classes.chip} />
                                <Chip avatar={<Avatar alt="InDesign" src={idAvatar} />} label="InDesign" className={classes.chip} />
                                <Chip avatar={<Avatar alt="After Effects" src={aeAvatar} />} label="After Effects" className={classes.chip} />
                                <Chip avatar={<Avatar alt="Premiere" src={prAvatar} />} label="Premiere" className={classes.chip} />
                        </Box>
                    </Collapse>
                </List>
            </Grid>
            <Grid item sm={8} xs={12} className={classes.smList}>
                <Box className={classes.smList}>
                    <Chip avatar={<Avatar alt="Adobe Creative Cloud" src={adobeAvatar} />} label="Adobe Creative Cloud" className={classes.chip} />
                    <Chip avatar={<Avatar alt="Unity" src={unityAvatar} />} label="Unity"className={classes.chip} />
                    <Chip avatar={<Avatar alt="SketchUp" src={supAvatar} />} label="SketchUp" className={classes.chip} />
                    <Chip avatar={<Avatar alt="Photoshop" src={psAvatar} />} label="Photoshop" className={classes.chip} />
                    <Chip avatar={<Avatar alt="Illustrator" src={aiAvatar} />} label="Illustrator" className={classes.chip} />
                    <Chip avatar={<Avatar alt="After Effects" src={aeAvatar} />} label="After Effects" className={classes.chip} />
                    <Chip avatar={<Avatar alt="InDesign" src={idAvatar} />} label="InDesign" className={classes.chip} />
                    <Chip avatar={<Avatar alt="Premiere" src={prAvatar} />} label="Premiere" className={classes.chip} />
                </Box>
            </Grid>

            <Grid item xs={12} sm={8} md={4}>
                <List className={classes.list}>
                    <Box justifyContent="center"
                        alignItems="center"
                        className={classes.circle}
                    >
                        <CircleProgress 
                        width={150}
                        strokeLinecap='square'
                        percentage={businessProgress} 
                        strokeWidth={8} 
                        secondaryColor="#f0f0f0"
                        primaryColor={['#1230C7','#63A0FF']}
                        />
                    </Box>
                    <span>Taloushallinto</span>
                    <LinearProgress 
                    variant="determinate" 
                    value={thValue} 
                    classes={{ root: classes.rootBar, bar: classes.indigoBar }}
                    />
                    <span>Sopimushallinta</span>
                    <LinearProgress 
                    variant="determinate" 
                    value={adminValue} 
                    classes={{ root: classes.rootBar, bar: classes.indigoBar }}
                    />
                    <span>Palvelumuotoilu</span>
                    <LinearProgress 
                    variant="determinate" 
                    value={sdValue} 
                    classes={{ root: classes.rootBar, bar: classes.indigoBar }}
                    />
                    <span>Digitaalinen markkinointi</span>
                    <LinearProgress 
                    variant="determinate" 
                    value={dmValue} 
                    classes={{ root: classes.rootBar, bar: classes.indigoBar }}
                    />
                    {openBusiness ? <ExpandLess className={[classes.pointer, classes.mdList]} onClick={handleClickBusiness}/> : <ExpandMore className={[classes.pointer, classes.mdList]}  onClick={handleClickBusiness}/>}
                    <Collapse in={openBusiness} timeout="auto" unmountOnExit>
                        <Box className={classes.mdList}>
                                <Chip avatar={<Avatar alt="Microsoft" src={msAvatar} />} label="Microsoft" className={classes.chip} />
                                <Chip avatar={<Avatar alt="O365" src={officeAvatar} />} label="O365" className={classes.chip}/>
                                <Chip avatar={<Avatar alt="Excel" src={excelAvatar} />} label="Excel" className={classes.chip} />
                                <Chip avatar={<Avatar alt="Google" src={googleAvatar} />} label="Google" className={classes.chip}/>
                                <Chip avatar={<Avatar alt="Google Ads" src={adsAvatar} />} label="Ads" className={classes.chip} />
                                <Chip avatar={<Avatar alt="Facebook Business" src={fbAvatar} />} label="Facebook Business" className={classes.chip}/>
                                <Chip avatar={<Avatar alt="CRM" src={crmAvatar} />} label="CRM" className={classes.chip} />
                        </Box>
                    </Collapse>
                </List>
            </Grid>
            <Grid item sm={8} xs={12} className={classes.smList}>
                <Box className={classes.smList}>
                    <Chip avatar={<Avatar alt="Microsoft" src={msAvatar} />} label="Microsoft" className={classes.chip} />
                    <Chip avatar={<Avatar alt="O365" src={officeAvatar} />} label="O365" className={classes.chip}/>
                    <Chip avatar={<Avatar alt="Excel" src={excelAvatar} />} label="Excel" className={classes.chip} />
                    <Chip avatar={<Avatar alt="Google" src={googleAvatar} />} label="Google" className={classes.chip}/>
                    <Chip avatar={<Avatar alt="Google Ads" src={adsAvatar} />} label="Ads" className={classes.chip} />
                    <Chip avatar={<Avatar alt="Facebook Business" src={fbAvatar} />} label="Facebook Business" className={classes.chip}/>
                    <Chip avatar={<Avatar alt="CRM" src={crmAvatar} />} label="CRM" className={classes.chip} />
                </Box>
            </Grid>
        </Grid>

        <Grid container
        id="con" 
        className={[classes.conGrid, 'slideanim']}
        direction="row"
        justify="center"
        alignItems="center" 
        >
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <Typography variant="h5" className={classes.header}>Supervoimat</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <Divider/>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={3} className={classes.textGrid}> 
                <Box color='#1230C7' style={{ textTransform: 'uppercase' }}>
                    <Typography variant="p"><Check/><br/>Huippuluokan muisti</Typography>
                </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={3} className={classes.textGrid}> 
                <Box color='#1230C7' style={{ textTransform: 'uppercase' }}>
                    <Typography variant="p"><Check/><br/>Likimain täydellinen organisointikyky</Typography>
                </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={3} className={classes.textGrid}> 
                <Box color='#1230C7' style={{ textTransform: 'uppercase' }}>
                    <Typography variant="p"><Check/><br/>Rohkeasti luova</Typography>
                </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={3} className={classes.textGrid}> 
                <Box color='#1230C7' style={{ textTransform: 'uppercase' }}>
                    <Typography variant="p"><Check/><br/>Kokonaisuuksien näkeminen</Typography>
                </Box>
            </Grid>
        </Grid>
    </>
    );
}
export default About;