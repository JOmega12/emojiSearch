import React from 'react';

class EmojiRow extends React.Component {
   constructor(props){
      super(props)
   }

   handleClick = () => {
      navigator.clipboard.writeText()
   }

   render() {
      return(
         <div>hi</div>
      )
   }
}

export default EmojiRow;