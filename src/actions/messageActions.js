export function createMessage(message) {
  return { type: 'CREATE_MESSAGE', message}; // Action is an object which has a property of 'type', which is required
  // Returns a plain object with a type property
  // message is shorthand for message: message
}