"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  BookOpen,
  Calendar,
  Clock,
  Star,
  TrendingUp,
  Play,
  MessageCircle,
  Settings,
  Search,
  Award,
  Target,
} from "lucide-react"
import Link from "next/link"

// Mock student data
const studentData = {
  name: "Amina Hassan",
  avatar: "/diverse-female-student.png",
  level: "Intermediate",
  totalHours: 45,
  completedLessons: 28,
  currentStreak: 7,
  joinDate: "March 2024",
}

const enrolledCourses = [
  {
    id: 1,
    title: "Quran Recitation with Tajweed",
    teacher: "Sheikh Ahmed Al-Mansouri",
    teacherAvatar: "/islamic-scholar.png",
    progress: 75,
    totalLessons: 20,
    completedLessons: 15,
    nextSession: "Today, 2:00 PM",
    rating: 4.9,
  },
  {
    id: 2,
    title: "Arabic Language Fundamentals",
    teacher: "Dr. Aisha Musa",
    teacherAvatar: "/female-islamic-scholar.jpg",
    progress: 40,
    totalLessons: 25,
    completedLessons: 10,
    nextSession: "Tomorrow, 10:00 AM",
    rating: 4.7,
  },
  {
    id: 3,
    title: "Islamic History & Seerah",
    teacher: "Imam Yusuf Abdullahi",
    teacherAvatar: "/imam-teacher.jpg",
    progress: 60,
    totalLessons: 15,
    completedLessons: 9,
    nextSession: "Friday, 3:00 PM",
    rating: 5.0,
  },
]

const upcomingSessions = [
  {
    id: 1,
    title: "Quran Recitation Practice",
    teacher: "Sheikh Ahmed Al-Mansouri",
    time: "2:00 PM - 3:00 PM",
    date: "Today",
    type: "Live Session",
    status: "Starting Soon",
  },
  {
    id: 2,
    title: "Arabic Grammar Lesson",
    teacher: "Dr. Aisha Musa",
    time: "10:00 AM - 11:00 AM",
    date: "Tomorrow",
    type: "Live Session",
    status: "Scheduled",
  },
  {
    id: 3,
    title: "Seerah Discussion",
    teacher: "Imam Yusuf Abdullahi",
    time: "3:00 PM - 4:00 PM",
    date: "Friday",
    type: "Group Session",
    status: "Scheduled",
  },
]

const achievements = [
  {
    id: 1,
    title: "First Surah Memorized",
    description: "Completed memorization of Al-Fatiha",
    icon: "🏆",
    date: "2 weeks ago",
  },
  {
    id: 2,
    title: "7-Day Streak",
    description: "Attended sessions for 7 consecutive days",
    icon: "🔥",
    date: "Today",
  },
  {
    id: 3,
    title: "Tajweed Master",
    description: "Mastered basic Tajweed rules",
    icon: "⭐",
    date: "1 month ago",
  },
]

export default function StudentDashboard() {
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
              <p className="text-sm text-muted-foreground">Student Dashboard</p>
            </div>
          </Link>
          <nav className="flex items-center space-x-4">
            <Link href="/teachers">
              <Button variant="outline" size="sm">
                <Search className="w-4 h-4 mr-2" />
                Find Teachers
              </Button>
            </Link>
            <Button variant="outline" size="sm">
              <MessageCircle className="w-4 h-4 mr-2" />
              Messages
            </Button>
            <Button variant="outline" size="sm">
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </Button>
            <Avatar className="w-8 h-8">
              <AvatarImage src={studentData.avatar || "/placeholder.svg"} alt={studentData.name} />
              <AvatarFallback>AH</AvatarFallback>
            </Avatar>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Assalamu Alaikum, {studentData.name.split(" ")[0]}
          </h1>
          <p className="text-muted-foreground">Continue your Islamic learning journey. May Allah bless your studies.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Learning Hours</p>
                  <p className="text-2xl font-bold text-foreground">{studentData.totalHours}</p>
                </div>
                <Clock className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Completed Lessons</p>
                  <p className="text-2xl font-bold text-foreground">{studentData.completedLessons}</p>
                </div>
                <BookOpen className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Current Streak</p>
                  <p className="text-2xl font-bold text-foreground">{studentData.currentStreak} days</p>
                </div>
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Level</p>
                  <p className="text-2xl font-bold text-foreground">{studentData.level}</p>
                </div>
                <Target className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full lg:w-auto grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="courses">My Courses</TabsTrigger>
            <TabsTrigger value="sessions">Sessions</TabsTrigger>
            <TabsTrigger value="progress">Progress</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Upcoming Sessions */}
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Sessions</CardTitle>
                  <CardDescription>Your scheduled classes and lessons</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {upcomingSessions.slice(0, 3).map((session) => (
                      <div key={session.id} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex-1">
                          <p className="font-medium text-foreground">{session.title}</p>
                          <p className="text-sm text-muted-foreground">{session.teacher}</p>
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
                          <Badge
                            variant={session.status === "Starting Soon" ? "default" : "secondary"}
                            className="mt-1"
                          >
                            {session.status}
                          </Badge>
                          {session.status === "Starting Soon" && (
                            <Button size="sm" className="mt-2 w-full">
                              <Play className="w-3 h-3 mr-1" />
                              Join Now
                            </Button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Current Courses */}
              <Card>
                <CardHeader>
                  <CardTitle>Current Courses</CardTitle>
                  <CardDescription>Your enrolled courses and progress</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {enrolledCourses.map((course) => (
                      <div key={course.id} className="space-y-3">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h4 className="font-medium text-foreground text-balance">{course.title}</h4>
                            <p className="text-sm text-muted-foreground">{course.teacher}</p>
                          </div>
                          <div className="flex items-center">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                            <span className="text-sm">{course.rating}</span>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Progress</span>
                            <span className="font-medium">
                              {course.completedLessons}/{course.totalLessons} lessons
                            </span>
                          </div>
                          <Progress value={course.progress} className="h-2" />
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">Next: {course.nextSession}</span>
                          <Button size="sm" variant="outline" className="bg-transparent">
                            Continue
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Achievements */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Achievements</CardTitle>
                <CardDescription>Celebrate your learning milestones</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  {achievements.map((achievement) => (
                    <div key={achievement.id} className="flex items-center space-x-3 p-3 border rounded-lg">
                      <div className="text-2xl">{achievement.icon}</div>
                      <div className="flex-1">
                        <p className="font-medium text-foreground">{achievement.title}</p>
                        <p className="text-sm text-muted-foreground">{achievement.description}</p>
                        <p className="text-xs text-muted-foreground mt-1">{achievement.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="courses">
            <Card>
              <CardHeader>
                <CardTitle>My Courses</CardTitle>
                <CardDescription>All your enrolled courses and learning paths</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {enrolledCourses.map((course) => (
                    <Card key={course.id}>
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4 mb-4">
                          <Avatar className="w-12 h-12">
                            <AvatarImage src={course.teacherAvatar || "/placeholder.svg"} alt={course.teacher} />
                            <AvatarFallback>
                              {course.teacher
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <h3 className="font-semibold text-foreground text-balance">{course.title}</h3>
                            <p className="text-sm text-muted-foreground">{course.teacher}</p>
                            <div className="flex items-center mt-1">
                              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                              <span className="text-sm">{course.rating}</span>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Progress</span>
                            <span className="font-medium">{course.progress}%</span>
                          </div>
                          <Progress value={course.progress} className="h-2" />

                          <div className="flex justify-between text-sm text-muted-foreground">
                            <span>
                              {course.completedLessons} of {course.totalLessons} lessons
                            </span>
                            <span>Next: {course.nextSession}</span>
                          </div>

                          <div className="flex space-x-2 pt-2">
                            <Button size="sm" className="flex-1">
                              Continue Learning
                            </Button>
                            <Button size="sm" variant="outline" className="bg-transparent">
                              <MessageCircle className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="sessions">
            <Card>
              <CardHeader>
                <CardTitle>Session Schedule</CardTitle>
                <CardDescription>View and manage your upcoming sessions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingSessions.map((session) => (
                    <div key={session.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-medium text-foreground">{session.title}</h4>
                        <p className="text-sm text-muted-foreground">{session.teacher}</p>
                        <div className="flex items-center space-x-4 mt-2">
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="w-4 h-4 mr-1" />
                            {session.date}
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Clock className="w-4 h-4 mr-1" />
                            {session.time}
                          </div>
                          <Badge variant="outline">{session.type}</Badge>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant={session.status === "Starting Soon" ? "default" : "secondary"}>
                          {session.status}
                        </Badge>
                        {session.status === "Starting Soon" ? (
                          <Button size="sm">
                            <Play className="w-4 h-4 mr-2" />
                            Join Session
                          </Button>
                        ) : (
                          <Button size="sm" variant="outline" className="bg-transparent">
                            View Details
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="progress">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Learning Progress</CardTitle>
                  <CardDescription>Track your overall learning journey</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-foreground mb-2">{studentData.level}</div>
                    <p className="text-muted-foreground">Current Level</p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Total Learning Hours</span>
                      <span className="font-medium">{studentData.totalHours} hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Lessons Completed</span>
                      <span className="font-medium">{studentData.completedLessons}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Current Streak</span>
                      <span className="font-medium">{studentData.currentStreak} days</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Member Since</span>
                      <span className="font-medium">{studentData.joinDate}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Achievements</CardTitle>
                  <CardDescription>Your learning milestones and badges</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {achievements.map((achievement) => (
                      <div key={achievement.id} className="flex items-center space-x-3 p-3 border rounded-lg">
                        <div className="text-2xl">{achievement.icon}</div>
                        <div className="flex-1">
                          <p className="font-medium text-foreground">{achievement.title}</p>
                          <p className="text-sm text-muted-foreground">{achievement.description}</p>
                          <p className="text-xs text-muted-foreground mt-1">{achievement.date}</p>
                        </div>
                        <Award className="w-5 h-5 text-primary" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
