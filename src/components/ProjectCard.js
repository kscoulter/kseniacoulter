import React from 'react';

class ProjectCard extends React.Component{
    render(){
    return(
      <div className="project">
        <div className="col">
          <h2>{this.props.name}</h2>
          <p>{this.props.description}</p>
        </div>
        <div className="col">
          <a className="project-image" href={this.props.url}><img src={this.props.image} alt="screenshot of the app"/></a>
        </div>
      </div>
    )
  }
}

export default ProjectCard;
