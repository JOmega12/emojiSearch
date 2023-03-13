import React from 'react';

class SearchInput extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         emptyString: '',
      }
   }

   

   render() {

      const stylez = {
         height: '20px',
         width: '480px',
         border: '1px solid rgb(162, 159, 159)',
         padding: '10px',
         borderRadius: '10px',
      }
      return(
         <input 
         type="text"
         placeholder='Search for an emoji'
         style = {stylez}
         />
      )
   }
}

export default SearchInput;