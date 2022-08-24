import "./contact.css";
let Contact = function () {
  return (
    <div className="contact-area" id="contact">
      <div className="contact-sec">
        <h1 className="text-center text-primary">Contact</h1>
        <div className="contact-form-container">
          <input placeholder="Name" type="text" className="form-control my-3" />
          <input
            placeholder="Email"
            type="text"
            className="form-control my-3"
          />
          <textarea
            className="form-control"
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>

          <button className="btn btn-primary mt-3">Contact</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
