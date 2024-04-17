import React, { useState, useEffect } from "react";
import "./Contact.css";
import { useForm, ValidationError, useSubmit } from "@formspree/react";
import { MdOutlineMailOutline } from "react-icons/md";
import { BsChatQuote } from "react-icons/bs";
import { Box, Grid } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { RxCross2 } from "react-icons/rx";


const style = {
  position: "absolute",
  top: "44%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  borderRadius: 3,
  boxShadow: 24,
  p: 2,
  pt: 2,
  pb: 4.5,
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [msg, setMsg] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState(""); // "success" or "failure"
  const [boxBgColor, setBoxBgColor] = useState("");
  const [boxColor, setBoxColor] = useState("");
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const [state, handleSubmit] = useForm("mpzvyqyw");
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    state.succeeded = false;
    setOpen(false);
  };

  const handleContact = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://formspree.io/f/mrgnolye", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // formData should contain form fields data
      });
      if (response.ok) {
        // Handle successful form submission
        console.log("Form submitted successfully");
        setBoxBgColor("#fff");
        setBoxColor("#1f1f1f");
        setMsg("Thank You For Contacting Us");
        setModalType("Submitted Successfully");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        // Handle form submission error
        console.error("Form submission failed");
        setBoxBgColor("#f44336");
        setBoxColor("#fff");
        setMsg("Failed to submit form. Please try again later.");
        setModalType("Submission Failed");
      }
      setShowModal(true);
    } catch (error) {
      console.error("Error submitting form:", error);
      setBoxBgColor("#f44336");
      setBoxColor("#fff");
      setMsg("Failed to submit form. Please try again later.");
      setModalType("Submission Failed");
      setShowModal(true);
    }
  };
  const closeModal = () => {
    setShowModal(false);
    setModalType("");
    setOpen(false);
  };

  return (
    <>
      <section id="ContactUs">
        
        <div className="contactHead">
          <h1>Contact</h1>
          <p>
            Do you want to know more regarding Moooi or our products? We’d be
            happy to hear from you!
          </p>
          <div className="cntBtn">
            <button>
              <MdOutlineMailOutline
                className="cntBtnIcon"
                style={{ marginTop: 2 }}
              />
              send us an e-mail
            </button>
            <button>
              <BsChatQuote className="cntBtnIcon" />
              Chat with us
            </button>
          </div>
        </div>
        <div id="contact">
          <div className="contact-wrapper">
            <form
              className="form-horizontal"
              role="form"
              onSubmit={handleContact}
              action="https://formspree.io/f/mrgnolye"
              method="POST"
            >
              <div className="form-group">
                <div className="col-sm-12">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="NAME"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    autoComplete="off"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <div className="col-sm-12">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="EMAIL"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    autoComplete="off"
                    required
                  />
                </div>
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                  render={({ messages }) => (
                    <div>
                      {messages.map((message, index) => (
                        <p key={index}>{message}</p>
                      ))}
                    </div>
                  )}
                />
              </div>

              <textarea
                className="form-control"
                rows="10"
                placeholder="MESSAGE"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                autoComplete="off"
                required
              ></textarea>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />

              <button
                className="btn btn-primary send-button"
                type="submit"
                value="SEND"
              >
                <div className="alt-send-button">
                  <i className="fa fa-paper-plane"></i>
                  <span className="send-text">SEND</span>
                </div>
              </button>
            </form>

            <div className="direct-contact-container">
              <ul className="contact-list">
                <li className="list-item">
                  <i className="fa fa-map-marker fa-2x">
                    <span className="contact-text place">City, State</span>
                  </i>
                </li>

                <li className="list-item">
                  <i className="fa fa-phone fa-2x">
                    <span className="contact-text phone">
                      <a href="tel:1-212-555-5555" title="Give me a call">
                        (212) 555-2368
                      </a>
                    </span>
                  </i>
                </li>

                <li className="list-item">
                  <i className="fa fa-envelope fa-2x">
                    <span className="contact-text gmail">
                      <a href="mailto:#" title="Send me an email">
                        hitmeup@gmail.com
                      </a>
                    </span>
                  </i>
                </li>
              </ul>

              <ul className="social-media-list">
                <li>
                  <a href="#" target="_blank" className="contact-icon">
                    <i className="fa fa-github" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank" className="contact-icon">
                    <i className="fa fa-codepen" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank" className="contact-icon">
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank" className="contact-icon">
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>

              <div className="copyright">&copy; ALL OF THE RIGHTS RESERVED</div>
            </div>
          </div>
        </div>
        {showModal && (
          <div>
            <Modal
              open={showModal}
              onClose={handleClose}
              onClick={closeModal}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box
                sx={{
                  ...style,
                  bgcolor: boxBgColor,
                  color: boxColor,
                  width: "405px",
                  "@media (max-width: 450px)": {
                    width: "90%", // Adjust for smaller screens if needed
                  },
                }}
              >
                <div style={{ textAlign: "right", fontSize: 22 }}>
                  <RxCross2 onClick={closeModal} />
                </div>
                <Typography
                  id="modal-modal-title"
                  variant="h6"
                  component="h2"
                  textAlign={"center"}
                >
                  {modalType === "Submitted Successfully"
                    ? "Submitted Successfully"
                    : "Submission Failed"}
                </Typography>
                <Typography
                  id="modal-modal-description"
                  sx={{ mt: 2 }}
                  textAlign={"center"}
                >
                  {modalType === "Submitted Successfully"
                    ? "Thank you for contacting us. We will get back to you soon."
                    : "Failed to submit form. Please try again later."}
                </Typography>
              </Box>
            </Modal>
          </div>
        )}
      </section>
    </>
  );
};

export default Contact;
