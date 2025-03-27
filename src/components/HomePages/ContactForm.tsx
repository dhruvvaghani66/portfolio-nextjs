"use client";

import type React from "react";

import { useState, useRef } from "react";
import { Send } from "lucide-react";

export default function ContactSection() {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      // EmailJS implementation
      const response = await emailjsSendForm(formState);

      setIsSubmitting(false);
      setIsSubmitted(true);

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormState({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      }, 3000);
    } catch (err) {
      setIsSubmitting(false);
      setError("Failed to send message. Please try again.");
      console.error("Email sending failed:", err);
    }
  };

  // Function to send email using EmailJS
  const emailjsSendForm = async (data: typeof formState) => {
    const templateParams = {
      from_name: `${data.firstName} ${data.lastName}`,
      from_email: data.email,
      from_phone: data.phone,
      subject: data.subject,
      message: data.message,
    };

    // Replace with your actual EmailJS service ID, template ID, and public key
    const serviceId = "service_2cllahb";
    const templateId = "template_2e2v2ao";
    const publicKey = "MmuMFz9Q7jCP6XL8r";

    // Load EmailJS dynamically to avoid SSR issues
    const emailjs = await import("@emailjs/browser");

    // Initialize EmailJS with your public key
    emailjs.init(publicKey);

    return emailjs.send(serviceId, templateId, templateParams);
  };

  return (
    <section className="relative w-full py-2 overflow-hidden text-white px4 bgblack sm:px6 lg:px8">
      <div className="relative z-10 max-w-3xl mx-auto mt-6">
        {/* <div className="mb-12 text-center"> */}
          {/* <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Get in Touch</h2> */}
          {/* <p className="mt-4 text-gray-400">
            Have a question or want to work together? Fill out the form below.
          </p> */}
        {/* </div> */}

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="relative p-8 bg-black border shadow-xl backdrop-blur-sm sm:p-10 rounded-xl border-white/10"
        >
          {isSubmitted && (
            <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/90 backdrop-blur-sm rounded-xl animate-fade-in">
              <div className="text-center">
                <svg
                  className="w-16 h-16 mx-auto mb-4 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 11.0857V12.0057C21.9988 14.1621 21.3005 16.2604 20.0093 17.9875C18.7182 19.7147 16.9033 20.9782 14.8354 21.5896C12.7674 22.201 10.5573 22.1276 8.53447 21.3803C6.51168 20.633 4.78465 19.2518 3.61096 17.4428C2.43727 15.6338 1.87979 13.4938 2.02168 11.342C2.16356 9.19029 2.99721 7.14205 4.39828 5.5028C5.79935 3.86354 7.69279 2.72111 9.79619 2.24587C11.8996 1.77063 14.1003 1.98806 16.07 2.86572"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22 4L12 14.01L9 11.01"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <h3 className="mb-2 text-2xl font-bold text-white">
                  Message Sent!
                </h3>
                <p className="text-gray-400">
                  Thank you for reaching out. I'll get back to you shortly.
                </p>
              </div>
            </div>
          )}

          {error && (
            <div className="p-4 mb-6 text-sm border border-red-800 rounded-lg bg-red-900/20">
              {error}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            <div className="relative">
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formState.firstName}
                onChange={handleChange}
                required
                className="w-full px-0 py-3 text-white placeholder-black transition-all duration-300 bg-transparent border-0 border-b outline-none peer border-white/20 focus:border-white"
                placeholder="First Name"
              />
              <label
                htmlFor="firstName"
                className="absolute left-0 text-sm text-gray-500 transition-all duration-300 -top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 peer-focus:-top-5 peer-focus:text-sm peer-focus:text-white"
              >
                First Name
              </label>
            </div>

            <div className="relative">
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formState.lastName}
                onChange={handleChange}
                required
                className="w-full px-0 py-3 text-white placeholder-transparent transition-all duration-300 bg-transparent border-0 border-b outline-none peer border-white/20 focus:border-white"
                placeholder="Last Name"
              />
              <label
                htmlFor="lastName"
                className="absolute left-0 text-sm text-gray-500 transition-all duration-300 -top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 peer-focus:-top-5 peer-focus:text-sm peer-focus:text-white"
              >
                Last Name
              </label>
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                required
                className="w-full px-0 py-3 text-white placeholder-transparent transition-all duration-300 bg-transparent border-0 border-b outline-none peer border-white/20 focus:border-white"
                placeholder="Email"
              />
              <label
                htmlFor="email"
                className="absolute left-0 text-sm text-gray-500 transition-all duration-300 -top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 peer-focus:-top-5 peer-focus:text-sm peer-focus:text-white"
              >
                Email
              </label>
            </div>

            <div className="relative">
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formState.phone}
                onChange={handleChange}
                required
                className="w-full px-0 py-3 text-white placeholder-transparent transition-all duration-300 bg-transparent border-0 border-b outline-none peer border-white/20 focus:border-white"
                placeholder="Phone"
              />
              <label
                htmlFor="phone"
                className="absolute left-0 text-sm text-gray-500 transition-all duration-300 -top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 peer-focus:-top-5 peer-focus:text-sm peer-focus:text-white"
              >
                Phone
              </label>
            </div>

            <div className="relative md:col-span-2">
              <input
                type="text"
                id="subject"
                name="subject"
                value={formState.subject}
                onChange={handleChange}
                required
                className="w-full px-0 py-3 text-white placeholder-transparent transition-all duration-300 bg-transparent border-0 border-b outline-none peer border-white/20 focus:border-white"
                placeholder="Subject"
              />
              <label
                htmlFor="subject"
                className="absolute left-0 text-sm text-gray-500 transition-all duration-300 -top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 peer-focus:-top-5 peer-focus:text-sm peer-focus:text-white"
              >
                Subject
              </label>
            </div>

            <div className="relative mt-4 md:col-span-2">
              <textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 text-white placeholder-transparent transition-all duration-300 bg-transparent border rounded-lg outline-none resize-none peer border-white/10 focus:border-white"
                placeholder="Message"
              ></textarea>
              <label
                htmlFor="message"
                className="absolute text-sm text-gray-500 transition-all duration-300 left-4 -top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 peer-focus:-top-5 peer-focus:text-sm peer-focus:text-white"
              >
                Message
              </label>
            </div>
          </div>

          <div className="flex justify-center mt-10">
            <button
              type="submit"
              disabled={isSubmitting}
              className="relative px-8 py-3 overflow-hidden font-medium text-white transition-all duration-300 bg-transparent border border-white rounded-full group hover:bg-white hover:text-black disabled:opacity-70 disabled:hover:bg-transparent disabled:hover:text-white"
            >
              <span className="relative z-10 flex items-center gap-2">
                {isSubmitting ? (
                  <>
                    <svg
                      className="w-4 h-4 mr-2 -ml-1 text-white animate-spin"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Book free call <Send className="w-4 h-4 ml-1" />
                  </>
                )}
              </span>
            </button>
          </div>
        </form>
      </div>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fade-in {
          animation: fade-in 0.4s ease-out;
        }
      `}</style>
    </section>
  );
}
