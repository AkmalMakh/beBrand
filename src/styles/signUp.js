import { StyleSheet } from 'react-native';

export default StyleSheet.create({
container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#704BB3', 
    },
    avatarContainer: {
        marginBottom: 20,
      },
      avatar: {
        width: 150,
        height: 150,
        borderRadius: 50,
        marginTop: 10,
      },
  title: {
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
  inlineInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '96%',
    marginBottom: 10,
  },
  inlineInput: {
    flex: 1,
  },
  textContainer: {
    width: '80%', 
    alignItems: 'flex-start', 
    paddingHorizontal: 10, 
  },
  text: {
    fontSize: 20,
    color: 'white',
    textAlign: 'left', 
    marginBottom: 6,
  },
  buttonPrimary: {
    backgroundColor: '#EF86C5', // Gradient approximation
    width: 300, 
    height: 50, 
    borderRadius: 10, 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginVertical: 10,
  },
  buttonTextPrimary: {
    fontSize: 24,
    color: 'white',
  },

  input: {
    height: 40,
    width: 300,
    borderColor: '#bdb7b7',
    borderWidth: 1,
    borderRadius: 5, 
    marginBottom: 10,
    paddingHorizontal: 10,
    color: '#FFFFFF', 
  },
});
