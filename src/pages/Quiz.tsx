import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function Quiz() {
   useEffect(() => {
          window.scrollTo(0, 0);
      }, []);
  const [step, setStep] = useState(1);

  const [form, setForm] = useState({
    goal: "",
    employment: "",
    timeline: "",
    propertyType: "",
    priority: "",
    loanAmount: "",
    hasLoan: "",
    name: "",
    email: "",
    phone: "",
  });

  const totalSteps = 8;

  const next = () => step < totalSteps && setStep(step + 1);
  const prev = () => step > 1 && setStep(step - 1);

  const update = (key: string, value: string) => {
    setForm({ ...form, [key]: value });
  };

  const fieldWrapper = (children: any) => (
    <motion.div
      key={step}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="bg-white p-8 rounded-2xl shadow-lg"
    >
      {children}
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-[#F7F7F7] px-6 py-20 flex justify-center">
      <div className="w-full max-w-2xl my-10">
         {/* Breadcrumb */}
                        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
                          <Link to="/" className="hover:text-[#0F3D3A] transition-colors">Home</Link>
                          <span>›</span>
                          <span className="text-[#0F3D3A] font-medium">Lead Magnet Quiz</span>
                        </nav>

        {/* Progress Bar */}
        <div className="mb-10">
          <div className="flex justify-between text-sm font-medium mb-2">
            <span>Step {step} / {totalSteps}</span>
            <span>Your Strategic Lending Profile™</span>
          </div>

          <div className="w-full bg-gray-300 h-2 rounded-full">
            <div className="bg-[#0F3D3A] h-2 rounded-full"
              style={{ width: `${(step / totalSteps) * 100}%` }}
            />
          </div>
        </div>

        {/* QUESTIONS */}
        <AnimatePresence mode="wait">
          {step === 1 &&
            fieldWrapper(
              <>
                <h2 className="text-xl font-semibold mb-4">
                  What are you looking to achieve?
                </h2>

                {[
                  "Buy my first home",
                  "Buy my next property",
                  "Refinance / restructure",
                  "Explore investment lending",
                  "Self-employed lending",
                ].map((v) => (
                  <button
                    key={v}
                    onClick={() => {
                      update("goal", v);
                      next();
                    }}
                    className="w-full text-left p-4 mb-3 rounded-xl border hover:bg-gray-100"
                  >
                    {v}
                  </button>
                ))}
              </>
            )}

          {step === 2 &&
            fieldWrapper(
              <>
                <h2 className="text-xl font-semibold mb-4">Employment Type</h2>

                {[
                  "PAYG",
                  "Self-employed",
                  "Business owner",
                  "Contractor / casual",
                ].map((v) => (
                  <button
                    key={v}
                    onClick={() => {
                      update("employment", v);
                      next();
                    }}
                    className="w-full text-left p-4 mb-3 rounded-xl border hover:bg-gray-100"
                  >
                    {v}
                  </button>
                ))}
              </>
            )}

          {step === 3 &&
            fieldWrapper(
              <>
                <h2 className="text-xl font-semibold mb-4">Borrowing Timeline</h2>

                {["Ready now", "1–3 months", "3–6 months", "Just exploring"].map(
                  (v) => (
                    <button
                      key={v}
                      onClick={() => {
                        update("timeline", v);
                        next();
                      }}
                      className="w-full text-left p-4 mb-3 rounded-xl border hover:bg-gray-100"
                    >
                      {v}
                    </button>
                  )
                )}
              </>
            )}

          {step === 4 &&
            fieldWrapper(
              <>
                <h2 className="text-xl font-semibold mb-4">Property Type</h2>

                {["Owner-occupied", "Investment property", "Both"].map((v) => (
                  <button
                    key={v}
                    onClick={() => {
                      update("propertyType", v);
                      next();
                    }}
                    className="w-full text-left p-4 mb-3 rounded-xl border hover:bg-gray-100"
                  >
                    {v}
                  </button>
                ))}
              </>
            )}

          {step === 5 &&
            fieldWrapper(
              <>
                <h2 className="text-xl font-semibold mb-4">
                  What’s your biggest priority?
                </h2>

                {[
                  "Reduce total interest",
                  "Improve cash flow",
                  "Build long-term wealth",
                  "Optimise loan structure",
                  "Compare my options",
                ].map((v) => (
                  <button
                    key={v}
                    onClick={() => {
                      update("priority", v);
                      next();
                    }}
                    className="w-full text-left p-4 mb-3 rounded-xl border hover:bg-gray-100"
                  >
                    {v}
                  </button>
                ))}
              </>
            )}

          {step === 6 &&
            fieldWrapper(
              <>
                <h2 className="text-xl font-semibold mb-4">
                  Estimated Loan Amount
                </h2>

                <input
                  type="number"
                  placeholder="Enter amount"
                  value={form.loanAmount}
                  onChange={(e) => update("loanAmount", e.target.value)}
                  className="w-full p-4 border rounded-xl mb-6"
                />

                <button
                  onClick={next}
                  disabled={!form.loanAmount}
                  className="w-full bg-[#272727] text-white p-4 rounded-xl disabled:opacity-40"
                >
                  Continue
                </button>
              </>
            )}

          {step === 7 &&
            fieldWrapper(
              <>
                <h2 className="text-xl font-semibold mb-4">
                  Do you currently have any property loans?
                </h2>

                {["Yes", "No"].map((v) => (
                  <button
                    key={v}
                    onClick={() => {
                      update("hasLoan", v);
                      next();
                    }}
                    className="w-full text-left p-4 mb-3 rounded-xl border hover:bg-gray-100"
                  >
                    {v}
                  </button>
                ))}
              </>
            )}

          {step === 8 &&
            fieldWrapper(
              <>
                <h2 className="text-xl font-semibold mb-6">
                  Contact Details
                </h2>

                <input
                  type="text"
                  placeholder="Full name"
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  className="w-full p-4 border rounded-xl mb-4"
                />

                <input
                  type="email"
                  placeholder="Email address"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  className="w-full p-4 border rounded-xl mb-4"
                />

                <input
                  type="tel"
                  placeholder="Phone number"
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  className="w-full p-4 border rounded-xl mb-6"
                />

                <button
                  onClick={() => alert("Form Submitted!")}
                  disabled={!form.name || !form.email || !form.phone}
                  className="w-full bg-[#272727] text-white p-4 rounded-xl disabled:opacity-40"
                >
                  Submit Profile
                </button>
              </>
            )}
        </AnimatePresence>

        {/* Back Button */}
        {step > 1 && step < 8 && (
          <motion.button
            type="button"
            onClick={prev}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 px-4 py-3 text-[#0F3D3A] hover:bg-white rounded-[6px] transition-colors font-medium text-sm mt-4"
          >
            <ChevronLeft className="w-4 h-4" />
            Back
          </motion.button>
        )}
      </div>
    </div>
  );
}
