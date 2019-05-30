
export const styles = {
	container: {
		// border: '1px solid black',
		maxWidth: '500px',
		width: '95%',
		margin: '60px auto',
	},
	innerContainerOne: {
		// border: '1px solid black',
		display: 'flex',
		justifyContent: 'space-between',
		flexWrap: 'wrap',
		marginTop: '16px',
	},
	innerContainerTwo: {
		// border: '1px solid black',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		height: '190px',
	},
	innerContainerThree: {
		// border: '1px solid black',
		margin: '5px 0px',
	},
	innerContainerFour: {
		// border: '1px solid black',
		display: 'flex',
		flexDirection: 'column',
	},
	firstNameInput: {
		margin: '0px 5px 10px 5px',
		flex: '1',
		minWidth: '130px',
	},
	lastNameInput: {
		margin: '0px 5px 10px 5px',
		flex: '1',
		minWidth: '130px',
	},
	input: {
		margin: '0px 5px',
		
		minWidth: '260px',
	},
	inputIcon: {
		// border: '1px solid black',
		marginRight: '12px',
		color: '#6A6A6A'
	},
	checkBox: {
		// border: '1px solid black',
	},
	button: {
		minWidth: '260px',
		margin: '0px 5px',
	},
	agreeToTermsLink: {
		textDecoration: 'none',
			'&:hover': {
				textDecoration: 'underline',
			},
			'&:active': {
				color: '#3F51B5',
			}
	},
	options: {
		// border: '1px solid black',
		display: 'flex',
		justifyContent: 'flex-end',
		flexWrap: 'wrap',
		marginTop: '14px',
		fontSize: '0.9rem',
		'& > a:nth-child(1)': {
			marginRight: '10px',
			marginBottom: '10px',
		},
		'& a': {
			textDecoration: 'none',
			'&:hover': {
				textDecoration: 'underline',
			},
			'&:active': {
				color: '#3F51B5',
			}
		}
	},
};