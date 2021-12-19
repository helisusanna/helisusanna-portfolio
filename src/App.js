import { React, useRef, useState, useEffect } from 'react';
import { withStyles, makeStyles, useTheme, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import './index.css';
//----Material-ui
import { AppBar, Avatar, Tooltip, Fab, Button, Box, } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
//----Components
import Home from './components/Home'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'
//----Icons
import { ReactComponent as LogoHs } from './components/icons/helisusanna.svg';
import BlueIcon from './components/icons/hsBlue.svg';
import { IoLogoFacebook as FacebookIcon } from 'react-icons/io';
import { AiFillInstagram as InstagramIcon } from 'react-icons/ai';
import { DiGithubAlt as GithubIcon } from 'react-icons/di';
import { IoLogoLinkedin as LinkedinIcon } from 'react-icons/io';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const drawerWidth = 250;

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#4159d2',
      main: '#1230C7',
      dark: '#0c218b',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff9fca',
      main: '#FF87BD',
      dark: '#b25e84',
      contrastText: '#000',
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexGrow: 1,
    backgroundColor:"#FFE821"
  },
  drawer: {
    [theme.breakpoints.up('md')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    backgroundColor:"transparent",
    transition: "0.5s!important",
    transitionDuration:"0.5s",
    transitionProperty: "all",
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginRight: drawerWidth,
    },  
    "&:hover": {
      backgroundColor: "#EDEAE5",
      transition: "0.5s!important",
      transitionDuration:"0.5s",
      transitionProperty: "all",
      transitionTimingFunction: "ease-in-out",
    },
    [theme.breakpoints.down('360')]: {
      padding: '0!important',
      margin: 0
  },
  },
  menuButton: {
    marginLeft: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
 // toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    background:"#EDEAE5",
  },
  drawerPaperSm: {
    width: "100%",
    background:"#EDEAE5",
    alignItems: "center",
  },
  drawerList: {
    width: "auto",
    fontWeight:500,
    "&:hover": {
      backgroundColor: "transparent",
      color: "#1230C7", 
      fontWeight:700,
    }
  },
  drawerInfo: {
    marginLeft: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(50),
    },
    [theme.breakpoints.down('sm')]: {
      display: "none",
    },
  },
  drawerInfotxt: {
    marginLeft: theme.spacing(2),
    marginTop: theme.spacing(1),
    color: "#979492",
    fontSize:"0.8em",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  grid: {
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - 250px)`,
      marginRight: "250px",
    },
    backgroundColor: "#EDEAE5",
  },
  logoHs: { 
    height:"7vh", 
    width:"auto",
    "&:hover": {
      backgroundColor: "transparent",
    }
  },
  blueicon: { width:"6vh", marginRight: theme.spacing(2),},
  logoSm: { width:"60%",[theme.breakpoints.up('md')]:{display:"none"}},
  facebookIcon: {color: "#1230C7","&:hover": {backgroundColor: "transparent",color: "#DBD0C5"}
  },
  instagramIcon: {color:"#63A0FF","&:hover": {backgroundColor: "transparent",color: "#DBD0C5"}
  },
  githubIcon: {color: "#FF87BD","&:hover": {backgroundColor: "transparent",color: "#DBD0C5"}
  },
  linkedinIcon: {color: "#FFB814","&:hover": {backgroundColor: "transparent",color: "#DBD0C5"}
  },
  facebookIconMd: {color: "#081a75","&:hover": {backgroundColor: "transparent",color: "#DBD0C5"}, [theme.breakpoints.down('sm')]:{display:"none"}
  },
  instagramIconMd: {color:"#63A0FF","&:hover": {backgroundColor: "transparent",color: "#DBD0C5"}, [theme.breakpoints.down('sm')]:{display:"none"}
  },
  githubIconMd: {color: "#FF87BD","&:hover": {backgroundColor: "transparent",color: "#DBD0C5"}, [theme.breakpoints.down('sm')]:{display:"none"}
  },
  linkedinIconMd: {color: "#FFB814","&:hover": {backgroundColor: "transparent",color: "#DBD0C5"}, [theme.breakpoints.down('sm')]:{display:"none"}
  },
  cvTooltip: {
    margin: theme.spacing(2),
  },
  cvBtn: {
    [theme.breakpoints.up('md')]: {
    display: "none",
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: theme.spacing(10),
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
  },
}));

const scrollToRef = (ref) => window.scrollTo({ left: 0, top: ref.current.offsetTop, behavior: "smooth"});

function App(props) {

  const classes = useStyles();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({ target: window ? window() : undefined });
  
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const cvTooltip = `Avaa CV`
  const fbTooltip = `personal`
  const igTooltip = `in progress`
  const ghTooltip = `in progress`
  const liTooltip = `cv is better`

  const HomeRef = useRef(null);
  const AboutRef = useRef(null);
  const PortfolioRef = useRef(null);
  const ContactRef = useRef(null);
  const FooterRef = useRef(null);

  const scrollToHome = () => scrollToRef(HomeRef);
  const scrollToAbout = () => scrollToRef(AboutRef);
  const scrollToPortfolio = () => scrollToRef(PortfolioRef);
  const scrollToContact = () => scrollToRef(ContactRef);

  const sections = [
    { component: <Home/>,
      name: "Home",
      nameRef: HomeRef,
      scrollTo: scrollToHome,
      icon:<LogoHs className={classes.logoHs} />,
      },
    { component: <About/>,
      name: "About",
      nameRef: AboutRef,
      scrollTo: scrollToAbout,
      icon:<ChevronRightIcon/>,
    },  
    { component: <Portfolio/>,
      name: "Portfolio",
      nameRef: PortfolioRef,
      scrollTo: scrollToPortfolio,
      icon:<ChevronRightIcon/>,
    },
    { component: <Contact/>,
      name: "Contact",
      nameRef: ContactRef,
      scrollTo: scrollToContact,
      icon:<ChevronRightIcon/>,
    },
    { component: <Footer/>,
      name: "Footer",
      nameRef: FooterRef,
    },
  ]

  const drawer = (
    <div>
      <div className={classes.toolbar}/>
        <List>
        {sections.map((section, index) => (
          (index===0 ? (
          <ListItem button key={section.name} onClick={section.scrollTo}  className={classes.logoHs}>
            <ListItemIcon>{section.icon}</ListItemIcon>
          </ListItem>)
          : null
          )))}
          {sections.map((section, index) => (
            (index!=0 && index!=4 ? (
            <ListItem className={classes.drawerList} button key={section.name} onClick={section.scrollTo}>
              <ListItemIcon>{section.icon}</ListItemIcon>
              <ListItemText primary={section.name} />
            </ListItem>)
            : null
          )))}
          <ListItem className={classes.drawerList} button key="Photogallery" component="a" href={`https://bhehy002.myportfolio.com/`} target="_blank">
              <ListItemIcon><PhotoCameraIcon/></ListItemIcon>
              <ListItemText primary="Photogallery" />
            </ListItem>
        </List>
      <Divider />
      <div className={classes.drawerInfo}>
        <Tooltip title={cvTooltip}>
          <Fab
          color="primary"
          className={classes.cvTooltip}
          component="a"
          target="_blank"
          href={`https://drive.google.com/file/d/15BguyNVbZrEKE_1L0AIOXY6Rdf5mytb5/view?usp=sharing`}>
            CV
          </Fab>
        </Tooltip>
          <div className={classes.drawerInfotxt}>
            <p>Heli Hyttinen</p>
            <p>helihyttine@gmail.com</p>
            <p>040 773 5430</p>
          </div>
        </div>
        <Button 
        variant="contained"
        color="primary"
        className={classes.cvBtn}
        component="a"
        target="_blank"
        href={`https://drive.google.com/file/d/15BguyNVbZrEKE_1L0AIOXY6Rdf5mytb5/view?usp=sharing`}>
          Avaa CV
        </Button>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <ThemeProvider theme={theme}>
            <div className={classes.root}>
      <CssBaseline />

        <HideOnScroll {...props}>
          <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
              <img src={BlueIcon} className={classes.blueicon}/>
              <Grid justify="space-between" container spacing={24}  >
                <Grid item></Grid>
                <Grid item>
                  <Tooltip title={fbTooltip}>
                      <IconButton
                      className={classes.facebookIconMd}
                      component="a"
                      target="_blank"
                      href={`https://www.facebook.com/heli.hyttinen.7/`}>
                        <FacebookIcon/>
                      </IconButton>
                    </Tooltip>
                    <Tooltip title={igTooltip}>
                      <IconButton 
                      className={classes.instagramIconMd}
                      component="a"
                      target="_blank"
                      href={`https://www.instagram.com/helisusanna.ig/`}>
                        <InstagramIcon/>
                      </IconButton>
                    </Tooltip>
                    <Tooltip title={ghTooltip}>
                      <IconButton
                      className={classes.githubIconMd}
                      component="a"
                      target="_blank"
                      href={`https://github.com/helisusanna`}>
                        <GithubIcon/>
                      </IconButton>
                    </Tooltip>
                    <Tooltip title={liTooltip}>
                      <IconButton
                      className={classes.linkedinIconMd}
                      component="a"
                      target="_blank"
                      href={`https://www.linkedin.com/in/heli-h-b6871aa2/`}>
                        <LinkedinIcon/>
                      </IconButton>
                    </Tooltip>
                </Grid>
              </Grid>
              <IconButton
              color="secondary"
              aria-label="open drawer"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
              >
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
        </HideOnScroll>

      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden mdUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor="top"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaperSm,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
            <Box display="flex">
              <IconButton className={classes.facebookIcon}>
                <FacebookIcon/>
              </IconButton>
              <IconButton className={classes.instagramIcon}>
                <InstagramIcon/>
              </IconButton>
              <IconButton className={classes.githubIcon}>
                <GithubIcon/>
              </IconButton>
              <IconButton className={classes.linkedinIcon}>
                <LinkedinIcon/>
              </IconButton>
            </Box>
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            anchor="right"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>

    </div>
        <Grid container 
              direction="row"
              justify="space-between"
              alignItems="stretch"
              className={classes.grid}
              >
              <Grid item xs={12}>
                {sections.map((section, index) => (
                  <div ref={section.nameRef}>
                    {section.component}
                  </div>
                ))}
              </Grid>
        </Grid>

    </ThemeProvider>
  );
}

export default App;
