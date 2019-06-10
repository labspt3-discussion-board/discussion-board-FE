import React, { Component, } from 'react';
import { withStyles, Modal, Card, Icon, Typography, Button, }        from "@material-ui/core";
import { CheckCircle, Error, }                              from '@material-ui/icons';
import { styles }            from './LoginMessageModal.style';

const LoginMessageModal = props => {	

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
						props.handleLoginMessageModal(e);
					}}
				>
					OK
				</Button>
			</div>
		);
	}

	return (
		<Modal
			open={ props.loginMessageModal.open }
			className={ classes.modal }
		>
			<Card
				className={ classes.loginMessageContainer }
				tabIndex='1'
			>
				{ renderMessage() }
			</Card>
		</Modal>
	);

}

export default withStyles(styles)(LoginMessageModal);