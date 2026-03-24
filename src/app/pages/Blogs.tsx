import { Calendar, User, ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router";

export default function Blogs() {
  const blogPosts = [
    {
      id: 1,
      title: "Understanding PET CT Scans: A Comprehensive Guide",
      excerpt: "Learn about PET CT scans, how they work, and why they are essential for cancer detection and treatment monitoring.",
      author: "Dr. Rajesh Kumar",
      date: "March 15, 2026",
      image: "https://images.unsplash.com/photo-1587010580103-fd86b8ea14ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQRVQlMjBDVCUyMHNjYW4lMjBtZWRpY2FsJTIwZXF1aXBtZW50fGVufDF8fHx8MTc3NDMzMTg0Nnww&ixlib=rb-4.1.0&q=80&w=1080",
      category: "PET CT Imaging"
    },
    {
      id: 2,
      title: "When Do You Need a PET CT Scan?",
      excerpt: "Discover the various medical conditions and situations where PET CT scans are recommended by doctors.",
      author: "Dr. Priya Sharma",
      date: "March 10, 2026",
      image: "https://images.unsplash.com/photo-1758691463198-dc663b8a64e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwcHJvZmVzc2lvbmFsJTIwY29uc3VsdGF0aW9ufGVufDF8fHx8MTc3NDI4MzA1MHww&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Medical Advice"
    },
    {
      id: 3,
      title: "PET CT vs CT Scan: What's the Difference?",
      excerpt: "Understanding the key differences between PET CT and regular CT scans and when each is used.",
      author: "Dr. Anil Verma",
      date: "March 5, 2026",
      image: "https://images.unsplash.com/photo-1758691463087-43ac1462410f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZHZhbmNlZCUyMG1lZGljYWwlMjBpbWFnaW5nJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzQzMzE4NDd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Technology"
    },
    {
      id: 4,
      title: "Preparing for Your PET CT Scan: A Patient's Guide",
      excerpt: "Everything you need to know to prepare for your PET CT scan appointment, including dietary restrictions and what to expect.",
      author: "Dr. Meera Reddy",
      date: "February 28, 2026",
      image: "https://images.unsplash.com/photo-1631507623095-c710d184498f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwYmxvZyUyMGhlYWx0aGNhcmV8ZW58MXx8fHwxNzc0MzMxODQ3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Patient Care"
    },
    {
      id: 5,
      title: "The Role of PET CT in Cancer Treatment",
      excerpt: "How PET CT scans help oncologists in diagnosing, staging, and monitoring cancer treatment response.",
      author: "Dr. Sanjay Gupta",
      date: "February 20, 2026",
      image: "https://images.unsplash.com/photo-1587010580103-fd86b8ea14ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQRVQlMjBDVCUyMHNjYW4lMjBtZWRpY2FsJTIwZXF1aXBtZW50fGVufDF8fHx8MTc3NDMzMTg0Nnww&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Oncology"
    },
    {
      id: 6,
      title: "Safety and Radiation Exposure in PET CT Scans",
      excerpt: "Addressing common concerns about radiation exposure and safety measures in PET CT imaging.",
      author: "Dr. Kavita Singh",
      date: "February 15, 2026",
      image: "https://images.unsplash.com/photo-1758691463087-43ac1462410f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZHZhbmNlZCUyMG1lZGljYWwlMjBpbWFnaW5nJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzQzMzE4NDd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Safety"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block bg-white/20 backdrop-blur-lg text-white px-4 py-2 rounded-full text-sm mb-4">
            Health & Wellness
          </div>
          <h1 className="text-4xl md:text-6xl mb-6">Medical Insights & Blog</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto text-white/90">
            Expert articles and information about PET CT scans, diagnostic imaging, and patient care
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden md:flex">
            <div className="md:w-1/2">
              <img
                src={blogPosts[0].image}
                alt={blogPosts[0].title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-8 flex flex-col justify-center">
              <div className="inline-block px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm rounded-full mb-4 self-start shadow-lg">
                Featured Post
              </div>
              <h2 className="text-3xl mb-4">{blogPosts[0].title}</h2>
              <p className="text-gray-600 mb-6">{blogPosts[0].excerpt}</p>
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  <span>{blogPosts[0].author}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{blogPosts[0].date}</span>
                </div>
              </div>
              <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-full hover:from-orange-600 hover:to-red-600 transition-all inline-flex items-center gap-2 self-start shadow-lg">
                Read More <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl mb-12 text-center">Recent Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <article key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-xs rounded-full mb-3 font-medium">
                    {post.category}
                  </div>
                  <h3 className="text-xl mb-3">{post.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <button className="text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-2 text-sm font-medium">
                    Read More <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl mb-6">Have Questions About PET CT Scans?</h2>
          <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto text-white/90">
            Our expert team is here to help. Call us for consultation and appointment booking.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:9217244110"
              className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-10 py-4 rounded-full hover:from-orange-600 hover:to-red-600 transition-all shadow-2xl inline-flex items-center gap-2"
            >
              <Phone className="w-6 h-6" />
              Call: 9217244110
            </a>
            <Link
              to="/"
              className="bg-white text-blue-600 px-10 py-4 rounded-full hover:bg-gray-100 transition-all shadow-2xl"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}