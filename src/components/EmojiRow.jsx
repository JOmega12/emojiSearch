import React from 'react';

class EmojiRow extends React.Component {
   constructor(props){
      super(props)
      this.state= {
         isHover: false,
         isCopied: false,
      }
   }

   handleCopyClick = () => {
      navigator.clipboard.writeText(this.props.emoji.symbol)
      this.setState({isCopied: true});
      setTimeout(()=> {
         this.setState({isCopied:false});
      }, 500)
   }

   handleMouseEnterLeave = (bool) => {
      this.setState({isHover: bool})
   }

   onMouseEnter = () => {
      this.setState({isHover: true})
   }

   onMouseLeave = () => {
      this.setState({isHover: false})
   }


   render() {
      const {emoji} = this.props;

      return(

         <div
            style = {{
               backgroundColor: this.state.isHover ? '#EEE' : '#cea596',
               padding: '15px',
               border: 'black 1px solid',
               borderRadius: '2px'
            }}
            onMouseEnter = {this.onMouseEnter}
            onMouseLeave = {this.onMouseLeave}
            onClick = {this.handleCopyClick}
         >
            <div>
               <span>{emoji.symbol}</span>
               <span key={emoji.title}>{emoji.title}</span>
            </div>
            {this.state.isCopied && <div>Copied Text!</div>}
         </div>
      )
   }
}

export default EmojiRow;