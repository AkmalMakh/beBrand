import AsyncStorage from '@react-native-async-storage/async-storage';

// Function to get the next unique user ID
const getNextUserId = async () => {
  try {
    // Retrieve the current counter from AsyncStorage
    const storedCounter = await AsyncStorage.getItem('userCounter');
    let counter = storedCounter ? parseInt(storedCounter, 10) : 1; // Default to 1 if no value is found

    // Generate the user ID with the prefix
    const prefix = "AA";
    const userId = `${prefix}${counter.toString().padStart(5, "0")}`;

    // Increment the counter and store it back in AsyncStorage
    counter++;
    await AsyncStorage.setItem('userCounter', counter.toString());

    return userId;
  } catch (error) {
    console.error("Error accessing AsyncStorage:", error);
    return null;
  }
};

export default getNextUserId;
