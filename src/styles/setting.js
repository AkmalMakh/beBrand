import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#704BB3', // Purple background similar to the image
    padding: 20,
  },
  button: {
    flexDirection: 'row', // Align icon and text horizontally
    alignItems: 'center',
    backgroundColor: '#8E24AA', // Button color
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    width: '100%',
    marginBottom: 15,
  },
  settingsIcon: {
    width: 55,
    height: 55,
    marginRight: 10,
  },
  buttonText: {
    flex: 1,
    color: '#fff',
    fontSize: 16,
    textAlign: 'left',
  },
  backButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 10, // Ensure it appears on top
  },
  backButtonImage: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    marginTop: 50,
    marginLeft:10
  },

  settingsIconArrow: {
    width: 24,
    height: 24,
    marginRight: 10,
    resizeMode: 'contain',
  },
  
});

export default styles;
