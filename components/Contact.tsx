import { Mail, MapPin } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">联系方式</h2>
        <div className="max-w-md mx-auto bg-gray-900 rounded-lg shadow-lg p-8">
          <div className="space-y-4">
            <p className="flex items-center">
              <Mail className="h-5 w-5 mr-3 text-blue-400" />
              bluechanel612@gmail.com
            </p>
            <p className="flex items-center">
              <MapPin className="h-5 w-5 mr-3 text-blue-400" />
              中国西安
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

