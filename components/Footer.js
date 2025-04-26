export default function Footer() {
    return (
      // Reduced vertical padding and added flex container
      <footer id="contact" className="bg-blue-600 text-white py-4">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          {/* Grouped contact information */}
          <div>
            <span>দাওয়াহ কমিউনিটি গোবিন্দগঞ্জ</span>
          </div>
          {/* Copyright information */}
          <p>&copy; ২০২৫ | সমস্ত অধিকার সংরক্ষিত</p>
        </div>
      </footer>
    );
  }
  