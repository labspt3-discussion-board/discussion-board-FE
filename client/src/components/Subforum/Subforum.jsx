import React, { Component, } from 'react';
import { withStyles, Tabs, Tab, Paper, Typography, Button, Icon, } from '@material-ui/core';
import { AddCircle } from '@material-ui/icons';
import { styles } from './Subforum.style.js';


const AddDiscussion = props => {

	const { classes } = props;

	return (
		<div className={ classes.addDiscussionContainer }>
			<Icon
				className={ classes.addDiscussionIconContainer }
			>
				<AddCircle
					className={ classes.addDiscussionIcon }
				/>
			</Icon>

			<Typography variant='subtitle1'>Start a new discussion</Typography>
		</div>
	);
}

const DiscussionList = props => {
	
	const { classes } = props;

	return (
		<div className={ classes.discussionListContainer }>
			<AddDiscussion
				classes={ classes }
			/>
		</div>
	);
}

class Subforum extends Component {
	constructor(props) {
		super(props);

		this.state = {
			tabs: {
				value: 0,
			}
		};
	}

	handleChange = (e, value) => {
		this.setState({
			tabs: {
				...this.state.tabs,
				value,
			}
		});
	}

	render() {

		const { classes } = this.props;

		return (
			<Paper className={ classes.subforumPaper }>

				<div className={ classes.subforumHeading }>
					<div className={ classes.headingContainerOne }>
						<Typography 
							variant='h5'
							className={ classes.subforumHeadingText }
						>
							{ `/d/${ this.props.subforum }` }
						</Typography>

						<Button 
							variant='outlined' 
							color='secondary'
							size='small'
							className={ classes.joinButton }
						>
							Join
						</Button>
					</div>

					

					<Tabs
						value={ this.state.tabs.value }
						onChange={ this.handleChange }
						className={ classes.tabs }
					>
						<Tab label='Discussions' disableRipple className={ classes.tab } />
						<Tab label='Members'     disableRipple className={ classes.tab } />
					</Tabs>


				</div>

				<DiscussionList
					classes={ classes }
				/>


			</Paper>
		);
	}
}

export default withStyles(styles)(Subforum);