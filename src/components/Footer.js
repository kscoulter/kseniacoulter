import React from 'react';

class Footer extends React.Component{
    render(){
    return(
      <footer>
        <p>&#169; Ksenia Coulter 2015-{(new Date()).getFullYear()}</p>
      </footer>
    )
  }
}

export default Footer;
