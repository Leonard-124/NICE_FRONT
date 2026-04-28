

import Footer from "./Home/Footer";
import Navbar from "./Navbar";
import { HiChevronRight } from "react-icons/hi";

const Community = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="w-full bg-linear-to-br from-green-50 via-white to-emerald-100 pt-20 sm:pt-24 lg:pt-28 pb-16 sm:pb-20 lg:pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Join Our 
              <span className="text-transparent bg-clip-text bg-linear-to-r from-green-500 to-emerald-600"> Community</span>
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 font-light mb-4 sm:mb-6 max-w-3xl mx-auto leading-relaxed">
              Join our WhatsApp community and channel and be part of the revolutionary movement reshaping the tech landscape
            </p>

            <p className="text-sm sm:text-base text-gray-600">
              Connect with thousands of developers, designers, and tech enthusiasts
            </p>
          </div>

          {/* Community Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            
            {/* Community Card */}
            <a
              href="https://chat.whatsapp.com/BptPq3QWCO5E5U07IRJKjw"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative h-64 sm:h-72 md:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 bg-linear-to-br from-green-400 to-emerald-500"
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 sm:p-8">
                <div className="text-center">
                  <div className="mb-4 sm:mb-6">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto bg-white rounded-full flex items-center justify-center shadow-lg">
                      <svg className="w-8 h-8 sm:w-10 sm:h-10 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.869 1.171c-1.493.821-2.771 1.98-3.756 3.322-.987 1.341-1.604 2.926-1.832 4.716-.228 1.79.212 3.565 1.278 5.079 1.065 1.514 2.565 2.695 4.319 3.416.75.323 1.567.498 2.457.498.89 0 1.707-.175 2.457-.498 1.753-.721 3.254-1.902 4.319-3.416 1.065-1.514 1.506-3.289 1.278-5.079-.228-1.79-.845-3.375-1.832-4.716-.985-1.342-2.263-2.501-3.756-3.322a9.87 9.87 0 00-4.869-1.171z"/>
                      </svg>
                    </div>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300">
                    Ibonnis Community
                  </h3>
                  
                  <p className="text-green-50 text-base sm:text-lg font-medium mb-6 sm:mb-8">
                    Connect and collaborate with our members
                  </p>

                  <div className="flex items-center justify-center gap-2 text-white font-semibold text-sm sm:text-base group-hover:translate-x-2 transition-transform duration-300">
                    <span>Join Now</span>
                    <HiChevronRight className="text-xl" />
                  </div>
                </div>
              </div>

              {/* Animated background elements */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300">
                <div className="absolute -top-4 -right-4 w-32 h-32 bg-white rounded-full blur-2xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-white rounded-full blur-2xl"></div>
              </div>
            </a>

            {/* Channel Card */}
            <a
              href="https://whatsapp.com/channel/0029VbC0X5J7tkjFfBvttb2h"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative h-64 sm:h-72 md:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 bg-linear-to-br from-emerald-400 to-teal-500"
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 sm:p-8">
                <div className="text-center">
                  <div className="mb-4 sm:mb-6">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto bg-white rounded-full flex items-center justify-center shadow-lg">
                      <svg className="w-8 h-8 sm:w-10 sm:h-10 text-emerald-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12h-8v-2h8v2zm0-3h-8V9h8v2zm0-3H4V4h14v4z"/>
                      </svg>
                    </div>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300">
                    Ibonnis Channel
                  </h3>
                  
                  <p className="text-emerald-50 text-base sm:text-lg font-medium mb-6 sm:mb-8">
                    Stay updated with latest news and insights
                  </p>

                  <div className="flex items-center justify-center gap-2 text-white font-semibold text-sm sm:text-base group-hover:translate-x-2 transition-transform duration-300">
                    <span>Join Now</span>
                    <HiChevronRight className="text-xl" />
                  </div>
                </div>
              </div>

              {/* Animated background elements */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300">
                <div className="absolute -top-4 -right-4 w-32 h-32 bg-white rounded-full blur-2xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-white rounded-full blur-2xl"></div>
              </div>
            </a>
          </div>

          {/* Benefits Section */}
          <div className="mt-16 sm:mt-20 lg:mt-24 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            <div className="p-6 sm:p-8 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 sm:gap-4 mb-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-green-100 rounded-lg flex items-center justify-center">
                  <span className="text-xl sm:text-2xl">💬</span>
                </div>
                <h4 className="font-bold text-gray-900 text-sm sm:text-base">Active Discussions</h4>
              </div>
              <p className="text-gray-600 text-sm sm:text-base">Engage in meaningful conversations with our vibrant community members</p>
            </div>

            <div className="p-6 sm:p-8 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 sm:gap-4 mb-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-green-100 rounded-lg flex items-center justify-center">
                  <span className="text-xl sm:text-2xl">📚</span>
                </div>
                <h4 className="font-bold text-gray-900 text-sm sm:text-base">Learning Resources</h4>
              </div>
              <p className="text-gray-600 text-sm sm:text-base">Access exclusive tips, tutorials, and resources shared by experts</p>
            </div>

            <div className="p-6 sm:p-8 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 sm:gap-4 mb-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-green-100 rounded-lg flex items-center justify-center">
                  <span className="text-xl sm:text-2xl">🤝</span>
                </div>
                <h4 className="font-bold text-gray-900 text-sm sm:text-base">Networking</h4>
              </div>
              <p className="text-gray-600 text-sm sm:text-base">Build valuable connections with fellow developers and professionals</p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 sm:mt-20 lg:mt-24 p-8 sm:p-10 lg:p-12 bg-linear-to-r from-green-500 to-emerald-600 rounded-2xl shadow-xl">
            <div className="text-center">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
                Ready to Join the Revolution?
              </h3>
              <p className="text-green-50 text-base sm:text-lg mb-8 sm:mb-10 max-w-2xl mx-auto">
                Connect with thousands of tech professionals and stay ahead of the curve with the latest insights, resources, and opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://chat.whatsapp.com/BptPq3QWCO5E5U07IRJKjw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 sm:py-4 bg-white text-green-600 font-bold rounded-lg hover:bg-green-50 transition-colors text-sm sm:text-base"
                >
                  Join Community
                </a>
                <a
                  href="https://whatsapp.com/channel/0029VbC0X5J7tkjFfBvttb2h"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 sm:py-4 bg-transparent text-white border-2 border-white font-bold rounded-lg hover:bg-white/10 transition-colors text-sm sm:text-base"
                >
                  Subscribe Channel
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Community;
