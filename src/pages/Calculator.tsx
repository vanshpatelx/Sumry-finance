import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Calculator() {
  const [loanAmount, setLoanAmount] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [remainingYears, setRemainingYears] = useState(20);
  const [monthlyRepayment, setMonthlyRepayment] = useState(0);
  const [extraCash, setExtraCash] = useState(200);
  const [intent, setIntent] = useState("Owner-occupied");
  const [structure, setStructure] = useState("Single split");

  // Simple estimated savings model
  const calculateSavings = () => {
    const monthlyRate = interestRate / 100 / 12;

    const currentInterest = loanAmount * monthlyRate;
    const newInterest = currentInterest - extraCash * 0.5;

    const yearlySavings = (currentInterest - newInterest) * 12;
    return Math.max(0, Math.round(yearlySavings));
  };

   useEffect(() => {
          window.scrollTo(0, 0);
      }, []);

  return (
    <div className="min-h-screen bg-[#F7F7F7] py-24 px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8 md:p-12"
      >
        {/* Breadcrumb */}
                <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
                  <Link to="/" className="hover:text-[#0F3D3A] transition-colors">Home</Link>
                  <span>›</span>
                  <span className="text-[#0F3D3A] font-medium">Saving Calculator</span>
                </nav>
        {/* HEADER */}
        <h1 className="heading text-2xl sm:text-3xl md:text-4xl leading-tighter font-medium tracking-wide text-[#0F3D3A]">
          Structure Savings Calculator <sup className="text-xl">™</sup>
        </h1>
        <p className="text-[#555] mt-2 text-base md:text-lg">
          Estimate the benefits of a smarter loan structure.
        </p>

        {/* FORM */}
        <div className="mt-10 space-y-6">

          {/* 1 — Loan Amount */}
          <div>
            <label className="block font-medium mb-1">
              Current Loan Amount
            </label>
            <input
              type="number"
              className="w-full p-3 border rounded-[8px]"
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
              placeholder="e.g., 500000"
            />
          </div>

          {/* 2 — Interest Rate */}
          <div>
            <label className="block font-medium mb-1">
              Current Interest Rate (%)
            </label>
            <input
              type="number"
              className="w-full p-3 border rounded-[8px]"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              placeholder="e.g., 5.5"
            />
          </div>

          {/* 3 — Remaining Loan Term */}
          <div>
            <label htmlFor="remainingYears" className="block font-medium mb-1">
              Remaining Loan Term (Years): {remainingYears}
            </label>
            <input
              id="remainingYears"
              type="range"
              min="1"
              max="40"
              value={remainingYears}
              onChange={(e) => setRemainingYears(Number(e.target.value))}
              className="w-full custom-range"
            />
          </div>

          {/* 4 — Monthly Repayment */}
          <div>
            <label htmlFor="Repayment" className="block font-medium mb-1">
              Current Monthly Repayment
            </label>
            <input
              id="Repayment"
              type="number"
              className="w-full p-3 border rounded-[8px]"
              value={monthlyRepayment}
              onChange={(e) => setMonthlyRepayment(Number(e.target.value))}
              placeholder="e.g., 2500"
            />
          </div>

          {/* 5 — Extra Monthly Cash Flow */}
          <div>
            <label className="block font-medium mb-1">
              Extra Monthly Cash Flow You Could Allocate: ${extraCash}
            </label>
            <input title="Extra Monthly Cash"
              type="range"
              min="50"
              max="2000"
              step="50"
              value={extraCash}
              onChange={(e) => setExtraCash(Number(e.target.value))}
              className="w-full custom-range"
            />
          </div>

          {/* 6 — Property Intent */}
          <div>
            <label htmlFor="intent" className="block font-medium mb-1">Property Intent</label>
            <select
              id="intent"
              value={intent}
              onChange={(e) => setIntent(e.target.value)}
              className="w-full p-3 border rounded-[8px]"
            >
              <option>Owner-occupied</option>
              <option>Investment</option>
            </select>
          </div>

          {/* 7 — Current Loan Structure */}
          <div>
            <label htmlFor="currentLoan" className="block font-medium mb-1">
              Current Loan Structure
            </label>
            <select
              id="currentLoan"
              value={structure}
              onChange={(e) => setStructure(e.target.value)}
              className="w-full p-3 border rounded-[8px]"
            >
              <option>Single split</option>
              <option>Multiple splits</option>
              <option>Offset account</option>
              <option>No offset</option>
              <option>Cross-collateralised</option>
            </select>
          </div>
        </div>

        {/* RESULT */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-12 p-6 bg-[#0F3D3A] text-[#EBEBEB] rounded-xl"
        >
          <h2 className="text-xl font-semibold">
            Your Estimated Savings
          </h2>

          <p className="text-4xl font-bold mt-3">
            ${calculateSavings().toLocaleString()} / year
          </p>

          <p className="mt-3 opacity-80 text-sm">
            *Calculation is a simplified estimate based on potential interest
            reduction through improved loan structure.
          </p>
        </motion.div>
      </motion.div >
    </div >
  );
}
