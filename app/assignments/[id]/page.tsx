import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Calendar, Clock, FileText, Upload, Download, MessageSquare, Star } from "lucide-react"

export default function AssignmentDetailPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-indigo-50 p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Memorize Surah Al-Mulk</h1>
            <p className="text-slate-600">Quran Memorization Assignment</p>
          </div>
          <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Assignment Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback>SA</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">Sheikh Ahmad</p>
                    <p className="text-sm text-slate-600">Quran Teacher</p>
                  </div>
                </div>

                <Separator />

                <div className="space-y-3">
                  <h3 className="font-semibold">Instructions</h3>
                  <p className="text-slate-700">
                    Complete memorization of Surah Al-Mulk (Chapter 67) with proper Tajweed rules. Focus on correct
                    pronunciation, rhythm, and understanding of the meanings. Submit an audio recording demonstrating
                    your memorization.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="font-semibold">Learning Objectives</h3>
                  <ul className="list-disc list-inside space-y-1 text-slate-700">
                    <li>Memorize all 30 verses of Surah Al-Mulk</li>
                    <li>Apply proper Tajweed rules during recitation</li>
                    <li>Understand the key themes and messages</li>
                    <li>Develop fluency and confidence in recitation</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="font-semibold">Resources</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 p-2 bg-slate-50 rounded">
                      <FileText className="h-4 w-4 text-slate-600" />
                      <span className="text-sm">Surah Al-Mulk Text with Translation</span>
                      <Button size="sm" variant="ghost">
                        <Download className="h-3 w-3" />
                      </Button>
                    </div>
                    <div className="flex items-center gap-2 p-2 bg-slate-50 rounded">
                      <FileText className="h-4 w-4 text-slate-600" />
                      <span className="text-sm">Tajweed Rules Reference</span>
                      <Button size="sm" variant="ghost">
                        <Download className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Submit Your Work</CardTitle>
                <CardDescription>Upload your audio recording</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 text-center">
                  <Upload className="h-8 w-8 text-slate-400 mx-auto mb-2" />
                  <p className="text-slate-600 mb-2">Upload your audio recording</p>
                  <p className="text-sm text-slate-500">Supports MP3, WAV, M4A files (max 50MB)</p>
                  <Button className="mt-3">Choose File</Button>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Additional Notes</label>
                  <textarea
                    className="w-full p-2 border rounded-md h-24"
                    placeholder="Any comments or questions about your submission..."
                  ></textarea>
                </div>

                <Button className="w-full">Submit Assignment</Button>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Assignment Info</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="h-4 w-4 text-slate-600" />
                  <span>Due: January 25, 2024</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4 text-slate-600" />
                  <span>3 days remaining</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Star className="h-4 w-4 text-slate-600" />
                  <span>100 points</span>
                </div>

                <Separator />

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progress</span>
                    <span>65%</span>
                  </div>
                  <Progress value={65} className="h-2" />
                  <p className="text-xs text-slate-600">Keep up the great work!</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Discussion</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="text-xs">SA</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Sheikh Ahmad</p>
                      <p className="text-xs text-slate-600">2 hours ago</p>
                      <p className="text-sm mt-1">Remember to focus on the Qalqalah letters in verses 15-20.</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <input className="flex-1 text-sm p-2 border rounded" placeholder="Ask a question..." />
                  <Button size="sm">
                    <MessageSquare className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
