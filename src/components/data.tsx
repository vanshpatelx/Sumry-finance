import { Variants } from "framer-motion";

export const services = [
  {
    id: "self-employed-lending",
    tag : "Business Lending",
    title: "Self-Employed & Business Owner Lending",
    subtitle: "Specialist lending solutions built on deep financial analysis",
    desc: "Specialist lending solutions built on deep financial analysis. Leverages accounting expertise to interpret financials, cash flow, tax structures, and business performance. Designed to give self-employed borrowers clearer pathways and stronger, more strategic lending outcomes.",
    detailedDesc: "Our Self-Employed & Business Owner Lending service is specifically designed for entrepreneurs, freelancers, and business owners who face unique challenges when seeking financing. We understand that traditional lending criteria often don't account for the financial realities of self-employed individuals. We conduct deep financial analysis that goes beyond standard income verification, examining your business cash flow, tax structures, and overall financial health to present your case in the strongest possible light to lenders. Our expertise in accounting and financial analysis allows us to bridge the gap between your business performance and lender requirements, creating tailored solutions that support your growth and financial stability.",
    img: "https://placehold.co/600x400",
    icon: "/service1.svg",
    benefits: ['Benefit 1', 'Benefit 2', 'Benefit 3'],
    features: [
      "Financial Analysis",
      "Cash Flow Assessment", 
      "Tax Structure Optimization",
      "Business Performance Evaluation",
      "Lender Negotiation",
      "Strategic Lending Pathways"
    ]
  },
  {
    id: "home-loans",
    tag : "Home Loans",
    title: "Owner-Occupied Home Loans",
    subtitle: "Structured home loan solutions focused on reducing interest",
    desc: "Structured home loan solutions focused on reducing interest and accelerating debt reduction. Goes beyond rate-shopping — uses features, cash flow optimisation, and smart structuring to help clients get ahead faster.",
    detailedDesc: "Our Owner-Occupied Home Loans service takes a strategic approach to home financing. We believe that finding the right home loan involves more than just comparing interest rates - it's about structuring your mortgage to align with your long-term financial goals and lifestyle aspirations. We analyze your complete financial picture to recommend loan structures that minimize interest payments, accelerate equity building, and provide the flexibility you need for life's changes. Whether you're a first-time homebuyer or looking to upgrade, we help you navigate the complex lending landscape with confidence, ensuring your home loan becomes a strategic asset rather than just a necessary expense.",
    img: "https://placehold.co/600x400",
    icon: "/service2.svg",
    benefits: ['Benefit 1', 'Benefit 2', 'Benefit 3'],
    features: [
      "Interest Rate Optimization",
      "Debt Reduction Strategies",
      "Cash Flow Management", 
      "Loan Feature Selection",
      "Long-term Financial Planning",
      "Smart Structuring"
    ]
  },
  {
    id: "investment-loans",
    tag: "Investment loans",
    title: "Smart Investment Loan Options",
    subtitle: "Strategic lending for new and experienced property investors",
    desc: "Strategic lending for new and experienced property investors. Helps clients understand how loan structures support growth, cash flow, and long-term investment plans. Works alongside accountants to ensure alignment with broader financial strategies.",
    detailedDesc: "Our Smart Investment Loan Options service is designed for investors at every stage of their property journey. We understand that investment property financing requires a different approach than owner-occupied lending. Our team works closely with you and your accountant to develop loan structures that maximize your investment potential while managing risk effectively. We focus on creating portfolios that generate sustainable cash flow, capitalize on growth opportunities, and align with your overall wealth-building strategy. From first-time investors building their initial portfolio to experienced investors optimizing complex structures, we provide the strategic guidance and lending solutions needed to achieve your investment objectives.",
    img: "https://placehold.co/600x400",
    icon: "/service3.svg",
    benefits: ['Benefit 1', 'Benefit 2', 'Benefit 3'],
    features: [
      "Investment Strategy",
      "Cash Flow Analysis",
      "Portfolio Growth Planning",
      "Risk Assessment", 
      "Tax Optimization",
      "Accountant Collaboration"
    ]
  },
  {
    id: "loan-refinancing",
    tag: "Loan Refinancing",
    title: "Strategic Loan Refinancing", 
    subtitle: "A full structural review rather than a simple rate comparison",
    desc: "A full structural review rather than a simple rate comparison. Models multiple structure options to reduce interest, increase flexibility, and shorten the life of the loan. Combines competitive rates with smarter long-term design.",
    detailedDesc: "Our Strategic Loan Refinancing service goes far beyond simply finding a lower interest rate. We conduct comprehensive reviews of your existing loan structures, analyzing how they fit within your current financial situation and future goals. Using advanced modeling techniques, we compare multiple refinancing scenarios to identify opportunities for interest savings, improved cash flow, and accelerated debt reduction. We consider factors like offset accounts, redraw facilities, split loans, and repayment strategies to create a refinancing solution that not only saves you money today but positions you for greater financial success tomorrow. Our approach ensures that refinancing becomes a strategic financial decision rather than just a rate-driven reaction.",
    img: "https://placehold.co/600x400",
    icon: "/service4.svg",
    benefits: ['Benefit 1', 'Benefit 2', 'Benefit 3'],
    features: [
      "Structural Review",
      "Interest Reduction Modeling", 
      "Flexibility Enhancement",
      "Loan Life Shortening",
      "Competitive Rate Analysis",
      "Long-term Design Planning"
    ]
  },
  {
    id: "personal-loans",
    tag: "Personal Loans",
    title: "Personal Loans Finance",
    subtitle: "Flexible lending options for vehicles, equipment, and personal purchases", 
    desc: "Flexible lending options for vehicles, equipment, and personal purchases. Advises clients on choices that fit within their long-term borrowing strategy and financial plan.",
    detailedDesc: "Our Personal Loans Finance service provides smart borrowing solutions for a wide range of personal needs, from vehicle purchases and equipment acquisition to personal expenses and debt consolidation. We understand that personal loans should complement your overall financial strategy rather than work against it. That's why we take the time to understand your complete financial picture before recommending any borrowing solution. We help you choose loan terms, structures, and features that align with your cash flow, financial goals, and risk tolerance. Whether you're financing a new car, upgrading equipment for your side business, or consolidating higher-interest debt, we ensure your personal borrowing supports your journey toward financial success.",
    img: "https://placehold.co/600x400",
    icon: "/service5.svg",
    benefits: ['Benefit 1', 'Benefit 2', 'Benefit 3'],
    features: [
      "Flexible Lending Options",
      "Vehicle Financing",
      "Equipment Purchases", 
      "Personal Expense Management",
      "Long-term Strategy Alignment",
      "Financial Plan Integration"
    ]
  },
];

export  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

export  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1], // easeOut
      },
    },
  };

export  const badgeVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

export  const imageVariants: Variants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

export const slideInFromLeft: Variants = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export const slideInFromRight: Variants = {
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export const stepVariants: Variants = {
  enter: { x: 300, opacity: 0 },
  center: { x: 0, opacity: 1 },
  exit: { x: -300, opacity: 0 }
};

// Form Data Types
export interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  jobTitle: string;
  timeline: string;
  loanType: string;
  investmentExperience: string;
  message: string;
}

export interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  timeline?: string;
  loanType?: string;
  message?: string;
}

// Validation Functions
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
  return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
};

export const validateStep1 = (data: FormData): FormErrors => {
  const errors: FormErrors = {};

  if (!data.firstName.trim()) {
    errors.firstName = 'First name is required';
  } else if (data.firstName.length < 2) {
    errors.firstName = 'First name must be at least 2 characters';
  }

  if (!data.lastName.trim()) {
    errors.lastName = 'Last name is required';
  } else if (data.lastName.length < 2) {
    errors.lastName = 'Last name must be at least 2 characters';
  }

  if (!data.email.trim()) {
    errors.email = 'Email is required';
  } else if (!validateEmail(data.email)) {
    errors.email = 'Please enter a valid email address';
  }

  if (!data.phone.trim()) {
    errors.phone = 'Phone number is required';
  } else if (!validatePhone(data.phone)) {
    errors.phone = 'Please enter a valid phone number';
  }

  return errors;
};

export const validateStep2 = (data: FormData): FormErrors => {
  const errors: FormErrors = {};

  if (!data.timeline) {
    errors.timeline = 'Please select your preferred timeline';
  }

  if (!data.loanType) {
    errors.loanType = 'Please select a loan type';
  }

  return errors;
};

export const validateStep3 = (data: FormData): FormErrors => {
  const errors: FormErrors = {};

  if (!data.message.trim()) {
    errors.message = 'Please tell us about your financial goals';
  } else if (data.message.length < 10) {
    errors.message = 'Please provide more details about your goals (minimum 10 characters)';
  }

  return errors;
};

export const validateCurrentStep = (currentStep: number, data: FormData): FormErrors => {
  switch (currentStep) {
    case 1:
      return validateStep1(data);
    case 2:
      return validateStep2(data);
    case 3:
      return validateStep3(data);
    default:
      return {};
  }
};