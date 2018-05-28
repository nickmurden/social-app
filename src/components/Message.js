import React from 'react';

const Message = () => {
  return (
    <div>
      <form>
        <label for="message">What do you want to say?</label>
        <input type="text" id="message"></input>
      </form>
    </div>
  );
};

export default Message;