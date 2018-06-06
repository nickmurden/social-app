import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const messages = [
  {
    id: "1",
    content: "Hello World.",
    authorId: "nick-murden",
    shares: 20,
    likes: 67,
    category: "General"
  },
  {
    id: "2",
    content: "Second message.",
    authorId: "nick-murden",
    shares: 5,
    likes: 2,
    category: "General"
  },
  {
    id: "3",
    content: "It's working! It's working!",
    authorId: "nick-murden",
    shares: 99,
    likes: 150,
    category: "General"
  },
  {
    id: "4",
    content: "New message.",
    authorId: "nick-murden",
    shares: 50,
    likes: 43,
    category: "General"
  },
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (message) => {
  return replaceAll(message.title, ' ', '-');
};

class MessageApi {
  static getAllMessages() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], messages));
      }, delay);
    });
  }

  static saveMessage(message) {
    message = Object.assign({}, message); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minMessageTitleLength = 1;
        if (message.title.length < minMessageTitleLength) {
          reject(`Title must be at least ${minMessageTitleLength} characters.`);
        }

        if (message.id) {
          const existingMessageIndex = messages.findIndex(a => a.id == message.id);
          messages.splice(existingMessageIndex, 1, message);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new messages in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          message.id = generateId(message);
          message.watchHref = `http://www.pluralsight.com/messages/${message.id}`;
          messages.push(message);
        }

        resolve(message);
      }, delay);
    });
  }

  static deleteMessage(messageId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfMessageToDelete = messages.findIndex(message => {
          message.id == messageId;
        });
        messages.splice(indexOfMessageToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default MessageApi;
