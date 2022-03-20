import "bootstrap/dist/css/bootstrap.min.css"
import Project from './Project.js'

let projects = [
  {name: "Drum Machine", photoLocation: "/drum-machine.jpeg", url: "https://after-hours-drum-machine.netlify.app/"},
  {name: "Pokemon Render", photoLocation: "/poke-render.jpeg", url: "https://nervous-nightingale-828ef3.netlify.app/"},
  {name: "Timestamp Microservice", photoLocation: "/timestamp.jpeg", url: "https://timestamp-microservice-as.herokuapp.com/"}
]

function Projects() {
  return (
    <div className="container px-4 py-5" id="custom-cards">
      <h2 className="display-5 fw-bold">Projects</h2>
      <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
        {projects.map(project => <Project 
          name={project.name} 
          url={project.url} 
          photoLocation={project.photoLocation}
          />)}
      </div>
    </div>
  )
}

export default Projects;