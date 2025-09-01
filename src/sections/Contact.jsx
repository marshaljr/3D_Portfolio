import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
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
        "service_yh10cdo",
        "template_21xnc7h",
        {
          from_name: form.name,
          to_name: "Marshal",
          from_email: form.email,
          to_email: "marshaljr615@gmail.com",
          message: form.message,
        },
        "YCFlaGC5EHVs7mNRN"
      );
      setLoading(false);
      alert("Your message has been sent ");
      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setLoading(false);
      console.log(error);
      alert("Something went wrong!");
    }
  };

  return (
    <section className="c-space my-20" id="contact">
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img
          src="/assets/terminal.png"
          alt="terminal background"
          className="absolute inset-0 min-h-screen"
        />
        <div className="contact-container">
          <h3 className="head-text text-white">Let's Talk</h3>
          <p className="text-lg text-white opacity-70">
            Whether you're looking to building a new websites, improve your
            existing platform, or bring a unique project to life, I'm here to
            help you.{" "}
          </p>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col space-y-7">
            <label className="space-y-3">
              <span className="field-label text-white opacity-80">
                Full Name
              </span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input bg-neutral-800 placeholder-gray-500 text-white"
                placeholder="Marshal Ram"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label text-white opacity-80">Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input bg-neutral-800 placeholder-gray-500 text-white"
                placeholder="marshalram10@gmail.com"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label text-white opacity-80">
                Your Message
              </span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={4}
                className="field-input bg-neutral-800 placeholder-gray-500 text-white"
                placeholder="Hi, I want to give you a job..."
              />
            </label>
            <button
              className="field-btn bg-neutral-800"
              type="submit"
              disabled={loading}>
              {loading ? "Sending..." : "Send message"}
              <img
                src="/assets/arrow-up.png"
                alt="arrow-up"
                className="field-btn_arrow "
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
