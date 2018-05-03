import React from 'react';

//[["slides", "http//"],["github","https://"],["video", "http"]]

class TalkCard extends React.Component{

  render(){
    const { links, title, description, background } = this.props
    return(
      <div className="card" style={{backgroundColor: background}}>
        <h2>{title}</h2>
        {description}
        <div className="talk-links">
          {links.map( (obj, index) =>{
            return(<a key={obj[0]} href={obj[1]}>{obj[0]}</a>)
          })}
        </div>
      </div>
    )
  }
}

export default TalkCard;
