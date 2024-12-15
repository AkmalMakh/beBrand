import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#704BB3',
    paddingTop: height * 0.1, // Scales padding based on screen height
  },
  logoContainer: {
    width: width * 0.7, // 70% of screen width
    height: width * 0.7, // Maintain aspect ratio
    borderRadius: (width * 0.7) / 2, // Make it circular
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: height * 0.05, // Scales margin based on height
  },
  logo: {
    width: '80%',
    height: '80%',
    resizeMode: 'contain',
  },
  title: {
    fontSize: width * 0.07, // Scales font size based on screen width
    color: 'white',
    textAlign: 'center',
    marginBottom: height * 0.02, // Scales margin based on height
  },
  brand: {
    fontWeight: 'bold',
  },
  buttonPrimary: {
    backgroundColor: '#EF86C5', // Gradient approximation
    width: width * 0.3, // 30% of screen width
    height: width * 0.3, // Maintain aspect ratio for circular buttons
    borderRadius: (width * 0.3) / 2, // Make it circular
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: height * 0.02, // Scales margin based on height
  },
  buttonSecondary: {
    backgroundColor: '#8C60C5',
    width: width * 0.6, // 60% of screen width
    height: height * 0.06, // 6% of screen height
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: height * 0.02, // Scales margin based on height
  },
  buttonTextPrimary: {
    fontSize: width * 0.06, // Scales font size based on screen width
    color: 'white',
  },
  buttonTextSecondary: {
    fontSize: width * 0.045, // Scales font size based on screen width
    color: 'white',
  },
});
