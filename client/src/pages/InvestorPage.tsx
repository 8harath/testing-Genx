import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, Mail, TrendingUp, Users, Box, School, Building2 } from "lucide-react";

const marketSegments = [
  {
    icon: Users,
    title: "Gaming (40%)",
    stats: "400M gamers",
    description: "Only 5% VR penetration due to price"
  },
  {
    icon: School,
    title: "Education (35%)",
    stats: "₹10B edtech market",
    description: "Rapid VR adoption for virtual labs"
  },
  {
    icon: Building2,
    title: "Enterprise (25%)",
    stats: "15M SMEs",
    description: "VR upskilling for industries"
  }
];

export default function InvestorPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-[80vh] flex items-center justify-center bg-gradient-to-r from-primary/10 to-background"
      >
        <div className="container text-center">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Join the VR Revolution
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto"
          >
            Back India's First Affordable Standalone Headset. Transforming virtual reality with a ₹20,000 device built for India's gamers, learners, and professionals.
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex gap-4 justify-center"
          >
            <Button size="lg" className="gap-2">
              <Download size={20} /> Download Pitch
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <Mail size={20} /> Get in Touch
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Company Snapshot */}
      <section className="py-20 bg-background/95">
        <div className="container">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            Company Snapshot
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Funding Ask</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-primary">₹2 Crore</p>
                <p className="text-muted-foreground">for 10% equity</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Valuation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-primary">₹20 Crore</p>
                <p className="text-muted-foreground">Pre-money</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Market Size</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-primary">$1B</p>
                <p className="text-muted-foreground">India VR Market by 2028</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* The Opportunity */}
      <section className="py-20 bg-background">
        <div className="container">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            The Opportunity
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card>
              <CardHeader>
                <CardTitle>The Problem</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  VR headsets like the Oculus Quest 2 are priced over ₹30,000—far beyond most Indian households' annual tech budgets. Imported devices lack India-specific ergonomics, design, and regulatory compliance.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>The Solution</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  A ₹20,000 locally manufactured headset with 3DoF tracking, lightweight design, and strong VR performance. Built in India, for India—this device unlocks VR for 500 million+ price-sensitive users.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Market Segments */}
      <section className="py-20 bg-background/95">
        <div className="container">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            Market Segments
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {marketSegments.map((segment, index) => (
              <Card key={index}>
                <CardHeader>
                  <segment.icon className="w-12 h-12 text-primary mb-4" />
                  <CardTitle>{segment.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-primary mb-2">{segment.stats}</p>
                  <p className="text-muted-foreground">{segment.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Financial Projections */}
      <section className="py-20 bg-background/95">
        <div className="container">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            Financial Projections
          </motion.h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-4">Year</th>
                  <th className="text-left py-4">Units Sold</th>
                  <th className="text-left py-4">Revenue</th>
                  <th className="text-left py-4">Profit</th>
                  <th className="text-left py-4">Margin</th>
                </tr>
              </thead>
              <tbody>
                {financialProjections.map((year, index) => (
                  <motion.tr
                    key={year.year}
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="border-b"
                  >
                    <td className="py-4">{year.year}</td>
                    <td className="py-4">{year.units}</td>
                    <td className="py-4">{year.revenue}</td>
                    <td className="py-4">{year.profit}</td>
                    <td className="py-4">{year.margin}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container text-center">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-8"
          >
            Let's Talk
          </motion.h2>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-lg mx-auto"
          >
            <p className="text-xl mb-4">Founder: Akkinepally Krishna Vamshi</p>
            <p className="text-muted-foreground mb-8">Email: akvamshi33@gmail.com</p>
            <Button size="lg" className="gap-2">
              <Mail size={20} /> Schedule a Call
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

const financialProjections = [
  { year: "Year 1", units: "5,000", revenue: "₹10 Cr", profit: "₹1 Cr", margin: "10%" },
  { year: "Year 3", units: "50,000", revenue: "₹100 Cr", profit: "₹15 Cr", margin: "15%" }
];