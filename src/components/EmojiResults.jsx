import React from 'react';
// import { data } from './data';
import EmojiRow from './EmojiRow';




// const emojiData = data;

class EmojiResults extends React.Component {

   render() {

      const {emojiDataProps} = this.props; 

      //why is this code below necessary? Is it some sort didComponentUpdate/Mount type of thing or is it trying to confirm that if there is something, show the rest? ask later
      if (!emojiDataProps) {
         return null;
      }

      return(
         <div>
            {emojiDataProps.slice(0, 20).map((emoji) => (
               <EmojiRow 
                  key = {emoji}
                  emoji = {emoji}
               />
            ))}
         </div>
      )
   }
}

export default EmojiResults;