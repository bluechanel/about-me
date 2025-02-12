import { Film } from "lucide-react"

const movies = [
  { title: "Inception", director: "Christopher Nolan" },
  { title: "The Shawshank Redemption", director: "Frank Darabont" },
  { title: "Parasite", director: "Bong Joon-ho" },
]

export default function Movies() {
  return (
    <section id="movies" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Recent Movies I'm Watching</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {movies.map((movie, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 flex items-start space-x-4">
              <Film className="h-6 w-6 text-indigo-500 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-medium text-gray-900">{movie.title}</h3>
                <p className="mt-1 text-sm text-gray-500">Directed by {movie.director}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

