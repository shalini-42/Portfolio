import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-section">
      <h1>Contact</h1>
      <div className="contact-container">

        {/* LEFT SIDE */}
        <div className="contact-left">
          <div className="info-box">
            <span className="icon">📍</span>
            <div>
              <h4>Address</h4>
              <p>Bengalore</p>
            </div>
          </div>

          <div className="info-box">
            <span className="icon">📞</span>
            <div>
              <h4>Call Us</h4>
              <p>+91 7204541662</p>
            </div>
          </div>

          <div className="info-box">
            <span className="icon">✉️</span>
            <div>
              <h4>Email Us</h4>
              <p>shalinisharoon42@gmail.com</p>
            </div>
          </div>

          {/* MAP */}
          <iframe
            className="map"
            src="https://www.google.com/maps?q=Downtown%20Conference%20Center&output=embed"
            loading="lazy"
            title="map"
          ></iframe>
        </div>

        {/* RIGHT SIDE */}
        <div className="contact-right">
          <form className="contact-form">
            <div className="row">
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
            </div>

            <input type="text" placeholder="Subject" />
            <textarea placeholder="Message"></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;
