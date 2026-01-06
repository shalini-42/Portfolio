import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact-section" style={{
       height: "520px"
    }}>
      <h2 className="section-title">Contact Me</h2>

      <div className="contact-card">
        <div className="contact-item">
          <span>📧</span>
          <a href="shalinisharoon42@email.com">
           shalinisharoon42@gmail.com
          </a>
        </div>

        <div className="contact-item">
          <span>📞</span>
          <a href="tel:+917204541662">
            +91 7204541662
          </a>
        </div>

        <div className="contact-item">
          <span>📍</span>
          <p>   India</p>
        </div>
      </div>
    </section>
  );
}

export default Contact;