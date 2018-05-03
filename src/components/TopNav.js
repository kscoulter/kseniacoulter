import React from 'react';

class TopNav extends React.Component{
  render() {
    var sections = ["updates", "writing", "talks", "portfolio", "contact"];
    var sectionsList = sections.map(function(section, index){
                    return <li key={index}><a key={index} href={`#${section}`}>{section}</a></li>;
                  })
    return  <nav><ul>
    { sectionsList }
    <li ><a id="resume" href="./Ksenia-Coulter-Resume.pdf" download>Resum&eacute;</a></li>
    </ul></nav>
  }
}

export default TopNav;
