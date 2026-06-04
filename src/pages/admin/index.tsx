import { SEO } from "@/components/SEO";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Switch } from "@/components/ui/switch";
import { 
  Settings, 
  Wrench, 
  BookOpen, 
  Calendar, 
  FileText, 
  Users, 
  BarChart3,
  Plus,
  Edit,
  Trash2,
  Eye,
  TrendingUp
} from "lucide-react";
import { useState } from "react";

const tools = [
  { id: 1, name: "Writrr", category: "Small Biz", status: "Active", users: 1247, reviews: 89 },
  { id: 2, name: "Trackrr", category: "Realtor", status: "Active", users: 892, reviews: 67 },
  { id: 3, name: "Inspirr", category: "Both", status: "Active", users: 2103, reviews: 134 },
  { id: 4, name: "Creatrr", category: "Small Biz", status: "Active", users: 1564, reviews: 98 },
];

const courses = [
  { id: 1, title: "ChatGPT for Beginners", type: "Free", enrolled: 3421, rating: 4.8, status: "Published" },
  { id: 2, title: "AI for Real Estate Professionals", type: "Pro", enrolled: 1256, rating: 4.9, status: "Published" },
  { id: 3, title: "AI-Powered Content Creation", type: "Free", enrolled: 2187, rating: 4.7, status: "Published" },
  { id: 4, title: "Advanced Prompt Engineering", type: "Pro", enrolled: 891, rating: 4.9, status: "Draft" },
];

const events = [
  { id: 1, title: "ChatGPT Workshop: Real Estate Marketing", date: "2026-06-10", registered: 87, capacity: 100, status: "Upcoming" },
  { id: 2, title: "AI Tools Q&A Session", date: "2026-06-15", registered: 124, capacity: 150, status: "Upcoming" },
  { id: 3, title: "Small Business AI Success Stories", date: "2026-05-28", registered: 156, capacity: 150, status: "Completed" },
];

const userGuides = [
  { id: 1, title: "How to Use Writrr for Social Media", author: "Sarah Johnson", views: 1234, status: "Approved" },
  { id: 2, title: "Trackrr Best Practices for Realtors", author: "Mike Davis", views: 892, status: "Approved" },
  { id: 3, title: "Creating Engaging Content with Inspirr", author: "Lisa Chen", views: 567, status: "Pending" },
];

const stats = [
  { label: "Total Users", value: "12,458", change: "+12%", icon: Users, trend: "up" },
  { label: "Active Subscriptions", value: "4,892", change: "+8%", icon: TrendingUp, trend: "up" },
  { label: "Course Enrollments", value: "8,234", change: "+24%", icon: BookOpen, trend: "up" },
  { label: "Platform Revenue", value: "$48,920", change: "+16%", icon: BarChart3, trend: "up" },
];

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <>
      <SEO
        title="Admin Dashboard | AI Growth Comm"
        description="Manage AI tools, courses, events, and user content for AI Growth Comm platform."
      />
      <Navigation />
      <main className="min-h-screen pt-20 pb-16 bg-muted/30">
        <section className="py-8">
          <div className="container">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h1 className="font-serif text-4xl font-bold mb-2">
                    Admin{" "}
                    <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                      Dashboard
                    </span>
                  </h1>
                  <p className="text-muted-foreground">
                    Manage your platform content and monitor performance
                  </p>
                </div>
                <Button size="lg" className="bg-gradient-to-r from-primary to-accent">
                  <Settings className="w-4 h-4 mr-2" />
                  Platform Settings
                </Button>
              </div>

              <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
                <TabsList className="grid w-full grid-cols-5 lg:w-auto lg:inline-grid">
                  <TabsTrigger value="overview" className="gap-2">
                    <BarChart3 className="w-4 h-4" />
                    <span className="hidden sm:inline">Overview</span>
                  </TabsTrigger>
                  <TabsTrigger value="tools" className="gap-2">
                    <Wrench className="w-4 h-4" />
                    <span className="hidden sm:inline">AI Tools</span>
                  </TabsTrigger>
                  <TabsTrigger value="courses" className="gap-2">
                    <BookOpen className="w-4 h-4" />
                    <span className="hidden sm:inline">Courses</span>
                  </TabsTrigger>
                  <TabsTrigger value="events" className="gap-2">
                    <Calendar className="w-4 h-4" />
                    <span className="hidden sm:inline">Events</span>
                  </TabsTrigger>
                  <TabsTrigger value="guides" className="gap-2">
                    <FileText className="w-4 h-4" />
                    <span className="hidden sm:inline">User Guides</span>
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-8">
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat) => {
                      const Icon = stat.icon;
                      return (
                        <Card key={stat.label} className="border-2">
                          <CardContent className="pt-6">
                            <div className="flex items-start justify-between mb-4">
                              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                                <Icon className="w-6 h-6 text-primary" />
                              </div>
                              <Badge variant={stat.trend === "up" ? "default" : "secondary"} className="bg-accent">
                                {stat.change}
                              </Badge>
                            </div>
                            <p className="text-3xl font-bold font-serif mb-1">
                              {stat.value}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {stat.label}
                            </p>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>

                  <div className="grid lg:grid-cols-2 gap-6">
                    <Card className="border-2">
                      <CardHeader>
                        <CardTitle>Recent Activity</CardTitle>
                        <CardDescription>Latest platform updates and actions</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {[
                            { action: "New course published", detail: "Advanced Prompt Engineering", time: "2 hours ago" },
                            { action: "Event registration opened", detail: "ChatGPT Workshop", time: "5 hours ago" },
                            { action: "User guide approved", detail: "How to Use Writrr", time: "1 day ago" },
                            { action: "Tool updated", detail: "Trackrr v2.1 released", time: "2 days ago" },
                          ].map((item, i) => (
                            <div key={i} className="flex items-start gap-4 pb-4 border-b last:border-0">
                              <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                              <div className="flex-1">
                                <p className="font-medium">{item.action}</p>
                                <p className="text-sm text-muted-foreground">{item.detail}</p>
                              </div>
                              <span className="text-xs text-muted-foreground whitespace-nowrap">
                                {item.time}
                              </span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-2">
                      <CardHeader>
                        <CardTitle>Pending Reviews</CardTitle>
                        <CardDescription>Content awaiting approval</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                            <div className="flex items-center gap-3">
                              <FileText className="w-5 h-5 text-primary" />
                              <div>
                                <p className="font-medium">User Guide</p>
                                <p className="text-sm text-muted-foreground">Creating Engaging Content</p>
                              </div>
                            </div>
                            <div className="flex gap-2">
                              <Button size="sm" variant="outline">
                                <Eye className="w-4 h-4" />
                              </Button>
                              <Button size="sm">Approve</Button>
                            </div>
                          </div>
                          <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                            <div className="flex items-center gap-3">
                              <Users className="w-5 h-5 text-primary" />
                              <div>
                                <p className="font-medium">Event Proposal</p>
                                <p className="text-sm text-muted-foreground">AI for E-commerce Workshop</p>
                              </div>
                            </div>
                            <div className="flex gap-2">
                              <Button size="sm" variant="outline">
                                <Eye className="w-4 h-4" />
                              </Button>
                              <Button size="sm">Review</Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="tools" className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="font-serif text-2xl font-bold mb-1">AI Tools Management</h2>
                      <p className="text-muted-foreground">Manage your AI tool marketplace</p>
                    </div>
                    <Button className="bg-gradient-to-r from-primary to-accent">
                      <Plus className="w-4 h-4 mr-2" />
                      Add New Tool
                    </Button>
                  </div>

                  <Card className="border-2">
                    <CardContent className="pt-6">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Tool Name</TableHead>
                            <TableHead>Category</TableHead>
                            <TableHead>Users</TableHead>
                            <TableHead>Reviews</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {tools.map((tool) => (
                            <TableRow key={tool.id}>
                              <TableCell className="font-medium">{tool.name}</TableCell>
                              <TableCell>
                                <Badge variant="secondary">{tool.category}</Badge>
                              </TableCell>
                              <TableCell>{tool.users.toLocaleString()}</TableCell>
                              <TableCell>{tool.reviews}</TableCell>
                              <TableCell>
                                <Badge variant="default" className="bg-accent">
                                  {tool.status}
                                </Badge>
                              </TableCell>
                              <TableCell className="text-right">
                                <div className="flex items-center justify-end gap-2">
                                  <Button size="sm" variant="outline">
                                    <Eye className="w-4 h-4" />
                                  </Button>
                                  <Button size="sm" variant="outline">
                                    <Edit className="w-4 h-4" />
                                  </Button>
                                  <Button size="sm" variant="outline">
                                    <Trash2 className="w-4 h-4" />
                                  </Button>
                                </div>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </CardContent>
                  </Card>

                  <Card className="border-2">
                    <CardHeader>
                      <CardTitle>Edit Tool Details</CardTitle>
                      <CardDescription>Update tool information and settings</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="toolName">Tool Name</Label>
                          <Input id="toolName" placeholder="Enter tool name" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="toolCategory">Category</Label>
                          <Select>
                            <SelectTrigger id="toolCategory">
                              <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="realtor">Realtor</SelectItem>
                              <SelectItem value="small-biz">Small Biz</SelectItem>
                              <SelectItem value="both">Both</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="toolDescription">Description</Label>
                        <Textarea 
                          id="toolDescription" 
                          placeholder="Enter tool description"
                          rows={4}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="demoVideo">Demo Video URL</Label>
                        <Input id="demoVideo" placeholder="https://..." />
                      </div>

                      <div className="flex items-center gap-4">
                        <Switch id="toolActive" />
                        <Label htmlFor="toolActive">Tool is active and available</Label>
                      </div>

                      <div className="flex gap-3">
                        <Button className="bg-gradient-to-r from-primary to-accent">
                          Save Changes
                        </Button>
                        <Button variant="outline">Cancel</Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="courses" className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="font-serif text-2xl font-bold mb-1">Courses Management</h2>
                      <p className="text-muted-foreground">Manage learning portal courses</p>
                    </div>
                    <Button className="bg-gradient-to-r from-primary to-accent">
                      <Plus className="w-4 h-4 mr-2" />
                      Create Course
                    </Button>
                  </div>

                  <Card className="border-2">
                    <CardContent className="pt-6">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Course Title</TableHead>
                            <TableHead>Type</TableHead>
                            <TableHead>Enrolled</TableHead>
                            <TableHead>Rating</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {courses.map((course) => (
                            <TableRow key={course.id}>
                              <TableCell className="font-medium">{course.title}</TableCell>
                              <TableCell>
                                <Badge variant={course.type === "Pro" ? "default" : "secondary"}>
                                  {course.type}
                                </Badge>
                              </TableCell>
                              <TableCell>{course.enrolled.toLocaleString()}</TableCell>
                              <TableCell>⭐ {course.rating}</TableCell>
                              <TableCell>
                                <Badge variant={course.status === "Published" ? "default" : "secondary"} 
                                  className={course.status === "Published" ? "bg-accent" : ""}>
                                  {course.status}
                                </Badge>
                              </TableCell>
                              <TableCell className="text-right">
                                <div className="flex items-center justify-end gap-2">
                                  <Button size="sm" variant="outline">
                                    <Eye className="w-4 h-4" />
                                  </Button>
                                  <Button size="sm" variant="outline">
                                    <Edit className="w-4 h-4" />
                                  </Button>
                                  <Button size="sm" variant="outline">
                                    <Trash2 className="w-4 h-4" />
                                  </Button>
                                </div>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="events" className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="font-serif text-2xl font-bold mb-1">Events Management</h2>
                      <p className="text-muted-foreground">Manage live events and workshops</p>
                    </div>
                    <Button className="bg-gradient-to-r from-primary to-accent">
                      <Plus className="w-4 h-4 mr-2" />
                      Schedule Event
                    </Button>
                  </div>

                  <Card className="border-2">
                    <CardContent className="pt-6">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Event Title</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead>Registration</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {events.map((event) => (
                            <TableRow key={event.id}>
                              <TableCell className="font-medium">{event.title}</TableCell>
                              <TableCell>{new Date(event.date).toLocaleDateString()}</TableCell>
                              <TableCell>
                                {event.registered} / {event.capacity}
                              </TableCell>
                              <TableCell>
                                <Badge variant={event.status === "Upcoming" ? "default" : "secondary"}
                                  className={event.status === "Upcoming" ? "bg-accent" : ""}>
                                  {event.status}
                                </Badge>
                              </TableCell>
                              <TableCell className="text-right">
                                <div className="flex items-center justify-end gap-2">
                                  <Button size="sm" variant="outline">
                                    <Eye className="w-4 h-4" />
                                  </Button>
                                  <Button size="sm" variant="outline">
                                    <Edit className="w-4 h-4" />
                                  </Button>
                                  <Button size="sm" variant="outline">
                                    <Trash2 className="w-4 h-4" />
                                  </Button>
                                </div>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="guides" className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="font-serif text-2xl font-bold mb-1">User Guides Management</h2>
                      <p className="text-muted-foreground">Review and manage user-generated content</p>
                    </div>
                  </div>

                  <Card className="border-2">
                    <CardContent className="pt-6">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Guide Title</TableHead>
                            <TableHead>Author</TableHead>
                            <TableHead>Views</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {userGuides.map((guide) => (
                            <TableRow key={guide.id}>
                              <TableCell className="font-medium">{guide.title}</TableCell>
                              <TableCell>{guide.author}</TableCell>
                              <TableCell>{guide.views.toLocaleString()}</TableCell>
                              <TableCell>
                                <Badge variant={guide.status === "Approved" ? "default" : "secondary"}
                                  className={guide.status === "Approved" ? "bg-accent" : "bg-yellow-500"}>
                                  {guide.status}
                                </Badge>
                              </TableCell>
                              <TableCell className="text-right">
                                <div className="flex items-center justify-end gap-2">
                                  <Button size="sm" variant="outline">
                                    <Eye className="w-4 h-4" />
                                  </Button>
                                  {guide.status === "Pending" && (
                                    <Button size="sm" className="bg-accent">
                                      Approve
                                    </Button>
                                  )}
                                  <Button size="sm" variant="outline">
                                    <Trash2 className="w-4 h-4" />
                                  </Button>
                                </div>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}