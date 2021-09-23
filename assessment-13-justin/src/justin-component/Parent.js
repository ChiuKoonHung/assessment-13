import React from 'react'; 

class Products extends React.Component {
    render() {
        let {titleOne = "titleOne"} = this.props;
        let {linkOne = "linkOne"} = this.props;
        let {titleTwo = "titleTwo"} = this.props;
        let {linkTwo = "linkTwo"} = this.props;
        return(
            <>
            <div className='productOne'>
              <h2 className='productOne-heading'>{titleOne}</h2>
              <p className='productOne-text'>{linkOne}</p>
            </div> 
            <div className='productTwo'>
              <h2 className='productTwo-heading'>{titleTwo}</h2>
              <p className='productTwo-text'>{linkTwo}</p>
            </div> 
            </>
        );
      }  
}
export default Products;