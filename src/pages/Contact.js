import React from "react";
import "../css/Contact.css"
import Car from "../images/car-img.svg";
import Phone from "../images/phone-img.svg";
import Mail from "../images/mail-img.svg";

const Contact = () => {
  return (
    <div className="contact-container">
    <div className="contact-content">
      <h3 className="contact-title">Contact Us</h3>
      <p>
        Chúng tôi sẵn sàng đón nhận phản hồi và ý kiến của bạn về nhà hàng của
        chúng tôi. Nếu bạn có bất kỳ câu hỏi, đề xuất hoặc đề nghị thương mại
        nào, vui lòng liên hệ với chúng tôi theo bất kỳ cách nào phù hợp. Mỗi
        khách có thể đặt bàn hoặc đặt bất kỳ câu hỏi nào – đại diện của chúng
        tôi sẽ trả lời và cung cấp cho bạn mọi thông tin cần thiết.
      </p>
      <p>
        Chúng tôi rất mong nhận được phản hồi từ bạn và gặp bạn với tư cách là
        thượng đế của chúng tôi!
      </p>
    </div>
    <div className="contact-info">
      <div className="info-item">
        <img
          src={Car}
          alt="parking"
          className="contact-img"
        />
        <h3>Parking</h3>
        <p>
          Chúng tôi có một bãi đậu xe thoải mái, vì vậy bạn có thể rời khỏi xe
          và thưởng thức bữa ăn của mình mà không phải lo lắng!
        </p>
      </div>
      <div className="info-item">
        <img
          src={Phone}
          alt="parking"
          className="contact-img"
          id="telephone"
        />
        <h3>Telephone</h3>
        <p>
          Chúng tôi sẵn lòng trả lời các câu hỏi của bạn hoặc chỉ đường cho
          bạn qua điện thoại.<br/>
        <a href="callto:+1 800 889 9898">+1 800 889 9898 </a>
        </p>
      </div>
      <div className="info-item">
        <img
          src={Mail}
          alt="parking"
          className="contact-img"
        />
        <h3>Email</h3>
        <p>
          Nếu bạn đang di chuyển và vẫn muốn đặt câu hỏi, chỉ cần gửi e-mail
          cho chúng tôi.<br/>
        <a href="mailto:mail@demolink.org">mail@demolink.org </a>
        </p>
      </div>
    </div>

    <div className="contact-title">Contact Form</div>
    <form className="contact-form" name="myForm">
      <div className="submit-content">
        <div className="submit-info">
          <input type="text" placeholder="First Name*" id="first-n" />
          <div className="required" id="1st-required">
            Please fill out your first name
          </div>
          <input type="text" placeholder="Last Name*" id="second-n" />
          <div className="required" id="2nd-required">
            Please fill out your second name
          </div>
          <input type="email" placeholder="Email Address*" id="email" />
          <div className="required" id="email-required">
            Please fill out your email address
          </div>
          <div className="required" id="email-invalid">Invalid Email Address</div>
        </div>
        <div className="submit-box">
          <textarea
            placeholder="Your Message"
            className="submit-message"
            id="message"
          ></textarea>
        </div>
      </div>
      <div className="button-submit">
        <button className="btn" id="submit-btn">Send Message</button>
      </div>
    </form>
  </div>
  );
};

export default Contact;
