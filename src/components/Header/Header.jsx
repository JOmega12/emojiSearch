import React from 'react';
import { data } from '../data';
import EmojiResults from '../EmojiResults';
// import EmojiRow from '../EmojiRow';

import '../Header/header.css'
import SearchInput from '../SearchInput/SearchInput';


class Header extends React.Component {
   constructor(props) {
      super(props)
      this.state = { 
         searchText: '',
         emojiData: null,
         emojiList: data,
      }
   }



//is there a better way to write this that is much more optimized?
//second is there a better way to put searchText: input and emoji data in to two different states instead of a searchText? WHat is the reason?

//need to write all of this again from scratch and understand how to rebuild it from the ground up using different variables
   handleFilterTextChange = (e) => {

      const input = e.target.value.toLowerCase();

      const emojiData = data
      .filter((item) => item.title.toLowerCase().includes(input))
      console.log(emojiData, 'emojiD')
      console.log(input, 'input')
      this.setState({searchText: input, emojiData})
   }

   render() {
      return (
         <div className='wrapper'>
            <h1>Emoji Search</h1>
            <div>
               <SearchInput 
                  handleOnChangeProps = {this.handleFilterTextChange}
                  searchTextProps = {this.state.searchText}   
               />
               <EmojiResults 
                  emojiDataProps = {this.state.emojiData}   
               />
            </div>
         </div>
      )
   }
}

export default Header;