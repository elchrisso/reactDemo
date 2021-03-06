import React, {Component} from 'react'
import './App.css'
import PropTypes from 'prop-types'

class ProjectBox extends Component {


  render() {
    return(
      <div>
      {this.props.projectList.map((project) => {
        return(
          <div className="jumbotron">
            <h1>{project[0]}</h1>
            <p>...</p>
            <p><a class="btn btn-primary btn-lg" href="#" role="button">{project[1]}</a></p>
          </div>
        )
      })}
      </div>
    )
  }
}

ProjectBox.propTypes = {
  projectList: PropTypes.array.isRequired
}

export default ProjectBox