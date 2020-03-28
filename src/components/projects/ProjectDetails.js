import React from 'react'


const ProjectDetails=(props)=>{
    const id=props.match.params.id;
      return(
        <div className="container section project-details">
        <div className="card z-deapth-0">
                <div className="card-content">
                 <span className="card-title">Project Title -{id}</span>
                 <p className="grey-text">lorem ipsum dolor sit amet</p>
                </div>
            <div className="card-action gret lighten-4 grey-text">
                <div>Hiiiiii</div>
                <div>2nd Sept</div>
            </div>
            </div>
        </div>
      )
}
export default ProjectDetails;
