import { Button } from "../Button";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-section">
      <HeroSection title="Contact me!" signature="" />
      <section className="contact-content">
        <div className="contact-element">
          <h1>contact</h1>
          <p>Comment? Questions? I'd love to hear them!</p>
          <p>Ottawa, ON, Canada 🍁</p>
          <a href="kiana-stanek-art.pagecloud.com/" />
        </div>
        <div className="contact-element">
          <form>
            <label>
              Full name:
              <br />
              <input name="fullName" type="field" size="57"/>
            </label>
            <br />
            <label>
              Email:
              <br />
              <input name="email" type="email" size="57"/>
            </label>
            <br />
            <label>
              Message:
              <br />
              <textarea name="message" type="text"  maxlength="250" rows="5" cols="57"/>
            </label>
            <br/>
            <Button type="submit" value="Submit" buttonStyle="btn--primary">Send</Button>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
