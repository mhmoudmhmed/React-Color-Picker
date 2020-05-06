import React, {Component} from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';
import styles from "./styles/PaletteStyles";
import {withStyles} from '@material-ui/styles';

class Palette extends Component{
    constructor(props){
        super(props);
        this.state = {
            level : 500,
            format : "hex"
        }
    }
    changeLevel = (level) => {
        this.setState({level})
    }

    changeFormat = (val) => {
        this.setState({
            format: val
        })
    }

    render(){

        const {classes} = this.props;
        const {colors, paletteName, emoji, id} = this.props.palette;
        const {level, format} = this.state

        const colorBoxes = colors[level].map((color) => (
            <ColorBox
            key={color.id}
            background={color[format]}
            name={color.name}
            moreUrl={`/palette/${id}/${color.id}`}
            showLink
            />
            ))
        return(
            <div className={classes.Palette}>
                <Navbar
                    level={level}
                    changeLevel={this.changeLevel}
                    handleChange={this.changeFormat}
                    showColors
                />
                <div className={classes.PaletteColors}>
                    {colorBoxes}
                </div>
                <PaletteFooter
                    paletteName={paletteName}
                    emoji={emoji}
                />
            </div>
        )
    }
}

export default withStyles(styles)(Palette);