import PropTypes from "prop-types";


const CardProject = ({title, description, image}) => {
  return(
    <div className={`flex even:flex-row-reverse odd:flex-row`}>
        <div className="w-1/2 p-16 box-border">
          <h2 className="mb-8">{title}</h2>
          <p className="mb-12 text-neutral-700">
            {description}
          </p>
          <a href="https://google.com" title={`Visit a ${title}`} target="_blank" className="link">
            Learn more
          </a>
        </div>
        <div className="w-1/2 rounded-md overflow-hidden">
          <img src={image} className="w-full" alt={title} />
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