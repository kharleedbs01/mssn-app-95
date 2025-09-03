"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Search, Star, MapPin, Clock, BookOpen, Filter, Heart, MessageCircle, Calendar } from "lucide-react"
import Link from "next/link"

// Mock teacher data with more detailed information
const teachers = [
  {
    id: "1",
    name: "Sheikh Ahmed Al-Mansouri",
    avatar: "/islamic-scholar.png",
    subjects: ["Quran Recitation", "Tajweed", "Arabic Language"],
    experience: "15 years",
    rating: 4.9,
    totalReviews: 89,
    students: 150,
    location: "Lagos, Nigeria",
    hourlyRate: 5000,
    bio: "Certified Qari with Ijazah in Hafs recitation. Specializes in teaching proper Tajweed rules and Arabic pronunciation.",
    availability: "Available",
    languages: ["Arabic", "English", "Hausa"],
    specializations: ["Quran Memorization", "Tajweed", "Arabic Grammar"],
    responseTime: "Within 2 hours",
    verified: true,
  },
  {
    id: "2",
    name: "Ustadha Fatima Ibrahim",
    avatar: "/female-islamic-teacher.jpg",
    subjects: ["Islamic Studies", "Hadith", "Fiqh"],
    experience: "12 years",
    rating: 4.8,
    totalReviews: 67,
    students: 120,
    location: "Abuja, Nigeria",
    hourlyRate: 4500,
    bio: "Graduate of Islamic University with expertise in Hadith sciences and Islamic jurisprudence. Patient and methodical teaching approach.",
    availability: "Available",
    languages: ["Arabic", "English"],
    specializations: ["Hadith Studies", "Islamic Jurisprudence", "Women's Islamic Education"],
    responseTime: "Within 1 hour",
    verified: true,
  },
  {
    id: "3",
    name: "Imam Yusuf Abdullahi",
    avatar: "/imam-teacher.jpg",
    subjects: ["Quran Memorization", "Islamic History", "Seerah"],
    experience: "20 years",
    rating: 5.0,
    totalReviews: 124,
    students: 200,
    location: "Kano, Nigeria",
    hourlyRate: 6000,
    bio: "Hafiz with 20 years of teaching experience. Specializes in Quran memorization techniques and Islamic history.",
    availability: "Busy",
    languages: ["Arabic", "English", "Hausa", "Fulani"],
    specializations: ["Quran Memorization", "Islamic History", "Seerah Studies"],
    responseTime: "Within 4 hours",
    verified: true,
  },
  {
    id: "4",
    name: "Dr. Aisha Musa",
    avatar: "/female-islamic-scholar.jpg",
    subjects: ["Arabic Grammar", "Islamic Philosophy", "Comparative Religion"],
    experience: "18 years",
    rating: 4.7,
    totalReviews: 93,
    students: 95,
    location: "Ibadan, Nigeria",
    hourlyRate: 7000,
    bio: "PhD in Islamic Studies with specialization in Arabic linguistics and Islamic philosophy. Academic and practical approach to learning.",
    availability: "Available",
    languages: ["Arabic", "English", "Yoruba"],
    specializations: ["Arabic Linguistics", "Islamic Philosophy", "Academic Research"],
    responseTime: "Within 3 hours",
    verified: true,
  },
]

export default function StudentSearchPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedSubject, setSelectedSubject] = useState("all")
  const [selectedAvailability, setSelectedAvailability] = useState("all")
  const [priceRange, setPriceRange] = useState([0, 10000])
  const [showFilters, setShowFilters] = useState(false)
  const [favorites, setFavorites] = useState<string[]>([])

  const toggleFavorite = (teacherId: string) => {
    setFavorites((prev) => (prev.includes(teacherId) ? prev.filter((id) => id !== teacherId) : [...prev, teacherId]))
  }

  const filteredTeachers = teachers.filter((teacher) => {
    const matchesSearch =
      teacher.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      teacher.subjects.some((subject) => subject.toLowerCase().includes(searchQuery.toLowerCase())) ||
      teacher.location.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesSubject = selectedSubject === "all" || teacher.subjects.includes(selectedSubject)
    const matchesAvailability = selectedAvailability === "all" || teacher.availability === selectedAvailability
    const matchesPrice = teacher.hourlyRate >= priceRange[0] && teacher.hourlyRate <= priceRange[1]

    return matchesSearch && matchesSubject && matchesAvailability && matchesPrice
  })

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
              <p className="text-sm text-muted-foreground">Find Your Teacher</p>
            </div>
          </Link>
          <nav className="flex items-center space-x-4">
            <Link href="/dashboard/student">
              <Button variant="outline">Dashboard</Button>
            </Link>
            <Button variant="outline">
              <MessageCircle className="w-4 h-4 mr-2" />
              Messages
            </Button>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Find Your Perfect Islamic Teacher</h1>
          <p className="text-muted-foreground text-lg">
            Discover qualified Islamic scholars and teachers tailored to your learning needs
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Filters</span>
                  <Button variant="ghost" size="sm" onClick={() => setShowFilters(!showFilters)} className="lg:hidden">
                    <Filter className="w-4 h-4" />
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent className={`space-y-6 ${showFilters ? "block" : "hidden lg:block"}`}>
                {/* Subject Filter */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Subject</label>
                  <Select value={selectedSubject} onValueChange={setSelectedSubject}>
                    <SelectTrigger>
                      <SelectValue placeholder="All Subjects" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Subjects</SelectItem>
                      <SelectItem value="Quran Recitation">Quran Recitation</SelectItem>
                      <SelectItem value="Arabic Language">Arabic Language</SelectItem>
                      <SelectItem value="Islamic Studies">Islamic Studies</SelectItem>
                      <SelectItem value="Hadith">Hadith</SelectItem>
                      <SelectItem value="Fiqh">Fiqh</SelectItem>
                      <SelectItem value="Tajweed">Tajweed</SelectItem>
                      <SelectItem value="Islamic History">Islamic History</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Availability Filter */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Availability</label>
                  <Select value={selectedAvailability} onValueChange={setSelectedAvailability}>
                    <SelectTrigger>
                      <SelectValue placeholder="All Teachers" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Teachers</SelectItem>
                      <SelectItem value="Available">Available Now</SelectItem>
                      <SelectItem value="Busy">Busy</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Price Range */}
                <div className="space-y-3">
                  <label className="text-sm font-medium text-foreground">Price Range (₦/hour)</label>
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    max={10000}
                    min={0}
                    step={500}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>₦{priceRange[0].toLocaleString()}</span>
                    <span>₦{priceRange[1].toLocaleString()}</span>
                  </div>
                </div>

                {/* Additional Filters */}
                <div className="space-y-3">
                  <label className="text-sm font-medium text-foreground">Additional Filters</label>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="verified" />
                      <label htmlFor="verified" className="text-sm text-muted-foreground">
                        Verified Teachers Only
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="trial" />
                      <label htmlFor="trial" className="text-sm text-muted-foreground">
                        Offers Trial Lessons
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="group" />
                      <label htmlFor="group" className="text-sm text-muted-foreground">
                        Group Sessions Available
                      </label>
                    </div>
                  </div>
                </div>

                <Button variant="outline" className="w-full bg-transparent">
                  Clear All Filters
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Search Bar */}
            <Card>
              <CardContent className="p-6">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search by teacher name, subject, or location..."
                    className="pl-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Results Header */}
            <div className="flex items-center justify-between">
              <p className="text-muted-foreground">
                Found {filteredTeachers.length} teacher{filteredTeachers.length !== 1 ? "s" : ""}
              </p>
              <Select defaultValue="rating">
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="experience">Most Experienced</SelectItem>
                  <SelectItem value="students">Most Students</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Teachers Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {filteredTeachers.map((teacher) => (
                <Card key={teacher.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
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
                          <div className="flex items-center space-x-2">
                            <h3 className="font-semibold text-foreground text-balance">{teacher.name}</h3>
                            {teacher.verified && (
                              <Badge variant="secondary" className="text-xs">
                                Verified
                              </Badge>
                            )}
                          </div>
                          <div className="flex items-center space-x-2 mt-1">
                            <div className="flex items-center">
                              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                              <span className="text-sm font-medium ml-1">{teacher.rating}</span>
                              <span className="text-xs text-muted-foreground ml-1">
                                ({teacher.totalReviews} reviews)
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground mt-1">
                            <MapPin className="w-3 h-3 mr-1" />
                            {teacher.location}
                          </div>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" onClick={() => toggleFavorite(teacher.id)} className="p-2">
                        <Heart
                          className={`w-4 h-4 ${
                            favorites.includes(teacher.id) ? "fill-red-500 text-red-500" : "text-muted-foreground"
                          }`}
                        />
                      </Button>
                    </div>

                    <p className="text-sm text-muted-foreground mb-4 text-pretty">{teacher.bio}</p>

                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-1">
                        {teacher.subjects.map((subject) => (
                          <Badge key={subject} variant="outline" className="text-xs">
                            {subject}
                          </Badge>
                        ))}
                      </div>

                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center text-muted-foreground">
                          <Clock className="w-4 h-4 mr-2" />
                          {teacher.experience}
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <BookOpen className="w-4 h-4 mr-2" />
                          {teacher.students} students
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t">
                        <div>
                          <span className="text-lg font-semibold text-foreground">
                            ₦{teacher.hourlyRate.toLocaleString()}
                          </span>
                          <span className="text-sm text-muted-foreground">/hour</span>
                          <div className="text-xs text-muted-foreground">Responds {teacher.responseTime}</div>
                        </div>
                        <div className="flex space-x-2">
                          <Link href={`/teachers/${teacher.id}`}>
                            <Button variant="outline" size="sm" className="bg-transparent">
                              View Profile
                            </Button>
                          </Link>
                          <Button size="sm" disabled={teacher.availability === "Busy"}>
                            <Calendar className="w-3 h-3 mr-1" />
                            Book Trial
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More */}
            {filteredTeachers.length > 0 && (
              <div className="text-center">
                <Button variant="outline" size="lg">
                  Load More Teachers
                </Button>
              </div>
            )}

            {/* No Results */}
            {filteredTeachers.length === 0 && (
              <Card>
                <CardContent className="p-12 text-center">
                  <Search className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">No teachers found</h3>
                  <p className="text-muted-foreground mb-4">
                    Try adjusting your search criteria or filters to find more teachers.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSearchQuery("")
                      setSelectedSubject("all")
                      setSelectedAvailability("all")
                      setPriceRange([0, 10000])
                    }}
                  >
                    Clear All Filters
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
