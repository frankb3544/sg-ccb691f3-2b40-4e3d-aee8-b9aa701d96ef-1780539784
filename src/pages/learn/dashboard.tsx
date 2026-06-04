import { SEO } from "@/components/SEO";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Trophy, Target, Clock, BookOpen, Award, CheckCircle2 } from "lucide-react";

const enrolledCourses = [
  {
    id: "chatgpt-beginners",
    title: "ChatGPT for Beginners",
    instructor: "Alex Rivera",
    progress: 75,
    lessonsCompleted: 9,
    totalLessons: 12,
    nextLesson: "Advanced Prompt Engineering",
    category: "Free",
    estimatedTime: "2 hours left",
  },
  {
    id: "ai-realtor",
    title: "AI for Real Estate Professionals",
    instructor: "Michael Chen",
    progress: 40,
    lessonsCompleted: 6,
    totalLessons: 15,
    nextLesson: "Automating Property Descriptions",
    category: "Pro",
    estimatedTime: "6 hours left",
  },
  {
    id: "content-creation",
    title: "AI-Powered Content Creation",
    instructor: "Jordan Blake",
    progress: 100,
    lessonsCompleted: 10,
    totalLessons: 10,
    nextLesson: null,
    category: "Free",
    estimatedTime: "Completed",
  },
];

const achievements = [
  {
    id: 1,
    title: "First Steps",
    description: "Completed your first lesson",
    icon: CheckCircle2,
    earned: true,
    date: "2026-05-15",
  },
  {
    id: 2,
    title: "Course Champion",
    description: "Completed your first course",
    icon: Trophy,
    earned: true,
    date: "2026-05-28",
  },
  {
    id: 3,
    title: "Speed Learner",
    description: "Complete 5 lessons in one day",
    icon: Clock,
    earned: true,
    date: "2026-05-20",
  },
  {
    id: 4,
    title: "Knowledge Seeker",
    description: "Enroll in 3 or more courses",
    icon: BookOpen,
    earned: true,
    date: "2026-05-22",
  },
  {
    id: 5,
    title: "Master Learner",
    description: "Complete 5 courses",
    icon: Award,
    earned: false,
    date: null,
  },
  {
    id: 6,
    title: "Perfect Week",
    description: "Complete lessons 7 days in a row",
    icon: Target,
    earned: false,
    date: null,
  },
];

const stats = [
  { label: "Courses Enrolled", value: "3", icon: BookOpen },
  { label: "Lessons Completed", value: "25", icon: CheckCircle2 },
  { label: "Hours Learned", value: "18", icon: Clock },
  { label: "Achievements", value: "4/6", icon: Trophy },
];

export default function LearningDashboard() {
  return (
    <>
      <SEO
        title="Learning Dashboard | AI Growth Comm"
        description="Track your AI learning progress, view enrolled courses, and unlock achievements on your journey to AI mastery."
      />
      <Navigation />
      <main className="min-h-screen pt-20 pb-16">
        <section className="py-12 bg-gradient-to-b from-primary/5 to-background">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="mb-8">
                <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
                  Your Learning{" "}
                  <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                    Dashboard
                  </span>
                </h1>
                <p className="text-lg text-muted-foreground">
                  Track your progress and celebrate your AI learning journey
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {stats.map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <Card key={stat.label} className="border-2">
                      <CardContent className="pt-6">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center flex-shrink-0">
                            <Icon className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <p className="text-3xl font-bold font-serif">
                              {stat.value}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {stat.label}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center justify-between mb-8">
                <h2 className="font-serif text-3xl font-bold">
                  My Courses
                </h2>
                <Button variant="outline" asChild>
                  <a href="/learn">Browse More Courses</a>
                </Button>
              </div>

              <div className="space-y-6">
                {enrolledCourses.map((course) => (
                  <Card key={course.id} className="border-2">
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <CardTitle className="text-xl">
                              {course.title}
                            </CardTitle>
                            <Badge variant={course.category === "Pro" ? "default" : "secondary"}>
                              {course.category}
                            </Badge>
                          </div>
                          <CardDescription>
                            by {course.instructor}
                          </CardDescription>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium mb-1">
                            {course.lessonsCompleted} / {course.totalLessons} lessons
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {course.estimatedTime}
                          </p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium">
                              Progress
                            </span>
                            <span className="text-sm font-bold text-primary">
                              {course.progress}%
                            </span>
                          </div>
                          <Progress value={course.progress} className="h-3" />
                        </div>

                        {course.nextLesson ? (
                          <div className="flex items-center justify-between pt-2">
                            <div>
                              <p className="text-sm text-muted-foreground mb-1">
                                Next Lesson
                              </p>
                              <p className="font-medium">{course.nextLesson}</p>
                            </div>
                            <Button>Continue Learning</Button>
                          </div>
                        ) : (
                          <div className="flex items-center gap-2 pt-2">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center">
                              <Trophy className="w-5 h-5 text-white" />
                            </div>
                            <div className="flex-1">
                              <p className="font-semibold text-primary">
                                Course Completed!
                              </p>
                              <p className="text-sm text-muted-foreground">
                                Great job finishing this course
                              </p>
                            </div>
                            <Button variant="outline">View Certificate</Button>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-muted/30">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="mb-8">
                <h2 className="font-serif text-3xl font-bold mb-2">
                  Achievements
                </h2>
                <p className="text-muted-foreground">
                  Unlock badges as you learn and grow
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {achievements.map((achievement) => {
                  const Icon = achievement.icon;
                  return (
                    <Card
                      key={achievement.id}
                      className={`border-2 ${
                        achievement.earned
                          ? "border-primary bg-gradient-to-br from-primary/5 to-accent/5"
                          : "border-border opacity-60"
                      }`}
                    >
                      <CardContent className="pt-6">
                        <div className="flex items-start gap-4">
                          <div
                            className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 ${
                              achievement.earned
                                ? "bg-gradient-to-br from-primary to-accent"
                                : "bg-muted"
                            }`}
                          >
                            <Icon
                              className={`w-7 h-7 ${
                                achievement.earned ? "text-white" : "text-muted-foreground"
                              }`}
                            />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold mb-1">
                              {achievement.title}
                            </h3>
                            <p className="text-sm text-muted-foreground mb-2">
                              {achievement.description}
                            </p>
                            {achievement.earned && achievement.date && (
                              <p className="text-xs text-primary font-medium">
                                Earned {new Date(achievement.date).toLocaleDateString()}
                              </p>
                            )}
                            {!achievement.earned && (
                              <Badge variant="outline" className="text-xs">
                                Locked
                              </Badge>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <Card className="border-2 border-accent bg-gradient-to-br from-accent/5 to-primary/5">
                <CardContent className="py-8">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center">
                      <Trophy className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold mb-3">
                      Keep Up the Great Work!
                    </h3>
                    <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                      You're making excellent progress on your AI learning journey. 
                      Complete 2 more courses to unlock the "Master Learner" achievement!
                    </p>
                    <Button size="lg" className="bg-gradient-to-r from-primary to-accent text-white">
                      Continue Learning
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}