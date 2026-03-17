import './contact.css';
import emailjs from "emailjs-com";

function Contact() {

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      e.target,
      import.meta.env.VITE_PUBLIC_KEY
    )
      .then(() => {
        alert("Message sent successfully ✅");
        e.target.reset();
      })
      .catch(() => {
        alert("Failed to send ❌");
      });
  };

  return (
    <div className="container contact-section">

      <h1 className="contact-title">Contact Me</h1>
      <p className="contact-subtitle">
        Feel free to reach out for collaborations or just a friendly hello 👋
      </p>

      <div className="row">

        {/* Left Side Info */}
        <div className="col-md-5 contact-info">
          <p><strong>Email:</strong> adityamahadik6530@gmail.com</p>
          <p><strong>Phone:</strong> 7021985217</p>
          <p><strong>GitHub:</strong> github.com/yourusername</p>
          <p><strong>LinkedIn:</strong> linkedin.com/in/yourprofile</p>
        </div>

        {/* Right Side Form */}
        <div className="col-md-7">
          <form onSubmit={handleSubmit} className="contact-form">

            <input
              name="name"
              type="text"
              placeholder="Your Name"
              className="form-control mb-3"
              required
            />

            <input
              name="email"
              type="email"
              placeholder="Your Email"
              className="form-control mb-3"
              required
            />

            <input
              name="phone"
              type="text"
              placeholder="Your Phone"
              className="form-control mb-3"
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              className="form-control mb-3"
              required
            ></textarea>

            <button type="submit" className="btn btn-primary w-100">
              Send Message
            </button>

          </form>
        </div>

      </div>
    </div>
  );
}

export default Contact;