import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import {
  Users,
  GraduationCap,
  BookOpen,
  TrendingUp,
  Star,
  AlertTriangle,
  CheckCircle,
  Clock,
  BarChart3,
  Settings,
  Shield,
} from "lucide-react"

export default function AdminDashboard() {
  const stats = [
    {
      title: "Total Students",
      value: "1,247",
      change: "+12%",
      trend: "up",
      icon: Users,
    },
    {
      title: "Active Teachers",
      value: "89",
      change: "+5%",
      trend: "up",
      icon: GraduationCap,
    },
    {
      title: "Courses Completed",
      value: "3,456",
      change: "+18%",
      trend: "up",
      icon: BookOpen,
    },
    {
      title: "Platform Revenue",
      value: "$24,567",
      change: "+23%",
      trend: "up",
      icon: TrendingUp,
    },
  ]

  const recentActivities = [
    {
      id: 1,
      type: "teacher_registration",
      user: "Dr. Amina Hassan",
      action: "New teacher registered",
      time: "2 hours ago",
      status: "pending",
    },
    {
      id: 2,
      type: "course_completion",
      user: "Ahmad Ali",
      action: "Completed Quran Memorization Level 1",
      time: "4 hours ago",
      status: "completed",
    },
    {
      id: 3,
      type: "report",
      user: "Sarah Khan",
      action: "Reported inappropriate content",
      time: "6 hours ago",
      status: "urgent",
    },
    {
      id: 4,
      type: "payment",
      user: "Omar Malik",
      action: "Payment processed for Premium Plan",
      time: "8 hours ago",
      status: "completed",
    },
  ]

  const teachers = [
    {
      id: 1,
      name: "Sheikh Ahmad",
      email: "ahmad@example.com",
      students: 45,
      rating: 4.9,
      status: "active",
      joinDate: "2023-06-15",
      specialization: "Quran Studies",
    },
    {
      id: 2,
      name: "Ustadha Fatima",
      email: "fatima@example.com",
      students: 32,
      rating: 4.8,
      status: "active",
      joinDate: "2023-08-20",
      specialization: "Arabic Language",
    },
    {
      id: 3,
      name: "Dr. Aisha",
      email: "aisha@example.com",
      students: 28,
      rating: 4.7,
      status: "pending",
      joinDate: "2024-01-10",
      specialization: "Islamic History",
    },
  ]

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "teacher_registration":
        return GraduationCap
      case "course_completion":
        return CheckCircle
      case "report":
        return AlertTriangle
      case "payment":
        return TrendingUp
      default:
        return Clock
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800"
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "urgent":
        return "bg-red-100 text-red-800"
      case "active":
        return "bg-green-100 text-green-800"
      default:
        return "bg-slate-100 text-slate-800"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-indigo-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Admin Dashboard</h1>
            <p className="text-slate-600">Manage your Islamic learning platform</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="bg-transparent">
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </Button>
            <Button>
              <Shield className="h-4 w-4 mr-2" />
              Security
            </Button>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => {
            const IconComponent = stat.icon
            return (
              <Card key={stat.title}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-slate-600">{stat.title}</p>
                      <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
                      <p className="text-sm text-green-600">{stat.change} from last month</p>
                    </div>
                    <div className="p-3 bg-cyan-100 rounded-lg">
                      <IconComponent className="h-6 w-6 text-cyan-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="teachers">Teachers</TabsTrigger>
            <TabsTrigger value="students">Students</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activities</CardTitle>
                  <CardDescription>Latest platform activities and notifications</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentActivities.map((activity) => {
                    const ActivityIcon = getActivityIcon(activity.type)
                    return (
                      <div key={activity.id} className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                        <div className="p-2 bg-white rounded-lg">
                          <ActivityIcon className="h-4 w-4 text-slate-600" />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-sm">{activity.user}</p>
                          <p className="text-sm text-slate-600">{activity.action}</p>
                          <p className="text-xs text-slate-500">{activity.time}</p>
                        </div>
                        <Badge className={getStatusColor(activity.status)}>{activity.status}</Badge>
                      </div>
                    )
                  })}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Platform Performance</CardTitle>
                  <CardDescription>Key metrics and performance indicators</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span>Student Engagement</span>
                      <span>87%</span>
                    </div>
                    <Progress value={87} className="h-2" />
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span>Teacher Satisfaction</span>
                      <span>92%</span>
                    </div>
                    <Progress value={92} className="h-2" />
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span>Course Completion Rate</span>
                      <span>78%</span>
                    </div>
                    <Progress value={78} className="h-2" />
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span>Platform Uptime</span>
                      <span>99.9%</span>
                    </div>
                    <Progress value={99.9} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="teachers" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Teacher Management</h2>
              <Button>Add New Teacher</Button>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {teachers.map((teacher) => (
                <Card key={teacher.id}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <Avatar className="h-12 w-12">
                          <AvatarFallback>
                            {teacher.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-semibold">{teacher.name}</h3>
                          <p className="text-sm text-slate-600">{teacher.email}</p>
                          <p className="text-sm text-slate-500">{teacher.specialization}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge className={getStatusColor(teacher.status)}>{teacher.status}</Badge>
                        <div className="mt-2 space-y-1">
                          <div className="flex items-center gap-1">
                            <Star className="h-3 w-3 text-yellow-500" />
                            <span className="text-sm">{teacher.rating}</span>
                          </div>
                          <p className="text-sm text-slate-600">{teacher.students} students</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="bg-transparent">
                          View Profile
                        </Button>
                        <Button variant="outline" size="sm" className="bg-transparent">
                          Manage
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="students" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Student Management</h2>
              <div className="flex gap-2">
                <Button variant="outline" className="bg-transparent">
                  Export Data
                </Button>
                <Button>Send Notification</Button>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Student Progress Overview</CardTitle>
                <CardDescription>Track student learning progress across all courses</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-slate-50 rounded-lg">
                      <p className="text-2xl font-bold text-slate-900">847</p>
                      <p className="text-sm text-slate-600">Active Students</p>
                    </div>
                    <div className="text-center p-4 bg-slate-50 rounded-lg">
                      <p className="text-2xl font-bold text-slate-900">234</p>
                      <p className="text-sm text-slate-600">Completed Courses</p>
                    </div>
                    <div className="text-center p-4 bg-slate-50 rounded-lg">
                      <p className="text-2xl font-bold text-slate-900">4.6</p>
                      <p className="text-sm text-slate-600">Avg. Rating</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Analytics & Insights</h2>
              <Button variant="outline" className="bg-transparent">
                <BarChart3 className="h-4 w-4 mr-2" />
                Generate Report
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Learning Progress Trends</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-slate-50 rounded-lg flex items-center justify-center">
                    <p className="text-slate-500">Chart visualization would go here</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Popular Courses</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Quran Memorization</span>
                    <span className="font-semibold">456 students</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Arabic Language</span>
                    <span className="font-semibold">342 students</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Islamic History</span>
                    <span className="font-semibold">289 students</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Hadith Studies</span>
                    <span className="font-semibold">234 students</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="reports" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Reports & Moderation</h2>
              <Button variant="outline" className="bg-transparent">
                View All Reports
              </Button>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Content Moderation</CardTitle>
                <CardDescription>Review reported content and user behavior</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg">
                    <div>
                      <p className="font-medium">Inappropriate Content Report</p>
                      <p className="text-sm text-slate-600">Reported by Sarah Khan - 6 hours ago</p>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="bg-transparent">
                        Review
                      </Button>
                      <Button size="sm" variant="destructive">
                        Take Action
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg">
                    <div>
                      <p className="font-medium">Teacher Verification Pending</p>
                      <p className="text-sm text-slate-600">Dr. Amina Hassan - 2 hours ago</p>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="bg-transparent">
                        Review
                      </Button>
                      <Button size="sm">Approve</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
