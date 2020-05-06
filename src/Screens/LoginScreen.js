import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import LoginScreenCard from "../Components/Cards/LoginScreenCard";
import loginBackground from "../Images/loginBackground.jpg";

const styles = theme => ({
    root: {
        height: '100vh',
        backgroundImage: `url(${loginBackground})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    layer: {
        height: '100vh',
        width: '100vw',
        background: 'black',
        opacity: '0.5'
    },
    loginCard: {
        position: 'absolute'
    }
});

class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <div className={classes.layer}>
                </div>
                <div className={classes.loginCard}>
                    <LoginScreenCard />
                </div>
            </div>
        )
    }

}

export default withStyles(styles)(LoginScreen);