import React, {Component} from 'react';
import DraggableColorList from './DraggableColorList';
import PaletteFormNav from './PaletteFormNav';
import ColorPickerForm from './ColorPickerForm';
import styles from "./styles/NewPaletteFormStyles";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Button from "@material-ui/core/Button";
import {arrayMove} from 'react-sortable-hoc';
import seedColors from './seedColors';


class NewPaletteForm extends Component {

    static defaultProps = {
        maxColorNumber : 20
    };

    constructor(props) {
        super(props);
        this.state = {
            open: true,
            colors : seedColors[0].colors,
        };
        
        this.form = React.createRef();
    }

    addNewColor = (newColor) => {
        this.setState({
            colors: [...this.state.colors, newColor],
            newColorName: ""
        })
    }

    handleDrawerOpen = () => {
        this.setState({ open: true });
    };
    
    handleDrawerClose = () => {
        this.setState({ open: false });
    };


    handleSubmit = (newPalette) => {
        newPalette.id = newPalette.paletteName.toLocaleLowerCase().replace(/ /g, '-');
        newPalette.colors = this.state.colors;
        
        this.props.savePalette(newPalette);
        this.props.history.push("/");
    }

    removeColor = (colorName) => {
        this.setState({
            colors : this.state.colors.filter(color => color.name !== colorName)
        })
    }

    onSortEnd = ({oldIndex, newIndex}) => {
        this.setState(({colors}) => ({
            colors: arrayMove(colors, oldIndex, newIndex)
        }));
    };

    clearColors = () => {
        this.setState({
            colors : []
        })
    }

    addRandomColor = () => {
        const allColors = this.props.palettes.map(c => c.colors).flat();
        let rand;
        let randomColor;
        let isDublicateColor = true;
        while(isDublicateColor){
            rand = Math.floor(Math.random() * allColors.length);
            randomColor = allColors[rand];
            isDublicateColor= this.state.colors.some(color => color.name === randomColor.name);
        }
        this.setState({
            colors : [...this.state.colors, randomColor]
            
        })
    }

    
    render() {

        const {classes, maxColorNumber, palettes} = this.props;
        const { open, colors } = this.state;
        const paletteIsFull = colors.length >= maxColorNumber;
        

        return (
            <div className={classes.root}>

            <PaletteFormNav
                open={open}
                palettes = {palettes}
                handleSubmit={this.handleSubmit}
                handleDrawerOpen={this.handleDrawerOpen}
            />

            <Drawer
                className={classes.drawer}
                variant='persistent'
                anchor='left'
                open={open}
                classes={{
                    paper: classes.drawerPaper
                }}
            >

                <div className={classes.drawerHeader}>
                    <IconButton onClick={this.handleDrawerClose}>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>

                <div className={classes.container}>
                    <Typography variant='h4' gutterBottom>
                        Design Your Palette
                    </Typography>
                    <div className={classes.buttons}>
                        <Button
                            variant='contained'
                            color='secondary'
                            onClick={this.clearColors}
                            className={classes.button}
                        >
                            Clear Palette
                        </Button>
                        <Button
                            variant='contained'
                            className={classes.button}
                            color='primary'
                            onClick={this.addRandomColor}
                            disabled = {paletteIsFull}
                        >
                            Random Color
                        </Button>
                        <ColorPickerForm
                            paletteIsFull={paletteIsFull}
                            addNewColor={this.addNewColor}
                            colors={colors}
                        />
                    </div>
                </div>
            </Drawer>
            <main
                className={classNames(classes.content, {
                    [classes.contentShift]: open
                })}
            >
                <div className={classes.drawerHeader} />
                <DraggableColorList
                    colors={this.state.colors}
                    removeColor={this.removeColor}
                    axis="xy"
                    onSortEnd={this.onSortEnd}
                    distance={20}
                />
            </main>
        </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(NewPaletteForm);