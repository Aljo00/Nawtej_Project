import React, { useState, useRef, useEffect } from "react";
import { X } from "lucide-react";

type EnquiryModalProps = {
  open: boolean;
  onClose: () => void;
  plan?: string | null;
  endpoint?: string; // Formspree endpoint (optional)
};

const DEFAULT_FORMSPREE = "https://formspree.io/f/xovrybok";

const EnquiryModal: React.FC<EnquiryModalProps> = ({
  open,
  onClose,
  plan = null,
  endpoint = DEFAULT_FORMSPREE,
}) => {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [country, setCountry] = useState<string>("+44|United Kingdom");

  const nameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const phoneRef = useRef<HTMLInputElement | null>(null);
  const reasonRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    if (open) setTimeout(() => nameRef.current?.focus(), 50);
  }, [open]);

  const validate = (fields: {
    name: string;
    email: string;
    phone: string;
    reason: string;
  }) => {
    const e: Record<string, string> = {};
    if (!fields.name.trim()) e.name = "Name is required";
    if (!fields.email.trim()) e.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(fields.email))
      e.email = "Enter a valid email";
    if (!fields.phone.trim()) e.phone = "Phone number is required";
    else {
      const digits = fields.phone.replace(/\D/g, "");
      if (digits.length < 6 || digits.length > 15)
        e.phone = "Enter a valid phone number";
    }
    if (!fields.reason.trim()) e.reason = "Please tell us why you're joining";
    return e;
  };

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (submitting) return;

    const finalPhone = `${country.split("|")[0] ?? ""} ${
      phoneRef.current?.value ?? ""
    }`.trim();
    const payload = {
      name: nameRef.current?.value ?? "",
      email: emailRef.current?.value ?? "",
      country: country.split("|")[1] ?? "",
      phone: finalPhone,
      reason: reasonRef.current?.value ?? "",
      plan: plan ?? "",
    };

    const validation = validate(payload as any);
    if (Object.keys(validation).length) {
      setErrors(validation);
      return;
    }

    try {
      setSubmitting(true);
      setErrors({});
      const resp = await fetch(endpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      if (resp.ok) {
        setSuccess("Thanks — we'll be in touch soon.");
        if (nameRef.current) nameRef.current.value = "";
        if (emailRef.current) emailRef.current.value = "";
        if (phoneRef.current) phoneRef.current.value = "";
        if (reasonRef.current) reasonRef.current.value = "";
        setTimeout(() => {
          setSuccess(null);
          onClose();
        }, 1400);
      } else {
        const data = await resp.json().catch(() => ({}));
        setErrors({
          submit: data.error || "Submission failed — try again later.",
        });
      }
    } catch (err) {
      setErrors({ submit: "Network error — please try again." });
    } finally {
      setSubmitting(false);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black opacity-40" onClick={onClose} />
      <div className="relative bg-white rounded-xl max-w-lg w-full mx-4 p-6 shadow-lg">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold">Enquire — {plan}</h3>
          <button
            onClick={onClose}
            aria-label="Close"
            className="p-1 rounded-md hover:bg-gray-100"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>
        <form className="mt-4 space-y-4" onSubmit={handleSubmit} noValidate>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              ref={nameRef}
              name="name"
              type="text"
              title="Your full name"
              placeholder="Full name"
              className={`mt-1 block w-full rounded-md border px-3 py-2 text-sm shadow-sm focus:outline-none ${
                errors.name
                  ? "border-red-500 ring-1 ring-red-200"
                  : "border-gray-300 focus:ring-2 focus:ring-primary"
              }`}
            />
            {errors.name && (
              <p className="mt-1 text-xs text-red-600">{errors.name}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              ref={emailRef}
              name="email"
              type="email"
              title="Your email address"
              placeholder="you@example.com"
              className={`mt-1 block w-full rounded-md border px-3 py-2 text-sm shadow-sm focus:outline-none ${
                errors.email
                  ? "border-red-500 ring-1 ring-red-200"
                  : "border-gray-300 focus:ring-2 focus:ring-primary"
              }`}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-600">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone
            </label>
            <div className="mt-1 flex gap-2">
              <select
                title="Select your country"
                aria-label="Select country code"
                value={country}
                onChange={(ev) => setCountry(ev.target.value)}
                className={`inline-block rounded-md border px-3 py-2 text-sm shadow-sm bg-white focus:outline-none ${
                  errors.phone
                    ? "border-red-500"
                    : "border-gray-300 focus:ring-2 focus:ring-primary"
                }`}
              >
                <option value="+1|United States">United States +1</option>
                <option value="+44|United Kingdom">United Kingdom +44</option>
                <option value="+61|Australia">Australia +61</option>
                <option value="+91|India">India +91</option>
                <option value="+49|Germany">Germany +49</option>
                <option value="+33|France">France +33</option>
                <option value="+39|Italy">Italy +39</option>
                <option value="+7|Russia">Russia +7</option>
                <option value="+81|Japan">Japan +81</option>
                <option value="+86|China">China +86</option>
                <option value="+34|Spain">Spain +34</option>
                <option value="+27|South Africa">South Africa +27</option>
                <option value="+64|New Zealand">New Zealand +64</option>
                <option value="+55|Brazil">Brazil +55</option>
                <option value="+31|Netherlands">Netherlands +31</option>
                <option value="+352|Luxembourg">Luxembourg +352</option>
                <option value="+972|Israel">Israel +972</option>
                <option value="+420|Czech Republic">Czech Republic +420</option>
                <option value="+358|Finland">Finland +358</option>
                <option value="+46|Sweden">Sweden +46</option>
              </select>
              <input
                ref={phoneRef}
                name="phone"
                type="tel"
                title="Local phone number without country code"
                placeholder="7700 900123"
                className={`flex-1 block w-full rounded-md border px-3 py-2 text-sm shadow-sm focus:outline-none ${
                  errors.phone
                    ? "border-red-500 ring-1 ring-red-200"
                    : "border-gray-300 focus:ring-2 focus:ring-primary"
                }`}
              />
            </div>
            {errors.phone && (
              <p className="mt-1 text-xs text-red-600">{errors.phone}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Why are you joining?
            </label>
            <textarea
              ref={reasonRef}
              name="reason"
              rows={3}
              title="Reason for joining"
              placeholder="Tell us why you want to join"
              className={`mt-1 block w-full rounded-md border px-3 py-2 text-sm shadow-sm focus:outline-none ${
                errors.reason
                  ? "border-red-500 ring-1 ring-red-200"
                  : "border-gray-300 focus:ring-2 focus:ring-primary"
              }`}
            />
            {errors.reason && (
              <p className="mt-1 text-xs text-red-600">{errors.reason}</p>
            )}
          </div>

          {errors.submit && (
            <p className="text-sm text-red-600">{errors.submit}</p>
          )}
          {success && <p className="text-sm text-green-600">{success}</p>}

          <div className="flex items-center gap-3">
            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center justify-center px-4 py-2 bg-primary text-white rounded-md"
            >
              {submitting ? "Sending..." : "Submit"}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-md border"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EnquiryModal;
