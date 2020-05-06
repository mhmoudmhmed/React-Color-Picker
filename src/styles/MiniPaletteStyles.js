export default {
    
    root : {
        backgroundColor: "white",
        borderRadius: "5px",
        border: "1px solid #000",
        padding: "0.5rem",
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
        "&:hover svg": {
            opacity: 1
        }
    },
    colors: {
        backgroundColor: "#dae1e4",
        overflow: "hidden",
        height: "105px",
        width : "100%",
        borderRadius: "5px"
    },
    title: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "0",
        color: "#000",
        paddingTop: "0.5rem",
        fontSize: "0.9rem",
        position: "relative"
    },
    emoji: {
        marginLeft: "0.5rem",
        fontSize: "1.5rem"
    },
    colorBox: {
        height: "25%",
        width : "20%",
        display: "inline-block",
        margin: "0 auto",
        position: "relative",
        marginBottom: "-4.5px"
    },
    delete: {
    },
    deleteIcon : {
        color : "#fff",
        
        backgroundColor : "#eb3d30",
        width: "20px",
        height: "20px",
        position: "absolute",
        right: "0px",
        top: "0px",
        zIndex: 10,
        opacity: 0,
        transition: "all 0.3s ease-in-out"
    }
}