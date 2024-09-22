import { StyleSheet, Dimensions, Platform, PixelRatio } from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

// Function to scale font sizes and other values based on screen size
const scale = size => (SCREEN_WIDTH / 375) * size;

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#704BB3',
    paddingHorizontal: SCREEN_WIDTH < 350 ? 10 : 20, // Adjust padding for smaller screens
  },
  title: {
    fontSize: scale(30), // Scale font size based on screen width
    color: 'white',
    textAlign: 'center',
    marginBottom: scale(20),
  },
  textContainer: {
    width: '80%', // Keep the width percentage-based for flexibility
    alignItems: 'flex-start',
    paddingHorizontal: 10,
  },
  text: {
    fontSize: scale(20), // Scale font size based on screen width
    color: 'white',
    textAlign: 'left',
    marginBottom: scale(10),
  },
  buttonPrimary: {
    backgroundColor: '#EF86C5',
    width: SCREEN_WIDTH < 350 ? '90%' : 300, // Use percentage width for smaller screens
    height: scale(50), // Scale height for responsiveness
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: scale(10),
  },
  buttonTextPrimary: {
    fontSize: scale(20), // Scale font size based on screen width
    color: 'white',
  },
  input: {
    height: scale(40), // Scale height for responsiveness
    width: SCREEN_WIDTH < 350 ? '90%' : 300, // Use percentage width for smaller screens
    borderColor: '#bdb7b7',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: scale(10),
    paddingHorizontal: 10,
    color: '#FFFFFF',
  },
  backButton: {
    position: 'absolute',
    top: scale(10),
    left: scale(10),
    zIndex: 10,
  },
  backButtonImage: {
    width: scale(30),
    height: scale(30),
    resizeMode: 'contain',
    marginTop: scale(50),
    marginLeft: scale(10),
  },
});
