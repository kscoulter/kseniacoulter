import React from 'react';

class ProjectCard extends React.Component{
  render(){
    const { name, description, url, image } = this.props
    return(
      <div className="project">
        <div className="col">
          <h2>{name}</h2>
          {description}
        </div>
        <div className="col">
          <a className="project-image" href={url}><img src={image} alt="screenshot of the app"/></a>
        </div>
      </div>
    )
  }
}

export default ProjectCard;
