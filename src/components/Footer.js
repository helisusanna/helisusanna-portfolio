import React from "react";
import { makeStyles } from '@material-ui/core/styles';
// Material-ui
import { Grid, Container, Avatar, Divider, Typography, List, ListItem, ListItemIcon, ListItemText, Tooltip, }  from '@material-ui/core';
// icons
import google1 from './icons/ads-google.png'
import google2 from './icons/measurement-google.png'
import google3 from './icons/digital-google.png'
// images
import avatarHs from './images/avatar/avatarhs.jpg'
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import MailIcon from '@material-ui/icons/Mail';
import LocationIcon from '@material-ui/icons/LocationOn';
import FavoriteIcon from '@material-ui/icons/Favorite';

const drawerWidth = 250;
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
    gridItem: {
        padding: theme.spacing(2),
        alignItems: 'center',
        [theme.breakpoints.up('sm')]: {
            paddingLeft: theme.spacing(8),
        },
        [theme.breakpoints.down('600')]: {
            marginLeft: theme.spacing(8)
        },
        [theme.breakpoints.down('470')]: {
            marginLeft: theme.spacing(5)
        },
        [theme.breakpoints.down('380')]: {
            marginLeft: theme.spacing(0)
        },
    },
    img: {
        width: "100%",
    },
    largeAvatar: {
      width: theme.spacing(15),
      height: theme.spacing(15),
    },
    floatRight: {
        float: "right",
    },
    hideXs: {
        [theme.breakpoints.down('320')]: {
            display:"none"
        },
    },
    certificates: {
        marginTop: theme.spacing(5),
    },
    certificatesImg: {
        width: "85%",
        [theme.breakpoints.down('md')]: {
            width: "100%",
        },
    },
    bluep: {
        color: "#1230C7",
        marginLeft: theme.spacing(1),
    },
    p: {
        marginLeft: theme.spacing(1),
    }
}));

function Footer() {
    const classes = useStyles();
 
    return (
        <Container fixed>
            <Grid container
            className={classes.conGrid}
            direction="row"
            justify="center"
            alignItems="center" >
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <Divider/>
            </Grid>
                <Grid item xs={12} className={classes.gridItem}>
                    <Grid container
                    justifyContent="center"
                    alignItems="center">
                        <Grid item s={4}>
                            <Avatar alt="helisusanna" src={avatarHs} className={[classes.floatRight, classes.largeAvatar]} />
                        </Grid>
                        <Grid item s={4}>
                            <List dense="true">
                                <ListItem>
                                    <ListItemText><Typography variant="h6">Heli Hyttinen</Typography></ListItemText>
                                </ListItem>
                                <Tooltip title="Voit laittaa viestin yllä olevalla lomakkeella!">
                                    <ListItem className={classes.hideXs}>
                                        <ListItemIcon><MailIcon color="primary" fontSize="small"/></ListItemIcon>
                                        <ListItemText
                                            primary="helihyttine@gmail.com"
                                        />
                                    </ListItem>
                                </Tooltip>
                                <ListItem>
                                    <ListItemIcon ><WhatsAppIcon color="primary"/></ListItemIcon>
                                    <ListItemText
                                        primary="040 773 5430"
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon><LocationIcon color="primary"/></ListItemIcon>
                                    <ListItemText
                                        primary="Kymenlaakso"
                                    />
                                </ListItem>
                            </List>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid container
                className={[classes.certificates, classes.gridItem]}
                direction="row"
                justify="center"
                alignItems="center" >

                <Grid item xs={12} sm={12} md={4} lg={4}> 
                    <a target="_blank"
                        href={`https://skillshop.exceedlms.com/student/award/YnzVRVGRdZBL84Zg3JCMH38J`}>
                        <img src={google1} className={classes.certificatesImg}/>
                    </a>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4}> 
                    <a target="_blank"
                        href={`https://skillshop.exceedlms.com/student/award/JaAimubDU7gyjjKumjg3CY8x`}>
                        <img src={google2} className={classes.certificatesImg}/>
                    </a>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4}> 
                    <img 
                    src={google3}
                    className={classes.certificatesImg}/>
                </Grid>
                </Grid>
                
                <p className={classes.p}>Designed and coded with</p><FavoriteIcon fontSize="small" className={classes.p} color="secondary"/><p className={classes.p}>by Heli Hyttinen</p><p className={classes.bluep}> &copy; {new Date().getFullYear()} </p>
            </Grid>
            </Container>
    );
}
export default Footer;