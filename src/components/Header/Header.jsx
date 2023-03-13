import React from 'react';
import { data } from '../data';
// import EmojiResults from '../EmojiResults';

import '../Header/header.css'
import SearchInput from '../SearchInput/SearchInput';


const emojiListData = data;

class Header extends React.Component {
   constructor(props) {
      super(props)
      this.state = { 
         searchText: '',
         emojiList: emojiListData,
         hoveredIndex: '',

      }
   }

   handleFilterTextChange = (e) => {
      this.setState({searchText: e.target.value})
   }

   render() {
      return (
         <div className='wrapper'>
            <h1>Emoji Search</h1>
            <div>
               <SearchInput />
               {/* <EmojiResults /> */}
            </div>
         </div>
      )
   }

}

export default Header;