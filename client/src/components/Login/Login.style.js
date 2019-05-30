export const styles = {
	modal: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		padding: '330px 10px',
	},
	card: {
		display: 'inline-block',
		maxWidth: '460px',
		minWidth: '280px',
		width: '100%',
		height: '565px',
		padding: '0px 25px 20px 25px',
		overflow: 'visible',
		outline: 'none',
	},
	container: {
		maxWidth: '400px',
		width: '100%',
		minHeight: '480px',
		// border: '1px solid black',
		margin: 'auto',
		position: 'relative',
		top: '-100px',
	},
	innerContainerOne: {
		// border: '1px solid black',
		display: 'flex',
		flexDirection: 'column',
		margin: '20px 0px',
	},
	innerContainerTwo: {
		// border: '1px solid black',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		// height: '75px',
	},
	innerContainerThree: {
		display: 'flex',
		justifyContent: 'space-around',
	},
	innerContainerFour: {
		margin: '10px 0px',
		// border: '1px solid black',
		height: '100px',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
	},
	headerIcon: {
		
		margin: '0px auto 20px auto', 
		borderRadius: '50%', 
		width: '90px', 
		height: '90px', 
		display: 'flex', 
		justifyContent: 'center', 
		alignItems: 'center', 
		fontSize: '3.6rem', 
		backgroundColor: '#3F51B5', 
		color: 'white',
		boxShadow: '0px 1px 5px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.12)',
		position: 'relative',
		top: '-45px',
		
	},
	divider: {
		height: '1px',
		backgroundColor: '#DDDEDE',
		flex: '1',
		alignSelf: 'center',
	},
	dividerContent: {
		margin: '0px 16px',
	},
	heading: {
			
	},
	input: {
		minWidth: '260px',
		width: '100%',
	},
	password: {
		margin: '18px 0px 6px 0px',
	},
	button: {
		minWidth: '260px',
		width: '100%',
	},
	options: {
		// border: '1px solid black',
		display: 'flex',
		justifyContent: 'space-between',
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
	emailIcon: {
		// border: '1px solid black',
		marginRight: '12px',
		color: '#6A6A6A'
	},
	signInIcon: {
		// border: '1px solid black',
		width: '40px',
		position: 'relative',
		left: '-115px',
		fontSize: '1.4rem',
	},
	socialButton: {
		padding: '0px 0px',
		outline: 'none',
		border: 'none',
		borderRadius: '3px',
		minWidth: '260px',
		width: '100%',
		height: '42px',
		color: 'white',
		cursor: 'pointer',
		boxShadow: '0px 1px 5px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.12)',
		transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
		'& > span': {
			display: 'flex',
		}
	},
	socialButtonIcon: {
		borderRight: '1px solid white',
		padding: '9px 12px',
		fontSize: '1.1rem',
	},
	socialButtonText: {
		marginLeft: '24px',
		alignSelf: 'center',
	},
	googleButton: {
		backgroundColor: '#dd4b39',
		'&:hover': {
			backgroundColor: '#ca3725'
		}
	},
	facebookButton: {
		backgroundColor: '#3B5998',
		'&:hover': {
			backgroundColor: '#2a4786',
		}
	},
	closeIconContainer: {
		width: '100%',
		display: 'flex',
		justifyContent:'flex-end',
		position: 'relative',
		top: '-100px',
	},
};