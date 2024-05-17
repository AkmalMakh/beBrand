const styles = {
   container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
   },
  buttonsContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 25,
  },
  buttonPrimary: {
    backgroundColor: 'black',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  buttonTextPrimary: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
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


  buttonTextSecondary: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  avatarContainer: {
    marginBottom: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop:10,
  },
  input: {
    height: 40,
    width: 300,
    borderColor: '#000000', // Set border color to black
    borderWidth: 1,
    borderRadius: 5, // Add border radius
    marginBottom: 10,
    paddingHorizontal: 10,
    color: '#000000', // Set text color to black
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
  // for profile page
  containerAv: {
    flexDirection: 'row', // Arrange items horizontally
    alignItems: 'center', // Center items vertically
    padding: 1,
  },
  
  textContainer: {
    flex: 1, // Take up remaining space
  },

  header: {
    fontSize: 24,
    fontFamily: 'Verdana',
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
    marginLeft:10
  },
  subHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#888',
    marginBottom: 7,
    marginLeft:10
  },
  scrollViewContent: {
    paddingHorizontal: 15,
    paddingBottom: 15,
  },
  gridContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'gray',
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  hexText: {
    fontSize: 12,
    color: 'white',
  },
  header2: {
    fontSize: 22,
    fontFamily: 'Verdana',
    fontWeight: 'bold',
    marginRight: 70, 
    marginTop: 30,
    marginBottom: 10,
},
header3: {
    fontSize: 16,
    fontFamily: 'Verdana',
    fontWeight: 'bold',
    marginRight: 70, 
    marginTop: 10,
    marginBottom: 10,
},
header4: {
    fontWeight: 'light', 
    fontFamily: 'Verdana',
    fontSize: 14, 
    marginBottom: 10,
},
settingsIcon: {
  width: 35, 
  height: 35,
  marginRight: 10, 

},
mainHeader:{
  marginTop: 10,
  textAlign: 'center', 
  flex: 1,
  fontSize: 18,
  fontWeight: 'bold',
  color: '#888',
  marginBottom: 7,
  marginLeft:45,

},
dropDown:{
  marginBottom: 5, 
  flexDirection: 'row', 
  alignItems: 'center', 
  justifyContent: 'center',
  borderTopWidth: 1, // Border top width
  borderBottomWidth: 1, // Border bottom width
  borderColor: 'grey',
  paddingVertical: 5,
},

description: {
  fontSize: 16,
  textAlign: 'center',
  paddingHorizontal: 20,
},
}


export default styles