import React, { Component } from 'react';

class Portfolio extends Component {
  render() {

    if(this.props.data){
      var projects = this.props.data.projects.map(function(projects){
        var projectImage = 'images/portfolio/'+projects.image;
        return <div key={projects.title} className="columns portfolio-item">
           <div className="item-wrap bgrid-quarters .s-bgrid-halves cf">
            <a href={projects.url} title={projects.title}>
              <img className="imgPortfolio" alt={projects.title} src={projectImage} />
              
               <div className="overlay">
                  <div className="portfolio-item-meta">
                  <h5>{projects.title}</h5>
                      <h6>Technology Used:</h6>
                      <p>{projects.technology}</p>
                      
                  </div>
                </div>
            </a>
            <h6>Description:</h6>
                      <p>{projects.description}</p>
          </div>
        </div>
      })
    }

    return (
      <section id="portfolio">

      <div className="row">

         <div className="twelve columns collapsed">

            <h1><span>Portfolio</span></h1>

            <div id="portfolio-wrapper" className="bgrid-quarters .s-bgrid-halves cf">
                {projects}
            </div>
          </div>
      </div>
   </section>
    );
  }
}

export default Portfolio;
