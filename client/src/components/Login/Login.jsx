import React, { Component, useState, }        					    from 'react';
import PropTypes                              					    from 'prop-types';
import { FontAwesomeIcon } 										              from '@fortawesome/react-fontawesome'
import clsx													                        from 'clsx';
import { Visibility, VisibilityOff, Close, }  							        from '@material-ui/icons';
import { styles, }                            					    from './Login.style.js';
import { withStyles, Typography, TextField, InputAdornment, 
	IconButton, Button, Checkbox, FormGroup, Icon,
	FormControlLabel, Modal, Card,} 					                from '@material-ui/core';
import Axios from 'axios';
import { HOST, } from '../../constants.js';

const Email = props => {

	const { classes } = props;
	const { value   } = props.email;

	return (
		<>
			<TextField
				id='signin-email-input'
				name='signin-email'
				className={ classes.input }
				variant='outlined'
				type='email'
				label='Email'
				required
				onChange={ e => props.handleChange(e, 'email') }
				value={ value }
				InputProps={{
					endAdornment: (
					<InputAdornment position='end'>
						<Icon className={ classes.emailIcon }>email</Icon>
					</InputAdornment>
					)
				}}
			>
			</TextField>
		</>
	);
}

const Password = props => {

	const { classes     } = props;
	const { value, show } = props.password;

	return (
		<TextField
			id='signin-password-input'
			className={ clsx(classes.input, classes.password) }
			variant='outlined'
			type={ show ? 'text' : 'password' }
			label='Password'
			required
			onChange={ e => props.handleChange(e, 'password') }
			value={ value }
			InputProps={{
				endAdornment: (
					<InputAdornment position='end'>
						<IconButton
							edge='end'
							aria-label='Toggle password visibility'
							onClick={ props.handleShowPassword }
						>
							{ show ? <VisibilityOff /> : <Visibility /> }
						</IconButton>
					</InputAdornment>
				),
			}}
		>

		</TextField>
	);
}

const SignInButton = props => {

	const { button, signInIcon, handleLogin } = props;

	return (
		<>
			<Button
				className={ button }
				variant='contained'
				size='large'
				color='primary'
				onClick={ (e) => handleLogin(e, props) }
			>
				Continue
			</Button>
		</>
	);
}

const RememberMe = props => {

	const { checkBox } = props;

	return (
		<div style={{ width: '160px' }}>
			<FormControlLabel
				control={
					<Checkbox
						className={ checkBox }
						value='CheckedA'
					/>
				}
				label={ <Typography variant='subtitle1'>Remember Me</Typography> }
			/>
		</div>
	);

}

const Options = props => {

	const { options } = props;

	return (
		<div className={ options }>
			<a href='#'><Typography color='primary'>Forgot Password</Typography></a>
			<a href='#'><Typography color='primary'>Not Registered? Create an account</Typography></a>
		</div>
	);
}

const GoogleButton = props => {

	const { googleButton, socialButton, socialButtonIcon, socialButtonText, } = props;

	return (
		<button className={ clsx(googleButton, socialButton) }>
			<span>
				<span className={ socialButtonIcon }><FontAwesomeIcon icon={['fab', 'google']} /></span>
				<span className={ socialButtonText }><Typography color='textPrimary' variant='button'><span style={{ color: 'white', }}>Continue with Google</span></Typography></span>
			</span>
		</button>

	);
}

const FacebookButton = props => {

	const { facebookButton, socialButton, socialButtonIcon, socialButtonText, } = props;

	return (
		<button className={ clsx(facebookButton, socialButton) }>
			<span>
				<span className={ socialButtonIcon }><FontAwesomeIcon icon={['fab', 'facebook']} /></span>
				<span className={ socialButtonText }><Typography color='textPrimary' variant='button'><span style={{ color: 'white', }}>Continue with Facebook</span></Typography></span>
			</span>
		</button>
	);
}

class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: {
				value: '',
			},
			password: {
				value: '',
				show: false,
			},
		};

	}

	handleChange = (e, prop) => {
		this.setState({
			...this.state,
			[prop]: {
				value: e.target.value,
			}
		});
	}

	handleShowPassword = e => {
		this.setState({
			...this.state,
			password: {
				...this.state.password,
				show: this.state.password.show ? false : true,
			}
		});
	}

	render() {

		const { classes } = this.props;

		return (
			<Modal
				open={ this.props.loginModal.open }
				className={ classes.modal }
			>
			<Card className={ classes.card }>

				<div className={ classes.headerIcon }>
					<FontAwesomeIcon icon='user-alt' />
				</div>

				<div className={ classes.closeIconContainer }>
					<IconButton 
						size='small'
						onClick={ this.props.handleLoginModal }
					>
						<Close />
					</IconButton>
				</div>

				<div className={ classes.container }>

					<Typography
						variant='h5'
						align='center'
					>
						Member Login
					</Typography>
		
					<div className={ classes.innerContainerOne }>
						<Email 
							{ ...this.state } 
							handleChange={ this.handleChange }
							classes={ classes }
						/>
						
						<Password 
							{ ...this.state } 
							handleChange={ this.handleChange }
							handleShowPassword={ this.handleShowPassword }
							classes={ classes }
						/>

						<RememberMe
							{ ...classes }
						/>
					</div>

					<div className={ classes.innerContainerTwo }>
						<SignInButton 
							{ ...classes }
							{ ...this.state }
							handleLogin={ this.props.handleLogin }
						/>
						<Options 
							{ ...classes } 
						/>
					</div>

					<div className={ classes.innerContainerThree }>

						<span className={ classes.divider }></span>
						<Typography className={ classes.dividerContent } variant='subtitle1'>OR</Typography>
						<span className={ classes.divider }></span>

					</div>

					<div className={ classes.innerContainerFour }>
						<GoogleButton { ...classes } />
						<FacebookButton { ...classes } />
					</div>
		
				</div>
			</Card>
		</Modal>
		);
	}
	
}

export default withStyles(styles)(Login);