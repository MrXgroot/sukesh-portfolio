import Section from "../layout/Section";
import { FiMail } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm("service_it6grzq", "template_u9jphng", formRef.current, {
        publicKey: "D3BttLf5b2kVTQL0g",
      })
      .then(() => {
        toast.success("Message sent successfully 🚀");
        formRef.current.reset();
      })
      .catch(() => {
        toast.error("Failed to send message ❌");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Section id="contact" className="bg-gray-50">
      {/* HEADER */}
      <div className="flex flex-col gap-4 mb-12">
        <span className="text-sm uppercase tracking-wide text-gray-500">
          Contact
        </span>

        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">
          Let’s work together
        </h2>

        <p className="text-gray-600 max-w-xl">
          I’m open to internships, freelance opportunities, and collaborations.
          Feel free to reach out.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* LEFT */}
        <div className="flex flex-col gap-6">
          <a
            href="mailto:sukeshachar1489@gmail.com"
            className="flex items-center gap-4 p-4 border border-gray-200 rounded-xl hover:bg-white hover:shadow-sm transition"
          >
            <FiMail size={20} />
            <span className="text-sm">sukeshachar1489@gmail.com</span>
          </a>

          <a
            href="https://github.com/mrXgroot"
            target="_blank"
            className="flex items-center gap-4 p-4 border rounded-xl hover:bg-white hover:shadow-sm transition"
          >
            <FaGithub size={20} />
            <span>GitHub Profile</span>
          </a>

          <a
            href="https://www.linkedin.com/in/sukesh-acharya-58b991322/"
            target="_blank"
            className="flex items-center gap-4 p-4 border rounded-xl hover:bg-white hover:shadow-sm transition"
          >
            <FaLinkedin size={20} />
            <span>LinkedIn Profile</span>
          </a>
        </div>

        {/* RIGHT FORM */}
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="flex flex-col gap-5 bg-white p-6 rounded-2xl border border-gray-200 shadow-sm"
        >
          {/* Floating Input */}
          <div className="relative">
            <input
              type="text"
              name="from_name"
              required
              className="peer w-full border border-gray-300 rounded-lg px-4 pt-5 pb-2 text-sm outline-none focus:border-black"
            />
            <label className="absolute left-4 top-2 text-xs text-gray-500 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-black">
              Your Name
            </label>
          </div>

          <div className="relative">
            <input
              type="email"
              name="from_email"
              required
              className="peer w-full border border-gray-300 rounded-lg px-4 pt-5 pb-2 text-sm outline-none focus:border-black"
            />
            <label className="absolute left-4 top-2 text-xs text-gray-500 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-black">
              Your Email
            </label>
          </div>

          <div className="relative">
            <textarea
              rows="4"
              name="message"
              required
              className="peer w-full border border-gray-300 rounded-lg px-4 pt-5 pb-2 text-sm outline-none focus:border-black"
            />
            <label className="absolute left-4 top-2 text-xs text-gray-500 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-black">
              Your Message
            </label>
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className={`mt-2 py-3 rounded-full text-sm font-medium transition flex items-center justify-center gap-2 ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-black text-white hover:bg-gray-800"
            }`}
          >
            {loading ? (
              <>
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </button>
        </form>
      </div>
    </Section>
  );
};

export default Contact;
