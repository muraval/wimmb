import React from 'react';

export class Loaner extends React.Component {
   render() {
      return (
         <div>
            {this.props.loaner.fullName}
         </div>
      );
   }
}

export default Loaner