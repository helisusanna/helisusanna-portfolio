import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import './styles.css';
// Material-ui
import { Button, }  from '@material-ui/core';
// Icons
import OpenInBrowser from '@material-ui/icons/OpenInNewOutlined';
// Images

const useStyles = makeStyles(() => ({
    img: {
        width: "100%",
    },
}));

function openGallery() {
    const classes = useStyles();

    return(
            <div id="image">
                <a href={`https://bhehy002.myportfolio.com/`} target="_blank">
                    <img className={classes.img} alt="helisusanna dev"/>
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
    )
}
export default openGallery;