const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#704BB3',
    marginTop: 55
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
    marginTop: 10,
  },
  input: {
    height: 40,
    width: 300,
    borderColor: '#bdb7b7', // Set border color to white
    borderWidth: 1,
    borderRadius: 5, // Add border radius
    marginBottom: 10,
    paddingHorizontal: 10,
    color: '#FFFFFF', // Set text color to white
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
    marginLeft: 10,
  },
  subHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#888',
    marginBottom: 7,
    marginLeft: 10,
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
  boxContainer: {
    backgroundColor: 'white', // White background for the box container
    padding: 10, // Padding inside the box container
    borderRadius: 10, // Rounded corners for the box container
    marginHorizontal: 5, // Space between boxes
    alignItems: 'center', // Center the content inside the box
    shadowColor: '#000', // Shadow color for depth
    shadowOffset: { width: 0, height: 2 }, // Shadow position
    shadowOpacity: 0.3, // Shadow opacity
    shadowRadius: 4, // Shadow blur
    elevation: 5, // Elevation for Android shadow
    width: 110, // Set a fixed width for the box
    height: 130, // Set a fixed height for the box
    justifyContent: 'space-between', // Space out elements vertically
  },
  
  box: {
    width: 90, // Fixed width for the inner color box
    height: 80, // Fixed height for the inner color box
    borderRadius: 8, // Rounded corners for the inner color box
  },
  
  hexTextBox: {
    marginTop: 10, 
    fontSize: 12, 
    color: '#1c1c1c', 
    fontWeight: 'bold',
    textAlign: 'center', // Center-align the text
    flexWrap: 'wrap', // Allow text to wrap to the next line
    maxWidth: 90, // Ensure the text stays within the box's width
    lineHeight: 12, // Adjust line height for better readability
  },
  
  hexText: {
    fontSize: 12,
    color: '#888', 
    marginTop: 5, 
    fontWeight: 'bold', 
  },
  box2Container: {
    backgroundColor: 'white', // White background for the smaller box container
    padding: 5, // Reduced padding for smaller boxes
    borderRadius: 8, // Rounded corners for the smaller box container
    marginHorizontal: 5, // Reduced space between smaller boxes
    alignItems: 'center', // Center the content inside the smaller box
    shadowColor: '#000', // Shadow color for depth
    shadowOffset: { width: 0, height: 1 }, // Smaller shadow position
    shadowOpacity: 0.2, // Lighter shadow opacity
    shadowRadius: 2, // Smaller shadow blur
    elevation: 3, // Lower elevation for Android shadow
  },
  box2: {
    width: 50,
    height: 50,
    borderRadius: 5, // Slightly rounded corners for the smaller inner color box
  },
  hexTextBox2: {
    marginTop: 5, // Reduced space between the box and the text for smaller boxes
    fontSize: 12, // Smaller font size for hex text in smaller boxes
    color: '#1c1c1c', // Darker color for contrast against the white box
    fontWeight: 'bold', // Bold text
  },
  header2: {
    fontSize: 22,
    fontFamily: 'Verdana',
    fontWeight: 'bold',
    marginRight: 70,
    marginTop: 60,
    marginBottom: 10,
    color: 'white', 
  },
  header3: {
    fontSize: 16,
    fontFamily: 'Verdana',
    fontWeight: 'bold',
    marginRight: 70,
    marginTop: 10,
    marginBottom: 10,
    color: 'white', 
  },
  header4: {
    fontWeight: 'light',
    fontFamily: 'Verdana',
    fontSize: 14,
    marginBottom: 10,
    color: 'white', 
  },
  settingsIcon: {
    width: 35,
    height: 35,
    marginRight: 10,
  },
  mainHeader: {
    marginTop: 10,
    textAlign: 'center',
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#888',
    marginBottom: 7,
    marginLeft: 45,
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

  description: {
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 20,
  },

  //
  image: {
    width: 50,
    height: 50,
    borderRadius: 25, // Assuming the user image is circular
    marginRight: 10,
  },
  name: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 16,
  },
  button: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: '#3498db', // Example color
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  topHalf: {
    flex: 1,
  },
  bottomHalf: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  
};

export default styles;
