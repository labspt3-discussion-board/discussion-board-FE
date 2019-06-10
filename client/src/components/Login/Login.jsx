import React, { Component, useState, }        					    from 'react';
import PropTypes                              					    from 'prop-types';
import { FontAwesomeIcon } 										              from '@fortawesome/react-fontawesome'
import clsx													                        from 'clsx';
import { Visibility, VisibilityOff, Close, }  							        from '@material-ui/icons';
import { styles, }                            					    from './Login.style.js';
import { withStyles, Typography, TextField, InputAdornment, 
				 IconButton, Button, Checkbox, FormGroup, Icon,
	       FormControlLabel, Modal, Card, CircularProgress, } from '@material-ui/core';
import { CheckCircle, Error, }                              from '@material-ui/icons';
import { GOOGLE_OAUTH_ID, FACEBOOK_OAUTH_ID, GOOGLE_OAUTH_REDIRECT_URI, FACEBOOK_OAUTH_REDIRECT_URI, } from '../../constants.js';

const Email = props => {

	const { classes } = props;
	const { value   } = props.email;

	return (
		<>
			<TextField
				error={ props.email.error }
				helperText={ props.email.helpText }
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
			error={ props.password.error }
			helperText={ props.password.helpText }
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
							{ show ? <Visibility /> : <VisibilityOff /> }
						</IconButton>
					</InputAdornment>
				),
			}}
		>

		</TextField>
	);
}

const SignInButton = props => {

	const { button, signInIcon, } = props;

	return (
		<>
			<Button
				className={ button }
				variant='contained'
				size='large'
				color='primary'
				onClick={ e => {
					props.handleSubmit(e, props);
				}}
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

	const url = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${ GOOGLE_OAUTH_ID }&response_type=code&scope=openid%20email%20profile&nonce=${ Math.random() }&redirect_uri=${ GOOGLE_OAUTH_REDIRECT_URI }`;

	return (
		<a href={ `${ url }` }>
			<button className={ clsx(googleButton, socialButton) }>
				<span>
					<span className={ socialButtonIcon }><FontAwesomeIcon icon={['fab', 'google']} /></span>
					<span className={ socialButtonText }><Typography color='textPrimary' variant='button'><span style={{ color: 'white', }}>Continue with Google</span></Typography></span>
				</span>
			</button>
		</a>

	);
}

const FacebookButton = props => {

	const { facebookButton, socialButton, socialButtonIcon, socialButtonText, } = props;

	const url = `https://www.facebook.com/v3.3/dialog/oauth?client_id=${ FACEBOOK_OAUTH_ID }&redirect_uri=${ FACEBOOK_OAUTH_REDIRECT_URI }&state=temp_state&scope=email&auth_type=rerequest`

	return (
		<a href={ `${ url }` }>
			<button className={ clsx(facebookButton, socialButton) }>
				<span>
					<span className={ socialButtonIcon }><FontAwesomeIcon icon={['fab', 'facebook']} /></span>
					<span className={ socialButtonText }><Typography color='textPrimary' variant='button'><span style={{ color: 'white', }}>Continue with Facebook</span></Typography></span>
				</span>
			</button>
		</a>
	);
}

const LoginMessage = props => {

	const { classes } = props;

	const renderMessage = () => {
		return (
			<div className={ classes.loginMessage }>
				{
					!props.user.loggedIn ? (
						<>
							<Icon style={{ width: '50px', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
								<Error 
									className={ classes.logInError }
								/>
							</Icon>
							<Typography variant='h5'>Unable To Authenticate</Typography>
					</>
					) : (
						<>
							<Icon style={{ width: '50px', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
								<CheckCircle 
									className={ classes.checkCircle }
								/>
							</Icon>
							<Typography variant='h5'>Log In Successful!</Typography>
					</>
					)
				}
				<Button
					size='medium'
					color='primary'
					variant='contained'
					onClick={ e => {
						props.handleLoginMessage(e);
						props.handleClose();
					}}
				>
					OK
				</Button>
			</div>
		);
	}

	return (
		<Card
			className={ classes.loginMessageContainer }
			tabIndex='1'
		>
			{
				props.loginModal.loading === true ? (
					<CircularProgress />
				) : (
					renderMessage()
				)
			}
		</Card>
	);
	
}

const LoginForm = props => {

	const { classes } = props;

	return (
	<Card 
		className={ classes.card } 
		tabIndex='0'
	>

		<div className={ classes.headerIcon }>
			<FontAwesomeIcon icon='user-alt' />
		</div>

		<div className={ classes.closeIconContainer }>
			<IconButton 
				size='small'
				onClick={ props.handleClose }
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
					{ ...props } 
					handleChange={ props.handleChange }
					classes={ classes }
				/>
				
				<Password 
					{ ...props } 
					handleChange={ props.handleChange }
					handleShowPassword={ props.handleShowPassword }
					classes={ classes }
				/>

				<RememberMe
					{ ...classes }
				/>
			</div>

			<div className={ classes.innerContainerTwo }>
				<SignInButton 
					{ ...classes }
					{ ...props }
					handleLogin={ props.handleLogin }
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

	);
}

class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: {
				value: '',
				error: false,
				helpText: '',
			},
			password: {
				value: '',
				show: false,
				error: false,
				helpText: '',
			},
			loginMessage: {
				open: false,
				error: false,
			}
		};

	}

	handleChange = (e, prop) => {
		this.setState({
			...this.state,
			[prop]: {
				...this.state[prop],
				value: e.target.value,
				error: false,
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

	validateInput = () => {

		const emailLength = this.state.email.value.length;
		const passwordLength = this.state.password.value.length;
		const emailMinLength = 8;
		const passMinLength = 6

		if (!(emailLength >= emailMinLength)) {

			this.setState({
				email: {
					value: '',
					error: true,
				}
			})

		}

		if (!(passwordLength >= passMinLength)) {
			this.setState({
				password: {
					value: '',
					error: true,
				}
			})

		}

		return (emailLength >= emailMinLength && passwordLength >= passMinLength)
	}

	handleSubmit = (e, props) => {

		const inputIsValid = this.validateInput();
		if (inputIsValid === true) {
			this.props.handleLogin(e, props);
			this.handleLoginMessage(e);
		}

	}

	handleClose = e => {

		this.props.handleLoginModal(e);

		this.setState({
			email: {
				value: '',
				error: false,
				helpText: '',
			},
			password: {
				value: '',
				show: false,
				error: false,
				helpText: '',
			},
		});
	}

	handleLoginMessage = e => {
		this.setState({
			loginMessage: {
				open: !this.state.loginMessage.open,
			}
		});
	}

	render() {

		const { classes } = this.props;

		const renderModal = () => {
			return (
				this.state.loginMessage.open === false ? (
					<LoginForm 
						{ ...this.props }
						{ ...this.state }
						classes={ classes }
						handleLoginModal={ this.props.handleLoginModal }
						handleClose={ this.handleClose }
						handleChange={ this.handleChange }
						handleShowPassword= { this.handleShowPassword }
						handleSubmit={ this.handleSubmit }
					/>
				) : (
					<LoginMessage
						{ ...this.state }
						{ ...this.props }
						classes={ classes }
						handleLoginMessage={ this.handleLoginMessage }
						handleClose={ this.handleClose }
					/>
				)
			);
		}

		return (
			<Modal
				open={ this.props.loginModal.open }
				className={ classes.modal }
			>
			{ renderModal() }
			</Modal>
		);
	}
	
}

export default withStyles(styles)(Login);