import sizes from './sizes';

export default {
    
    Palette : {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
    },

    PaletteColors : {
        width: '100%',
        height: '90%'
    },

    goBack : {
        width: '20%',
        height: "50%",
        margin: '0 auto',
        display: 'inline-block',
        position: 'relative',
        cursor: 'pointer',
        marginBottom: '-4.5px',
        opacity : 1,
        backgroundColor: '#000',

        [sizes.down("lg")]: {
            width : "25%",
            height: "33.3333%"
        },

        [sizes.down("md")]: {
            width : "50%",
            height: "20%"
        },

        [sizes.down("xs")]: {
            width : "100%",
            height: "10%"
        }
    },

    backButton : {
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
        color: '#fff',
        textTransform: 'uppercase',
        border: 'none',
        textDecoration: 'none'
    }
}