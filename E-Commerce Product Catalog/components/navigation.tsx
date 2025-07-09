export default function Navigation() {
  return (
    <nav className="bg-yellow-400 text-gray-900 text-xs font-semibold">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-1">
          <div className="flex items-center">
            <a href="#" className="px-3 py-1 border-r border-yellow-500 font-bold">
              Shop By Department
            </a>
            <a href="#" className="px-3 py-1 border-r border-yellow-500 hover:underline">
              Home
            </a>
            <a href="#" className="px-3 py-1 border-r border-yellow-500 hover:underline">
              Top Deals
            </a>
            <a href="#" className="px-3 py-1 border-r border-yellow-500 hover:underline">
              Hot Offers
            </a>
            <a href="#" className="px-3 py-1 border-r border-yellow-500 hover:underline">
              New Arrivals
            </a>
            <a href="#" className="px-3 py-1 border-r border-yellow-500 hover:underline">
              Blog
            </a>
            <a href="#" className="px-3 py-1 hover:underline">
              Gift Cards
            </a>
          </div>
          <div className="flex items-center gap-3 text-xs">
            <a href="#" className="hover:underline">
              Recently Viewed
            </a>
            <a href="#" className="hover:underline">
              Order Tracking
            </a>
            <a href="#" className="hover:underline">
              USD $
            </a>
            <span className="pl-3 border-l border-yellow-500">
              Hotline: <strong>+01 1234 8888</strong>
            </span>
          </div>
        </div>
      </div>
    </nav>
  )
}
