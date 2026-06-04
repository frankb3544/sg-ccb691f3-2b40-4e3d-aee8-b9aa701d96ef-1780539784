import { SEO } from "@/components/SEO";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, Check, Quote, ArrowRight, Sparkles, FileText, Lightbulb, Users } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";

interface Review {
  author: string;
  role: string;
  rating: number;
  text: string;
}

interface SuccessStory {
  name: string;
  business: string;
  result: string;
  story: string;
}

interface UseCase {
  title: string;
  description: string;
}

interface ToolData {
  name: string;
  tagline: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  rating: number;
  reviews: number;
  category: string[];
  features: string[];
  useCases: UseCase[];
  reviewsList: Review[];
  successStories: SuccessStory[];
}

const toolsData: Record<string, ToolData> = {
  writrr: {
    name: "Writrr",
    tagline: "AI-Powered Content Creation",
    description: "Generate compelling property descriptions, email campaigns, and social media posts in seconds. Writrr uses advanced AI to understand your brand voice and create content that converts.",
    icon: FileText,
    rating: 4.8,
    reviews: 342,
    category: ["realtor", "small-biz"],
    features: [
      "Generate property descriptions in seconds",
      "Create email campaigns with AI assistance",
      "Social media post generation",
      "Brand voice customization",
      "Multi-language support",
      "SEO-optimized content",
    ],
    useCases: [
      {
        title: "Property Listings",
        description: "Create compelling property descriptions that highlight key features and attract potential buyers.",
      },
      {
        title: "Email Marketing",
        description: "Generate personalized email campaigns that engage your audience and drive conversions.",
      },
      {
        title: "Social Media",
        description: "Craft engaging social media posts that build your brand and attract followers.",
      },
    ],
    reviewsList: [
      {
        author: "Sarah Mitchell",
        role: "Real Estate Agent",
        rating: 5,
        text: "Writrr has saved me countless hours writing property descriptions. The AI understands exactly what buyers want to hear!",
      },
      {
        author: "James Chen",
        role: "Small Business Owner",
        rating: 5,
        text: "I use Writrr for all my marketing content. It's like having a professional copywriter on my team 24/7.",
      },
      {
        author: "Maria Rodriguez",
        role: "Marketing Consultant",
        rating: 4,
        text: "The quality of content is impressive. My clients love the results and I love the time savings.",
      },
    ],
    successStories: [
      {
        name: "Jennifer Lee",
        business: "Downtown Realty Group",
        result: "Increased listing engagement by 65%",
        story: "After implementing Writrr for our property descriptions, we saw a significant uptick in showing requests and buyer inquiries.",
      },
      {
        name: "Marcus Brown",
        business: "Local Coffee Roasters",
        result: "Tripled social media engagement",
        story: "Writrr helped us maintain a consistent posting schedule with quality content that resonates with our audience.",
      },
    ],
  },
  trackrr: {
    name: "Trackrr",
    tagline: "Smart Analytics & Insights",
    description: "Track leads, analyze market trends, and get AI-driven recommendations for your business. Trackrr turns your data into actionable insights.",
    icon: Sparkles,
    rating: 4.9,
    reviews: 287,
    category: ["realtor", "small-biz"],
    features: [
      "Lead tracking and management",
      "Market trend analysis",
      "AI-driven recommendations",
      "Custom dashboards",
      "Real-time notifications",
      "Performance metrics",
    ],
    useCases: [
      {
        title: "Lead Management",
        description: "Track and nurture leads with intelligent follow-up suggestions and automated workflows.",
      },
      {
        title: "Market Analysis",
        description: "Understand market trends and identify opportunities before your competition.",
      },
      {
        title: "Performance Tracking",
        description: "Monitor your business metrics and get AI recommendations for improvement.",
      },
    ],
    reviewsList: [
      {
        author: "David Park",
        role: "Real Estate Broker",
        rating: 5,
        text: "Trackrr's insights have helped me close more deals. The AI recommendations are spot-on.",
      },
      {
        author: "Lisa Wong",
        role: "Business Consultant",
        rating: 5,
        text: "The analytics dashboard gives me everything I need to advise my clients effectively.",
      },
      {
        author: "Robert Taylor",
        role: "Property Manager",
        rating: 5,
        text: "Lead tracking has never been easier. I can see exactly where each prospect is in the funnel.",
      },
    ],
    successStories: [
      {
        name: "Amanda Stevens",
        business: "Stevens Properties",
        result: "50% increase in conversion rate",
        story: "Trackrr's AI recommendations helped us identify the best times to follow up with leads, dramatically improving our close rate.",
      },
    ],
  },
  inspirr: {
    name: "Inspirr",
    tagline: "Creative Campaign Generator",
    description: "Get inspired with AI-generated marketing campaigns, visual concepts, and branding ideas. Never run out of creative ideas again.",
    icon: Lightbulb,
    rating: 4.7,
    reviews: 219,
    category: ["small-biz"],
    features: [
      "AI-generated campaign ideas",
      "Visual concept generation",
      "Branding suggestions",
      "Seasonal campaign templates",
      "Industry-specific ideas",
      "Trend analysis",
    ],
    useCases: [
      {
        title: "Marketing Campaigns",
        description: "Generate creative campaign concepts for any season, event, or product launch.",
      },
      {
        title: "Brand Development",
        description: "Get AI-powered suggestions for brand positioning, messaging, and visual identity.",
      },
      {
        title: "Content Strategy",
        description: "Plan your content calendar with AI-generated themes and topics.",
      },
    ],
    reviewsList: [
      {
        author: "Emily Hart",
        role: "Marketing Director",
        rating: 5,
        text: "Inspirr has become my go-to tool for brainstorming. It generates ideas I would never have thought of!",
      },
      {
        author: "Michael Torres",
        role: "Creative Director",
        rating: 5,
        text: "The AI understands our brand and generates concepts that align perfectly with our vision.",
      },
      {
        author: "Rachel Green",
        role: "Entrepreneur",
        rating: 4,
        text: "As a solo business owner, Inspirr gives me the creative firepower of a full marketing team.",
      },
    ],
    successStories: [
      {
        name: "Sophie Martin",
        business: "Artisan Bakery Co.",
        result: "Doubled customer engagement",
        story: "Using Inspirr's seasonal campaign ideas, we created marketing that truly resonates with our community.",
      },
    ],
  },
  creatrr: {
    name: "Creatrr",
    tagline: "Visual Content Studio",
    description: "Create stunning graphics, edit photos, and design marketing materials with AI assistance. Professional-quality visuals without the learning curve.",
    icon: Users,
    rating: 4.8,
    reviews: 401,
    category: ["realtor", "small-biz"],
    features: [
      "AI-powered photo editing",
      "Graphic design templates",
      "Background removal",
      "Smart image enhancement",
      "Brand kit management",
      "Social media sizing",
    ],
    useCases: [
      {
        title: "Property Photos",
        description: "Enhance listing photos with AI-powered editing for maximum appeal.",
      },
      {
        title: "Marketing Materials",
        description: "Design professional flyers, brochures, and social graphics in minutes.",
      },
      {
        title: "Brand Visuals",
        description: "Maintain consistent visual branding across all your marketing channels.",
      },
    ],
    reviewsList: [
      {
        author: "Nicole Adams",
        role: "Real Estate Agent",
        rating: 5,
        text: "My listing photos look amazing now. Creatrr makes it so easy to create professional-looking materials.",
      },
      {
        author: "Kevin Martinez",
        role: "Restaurant Owner",
        rating: 5,
        text: "I create all my menu boards and social media graphics with Creatrr. It's incredibly intuitive.",
      },
      {
        author: "Samantha Lee",
        role: "Event Planner",
        rating: 5,
        text: "The template library is fantastic. I can customize everything to match each client's brand perfectly.",
      },
    ],
    successStories: [
      {
        name: "Tom Wilson",
        business: "Luxury Real Estate Group",
        result: "90% faster content creation",
        story: "Creatrr cut our design time from hours to minutes, allowing us to market properties faster than ever.",
      },
    ],
  },
};

export default function ToolDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  
  const tool = id && typeof id === "string" ? toolsData[id as keyof typeof toolsData] : null;

  if (!tool) {
    return (
      <>
        <SEO title="Tool Not Found - AI Growth Comm" />
        <Navigation />
        <main className="min-h-screen pt-20 flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-serif text-3xl font-bold mb-4">Tool Not Found</h1>
            <Link href="/tools">
              <Button>Browse All Tools</Button>
            </Link>
          </div>
        </main>
      </>
    );
  }

  const Icon = tool.icon;

  return (
    <>
      <SEO
        title={`${tool.name} - ${tool.tagline} | AI Growth Comm`}
        description={tool.description}
      />
      <Navigation />
      <main className="min-h-screen pt-20">
        <section className="py-12 bg-gradient-to-b from-primary/5 to-background">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <Link href="/tools" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors">
                ← Back to Tools
              </Link>

              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-primary to-accent w-fit mb-6">
                    <Icon className="w-12 h-12 text-white" />
                  </div>
                  <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">{tool.name}</h1>
                  <p className="text-xl text-muted-foreground mb-6">{tool.tagline}</p>
                  <p className="text-foreground/80 mb-6">{tool.description}</p>

                  <div className="flex items-center gap-6 mb-8">
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`w-5 h-5 ${
                              star <= Math.floor(tool.rating)
                                ? "fill-destructive text-destructive"
                                : "text-muted"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="font-semibold">{tool.rating}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {tool.reviews} reviews
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {tool.category.map((cat) => (
                      <Badge key={cat} variant="secondary">
                        {cat === "realtor" ? "Realtor" : "Small Business"}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <Link href="/pricing">
                      <Button size="lg" className="bg-gradient-to-r from-primary to-accent">
                        Get Started Free
                      </Button>
                    </Link>
                    <Button size="lg" variant="outline">
                      Watch Demo
                    </Button>
                  </div>
                </div>

                <div className="bg-muted/30 rounded-2xl p-8 aspect-video flex items-center justify-center border-2 border-dashed border-muted-foreground/20">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Sparkles className="w-8 h-8 text-primary" />
                    </div>
                    <p className="text-muted-foreground font-medium">Demo Video</p>
                    <p className="text-sm text-muted-foreground/60 mt-1">Click to play interactive demo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <Tabs defaultValue="features" className="w-full">
                <TabsList className="grid w-full grid-cols-4 mb-12">
                  <TabsTrigger value="features">Features</TabsTrigger>
                  <TabsTrigger value="use-cases">Use Cases</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                  <TabsTrigger value="success">Success Stories</TabsTrigger>
                </TabsList>

                <TabsContent value="features" className="space-y-6">
                  <div>
                    <h2 className="font-serif text-3xl font-bold mb-8">Key Features</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                      {tool.features.map((feature, index) => (
                        <Card key={index} className="border-2">
                          <CardContent className="p-6 flex items-start gap-4">
                            <div className="p-2 rounded-lg bg-accent/10 shrink-0">
                              <Check className="w-5 h-5 text-accent" />
                            </div>
                            <p className="font-medium">{feature}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="use-cases" className="space-y-6">
                  <div>
                    <h2 className="font-serif text-3xl font-bold mb-8">How You Can Use {tool.name}</h2>
                    <div className="space-y-6">
                      {tool.useCases.map((useCase, index) => (
                        <Card key={index}>
                          <CardHeader>
                            <CardTitle className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                                <ArrowRight className="w-4 h-4 text-primary" />
                              </div>
                              {useCase.title}
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-muted-foreground">{useCase.description}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="reviews" className="space-y-6">
                  <div>
                    <h2 className="font-serif text-3xl font-bold mb-8">
                      What Our Users Say
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                      {tool.reviewsList.map((review, index) => (
                        <Card key={index} className="relative">
                          <Quote className="absolute top-6 right-6 w-8 h-8 text-muted opacity-20" />
                          <CardHeader>
                            <div className="flex items-center gap-2 mb-2">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <Star
                                  key={star}
                                  className={`w-4 h-4 ${
                                    star <= review.rating
                                      ? "fill-destructive text-destructive"
                                      : "text-muted"
                                  }`}
                                />
                              ))}
                            </div>
                            <CardTitle className="text-lg">{review.author}</CardTitle>
                            <p className="text-sm text-muted-foreground">{review.role}</p>
                          </CardHeader>
                          <CardContent>
                            <p className="text-foreground/80 italic">&ldquo;{review.text}&rdquo;</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="success" className="space-y-6">
                  <div>
                    <h2 className="font-serif text-3xl font-bold mb-8">Success Stories</h2>
                    <div className="space-y-6">
                      {tool.successStories.map((story, index) => (
                        <Card key={index} className="border-2 border-accent/20 bg-gradient-to-br from-accent/5 to-transparent">
                          <CardHeader>
                            <div className="flex items-start justify-between mb-4">
                              <div>
                                <CardTitle className="text-xl mb-1">{story.name}</CardTitle>
                                <p className="text-sm text-muted-foreground">{story.business}</p>
                              </div>
                              <Badge variant="secondary" className="bg-destructive/10 text-destructive border-destructive/20">
                                {story.result}
                              </Badge>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <p className="text-foreground/80">{story.story}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
                Ready to Try {tool.name}?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Start with our Free plan or unlock all 4 tools with Pro.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/pricing">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-accent">
                    View Pricing Plans
                  </Button>
                </Link>
                <Link href="/tools">
                  <Button size="lg" variant="outline">
                    Explore More Tools
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