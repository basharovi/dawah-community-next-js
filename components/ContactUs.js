import { FaFacebook } from 'react-icons/fa'; // Import Facebook icon

export default function ContactUs() {
  return (
    <section id="contact" className="bg-gray-100 text-gray-800 py-8">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">যোগাযোগ</h2>
        <p className="mb-4">যেকোনো প্রয়োজনে আমাদের সাথে যোগাযোগ করুন</p>
        <div className="flex flex-col space-y-2">
          <span>দাওয়াহ কমিউনিটি গোবিন্দগঞ্জ</span>
          <span>
            ইমেইল: &nbsp;
            <a href="mailto:dawah.gobi@gmail.com" className="text-blue-500 hover:underline">
               dawah.gobi@gmail.com
            </a>
          </span>
          <div className="flex justify-center space-x-4">
            <a href="https://shorturl.at/RD1sL" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
              <FaFacebook size={30} className="text-blue-600 hover:text-blue-800" />
              <span>Page</span> {/* Label for Facebook Page */}
            </a>
            <a href="https://shorturl.at/h9W3i" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
              <FaFacebook size={30} className="text-blue-600 hover:text-blue-800" />
              <span>Group</span> {/* Label for Facebook Group */}
            </a>
          </div>
        </div> 
      </div>
    </section>
  );
}