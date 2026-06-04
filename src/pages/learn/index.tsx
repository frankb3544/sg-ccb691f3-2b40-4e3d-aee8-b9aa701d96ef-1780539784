import { SEO } from "@/components/SEO";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { BookOpen, Clock, Award, Star, Play, TrendingUp } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const courses = [
  {
    id: "chatgpt-beginners",
    title: "ChatGPT for Beginners",
    description: "Master the fundamentals of ChatGPT and learn how to use AI for everyday business tasks.",
    instructor: "Sarah Mitchell",
    duration: "2.5 hours",
    level: "Beginner",
    rating: 4.9,
    students: 1247,
    lessons: 12,
    price: "Free",
    category: "free",
    progress: 0,
    thumbnail: "bg-gradient-to-br from-primary/20 to-accent/20",
    featured: true,
  },
  {
    id: "ai-content-mastery",
    title: "AI Content Creation Mastery",
    description: "Learn advanced techniques for creating compelling marketing content with AI tools.",
    instructor: "James Chen",
    duration: "4 hours",
    level: "Intermediate",
    rating: 4.8,
    students: 892,
    lessons: 18,
    price: "$49",
    category: "paid",
    progress: 0,
    thumbnail: "bg-gradient-to-br from-accent/20 to-destructive/20",
    featured: true,
  },
  {
    id: "real-estate-ai",
    title: "AI for Real Estate Professionals",
    description: "Leverage AI to streamline property marketing, lead generation, and client communications.",
    instructor: "David Park",
    duration: "3 hours",
    level: "Intermediate",
    rating: 4.9,
    students: 654,
    lessons: 15,
    price: "$59",
    category: "paid",
    progress: 0,
    thumbnail: "bg-gradient-to-br from-destructive/20 to-primary/20",
    featured: false,
  },
  {
    id: "ai-analytics",
    title: "AI-Powered Business Analytics",
    description: "Use AI to analyze data, predict trends, and make data-driven decisions for your business.",
    instructor: "Lisa Wong",
    duration: "3.5 hours",
    level: "Advanced",
    rating: 4.7,
    students: 423,
    lessons: 16,
    price: "$69",
    category: "paid",
    progress: 0,
    thumbnail: "bg-gradient-to-br from-primary/20 to-destructive/20",
    featured: false,
  },
  {
    id: "prompt-engineering",
    title: "Prompt Engineering Fundamentals",
    description: "Master the art of writing effective prompts to get the best results from AI tools.",
    instructor: "Michael Torres",
    duration: "2 hours",
    level: "Beginner",
    rating: 4.8,
    students: 1089,
    lessons: 10,
    price: "Free",
    category: "free",
    progress: 0,
    thumbnail: "bg-gradient-to-br from-accent/20 to-primary/20",
    featured: false,
  },
  {
    id: "ai-visual-content",
    title: "Creating Visual Content with AI",
    description: "Learn to create stunning graphics, photos, and designs using AI-powered tools.",
    instructor: "Emily Hart",
    duration: "2.5 hours",
    level: "Beginner",
    rating: 4.9,
    students: 876,
    lessons: 11,
    price: "$39",
    category: "paid",
    progress: 0,
    thumbnail: "bg-gradient-to-br from-destructive/20 to-accent/20",
    featured: false,
  },
];

const stats = [
  { label: "Courses Available", value: "12+", icon: BookOpen },
  { label: "Students Enrolled", value: "5,000+", icon: TrendingUp },
  { label: "Hours of Content", value: "50+", icon: Clock },
  { label: "Completion Rate", value: "87%", icon: Award },
];

export default function LearnPage() {
  const [filter, setFilter] = useState<"all" | "free" | "paid">("all");

  const filteredCourses = courses.filter((course) => {
    if (filter === "all") return true;
    return course.category === filter;
  });

  return (
    <>
      <SEO
        title="Learning Portal - Master AI Tools | AI Growth Comm"
        description="Access free and paid courses to master AI tools for your business. Learn from experts and join thousands of successful students."
      />
      <Navigation />
      <main className="min-h-screen pt-20">
        <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <Badge variant="secondary" className="mb-4">
                Learn & Grow
              </Badge>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Master AI for{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Your Business
                </span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                From beginner to advanced, our courses help you unlock the power of AI. Start with free courses or dive deep with our premium content.
              </p>

              <div className="flex flex-wrap justify-center gap-3">
                <Button
                  variant={filter === "all" ? "default" : "outline"}
                  onClick={() => setFilter("all")}
                  className="rounded-full"
                >
                  All Courses
                </Button>
                <Button
                  variant={filter === "free" ? "default" : "outline"}
                  onClick={() => setFilter("free")}
                  className="rounded-full"
                >
                  Free Courses
                </Button>
                <Button
                  variant={filter === "paid" ? "default" : "outline"}
                  onClick={() => setFilter("paid")}
                  className="rounded-full"
                >
                  Premium Courses
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="bg-card rounded-xl p-6 border-2 text-center"
                  >
                    <Icon className="w-8 h-8 text-primary mx-auto mb-3" />
                    <p className="font-serif text-2xl font-bold mb-1">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                );
              })}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {filteredCourses.map((course) => (
                <Card
                  key={course.id}
                  className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20 flex flex-col"
                >
                  <div className={`h-40 ${course.thumbnail} relative overflow-hidden rounded-t-lg`}>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play className="w-6 h-6 text-primary ml-1" />
                      </div>
                    </div>
                    {course.featured && (
                      <Badge className="absolute top-3 left-3 bg-destructive/90">
                        Featured
                      </Badge>
                    )}
                    <Badge
                      variant="secondary"
                      className="absolute top-3 right-3 bg-background/90"
                    >
                      {course.price}
                    </Badge>
                  </div>

                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline" className="text-xs">
                        {course.level}
                      </Badge>
                      <div className="flex items-center gap-1 ml-auto">
                        <Star className="w-3 h-3 fill-destructive text-destructive" />
                        <span className="text-sm font-semibold">{course.rating}</span>
                      </div>
                    </div>
                    <CardTitle className="line-clamp-2 text-lg mb-2">{course.title}</CardTitle>
                    <CardDescription className="line-clamp-2">
                      {course.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="flex-1">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {course.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <BookOpen className="w-4 h-4" />
                          {course.lessons} lessons
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        By {course.instructor}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {course.students.toLocaleString()} students
                      </p>
                    </div>
                  </CardContent>

                  <CardFooter className="flex-col gap-3">
                    {course.progress > 0 && (
                      <div className="w-full">
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-muted-foreground">Progress</span>
                          <span className="font-semibold">{course.progress}%</span>
                        </div>
                        <Progress value={course.progress} className="h-2" />
                      </div>
                    )}
                    <Link href={`/learn/${course.id}`} className="w-full">
                      <Button className="w-full" variant={course.progress > 0 ? "default" : "outline"}>
                        {course.progress > 0 ? "Continue Learning" : "Start Course"}
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-b from-accent/5 to-background">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
                Ready to Level Up Your AI Skills?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join thousands of business owners and realtors who are transforming their work with AI.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-gradient-to-r from-primary to-accent">
                  Browse All Courses
                </Button>
                <Link href="/tools">
                  <Button size="lg" variant="outline">
                    Explore AI Tools
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