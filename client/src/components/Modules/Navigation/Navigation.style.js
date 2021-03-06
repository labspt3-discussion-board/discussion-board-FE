

const avatarColors = ['#9c27b0', '#2196f3', '#4caf50', '#ffeb3b', '#ff9800', '#795548', '#ff5722', '#00bcd4']

export const styles = {
  appBar: {
    background: '#a0001e',
    // border: '1px solid white',
  },
  navigationContainer: {
    background: '#a0001e',
    display: 'flex',
    justifyContent: 'space-between',
    // border: '1px solid blue'
  },
  containerRightOne: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    // border: '1px solid black',
    width: '160px',
  },
  containerRightTwo: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    // border: '1px solid black',
    width: '110px',
  },
  signContainer: {
    display: 'flex',
    border: '1px solid white',
  },
  searchBar: {
    color: 'white',
    borderBottom: '1px solid white',
    
  },
  signShared: {
    color: 'white'
  },
  loginLink: {
    // border: '1px solid black',
    fontSize: '1rem',
    cursor: 'pointer',
    color: '#FFFFFF',
    '&:hover': {
      color: '#DADADA',
    }
  },
  signUpButton: {
    fontSize: '1rem',
    textTransform: 'capitalize',
    // border: '1px solid black',
    width: '90px',
  },
  signUpButtonLink: {
    textDecoration: 'none',
  },
  avatar: {
    cursor: 'pointer',
    backgroundColor: avatarColors[Math.floor(Math.random() * avatarColors.length)],
  },
  
};