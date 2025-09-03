import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Calendar, Plus, Search, CheckCircle, AlertCircle, XCircle } from "lucide-react"

export default function AssignmentsPage() {
  const assignments = [
    {
      id: 1,
      title: "Memorize Surah Al-Mulk",
      subject: "Quran Memorization",
      teacher: "Sheikh Ahmad",
      dueDate: "2024-01-25",
      status: "pending",
      progress: 65,
      description: "Complete memorization of Surah Al-Mulk with proper Tajweed",
      submissionType: "Audio Recording",
    },
    {
      id: 2,
      title: "Arabic Grammar Exercise",
      subject: "Arabic Language",
      teacher: "Ustadha Fatima",
      dueDate: "2024-01-22",
      status: "submitted",
      progress: 100,
      description: "Complete exercises 1-10 from Arabic Grammar workbook",
      submissionType: "Written Work",
    },
    {
      id: 3,
      title: "Hadith Analysis Essay",
      subject: "Hadith Studies",
      teacher: "Sheikh Omar",
      dueDate: "2024-01-30",
      status: "overdue",
      progress: 30,
      description: "Write a 500-word analysis on the importance of seeking knowledge",
      submissionType: "Essay",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "submitted":
        return "bg-green-100 text-green-800"
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "overdue":
        return "bg-red-100 text-red-800"
      default:
        return "bg-slate-100 text-slate-800"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "submitted":
        return CheckCircle
      case "pending":
        return AlertCircle
      case "overdue":
        return XCircle
      default:
        return AlertCircle
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-indigo-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Assignments</h1>
          <p className="text-slate-600">Manage and track your Islamic learning assignments</p>
        </div>

        <Tabs defaultValue="student" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="student">My Assignments</TabsTrigger>
            <TabsTrigger value="teacher">Create Assignment</TabsTrigger>
          </TabsList>

          <TabsContent value="student" className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                <Input placeholder="Search assignments..." className="pl-10" />
              </div>
              <select className="px-3 py-2 border rounded-md">
                <option>All Status</option>
                <option>Pending</option>
                <option>Submitted</option>
                <option>Overdue</option>
              </select>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {assignments.map((assignment) => {
                const StatusIcon = getStatusIcon(assignment.status)
                return (
                  <Card key={assignment.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-lg mb-1">{assignment.title}</CardTitle>
                          <CardDescription>{assignment.subject}</CardDescription>
                        </div>
                        <Badge className={getStatusColor(assignment.status)}>
                          <StatusIcon className="h-3 w-3 mr-1" />
                          {assignment.status}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-slate-600">{assignment.description}</p>

                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <Avatar className="h-6 w-6">
                          <AvatarFallback className="text-xs">
                            {assignment.teacher
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <span>{assignment.teacher}</span>
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Progress</span>
                          <span>{assignment.progress}%</span>
                        </div>
                        <Progress value={assignment.progress} className="h-2" />
                      </div>

                      <div className="flex items-center justify-between text-sm text-slate-500">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>Due: {assignment.dueDate}</span>
                        </div>
                        <span>{assignment.submissionType}</span>
                      </div>

                      <div className="flex gap-2">
                        {assignment.status === "pending" && (
                          <>
                            <Button size="sm" className="flex-1">
                              Submit Work
                            </Button>
                            <Button variant="outline" size="sm">
                              View Details
                            </Button>
                          </>
                        )}
                        {assignment.status === "submitted" && (
                          <Button variant="outline" size="sm" className="w-full bg-transparent">
                            View Submission
                          </Button>
                        )}
                        {assignment.status === "overdue" && (
                          <Button variant="destructive" size="sm" className="w-full">
                            Submit Late
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </TabsContent>

          <TabsContent value="teacher" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Create New Assignment</CardTitle>
                <CardDescription>Design assignments for your students</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Assignment Title</label>
                    <Input placeholder="Enter assignment title" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Subject</label>
                    <select className="w-full p-2 border rounded-md">
                      <option>Select subject</option>
                      <option>Quran Studies</option>
                      <option>Arabic Language</option>
                      <option>Hadith Studies</option>
                      <option>Islamic History</option>
                      <option>Fiqh</option>
                      <option>Aqeedah</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Description</label>
                  <textarea
                    className="w-full p-2 border rounded-md h-32"
                    placeholder="Detailed assignment instructions"
                  ></textarea>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Due Date</label>
                    <Input type="date" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Submission Type</label>
                    <select className="w-full p-2 border rounded-md">
                      <option>Written Work</option>
                      <option>Audio Recording</option>
                      <option>Video Recording</option>
                      <option>File Upload</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Points</label>
                    <Input type="number" placeholder="100" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Assign To</label>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2">
                      <input type="checkbox" />
                      <span>All Students</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" />
                      <span>Specific Students</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" />
                      <span>Specific Class</span>
                    </label>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button className="flex-1">
                    <Plus className="h-4 w-4 mr-2" />
                    Create Assignment
                  </Button>
                  <Button variant="outline">Save as Draft</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
