import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/DraggableColorBoxStyles";
import DeleteIcon from '@material-ui/icons/Delete';
import {SortableElement} from 'react-sortable-hoc';



const DraggableColorBox = SortableElement(props => {

    return(
        <div
        style={{backgroundColor : props.color}}
        className={props.classes.root}
        >
            <div className={props.classes.boxContent}>
                <span>
                    {props.name}
                </span>
                <DeleteIcon
                    className={props.classes.delete}
                    onClick={props.removeColor}
                />
            </div>
        </div>
    )
})

export default withStyles(styles)(DraggableColorBox);