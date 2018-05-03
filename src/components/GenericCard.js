import React from 'react';

//[["slides", "http//"],["github","https://"],["video", "http"]]

class GenericCard extends React.Component{

  render(){
    const { title, description, mediaType, media, mediaUrl, date } = this.props
    return(
      <div className="generic-card">
        <div className="media-wrapper">
          {mediaType === "image" ?
            <a href={mediaUrl} className="image-link" style={{backgroundImage: `url(${media})`}}>
            </a> :
            <div className="media video">
              {media}
            </div>
          }
        </div>
        <div className="text-wrapper">
          <a href={mediaUrl} className="headline-link">
            <h2>{title}</h2>
          </a>
          <p>{description}</p>
          {date ? <span className="date">{date}</span> : null}
        </div>
      </div>
    )
  }
}

export default GenericCard;
