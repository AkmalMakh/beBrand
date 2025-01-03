const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#704BB3', 
    marginTop: 55,
  },
  header: {
    fontSize: 14,
    fontFamily: 'Verdana',
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
  },
  scrollViewContent: {
    paddingHorizontal: 15,
    paddingBottom: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },

  description: {
    fontSize: 16,
    textAlign: 'center',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25, 
    marginRight: 10,
  },
  containerAv: {
    flexDirection: 'row', 
    alignItems: 'center', 
    padding: 1,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginTop: 10,
    marginRight: 10,
  },
  textContainer: {
    flex: 1, // Take up remaining space
  },
  button: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: 'black', // Example color
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  toggleButton: {
    backgroundColor: 'black',
    padding: 10,
    marginTop: 20,
    alignItems: 'center',
    borderRadius: 5,
  },
  toggleButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
};

export default styles;
