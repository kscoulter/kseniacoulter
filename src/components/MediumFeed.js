import React from 'react';
import axios from 'axios';

class MediumFeed extends React.Component{
  constructor(props){
    super(props);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.filterPosts       = this.filterPosts.bind(this);
    this.pullImage         = this.pullImage.bind(this);

    this.state = {
      posts: []
    };
  }
  componentDidMount(){
    var self = this;
    axios.get('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40kcoulter')
      .then(function(response) {
          const posts = response.data.items;
          self.filterPosts(posts);
          self.pullImage(self.state.posts);
        // })
      })
      .catch(function (error){
        console.log(error);
      })
  }
  filterPosts(posts){
    const filteredPosts = []
    posts.forEach(function(post){
      //if category array is not empty, it is a post and not a comment
      if(post.categories.length > 0){
        filteredPosts.push(post);
      }
    })
    this.setState({ posts : filteredPosts });
  }
  pullImage(posts){
    posts.forEach(function(post){
      const contentStr = post.description;
      // const re = new RegExp('<[img](.+?)(\/>)');
      //this might be a pretty brittle expression.
      const re = new RegExp('"https([^"]+)"');
      const imgMatch = re.exec(contentStr);
      post.image = imgMatch[0].replace(/"/g, '');
    })
    this.setState({ posts })
  }
    render(){
    return(
        <div className="card-container medium-posts">
        {this.state.posts.map(function(post, index){
          return (
            <a className="card" href={post.link} key={index} style={{backgroundImage: 'url('+post.image+')'}}>
              <h2 className="post-title" key={index}>{post.title}</h2>
            </a>
          )
        })}
        </div>
    )
  }
}

export default MediumFeed;
