import React from 'react'
import EmojiPicker from 'emoji-picker-react'
const Emoji = (props) => {
  return props.tigger ? <div><EmojiPicker width="100%" height="9rem"/></div>:null;
}

export default Emoji