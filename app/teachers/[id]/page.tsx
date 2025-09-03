import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Star, MapPin, BookOpen, Calendar, MessageCircle, Award, Users, GraduationCap } from "lucide-react"
import Link from "next/link"

// Mock teacher data - in real app this would be fetched based on ID
const teacher = {
  id: "1",
  name: "Sheikh Ahmed Al-Mansouri",
  avatar: "/islamic-scholar.png",
  subjects: ["Quran Recitation", "Tajweed", "Arabic Language"],
  experience: "15 years",
  rating: 4.9,
  totalReviews: 89,
  students: 150,
  location: "Lagos, Nigeria",
  hourlyRate: "₦5,000",
  bio: "Assalamu Alaikum. I am Sheikh Ahmed Al-Mansouri, a certified Qari with Ijazah in Hafs recitation from Al-Azhar University. I have been teaching Quran recitation and Arabic language for over 15 years, helping students of all ages master the beautiful art of Quranic recitation with proper Tajweed rules.",
  availability: "Available",
  qualifications: [
    "Ijazah in Quranic Recitation (Hafs) - Al-Azhar University",
    "Bachelor's in Islamic Studies - Islamic University of Madinah",
    "Certificate in Arabic Language Teaching - King Saud University",
    "Certified Tajweed Instructor",
  ],
  specializations: [
    "Quran Memorization (Hifz)",
    "Tajweed Rules and Application",
    "Arabic Pronunciation",
    "Quranic Arabic Grammar",
    "Recitation Styles (Qira'at)",
  ],
  teachingApproach:
    "I believe in a patient, step-by-step approach to learning. Each student is unique, and I tailor my teaching methods to match their learning style and pace. My classes combine traditional Islamic teaching methods with modern educational techniques.",
  reviews: [
    {
      id: 1,
      student: "Amina Hassan",
      rating: 5,
      comment:
        "Sheikh Ahmed is an excellent teacher. His patience and clear explanations helped me improve my Tajweed significantly.",
      date: "2 weeks ago",
    },
    {
      id: 2,
      student: "Ibrahim Musa",
      rating: 5,
      comment: "Alhamdulillah, I completed my Quran memorization under Sheikh Ahmed's guidance. Highly recommended!",
      date: "1 month ago",
    },
    {
      id: 3,
      student: "Khadijah Ali",
      rating: 4,
      comment: "Great teacher with deep knowledge. The Arabic lessons are very well structured.",
      date: "2 months ago",
    },
  ],
}

export default function TeacherProfilePage({ params }: { params: { id: string } }) {
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
              <p className="text-sm text-muted-foreground">Islamic Learning Platform</p>
            </div>
          </Link>
          <nav className="flex items-center space-x-4">
            <Link href="/teachers">
              <Button variant="outline">Browse Teachers</Button>
            </Link>
            <Link href="/auth/login">
              <Button>Login</Button>
            </Link>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Profile Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Profile Header */}
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-start space-y-4 md:space-y-0 md:space-x-6">
                  <Avatar className="w-24 h-24 mx-auto md:mx-0">
                    <AvatarImage src={teacher.avatar || "/placeholder.svg"} alt={teacher.name} />
                    <AvatarFallback className="text-lg">
                      {teacher.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>

                  <div className="flex-1 text-center md:text-left">
                    <h1 className="text-2xl font-bold text-foreground mb-2">{teacher.name}</h1>

                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-4">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium ml-1">{teacher.rating}</span>
                        <span className="text-muted-foreground ml-1">({teacher.totalReviews} reviews)</span>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Users className="w-4 h-4 mr-1" />
                        {teacher.students} students
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <MapPin className="w-4 h-4 mr-1" />
                        {teacher.location}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                      {teacher.subjects.map((subject) => (
                        <Badge key={subject} variant="secondary">
                          {subject}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* About */}
            <Card>
              <CardHeader>
                <CardTitle>About Sheikh Ahmed</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-pretty">{teacher.bio}</p>
              </CardContent>
            </Card>

            {/* Teaching Approach */}
            <Card>
              <CardHeader>
                <CardTitle>Teaching Approach</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-pretty">{teacher.teachingApproach}</p>
              </CardContent>
            </Card>

            {/* Qualifications */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <GraduationCap className="w-5 h-5 mr-2" />
                  Qualifications & Certifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {teacher.qualifications.map((qualification, index) => (
                    <li key={index} className="flex items-start">
                      <Award className="w-4 h-4 text-primary mt-1 mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground">{qualification}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Specializations */}
            <Card>
              <CardHeader>
                <CardTitle>Areas of Specialization</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-3">
                  {teacher.specializations.map((specialization, index) => (
                    <div key={index} className="flex items-center">
                      <BookOpen className="w-4 h-4 text-primary mr-2" />
                      <span className="text-muted-foreground">{specialization}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Reviews */}
            <Card>
              <CardHeader>
                <CardTitle>Student Reviews</CardTitle>
                <CardDescription>What students say about Sheikh Ahmed's teaching</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {teacher.reviews.map((review) => (
                    <div key={review.id}>
                      <div className="flex items-start space-x-4">
                        <Avatar className="w-10 h-10">
                          <AvatarFallback>
                            {review.student
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <span className="font-medium">{review.student}</span>
                            <div className="flex">
                              {[...Array(review.rating)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                              ))}
                            </div>
                            <span className="text-sm text-muted-foreground">{review.date}</span>
                          </div>
                          <p className="text-muted-foreground text-pretty">{review.comment}</p>
                        </div>
                      </div>
                      {review.id !== teacher.reviews[teacher.reviews.length - 1].id && <Separator className="mt-6" />}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Booking Card */}
            <Card>
              <CardHeader>
                <CardTitle>Book a Session</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-foreground">{teacher.hourlyRate}</div>
                  <div className="text-muted-foreground">per hour</div>
                </div>

                <Badge
                  className="w-full justify-center"
                  variant={teacher.availability === "Available" ? "default" : "secondary"}
                >
                  {teacher.availability}
                </Badge>

                <div className="space-y-2">
                  <Button className="w-full" disabled={teacher.availability === "Busy"}>
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule Session
                  </Button>
                  <Button variant="outline" className="w-full bg-transparent">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Experience</span>
                  <span className="font-medium">{teacher.experience}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Total Students</span>
                  <span className="font-medium">{teacher.students}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Rating</span>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                    <span className="font-medium">{teacher.rating}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Response Time</span>
                  <span className="font-medium">Within 2 hours</span>
                </div>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card>
              <CardHeader>
                <CardTitle>Need Help?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Have questions about booking or the teacher's availability? Our support team is here to help.
                </p>
                <Button variant="outline" className="w-full bg-transparent">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Contact Support
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
