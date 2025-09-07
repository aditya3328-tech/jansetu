import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='mt-auto'>
        {/* Footer */}
<footer className=" bg-gray-100 mt-16">
  <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
    
    {/* Quick Links */}
    <div>
      <h3 className="text-lg font-semibold text-black mb-4">Quick Links</h3>
      <ul className="space-y-2">
        <li><Link to="/about" className="hover:text-blue-400">About Us</Link></li>
        <li><Link to="/contact" className="hover:text-blue-400">Contact</Link></li>
        <li><Link to="/" className="hover:text-blue-400">FAQ</Link></li>
        <li><Link to="/" className="hover:text-blue-400">Privacy Policy</Link></li>
      </ul>
    </div>

    {/* Resources */}
    <div>
      <h3 className="text-lg font-semibold text-black mb-4">Resources</h3>
      <ul className="space-y-2">
        <li><Link to="/" className="hover:text-blue-400">Events Calendar</Link></li>
        <li><Link to="/community" className="hover:text-blue-400">Community</Link></li>
        <li><Link to="/" className="hover:text-blue-400">Make a Donation</Link></li>
      </ul>
    </div>

    {/* Stay Connected */}
    <div>
      <h3 className="text-lg font-semibold text-black mb-4">Stay Connected</h3>
      <ul className="space-y-2">
        <li><a href="#" className="hover:text-blue-400 flex items-center gap-2"> 
          <i class="ri-facebook-circle-fill"></i>Facebook
        </a></li>
        <li><a href="#" className="hover:text-blue-400"><i class="ri-instagram-fill mr-2"></i>Instagram</a></li>
        <li><a href="#" className="hover:text-blue-400"><i class="ri-youtube-fill mr-2"></i>Youtube</a></li>
        <li><a href="#" className="hover:text-blue-400"><i class="ri-twitter-x-line mr-2"></i>Twitter(X)</a></li>
      </ul>
    </div>

    {/* Contact */}
    <div>
      <h3 className="text-lg font-semibold text-black mb-4">Contact Us</h3>
      <ul className="space-y-2">
        <li className="flex items-center gap-2">
          <span>🌐</span> 123 Civic Center, New Delhi, India
        </li>
        <li className="flex items-center gap-2">
          <span>✉️</span> support@jansetu.org
        </li>
        <li className="flex items-center gap-2">
          <span>📞</span> +91 98765 43210
        </li>
      </ul>
    </div>
  </div>

  {/* Bottom Bar */}
  <div className="border-t border-gray-700 items-center gap-5 justify-center flex py-4 text-center text-sm text-gray-500">
    <img className='h-10 text-white' src="swacch-bharat.svg" alt="" />
    <img className='h-20' src="make-in-india.png" alt="" />
    © {new Date().getFullYear()} JanSetu – Civic Sense Portal. All Rights Reserved.
  </div>
</footer>
    </div>
  )
}

export default Footer
