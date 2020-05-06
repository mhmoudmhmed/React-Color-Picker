import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import 'emoji-mart/css/emoji-mart.css';
import { Picker } from 'emoji-mart';


class PaletteMetaForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            stage: "form",
            showingEmojiPicker : false
        }
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount(){
        ValidatorForm.addValidationRule("isPaletteNameUnique", value =>
        this.props.palettes.every(
            ({paletteName}) => paletteName.toLocaleLowerCase() !== value.toLowerCase()
        ));
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    handleClickOpen = () => {
        this.setState({
            open : true,
            newPaletteName: ""
        })
    }

    handleClose = () => {
        this.setState({
            open : false
        })
    }

    showEmojiPicker = () => {
        this.setState({stage: "emoji"})
    }

    savePalette = (emoji) => {
        const newPalette = {
            paletteName : this.state.newPaletteName,
            emoji : emoji.native
        };

        this.props.handleSubmit(newPalette);
        this.setState({stage: ""});
    }

    render(){

        const {stage, newPaletteName} = this.state;
        const {hideForm} = this.props;

        return (
            <div>
                <Dialog
                    open={stage === "emoji"}
                    onClose={hideForm}
                >
                    <DialogTitle id="form-dialog-title">Choose a Palette Emoji</DialogTitle>
                    <Picker
                        onSelect={this.savePalette}
                        title='Choose a Palette Emoji'
                    />
                </Dialog>
                <Dialog
                    open={stage === "form"}
                    onClose={hideForm}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Choose a Palette Name</DialogTitle>
                    <ValidatorForm
                            onSubmit={this.showEmojiPicker}
                            ref={this.form}
                    >
                        <DialogContent>
                        <DialogContentText>
                            Please add a name for your new palette. Make sure it's unique!
                        </DialogContentText>

                            <TextValidator
                                value={newPaletteName}
                                label="Palette Name"
                                name="newPaletteName"
                                fullWidth
                                onChange={this.handleChange}
                                validators={['required', 'isPaletteNameUnique']}
                                errorMessages=
                                {[
                                    'Enter a Palette name',
                                    'Name already used!'
                                ]}
                            />
                        </DialogContent>

                        <DialogActions>
                        <Button onClick={hideForm} color="primary">
                            Cancel
                        </Button>
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                        >
                            Save
                        </Button>
                        </DialogActions>
                    </ValidatorForm>
                </Dialog>
            </div>
        );
    }

}


export default PaletteMetaForm;
