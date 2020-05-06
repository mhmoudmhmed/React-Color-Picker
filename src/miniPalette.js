import React, {PureComponent} from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from "./styles/MiniPaletteStyles";
import DeleteIcon from '@material-ui/icons/Delete';

class MiniPalette extends PureComponent {

    deletePalette = (e) => {
        e.stopPropagation();
        this.props.openDialog(this.props.id);
    }

    render(){

        const {classes, paletteName, emoji, colors, id, handleClick} = this.props;
        const miniColorBoxes = colors.map(color => (
            <div
                style={{backgroundColor: color.color}}
                className={classes.colorBox}
                key={color.name}
            />
        ))
        return(
            <div className={classes.root} onClick={() => handleClick(id)}>
                <div className={classes.delete}>
                    <DeleteIcon
                        className={classes.deleteIcon}
                        onClick={this.deletePalette}
                    />
                </div>

                <div className={classes.colors}>
                    {miniColorBoxes}
                </div>
                <h5 className={classes.title}>{paletteName} <span>{emoji}</span> </h5>
            </div>
        )
    }
}

export default withStyles(styles)(MiniPalette);