// components/ContactForm.jsx
"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "emailjs-com";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        e.target,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccess(true);
          setLoading(false);
          e.target.reset();
        },
        (error) => {
          console.error(error.text);
          setSuccess(false);
          setLoading(false);
        }
      );
  };

  return (
    <section className="bg-neutral-950 text-white px-6 py-16 md:px-12 lg:px-24">
      <div className="max-w-3xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-extrabold leading-tight"
        >
          LET&apos;S WORK <br />
          <span className="text-neutral-600">TOGETHER</span>
        </motion.h2>

        {/* Form */}
        <motion.form
          onSubmit={sendEmail}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          className="mt-10 space-y-6"
        >
          {/* Name & Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-neutral-400 mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Your Name"
                className="w-full rounded-md bg-neutral-800 text-white px-4 py-2 focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-neutral-400 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="Your@email.com"
                className="w-full rounded-md bg-neutral-800 text-white px-4 py-2 focus:ring-2 focus:ring-orange-500"
              />
            </div>
          </div>

          {/* Budget */}
          <div>
            <label className="block text-xs font-medium text-neutral-400 mb-1">
              Budget
            </label>
            <select
              name="budget"
              className="w-full rounded-md bg-neutral-800 text-white px-4 py-2 focus:ring-2 focus:ring-orange-500"
            >
              <option value="">Select...</option>
              <option value="5000">₹3,000 – ₹5,000</option>
              <option value="15000">₹5,000 – ₹10,000</option>
              <option value="50000">₹10,000 – ₹15,000</option>
              <option value="100000">₹15,000+</option>

            </select>
          </div>

          {/* Message */}
          <div>
            <label className="block text-xs font-medium text-neutral-400 mb-1">
              Message
            </label>
            <textarea
              name="message"
              rows="4"
              required
              placeholder="Message"
              className="w-full rounded-md bg-neutral-800 text-white px-4 py-2 focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 rounded-md transition"
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </motion.form>

        {/* Success/Error message */}
        {success === true && (
          <p className="text-green-500 mt-4">✅ Message sent successfully!</p>
        )}
        {success === false && (
          <p className="text-red-500 mt-4">❌ Failed to send. Try again!</p>
        )}
      </div>
    </section>
  );
}
