import { SEO } from "@/components/SEO";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Clock, Users, MessageCircle, BookOpen, Star, Video, ArrowRight } from "lucide-react";
import Link from "next/link";

const upcomingEvents = [
  {
    id: "chatgpt-workshop",
    title: "ChatGPT Productivity Workshop",
    type: "Workshop",
    date: "June 15, 2026",
    time: "2:00 PM EST",
    duration: "90 min",
    host: "Sarah Mitchell",
    attendees: 47,
    maxAttendees: 100,
    description: "Learn how to 10x your productivity with ChatGPT. Live demos, Q&A, and practical templates you can use immediately.",
    tags: ["Beginner-Friendly", "Free"],
  },
  {
    id: "ai-real-estate",
    title: "AI for Real Estate Marketing",
    type: "Webinar",
    date: "June 18, 2026",
    time: "6:00 PM EST",
    duration: "60 min",
    host: "David Park",
    attendees: 32,
    maxAttendees: 50,
    description: "Discover how top realtors use AI to create stunning property listings, social content, and email campaigns.",
    tags: ["Real Estate", "Pro"],
  },
  {
    id: "ai-tools-demo",
    title: "Monthly Tool Demo: Creatrr",
    type: "Demo",
    date: "June 22, 2026",
    time: "1:00 PM EST",
    duration: "45 min",
    host: "Emily Hart",
    attendees: 28,
    maxAttendees: 75,
    description: "Deep dive into Creatrr's visual content creation features. See real examples from successful users.",
    tags: ["Tools Demo", "Free"],
  },
  {
    id: "qa-session",
    title: "Community Q&A: AI Strategy",
    type: "Q&A",
    date: "June 25, 2026",
    time: "3:00 PM EST",
    duration: "60 min",
    host: "James Chen",
    attendees: 19,
    maxAttendees: 40,
    description: "Bring your AI questions! Open discussion on implementing AI in your business workflow.",
    tags: ["Community", "Free"],
  },
];

const userGuides = [
  {
    id: "email-sequences",
    title: "Creating Email Sequences with AI",
    author: "Michael Torres",
    authorRole: "Email Marketing Specialist",
    readTime: "8 min",
    category: "Marketing",
    rating: 4.9,
    votes: 156,
    views: 2847,
    description: "Step-by-step guide to building automated email sequences that convert using AI-powered personalization.",
    tags: ["Email", "Automation", "ChatGPT"],
  },
  {
    id: "listing-descriptions",
    title: "Writing Compelling Property Listings",
    author: "Rachel Kim",
    authorRole: "Real Estate Agent",
    readTime: "6 min",
    category: "Real Estate",
    rating: 5.0,
    votes: 203,
    views: 3912,
    description: "My framework for creating property descriptions that sell faster using Writrr and ChatGPT.",
    tags: ["Real Estate", "Writrr", "Content"],
  },
  {
    id: "social-calendar",
    title: "Building a 30-Day Social Media Calendar",
    author: "Lisa Wong",
    authorRole: "Social Media Manager",
    readTime: "10 min",
    category: "Social Media",
    rating: 4.8,
    votes: 124,
    views: 2156,
    description: "How I plan and batch-create a month of social content in 2 hours using AI tools.",
    tags: ["Social Media", "Planning", "Creatrr"],
  },
  {
    id: "prompt-library",
    title: "My Essential Prompt Library for Business",
    author: "Alex Johnson",
    authorRole: "Business Coach",
    readTime: "12 min",
    category: "Productivity",
    rating: 4.9,
    votes: 287,
    views: 4521,
    description: "50+ proven prompts for common business tasks. Copy, paste, and customize for your needs.",
    tags: ["Prompts", "Templates", "ChatGPT"],
  },
  {
    id: "client-presentations",
    title: "Creating Client Presentations with AI",
    author: "Sarah Mitchell",
    authorRole: "Business Consultant",
    readTime: "7 min",
    category: "Presentations",
    rating: 4.7,
    votes: 98,
    views: 1834,
    description: "Transform your client pitches with AI-generated slides, talking points, and visual assets.",
    tags: ["Presentations", "Creatrr", "Client Work"],
  },
  {
    id: "lead-followup",
    title: "Automated Lead Follow-up Systems",
    author: "David Park",
    authorRole: "Real Estate Agent",
    readTime: "9 min",
    category: "Sales",
    rating: 4.8,
    votes: 167,
    views: 2943,
    description: "Never lose a lead again. How I use Trackrr and AI to automate follow-up while staying personal.",
    tags: ["Sales", "Automation", "Trackrr"],
  },
];

export default function ResourcesPage() {
  return (
    <>
      <SEO
        title="Resource Hub - Events & Guides | AI Growth Comm"
        description="Join live workshops, access user-generated guides, and connect with our community of AI-powered business owners."
      />
      <Navigation />
      <main className="min-h-screen pt-20">
        <section className="py-16 bg-gradient-to-b from-accent/5 to-background">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <Badge variant="secondary" className="mb-4">
                Community Resources
              </Badge>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Learn from{" "}
                <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                  the Community
                </span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Join live events, explore user-generated guides, and connect with thousands of business owners mastering AI together.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <Tabs defaultValue="events" className="max-w-6xl mx-auto">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
                <TabsTrigger value="events" className="gap-2">
                  <Calendar className="w-4 h-4" />
                  Live Events
                </TabsTrigger>
                <TabsTrigger value="guides" className="gap-2">
                  <BookOpen className="w-4 h-4" />
                  User Guides
                </TabsTrigger>
              </TabsList>

              <TabsContent value="events" className="space-y-8">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h2 className="font-serif text-3xl font-bold mb-2">Upcoming Events</h2>
                    <p className="text-muted-foreground">
                      Join live workshops, webinars, and Q&A sessions with experts and community members.
                    </p>
                  </div>
                  <Button variant="outline" className="hidden md:flex">
                    View Calendar
                  </Button>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {upcomingEvents.map((event) => (
                    <Card key={event.id} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-accent/20">
                      <CardHeader>
                        <div className="flex items-start justify-between mb-3">
                          <Badge variant="outline" className="bg-accent/10 text-accent border-accent/20">
                            {event.type}
                          </Badge>
                          <div className="flex gap-2">
                            {event.tags.map((tag) => (
                              <Badge key={tag} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <CardTitle className="text-xl mb-2">{event.title}</CardTitle>
                        <CardDescription>{event.description}</CardDescription>
                      </CardHeader>

                      <CardContent className="space-y-4">
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Calendar className="w-4 h-4" />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Clock className="w-4 h-4" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Video className="w-4 h-4" />
                            <span>{event.duration}</span>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Users className="w-4 h-4" />
                            <span>
                              {event.attendees}/{event.maxAttendees} registered
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 pt-3 border-t">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm">
                            {event.host.split(" ").map((n) => n[0]).join("")}
                          </div>
                          <div>
                            <p className="text-sm font-medium">{event.host}</p>
                            <p className="text-xs text-muted-foreground">Host</p>
                          </div>
                        </div>
                      </CardContent>

                      <CardFooter>
                        <Button className="w-full group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                          Register Now
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>

                <div className="text-center pt-8">
                  <Button variant="outline" size="lg">
                    View All Events
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="guides" className="space-y-8">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h2 className="font-serif text-3xl font-bold mb-2">Community Guides</h2>
                    <p className="text-muted-foreground">
                      Learn from real users sharing their AI workflows, templates, and success strategies.
                    </p>
                  </div>
                  <Button className="hidden md:flex bg-gradient-to-r from-primary to-accent">
                    Submit Your Guide
                  </Button>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {userGuides.map((guide) => (
                    <Card key={guide.id} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20 flex flex-col">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-3">
                          <Badge variant="outline">{guide.category}</Badge>
                          <div className="flex items-center gap-1">
                            <Star className="w-3 h-3 fill-destructive text-destructive" />
                            <span className="text-sm font-semibold">{guide.rating}</span>
                            <span className="text-xs text-muted-foreground">({guide.votes})</span>
                          </div>
                        </div>
                        <CardTitle className="text-lg mb-2 line-clamp-2">{guide.title}</CardTitle>
                        <CardDescription className="line-clamp-2">{guide.description}</CardDescription>
                      </CardHeader>

                      <CardContent className="flex-1">
                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent font-semibold">
                              {guide.author.split(" ").map((n) => n[0]).join("")}
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium truncate">{guide.author}</p>
                              <p className="text-xs text-muted-foreground truncate">{guide.authorRole}</p>
                            </div>
                          </div>

                          <div className="flex items-center justify-between text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {guide.readTime}
                            </span>
                            <span className="flex items-center gap-1">
                              <MessageCircle className="w-3 h-3" />
                              {guide.views.toLocaleString()} views
                            </span>
                          </div>

                          <div className="flex flex-wrap gap-2">
                            {guide.tags.slice(0, 3).map((tag) => (
                              <Badge key={tag} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>

                      <CardFooter>
                        <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          Read Guide
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>

                <div className="text-center pt-8">
                  <Button variant="outline" size="lg">
                    Browse All Guides
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
                Join Our Growing Community
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Get exclusive access to workshops, connect with peers, and share your AI journey.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-gradient-to-r from-accent to-primary">
                  Join Free Community
                </Button>
                <Link href="/pricing">
                  <Button size="lg" variant="outline">
                    View Pro Benefits
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