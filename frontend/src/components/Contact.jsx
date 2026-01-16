import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">
        Get in touch. I’m happy to chat about <br /> potential projects.
      </h1>

      <form className="contact-form">
        {/* Name */}
        <div className="form-group">
          <label>Name</label>
          <div className="name-fields">
            <input type="text" placeholder="First Name (required)" required />
            <input type="text" placeholder="Last Name (required)" required />
          </div>
        </div>

        {/* Email */}
        <div className="form-group">
          <label>Email (required)</label>
          <input type="email" placeholder="Enter your email" required />
        </div>

        {/* Message */}
        <div className="form-group">
          <label>Message (required)</label>
          <textarea placeholder="Write your message..." required />
        </div>

        <button type="submit" className="send-btn">
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
