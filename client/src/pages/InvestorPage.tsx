
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const sections = [
  {
    title: "Executive Summary",
    content: "GenXReality is set to transform virtual reality (VR) in India by introducing a standalone VR headset priced under ₹20,000—33% cheaper than existing market options. Targeting India's rapidly expanding VR market, projected to reach $1 billion by 2028, we address the critical affordability barrier that limits adoption across gaming, education, and workforce training."
  },
  {
    title: "Market Opportunity",
    content: "India's VR market is projected to reach $1 billion by 2028, with a CAGR of 38%. Our solution bridges the affordability gap with a standalone VR headset priced at ₹20,000, designed and manufactured in India."
  },
  {
    title: "Target Market",
    content: "Gaming (40%): 400 million gamers\nEducation (35%): $10 billion edtech market\nEnterprise (25%): 15 million SMEs"
  },
  {
    title: "Financial Highlights",
    content: "Year 1: ₹10 crore revenue\nYear 3: ₹100 crore revenue\nBreak-even: 2,500 units"
  },
  {
    title: "Investment Opportunity",
    content: "Seeking ₹2 crore funding\n10% equity stake\n10x potential ROI in 3 years"
  }
];

export default function InvestorPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-background text-foreground py-20"
    >
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Investor Relations
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-[0_0_20px_rgba(0,255,0,0.2)] transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl">{section.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="whitespace-pre-line">{section.content}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <a href="mailto:akvamshi33@gmail.com" className="inline-flex items-center justify-center px-8 py-4 font-medium rounded-lg bg-primary text-primary-foreground hover:bg-primary/90">
            Contact for Investment
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
}
