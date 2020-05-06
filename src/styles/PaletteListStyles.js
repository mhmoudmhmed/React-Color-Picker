import sizes from "./sizes";
import bg from './bg.svg';

export default {

    "@global": {

        ".fade-exit": {
            opacity: 1
        },
        ".fade-exit-active": {
            opacity: 0,
            transition: "opacity 500ms ease-out"
        }
    },
    
    root: {
        height: "100vh",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        paddingBottom: '4rem',
        /* background by SVGBackgrounds.com */
        backgroundColor: "#394bad",
        backgroundImage: `url(${bg})`,
        overflow: "scroll"

    },
    container: {
        width: "50%",
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        flexWrap: "wrap",
        [sizes.down("lg")]: {
            width: "70%"
        },

        [sizes.down("md")]: {
            width: "55%"
        },

        [sizes.down("xs")]: {
            width: "75%"
        }

    },
    nav: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        color: "#fff",
        alignItems : "center",
        "& a" : {
            color : "white",
            fontWeight : "bold"
        }
    },
    palette: {
        display: "grid",
        gridTemplateColumns: "repeat(3,30%)",
        gridGap: "1.5rem",
        boxSizing: "border-box",
        width: "100%",
        paddingBottom: "1rem",
        [sizes.down("md")]: {
            gridTemplateColumns: "repeat(2,50%)"
        },
        [sizes.down("xs")]: {
            gridTemplateColumns: "repeat(1,100%)",
            gridGap: "1rem"
        },
    }
}