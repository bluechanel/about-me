import { Camera, Music, Palette } from "lucide-react"

const hobbies = [
  { name: "Photography", icon: Camera },
  { name: "Playing Guitar", icon: Music },
  { name: "Painting", icon: Palette },
]

export default function Hobbies() {
  return (
    <section id="hobbies" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">My Hobbies</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {hobbies.map((hobby, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
              <hobby.icon className="h-12 w-12 text-indigo-500 mx-auto" />
              <h3 className="mt-4 text-lg font-medium text-gray-900">{hobby.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

