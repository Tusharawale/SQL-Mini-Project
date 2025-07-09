import { Phone, Facebook, Twitter, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Contact Section */}
          <div>
            <div className="flex items-center gap-2 mb-2 text-gray-600 text-xs">
              <Phone className="w-4 h-4 text-yellow-400" />
              <span>Need help? 24/7</span>
            </div>
            <div className="text-lg font-semibold text-gray-900 mb-2">001-1234-88888</div>
            <address className="text-xs text-gray-600 not-italic mb-4 leading-relaxed">
              101 E 29th St, East Chicago, IN 46312, USA
              <br />
              Working 8:00AM - 22:00PM
            </address>
            <div className="flex gap-3">
              <Facebook className="w-4 h-4 text-gray-600 hover:text-gray-900 cursor-pointer" />
              <Twitter className="w-4 h-4 text-gray-600 hover:text-gray-900 cursor-pointer" />
              <Instagram className="w-4 h-4 text-gray-600 hover:text-gray-900 cursor-pointer" />
            </div>
          </div>

          {/* About Us */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">About Us</h4>
            <ul className="space-y-2 text-xs text-gray-600">
              <li>
                <a href="#" className="hover:text-gray-900 hover:underline">
                  Find a Store
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 hover:underline">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 hover:underline">
                  Delivery Information
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 hover:underline">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 hover:underline">
                  Gift Cards
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Customer Care</h4>
            <ul className="space-y-2 text-xs text-gray-600">
              <li>
                <a href="#" className="hover:text-gray-900 hover:underline">
                  Order Tracking
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 hover:underline">
                  FAQ & Help
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 hover:underline">
                  Shipping & Delivery
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 hover:underline">
                  Return & Exchanges
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 hover:underline">
                  Repairs & Warranty
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 hover:underline">
                  Wish List
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 hover:underline">
                  My Account
                </a>
              </li>
            </ul>
          </div>

          {/* Find It Fast */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Find It Fast</h4>
            <ul className="space-y-2 text-xs text-gray-600">
              <li>
                <a href="#" className="hover:text-gray-900 hover:underline">
                  TV & Home Theater
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 hover:underline">
                  Computers & Laptop
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 hover:underline">
                  Smart Phones
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 hover:underline">
                  Cameras & Accessories
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 hover:underline">
                  Audio & Video Games
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 hover:underline">
                  Clothes & Music
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 hover:underline">
                  Car Electronics & GPS
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-4 border-t text-xs text-gray-600">
          <div>© 2021 Avimart. All Rights Reserved.</div>
          <div className="flex gap-2 mt-3 md:mt-0">
            <div className="w-10 h-5 bg-gray-400 rounded flex items-center justify-center text-white text-xs">VISA</div>
            <div className="w-10 h-5 bg-gray-400 rounded flex items-center justify-center text-white text-xs">PP</div>
            <div className="w-10 h-5 bg-gray-400 rounded flex items-center justify-center text-white text-xs">SK</div>
            <div className="w-10 h-5 bg-gray-400 rounded flex items-center justify-center text-white text-xs">OM</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
