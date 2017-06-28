import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<App />, document.getElementById('root'));



const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};
	
const element = React.createElement(
  'div',
  {classname:'element_kedua'},
  <h1>
  	<i>Ini Element Yang Berbeda dari yang diatas</i> Hello, <span>{formatName(user)}</span>!
  </h1>
);


function formatName(user) {
	if(user.firstName==="Harper"){
   		return user.firstName + ' ' + user.lastName;
	}
	else{
		return (
			'You Are Not User'+
			''
		);
	}
 }


ReactDOM.render(element,document.getElementById('tutorial'));

registerServiceWorker();


