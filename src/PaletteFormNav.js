import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import classNames from "classnames";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import PaletteMetaForm from './PaletteMetaForm';
import styles from './styles/PaletteFormNavStyles';


class PaletteFormNav extends Component {
    constructor(props){
        super(props);
        this.state = {
            newPaletteName: "",
            isFormShowing: false
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    showForm = () => {
        this.setState({isFormShowing : true})
    }

    hideForm = () => {
        this.setState({isFormShowing : false})
    }

    render(){
        const {classes, open, handleSubmit, palettes, handleDrawerOpen} = this.props;
        const {isFormShowing} = this.state;
        
        return(
            <div className={classes.root}>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    color='default'
                    className={classNames(classes.appBar, {
                    [classes.appBarShift]: open,
                    })}
                >
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            className={classNames(classes.menuButton, {
                                [classes.hide] : open
                            })}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap>
                            Create Palette
                        </Typography>
                    </Toolbar>

                    <div className={classes.navBtns}>
                        <Link
                            to="/"
                        >
                            <Button
                                variant="contained"
                                color="secondary"
                                type="submit"
                                className={classes.button}
                            >
                                Go Back
                            </Button>
                        </Link>
                        <Button
                            className={classes.button}
                            variant="contained"
                            color="primary"
                            onClick={this.showForm}>
                            Save Palette
                        </Button>
                    </div>

                </AppBar>
                {
                    isFormShowing && (
                        <PaletteMetaForm
                            palettes={palettes}
                            handleSubmit={handleSubmit}
                            hideForm={this.hideForm}
                        />
                    )
                }
                
            </div>
        )
    }
}

export default withStyles(styles, { withTheme: true })(PaletteFormNav);