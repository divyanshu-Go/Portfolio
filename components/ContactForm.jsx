"use client";

export default function ContactForm() {
  return (
    <section className="bg-neutral-950 text-white px-6 py-16 md:px-12 lg:px-24">
      <div className="max-w-3xl mx-auto">
        {/* Heading */}
        <h2 className="text-5xl md:text-6xl font-extrabold leading-tight">
          LET&apos;S WORK <br/><span className="text-neutral-600">TOGETHER</span>
        </h2>

        {/* Form */}
        <form className="mt-10 space-y-6">
          {/* Name & Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="name"
                className="block text-xs font-medium text-neutral-400 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="w-full rounded-md bg-neutral-800 text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-neutral-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-medium text-neutral-400 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your@email.com"
                className="w-full rounded-md bg-neutral-800 text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-neutral-500"
              />
            </div>
          </div>

          {/* Budget */}
          <div>
            <label
              htmlFor="budget"
              className="block text-xs font-medium text-neutral-400 mb-1"
            >
              Budget
            </label>
            <select
              id="budget"
              className="w-full rounded-md bg-neutral-800 text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option value="">Select...</option>
              <option value="500">$500 - $1,000</option>
              <option value="1000">$1,000 - $5,000</option>
              <option value="5000">$5,000+</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-xs font-medium text-neutral-400 mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              placeholder="Message"
              className="w-full rounded-md bg-neutral-800 text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-neutral-500"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 rounded-md transition"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
