
import Navbar from "../../Navbar"
import Footer from "../Footer"
import { HiArrowLeft } from "react-icons/hi"
import { useNavigate } from "react-router-dom"

const Card3 = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="w-full bg-linear-to-br from-slate-50 via-white to-blue-50 pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-600 hover:text-red-600 font-semibold mb-8 sm:mb-10 transition-colors"
          >
            <HiArrowLeft className="text-lg" />
            <span>Back to Blogs</span>
          </button>

          {/* Hero Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            
            {/* Hero Image */}
            <div className="order-2 lg:order-1">
              <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-full min-h-96 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <img
                  src="https://cdn.careerfoundry.com/en/wp-content/uploads/2021/01/difference_between_ux_ui.webp"
                  alt="UX vs UI Design"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent"></div>
              </div>
            </div>

            {/* Title & Meta */}
            <div className="order-1 lg:order-2">
              <div className="mb-4 sm:mb-6">
                <span className="inline-block px-4 py-2 bg-red-100 text-red-600 rounded-full text-xs sm:text-sm font-bold tracking-wide">
                  DESIGN
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                The Difference Between UX and UI Design: A Beginner's Guide
              </h1>

              <p className="text-base sm:text-lg text-gray-700 font-medium mb-6 sm:mb-8">
                Discover the key differences between UX and UI design—and figure out which is the better career path for you.
              </p>

              <p className="text-sm sm:text-base text-gray-500">
                By CareerFoundry • Published January 2024 • 10 min read
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="w-full bg-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Reading Progress Bar */}
          <div className="fixed top-0 left-0 h-1 bg-linear-to-r from-red-500 to-red-600 transition-all duration-300 z-50" style={{ width: '40%' }}></div>

          {/* Main Content */}
          <article className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
            
            {/* Introduction */}
            <div className="mb-8 sm:mb-10 lg:mb-12 p-4 sm:p-6 lg:p-8 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg">
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed m-0">
                If you're wondering about the difference between UX and UI design, you're not alone. They're often used interchangeably, but they actually describe very different things.
              </p>
            </div>

            {/* Quick Definition */}
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mt-8 sm:mt-10 mb-4 sm:mb-6">
              UX vs. UI in a nutshell:
            </h3>

            <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-6 sm:mb-8">
              <span className="font-semibold">UX design</span> (or user experience design) focuses on how intuitive, easy, and enjoyable it is to use a product (like a website or an app). It involves conducting research to understand user needs, and mapping out a logical structure and flow for the product.
            </p>

            <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-8 sm:mb-10 lg:mb-12 pb-8 sm:pb-10 lg:pb-12 border-b-2 border-gray-200">
              <span className="font-semibold">UI design</span> (or user interface design) focuses on the visual, interactive elements of the product. It designs all the screens and components that the user interacts with. It's about creating digital products that are both aesthetically pleasing and flawlessly functional.
            </p>

            {/* Section 1 */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mt-10 sm:mt-12 lg:mt-16 mb-4 sm:mb-6">
              1. UX vs. UI design
            </h2>

            <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-6 sm:mb-8">
              UX design stands for "user experience design," while UI stands for "user interface design." They both relate to how products are created (think: websites, apps, and software). However, they focus on different aspects of the product.
            </p>

            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mt-6 sm:mt-8 mb-4 sm:mb-6">
              UX Design: The Foundation
            </h3>

            <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-4 sm:mb-6">
              <span className="font-semibold">UX design maps out the end user's overall experience, or journey, throughout the product</span>. It considers things like:
            </p>

            <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-10 list-none pl-0">
              <li className="flex gap-3 sm:gap-4 text-gray-700 text-base sm:text-lg">
                <span className="shrink-0 text-red-600 font-bold mt-1">•</span>
                <span>What end-user problem should this product solve?</span>
              </li>
              <li className="flex gap-3 sm:gap-4 text-gray-700 text-base sm:text-lg">
                <span className="shrink-0 text-red-600 font-bold mt-1">•</span>
                <span>What features and functions does the user need within the product?</span>
              </li>
              <li className="flex gap-3 sm:gap-4 text-gray-700 text-base sm:text-lg">
                <span className="shrink-0 text-red-600 font-bold mt-1">•</span>
                <span>How should the product be structured and mapped out? How can we make it as logical and intuitive as possible?</span>
              </li>
              <li className="flex gap-3 sm:gap-4 text-gray-700 text-base sm:text-lg">
                <span className="shrink-0 text-red-600 font-bold mt-1">•</span>
                <span>How will different content and information be organized throughout the product?</span>
              </li>
              <li className="flex gap-3 sm:gap-4 text-gray-700 text-base sm:text-lg">
                <span className="shrink-0 text-red-600 font-bold mt-1">•</span>
                <span>How does the user feel while interacting with the product? What's the overall quality of their experience?</span>
              </li>
            </ul>

            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mt-8 sm:mt-10 mb-4 sm:mb-6">
              UI Design: The Visual Layer
            </h3>

            <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-4 sm:mb-6">
              If UX builds the product's foundation, UI design focuses on the 'top layer.' UI design considers all the screens, pages, and touchpoints that people interact with while using the product. It considers things like:
            </p>

            <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-10 lg:mb-12 list-none pl-0">
              <li className="flex gap-3 sm:gap-4 text-gray-700 text-base sm:text-lg">
                <span className="shrink-0 text-red-600 font-bold mt-1">•</span>
                <span>What elements does the user need on each screen or page? (Elements include things like buttons, scrollbars, images, toggles, and navigation menus).</span>
              </li>
              <li className="flex gap-3 sm:gap-4 text-gray-700 text-base sm:text-lg">
                <span className="shrink-0 text-red-600 font-bold mt-1">•</span>
                <span>Where should these elements be positioned? What's the optimal layout and visual hierarchy for each screen?</span>
              </li>
              <li className="flex gap-3 sm:gap-4 text-gray-700 text-base sm:text-lg">
                <span className="shrink-0 text-red-600 font-bold mt-1">•</span>
                <span>What should happen when the user clicks on each individual element?</span>
              </li>
              <li className="flex gap-3 sm:gap-4 text-gray-700 text-base sm:text-lg">
                <span className="shrink-0 text-red-600 font-bold mt-1">•</span>
                <span>How do individual screens connect and relate to each other?</span>
              </li>
              <li className="flex gap-3 sm:gap-4 text-gray-700 text-base sm:text-lg">
                <span className="shrink-0 text-red-600 font-bold mt-1">•</span>
                <span>How can we make the interface visually appealing? What color schemes, imagery, and typography should we use?</span>
              </li>
            </ul>

            {/* Content Image */}
            <div className="my-10 sm:my-12 lg:my-16 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://cdn.careerfoundry.com/en/wp-content/uploads/old-blog-uploads/difference-between-ux-and-ui.jpg"
                alt="Comparison between UX and UI Design"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Section 2 */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mt-12 sm:mt-14 lg:mt-20 mb-4 sm:mb-6">
              Why do companies often advertise UX/UI roles as one?
            </h2>

            <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-6 sm:mb-8">
              We've established that UX and UI design are two separate fields, so now you might be wondering: why is it that so many job ads ask for UX/UI designers in one? The truth is, in the grand scheme of things, UI/UX are still relatively new fields—and, as already mentioned, they tend to be specific to the tech industry. Outside the worlds of design and tech, they're not so widely understood despite being incredibly important for business.
            </p>

            <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-6 sm:mb-8">
              While the business value of good design is increasingly recognized, there's still a tendency for hiring managers and recruiters to assume that UX and UI are done by the same person—hence the catch-all job ads you've no doubt come across. It's not always a simple case of misunderstanding, though. Many companies will deliberately seek out versatile designers who can cover both UX and UI or who at least have an understanding of UX or UI principles in addition to their main skillset.
            </p>

            <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-8 sm:mb-10 lg:mb-12 p-6 sm:p-8 bg-yellow-50 border-l-4 border-yellow-500 rounded-r-lg">
              So, how can you work out what's really going on? Whether you're looking for a UI-only role, a purely UX-focused career, or a mixture of both, it's important to look beyond the job title and pay close attention to the skills, tasks, and responsibilities listed.
            </p>

            {/* Comparison Image */}
            <div className="my-10 sm:my-12 lg:my-16 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://cdn.careerfoundry.com/en/wp-content/uploads/old-blog-uploads/tasks-and-responsibilities-of-ux-vs-ui-designers.jpg"
                alt="Tasks and Responsibilities of UX vs UI Designers"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* CTA */}
            <div className="mt-12 sm:mt-16 lg:mt-20 p-6 sm:p-8 lg:p-10 bg-linear-to-r from-red-50 to-orange-50 rounded-xl border-l-4 border-red-600">
              <p className="text-gray-800 text-base sm:text-lg leading-relaxed mb-6">
                Want to dive deeper into the world of UX and UI design? CareerFoundry offers comprehensive courses and resources to help you get started on your design journey.
              </p>
              <a
                href="https://careerfoundry.com/en/blog/ux-design/the-difference-between-ux-and-ui-design-a-laymans-guide/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition-colors text-sm sm:text-base"
              >
                Get Full Story →
              </a>
            </div>
          </article>

          {/* Article Footer */}
          <div className="mt-12 sm:mt-16 lg:mt-20 pt-8 sm:pt-10 border-t-2 border-gray-200">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 sm:gap-4">
              <div>
                <p className="text-sm text-gray-500 mb-2">Article by</p>
                <p className="font-bold text-gray-900 text-lg">CareerFoundry</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <button className="px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg font-semibold text-gray-700 transition-colors text-sm sm:text-base">
                  Share Article
                </button>
                <button className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold transition-colors text-sm sm:text-base">
                  Subscribe to Blog
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Card3

