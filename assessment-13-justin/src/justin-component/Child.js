import React from 'react'; 
import Products from './Parent';
import Photo from './ParentTwo';
import '../App.css';

function description() {
    return (
      <>
      <div className='whole-page'>
      <div className='container'>
        <div className='b1'><Photo /></div>
        <div className='b2'><Products titleOne='Product 1' titleTwo='Product 2'
        linkOne='This is a boy' linkTwo='This is a girl' /></div>
      </div>
      </div>
      </>
    );
}

export default description;