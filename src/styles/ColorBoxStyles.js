import chroma from 'chroma-js';
import sizes from './sizes';

export default {

    ColorBox : {
        width: '20%',
        height: props => props.showLink ? '25%' : "50%",
        margin: '0 auto',
        display: 'inline-block',
        position: 'relative',
        cursor: 'pointer',
        marginBottom: '-4.5px',
        "&:hover button" : {
            opacity : 1
        },
        [sizes.down("lg")]: {
            width : "25%",
            height: props => props.showLink ? '20%' : "33.3333%"
        },
        [sizes.down("md")]: {
            width : "50%",
            height: props => props.showLink ? '10%' : "20%"
        },
        [sizes.down("xs")]: {
            width : "100%",
            height: props => props.showLink ? '5%' : "10%"
        }
    },

    copyText : {
        color : props =>
            chroma(props.background).luminance() >= 0.6 ? 'black' : 'white',
    },
    
    colorName : {
        color : props =>
            chroma(props.background).luminance() <= 0.08 ? 'white' : 'black'
    },

    seeMore : {
        color: props =>
            chroma(props.background).luminance() >= 0.6 ? 'rgba(0,0,0,0.5)' : 'white',
        width : "60px",
        height : "30px",
        position : "absolute",
        bottom: "0px",
        right: "0px",
        textAlign: "center",
        background: "rgba(255,255,255,0.3)",
        fontSize: "12px",
        lineHeight: "30px",
        textTransform: "uppercase",
        border: "none"
    },

    copyButton : {
        color: props =>
            chroma(props.background).luminance() >= 0.7 ? 'rgba(0,0,0,0.6)' : 'white',
        width: '100px',
        height: '30px',
        position: 'absolute',
        display: 'block',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        outline: 'none',
        background: 'rgba(255,255,255,0.3)',
        fontSize: '1rem',
        lineHeight: '30px',
        textTransform: 'uppercase',
        border: 'none',
        opacity : 0
    },
    
    boxContent : {
        position: 'absolute',
        width: '100%',
        left: '0px',
        bottom: '0px',
        letterSpacing: '1px',
        textTransform: 'uppercase',
        color: '#000',
        fontSize: '12px'
    },

    copyOverlay : {
        opacity: '0',
        zIndex: '0',
        width: '100%',
        height: '100%',
        transition: 'transform 0.6s ease-in-out',
        transform: 'scale(0.1)'
    },

    showOverlay : {
        opacity: '1',
        transform: 'scale(50)',
        zIndex: '999999',
        position: 'absolute'
    },

    copyMsg : {
        position: 'fixed',
        top: '0',
        left: '0',
        bottom: '0',
        right: '0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '4rem',
        transform: 'scale(0.1)',
        opacity: '0',
        color: '#fff',
        "& h1" : {
            fontWeight: '400',
            textShadow: '1px 2px #000',
            backgroundColor:' rgba(255,255,255,0.2)',
            display: 'block',
            width: '100%',
            textAlign: 'center',
            marginBottom: '0',
            padding: '1rem',
            fontSize: '1em',
            textTransform: 'uppercase',
            
            [sizes.down("xs")]: {
                fontSize : "4rem"
            }
        },
        "& p" : {
            fontSize: '1.5rem',
            fontWeight: '100'
        }
    },

    showMsg : {
        transform: 'scale(1)',
        opacity: '1',
        zIndex: '9999999',
        transition: 'all 0.4s ease-in-out',
        transitionDelay: '0.3s'
    }
}