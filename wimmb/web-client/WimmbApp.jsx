import React from 'react';
import Header from './components/structure/Header.jsx';
import Footer from './components/structure/Footer.jsx';
import Wimmb from './components/pages/Wimmb.jsx';


class WimmbApp extends React.Component {
   render() {
      return (
         <div>
			<Wimmb/>
         </div>
      );
   }
}

export default WimmbApp;