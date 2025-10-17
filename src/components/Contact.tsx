import { useState, FormEvent } from "react";
import { Mail, Linkedin, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      // Send form data to a backend endpoint. Implement /api/contact server-side to persist or forward messages.
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || "Failed to submit form");
      }

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-charcoal mb-4">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-600">
            Reach out for enterprise pricing, consulting, or speaking
            engagements
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <a
            href="mailto:contact@aistrategiser.com"
            className="flex items-center gap-4 p-6 bg-light-gray rounded-lg hover:bg-gray-200 transition-colors"
          >
            <Mail className="text-primary" size={32} />
            <div>
              <div className="font-semibold text-charcoal">Email</div>
              <div className="text-gray-600">contact@aistrategiser.com</div>
            </div>
          </a>

          <a
            href="https://linkedin.com/in/drnawtejdosanjh"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-6 bg-light-gray rounded-lg hover:bg-gray-200 transition-colors"
          >
            <Linkedin className="text-primary" size={32} />
            <div>
              <div className="font-semibold text-charcoal">LinkedIn</div>
              <div className="text-gray-600">Connect on LinkedIn</div>
            </div>
          </a>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-light-gray p-8 rounded-xl shadow-lg"
        >
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-charcoal mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-charcoal mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              />
            </div>
          </div>

          <div className="mb-6">
            <label
              htmlFor="subject"
              className="block text-sm font-semibold text-charcoal mb-2"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              required
              value={formData.subject}
              onChange={(e) =>
                setFormData({ ...formData, subject: e.target.value })
              }
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-charcoal mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              required
              rows={6}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full bg-primary hover:bg-primary-dark disabled:bg-gray-400 text-white font-semibold px-8 py-4 rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            {status === "submitting" ? (
              "Sending..."
            ) : (
              <>
                <Send size={20} />
                Send Message
              </>
            )}
          </button>

          {status === "success" && (
            <div className="mt-4 p-4 bg-secondary/10 text-secondary rounded-lg text-center font-semibold">
              Message sent successfully! We'll get back to you soon.
            </div>
          )}

          {status === "error" && (
            <div className="mt-4 p-4 bg-red-100 text-red-600 rounded-lg text-center font-semibold">
              Failed to send message. Please try again or email us directly.
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
