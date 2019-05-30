import React, { Component, }  from 'react';
import { styles, }            from './Register.style.js';
import { Visibility, VisibilityOff, }  							        from '@material-ui/icons';
import { withStyles, Typography, TextField, FormControlLabel, Checkbox, Button, InputAdornment, IconButton, Icon, }        from '@material-ui/core';
import Axios from 'axios';

const FirstName = props => {

	const { firstNameInput, firstName, handleChange, } = props;

	return (
		<>
			<TextField
				id='signup-firstname-input'
				name='signup-firstname'
				type='text'
				className={ firstNameInput }
				variant='outlined'
				label='First Name'
				required
				value={ firstName.value }
				onChange={ e => handleChange(e, 'firstName') }
			/>
		</>
	);
}

const LastName = props => {

	const { lastNameInput, lastName, handleChange, } = props;

	return (
		<>
			<TextField
				id='signup-lastname-input'
				name='signup-lastname'
				type='text'
				className={ lastNameInput }
				variant='outlined'
				label='Last Name'
				required
				value={ lastName.value }
				onChange={ e => handleChange(e, 'lastName') }
			/>
		</>
	);
}

const Email = props => {

	const { input, inputIcon } = props;
	const { value   } = props.email;

	return (
		<>
			<TextField 
				id='signup-email-input'
				name='signup-email'
				type='email'
				className={ input }
				variant='outlined'
				label='Email'
				required				
				onChange={ e => props.handleChange(e, 'email') }
				value={ value }
				InputProps={{
					endAdornment: (
					<InputAdornment position='end'>
						<Icon className={ inputIcon }>email</Icon>
					</InputAdornment>
					)
				}}
			/>
		</>
	);
}

const Username = props => {

	const { input, inputIcon } = props;
	const { value   } = props.username;

	return (
		<>
			<TextField 
				id='signup-username-input'
				name='signup-username'
				type='text'
				className={ input }
				variant='outlined'
				label='Username'
				required
				onChange={ e => props.handleChange(e, 'username') }
				value={ value }
				InputProps={{
					endAdornment: (
					<InputAdornment position='end'>
						<Icon className={ inputIcon }>account_circle</Icon>
					</InputAdornment>
					)
				}}
			/>
		</>
	);
}

const Password = props => {

	const { input } = props;
	const { value, show } = props.password;

	return (
		<>
			<TextField 
				id='signup-password-input'
				name='signup-password'
				type={ show ? 'text' : 'password' }
				className={ input }
				variant='outlined'
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
			/>
		</>
	);
}

const AgreeToTerms = props => {
	
	const { checkBox, handleChange, agreeToTermsLink, agreeToTerms, } = props;

	return (
		<div style={{ minWidth: '260px', margin: '0px 5px', }}>
			<FormControlLabel
				control={
					<Checkbox
						className={ checkBox }
						checked={ agreeToTerms }
						onChange={ e => handleChange(e, 'agreeToTerms') }
					/>
				}
				label={ <Typography variant='subtitle1'>I accept the <a href='#' className={ agreeToTermsLink }>Terms of Use</a> & <a href='#' className={ agreeToTermsLink }>Privacy Policy</a></Typography> }
			/>
		</div>
	);
}

const SubscribePremium = props => {

	const { checkBox, } = props;

	return (
		<div style={{ minWidth: '260px', margin: '0px 5px', }}>
			<FormControlLabel
				control={
					<Checkbox
						className={ checkBox }
						value='CheckedA'
					/>
				}
				label={ <Typography variant='subtitle1'>I want to sign up for a premium membership.</Typography> }
			/>
		</div>
	);
}

const SignUpButton = props => {

	const { button, agreeToTerms, handleSubmit, } = props;

	return (
		<>
			<Button
				className={ button }
				variant='contained'
				size='large'
				color='primary'
				type='submit'
				disabled={ !agreeToTerms }
				onClick={ handleSubmit }
			>
				Continue
			</Button>
		</>
	);
}

const ExistingMember = props => {

	const { options } = props;

	return (
		<div className={ options }>
			<a href='#' onClick={ props.handleLoginModal }><Typography color='primary'>Already have an account? Sign in</Typography></a>
		</div>
	);
}

class Register extends Component {
	constructor(props) {
		super(props);

		this.state = {
			firstName: {
				value: 'first',
			},
			lastName: {
				value: 'last',
			},
			email: {
				value: 'email@mail.com',
			},
			username: {
				value: 'username',
			},
			password: {
				value: 'password',
				show: false,
			},
			agreeToTerms: true,
		};

	}

	handleChange = (e, prop) => {
		this.setState({
			...this.state,
			[prop]: {
				...this.state[prop],
				value: e.target.value,
			}
		});
	}

	handleShowPassword = e => {
		this.setState({
			...this.state,
			password: {
				...this.state.password,
				show: !this.state.password.show,
			}
		});
	}

	handleCheckBoxChange = (e, prop) => {
		this.setState({
			...this.state,
			[prop]: !this.state[prop],
		});
	}

	handleSubmit = e => {
		e.preventDefault();

		Axios.post('http://localhost:8000/api/users/', {
			firstName: this.state.firstName.value,
			lastName:  this.state.lastName.value,
			email:     this.state.email.value,
			username:  this.state.username.value,
			password:  this.state.password.value,
		}).then(res => {
			console.log(res.data);
		}).catch(err => console.log(err));

	}

	componentDidMount() {

		Axios.get('http://localhost:8000/api/users/', {

		}).then(res => {
			console.log(res.data);
		}).catch(err => console.log(err));

	}

	render() {

		const { classes } = this.props;

		return (
			<form className={ classes.container }>

				<Typography align='center' variant='h5'>Member Registration</Typography>

				<div className={ classes.innerContainerOne }>
					<FirstName 
						{ ...this.state } 
						handleChange={ this.handleChange }
						{ ...classes }
					/>

					<LastName
						{ ...this.state } 
						handleChange={ this.handleChange }
						{ ...classes } 
					/>
				</div>

				<div className={ classes.innerContainerTwo }>
					<Email 
						{ ...this.state } 
						handleChange={ this.handleChange }
						{ ...classes } 
					/>

					<Username 
						{ ...this.state } 
						handleChange={ this.handleChange }
						{ ...classes }
					/>

					<Password 
						{ ...this.state } 
						handleChange={ this.handleChange }
						handleShowPassword={ this.handleShowPassword }
						{ ...classes } 
					/>
				</div>

				<div className={ classes.innerContainerThree }>
					<AgreeToTerms
						{ ...this.state }
						handleChange={ this.handleCheckBoxChange }
						{ ...classes } 
					/>
					<SubscribePremium 
						handleChange={ this.handleCheckBoxChange }
						{ ...classes } 
					/>
				</div>

				<div className={ classes.innerContainerFour }>
					<SignUpButton 
						{ ...this.state }
						{ ...classes } 
						handleSubmit={ this.handleSubmit }
					/>
					<ExistingMember 
						handleLoginModal={ this.props.handleLoginModal }
						{ ...classes }
					/>
				</div>

			</form>
		);
	}
}

export default withStyles(styles)(Register);