export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="logo">Safe Hands</div>
          <p>
            Providing compassionate veterinary care for your beloved pets. Your pet&apos;s health and happiness is our priority.
          </p>
        </div>
        <div className="footer-links">
          <h4>Services</h4>
          <ul>
            <li>General Check-ups</li>
            <li>Surgical Procedures</li>
            <li>Vaccinations</li>
            <li>Emergency Care</li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="#hero">Home</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="footer-contact">
          <h4>Contact Info</h4>
          <ul>
            <li>(+91)8074695965</li>
            <li>isafehandspetclinicvizag@gmail.com</li>
            <li>Ram Nagar Vizag</li>
          </ul>
        </div>
      </div>
      <p className="footer-copy">
        <span className="footer-signoff">Designed & Developed by Mani Dodla</span>
      </p>
    </footer>
  )
}

