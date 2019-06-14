import React, { Component, } from 'react';
import { styles } from './NewSubforumModal.style.js';
import { withStyles, Typography, TextField, Card, Modal, IconButton, FormControlLabel, Checkbox, Avatar, List, Button, } from '@material-ui/core';
import { Close, Person, Remove, Add, } from '@material-ui/icons';


const MemberList = props => {

	const { classes } = props;

	const renderMembers = () => {
		return props.members.map((member, i) => {
			return (
				<li key={ i } className={ classes.avatarContainer }>
					<div className={ classes.avatar }>
						<Avatar>
							<Person />
						</Avatar>
						<Typography className={ classes.avatarText } variant='subtitle1'>{ member }</Typography>
					</div>

					<IconButton 
						size='small'
						onClick={ e => props.handleAddMemberRemove(e, i) }
					>
						<Remove className={ classes.removeIcon }/>
					</IconButton>
				</li>
			);
		});
	}


	return (
		<List className={ classes.listContainer }>
			<ul>

				{ renderMembers() }
				<AddMember
					{ ...props }
					classes={ classes }
					handleAddMemberSubmit={ props.handleAddMemberSubmit }
					handleAddMemberClick={ props.handleAddMemberClick }
					handleAddMemberBlur={ props.handleAddMemberBlur }
				/>
			</ul>
		</List>
	);
}

const AddMember = props => {

	const { classes } = props;

	const renderInput = () => {
		return (
			<>
			{
				props.addMemberInput.show ? (
					<TextField
						id='create-subforum-add-member-input'
						name='addMemberInput'
						className={ classes.addMemberInput }
						onKeyDown={ props.handleAddMemberSubmit }
						type='email'
					/>
				) : (
					<Typography className={ classes.avatarText } variant='subtitle1'>Add Member</Typography>
				)
			}
			</>
		);
	}

	return (
		<>
			<li className={ classes.avatarContainer }>

				<div className={ classes.addMemberAvatar } onClick={ props.handleAddMemberClick } onBlur={ props.handleAddMemberBlur }>
					<Avatar>
						<Add />
					</Avatar>
					{ renderInput() }
				</div>
			</li>
		</>
	);
}

class CreateSubforumForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			members: ['testuser@mail.com'],
			addMemberInput: {
				show: false,
			}
		};

	}

	handleAddMemberSubmit = e => {

		if (e.keyCode === 13) {
			const memberArr = this.state.members;
			memberArr.push(e.target.value);
			this.setState({
				members: memberArr,
			});
			e.target.value = '';
		}

	}

	handleAddMemberRemove = (e, i) => {

		const memberArr = this.state.members;
		memberArr.splice(i, 1);

		this.setState({
			members: memberArr,
		});

	}

	handleAddMemberClick = e => {

		this.setState({
			addMemberInput: {
				...this.state.addMemberInput,
				show: true,
			}
		});
	}

	handleAddMemberBlur = e => {
		this.setState({
			addMemberInput: {
				...this.state.addMemberInput,
				show: false,
			}
		});
	}

	componentDidUpdate() {
		
		if (this.state.addMemberInput.show) {
			const input = document.querySelector('#create-subforum-add-member-input');
			input.focus();
		}
		
	}

	render() {

		const { classes } = this.props;

		return (
			<Modal
				open={ this.props.newSubforumModal.open }
				className={ classes.modal }
			>
				<div className={ classes.cardContainer }>
					<Card className={ classes.card }>
						<form className={ classes.formContainer }>

							<div className={ classes.innerContainerOne }>
								<Typography variant='h5'>New Subforum</Typography>

								<IconButton
									onClick={ e => this.props.handleModalOpen(e, 'newSubforumModal') }
								>
									<Close />
								</IconButton>

							</div>

							<span className={ classes.divider }></span>

							<TextField
								id='create-subforum-name-input'
								variant='outlined'
								label='Subforum Name'
								className={ classes.subforumNameInput }
								required
							/>

							<FormControlLabel
								className={ classes.privateCheckBox }
								control={
									<Checkbox
										value='checkedA'
									/>
								}
								label={ <Typography variant='subtitle1'>Private</Typography> }
							/>

							<Typography variant='subtitle1'>Members</Typography>

							<MemberList
								{ ...this.state } 
								classes={ classes }
								handleAddMemberRemove={ this.handleAddMemberRemove }
								handleAddMemberSubmit={ this.handleAddMemberSubmit }
								handleAddMemberClick={ this.handleAddMemberClick }
								handleAddMemberBlur={ this.handleAddMemberBlur }
							/>

							<div className={ classes.buttonContainer }>
								<Button 
									variant='outlined' 
									color='primary'
									onClick={ e => this.props.handleModalOpen(e, 'newSubforumModal') }
								>
									Cancel
								</Button>

								<Button 
									variant='contained'
									color='primary'
									className={ classes.continueButton }
								>
									Continue
								</Button>
							</div>
								



						</form>
					</Card>
				</div>
			</Modal>
		);
	}
}

export default withStyles(styles)(CreateSubforumForm);