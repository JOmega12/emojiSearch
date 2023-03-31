import React from 'react';

class SearchInput extends React.Component {

   render() {

      const stylez = {
         height: '20px',
         width: '480px',
         border: '1px solid rgb(162, 159, 159)',
         padding: '10px',
         borderRadius: '10px',
      }
      return (
        <div>
          <input
            type="text"
            placeholder="Search for an emoji"
            style={stylez}
            value={this.props.searchTextProps}
            name="emptyString"
            onChange={this.props.handleOnChangeProps}
          />
        </div>
      );
   }
}

export default SearchInput;