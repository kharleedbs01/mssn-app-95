"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Users,
  Calendar,
  BookOpen,
  Star,
  TrendingUp,
  Clock,
  MessageCircle,
  Settings,
  Edit,
  Search,
  Plus,
  Video,
  Send,
  MoreHorizontal,
  CheckCircle,
  AlertCircle,
  Eye,
} from "lucide-react"
import Link from "next/link"

// Mock data - in real app this would come from database
const teacherData = {
  name: "Sheikh Ahmed Al-Mansouri",
  avatar: "/islamic-scholar.png",
  rating: 4.9,
  totalStudents: 150,
  activeStudents: 45,
  totalSessions: 320,
  earnings: "₦450,000",
  subjects: ["Quran Recitation", "Tajweed", "Arabic Language"],
}

const allStudents = [
  {
    id: 1,
    name: "Amina Hassan",
    avatar: "/diverse-female-student.png",
    email: "amina.hassan@email.com",
    phone: "+234 801 234 5678",
    subjects: ["Quran Recitation", "Tajweed"],
    enrollmentDate: "March 2024",
    totalSessions: 24,
    completedSessions: 18,
    progress: 75,
    lastSession: "2 days ago",
    status: "Active",
    nextSession: "Today, 2:00 PM",
    performance: "Excellent",
    notes: "Very dedicated student. Shows excellent progress in Tajweed rules.",
    assignments: {
      completed: 12,
      pending: 2,
      overdue: 0,
    },
    attendance: 95,
    currentLevel: "Intermediate",
  },
  {
    id: 2,
    name: "Ibrahim Musa",
    avatar: "/male-student-studying.png",
    email: "ibrahim.musa@email.com",
    phone: "+234 802 345 6789",
    subjects: ["Quran Memorization", "Arabic Language"],
    enrollmentDate: "February 2024",
    totalSessions: 32,
    completedSessions: 28,
    progress: 60,
    lastSession: "1 week ago",
    status: "Active",
    nextSession: "Tomorrow, 4:00 PM",
    performance: "Good",
    notes: "Consistent student. Needs more practice with Arabic pronunciation.",
    assignments: {
      completed: 15,
      pending: 1,
      overdue: 1,
    },
    attendance: 87,
    currentLevel: "Beginner",
  },
  {
    id: 3,
    name: "Khadijah Ali",
    avatar: "/female-student-hijab.jpg",
    email: "khadijah.ali@email.com",
    phone: "+234 803 456 7890",
    subjects: ["Islamic Studies", "Hadith"],
    enrollmentDate: "January 2024",
    totalSessions: 40,
    completedSessions: 35,
    progress: 40,
    lastSession: "3 days ago",
    status: "Active",
    nextSession: "Friday, 10:00 AM",
    performance: "Average",
    notes: "Needs encouragement. Sometimes struggles with complex concepts.",
    assignments: {
      completed: 18,
      pending: 3,
      overdue: 2,
    },
    attendance: 78,
    currentLevel: "Intermediate",
  },
  {
    id: 4,
    name: "Yusuf Ahmed",
    avatar: "/placeholder.svg",
    email: "yusuf.ahmed@email.com",
    phone: "+234 804 567 8901",
    subjects: ["Arabic Language"],
    enrollmentDate: "April 2024",
    totalSessions: 16,
    completedSessions: 12,
    progress: 30,
    lastSession: "1 month ago",
    status: "Inactive",
    nextSession: "Not scheduled",
    performance: "Needs Attention",
    notes: "Has been absent for several sessions. Needs follow-up.",
    assignments: {
      completed: 5,
      pending: 4,
      overdue: 3,
    },
    attendance: 45,
    currentLevel: "Beginner",
  },
]

const detailedUpcomingSessions = [
  {
    id: 1,
    student: "Amina Hassan",
    studentAvatar: "/diverse-female-student.png",
    subject: "Quran Recitation",
    time: "2:00 PM - 3:00 PM",
    date: "Today",
    type: "Regular Session",
    status: "Confirmed",
    sessionNotes: "Continue with Surah Al-Baqarah verses 20-30",
    materials: ["Mushaf", "Tajweed Rules Chart"],
  },
  {
    id: 2,
    student: "Ibrahim Musa",
    studentAvatar: "/male-student-studying.png",
    subject: "Arabic Grammar",
    time: "4:00 PM - 5:00 PM",
    date: "Tomorrow",
    type: "Regular Session",
    status: "Confirmed",
    sessionNotes: "Review verb conjugations and practice exercises",
    materials: ["Arabic Grammar Book", "Exercise Worksheets"],
  },
  {
    id: 3,
    student: "Khadijah Ali",
    studentAvatar: "/female-student-hijab.jpg",
    subject: "Islamic Studies",
    time: "10:00 AM - 11:00 AM",
    date: "Friday",
    type: "Group Session",
    status: "Pending",
    sessionNotes: "Discussion on the Five Pillars of Islam",
    materials: ["Islamic Studies Textbook", "Discussion Questions"],
  },
]

export default function TeacherDashboard() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">MSSN Tutor</h1>
              <p className="text-sm text-muted-foreground">Teacher Dashboard</p>
            </div>
          </Link>
          <nav className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <MessageCircle className="w-4 h-4 mr-2" />
              Messages
            </Button>
            <Button variant="outline" size="sm">
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </Button>
            <Avatar className="w-8 h-8">
              <AvatarImage src={teacherData.avatar || "/placeholder.svg"} alt={teacherData.name} />
              <AvatarFallback>SA</AvatarFallback>
            </Avatar>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Assalamu Alaikum, {teacherData.name.split(" ")[1]}
          </h1>
          <p className="text-muted-foreground">Here's an overview of your teaching activities and student progress.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Students</p>
                  <p className="text-2xl font-bold text-foreground">{teacherData.totalStudents}</p>
                </div>
                <Users className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Active Students</p>
                  <p className="text-2xl font-bold text-foreground">{teacherData.activeStudents}</p>
                </div>
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Sessions</p>
                  <p className="text-2xl font-bold text-foreground">{teacherData.totalSessions}</p>
                </div>
                <Calendar className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Rating</p>
                  <div className="flex items-center">
                    <p className="text-2xl font-bold text-foreground mr-2">{teacherData.rating}</p>
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  </div>
                </div>
                <Star className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full lg:w-auto grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="students">Students</TabsTrigger>
            <TabsTrigger value="sessions">Sessions</TabsTrigger>
            <TabsTrigger value="assignments">Assignments</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Upcoming Sessions */}
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Sessions</CardTitle>
                  <CardDescription>Your scheduled classes for today and tomorrow</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {detailedUpcomingSessions.map((session) => (
                      <div key={session.id} className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <p className="font-medium text-foreground">{session.student}</p>
                          <p className="text-sm text-muted-foreground">{session.subject}</p>
                          <div className="flex items-center space-x-2 mt-1">
                            <Clock className="w-3 h-3 text-muted-foreground" />
                            <span className="text-xs text-muted-foreground">{session.time}</span>
                            <Badge variant="outline" className="text-xs">
                              {session.type}
                            </Badge>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium text-foreground">{session.date}</p>
                          <Button size="sm" variant="outline" className="mt-2 bg-transparent">
                            Join Session
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recent Students */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Students</CardTitle>
                  <CardDescription>Students you've taught recently</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {allStudents
                      .filter((s) => s.status === "Active")
                      .slice(0, 3)
                      .map((student) => (
                        <div key={student.id} className="flex items-center space-x-4">
                          <Avatar className="w-10 h-10">
                            <AvatarImage src={student.avatar || "/placeholder.svg"} alt={student.name} />
                            <AvatarFallback>
                              {student.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-foreground">{student.name}</p>
                            <p className="text-sm text-muted-foreground">{student.subjects.join(", ")}</p>
                            <div className="flex items-center space-x-2 mt-1">
                              <div className="w-16 bg-muted rounded-full h-1.5">
                                <div
                                  className="bg-primary h-1.5 rounded-full"
                                  style={{ width: `${student.progress}%` }}
                                />
                              </div>
                              <span className="text-xs text-muted-foreground">{student.progress}%</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <Badge variant="outline">{student.status}</Badge>
                            <p className="text-xs text-muted-foreground mt-1">{student.lastSession}</p>
                          </div>
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="students" className="space-y-6">
            {/* Student Management Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold text-foreground">Student Management</h2>
                <p className="text-muted-foreground">Manage your students and track their progress</p>
              </div>
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search students..." className="pl-10 w-64" />
                </div>
                <Select defaultValue="all">
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="inactive">Inactive</SelectItem>
                  </SelectContent>
                </Select>
                <Button>
                  <Plus className="w-4 h-4 mr-2" />
                  Add Student
                </Button>
              </div>
            </div>

            {/* Student Stats */}
            <div className="grid md:grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Total Students</p>
                      <p className="text-2xl font-bold text-foreground">{allStudents.length}</p>
                    </div>
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Active Students</p>
                      <p className="text-2xl font-bold text-foreground">
                        {allStudents.filter((s) => s.status === "Active").length}
                      </p>
                    </div>
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Avg. Attendance</p>
                      <p className="text-2xl font-bold text-foreground">
                        {Math.round(allStudents.reduce((acc, s) => acc + s.attendance, 0) / allStudents.length)}%
                      </p>
                    </div>
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Need Attention</p>
                      <p className="text-2xl font-bold text-foreground">
                        {allStudents.filter((s) => s.status === "Inactive" || s.attendance < 70).length}
                      </p>
                    </div>
                    <AlertCircle className="w-6 h-6 text-destructive" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Students List */}
            <Card>
              <CardHeader>
                <CardTitle>All Students</CardTitle>
                <CardDescription>Detailed view of all your students</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {allStudents.map((student) => (
                    <div key={student.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-4">
                          <Avatar className="w-12 h-12">
                            <AvatarImage src={student.avatar || "/placeholder.svg"} alt={student.name} />
                            <AvatarFallback>
                              {student.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                              <h4 className="font-semibold text-foreground">{student.name}</h4>
                              <Badge variant={student.status === "Active" ? "default" : "secondary"}>
                                {student.status}
                              </Badge>
                              <Badge variant="outline" className="text-xs">
                                {student.currentLevel}
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground mb-2">{student.email}</p>
                            <div className="flex flex-wrap gap-1 mb-2">
                              {student.subjects.map((subject) => (
                                <Badge key={subject} variant="outline" className="text-xs">
                                  {subject}
                                </Badge>
                              ))}
                            </div>
                            <p className="text-sm text-muted-foreground text-pretty">{student.notes}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button variant="outline" size="sm" className="bg-transparent">
                            <MessageCircle className="w-4 h-4 mr-1" />
                            Message
                          </Button>
                          <Button variant="outline" size="sm" className="bg-transparent">
                            <Eye className="w-4 h-4 mr-1" />
                            View Details
                          </Button>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-4 gap-4 mt-4 pt-4 border-t">
                        <div className="space-y-1">
                          <p className="text-xs text-muted-foreground">Progress</p>
                          <div className="flex items-center space-x-2">
                            <Progress value={student.progress} className="h-2 flex-1" />
                            <span className="text-sm font-medium">{student.progress}%</span>
                          </div>
                        </div>
                        <div className="space-y-1">
                          <p className="text-xs text-muted-foreground">Attendance</p>
                          <p className="text-sm font-medium">{student.attendance}%</p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-xs text-muted-foreground">Sessions</p>
                          <p className="text-sm font-medium">
                            {student.completedSessions}/{student.totalSessions}
                          </p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-xs text-muted-foreground">Assignments</p>
                          <div className="flex items-center space-x-2 text-sm">
                            <span className="text-green-600">{student.assignments.completed}</span>
                            <span className="text-yellow-600">{student.assignments.pending}</span>
                            <span className="text-red-600">{student.assignments.overdue}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="sessions" className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold text-foreground">Session Management</h2>
                <p className="text-muted-foreground">Manage your teaching sessions and schedule</p>
              </div>
              <div className="flex items-center space-x-2">
                <Button variant="outline" className="bg-transparent">
                  <Calendar className="w-4 h-4 mr-2" />
                  View Calendar
                </Button>
                <Button>
                  <Plus className="w-4 h-4 mr-2" />
                  Schedule Session
                </Button>
              </div>
            </div>

            {/* Upcoming Sessions */}
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Sessions</CardTitle>
                <CardDescription>Your scheduled sessions for the next few days</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {detailedUpcomingSessions.map((session) => (
                    <div key={session.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-start space-x-4">
                          <Avatar className="w-10 h-10">
                            <AvatarImage src={session.studentAvatar || "/placeholder.svg"} alt={session.student} />
                            <AvatarFallback>
                              {session.student
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <h4 className="font-semibold text-foreground">{session.subject}</h4>
                            <p className="text-sm text-muted-foreground">{session.student}</p>
                            <div className="flex items-center space-x-4 mt-1">
                              <div className="flex items-center text-sm text-muted-foreground">
                                <Calendar className="w-4 h-4 mr-1" />
                                {session.date}
                              </div>
                              <div className="flex items-center text-sm text-muted-foreground">
                                <Clock className="w-4 h-4 mr-1" />
                                {session.time}
                              </div>
                              <Badge variant="outline">{session.type}</Badge>
                              <Badge variant={session.status === "Confirmed" ? "default" : "secondary"}>
                                {session.status}
                              </Badge>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button variant="outline" size="sm" className="bg-transparent">
                            <Edit className="w-4 h-4 mr-1" />
                            Edit
                          </Button>
                          <Button size="sm">
                            <Video className="w-4 h-4 mr-1" />
                            Start Session
                          </Button>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div>
                          <p className="text-sm font-medium text-foreground">Session Notes:</p>
                          <p className="text-sm text-muted-foreground">{session.sessionNotes}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">Materials:</p>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {session.materials.map((material, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {material}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="assignments" className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold text-foreground">Assignment Management</h2>
                <p className="text-muted-foreground">Create and manage assignments for your students</p>
              </div>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Create Assignment
              </Button>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              {/* Create Assignment */}
              <Card>
                <CardHeader>
                  <CardTitle>Create New Assignment</CardTitle>
                  <CardDescription>Assign homework or practice tasks to your students</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Assignment Title</label>
                    <Input placeholder="e.g., Memorize Surah Al-Fatiha" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Description</label>
                    <Textarea placeholder="Provide detailed instructions for the assignment..." />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Subject</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select subject" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="quran">Quran Recitation</SelectItem>
                          <SelectItem value="arabic">Arabic Language</SelectItem>
                          <SelectItem value="islamic-studies">Islamic Studies</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Due Date</label>
                      <Input type="date" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Assign to Students</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select students" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Students</SelectItem>
                        <SelectItem value="amina">Amina Hassan</SelectItem>
                        <SelectItem value="ibrahim">Ibrahim Musa</SelectItem>
                        <SelectItem value="khadijah">Khadijah Ali</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button className="w-full">
                    <Send className="w-4 h-4 mr-2" />
                    Create Assignment
                  </Button>
                </CardContent>
              </Card>

              {/* Assignment Overview */}
              <Card>
                <CardHeader>
                  <CardTitle>Assignment Overview</CardTitle>
                  <CardDescription>Track assignment completion and student progress</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div className="space-y-1">
                        <p className="text-2xl font-bold text-green-600">24</p>
                        <p className="text-sm text-muted-foreground">Completed</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-2xl font-bold text-yellow-600">8</p>
                        <p className="text-sm text-muted-foreground">Pending</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-2xl font-bold text-red-600">3</p>
                        <p className="text-sm text-muted-foreground">Overdue</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-medium text-foreground">Recent Assignments</h4>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between p-2 border rounded">
                          <div>
                            <p className="text-sm font-medium">Memorize Surah Al-Fatiha</p>
                            <p className="text-xs text-muted-foreground">Due: Tomorrow</p>
                          </div>
                          <Badge variant="outline">3/4 completed</Badge>
                        </div>
                        <div className="flex items-center justify-between p-2 border rounded">
                          <div>
                            <p className="text-sm font-medium">Arabic Verb Conjugation Practice</p>
                            <p className="text-xs text-muted-foreground">Due: Friday</p>
                          </div>
                          <Badge variant="secondary">2/3 completed</Badge>
                        </div>
                        <div className="flex items-center justify-between p-2 border rounded">
                          <div>
                            <p className="text-sm font-medium">Islamic History Essay</p>
                            <p className="text-xs text-muted-foreground">Due: Next week</p>
                          </div>
                          <Badge variant="outline">1/2 completed</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="profile">
            <Card>
              <CardHeader>
                <CardTitle>Profile Settings</CardTitle>
                <CardDescription>Update your teaching profile and preferences</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <Avatar className="w-20 h-20">
                      <AvatarImage src={teacherData.avatar || "/placeholder.svg"} alt={teacherData.name} />
                      <AvatarFallback className="text-lg">SA</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{teacherData.name}</h3>
                      <p className="text-muted-foreground">Islamic Studies Teacher</p>
                      <Button size="sm" variant="outline" className="mt-2 bg-transparent">
                        <Edit className="w-4 h-4 mr-2" />
                        Edit Profile
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-foreground mb-2">Subjects Taught</h4>
                      <div className="flex flex-wrap gap-2">
                        {teacherData.subjects.map((subject) => (
                          <Badge key={subject} variant="secondary">
                            {subject}
                          </Badge>
                        ))}
                      </div>
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
