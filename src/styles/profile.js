import { StyleSheet } from 'react-native';

export default StyleSheet.create({
container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#704BB3', 
    marginTop: 55,
    },
    avatarContainer: {
        marginBottom: 20,
      },
      avatar: {
        width: 150,
        height: 150,
        borderRadius: 70,
        marginTop: 10,
      },
  title: {
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
  dropDown: {
    marginBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 1, // Border top width
    borderBottomWidth: 1, // Border bottom width
    borderColor: 'grey',
    paddingVertical: 5,
  },
  mainHeader: {
    marginTop: 10,
    textAlign: 'center',
    flex: 1,
    fontSize: 18,
    color: 'white',
    marginBottom: 7,
    marginLeft: 45,
  },
  header: {
    fontSize: 24,
    fontFamily: 'Verdana',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    color: '#c9c3c3',
  },
  buttonSecondary: {
    backgroundColor: 'white',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginHorizontal: 10,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 3,
  },
  subHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#c9c3c3',
    marginBottom: 7,
    marginLeft: 10,
  },
  settingsIcon: {
    width: 35,
    height: 35,
    marginRight: 10,
    
  },
  settingsIcoArrow: {
    width: 30,
    height: 30,
  },
  scrollViewContent: {
    paddingHorizontal: 15,
    paddingBottom: 15,
  },
 containerAv: {
        flexDirection: 'row', 
        alignItems: 'center', 
        padding: 1,
      },
  inlineInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 10,
  },
  inlineInput: {
    flex: 1,
  },
  textContainer: {
    flex: 1, // Take up remaining space
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
  buttonSecondary: {
    height: 40,
    width: 350,
    borderColor: '#bdb7b7',
    borderWidth: 1,
    borderRadius: 5, 
    marginBottom: 10,
    paddingHorizontal: 10,
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
