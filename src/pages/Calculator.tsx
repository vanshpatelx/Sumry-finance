import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Calculator() {
  const [loanAmount, setLoanAmount] = useState<number>(0);
  const [interestRate, setInterestRate] = useState<number>(0);
  const [remainingYears, setRemainingYears] = useState(20);
  const [monthlyRepayment, setMonthlyRepayment] = useState<number>(0);
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
    <div className="min-h-screen bg-[#F7F7F7] py-28 px-6 md:px-12 flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl w-full bg-white rounded-2xl border border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.04)] p-8 md:p-12"
      >
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
          <Link to="/" className="hover:text-[#0F3D3A]">Home</Link>
          <span>/</span>
          <span className="text-[#0F3D3A] font-medium">Saving Calculator</span>
        </nav>

        {/* Heading */}
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-semibold text-[#0F3D3A] leading-tight">
            Structure Savings Calculator <sup>™</sup>
          </h1>
          <p className="text-gray-600 mt-2 text-base md:text-lg">
            Estimate the benefits of a smarter loan structure.
          </p>
        </div>

        {/* FORM UI */}
        <div className="grid gap-7">
          {/* Loan Amount */}
          <div className="flex flex-col gap-2">
            <label className="font-medium text-gray-800">Current Loan Amount</label>
            <input
              type="number"
              className="w-full p-3 rounded-xl border border-gray-300 focus:border-[#0F3D3A] focus:ring-1 focus:ring-[#0F3D3A] transition"
              value={loanAmount === 0 ? "" : loanAmount}
              onChange={(e) => {
                const value = e.target.value;
                setLoanAmount(value === "" ? 0 : Number(value));
              }}
              placeholder="e.g., 500000"
            />
          </div>

          {/* Interest Rate */}
          <div className="flex flex-col gap-2">
            <label className="font-medium text-gray-800">Current Interest Rate (%)</label>
            <input
              type="number"
              className="w-full p-3 rounded-xl border border-gray-300 focus:border-[#0F3D3A] focus:ring-1 focus:ring-[#0F3D3A] transition"
              value={interestRate === 0 ? "" : interestRate}
              onChange={(e) => {
                const value = e.target.value;
                setInterestRate(value === "" ? 0 : Number(value));
              }}
              placeholder="e.g., 5.5"
            />
          </div>

          {/* Remaining Term */}
          <div className="flex flex-col gap-2">
            <label htmlFor="remainingYears" className="font-medium text-gray-800">
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

          {/* Monthly Repayment */}
          <div className="flex flex-col gap-2">
            <label className="font-medium text-gray-800">
              Current Monthly Repayment
            </label>
            <input
              type="number"
              className="w-full p-3 rounded-xl border border-gray-300 focus:border-[#0F3D3A] focus:ring-1 focus:ring-[#0F3D3A] transition"
              value={monthlyRepayment === 0 ? "" : monthlyRepayment}
              onChange={(e) => {
                const value = e.target.value;
                setMonthlyRepayment(value === "" ? 0 : Number(value));
              }}
              placeholder="e.g., 2500"
            />
          </div>

          {/* Extra Cash */}
          <div className="flex flex-col gap-2">
            <label htmlFor="cashflow" className="font-medium text-gray-800">
              Extra Monthly Cash Flow You Could Allocate: ${extraCash}
            </label>
            <input
              id="cashflow"
              type="range"
              min="50"
              max="2000"
              step="50"
              value={extraCash}
              onChange={(e) => setExtraCash(Number(e.target.value))}
              className="w-full custom-range"
            />
          </div>

          {/* Intent */}
          <div className="flex flex-col gap-2">
            <label htmlFor="intent" className="font-medium text-gray-800">Property Intent</label>
            <select
              id="intent"
              value={intent}
              onChange={(e) => setIntent(e.target.value)}
              className="w-full p-3 rounded-xl border border-gray-300 focus:border-[#0F3D3A] focus:ring-1 focus:ring-[#0F3D3A]"
            >
              <option>Owner-occupied</option>
              <option>Investment</option>
            </select>
          </div>

          {/* Structure */}
          <div className="flex flex-col gap-2">
            <label htmlFor="currentLoan" className="font-medium text-gray-800">Current Loan Structure</label>
            <select
              id="currentLoan"
              value={structure}
              onChange={(e) => setStructure(e.target.value)}
              className="w-full p-3 rounded-xl border border-gray-300 focus:border-[#0F3D3A] focus:ring-1 focus:ring-[#0F3D3A]"
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
          transition={{ delay: 0.3 }}
          className="mt-12 p-8 bg-[#0F3D3A] rounded-2xl text-[#EBEBEB] shadow-lg"
        >
          <h2 className="text-xl font-semibold tracking-tight">Your Estimated Savings</h2>

          <p className="text-4xl font-bold mt-3 tracking-tight">
            ${calculateSavings().toLocaleString()} / year
          </p>

          <p className="mt-3 opacity-80 text-sm leading-relaxed">
            *Calculation is a simplified estimate based on potential interest reduction through improved loan structure.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
