import { Book } from "lucide-react"

const books = [
  { title: "The Midnight Library", author: "Matt Haig" },
  { title: "Atomic Habits", author: "James Clear" },
  { title: "Project Hail Mary", author: "Andy Weir" },
]

export default function Books() {
  return (
    <section id="books" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Recent Books I'm Reading</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.map((book, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 flex items-start space-x-4">
              <Book className="h-6 w-6 text-indigo-500 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-medium text-gray-900">{book.title}</h3>
                <p className="mt-1 text-sm text-gray-500">by {book.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

