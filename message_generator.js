// Define the data structure with multiple arrays
const messageParts = {
    greetings: ["Hello", "Hi", "Hey", "Greetings"],
    subjects: ["everyone", "world", "you", "all"],
    actions: ["hope you're having a great day!", "how are you doing?", "wish you a wonderful day!", "hope all is well!"]
};

// Function to get a random element from an array
function getRandomElement(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

// Function to generate a random message
function generateMessage() {
    const greeting = getRandomElement(messageParts.greetings);
    const subject = getRandomElement(messageParts.subjects);
    const action = getRandomElement(messageParts.actions);
    
    return `${greeting}, ${subject}! ${action}`;
}

// Display the generated message
console.log(generateMessage());