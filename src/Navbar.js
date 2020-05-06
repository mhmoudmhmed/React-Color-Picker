import React, {Component} from 'react';
import Slider from 'rc-slider';
import {Link} from 'react-router-dom';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import {withStyles} from '@material-ui/styles';
import 'rc-slider/assets/index.css';
import styles from "./styles/NavBarStyles";


class Navbar extends Component {

    constructor(props){
        super(props);
        this.state = {
            format : "hex",
            open: false
        }
    }

    handleClose= (event, reason) => {
        if(reason === 'clickaway'){
            return;
        }

        this.setState({open : false})
    }

    handleChange = (e) => {
        this.setState({format: e.target.value, open: true});
        this.props.handleChange(e.target.value);
    }

    render(){
        const {level, changeLevel, showColors, classes} = this.props;
        const {format, open} = this.state;
        
        return (
        <header className={classes.Navbar}>

            <div className={classes.Logo}>
                <Link to="/">
                    reactcolorpicker
                </Link>
            </div>

            {showColors && (
                <div>
                    <span className="text">
                        Level: {level}
                    </span>
                    <div className={classes.Slider}>
                        <Slider
                            defaultValue={level}
                            min={100}
                            max={900}
                            step={100}
                            onAfterChange={changeLevel}
                        />
                    </div>
                </div>
            )}

            <div className={classes.selectSontainer}>
            <Select
                value={format}
                onChange={this.handleChange}
            >
                <MenuItem value="hex">HEX - #fffff</MenuItem>
                <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
                <MenuItem value="rgba">RGBA - rgba(255,255,255,1.0)</MenuItem>
            </Select>
            </div>
            <div className="snackbar">
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    open={open}
                    autoHideDuration={1500}
                    onClose={this.handleClose}
                    message="Format Changed!"
                    action={
                        <IconButton size="small" key="close" aria-label="close" color="inherit" onClick={this.handleClose}>
                        <CloseIcon fontSize="small" />
                        </IconButton>
                    }
                />
        </div>
        </header>
        );
    }
}

export default withStyles(styles)(Navbar);
