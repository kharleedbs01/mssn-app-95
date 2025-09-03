import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, Star, MapPin, Clock, BookOpen } from "lucide-react"
import Link from "next/link"

// Mock teacher data - in real app this would come from database
const teachers = [
  {
    id: "1",
    name: "Sheikh Ahmed Al-Mansouri",
    avatar: "/islamic-scholar.png",
    subjects: ["Quran Recitation", "Tajweed", "Arabic Language"],
    experience: "15 years",
    rating: 4.9,
    students: 150,
    location: "Lagos, Nigeria",
    hourlyRate: "₦5,000",
    bio: "Certified Qari with Ijazah in Hafs recitation. Specializes in teaching proper Tajweed rules and Arabic pronunciation.",
    availability: "Available",
  },
  {
    id: "2",
    name: "Ustadha Fatima Ibrahim",
    avatar: "/female-islamic-teacher.jpg",
    subjects: ["Islamic Studies", "Hadith", "Fiqh"],
    experience: "12 years",
    rating: 4.8,
    students: 120,
    location: "Abuja, Nigeria",
    hourlyRate: "₦4,500",
    bio: "Graduate of Islamic University with expertise in Hadith sciences and Islamic jurisprudence. Patient and methodical teaching approach.",
    availability: "Available",
  },
  {
    id: "3",
    name: "Imam Yusuf Abdullahi",
    avatar: "/imam-teacher.jpg",
    subjects: ["Quran Memorization", "Islamic History", "Seerah"],
    experience: "20 years",
    rating: 5.0,
    students: 200,
    location: "Kano, Nigeria",
    hourlyRate: "₦6,000",
    bio: "Hafiz with 20 years of teaching experience. Specializes in Quran memorization techniques and Islamic history.",
    availability: "Busy",
  },
  {
    id: "4",
    name: "Dr. Aisha Musa",
    avatar: "/female-islamic-scholar.jpg",
    subjects: ["Arabic Grammar", "Islamic Philosophy", "Comparative Religion"],
    experience: "18 years",
    rating: 4.7,
    students: 95,
    location: "Ibadan, Nigeria",
    hourlyRate: "₦7,000",
    bio: "PhD in Islamic Studies with specialization in Arabic linguistics and Islamic philosophy. Academic and practical approach to learning.",
    availability: "Available",
  },
]

export default function TeachersPage() {
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
            <Link href="/auth/login">
              <Button variant="outline">Login</Button>
            </Link>
            <Link href="/auth/register">
              <Button>Get Started</Button>
            </Link>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Find Your Islamic Teacher</h1>
          <p className="text-muted-foreground text-lg">
            Connect with qualified Islamic scholars and teachers for personalized learning
          </p>
        </div>

        {/* Search and Filters */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="grid md:grid-cols-4 gap-4">
              <div className="md:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search by name, subject, or location..." className="pl-10" />
                </div>
              </div>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Subject" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="quran">Quran Recitation</SelectItem>
                  <SelectItem value="arabic">Arabic Language</SelectItem>
                  <SelectItem value="islamic-studies">Islamic Studies</SelectItem>
                  <SelectItem value="hadith">Hadith</SelectItem>
                  <SelectItem value="fiqh">Fiqh</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Availability" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="available">Available Now</SelectItem>
                  <SelectItem value="busy">Busy</SelectItem>
                  <SelectItem value="all">All Teachers</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Teachers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teachers.map((teacher) => (
            <Card key={teacher.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="flex items-start space-x-4">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src={teacher.avatar || "/placeholder.svg"} alt={teacher.name} />
                    <AvatarFallback>
                      {teacher.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <CardTitle className="text-lg text-balance">{teacher.name}</CardTitle>
                    <div className="flex items-center space-x-2 mt-1">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium ml-1">{teacher.rating}</span>
                      </div>
                      <span className="text-muted-foreground text-sm">•</span>
                      <span className="text-sm text-muted-foreground">{teacher.students} students</span>
                    </div>
                  </div>
                  <Badge variant={teacher.availability === "Available" ? "default" : "secondary"}>
                    {teacher.availability}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <CardDescription className="text-pretty">{teacher.bio}</CardDescription>

                <div className="space-y-2">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-2" />
                    {teacher.location}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 mr-2" />
                    {teacher.experience} experience
                  </div>
                </div>

                <div className="flex flex-wrap gap-1">
                  {teacher.subjects.map((subject) => (
                    <Badge key={subject} variant="outline" className="text-xs">
                      {subject}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t">
                  <div>
                    <span className="text-lg font-semibold text-foreground">{teacher.hourlyRate}</span>
                    <span className="text-sm text-muted-foreground">/hour</span>
                  </div>
                  <div className="flex space-x-2">
                    <Link href={`/teachers/${teacher.id}`}>
                      <Button variant="outline" size="sm">
                        View Profile
                      </Button>
                    </Link>
                    <Button size="sm" disabled={teacher.availability === "Busy"}>
                      Book Session
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Teachers
          </Button>
        </div>
      </div>
    </div>
  )
}
