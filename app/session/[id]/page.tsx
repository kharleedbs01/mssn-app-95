"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import {
  Video,
  VideoOff,
  Mic,
  MicOff,
  Monitor,
  MessageCircle,
  Users,
  Settings,
  PhoneOff,
  Volume2,
  VolumeX,
  FileText,
  Send,
  Clock,
  BookOpen,
  MoreVertical,
} from "lucide-react"

// Mock session data
const sessionData = {
  id: "session-123",
  title: "Quran Recitation with Tajweed",
  teacher: {
    name: "Sheikh Ahmed Al-Mansouri",
    avatar: "/islamic-scholar.png",
  },
  student: {
    name: "Amina Hassan",
    avatar: "/diverse-female-student.png",
  },
  subject: "Quran Recitation",
  startTime: "2:00 PM",
  duration: "60 minutes",
  status: "live",
  materials: ["Mushaf", "Tajweed Rules Chart"],
  sessionNotes: "Continue with Surah Al-Baqarah verses 20-30. Focus on proper pronunciation of heavy letters.",
}

const chatMessages = [
  {
    id: 1,
    sender: "Sheikh Ahmed",
    message: "Assalamu Alaikum Amina, are you ready to begin?",
    time: "2:01 PM",
    isTeacher: true,
  },
  {
    id: 2,
    sender: "Amina Hassan",
    message: "Wa alaikum assalam Sheikh. Yes, I'm ready!",
    time: "2:01 PM",
    isTeacher: false,
  },
  {
    id: 3,
    sender: "Sheikh Ahmed",
    message: "Excellent. Let's start with verse 20 of Surah Al-Baqarah.",
    time: "2:02 PM",
    isTeacher: true,
  },
]

export default function LiveSessionPage({ params }: { params: { id: string } }) {
  const [isVideoOn, setIsVideoOn] = useState(true)
  const [isAudioOn, setIsAudioOn] = useState(true)
  const [isSpeakerOn, setIsSpeakerOn] = useState(true)
  const [isScreenSharing, setIsScreenSharing] = useState(false)
  const [showChat, setShowChat] = useState(true)
  const [newMessage, setNewMessage] = useState("")
  const [sessionTime, setSessionTime] = useState("00:15:32")

  // Mock timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      // Update session time - in real app this would be calculated from session start time
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // In real app, send message to chat
      setNewMessage("")
    }
  }

  const handleEndSession = () => {
    // In real app, end the session and redirect
    console.log("Ending session...")
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Session Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-foreground">LIVE</span>
            </div>
            <Separator orientation="vertical" className="h-6" />
            <div>
              <h1 className="font-semibold text-foreground">{sessionData.title}</h1>
              <p className="text-sm text-muted-foreground">{sessionData.subject}</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span>{sessionTime}</span>
            </div>
            <Badge variant="default">Live Session</Badge>
            <Button variant="destructive" onClick={handleEndSession}>
              <PhoneOff className="w-4 h-4 mr-2" />
              End Session
            </Button>
          </div>
        </div>
      </header>

      <div className="flex-1 flex">
        {/* Main Video Area */}
        <div className="flex-1 flex flex-col">
          {/* Video Grid */}
          <div className="flex-1 p-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Teacher Video */}
            <Card className="relative overflow-hidden bg-black">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                {isVideoOn ? (
                  <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                    <Avatar className="w-24 h-24">
                      <AvatarImage
                        src={sessionData.teacher.avatar || "/placeholder.svg"}
                        alt={sessionData.teacher.name}
                      />
                      <AvatarFallback className="text-2xl">SA</AvatarFallback>
                    </Avatar>
                  </div>
                ) : (
                  <div className="flex flex-col items-center text-white">
                    <VideoOff className="w-12 h-12 mb-2" />
                    <p>Camera Off</p>
                  </div>
                )}
              </div>
              <div className="absolute bottom-4 left-4 flex items-center space-x-2">
                <Badge variant="secondary" className="bg-black/50 text-white">
                  {sessionData.teacher.name}
                </Badge>
                <Badge variant="secondary" className="bg-black/50 text-white">
                  Teacher
                </Badge>
              </div>
              <div className="absolute bottom-4 right-4 flex items-center space-x-1">
                {isAudioOn ? <Mic className="w-4 h-4 text-green-400" /> : <MicOff className="w-4 h-4 text-red-400" />}
              </div>
            </Card>

            {/* Student Video */}
            <Card className="relative overflow-hidden bg-black">
              <div className="aspect-video bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center">
                {isVideoOn ? (
                  <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                    <Avatar className="w-24 h-24">
                      <AvatarImage
                        src={sessionData.student.avatar || "/placeholder.svg"}
                        alt={sessionData.student.name}
                      />
                      <AvatarFallback className="text-2xl">AH</AvatarFallback>
                    </Avatar>
                  </div>
                ) : (
                  <div className="flex flex-col items-center text-white">
                    <VideoOff className="w-12 h-12 mb-2" />
                    <p>Camera Off</p>
                  </div>
                )}
              </div>
              <div className="absolute bottom-4 left-4 flex items-center space-x-2">
                <Badge variant="secondary" className="bg-black/50 text-white">
                  {sessionData.student.name}
                </Badge>
                <Badge variant="secondary" className="bg-black/50 text-white">
                  Student
                </Badge>
              </div>
              <div className="absolute bottom-4 right-4 flex items-center space-x-1">
                {isAudioOn ? <Mic className="w-4 h-4 text-green-400" /> : <MicOff className="w-4 h-4 text-red-400" />}
              </div>
            </Card>
          </div>

          {/* Session Controls */}
          <div className="border-t p-4">
            <div className="flex items-center justify-center space-x-4">
              <Button
                variant={isVideoOn ? "default" : "secondary"}
                size="lg"
                onClick={() => setIsVideoOn(!isVideoOn)}
                className="rounded-full w-12 h-12 p-0"
              >
                {isVideoOn ? <Video className="w-5 h-5" /> : <VideoOff className="w-5 h-5" />}
              </Button>

              <Button
                variant={isAudioOn ? "default" : "secondary"}
                size="lg"
                onClick={() => setIsAudioOn(!isAudioOn)}
                className="rounded-full w-12 h-12 p-0"
              >
                {isAudioOn ? <Mic className="w-5 h-5" /> : <MicOff className="w-5 h-5" />}
              </Button>

              <Button
                variant={isSpeakerOn ? "default" : "secondary"}
                size="lg"
                onClick={() => setIsSpeakerOn(!isSpeakerOn)}
                className="rounded-full w-12 h-12 p-0"
              >
                {isSpeakerOn ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
              </Button>

              <Button
                variant={isScreenSharing ? "default" : "outline"}
                size="lg"
                onClick={() => setIsScreenSharing(!isScreenSharing)}
                className="rounded-full w-12 h-12 p-0 bg-transparent"
              >
                <Monitor className="w-5 h-5" />
              </Button>

              <Button variant="outline" size="lg" className="rounded-full w-12 h-12 p-0 bg-transparent">
                <Settings className="w-5 h-5" />
              </Button>

              <Separator orientation="vertical" className="h-8" />

              <Button
                variant={showChat ? "default" : "outline"}
                onClick={() => setShowChat(!showChat)}
                className="bg-transparent"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Chat
              </Button>

              <Button variant="outline" className="bg-transparent">
                <FileText className="w-4 h-4 mr-2" />
                Materials
              </Button>

              <Button variant="outline" className="bg-transparent">
                <MoreVertical className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Chat Sidebar */}
        {showChat && (
          <div className="w-80 border-l bg-card/50 flex flex-col">
            <div className="p-4 border-b">
              <h3 className="font-semibold text-foreground flex items-center">
                <MessageCircle className="w-4 h-4 mr-2" />
                Session Chat
              </h3>
            </div>

            {/* Chat Messages */}
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {chatMessages.map((message) => (
                  <div key={message.id} className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium text-foreground">{message.sender}</span>
                      <Badge variant={message.isTeacher ? "default" : "secondary"} className="text-xs">
                        {message.isTeacher ? "Teacher" : "Student"}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{message.time}</span>
                    </div>
                    <p className="text-sm text-muted-foreground bg-muted/50 rounded-lg p-2 text-pretty">
                      {message.message}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollArea>

            {/* Chat Input */}
            <div className="p-4 border-t">
              <div className="flex space-x-2">
                <Input
                  placeholder="Type your message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                />
                <Button onClick={handleSendMessage} size="sm">
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Session Info Panel */}
      <div className="border-t bg-muted/30 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <BookOpen className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Materials:</span>
              <div className="flex space-x-1">
                {sessionData.materials.map((material, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {material}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <FileText className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Notes:</span>
              <span className="text-sm text-foreground">{sessionData.sessionNotes}</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Users className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">2 participants</span>
          </div>
        </div>
      </div>
    </div>
  )
}
