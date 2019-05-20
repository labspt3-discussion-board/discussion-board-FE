import React, { Component, } from 'react';
import PropTypes             from 'prop-types';
import { withStyles }        from '@material-ui/core/styles';
import AppBar                from '@material-ui/core/AppBar';
import Toolbar               from '@material-ui/core/Toolbar';
import Typography            from '@material-ui/core/Typography';
import Input                 from '@material-ui/core/Input';
import Button 							 from '@material-ui/core/Button';
import { styles, }           from './TestComponent.style.js';
import axios 								 from 'axios';


const DEV_HOST = 'http://localhost:8000';
const HOST = 'https://discussion-board-api.herokuapp.com/'

const Navbar = props => (
	<div className={props.classes.root}>
		<AppBar color='primary' position="static">
			<Toolbar>
				<Typography variant="h6" color="inherit">
					Discussion Board
				</Typography>
			</Toolbar>
		</AppBar>
	</div>
);

const FormContainer = props => (
	<div className={ props.classes.formContainer }>
		<div className={ props.classes.textContainer }>
			<ul>
				{ props.displayUsers() }
			</ul>
		</div>
		<Input
			name='usernameInput'
			value={ props.usernameInput.value }
			className={ props.classes.input } 
			placeholder='Enter a username...' 
			required
			onChange={ props.handleInputChange }
		/>
		<Button
			variant='contained'
			color='primary'
			className={ props.classes.button }
			onClick={ props.handleButtonClick }
		>Submit</Button>

	</div>
);

class TestComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
					usernameInput: {
						value: '',
					},
					data: [],
        };

		}
		
		handleInputChange = e => {
			this.setState({
				[e.target.name]: {
					value: e.target.value,
				},
			});
		}

		handleSubmit = e => {
			e.preventDefault();

			axios.post(HOST + 'api/create-user/', {
				username: this.state.usernameInput.value,
			}).then(res => {
				this.setState({
					data: res.data,
				});
			}).catch(err => {
				console.log(err);
			});
		}

		componentDidMount() {

			axios.get(`${ HOST }api/create-user/`)
				.then((res) => {
					console.log(res.data)
					this.setState({
						data: res.data,
					});

				}).catch(err => console.log(err));
		}

    render() {

				const displayUsers = () => {
					return this.state.data.map((user, i) => <li key={ i }>{ user.fields.username }</li>);
				}

        const { classes } = this.props;

        return (
					<>
						<Navbar classes={ classes } />
						<FormContainer
							classes={ classes } 
							usernameInput={ this.state.usernameInput.value }
							handleInputChange={ this.handleInputChange }
							handleButtonClick={ this.handleSubmit }
							displayUsers={ displayUsers }
						/>
					</>
        );
    }

}

TestComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TestComponent);