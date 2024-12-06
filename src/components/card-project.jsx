import { Link } from "react-router";
import PropTypes from "prop-types";


const CardProject = ({title, description, image}) => {
  return(
    <div className="row">
        <div className="col">
          <div className="project-description">
            <h2 className="mb-5">{title}</h2>
            <p className="mb-5 text-muted">
              {description}
            </p>
            <Link href="/projects" className="btn btn-branding-outline"
              >Learn more
            </Link>
          </div>
        </div>
        <div className="col d-none d-lg-block">
          <img src={image} className="img-fluid" alt={title} />
        </div>
      </div>
  )
}
CardProject.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}
export default CardProject;