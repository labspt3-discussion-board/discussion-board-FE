import { relative } from "path";

export const styles = {
	root: {
		flexGrow: 1,
	},
	formContainer: {
		// border: '1px solid black',
		width: '400px',
		minHeight: '400px',
		margin: '60px auto 0px auto',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
	},
	textContainer: {
		minHeight: '200px',
		// border: '1px solid black',
		padding: '10px',
		backgroundColor: '#eaeaea',
		borderRadius: '3px',
	},
	input: {
		width: '200px', 
		margin: 'auto',
	},
	button: {
		width: '200px',
		margin: 'auto',
	},
	buttonProgress: {
		position: 'absolute',
    top: '50%',
    left: '50%',
	},
	closeIcon: {
		position: 'relative',
		top: '50px',
		right: '-20px',
		border: '1px solid black',
	}
};