"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarIcon, Clock, BookOpen, Video, Star, ChevronLeft, ChevronRight, Edit, Trash2 } from "lucide-react"
import Link from "next/link"

// Mock data for scheduling
const availableSlots = [
  { time: "9:00 AM", available: true },
  { time: "10:00 AM", available: false },
  { time: "11:00 AM", available: true },
  { time: "2:00 PM", available: true },
  { time: "3:00 PM", available: false },
  { time: "4:00 PM", available: true },
  { time: "5:00 PM", available: true },
]

const upcomingBookings = [
  {
    id: 1,
    student: "Amina Hassan",
    studentAvatar: "/diverse-female-student.png",
    subject: "Quran Recitation",
    date: "Today",
    time: "2:00 PM - 3:00 PM",
    status: "Confirmed",
    type: "Regular Session",
    notes: "Continue with Surah Al-Baqarah",
  },
  {
    id: 2,
    student: "Ibrahim Musa",
    studentAvatar: "/male-student-studying.png",
    subject: "Arabic Language",
    date: "Tomorrow",
    time: "4:00 PM - 5:00 PM",
    status: "Pending",
    type: "Trial Session",
    notes: "First session - Arabic basics",
  },
  {
    id: 3,
    student: "Khadijah Ali",
    studentAvatar: "/female-student-hijab.jpg",
    subject: "Islamic Studies",
    date: "Friday",
    time: "10:00 AM - 11:00 AM",
    status: "Confirmed",
    type: "Group Session",
    notes: "Five Pillars of Islam discussion",
  },
]

const teachers = [
  {
    id: "1",
    name: "Sheikh Ahmed Al-Mansouri",
    avatar: "/islamic-scholar.png",
    subjects: ["Quran Recitation", "Tajweed", "Arabic Language"],
    rating: 4.9,
    hourlyRate: 5000,
    availability: "Available",
    location: "Lagos, Nigeria",
  },
  {
    id: "2",
    name: "Ustadha Fatima Ibrahim",
    avatar: "/female-islamic-teacher.jpg",
    subjects: ["Islamic Studies", "Hadith", "Fiqh"],
    rating: 4.8,
    hourlyRate: 4500,
    availability: "Available",
    location: "Abuja, Nigeria",
  },
]

export default function SchedulePage() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
  const [selectedTime, setSelectedTime] = useState("")
  const [selectedTeacher, setSelectedTeacher] = useState("")
  const [sessionType, setSessionType] = useState("")
  const [subject, setSubject] = useState("")
  const [notes, setNotes] = useState("")

  const handleBookSession = () => {
    // In real app, create booking
    console.log("Booking session:", {
      date: selectedDate,
      time: selectedTime,
      teacher: selectedTeacher,
      subject,
      type: sessionType,
      notes,
    })
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/dashboard/student" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">MSSN Tutor</h1>
              <p className="text-sm text-muted-foreground">Schedule Sessions</p>
            </div>
          </Link>
          <nav className="flex items-center space-x-4">
            <Link href="/dashboard/student">
              <Button variant="outline">Dashboard</Button>
            </Link>
            <Link href="/teachers">
              <Button variant="outline">Find Teachers</Button>
            </Link>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Schedule Your Learning Sessions</h1>
          <p className="text-muted-foreground text-lg">
            Book sessions with your teachers and manage your learning schedule
          </p>
        </div>

        <Tabs defaultValue="book" className="space-y-6">
          <TabsList className="grid w-full lg:w-auto grid-cols-3">
            <TabsTrigger value="book">Book Session</TabsTrigger>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="calendar">Calendar View</TabsTrigger>
          </TabsList>

          <TabsContent value="book" className="space-y-6">
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Booking Form */}
              <div className="lg:col-span-2 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Book a New Session</CardTitle>
                    <CardDescription>Schedule a learning session with your preferred teacher</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Teacher Selection */}
                    <div className="space-y-4">
                      <h3 className="font-semibold text-foreground">Select Teacher</h3>
                      <div className="grid gap-4">
                        {teachers.map((teacher) => (
                          <div
                            key={teacher.id}
                            className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                              selectedTeacher === teacher.id
                                ? "border-primary bg-primary/5"
                                : "border-border hover:border-primary/50"
                            }`}
                            onClick={() => setSelectedTeacher(teacher.id)}
                          >
                            <div className="flex items-center space-x-4">
                              <Avatar className="w-12 h-12">
                                <AvatarImage src={teacher.avatar || "/placeholder.svg"} alt={teacher.name} />
                                <AvatarFallback>
                                  {teacher.name
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </AvatarFallback>
                              </Avatar>
                              <div className="flex-1">
                                <h4 className="font-medium text-foreground">{teacher.name}</h4>
                                <div className="flex items-center space-x-2 mt-1">
                                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                  <span className="text-sm">{teacher.rating}</span>
                                  <span className="text-sm text-muted-foreground">•</span>
                                  <span className="text-sm text-muted-foreground">
                                    ₦{teacher.hourlyRate.toLocaleString()}/hr
                                  </span>
                                </div>
                                <div className="flex flex-wrap gap-1 mt-2">
                                  {teacher.subjects.map((subject) => (
                                    <Badge key={subject} variant="outline" className="text-xs">
                                      {subject}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                              <Badge variant={teacher.availability === "Available" ? "default" : "secondary"}>
                                {teacher.availability}
                              </Badge>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Session Details */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Subject</label>
                        <Select value={subject} onValueChange={setSubject}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select subject" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="quran">Quran Recitation</SelectItem>
                            <SelectItem value="arabic">Arabic Language</SelectItem>
                            <SelectItem value="islamic-studies">Islamic Studies</SelectItem>
                            <SelectItem value="hadith">Hadith</SelectItem>
                            <SelectItem value="tajweed">Tajweed</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Session Type</label>
                        <Select value={sessionType} onValueChange={setSessionType}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="trial">Trial Session (30 min)</SelectItem>
                            <SelectItem value="regular">Regular Session (60 min)</SelectItem>
                            <SelectItem value="intensive">Intensive Session (90 min)</SelectItem>
                            <SelectItem value="group">Group Session (60 min)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Session Notes */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Session Notes (Optional)</label>
                      <Textarea
                        placeholder="Any specific topics you'd like to focus on or questions you have..."
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                      />
                    </div>

                    <Button
                      onClick={handleBookSession}
                      className="w-full"
                      disabled={!selectedTeacher || !selectedDate || !selectedTime || !subject || !sessionType}
                    >
                      <CalendarIcon className="w-4 h-4 mr-2" />
                      Book Session
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Date and Time Selection */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Select Date</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      className="rounded-md border"
                      disabled={(date) => date < new Date()}
                    />
                  </CardContent>
                </Card>

                {selectedDate && (
                  <Card>
                    <CardHeader>
                      <CardTitle>Available Times</CardTitle>
                      <CardDescription>
                        {selectedDate.toLocaleDateString("en-US", {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-2">
                        {availableSlots.map((slot) => (
                          <Button
                            key={slot.time}
                            variant={selectedTime === slot.time ? "default" : "outline"}
                            size="sm"
                            disabled={!slot.available}
                            onClick={() => setSelectedTime(slot.time)}
                            className="bg-transparent"
                          >
                            {slot.time}
                          </Button>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="upcoming" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Sessions</CardTitle>
                <CardDescription>Your scheduled learning sessions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingBookings.map((booking) => (
                    <div key={booking.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-4">
                          <Avatar className="w-12 h-12">
                            <AvatarImage src={booking.studentAvatar || "/placeholder.svg"} alt={booking.student} />
                            <AvatarFallback>
                              {booking.student
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <h4 className="font-semibold text-foreground">{booking.subject}</h4>
                            <p className="text-sm text-muted-foreground">with {booking.student}</p>
                            <div className="flex items-center space-x-4 mt-2">
                              <div className="flex items-center text-sm text-muted-foreground">
                                <CalendarIcon className="w-4 h-4 mr-1" />
                                {booking.date}
                              </div>
                              <div className="flex items-center text-sm text-muted-foreground">
                                <Clock className="w-4 h-4 mr-1" />
                                {booking.time}
                              </div>
                              <Badge variant="outline">{booking.type}</Badge>
                              <Badge variant={booking.status === "Confirmed" ? "default" : "secondary"}>
                                {booking.status}
                              </Badge>
                            </div>
                            {booking.notes && (
                              <p className="text-sm text-muted-foreground mt-2 text-pretty">{booking.notes}</p>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button variant="outline" size="sm" className="bg-transparent">
                            <Edit className="w-4 h-4 mr-1" />
                            Edit
                          </Button>
                          {booking.status === "Confirmed" && booking.date === "Today" && (
                            <Link href={`/session/${booking.id}`}>
                              <Button size="sm">
                                <Video className="w-4 h-4 mr-1" />
                                Join Session
                              </Button>
                            </Link>
                          )}
                          <Button variant="ghost" size="sm">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="calendar">
            <Card>
              <CardHeader>
                <CardTitle>Calendar View</CardTitle>
                <CardDescription>View all your sessions in calendar format</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Calendar Header */}
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-foreground">December 2024</h3>
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm" className="bg-transparent">
                        <ChevronLeft className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="sm" className="bg-transparent">
                        <ChevronRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Calendar Grid - Simplified for demo */}
                  <div className="grid grid-cols-7 gap-2 text-center">
                    {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                      <div key={day} className="p-2 font-medium text-muted-foreground">
                        {day}
                      </div>
                    ))}
                    {Array.from({ length: 35 }, (_, i) => (
                      <div key={i} className="aspect-square p-2 border rounded hover:bg-muted/50 cursor-pointer">
                        <div className="text-sm">{(i % 31) + 1}</div>
                        {/* Sample session indicators */}
                        {i === 15 && <div className="w-2 h-2 bg-primary rounded-full mt-1"></div>}
                        {i === 18 && <div className="w-2 h-2 bg-secondary rounded-full mt-1"></div>}
                        {i === 22 && <div className="w-2 h-2 bg-primary rounded-full mt-1"></div>}
                      </div>
                    ))}
                  </div>

                  {/* Legend */}
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">Confirmed Sessions</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-secondary rounded-full"></div>
                      <span className="text-muted-foreground">Pending Sessions</span>
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
