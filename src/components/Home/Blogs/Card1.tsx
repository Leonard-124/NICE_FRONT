// import Navbar from "../../Navbar"
// import Footer from "../Footer"
// import jobb from "./../../../assets/images/jobb.jpg"

// const Card1 = () => {
//   return (
//     <div>
//       <Navbar />
//       <div className="mt-20 p-2 flex justify-center">
//         <div className="w-[1000px] h-full bg-[#f3f0f0] p-2">
//           <div className="flex justify-between max-h[300px] gap-3">
//             <div className="  w-[500px] h-[300px]">
//               <img src={jobb} alt="" className="w-full h-full object-cover"/>
//             </div>
//             <div>
//               <p className="text-5xl font-extrabold text-gray-500">Is Your <br />Sensitive Data <br /> Truly Secure?</p>
//               <p className="text-gray-400 text-3xl">From Redapt Marketing: 1/29/2026 </p>
//             </div>
//           </div>
//                       <div className="text pt-3 text-xl">
//               <p className="text">
//                 Throughout daily business operations, your organization generates, shares, and stores vast amounts of data. This information is the engine of your operations, driving innovation, customer relationships, and strategic decisions. However, within this vast digital landscape, a critical question arises: Do you know where your most sensitive data is, who can access it, and whether it's genuinely protected? Answering this question with confidence is becoming one of the most significant challenges for modern enterprises. 
//               </p>
//               <p className="text">
//                 Many leaders assume their existing security measures are sufficient. Yet, data quietly multiplies across cloud platforms, applications, and endpoints, often outside the view of traditional security tools. This article will help you assess your organization's position by exploring the common, yet frequently overlooked, challenges of data security. By understanding these risks, you can establish a clear path toward achieving true data intelligence and protection. 
//               </p>
//               <p className="text-4xl text-gray-500 tracking-[1px]">The Challenge of Unstructured Data Sprawl </p>
//               <p className="text">
//                 Think about the countless documents, spreadsheets, presentations, and messages your teams create every day. This is unstructured data, and it accounts for the vast majority of information within any organization. It lives in shared drives, cloud storage, collaboration tools, and email inboxes. Now, ask yourself these questions: 
//               </p>
//               <ul className="outline-dotted">
//                 <li>How many copies of a sensitive financial report exist across our network right now?</li>
//                 <li>Could a former employee still access confidential project files stored in a shared folder?</li>
//                 <li>Do we know if customer PII (Personally Identifiable Information) is embedded in service-team chat logs? </li>
//               </ul>
//               <p className="text">
//                 The uncontrolled growth and replication of this data create a massive blind spot. Without a clear understanding of what this data is, where it resides, and its level of sensitivity, protecting it becomes an impossible task. Each duplicate file and forgotten folder represents a potential point of failure, expanding your attack surface without your knowledge. 
//               </p>
//               <p className="text-4xl text-gray-500 tracking-[1px]">
//                 The Hidden Risk of over-permissive access
//               </p>
//               <p className="text">
//                 Granting employees access to the data they need is essential for productivity. However, access permissions often become bloated over time. Employees change roles, projects conclude, and collaborations end, but their access rights frequently remain unchanged. This leads to a state of "over-permissive access," where more people can view and handle sensitive information than necessary. 
//               </p>
//               <p className="text-4xl text-black tracking-[1px]">
//                 Consider the following points for your own organization
//               </p>
//               <ul>
//                 <li>When an employee moves from the finance department to marketing, are their permissions to sensitive financial folders immediately revoked?</li>
//                 <li>Do temporary contractors or third-party vendors retain access to data long after their contracts have ended?</li>
//                 <li>Can any user in a department-wide group access every file within it, regardless of their role or the need-to-know basis? </li>
//               </ul>
//               <p className="text">
//                 This issue isn't about a lack of trust in your employees. It is a fundamental security risk. Every person with unnecessary access to sensitive data is a potential vector for an accidental leak or a deliberate breach. Adhering to the principle of least privilege—granting only the minimum access required for a role—is a foundational security practice that is difficult to maintain at scale without the proper visibility. 
//               </p>
//               <p className="text-4xl text-gray-500 tracking-[1px]">
//                 Navigating the Complex Web of Compliance 
//               </p>
//               <p className="text">
//                 Data privacy regulations, such as GDPR, CCPA, and HIPAA, are no longer just guidelines; they are now legal mandates with severe financial penalties for non-compliance. These regulations require organizations to know precisely what sensitive data they hold, how it is used, and how to manage it upon customer request, such as the "right to be forgotten." 
//               </p>
//               <p className="text-4xl text-black tracking-[1px]">
//                 To gauge your compliance posture, reflect on these questions:
//               </p>
//               <ol>
//                 <li>If a customer requested a full report of their personal data stored by your company, could you produce it accurately and completely within the mandated timeframe?</li>
//                 <li>Are you confident that data classified under a specific regulation is stored and protected according to that regulation's rules?</li>
//                 <li>Can you demonstrate to auditors that you have consistently applied security policies to all relevant sensitive data, regardless of its storage location? </li>
//               </ol>
//               <p className="text">Meeting these requirements is nearly impossible when you lack visibility into your data. Fines and reputational damage from a compliance failure can be devastating. Proactive data governance is not just good practice; it is a business necessity. </p>
//               <p className="text-4xl text-gray-500 tracking-[1px]">The Path Forward with Redapt and AI </p>
//               <p className="text">Confronting these challenges can feel overwhelming. The scale and complexity of modern data environments have surpassed the capabilities of manual oversight and traditional tools. Identifying, classifying, and securing sensitive information across terabytes or even petabytes of unstructured data requires a more intelligent, automated approach. </p>
//               <p className="text">This is where a proven methodology powered by AI becomes essential. At Redapt, we guide enterprises through these complex data security challenges. We understand that adequate data protection is not about deploying another single tool but about implementing a holistic strategy that provides deep visibility and enables intelligent, automated governance.</p>
//               <p className="text-4xl text-black tracking-[1px]">Our approach helps you: </p>
//               <ol>
//                 <li>
//                   Gain Visibility: We leverage an AI-powered methodology to scan, identify, and classify your sensitive data across your entire digital estate—from cloud to on-premises systems.
//                 </li>
//                 <li>
//                   Assess Risk: By understanding what data you have, where it is, and who has access to it, we help you accurately assess your risk posture and identify critical vulnerabilities.
//                 </li>
//                 <li>
//                   Implement Governance: We work with you to establish automated policies for securing data, remediating over-permissive access, and ensuring continuous compliance. 
//                 </li>
//               </ol>
//               <p>
//                 By partnering with Redapt, you can move from a state of uncertainty to one of confidence. Our collaborative process and deep expertise empower your organization to protect its most valuable asset—your data—and unlock its full potential for innovation and growth. Together, we can build a resilient security framework that is prepared for the challenges of today and tomorrow. 
//               </p>
//             </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   )
// }

// export default Card1
//////////////////////////////////

import Navbar from "../../Navbar"
import Footer from "../Footer"
import jobb from "./../../../assets/images/jobb.jpg"
import { HiArrowLeft, HiShare, HiBookmark } from "react-icons/hi"
import { useNavigate } from "react-router-dom"

const Card1 = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="w-full bg-linear-to-br from-slate-50 via-white to-blue-50 pt-20 sm:pt-24 lg:pt-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-600 hover:text-red-600 font-semibold mb-8 sm:mb-10 transition-colors"
          >
            <HiArrowLeft className="text-lg" />
            <span>Back to Blogs</span>
          </button>

          {/* Article Header */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 mb-12 sm:mb-16 lg:mb-20 items-start">
            
            {/* Hero Image */}
            <div className="order-2 md:order-1">
              <div className="relative h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <img
                  src={jobb}
                  alt="Data Security Article"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent"></div>
              </div>
            </div>

            {/* Article Title & Meta */}
            <div className="order-1 md:order-2 flex flex-col justify-center">
              <div className="mb-4 sm:mb-6">
                <span className="inline-block px-4 py-2 bg-red-100 text-red-600 rounded-full text-xs sm:text-sm font-bold tracking-wide">
                  SECURITY
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                Is Your Sensitive Data Truly Secure?
              </h1>

              <div className="flex flex-col gap-3 sm:gap-4 mb-8 sm:mb-10">
                <p className="text-base sm:text-lg text-gray-600">
                  <span className="font-semibold text-gray-900">From Redapt Marketing</span>
                </p>
                <p className="text-sm sm:text-base text-gray-500">
                  Published on January 29, 2026 • 8 min read
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 sm:gap-4">
                <button className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors shadow-md">
                  <HiShare />
                  <span className="hidden sm:inline">Share</span>
                </button>
                <button className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-red-600 hover:text-red-600 transition-colors">
                  <HiBookmark />
                  <span className="hidden sm:inline">Save</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="w-full bg-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Reading Progress Bar */}
          <div className="fixed top-0 left-0 h-1 bg-linear-to-r from-red-500 to-red-600 transition-all duration-300 z-50" style={{ width: '30%' }}></div>

          {/* Main Content */}
          <article className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
            
            {/* Introduction */}
            <div className="mb-8 sm:mb-10 lg:mb-12 p-4 sm:p-6 lg:p-8 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg">
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed m-0">
                Throughout daily business operations, your organization generates, shares, and stores vast amounts of data. This information is the engine of your operations, driving innovation, customer relationships, and strategic decisions. However, within this vast digital landscape, a critical question arises: Do you know where your most sensitive data is, who can access it, and whether it's genuinely protected? Answering this question with confidence is becoming one of the most significant challenges for modern enterprises.
              </p>
            </div>

            {/* Section 1 */}
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
              Many leaders assume their existing security measures are sufficient. Yet, data quietly multiplies across cloud platforms, applications, and endpoints, often outside the view of traditional security tools. This article will help you assess your organization's position by exploring the common, yet frequently overlooked, challenges of data security. By understanding these risks, you can establish a clear path toward achieving true data intelligence and protection.
            </p>

            {/* Section Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mt-10 sm:mt-12 lg:mt-16 mb-4 sm:mb-6 leading-tight">
              The Challenge of Unstructured Data Sprawl
            </h2>

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
              Think about the countless documents, spreadsheets, presentations, and messages your teams create every day. This is unstructured data, and it accounts for the vast majority of information within any organization. It lives in shared drives, cloud storage, collaboration tools, and email inboxes. Now, ask yourself these questions:
            </p>

            {/* List Section */}
            <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 list-none pl-0">
              <li className="flex gap-3 sm:gap-4 text-gray-700 text-base sm:text-lg">
                <span className="shrink-0 text-red-600 font-bold mt-1">•</span>
                <span>How many copies of a sensitive financial report exist across our network right now?</span>
              </li>
              <li className="flex gap-3 sm:gap-4 text-gray-700 text-base sm:text-lg">
                <span className="shrink-0 text-red-600 font-bold mt-1">•</span>
                <span>Could a former employee still access confidential project files stored in a shared folder?</span>
              </li>
              <li className="flex gap-3 sm:gap-4 text-gray-700 text-base sm:text-lg">
                <span className="shrink-0 text-red-600 font-bold mt-1">•</span>
                <span>Do we know if customer PII (Personally Identifiable Information) is embedded in service-team chat logs?</span>
              </li>
            </ul>

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 italic border-l-4 border-gray-300 pl-4 sm:pl-6">
              The uncontrolled growth and replication of this data create a massive blind spot. Without a clear understanding of what this data is, where it resides, and its level of sensitivity, protecting it becomes an impossible task. Each duplicate file and forgotten folder represents a potential point of failure, expanding your attack surface without your knowledge.
            </p>

            {/* Section 2 */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mt-10 sm:mt-12 lg:mt-16 mb-4 sm:mb-6 leading-tight">
              The Hidden Risk of Over-Permissive Access
            </h2>

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
              Granting employees access to the data they need is essential for productivity. However, access permissions often become bloated over time. Employees change roles, projects conclude, and collaborations end, but their access rights frequently remain unchanged. This leads to a state of "over-permissive access," where more people can view and handle sensitive information than necessary.
            </p>

            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mt-6 sm:mt-8 mb-4 flex items-center gap-2">
              <span className="text-red-600">→</span> Consider the following points for your own organization
            </h3>

            <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 list-none pl-0">
              <li className="flex gap-3 sm:gap-4 text-gray-700 text-base sm:text-lg">
                <span className="shrink-0 text-red-600 font-bold mt-1">•</span>
                <span>When an employee moves from the finance department to marketing, are their permissions to sensitive financial folders immediately revoked?</span>
              </li>
              <li className="flex gap-3 sm:gap-4 text-gray-700 text-base sm:text-lg">
                <span className="shrink-0 text-red-600 font-bold mt-1">•</span>
                <span>Do temporary contractors or third-party vendors retain access to data long after their contracts have ended?</span>
              </li>
              <li className="flex gap-3 sm:gap-4 text-gray-700 text-base sm:text-lg">
                <span className="shrink-0 text-red-600 font-bold mt-1">•</span>
                <span>Can any user in a department-wide group access every file within it, regardless of their role or the need-to-know basis?</span>
              </li>
            </ul>

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 bg-yellow-50 p-4 sm:p-6 rounded-lg border-l-4 border-yellow-500">
              This issue isn't about a lack of trust in your employees. It is a fundamental security risk. Every person with unnecessary access to sensitive data is a potential vector for an accidental leak or a deliberate breach. Adhering to the principle of least privilege—granting only the minimum access required for a role—is a foundational security practice that is difficult to maintain at scale without the proper visibility.
            </p>

            {/* Section 3 */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mt-10 sm:mt-12 lg:mt-16 mb-4 sm:mb-6 leading-tight">
              Navigating the Complex Web of Compliance
            </h2>

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
              Data privacy regulations, such as GDPR, CCPA, and HIPAA, are no longer just guidelines; they are now legal mandates with severe financial penalties for non-compliance. These regulations require organizations to know precisely what sensitive data they hold, how it is used, and how to manage it upon customer request, such as the "right to be forgotten."
            </p>

            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mt-6 sm:mt-8 mb-4 flex items-center gap-2">
              <span className="text-red-600">→</span> To gauge your compliance posture, reflect on these questions:
            </h3>

            <ol className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 list-none pl-0">
              <li className="flex gap-3 sm:gap-4 text-gray-700 text-base sm:text-lg">
                <span className="shrink-0 font-bold text-red-600 min-w-6">1.</span>
                <span>If a customer requested a full report of their personal data stored by your company, could you produce it accurately and completely within the mandated timeframe?</span>
              </li>
              <li className="flex gap-3 sm:gap-4 text-gray-700 text-base sm:text-lg">
                <span className="shrink-0 font-bold text-red-600 min-w-6">2.</span>
                <span>Are you confident that data classified under a specific regulation is stored and protected according to that regulation's rules?</span>
              </li>
              <li className="flex gap-3 sm:gap-4 text-gray-700 text-base sm:text-lg">
                <span className="shrink-0 font-bold text-red-600 min-w-6">3.</span>
                <span>Can you demonstrate to auditors that you have consistently applied security policies to all relevant sensitive data, regardless of its storage location?</span>
              </li>
            </ol>

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-8 sm:mb-10">
              Meeting these requirements is nearly impossible when you lack visibility into your data. Fines and reputational damage from a compliance failure can be devastating. Proactive data governance is not just good practice; it is a business necessity.
            </p>

            {/* Section 4 */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mt-10 sm:mt-12 lg:mt-16 mb-4 sm:mb-6 leading-tight">
              The Path Forward with Redapt and AI
            </h2>

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
              Confronting these challenges can feel overwhelming. The scale and complexity of modern data environments have surpassed the capabilities of manual oversight and traditional tools. Identifying, classifying, and securing sensitive information across terabytes or even petabytes of unstructured data requires a more intelligent, automated approach.
            </p>

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
              This is where a proven methodology powered by AI becomes essential. At Redapt, we guide enterprises through these complex data security challenges. We understand that adequate data protection is not about deploying another single tool but about implementing a holistic strategy that provides deep visibility and enables intelligent, automated governance.
            </p>

            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mt-6 sm:mt-8 mb-4 flex items-center gap-2">
              <span className="text-red-600">→</span> Our approach helps you:
            </h3>

            <ol className="space-y-4 sm:space-y-5 mb-8 sm:mb-10 list-none pl-0">
              <li className="flex gap-3 sm:gap-4">
                <span className="shrink-0 font-bold text-red-600 min-w-8 text-lg">1.</span>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Gain Visibility</h4>
                  <p className="text-gray-700 text-base sm:text-lg">We leverage an AI-powered methodology to scan, identify, and classify your sensitive data across your entire digital estate—from cloud to on-premises systems.</p>
                </div>
              </li>
              <li className="flex gap-3 sm:gap-4">
                <span className="shrink-0 font-bold text-red-600 min-w-8 text-lg">2.</span>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Assess Risk</h4>
                  <p className="text-gray-700 text-base sm:text-lg">By understanding what data you have, where it is, and who has access to it, we help you accurately assess your risk posture and identify critical vulnerabilities.</p>
                </div>
              </li>
              <li className="flex gap-3 sm:gap-4">
                <span className="shrink-0 font-bold text-red-600 min-w-8 text-lg">3.</span>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Implement Governance</h4>
                  <p className="text-gray-700 text-base sm:text-lg">We work with you to establish automated policies for securing data, remediating over-permissive access, and ensuring continuous compliance.</p>
                </div>
              </li>
            </ol>

            {/* Conclusion */}
            <div className="mt-10 sm:mt-12 lg:mt-16 p-6 sm:p-8 lg:p-10 bg-linear-to-r from-red-50 to-orange-50 rounded-xl border-l-4 border-red-600">
              <p className="text-gray-800 text-base sm:text-lg leading-relaxed m-0">
                By partnering with Redapt, you can move from a state of uncertainty to one of confidence. Our collaborative process and deep expertise empower your organization to protect its most valuable asset—your data—and unlock its full potential for innovation and growth. Together, we can build a resilient security framework that is prepared for the challenges of today and tomorrow.
              </p>
            </div>
          </article>

          {/* Article Footer */}
          <div className="mt-12 sm:mt-16 lg:mt-20 pt-8 sm:pt-10 border-t-2 border-gray-200">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 sm:gap-4">
              <div>
                <p className="text-sm text-gray-500 mb-2">Article by</p>
                <p className="font-bold text-gray-900 text-lg">Redapt Marketing</p>
              </div>
              <div className="flex gap-3">
                <button className="px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg font-semibold text-gray-700 transition-colors">
                  Share Article
                </button>
                <button className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold transition-colors">
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

export default Card1