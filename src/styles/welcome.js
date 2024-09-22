import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#704BB3', 
    paddingTop: 80, 
  },
  logoContainer: {
    width: 350,
    height: 350,
    borderRadius: 75,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  logo: {
    width: '80%',
    height: '80%',
    resizeMode: 'contain',
  },
  title: {
    fontSize: 29,
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
  brand: {
    fontWeight: 'bold',
  }, 
  buttonPrimary: {
    backgroundColor: '#EF86C5', // Gradient approximation
    width: 120, 
    height: 120, 
    borderRadius: 60, 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginVertical: 10,
  },
  buttonSecondary: {
    backgroundColor: '#8C60C5', 
    width: 120, 
    height: 40, 
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 25,
    marginVertical: 10,
  },
  buttonTextPrimary: {
    fontSize: 24,
    color: 'white',
  },
  buttonTextSecondary: {
    fontSize: 18,
    color: 'white',
  },
});
