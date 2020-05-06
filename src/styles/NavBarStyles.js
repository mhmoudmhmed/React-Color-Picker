import sizes from './sizes';

export default {
    Navbar : {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: '6vh'
    },

    Logo : {
        padding:' 0 13px',
        fontSize: '15px',
        backgroundColor: '#eceff1',
        marginRight: '1rem',
        fontFamily: 'sans-serif',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        "& a" : {
            textDecoration: 'none',
            color: '#000'
        },

        [sizes.down("xs")]: {
            display: "none"
        }
    },

    Slider : {
        width: '340px',
        margin: '0 10px',
        display: 'inline-block',

        "& .rc-slider-track" : {
            backgroundColor: 'transparent'
        },

        "& .rc-slider-rail" : {
            height: '8px'
        },

        "& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:focus, .rc-slider-handle:hover" :{
            backgroundColor: 'green',
            outline: 'none',
            border: '2px solid green',
            boxShadow: 'none'
        },

        [sizes.down("sm")]: {
            width: "140px"
        }
    },

    selectSontainer : {
        marginLeft: 'auto',
        marginRight: '1rem'
    }
}