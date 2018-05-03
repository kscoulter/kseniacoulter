import React from 'react';

class SectionHeading extends React.Component{
    render(){
    return(
        <h1 className="section-heading">
          <a id={this.props.heading.split(" ")[0]}>{this.props.heading}</a>
        </h1>
    )
  }
}

export default SectionHeading;
