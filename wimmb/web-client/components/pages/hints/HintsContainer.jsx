import React from 'react';

export class Header extends React.Component {
   render() {
      return (
         <div>
            {this.props.header}
         </div>
      );
   }
}

export default Header