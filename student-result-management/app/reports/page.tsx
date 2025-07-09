import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowLeft, Download, BarChart3, TrendingUp, Users, Award } from "lucide-react"
import { getClassPerformance } from "@/lib/actions"

export default async function ReportsPage() {
  const classPerformance = await getClassPerformance("Grade 10", "2023-24", "Spring")

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-6">
          <Link href="/">
            <Button variant="outline" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Reports & Analytics</h1>
            <p className="text-gray-600">Performance analytics and comprehensive reports</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Class Average</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground ml-auto" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">82.5%</div>
              <p className="text-xs text-muted-foreground">Grade 10 Spring 2024</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Top Performer</CardTitle>
              <Award className="h-4 w-4 text-muted-foreground ml-auto" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">95.2%</div>
              <p className="text-xs text-muted-foreground">Jane Smith</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pass Rate</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground ml-auto" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">94%</div>
              <p className="text-xs text-muted-foreground">Above 40% marks</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Students</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground ml-auto" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{classPerformance.length}</div>
              <p className="text-xs text-muted-foreground">Grade 10 enrolled</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Class Performance - Grade 10</CardTitle>
              <CardDescription>Spring 2024 semester results ranked by average marks</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {classPerformance.map((student: any, index: number) => (
                  <div key={student.student_id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-sm font-semibold">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="font-semibold">
                          {student.first_name} {student.last_name}
                        </h3>
                        <p className="text-sm text-gray-600">ID: {student.student_id}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold">{Number.parseFloat(student.average_marks).toFixed(1)}%</div>
                      <Badge
                        variant={
                          student.overall_grade === "A+" || student.overall_grade === "A"
                            ? "default"
                            : student.overall_grade === "B" || student.overall_grade === "C"
                              ? "secondary"
                              : "destructive"
                        }
                      >
                        {student.overall_grade}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Generate reports and export data</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full justify-start bg-transparent" variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Export Class Report (PDF)
              </Button>
              <Button className="w-full justify-start bg-transparent" variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Export Student Data (Excel)
              </Button>
              <Button className="w-full justify-start bg-transparent" variant="outline">
                <BarChart3 className="h-4 w-4 mr-2" />
                Generate Performance Charts
              </Button>
              <Button className="w-full justify-start bg-transparent" variant="outline">
                <Award className="h-4 w-4 mr-2" />
                Merit List Report
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
