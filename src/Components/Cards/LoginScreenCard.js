import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import history from '../../history/index';

const styles = theme => ({
    root: {
        width: '18rem',
        height: '10rem',
        border: 'white solid 1px',
        borderRadius: '10px',
        padding: '1rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    title: {
        fontSize: '1.5rem',
        color: 'white'
    },
    textField: {
        color: 'white',
        fontSize: '0.8rem'
    },
    button: {
        borderColor: 'white',
        border: '1px solid',
        padding: '3px 10px',
        fontSize: '0.7rem',
        backgroundColor: 'transparent',
        color:'white',
        width:'fit-content',
        marginTop:'1rem'
    },
    buttonCenter: {
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        width:'100%'
    }
});

class LoginScreenCard extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Typography classes={{ root: classes.title }} >
                    Login
                    </Typography>
                <TextField
                    id="Email"
                    placeholder="Email"
                    multiline
                    InputProps={{
                        className: classes.textField
                    }}
                    style={{ paddingTop: '1rem' }}
                />
                <TextField
                    id="Password"
                    placeholder="Password"
                    type="password"
                    InputProps={{
                        className: classes.textField
                    }}
                    style={{ paddingTop: '1rem' }}

                />
                <div className={classes.buttonCenter}>
                <Button classes={{root:classes.button}} onClick={() => {history.push('/')}}> Login </Button>
                </div>
            </div>
        )
    }

}

export default withStyles(styles)(LoginScreenCard);