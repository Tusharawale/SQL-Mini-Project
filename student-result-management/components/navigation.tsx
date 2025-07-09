import Link from "next/link"
import { Button } from "@/components/ui/button"
import { GraduationCap } from "lucide-react"

export default function Navigation() {
  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <GraduationCap className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">SRMS</span>
          </Link>

          <div className="flex items-center gap-4">
            <Link href="/students">
              <Button variant="ghost">Students</Button>
            </Link>
            <Link href="/subjects">
              <Button variant="ghost">Subjects</Button>
            </Link>
            <Link href="/marks">
              <Button variant="ghost">Marks</Button>
            </Link>
            <Link href="/reports">
              <Button variant="ghost">Reports</Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
