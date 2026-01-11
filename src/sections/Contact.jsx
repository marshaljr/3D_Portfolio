import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import useAlert from "../hooks/useAlert.js";
import Alert from "../components/Alert.jsx";

const Contact = () => {
  const formRef = useRef();

  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Marshal",
          from_email: form.email,
          to_email: "marshaljr615@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setLoading(false);

      showAlert({
        show: true,
        text: "Thank you for your message 😃",
        type: "success",
      });

      setTimeout(() => {
        hideAlert(false);
        setForm({
          name: "",
          email: "",
          message: "",
        });
      }, [3000]);
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      showAlert({
        show: true,
        text: "I didn't receive your message 😢",
        type: "danger",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="c-space my-10 py-10 sm:my-16 md:my-20 px-4 sm:px-8"
      id="contact">
      {alert.show && <Alert {...alert} />}
      <div className="relative min-h-screen flex items-center justify-center flex-col px-4 sm:px-6 md:px-10">
        <img
          src="/assets/terminal.png"
          alt="terminal background"
          className="absolute inset-0 min-h-screen"
        />
        <div className="contact-container w-full max-w-2xl">
          <h3 className="head-text text-white text-2xl sm:text-3xl md:text-4xl text-center mt-4 sm:mt-8 md:mt-10">
            Let's Talk
          </h3>
          <p className="text-lg text-white opacity-70 sm:text-lg mt-4 sm:mt-6">
            Whether you're looking to build a new website, improve your existing
            platform, or bring a unique project to life, I'm here to help you.
          </p>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-8 sm:mt-10 md:mt-12 flex flex-col space-y-5 sm:space-y-6 md:space-y-7">
            <label className="space-y-2 sm:space-y-3">
              <span className="field-label text-white opacity-80">
                Full Name
              </span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input bg-neutral-800 placeholder-gray-500 text-white px-3 py-2 sm:px-4 sm:py-3 rounded-lg focus:border-blue-400 focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 hover:border-blue-400 hover:ring-2 hover:ring-blue-400 hover:ring-opacity-50 transition-all duration-400 outline-none"
                placeholder="Your Name"
              />
            </label>
            <label className="space-y-2 sm:space-y-3">
              <span className="field-label text-white opacity-80">Email </span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input bg-neutral-800 placeholder-gray-500 text-white px-3 py-2 sm:px-4 sm:py-3 rounded-lg focus:border-blue-400 focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 hover:border-blue-400 hover:ring-2 hover:ring-blue-400 hover:ring-opacity-50 transition-all duration-400 outline-none"
                placeholder="someone@gmail.com"
              />
            </label>
            <label className="space-y-2 sm:space-y-3">
              <span className="field-label text-white opacity-80">
                Your Message
                <span>
                  <lord-icon
                    src="https://cdn.lordicon.com/exymduqj.json"
                    trigger="loop"
                    delay="1000"
                    state="hover-line"
                    colors="primary:#f4dc9c,secondary:#b4b4b4"
                    style={{
                      width: "32px",
                      height: "32px",
                      paddingTop: "3px",
                      paddingLeft: "4px",
                    }}></lord-icon>
                </span>
              </span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={4}
                className="field-input bg-neutral-800 placeholder-gray-500 text-white px-3 py-2 sm:px-4 sm:py-3 rounded-lg focus:border-blue-400 focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 hover:border-blue-400 hover:ring-2 hover:ring-blue-400 hover:ring-opacity-50 transition-all duration-400 outline-none"
                placeholder="Hi, I have a job for you..."
              />
            </label>
            <button
              className="relative field-btn bg-neutral-800 py-2 sm:py-3 px-6 text-white 
             overflow-hidden rounded-lg
             before:absolute before:inset-0 before:rounded-lg 
             before:p-[2px] before:bg-gradient-to-r before:from-pink-500 before:via-purple-500 before:to-blue-500
             before:opacity-0 before:scale-0 before:transition-all before:duration-500 before:content-['']
             hover:before:opacity-100 hover:before:scale-100"
              type="submit"
              disabled={loading}>
              <span>
                <lord-icon
                  src="https://cdn.lordicon.com/kezeezyg.json"
                  trigger="loop"
                  delay="1000"
                  state="morph-open"
                  colors="primary:#f4dc9c,secondary:#b4b4b4"
                  style={{
                    width: "32px",
                    height: "32px",
                    paddingTop: "3px",
                    paddingLeft: "4px",
                  }}></lord-icon>
              </span>
              <span className="relative z-10 flex items-center gap-2">
                {loading ? "Sending..." : "Send message"}
                <img
                  src="/assets/arrow-up.png"
                  alt="arrow-up"
                  className="field-btn_arrow"
                />
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
