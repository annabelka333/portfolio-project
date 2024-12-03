const Footer = () => {
  return (
    <footer className="mt-auto">
      <div className="container mx-auto">
      <div
      className="contact-box d-flex justify-content-between mb-5 d-none d-md-flex"
    >
      <div>
        <h4>Work Inquiry</h4>
        <p className="text-muted">Let&apos;s work together</p>
      </div>
      <div>
        <a href="" className="btn btn-branding mt-3">Contact Me</a>
      </div>
    </div>
    <div className="d-flex justify-content-center mb-5">
      <a href="mailto:annabelka333@gmail.com" className="email-link"
        >Annabelka333@gmail.com</a>
    </div>
    <div className="social-links d-flex justify-content-center">
      <a href="https:www.instagram.com/vediashkyna" target="blank">
        <i className="fa-brands fa-instagram"></i>
      </a>
      <a href="https:www.facebook.com/anna.vediashkyna" target="blank">
        <i className="fa-brands fa-facebook"></i>
      </a>
      <a href="https:www.github.com/vediashkyna" target="blank">
        <i className="fa-brands fa-github"></i>
      </a>
    </div>

      </div>
  </footer>
  )
}

export default Footer;