import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { FileText, Download, Upload, Search, Filter, FileImage, Music } from "lucide-react"

export default function DocumentsPage() {
  const documents = [
    {
      id: 1,
      title: "Quran Recitation Guide",
      type: "PDF",
      size: "2.4 MB",
      uploadedBy: "Sheikh Ahmad",
      uploadDate: "2024-01-15",
      category: "Quran Studies",
      downloads: 45,
      icon: FileText,
    },
    {
      id: 2,
      title: "Arabic Grammar Basics",
      type: "PDF",
      size: "1.8 MB",
      uploadedBy: "Ustadha Fatima",
      uploadDate: "2024-01-12",
      category: "Arabic Language",
      downloads: 32,
      icon: FileText,
    },
    {
      id: 3,
      title: "Hadith Collection Audio",
      type: "MP3",
      size: "15.2 MB",
      uploadedBy: "Sheikh Omar",
      uploadDate: "2024-01-10",
      category: "Hadith Studies",
      downloads: 28,
      icon: Music,
    },
    {
      id: 4,
      title: "Islamic History Timeline",
      type: "PNG",
      size: "3.1 MB",
      uploadedBy: "Dr. Aisha",
      uploadDate: "2024-01-08",
      category: "Islamic History",
      downloads: 67,
      icon: FileImage,
    },
  ]

  const categories = ["All", "Quran Studies", "Arabic Language", "Hadith Studies", "Islamic History", "Fiqh", "Aqeedah"]

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-indigo-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Document Library</h1>
          <p className="text-slate-600">Access and manage Islamic learning materials</p>
        </div>

        <Tabs defaultValue="browse" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="browse">Browse Documents</TabsTrigger>
            <TabsTrigger value="upload">Upload Document</TabsTrigger>
            <TabsTrigger value="my-uploads">My Uploads</TabsTrigger>
          </TabsList>

          <TabsContent value="browse" className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                <Input placeholder="Search documents..." className="pl-10" />
              </div>
              <Button variant="outline" className="flex items-center gap-2 bg-transparent">
                <Filter className="h-4 w-4" />
                Filter
              </Button>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {categories.map((category) => (
                <Badge key={category} variant="secondary" className="cursor-pointer hover:bg-cyan-100">
                  {category}
                </Badge>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {documents.map((doc) => {
                const IconComponent = doc.icon
                return (
                  <Card key={doc.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-cyan-100 rounded-lg">
                            <IconComponent className="h-5 w-5 text-cyan-600" />
                          </div>
                          <div>
                            <CardTitle className="text-lg">{doc.title}</CardTitle>
                            <CardDescription>{doc.category}</CardDescription>
                          </div>
                        </div>
                        <Badge variant="outline">{doc.type}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <Avatar className="h-6 w-6">
                          <AvatarFallback className="text-xs">
                            {doc.uploadedBy
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <span>{doc.uploadedBy}</span>
                      </div>
                      <div className="flex justify-between text-sm text-slate-500">
                        <span>{doc.size}</span>
                        <span>{doc.downloads} downloads</span>
                      </div>
                      <Button className="w-full" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </TabsContent>

          <TabsContent value="upload" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Upload New Document</CardTitle>
                <CardDescription>Share learning materials with your students</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-2 border-dashed border-slate-300 rounded-lg p-8 text-center">
                  <Upload className="h-12 w-12 text-slate-400 mx-auto mb-4" />
                  <p className="text-slate-600 mb-2">Drag and drop files here, or click to browse</p>
                  <p className="text-sm text-slate-500">Supports PDF, DOC, PPT, MP3, MP4, and image files</p>
                  <Button className="mt-4">Choose Files</Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Document Title</label>
                    <Input placeholder="Enter document title" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Category</label>
                    <select className="w-full p-2 border rounded-md">
                      <option>Select category</option>
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
                    className="w-full p-2 border rounded-md h-24"
                    placeholder="Brief description of the document"
                  ></textarea>
                </div>
                <Button className="w-full">Upload Document</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="my-uploads" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {documents.slice(0, 2).map((doc) => {
                const IconComponent = doc.icon
                return (
                  <Card key={doc.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-cyan-100 rounded-lg">
                            <IconComponent className="h-5 w-5 text-cyan-600" />
                          </div>
                          <div>
                            <CardTitle className="text-lg">{doc.title}</CardTitle>
                            <CardDescription>{doc.category}</CardDescription>
                          </div>
                        </div>
                        <Badge variant="outline">{doc.type}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex justify-between text-sm text-slate-500">
                        <span>Uploaded: {doc.uploadDate}</span>
                        <span>{doc.downloads} downloads</span>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                          Edit
                        </Button>
                        <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                          Delete
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
