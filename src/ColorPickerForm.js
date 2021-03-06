import React, {Component} from 'react';
import Button from "@material-ui/core/Button";
import {ChromePicker} from 'react-color';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import { withStyles } from "@material-ui/core/styles";
import styles from './styles/ColorPickerFormStyles';

class ColorPickerForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentColor : "teal",
            newColorName : "",
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        ValidatorForm.addValidationRule("isColorNameUnique", value =>
        this.props.colors.every(
            ({name}) => name.toLowerCase() !== value.toLowerCase()
        ));

        ValidatorForm.addValidationRule("isColorUnique", value =>
        this.props.colors.every(
            ({color}) => color !== this.state.currentColor
        ));
    }

    handleChangeComplete = (color) => {
        this.setState({ currentColor: color.hex });
    };

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(){
        const newColor = {
            color : this.state.currentColor,
            name : this.state.newColorName
        }
        this.props.addNewColor(newColor);
        this.setState({newColorName : ""});
    }

    render(){
        const {paletteIsFull, classes} = this.props;
        const {currentColor, newColorName} = this.state;
        return(
            <div>
                <ChromePicker
                    color={currentColor}
                    onChangeComplete={this.handleChangeComplete}
                    className={classes.picker}
                />
                <ValidatorForm
                ref={this.form}
                onSubmit={this.handleSubmit}
                instantValidate={false}
                >
                    <TextValidator
                        value={newColorName}
                        className={classes.colorNameInput}
                        variant="filled"
                        name="newColorName"
                        margin="normal"
                        placeholder="Color Name"
                        onChange={this.handleChange}
                        validators={['required', 'isColorNameUnique', 'isColorUnique']}
                        errorMessages=
                        {[
                            'Enter a color name',
                            'Color name must be unique',
                            'Color already used!'
                        ]}
                    />
                    <Button
                        variant='contained'
                        color='primary'
                        type="submit"
                        style={{backgroundColor : paletteIsFull ? "grey" : currentColor}}
                        className={classes.addColor}
                        disabled = {paletteIsFull}
                    >
                        {paletteIsFull ? "Palette Full" : "Add Color"}
                    </Button>
                </ValidatorForm>

            </div>
        )
    }
}

export default withStyles(styles)(ColorPickerForm);