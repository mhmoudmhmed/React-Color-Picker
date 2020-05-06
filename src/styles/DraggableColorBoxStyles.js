import chroma from 'chroma-js';
import sizes from "./sizes";

export default {
    root : {
        width: '20%',
        height: '25%',
        margin: '0 auto',
        display: 'inline-block',
        position: 'relative',
        cursor: 'pointer',
        marginTop : '-1px',
        marginBottom: '-4.5px',
        paddingTop : '10px',
        "&:hover svg" : {
            color : "white",
            transform : "scale(1.5)"
        },
        [sizes.down("lg")]: {
            width: "25%",
            height: "20%"
        },

        [sizes.down("md")]: {
            width: "50%",
            height: "10%"
        },

        [sizes.down("sm")]: {
            width: "100%",
            height: "10%"
        }
    },
    boxContent : {
        position: 'absolute',
        width: '100%',
        left: '0px',
        bottom: '0px',
        padding: '10px',
        letterSpacing: '1px',
        textTransform: 'uppercase',
        color : props =>
            chroma(props.color).luminance() <= 0.08 ? "rgba(255,255,255,0.8)" : "rgba(0,0,0,0.5)",
        fontSize: '12px',
        display : 'flex',
        justifyContent : "space-between"
    },
    delete : {
        transition : "all 0.3s ease-in-out"
    }
}