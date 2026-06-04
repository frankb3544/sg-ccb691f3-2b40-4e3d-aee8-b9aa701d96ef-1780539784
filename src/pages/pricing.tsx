import { SEO } from "@/components/SEO";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Sparkles, Zap, Crown } from "lucide-react";

const plans = [
  {
    id: "free",
    name: "Free",
    icon: Sparkles,
    price: 0,
    period: "forever",
    description: "Perfect for getting started with AI tools",
    popular: false,
    features: [
      "Access to 1 AI tool of your choice",
      "Basic learning resources",
      "Community access",
      "Monthly webinars",
      "Email support",
    ],
    limitations: [
      "Limited to 1 tool",
      "Basic features only",
      "Standard support response time",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    icon: Crown,
    price: 49,
    period: "month",
    description: "Full access to all AI tools and premium resources",
    popular: true,
    features: [
      "Access to all 4 AI tools (Writrr, Trackrr, Inspirr, Creatrr)",
      "Full tool feature access",
      "All courses and learning materials",
      "Priority community support",
      "Weekly live Q&A sessions",
      "Advanced templates and workflows",
      "Priority feature requests",
      "Early access to new tools",
    ],
    limitations: [],
  },
];

const tools = [
  {
    name: "Writrr",
    description: "AI-powered writing assistant for emails, listings, and content",
    free: "Limited prompts",
    pro: "Unlimited access",
  },
  {
    name: "Trackrr",
    description: "Lead tracking and follow-up automation",
    free: "Basic tracking",
    pro: "Full automation suite",
  },
  {
    name: "Inspirr",
    description: "Content ideation and planning tool",
    free: "Limited ideas",
    pro: "Unlimited creativity",
  },
  {
    name: "Creatrr",
    description: "Visual content creation and design",
    free: "Basic templates",
    pro: "Pro templates + custom",
  },
];

const faqs = [
  {
    question: "Can I switch from Free to Pro anytime?",
    answer: "Absolutely! You can upgrade to Pro at any time. Your Free tool access will remain, and you'll gain immediate access to all 4 tools.",
  },
  {
    question: "Which tool should I choose on the Free plan?",
    answer: "We recommend Writrr for most users as it covers the widest range of business needs. However, choose based on your immediate priority: Writrr for content, Trackrr for sales, Inspirr for planning, or Creatrr for design.",
  },
  {
    question: "Is the Pro plan billed annually or monthly?",
    answer: "Pro is billed monthly at $49/month. You can cancel anytime with no long-term commitment.",
  },
  {
    question: "Do I get support on the Free plan?",
    answer: "Yes! All members get email support and access to our community forums. Pro members receive priority support with faster response times.",
  },
  {
    question: "Can I try Pro before committing?",
    answer: "We offer a 14-day free trial of Pro for all new sign-ups. Cancel before the trial ends and you won't be charged.",
  },
];

export default function PricingPage() {
  return (
    <>
      <SEO
        title="Pricing - Choose Your Plan | AI Growth Comm"
        description="Start free with 1 AI tool or go Pro for full access to Writrr, Trackrr, Inspirr, and Creatrr. Flexible pricing for realtors and small business owners."
      />
      <Navigation />
      <main className="min-h-screen pt-20">
        <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <Badge variant="secondary" className="mb-4">
                Simple Pricing
              </Badge>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Start Free,{" "}
                <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                  Grow with Pro
                </span>
              </h1>
              <p className="text-lg text-muted-foreground">
                No hidden fees. No surprises. Choose the plan that fits your AI journey.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {plans.map((plan) => {
                const Icon = plan.icon;
                return (
                  <Card
                    key={plan.id}
                    className={`relative ${
                      plan.popular
                        ? "border-2 border-primary shadow-2xl shadow-primary/20 scale-105"
                        : "border-2 border-border"
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                        <Badge className="bg-gradient-to-r from-primary to-accent text-white px-4 py-1 shadow-lg">
                          Most Popular
                        </Badge>
                      </div>
                    )}

                    <CardHeader className="text-center pb-8">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                        <Icon
                          className={`w-8 h-8 ${
                            plan.popular
                              ? "text-primary"
                              : "text-foreground/70"
                          }`}
                        />
                      </div>
                      <CardTitle className="text-2xl font-serif font-bold">
                        {plan.name}
                      </CardTitle>
                      <CardDescription className="text-base mt-2">
                        {plan.description}
                      </CardDescription>
                      <div className="mt-6">
                        <div className="flex items-baseline justify-center gap-2">
                          <span className="text-5xl font-bold font-serif">
                            ${plan.price}
                          </span>
                          <span className="text-muted-foreground">
                            /{plan.period}
                          </span>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <div className="space-y-3">
                        {plan.features.map((feature, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <div className="mt-0.5 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                              <Check className="w-3 h-3 text-primary" />
                            </div>
                            <span className="text-sm text-foreground/80">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>

                      {plan.limitations.length > 0 && (
                        <div className="pt-4 border-t space-y-2">
                          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                            Limitations
                          </p>
                          {plan.limitations.map((limitation, index) => (
                            <p key={index} className="text-sm text-muted-foreground">
                              • {limitation}
                            </p>
                          ))}
                        </div>
                      )}
                    </CardContent>

                    <CardFooter>
                      <Button
                        size="lg"
                        className={`w-full ${
                          plan.popular
                            ? "bg-gradient-to-r from-primary to-accent text-white shadow-lg hover:shadow-xl"
                            : ""
                        }`}
                        variant={plan.popular ? "default" : "outline"}
                      >
                        {plan.id === "free" ? "Start Free" : "Start Pro Trial"}
                        {plan.popular && <Zap className="w-4 h-4 ml-2" />}
                      </Button>
                    </CardFooter>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
                  Compare Tool Access
                </h2>
                <p className="text-muted-foreground">
                  See what you get with each plan across all 4 AI tools
                </p>
              </div>

              <div className="bg-card rounded-2xl border-2 border-border shadow-xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b-2 border-border">
                        <th className="text-left p-6 font-serif font-bold text-lg">
                          Tool
                        </th>
                        <th className="text-center p-6 font-serif font-bold text-lg">
                          Free
                        </th>
                        <th className="text-center p-6 font-serif font-bold text-lg bg-primary/5">
                          Pro
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {tools.map((tool, index) => (
                        <tr
                          key={tool.name}
                          className={index !== tools.length - 1 ? "border-b border-border" : ""}
                        >
                          <td className="p-6">
                            <div>
                              <p className="font-semibold mb-1">{tool.name}</p>
                              <p className="text-sm text-muted-foreground">
                                {tool.description}
                              </p>
                            </div>
                          </td>
                          <td className="p-6 text-center">
                            <span className="text-sm text-muted-foreground">
                              {tool.free}
                            </span>
                          </td>
                          <td className="p-6 text-center bg-primary/5">
                            <div className="flex items-center justify-center gap-2">
                              <Check className="w-4 h-4 text-primary" />
                              <span className="text-sm font-medium text-primary">
                                {tool.pro}
                              </span>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mt-8 text-center">
                <p className="text-sm text-muted-foreground mb-4">
                  Free plan: Choose 1 tool to access. Pro plan: Get all 4 tools with full features.
                </p>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-accent text-white"
                >
                  Upgrade to Pro
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-muted-foreground">
                  Everything you need to know about our pricing
                </p>
              </div>

              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <Card key={index} className="border-2">
                    <CardHeader>
                      <CardTitle className="text-lg">{faq.question}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-b from-accent/5 to-background">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join thousands of realtors and business owners already growing with AI Growth Comm.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-gradient-to-r from-primary to-accent text-white">
                  Start Free Today
                </Button>
                <Button size="lg" variant="outline">
                  Schedule a Demo
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-6">
                14-day Pro trial • No credit card required • Cancel anytime
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}