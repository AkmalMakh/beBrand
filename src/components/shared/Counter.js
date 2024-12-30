// Function to generate a random passport-type number
const getNextUserId = () => {
  try {
    // Generate a random 5-digit number
    const randomNumber = Math.floor(10000 + Math.random() * 90000); // Ensures a 5-digit number

    // Add a prefix to create the user ID
    const prefix = "AA";
    const userId = `${prefix}${randomNumber}`;

    return userId;
  } catch (error) {
    console.error("Error generating random user ID:", error);
    return null;
  }
};

export default getNextUserId;
