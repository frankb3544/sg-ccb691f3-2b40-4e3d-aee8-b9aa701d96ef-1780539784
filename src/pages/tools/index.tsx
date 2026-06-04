import { SEO } from "@/components/SEO";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Users, FileText, Lightbulb, Star } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const tools = [
  {
    id: "writrr",
    name: "Writrr",
    tagline: "AI-Powered Content Creation",
    description: "Generate compelling property descriptions, email campaigns, and social media posts in seconds.",
    category: ["realtor", "small-biz"],
    icon: FileText,
    rating: 4.8,
    reviews: 342,
    price: "One-time purchase",
    featured: true,
    gradient: "from-primary/20 to-accent/20",
  },
  {
    id: "trackrr",
    name: "Trackrr",
    tagline: "Smart Analytics & Insights",
    description: "Track leads, analyze market trends, and get AI-driven recommendations for your business.",
    category: ["realtor", "small-biz"],
    icon: Sparkles,
    rating: 4.9,
    reviews: 287,
    price: "One-time purchase",
    featured: true,
    gradient: "from-accent/20 to-destructive/20",
  },
  {
    id: "inspirr",
    name: "Inspirr",
    tagline: "Creative Campaign Generator",
    description: "Get inspired with AI-generated marketing campaigns, visual concepts, and branding ideas.",
    category: ["small-biz"],
    icon: Lightbulb,
    rating: 4.7,
    reviews: 219,
    price: "One-time purchase",
    featured: false,
    gradient: "from-destructive/20 to-primary/20",
  },
  {
    id: "creatrr",
    name: "Creatrr",
    tagline: "Visual Content Studio",
    description: "Create stunning graphics, edit photos, and design marketing materials with AI assistance.",
    category: ["realtor", "small-biz"],
    icon: Users,
    rating: 4.8,
    reviews: 401,
    price: "One-time purchase",
    featured: false,
    gradient: "from-accent/20 to-primary/20",
  },
];

export default function ToolsPage() {
  const [filter, setFilter] = useState<"all" | "realtor" | "small-biz">("all");

  const filteredTools = tools.filter((tool) => {
    if (filter === "all") return true;
    return tool.category.includes(filter);
  });

  return (
    <>
      <SEO
        title="AI Tools Marketplace - AI Growth Comm"
        description="Discover powerful AI tools designed for realtors and small business owners. One-time purchase, lifetime access."
      />
      <Navigation />
      <main className="min-h-screen pt-20">
        <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <Badge variant="secondary" className="mb-4">
                4 Powerful Tools
              </Badge>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                AI Tools Built for{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Your Success
                </span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Choose the tools that fit your business. One-time purchase, lifetime access. Free plan includes 1 tool, Pro unlocks all 4.
              </p>

              <div className="flex flex-wrap justify-center gap-3">
                <Button
                  variant={filter === "all" ? "default" : "outline"}
                  onClick={() => setFilter("all")}
                  className="rounded-full"
                >
                  All Tools
                </Button>
                <Button
                  variant={filter === "realtor" ? "default" : "outline"}
                  onClick={() => setFilter("realtor")}
                  className="rounded-full"
                >
                  For Realtors
                </Button>
                <Button
                  variant={filter === "small-biz" ? "default" : "outline"}
                  onClick={() => setFilter("small-biz")}
                  className="rounded-full"
                >
                  For Small Business
                </Button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {filteredTools.map((tool) => {
                const Icon = tool.icon;
                return (
                  <Card
                    key={tool.id}
                    className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20 relative overflow-hidden"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${tool.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                    
                    <CardHeader className="relative">
                      <div className="flex items-start justify-between mb-4">
                        <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-accent">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        {tool.featured && (
                          <Badge variant="secondary" className="bg-destructive/10 text-destructive border-destructive/20">
                            Popular
                          </Badge>
                        )}
                      </div>
                      <CardTitle className="font-serif text-2xl mb-2">{tool.name}</CardTitle>
                      <CardDescription className="text-base font-medium text-foreground/70">
                        {tool.tagline}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="relative">
                      <p className="text-muted-foreground mb-4">{tool.description}</p>
                      
                      <div className="flex items-center gap-4 mb-4">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-destructive text-destructive" />
                          <span className="font-semibold">{tool.rating}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {tool.reviews} reviews
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {tool.category.map((cat) => (
                          <Badge key={cat} variant="outline" className="text-xs">
                            {cat === "realtor" ? "Realtor" : "Small Business"}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>

                    <CardFooter className="relative flex justify-between items-center">
                      <span className="text-sm font-medium text-muted-foreground">
                        {tool.price}
                      </span>
                      <Link href={`/tools/${tool.id}`}>
                        <Button variant="default" className="group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                          View Details
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-b from-accent/5 to-background">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
                Not Sure Which Tools You Need?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Start with our Free plan to try one tool, or go Pro for unlimited access to all 4 AI-powered tools.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/pricing">
                  <Button size="lg" variant="default">
                    Compare Plans
                  </Button>
                </Link>
                <Link href="/learn">
                  <Button size="lg" variant="outline">
                    Learn More About AI
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}