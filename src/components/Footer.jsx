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
            <li>(555) 123-4567</li>
            <li>info@safehands.vet</li>
            <li>123 Pet Care Lane</li>
          </ul>
        </div>
      </div>
      <p className="footer-copy">© 2024 Safe Hands Veterinary Clinic. All rights reserved.</p>
    </footer>
  )
}

