import { Mail, MapPin, Phone, Send } from 'lucide-react';

export function Contact() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-black text-white py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl mb-4">Get In Touch</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Interested in collaboration, joining our team, or learning more about our research? 
            We'd love to hear from you.
          </p>
        </div>
      </div>

      {/* Contact Content */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl mb-8">Contact Information</h2>
            
            <div className="space-y-6 mb-10">
              <div className="flex gap-4">
                <MapPin className="w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg mb-1">Location</h3>
                  <p className="text-gray-700 leading-relaxed">
                    [Department Name]<br />
                    [Building Name/Number], [Room Number]<br />
                    [University/Institution Name]<br />
                    [City, State/Province, Postal Code]
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail className="w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg mb-1">Email</h3>
                  <a href="mailto:[email@institution.edu]" className="text-gray-700 hover:text-black">
                    [email@institution.edu]
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg mb-1">Phone</h3>
                  <p className="text-gray-700">[Phone Number]</p>
                </div>
              </div>
            </div>

            {/* For Specific Inquiries */}
            <div className="border border-gray-200 p-6">
              <h3 className="text-xl mb-4">For Specific Inquiries</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-gray-600 mb-1">Prospective PhD Students</p>
                  <a href="mailto:[admissions@institution.edu]" className="text-black hover:underline">
                    [admissions@institution.edu]
                  </a>
                </div>
                <div>
                  <p className="text-gray-600 mb-1">Research Collaborations</p>
                  <a href="mailto:[collaborate@institution.edu]" className="text-black hover:underline">
                    [collaborate@institution.edu]
                  </a>
                </div>
                <div>
                  <p className="text-gray-600 mb-1">Media & Press</p>
                  <a href="mailto:[press@institution.edu]" className="text-black hover:underline">
                    [press@institution.edu]
                  </a>
                </div>
                <div>
                  <p className="text-gray-600 mb-1">Industry Partnerships</p>
                  <a href="mailto:[industry@institution.edu]" className="text-black hover:underline">
                    [industry@institution.edu]
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-3xl mb-8">Send a Message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black transition-colors"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="affiliation" className="block text-sm mb-2">
                  Affiliation
                </label>
                <input
                  type="text"
                  id="affiliation"
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black transition-colors"
                  placeholder="University, company, or organization"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black transition-colors"
                >
                  <option value="">Select a topic</option>
                  <option value="phd">PhD Application</option>
                  <option value="postdoc">Postdoc Position</option>
                  <option value="collaboration">Research Collaboration</option>
                  <option value="industry">Industry Partnership</option>
                  <option value="speaking">Speaking Engagement</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black transition-colors resize-none"
                  placeholder="Tell us about your inquiry..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-black text-white hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>

              <p className="text-sm text-gray-600">
                * Required fields. We typically respond within 2-3 business days.
              </p>
            </form>
          </div>
        </div>

        {/* Visit Us Section */}
        <div className="mt-16 border-t border-gray-200 pt-12">
          <h2 className="text-3xl mb-6">Visit Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl mb-3">Office Hours</h3>
              <div className="space-y-2 text-gray-700">
                <p>[Day Range]: [Hours]</p>
                <p>[Day Range]: [Hours]</p>
                <p className="text-sm text-gray-600 mt-4">
                  Please email ahead to schedule a meeting with faculty or students.
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-xl mb-3">Getting Here</h3>
              <div className="space-y-2 text-gray-700">
                <p>[Transportation Option]: [Details]</p>
                <p>[Transportation Option]: [Details]</p>
                <p>[Parking Information]</p>
                <p className="text-sm text-gray-600 mt-4">
                  <a href="#" className="hover:underline">[Campus map link] →</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}