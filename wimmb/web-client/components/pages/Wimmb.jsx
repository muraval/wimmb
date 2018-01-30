import React from 'react';

export class Wimmb extends React.Component {
   render() {
      return (
         <div id="wimmb">
			<ul>
				<li><WordSlider word='Where'/></li>
				<li><WordSlider word='is'/></li>
				<li><WordSlider word='my'/></li>
				<li><WordSlider word='money'/></li>
				<li><WordSlider word='boy'/></li>
			</ul>
         </div>
      );
   }
}

class WordSlider extends React.Component {
   render() {
      return (
         <div>
            {this.props.word}
         </div>
      );
   }
}

export default Wimmb