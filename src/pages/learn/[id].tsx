import { SEO } from "@/components/SEO";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BookOpen, Clock, Star, Award, CheckCircle, PlayCircle, FileText, Users } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

interface Lesson {
  id: string;
  title: string;
  duration: string;
  completed: boolean;
  type: "video" | "reading" | "quiz";
}

interface Module {
  id: string;
  title: string;
  lessons: Lesson[];
}

interface CourseData {
  title: string;
  description: string;
  instructor: string;
  duration: string;
  level: string;
  rating: number;
  students: number;
  price: string;
  category: string;
  whatYouLearn: string[];
  modules: Module[];
  progress: number;
}

const coursesData: Record<string, CourseData> = {
  "chatgpt-beginners": {
    title: "ChatGPT for Beginners",
    description: "Master the fundamentals of ChatGPT and learn how to use AI for everyday business tasks. This comprehensive course covers everything from basic prompts to advanced techniques.",
    instructor: "Sarah Mitchell",
    duration: "2.5 hours",
    level: "Beginner",
    rating: 4.9,
    students: 1247,
    price: "Free",
    category: "free",
    whatYouLearn: [
      "Understand how ChatGPT works and its capabilities",
      "Write effective prompts for different business scenarios",
      "Use ChatGPT for content creation and ideation",
      "Apply AI to streamline daily business tasks",
      "Recognize limitations and best practices",
    ],
    modules: [
      {
        id: "intro",
        title: "Introduction to ChatGPT",
        lessons: [
          { id: "1-1", title: "What is ChatGPT?", duration: "8 min", completed: false, type: "video" },
          { id: "1-2", title: "Setting Up Your Account", duration: "5 min", completed: false, type: "video" },
          { id: "1-3", title: "Understanding AI Capabilities", duration: "10 min", completed: false, type: "reading" },
        ],
      },
      {
        id: "basics",
        title: "ChatGPT Basics",
        lessons: [
          { id: "2-1", title: "Your First Conversation", duration: "12 min", completed: false, type: "video" },
          { id: "2-2", title: "Writing Clear Prompts", duration: "15 min", completed: false, type: "video" },
          { id: "2-3", title: "Practice Exercise: Basic Prompts", duration: "10 min", completed: false, type: "quiz" },
        ],
      },
      {
        id: "business",
        title: "ChatGPT for Business",
        lessons: [
          { id: "3-1", title: "Content Creation with AI", duration: "18 min", completed: false, type: "video" },
          { id: "3-2", title: "Email and Communication", duration: "12 min", completed: false, type: "video" },
          { id: "3-3", title: "Research and Analysis", duration: "15 min", completed: false, type: "video" },
        ],
      },
      {
        id: "advanced",
        title: "Best Practices & Tips",
        lessons: [
          { id: "4-1", title: "Advanced Prompt Techniques", duration: "20 min", completed: false, type: "video" },
          { id: "4-2", title: "Common Pitfalls to Avoid", duration: "8 min", completed: false, type: "reading" },
          { id: "4-3", title: "Final Assessment", duration: "15 min", completed: false, type: "quiz" },
        ],
      },
    ],
    progress: 0,
  },
  "ai-content-mastery": {
    title: "AI Content Creation Mastery",
    description: "Learn advanced techniques for creating compelling marketing content with AI tools. From social media to long-form articles, master the art of AI-assisted content creation.",
    instructor: "James Chen",
    duration: "4 hours",
    level: "Intermediate",
    rating: 4.8,
    students: 892,
    price: "$49",
    category: "paid",
    whatYouLearn: [
      "Create engaging social media content at scale",
      "Write SEO-optimized blog posts with AI",
      "Generate compelling email marketing campaigns",
      "Develop consistent brand voice across all content",
      "Use AI to repurpose content efficiently",
    ],
    modules: [
      {
        id: "foundation",
        title: "Content Strategy Foundations",
        lessons: [
          { id: "1-1", title: "Understanding Your Audience", duration: "15 min", completed: false, type: "video" },
          { id: "1-2", title: "Content Planning with AI", duration: "20 min", completed: false, type: "video" },
          { id: "1-3", title: "Building Your Brand Voice", duration: "18 min", completed: false, type: "video" },
        ],
      },
      {
        id: "social",
        title: "Social Media Content",
        lessons: [
          { id: "2-1", title: "Platform-Specific Strategies", duration: "22 min", completed: false, type: "video" },
          { id: "2-2", title: "Creating Viral-Ready Content", duration: "25 min", completed: false, type: "video" },
          { id: "2-3", title: "Social Media Calendar", duration: "12 min", completed: false, type: "reading" },
        ],
      },
      {
        id: "longform",
        title: "Long-Form Content",
        lessons: [
          { id: "3-1", title: "Blog Post Frameworks", duration: "28 min", completed: false, type: "video" },
          { id: "3-2", title: "SEO Optimization Techniques", duration: "20 min", completed: false, type: "video" },
          { id: "3-3", title: "Case Studies & Whitepapers", duration: "18 min", completed: false, type: "video" },
        ],
      },
      {
        id: "email",
        title: "Email Marketing",
        lessons: [
          { id: "4-1", title: "Email Campaign Structure", duration: "16 min", completed: false, type: "video" },
          { id: "4-2", title: "Personalization at Scale", duration: "22 min", completed: false, type: "video" },
          { id: "4-3", title: "A/B Testing with AI", duration: "14 min", completed: false, type: "video" },
        ],
      },
      {
        id: "mastery",
        title: "Advanced Techniques",
        lessons: [
          { id: "5-1", title: "Content Repurposing Strategies", duration: "20 min", completed: false, type: "video" },
          { id: "5-2", title: "Quality Control & Editing", duration: "15 min", completed: false, type: "video" },
          { id: "5-3", title: "Final Project", duration: "30 min", completed: false, type: "quiz" },
        ],
      },
    ],
    progress: 0,
  },
};

export default function CourseDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const [enrolling, setEnrolling] = useState(false);
  
  const course = id && typeof id === "string" ? coursesData[id as keyof typeof coursesData] : null;

  if (!course) {
    return (
      <>
        <SEO title="Course Not Found - AI Growth Comm" />
        <Navigation />
        <main className="min-h-screen pt-20 flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-serif text-3xl font-bold mb-4">Course Not Found</h1>
            <Link href="/learn">
              <Button>Browse All Courses</Button>
            </Link>
          </div>
        </main>
      </>
    );
  }

  const totalLessons = course.modules.reduce((acc, module) => acc + module.lessons.length, 0);
  const completedLessons = course.modules.reduce(
    (acc, module) => acc + module.lessons.filter((l) => l.completed).length,
    0
  );

  const handleEnroll = () => {
    setEnrolling(true);
    setTimeout(() => {
      alert(`Enrolled in ${course.title}!`);
      setEnrolling(false);
    }, 1000);
  };

  return (
    <>
      <SEO
        title={`${course.title} - Learn AI | AI Growth Comm`}
        description={course.description}
      />
      <Navigation />
      <main className="min-h-screen pt-20">
        <section className="py-12 bg-gradient-to-b from-primary/5 to-background">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <Link href="/learn" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors">
                ← Back to Courses
              </Link>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <Badge variant="secondary" className="mb-4">
                    {course.level}
                  </Badge>
                  <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">{course.title}</h1>
                  <p className="text-lg text-muted-foreground mb-6">{course.description}</p>

                  <div className="flex flex-wrap items-center gap-6 mb-8">
                    <div className="flex items-center gap-2">
                      <Award className="w-5 h-5 text-primary" />
                      <span className="text-sm">By {course.instructor}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-primary" />
                      <span className="text-sm">{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="w-5 h-5 fill-destructive text-destructive" />
                      <span className="text-sm font-semibold">{course.rating}</span>
                      <span className="text-sm text-muted-foreground">
                        ({course.students.toLocaleString()} students)
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-primary" />
                      <span className="text-sm">{totalLessons} lessons</span>
                    </div>
                  </div>

                  {course.progress > 0 && (
                    <div className="mb-8 p-6 bg-card rounded-xl border-2">
                      <div className="flex justify-between items-center mb-3">
                        <h3 className="font-semibold">Your Progress</h3>
                        <span className="text-sm font-semibold">{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} className="h-3 mb-2" />
                      <p className="text-sm text-muted-foreground">
                        {completedLessons} of {totalLessons} lessons completed
                      </p>
                    </div>
                  )}

                  <Card className="mb-8">
                    <CardHeader>
                      <CardTitle>What You&apos;ll Learn</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {course.whatYouLearn.map((item, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                            <span className="text-foreground/80">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <div className="md:col-span-1">
                  <Card className="sticky top-24 border-2">
                    <CardContent className="p-6">
                      <div className="text-center mb-6">
                        <div className="text-4xl font-serif font-bold mb-2">{course.price}</div>
                        {course.category === "paid" && (
                          <p className="text-sm text-muted-foreground">One-time payment</p>
                        )}
                      </div>

                      <Button
                        size="lg"
                        className="w-full mb-4 bg-gradient-to-r from-primary to-accent"
                        onClick={handleEnroll}
                        disabled={enrolling}
                      >
                        {enrolling ? "Enrolling..." : course.progress > 0 ? "Continue Course" : "Enroll Now"}
                      </Button>

                      <div className="space-y-3 text-sm">
                        <div className="flex items-center justify-between pb-3 border-b">
                          <span className="text-muted-foreground">Duration</span>
                          <span className="font-semibold">{course.duration}</span>
                        </div>
                        <div className="flex items-center justify-between pb-3 border-b">
                          <span className="text-muted-foreground">Lessons</span>
                          <span className="font-semibold">{totalLessons}</span>
                        </div>
                        <div className="flex items-center justify-between pb-3 border-b">
                          <span className="text-muted-foreground">Level</span>
                          <span className="font-semibold">{course.level}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-muted-foreground">Students</span>
                          <span className="font-semibold">{course.students.toLocaleString()}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <h2 className="font-serif text-3xl font-bold mb-8">Course Curriculum</h2>

              <Accordion type="single" collapsible className="space-y-4">
                {course.modules.map((module, moduleIndex) => (
                  <AccordionItem key={module.id} value={module.id} className="border-2 rounded-xl px-6">
                    <AccordionTrigger className="hover:no-underline">
                      <div className="flex items-center gap-4 text-left">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                          <span className="font-semibold text-primary">{moduleIndex + 1}</span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-1">{module.title}</h3>
                          <p className="text-sm text-muted-foreground">
                            {module.lessons.length} lessons
                          </p>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-3 mt-4 ml-14">
                        {module.lessons.map((lesson) => {
                          const Icon = lesson.type === "video" ? PlayCircle : lesson.type === "reading" ? FileText : BookOpen;
                          return (
                            <div
                              key={lesson.id}
                              className="flex items-center justify-between p-4 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer group"
                            >
                              <div className="flex items-center gap-3">
                                <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                                <span className="font-medium group-hover:text-primary transition-colors">
                                  {lesson.title}
                                </span>
                              </div>
                              <div className="flex items-center gap-3">
                                <span className="text-sm text-muted-foreground">{lesson.duration}</span>
                                {lesson.completed && (
                                  <CheckCircle className="w-5 h-5 text-accent" />
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
                Ready to Start Learning?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join thousands of students mastering AI for their business.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-accent"
                  onClick={handleEnroll}
                  disabled={enrolling}
                >
                  {enrolling ? "Enrolling..." : "Enroll in This Course"}
                </Button>
                <Link href="/learn">
                  <Button size="lg" variant="outline">
                    Browse More Courses
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