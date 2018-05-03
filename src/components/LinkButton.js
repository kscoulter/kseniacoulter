import React from 'react';

class LinkButton extends React.Component{
    render(){
    return(
        <a href={this.props.url} className={"button social " + this.props.name}>{this.props.name}</a>
    )
  }
}

export default LinkButton;
