// import Navbar from "../../Navbar"
// import Footer from "../Footer"

// const Card5 = () => {
//   return (
//     <div>
//       <Navbar />
//       <div className="mt-20 p-5 flex justify-center">
//         <div className="w-[1000px] h-full m-2 p-2 bg-[#ffffff]">
//           <div className="">
//             <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/0*87cD7-YKwcl_Quvu" alt="" className="w-full h-full m-1 object-cover"/>
//             <p className="text-4xl font-extrabold text-gray-800">From Facts & Metrics to Media Machine Learning: Evolving the Data Engineering Function at Netflix</p>
//           </div>
//           <div className="text-xl text-gray-900 font-light ">
//             <p className="text-2xl text-gray-500 font-bold ">
//               The Evolution: From Traditional Tables to Media Tables
//             </p>
//             <p>
//               Traditional data engineering at Netflix focused on building structured tables for metrics, dashboards, and data science models. These tables were primarily structured text or numerical fields, ideal for business intelligence, analytics and statistical modeling.
// However, the nature of media data is fundamentally different:
//             </p>
//             <p>
//               It’s multi-modal (video, audio, text, images).
// It contains derived fields from media (embeddings, captions, transcriptions…etc)
// It’s unstructured and massive in scale when parsed out.
// It’s deeply intertwined with creative workflows and business asset lineage.
//             </p>
//             <p>
//               As our studio operations (see below) expanded, we saw the need for a new approach — one that could provide centralized, standardized, and scalable access to all types of media assets and their metadata for both analytical and machine learning workflows.
//             </p>
//             <p className="text-2xl text-gray-400 font-bold ">
//               The Rise of Media Data Engineering
//             </p>
//             <p>
//               Enter Media Data Engineering — a new specialization at Netflix that bridges the gap between traditional data engineering and the unique demands of media-centric machine learning. This role sits at the intersection of data engineering, ML infrastructure, and media production. Our mission is to provide seamless access to media assets and derived data (including outputs from machine learning models) for researchers, data scientists, and other downstream data consumers.
//             </p>
//             <p className="text-2xl text-gray-400 font-bold ">
//               Key Responsibilities:
//             </p>
//             <p>
//               Centralized Media Data Access: Building, cataloging and maintaining the data and pipelines that populates the Media Data Lake, a data platform for storing and serving media assets and their metadata.
//             </p>
//             <p>
//               Asset Standardization: Standardizing media assets across modalities (video, images, audio, text) to ensure consistency and quality for ML applications in partnership with domain engineering teams.
//             </p>
//             <p>
//               Metadata Management: Unifying and enriching asset metadata, making it easier to track asset lineage, quality, and coverage.
// ML-Ready Data: Exposing large corpora of assets for early-stage algorithm exploration, benchmarking, and productionization.
//             </p>
//             <p>
//               Collaboration: Partnering closely with domain experts, algorithm researchers, upstream content engineering teams and (machine learning & data) platform colleagues to ensure our data meets real-world needs.
//             </p>
//             <p>
//               This new role is essential for bridging the gap between creative media workflows and the technical demands of cutting-edge ML.
//             </p>
//             <p className="text-2xl text-gray-400 font-bold ">
//               Introducing the Media Data Lake
//             </p>
//             <p>
//               To enable the next generation of media analytics and machine learning, we are building the Media Data Lake at Netflix — a data lake designed specifically for media assets at Netflix using state of the art vector storage solutions. We have partnered with our data platform team to pilot integrating LanceDB into our Big Data Platform.
//             </p>
//             <p className="text-2xl text-gray-400 font-bold ">
//               Architecture and Key Components
//             </p>
//             <p>
//               Media Table: The core of the Media Data Lake, this structured dataset captures essential metadata and references to all media assets. It’s designed to be extensible, supporting both traditional metadata and outputs from ML models (including transformer-based embeddings, media understanding research and more).
//             </p>
//             <p>
//               Data Model: We are developing a robust data model to standardize how media assets and their attributes are represented, making it easier to query and join across schemas.
//             </p>
//             <p>
//               Data API: An pythonic interface that will provide programmatic access to the Media Table, supporting both interactive exploration and automated workflows.
//               UI Components: Off-the-shelf UI interfaces enable teams to visually explore assets in the media data lake, accelerating discovery and iteration for ICs.
//             </p>
//             <p>
//               Online and Offline System Architecture: Real-time access for lightweight queries and exploration of raw media assets; scalable large batch processing for ML training, benchmarking, and research.
// Compute: distributed batch inference layer capable of processing using GPUs and media data processing at scale using CPUs.
//             </p>
//             <p  className="text-2xl text-gray-400 font-bold ">
//               Starting Small with New Technology
//             </p>
//             <p>
//               Our initial focus this past year has been on delivering a “data pond” — a mini-version of the Media Data Lake targeted at video/audio datasets for early stage model training, evaluation and research. All data for this phase comes from AMP, our internal asset management system and annotation store, and the scope is intentionally small to ensure a solid, extensible foundation could be built while introducing a new technology into the company. We are able to perform data exploration of the raw media assets to build up an intuitive understanding of the media via lightweight queries to AMP.
//             </p>
//             <p className="text-2xl text-gray-400 font-bold ">
//               Media Tables: The New Foundation for ML and Innovation
//             </p>
//             <p>
//               One of the most exciting developments is the rise of media tables — structured datasets that not only capture traditional metadata, but also include the outputs of advanced ML models.
//             </p>
//             <p>
//               <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/0*4AL_ScuaNy4ZguBj" alt="" className="w-full object-cover"/>
//             </p>
//             <p>
//               These media tables power a range of innovative applications, such as:
//             </p>
//             <p>
//               Translation & Audio Quality Measures: Managing audio clips and model features for engineering localization quality metrics.
//             </p>
//             <p>
//               Story Understanding and Content Embedding: Structuring narrative elements extracted from textual evidence and video of a title to increase operational efficiency in title launch preparation and ratings, e.g. detection of smoking, gore, NSFW scenes in our titles.
//             </p>
//             <p>
//               Media Search: Leverage multi-modal vector search to find similar keyframes, shots, dialogue to facilitate research and experimentation.
//             </p>
//             <p>
//               These tables are designed to scale, support complex queries, and serve both research and other data science & analytical needs.
//             </p>
//             <p className="text-2xl text-gray-400 font-bold ">
//               The Human Side: New Roles and Collaboration
//             </p>
//             <p>
//               Media Data Engineering is a team sport. Our data engineers partner with domain experts, data scientists, ML researchers, upstream business ops and content engineering teams to ensure our data solutions are fit for purpose. We also work closely with our friendly platform teams to ensure technological breakthroughs that are beneficial beyond our small corner of the universe could become horizontal abstractions that benefit the rest of Netflix. This collaborative model enables rapid iteration, high data quality, innovative use cases and technology re-use.
//             </p>
//             <p>
//               <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/0*adTotLaJXhE7KC2-" alt=""className="w-full object-cover"/>
//             </p>
//             <p className="text-2xl text-gray-400 font-bold ">
//               Looking Ahead
//             </p>
//             <p>
//               The evolution from traditional data engineering to media data engineering — anchored by our media data lake — is unlocking new frontiers for Netflix:
//             </p>
//             <p>
//               Richer, more accurate ML models trained on high-quality, standardized media data.
// Supercharge ML Model evaluations via quick iteration cycles on the data.
//             </p>
//             <p>
//               Faster experimentation and productization of new AI-powered features.
// Deeper insights into our content and creative workflows via metrics constructed from Media ML algorithms inferred features.
//             </p>
//             <p>
//               As we continue to grow the media data lake, be on the lookout for subsequent blog posts sharing our learnings and tools with the broader media ml & data engineering community.
//             </p>
//             <p>

//             </p>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   )
// }

// export default Card5
import Navbar from "../../Navbar"
import Footer from "../Footer"
import { HiArrowLeft } from "react-icons/hi"
import { useNavigate } from "react-router-dom"

const Card5 = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="w-full bg-linear-to-br from-slate-50 via-white to-blue-50 pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-600 hover:text-red-600 font-semibold mb-8 sm:mb-10 transition-colors"
          >
            <HiArrowLeft className="text-lg" />
            <span>Back to Blogs</span>
          </button>

          {/* Hero Image */}
          <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 mb-8 sm:mb-10 lg:mb-12">
            <img
              src="https://miro.medium.com/v2/resize:fit:720/format:webp/0*87cD7-YKwcl_Quvu"
              alt="Netflix Media Data Engineering"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent"></div>
          </div>

          {/* Title & Meta */}
          <div>
            <div className="mb-4 sm:mb-6">
              <span className="inline-block px-4 py-2 bg-red-100 text-red-600 rounded-full text-xs sm:text-sm font-bold tracking-wide">
                DATA ENGINEERING
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              From Facts & Metrics to Media Machine Learning: Evolving the Data Engineering Function at Netflix
            </h1>

            <p className="text-sm sm:text-base text-gray-500">
              By Netflix Engineering • Published 2024 • 14 min read
            </p>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="w-full bg-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Reading Progress Bar */}
          <div className="fixed top-0 left-0 h-1 bg-linear-to-r from-red-500 to-red-600 transition-all duration-300 z-50" style={{ width: '50%' }}></div>

          {/* Main Content */}
          <article className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
            
            {/* Introduction */}
            <div className="mb-8 sm:mb-10 lg:mb-12 p-4 sm:p-6 lg:p-8 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg">
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed m-0">
                Traditional data engineering at Netflix focused on building structured tables for metrics, dashboards, and data science models. However, the nature of media data is fundamentally different, requiring a new approach.
              </p>
            </div>

            {/* Section 1 */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mt-10 sm:mt-12 lg:mt-16 mb-4 sm:mb-6">
              The Evolution: From Traditional Tables to Media Tables
            </h2>

            <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-6 sm:mb-8">
              Traditional data engineering at Netflix focused on building structured tables for metrics, dashboards, and data science models. These tables were primarily structured text or numerical fields, ideal for business intelligence, analytics and statistical modeling.
            </p>

            <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-6 sm:mb-8">
              However, the nature of media data is fundamentally different:
            </p>

            <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-10 lg:mb-12 list-none pl-0">
              <li className="flex gap-3 sm:gap-4 text-gray-700 text-base sm:text-lg">
                <span className="shrink-0 text-red-600 font-bold mt-1">•</span>
                <span>It's multi-modal (video, audio, text, images)</span>
              </li>
              <li className="flex gap-3 sm:gap-4 text-gray-700 text-base sm:text-lg">
                <span className="shrink-0 text-red-600 font-bold mt-1">•</span>
                <span>It contains derived fields from media (embeddings, captions, transcriptions)</span>
              </li>
              <li className="flex gap-3 sm:gap-4 text-gray-700 text-base sm:text-lg">
                <span className="shrink-0 text-red-600 font-bold mt-1">•</span>
                <span>It's unstructured and massive in scale when parsed out</span>
              </li>
              <li className="flex gap-3 sm:gap-4 text-gray-700 text-base sm:text-lg">
                <span className="shrink-0 text-red-600 font-bold mt-1">•</span>
                <span>It's deeply intertwined with creative workflows and business asset lineage</span>
              </li>
            </ul>

            <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-8 sm:mb-10 lg:mb-12 pb-8 sm:pb-10 lg:pb-12 border-b-2 border-gray-200">
              As our studio operations expanded, we saw the need for a new approach — one that could provide centralized, standardized, and scalable access to all types of media assets and their metadata for both analytical and machine learning workflows.
            </p>

            {/* Section 2 */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mt-10 sm:mt-12 lg:mt-16 mb-4 sm:mb-6">
              The Rise of Media Data Engineering
            </h2>

            <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-6 sm:mb-8">
              Enter Media Data Engineering — a new specialization at Netflix that bridges the gap between traditional data engineering and the unique demands of media-centric machine learning. This role sits at the intersection of data engineering, ML infrastructure, and media production. Our mission is to provide seamless access to media assets and derived data (including outputs from machine learning models) for researchers, data scientists, and other downstream data consumers.
            </p>

            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mt-8 sm:mt-10 mb-4 sm:mb-6">
              Key Responsibilities:
            </h3>

            <ul className="space-y-4 sm:space-y-5 mb-8 sm:mb-10 lg:mb-12 list-none pl-0">
              <li className="flex gap-3 sm:gap-4">
                <span className="shrink-0 text-red-600 font-bold text-lg mt-1">→</span>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Centralized Media Data Access</h4>
                  <p className="text-gray-700 text-base sm:text-lg">Building, cataloging and maintaining the data and pipelines that populates the Media Data Lake, a data platform for storing and serving media assets and their metadata.</p>
                </div>
              </li>
              <li className="flex gap-3 sm:gap-4">
                <span className="shrink-0 text-red-600 font-bold text-lg mt-1">→</span>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Asset Standardization</h4>
                  <p className="text-gray-700 text-base sm:text-lg">Standardizing media assets across modalities (video, images, audio, text) to ensure consistency and quality for ML applications in partnership with domain engineering teams.</p>
                </div>
              </li>
              <li className="flex gap-3 sm:gap-4">
                <span className="shrink-0 text-red-600 font-bold text-lg mt-1">→</span>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Metadata Management</h4>
                  <p className="text-gray-700 text-base sm:text-lg">Unifying and enriching asset metadata, making it easier to track asset lineage, quality, and coverage.</p>
                </div>
              </li>
              <li className="flex gap-3 sm:gap-4">
                <span className="shrink-0 text-red-600 font-bold text-lg mt-1">→</span>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">ML-Ready Data</h4>
                  <p className="text-gray-700 text-base sm:text-lg">Exposing large corpora of assets for early-stage algorithm exploration, benchmarking, and productionization.</p>
                </div>
              </li>
              <li className="flex gap-3 sm:gap-4">
                <span className="shrink-0 text-red-600 font-bold text-lg mt-1">→</span>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Collaboration</h4>
                  <p className="text-gray-700 text-base sm:text-lg">Partnering closely with domain experts, algorithm researchers, upstream content engineering teams and platform colleagues to ensure our data meets real-world needs.</p>
                </div>
              </li>
            </ul>

            <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-8 sm:mb-10 lg:mb-12">
              This new role is essential for bridging the gap between creative media workflows and the technical demands of cutting-edge ML.
            </p>

            {/* Section 3 */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mt-12 sm:mt-14 lg:mt-20 mb-4 sm:mb-6">
              Introducing the Media Data Lake
            </h2>

            <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-8 sm:mb-10 lg:mb-12">
              To enable the next generation of media analytics and machine learning, we are building the Media Data Lake at Netflix — a data lake designed specifically for media assets at Netflix using state of the art vector storage solutions. We have partnered with our data platform team to pilot integrating LanceDB into our Big Data Platform.
            </p>

            {/* Section 4 */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mt-12 sm:mt-14 lg:mt-20 mb-4 sm:mb-6">
              Architecture and Key Components
            </h2>

            <ul className="space-y-4 sm:space-y-5 mb-8 sm:mb-10 lg:mb-12 list-none pl-0">
              <li className="flex gap-3 sm:gap-4">
                <span className="shrink-0 text-red-600 font-bold text-lg mt-1">•</span>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Media Table</h4>
                  <p className="text-gray-700 text-base sm:text-lg">The core of the Media Data Lake, this structured dataset captures essential metadata and references to all media assets. It's designed to be extensible, supporting both traditional metadata and outputs from ML models.</p>
                </div>
              </li>
              <li className="flex gap-3 sm:gap-4">
                <span className="shrink-0 text-red-600 font-bold text-lg mt-1">•</span>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Data Model</h4>
                  <p className="text-gray-700 text-base sm:text-lg">We are developing a robust data model to standardize how media assets and their attributes are represented, making it easier to query and join across schemas.</p>
                </div>
              </li>
              <li className="flex gap-3 sm:gap-4">
                <span className="shrink-0 text-red-600 font-bold text-lg mt-1">•</span>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Data API</h4>
                  <p className="text-gray-700 text-base sm:text-lg">An pythonic interface that will provide programmatic access to the Media Table, supporting both interactive exploration and automated workflows.</p>
                </div>
              </li>
              <li className="flex gap-3 sm:gap-4">
                <span className="shrink-0 text-red-600 font-bold text-lg mt-1">•</span>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">UI Components</h4>
                  <p className="text-gray-700 text-base sm:text-lg">Off-the-shelf UI interfaces enable teams to visually explore assets in the media data lake, accelerating discovery and iteration.</p>
                </div>
              </li>
              <li className="flex gap-3 sm:gap-4">
                <span className="shrink-0 text-red-600 font-bold text-lg mt-1">•</span>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Online and Offline System Architecture</h4>
                  <p className="text-gray-700 text-base sm:text-lg">Real-time access for lightweight queries and exploration of raw media assets; scalable large batch processing for ML training, benchmarking, and research.</p>
                </div>
              </li>
              <li className="flex gap-3 sm:gap-4">
                <span className="shrink-0 text-red-600 font-bold text-lg mt-1">•</span>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Compute</h4>
                  <p className="text-gray-700 text-base sm:text-lg">Distributed batch inference layer capable of processing using GPUs and media data processing at scale using CPUs.</p>
                </div>
              </li>
            </ul>

            {/* Section 5 */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mt-12 sm:mt-14 lg:mt-20 mb-4 sm:mb-6">
              Starting Small with New Technology
            </h2>

            <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-8 sm:mb-10 lg:mb-12">
              Our initial focus this past year has been on delivering a "data pond" — a mini-version of the Media Data Lake targeted at video/audio datasets for early stage model training, evaluation and research. All data for this phase comes from AMP, our internal asset management system and annotation store, and the scope is intentionally small to ensure a solid, extensible foundation could be built while introducing a new technology into the company. We are able to perform data exploration of the raw media assets to build up an intuitive understanding of the media via lightweight queries to AMP.
            </p>

            {/* Section 6 */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mt-12 sm:mt-14 lg:mt-20 mb-4 sm:mb-6">
              Media Tables: The New Foundation for ML and Innovation
            </h2>

            <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-6 sm:mb-8">
              One of the most exciting developments is the rise of media tables — structured datasets that not only capture traditional metadata, but also include the outputs of advanced ML models.
            </p>

            {/* Content Image */}
            <div className="my-10 sm:my-12 lg:my-16 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://miro.medium.com/v2/resize:fit:720/format:webp/0*4AL_ScuaNy4ZguBj"
                alt="Media Tables Architecture"
                className="w-full h-auto object-cover"
              />
            </div>

            <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-4 sm:mb-6">
              These media tables power a range of innovative applications, such as:
            </p>

            <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-10 lg:mb-12 list-none pl-0">
              <li className="flex gap-3 sm:gap-4 text-gray-700 text-base sm:text-lg">
                <span className="shrink-0 text-red-600 font-bold mt-1">•</span>
                <span><span className="font-semibold">Translation & Audio Quality Measures:</span> Managing audio clips and model features for engineering localization quality metrics.</span>
              </li>
              <li className="flex gap-3 sm:gap-4 text-gray-700 text-base sm:text-lg">
                <span className="shrink-0 text-red-600 font-bold mt-1">•</span>
                <span><span className="font-semibold">Story Understanding and Content Embedding:</span> Structuring narrative elements extracted from textual evidence and video of a title to increase operational efficiency in title launch preparation and ratings.</span>
              </li>
              <li className="flex gap-3 sm:gap-4 text-gray-700 text-base sm:text-lg">
                <span className="shrink-0 text-red-600 font-bold mt-1">•</span>
                <span><span className="font-semibold">Media Search:</span> Leverage multi-modal vector search to find similar keyframes, shots, dialogue to facilitate research and experimentation.</span>
              </li>
            </ul>

            <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-8 sm:mb-10 lg:mb-12">
              These tables are designed to scale, support complex queries, and serve both research and other data science & analytical needs.
            </p>

            {/* Section 7 */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mt-12 sm:mt-14 lg:mt-20 mb-4 sm:mb-6">
              The Human Side: New Roles and Collaboration
            </h2>

            <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-8 sm:mb-10 lg:mb-12">
              Media Data Engineering is a team sport. Our data engineers partner with domain experts, data scientists, ML researchers, upstream business ops and content engineering teams to ensure our data solutions are fit for purpose. We also work closely with our friendly platform teams to ensure technological breakthroughs that are beneficial beyond our small corner of the universe could become horizontal abstractions that benefit the rest of Netflix. This collaborative model enables rapid iteration, high data quality, innovative use cases and technology re-use.
            </p>

            {/* Content Image */}
            <div className="my-10 sm:my-12 lg:my-16 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://miro.medium.com/v2/resize:fit:720/format:webp/0*adTotLaJXhE7KC2-"
                alt="Media Data Engineering Collaboration"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Section 8 */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mt-12 sm:mt-14 lg:mt-20 mb-4 sm:mb-6">
              Looking Ahead
            </h2>

            <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-4 sm:mb-6">
              The evolution from traditional data engineering to media data engineering — anchored by our media data lake — is unlocking new frontiers for Netflix:
            </p>

            <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-10 lg:mb-12 list-none pl-0">
              <li className="flex gap-3 sm:gap-4 text-gray-700 text-base sm:text-lg">
                <span className="shrink-0 text-red-600 font-bold mt-1">✓</span>
                <span>Richer, more accurate ML models trained on high-quality, standardized media data</span>
              </li>
              <li className="flex gap-3 sm:gap-4 text-gray-700 text-base sm:text-lg">
                <span className="shrink-0 text-red-600 font-bold mt-1">✓</span>
                <span>Supercharge ML Model evaluations via quick iteration cycles on the data</span>
              </li>
              <li className="flex gap-3 sm:gap-4 text-gray-700 text-base sm:text-lg">
                <span className="shrink-0 text-red-600 font-bold mt-1">✓</span>
                <span>Faster experimentation and productization of new AI-powered features</span>
              </li>
              <li className="flex gap-3 sm:gap-4 text-gray-700 text-base sm:text-lg">
                <span className="shrink-0 text-red-600 font-bold mt-1">✓</span>
                <span>Deeper insights into our content and creative workflows via metrics constructed from Media ML algorithms inferred features</span>
              </li>
            </ul>

            <div className="p-6 sm:p-8 lg:p-10 bg-linear-to-r from-red-50 to-orange-50 rounded-xl border-l-4 border-red-600">
              <p className="text-gray-800 text-base sm:text-lg leading-relaxed m-0">
                As we continue to grow the media data lake, be on the lookout for subsequent blog posts sharing our learnings and tools with the broader media ML & data engineering community.
              </p>
            </div>
          </article>

          {/* Article Footer */}
          <div className="mt-12 sm:mt-16 lg:mt-20 pt-8 sm:pt-10 border-t-2 border-gray-200">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 sm:gap-4">
              <div>
                <p className="text-sm text-gray-500 mb-2">Article by</p>
                <p className="font-bold text-gray-900 text-lg">Netflix Engineering</p>
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

export default Card5