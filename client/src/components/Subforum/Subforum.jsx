import React, { Component, } from 'react';
import { withStyles, Tabs, Tab, Paper, Typography, Button, Icon, Divider, } from '@material-ui/core';
import { AddCircle } from '@material-ui/icons';
import { styles } from './Subforum.style.js';
import logo from './Lambda Logo.png';


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

const Discussion = props => {

	const { classes } = props;

	return (
		<>
			<li>
				<div className={ classes.discussionContainer }>
					<img className={ classes.thumbnail } src={ props.data.thumbnail } />

					<div className={ classes.discussionData }>
						<Typography variant='h5'>{ props.data.title }</Typography>
						<Typography variant='subtitle1'>{ props.data.owner } - { props.data.createdAt }</Typography>
						<Typography variant='subtitle1'>{ props.data.description }</Typography>
					</div>

					<div className={ classes.commentCount }>
						<Typography variant='subtitle1'>comments</Typography>
						<span>{ props.data.comments }</span>
					</div>
				</div>

				{ props.lastItem && <Divider className={ classes.discussionDivider } /> }

			</li>
		</>
	);
}

const DiscussionList = props => {
	
	const { classes } = props;

	return (
		<div className={ classes.discussionListContainer }>
			<AddDiscussion
				classes={ classes }
			/>
			<ul className={ classes.discussionList }>
				{
					props.discussions.map((discussion, i) => {
						return (
							<Discussion classes={ classes } key={ i } data={ discussion } lastItem={ !(i == props.discussions.length - 1) }/>
						);
					})
				}
			</ul>
		</div>
	);
}

class Subforum extends Component {
	constructor(props) {
		super(props);

		this.state = {
			tabs: {
				value: 0,
			},
			discussions: [{
				thumbnail: logo,
				title: 'Message Title Here',
				description: 'Lorem ipsum dolor sit amet, consectetur adiscing elit. Phasellus',
				upvotes: '999',
				downvotes: '999',
				createdAt: 'Tue. May 28, 2019 - 88:88',
				owner: 'Some Username',
				subforum: '(subforum)',
				comments: '999',
			}, {
				thumbnail: logo,
				title: 'Message Title Here',
				description: 'Lorem ipsum dolor sit amet, consectetur adiscing elit. Phasellus',
				upvotes: '999',
				downvotes: '999',
				createdAt: 'Tue. May 28, 2019 - 88:88',
				owner: 'Some Username',
				subforum: '(subforum)',
				comments: '999',
			}, {
				thumbnail: logo,
				title: 'Message Title Here',
				description: 'Lorem ipsum dolor sit amet, consectetur adiscing elit. Phasellus',
				upvotes: '999',
				downvotes: '999',
				createdAt: 'Tue. May 28, 2019 - 88:88',
				owner: 'Some Username',
				subforum: '(subforum)',
				comments: '999',
			}, {
				thumbnail: logo,
				title: 'Message Title Here',
				description: 'Lorem ipsum dolor sit amet, consectetur adiscing elit. Phasellus',
				upvotes: '999',
				downvotes: '999',
				createdAt: 'Tue. May 28, 2019 - 88:88',
				owner: 'Some Username',
				subforum: '(subforum)',
				comments: '999',
			}, {
				thumbnail: logo,
				title: 'Message Title Here',
				description: 'Lorem ipsum dolor sit amet, consectetur adiscing elit. Phasellus',
				upvotes: '999',
				downvotes: '999',
				createdAt: 'Tue. May 28, 2019 - 88:88',
				owner: 'Some Username',
				subforum: '(subforum)',
				comments: '999',
			}]
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
					{ ...this.state }
					classes={ classes }
				/>


			</Paper>
		);
	}
}

export default withStyles(styles)(Subforum);