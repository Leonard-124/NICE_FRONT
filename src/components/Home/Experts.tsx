

// import React, { useState } from 'react'
// import learnin from "./../../assets/images/learn.jpg"

// interface Appointprop {
//   email: string;
//   name: string;
//   phone?: number | string;
//   service: 'website' | 'app' | 'agent';
//   others: string;
// }

// const Experts: React.FC = () => {
//   const [appointment, setAppointment] = useState<Appointprop>({
//     email: "",
//     name: "",
//     phone: "",
//     service: "website",
//     others: ""
//   })
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const [errors, setErrors] = useState<Partial<Record<keyof Appointprop, string>>>({})

//   // Validation function
//   const validateForm = (): boolean => {
//     const newErrors: Partial<Record<keyof Appointprop, string>> = {}
    
//     if (!appointment.email.trim()) {
//       newErrors.email = 'Email is required'
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(appointment.email)) {
//       newErrors.email = 'Please enter a valid email'
//     }
    
//     if (!appointment.name.trim()) {
//       newErrors.name = 'Name is required'
//     } else if (appointment.name.trim().length < 2) {
//       newErrors.name = 'Name must be at least 2 characters'
//     }
    
//     if (appointment.phone && !/^[\d\s\-\+\(\)]+$/.test(appointment.phone.toString())) {
//       newErrors.phone = 'Please enter a valid phone number'
//     }
    
//     setErrors(newErrors)
//     return Object.keys(newErrors).length === 0
//   }

//   const sendAppointment = async () => {
//     if (!validateForm()) {
//       return
//     }

//     setIsSubmitting(true)
    
//     try {
//       // Send email using Resend API
//       const response = await fetch('/api/resend/emails', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${import.meta.env.VITE_API_RESEND}`
//         },
//         body: JSON.stringify({
//           from: 'leonard@ibonnis.com',
//           to: 'loluoch710@gmail.com',
//           subject: `New Appointment Request - ${appointment.service}`,
//           html: `
//             <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
//               <div style="background: linear-gradient(135deg, #2563eb 0%, #4f46e5 100%); padding: 30px; border-radius: 10px 10px 0 0;">
//                 <h1 style="color: white; margin: 0; font-size: 24px;">New Appointment Request</h1>
//               </div>
              
//               <div style="background-color: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
//                 <h2 style="color: #1f2937; margin-top: 0;">Client Information</h2>
                
//                 <div style="margin: 20px 0;">
//                   <p style="margin: 10px 0; color: #4b5563;">
//                     <strong style="color: #1f2937;">Name:</strong> ${appointment.name}
//                   </p>
//                   <p style="margin: 10px 0; color: #4b5563;">
//                     <strong style="color: #1f2937;">Email:</strong> ${appointment.email}
//                   </p>
//                   ${appointment.phone ? `
//                     <p style="margin: 10px 0; color: #4b5563;">
//                       <strong style="color: #1f2937;">Phone:</strong> ${appointment.phone}
//                     </p>
//                   ` : ''}
//                   <p style="margin: 10px 0; color: #4b5563;">
//                     <strong style="color: #1f2937;">Service Type:</strong> 
//                     <span style="display: inline-block; background-color: #dbeafe; color: #1e40af; padding: 4px 12px; border-radius: 4px; margin-left: 8px;">
//                       ${appointment.service === 'website' ? 'Website Development' : 
//                         appointment.service === 'app' ? 'Mobile App Development' : 
//                         'AI Agent Development'}
//                     </span>
//                   </p>
//                 </div>
                
//                 ${appointment.others ? `
//                   <div style="margin: 20px 0;">
//                     <h3 style="color: #1f2937; margin-bottom: 10px;">Project Details</h3>
//                     <div style="background-color: #f3f4f6; padding: 15px; border-radius: 6px; border-left: 4px solid #2563eb;">
//                       <p style="margin: 0; color: #4b5563; white-space: pre-wrap;">${appointment.others}</p>
//                     </div>
//                   </div>
//                 ` : ''}
                
//                 <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
//                   <p style="color: #6b7280; font-size: 12px; margin: 0;">
//                     This appointment request was submitted on ${new Date().toLocaleString('en-US', { 
//                       dateStyle: 'full', 
//                       timeStyle: 'short' 
//                     })}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           `
//         })
//       })

//       if (!response.ok) {
//         const errorData = await response.json()
//         throw new Error(errorData.message || 'Failed to send email')
//       }

//       // Success - clear form and show message
//       alert('✅ Appointment submitted successfully! We\'ll get back to you soon.')
//       setAppointment({
//         email: "",
//         name: "",
//         phone: "",
//         service: "website",
//         others: ""
//       })
//       setErrors({})
      
//     } catch (error) {
//       console.error('Error:', error)
//       alert('❌ Failed to submit appointment. Please try again or contact us directly at loluoch710@gmail.com')
//     } finally {
//       setIsSubmitting(false)
//     }
//   }

//   const handleInputChange = (field: keyof Appointprop, value: string) => {
//     setAppointment({ ...appointment, [field]: value })
//     // Clear error when user starts typing
//     if (errors[field]) {
//       setErrors({ ...errors, [field]: undefined })
//     }
//   }

//   return (
//     <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-indigo-100">
//       <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        
//         {/* Main container with responsive grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
          
//           {/* Left side - Form */}
//           <div className="w-full">
//             <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              
//               {/* Header */}
//               <div className="bg-linear-to-r from-slate-800 to-slate-700 px-6 sm:px-8 py-6 sm:py-8">
//                 <h2 className="text-2xl sm:text-3xl font-bold text-white text-center leading-tight">
//                   Submit Your Request 
//                   <span className='text-red-500 inline-block ml-2 animate-pulse'>Now</span>
//                 </h2>
//                 <p className="text-slate-200 text-center mt-2 sm:mt-3 text-sm sm:text-base">
//                   Let's discuss your project and build together
//                 </p>
//               </div>

//               {/* Form content */}
//               <div className="px-6 sm:px-8 py-8 sm:py-10 space-y-5 sm:space-y-6">
                
//                 {/* Email Field */}
//                 <div>
//                   <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
//                     Company Email <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     id="email"
//                     type="email"
//                     placeholder="your@company.com"
//                     value={appointment.email}
//                     onChange={(e) => handleInputChange('email', e.target.value)}
//                     className={`w-full px-4 py-3 sm:py-3.5 rounded-lg border-2 transition-all duration-200 outline-none text-sm sm:text-base ${
//                       errors.email 
//                         ? 'border-red-500 focus:ring-2 focus:ring-red-200' 
//                         : 'border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200'
//                     }`}
//                     required
//                   />
//                   {errors.email && (
//                     <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
//                       <span>⚠</span> {errors.email}
//                     </p>
//                   )}
//                 </div>

//                 {/* Name Field */}
//                 <div>
//                   <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
//                     Your Name <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     id="name"
//                     type="text"
//                     placeholder="John Doe"
//                     value={appointment.name}
//                     onChange={(e) => handleInputChange('name', e.target.value)}
//                     className={`w-full px-4 py-3 sm:py-3.5 rounded-lg border-2 transition-all duration-200 outline-none text-sm sm:text-base ${
//                       errors.name 
//                         ? 'border-red-500 focus:ring-2 focus:ring-red-200' 
//                         : 'border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200'
//                     }`}
//                     required
//                   />
//                   {errors.name && (
//                     <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
//                       <span>⚠</span> {errors.name}
//                     </p>
//                   )}
//                 </div>

//                 {/* Phone Field */}
//                 <div>
//                   <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
//                     Phone Number <span className="text-gray-400 text-xs">(Optional)</span>
//                   </label>
//                   <input
//                     id="phone"
//                     type="tel"
//                     placeholder="+1 (555) 123-4567"
//                     value={appointment.phone}
//                     onChange={(e) => handleInputChange('phone', e.target.value)}
//                     className={`w-full px-4 py-3 sm:py-3.5 rounded-lg border-2 transition-all duration-200 outline-none text-sm sm:text-base ${
//                       errors.phone 
//                         ? 'border-red-500 focus:ring-2 focus:ring-red-200' 
//                         : 'border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200'
//                     }`}
//                   />
//                   {errors.phone && (
//                     <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
//                       <span>⚠</span> {errors.phone}
//                     </p>
//                   )}
//                 </div>

//                 {/* Service Type */}
//                 <div>
//                   <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
//                     Service Type <span className="text-red-500">*</span>
//                   </label>
//                   <select
//                     id="service"
//                     value={appointment.service}
//                     onChange={(e) => setAppointment({ ...appointment, service: e.target.value as 'website' | 'app' | 'agent' })}
//                     className="w-full px-4 py-3 sm:py-3.5 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-200 bg-white text-sm sm:text-base font-medium"
//                   >
//                     <option value="website">Website Development</option>
//                     <option value="app">Mobile App Development</option>
//                     <option value="agent">AI Agent Development</option>
//                   </select>
//                 </div>

//                 {/* Additional Details */}
//                 <div>
//                   <label htmlFor="others" className="block text-sm font-semibold text-gray-700 mb-2">
//                     Project Details <span className="text-gray-400 text-xs">(Optional)</span>
//                   </label>
//                   <textarea
//                     id="others"
//                     placeholder="Tell us about your project requirements, budget, timeline, and any special considerations..."
//                     value={appointment.others}
//                     onChange={(e) => handleInputChange('others', e.target.value)}
//                     rows={4}
//                     className="w-full px-4 py-3 sm:py-3.5 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-200 resize-none text-sm sm:text-base"
//                   />
//                 </div>

//                 {/* Submit Button */}
//                 <button
//                   onClick={sendAppointment}
//                   disabled={isSubmitting}
//                   className="w-full bg-linear-to-r from-slate-800 to-slate-700 text-white font-bold py-3 sm:py-4 px-6 rounded-lg hover:from-slate-900 hover:to-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl text-sm sm:text-base"
//                 >
//                   {isSubmitting ? (
//                     <span className="flex items-center justify-center gap-2">
//                       <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                         <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                         <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                       </svg>
//                       <span>Submitting...</span>
//                     </span>
//                   ) : (
//                     '📧 Submit Appointment'
//                   )}
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Right side - Image and Info */}
//           <div className="w-full hidden lg:flex flex-col gap-6">
//             {/* Image Container */}
//             <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-80 lg:h-96">
//               <img 
//                 src={learnin} 
//                 alt="Technology learning and implementation" 
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent"></div>
//             </div>

//             {/* Info Card */}
//             <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border-l-4 border-blue-500">
//               <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
//                 <span className="text-2xl">💡</span> Our Focus
//               </h3>
//               <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
//                 We are focused on discussing how technology can be implemented and used efficiently. Our team ensures that every solution is tailored to your specific needs, maximizing both performance and value.
//               </p>
              
//               {/* Benefits list */}
//               <div className="mt-6 space-y-3">
//                 <div className="flex items-start gap-3">
//                   <span className="text-blue-500 font-bold mt-1">✓</span>
//                   <p className="text-gray-700 text-sm sm:text-base">Expert consultation on technology implementation</p>
//                 </div>
//                 <div className="flex items-start gap-3">
//                   <span className="text-blue-500 font-bold mt-1">✓</span>
//                   <p className="text-gray-700 text-sm sm:text-base">Custom solutions for your unique requirements</p>
//                 </div>
//                 <div className="flex items-start gap-3">
//                   <span className="text-blue-500 font-bold mt-1">✓</span>
//                   <p className="text-gray-700 text-sm sm:text-base">Efficient delivery and ongoing support</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Mobile-only info section */}
//         <div className="lg:hidden mt-8 sm:mt-12 bg-white rounded-2xl shadow-lg p-6 sm:p-8 border-l-4 border-blue-500">
//           <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
//             <span className="text-2xl">💡</span> Our Focus
//           </h3>
//           <p className="text-gray-700 leading-relaxed mb-6">
//             We are focused on discussing how technology can be implemented and used efficiently. Our team ensures that every solution is tailored to your specific needs, maximizing both performance and value.
//           </p>
          
//           <div className="space-y-3">
//             <div className="flex items-start gap-3">
//               <span className="text-blue-500 font-bold mt-1">✓</span>
//               <p className="text-gray-700">Expert consultation on technology implementation</p>
//             </div>
//             <div className="flex items-start gap-3">
//               <span className="text-blue-500 font-bold mt-1">✓</span>
//               <p className="text-gray-700">Custom solutions for your unique requirements</p>
//             </div>
//             <div className="flex items-start gap-3">
//               <span className="text-blue-500 font-bold mt-1">✓</span>
//               <p className="text-gray-700">Efficient delivery and ongoing support</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Experts

////////////////////////////////////////////////////////////

import React, { useState } from 'react'
import learnin from "./../../assets/images/learn.jpg"

interface Appointprop {
  email: string;
  name: string;
  phone?: number | string;
  service: 'website' | 'app' | 'agent';
  others: string;
}

const Experts: React.FC = () => {
  const [appointment, setAppointment] = useState<Appointprop>({
    email: "",
    name: "",
    phone: "",
    service: "website",
    others: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<Partial<Record<keyof Appointprop, string>>>({})
  const [successMessage, setSuccessMessage] = useState("")

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof Appointprop, string>> = {}
    
    if (!appointment.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(appointment.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    
    if (!appointment.name.trim()) {
      newErrors.name = 'Name is required'
    } else if (appointment.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
    }
    
    if (appointment.phone && !/^[\d\s\-\+\(\)]+$/.test(appointment.phone.toString())) {
      newErrors.phone = 'Please enter a valid phone number'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const sendAppointment = async () => {
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSuccessMessage("")
    
    try {
      // Determine the correct API endpoint based on environment
      //const apiUrl = import.meta.env.VITE_FRONTEND_URL || import.meta.env.VITE_API_BASE_URL || window.location.origin
      const apiUrl = import.meta.env.VITE_FRONTEND_URL || window.location.origin
      const endpoint = `${apiUrl}/api/resend/emails`
      
      const resendKey = import.meta.env.VITE_API_RESEND
      
      // Log for debugging (remove in production)
      console.log('Sending appointment request to:', endpoint)
      console.log('Resend API Key available:', !!resendKey)

      if (!resendKey) {
        throw new Error('Resend API key is not configured. Please check your environment variables.')
      }

      const payload = {
        from: 'leonard@ibonnis.com',
        to: 'loluoch710@gmail.com',
        subject: `New Appointment Request - ${appointment.service}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
            <div style="background: linear-gradient(135deg, #2563eb 0%, #4f46e5 100%); padding: 30px; border-radius: 10px 10px 0 0;">
              <h1 style="color: white; margin: 0; font-size: 24px;">New Appointment Request</h1>
            </div>
            
            <div style="background-color: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
              <h2 style="color: #1f2937; margin-top: 0;">Client Information</h2>
              
              <div style="margin: 20px 0;">
                <p style="margin: 10px 0; color: #4b5563;">
                  <strong style="color: #1f2937;">Name:</strong> ${appointment.name}
                </p>
                <p style="margin: 10px 0; color: #4b5563;">
                  <strong style="color: #1f2937;">Email:</strong> ${appointment.email}
                </p>
                ${appointment.phone ? `
                  <p style="margin: 10px 0; color: #4b5563;">
                    <strong style="color: #1f2937;">Phone:</strong> ${appointment.phone}
                  </p>
                ` : ''}
                <p style="margin: 10px 0; color: #4b5563;">
                  <strong style="color: #1f2937;">Service Type:</strong> 
                  <span style="display: inline-block; background-color: #dbeafe; color: #1e40af; padding: 4px 12px; border-radius: 4px; margin-left: 8px;">
                    ${appointment.service === 'website' ? 'Website Development' : 
                      appointment.service === 'app' ? 'Mobile App Development' : 
                      'AI Agent Development'}
                  </span>
                </p>
              </div>
              
              ${appointment.others ? `
                <div style="margin: 20px 0;">
                  <h3 style="color: #1f2937; margin-bottom: 10px;">Project Details</h3>
                  <div style="background-color: #f3f4f6; padding: 15px; border-radius: 6px; border-left: 4px solid #2563eb;">
                    <p style="margin: 0; color: #4b5563; white-space: pre-wrap;">${appointment.others}</p>
                  </div>
                </div>
              ` : ''}
              
              <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
                <p style="color: #6b7280; font-size: 12px; margin: 0;">
                  This appointment request was submitted on ${new Date().toLocaleString('en-US', { 
                    dateStyle: 'full', 
                    timeStyle: 'short' 
                  })}
                </p>
              </div>
            </div>
          </div>
        `
      }

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${resendKey}`
        },
        body: JSON.stringify(payload)
      })

      // Log response status
      console.log('Response status:', response.status)

      if (!response.ok) {
        let errorData
        try {
          errorData = await response.json()
        } catch {
          errorData = { message: `HTTP ${response.status}: ${response.statusText}` }
        }
        
        console.error('API Error:', errorData)
        throw new Error(errorData.message || errorData.error || `Failed to send email (${response.status})`)
      }

      const result = await response.json()
      console.log('Success response:', result)

      setSuccessMessage('✅ Appointment submitted successfully! We\'ll get back to you soon.')
      setAppointment({
        email: "",
        name: "",
        phone: "",
        service: "website",
        others: ""
      })
      setErrors({})
      
      // Auto-clear success message after 5 seconds
      setTimeout(() => setSuccessMessage(""), 5000)
      
    } catch (error: any) {
      console.error('Form submission error:', error)
      const errorMsg = error?.message || 'Failed to submit appointment. Please try again or contact us directly.'
      setErrors({ ...errors, email: errorMsg })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: keyof Appointprop, value: string) => {
    setAppointment({ ...appointment, [field]: value })
    if (errors[field]) {
      setErrors({ ...errors, [field]: undefined })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
          
          {/* Left side - Form */}
          <div className="w-full">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              
              {/* Header */}
              <div className="bg-gradient-to-r from-slate-800 to-slate-700 px-6 sm:px-8 py-6 sm:py-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-white text-center leading-tight">
                  Submit Your Request 
                  <span className='text-red-500 inline-block ml-2 animate-pulse'>Now</span>
                </h2>
                <p className="text-slate-200 text-center mt-2 sm:mt-3 text-sm sm:text-base">
                  Let's discuss your project and build together
                </p>
              </div>

              {/* Form content */}
              <div className="px-6 sm:px-8 py-8 sm:py-10 space-y-5 sm:space-y-6">
                
                {/* Success Message */}
                {successMessage && (
                  <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-lg text-sm">
                    {successMessage}
                  </div>
                )}

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Company Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="your@company.com"
                    value={appointment.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className={`w-full px-4 py-3 sm:py-3.5 rounded-lg border-2 transition-all duration-200 outline-none text-sm sm:text-base ${
                      errors.email 
                        ? 'border-red-500 focus:ring-2 focus:ring-red-200' 
                        : 'border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200'
                    }`}
                    required
                  />
                  {errors.email && (
                    <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                      <span>⚠</span> {errors.email}
                    </p>
                  )}
                </div>

                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    value={appointment.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className={`w-full px-4 py-3 sm:py-3.5 rounded-lg border-2 transition-all duration-200 outline-none text-sm sm:text-base ${
                      errors.name 
                        ? 'border-red-500 focus:ring-2 focus:ring-red-200' 
                        : 'border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200'
                    }`}
                    required
                  />
                  {errors.name && (
                    <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                      <span>⚠</span> {errors.name}
                    </p>
                  )}
                </div>

                {/* Phone Field */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number <span className="text-gray-400 text-xs">(Optional)</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    value={appointment.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className={`w-full px-4 py-3 sm:py-3.5 rounded-lg border-2 transition-all duration-200 outline-none text-sm sm:text-base ${
                      errors.phone 
                        ? 'border-red-500 focus:ring-2 focus:ring-red-200' 
                        : 'border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200'
                    }`}
                  />
                  {errors.phone && (
                    <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                      <span>⚠</span> {errors.phone}
                    </p>
                  )}
                </div>

                {/* Service Type */}
                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                    Service Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="service"
                    value={appointment.service}
                    onChange={(e) => setAppointment({ ...appointment, service: e.target.value as 'website' | 'app' | 'agent' })}
                    className="w-full px-4 py-3 sm:py-3.5 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-200 bg-white text-sm sm:text-base font-medium"
                  >
                    <option value="website">Website Development</option>
                    <option value="app">Mobile App Development</option>
                    <option value="agent">AI Agent Development</option>
                  </select>
                </div>

                {/* Additional Details */}
                <div>
                  <label htmlFor="others" className="block text-sm font-semibold text-gray-700 mb-2">
                    Project Details <span className="text-gray-400 text-xs">(Optional)</span>
                  </label>
                  <textarea
                    id="others"
                    placeholder="Tell us about your project requirements, budget, timeline, and any special considerations..."
                    value={appointment.others}
                    onChange={(e) => handleInputChange('others', e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 sm:py-3.5 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-200 resize-none text-sm sm:text-base"
                  />
                </div>

                {/* Submit Button */}
                <button
                  onClick={sendAppointment}
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-slate-800 to-slate-700 text-white font-bold py-3 sm:py-4 px-6 rounded-lg hover:from-slate-900 hover:to-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl text-sm sm:text-base"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Submitting...</span>
                    </span>
                  ) : (
                    '📧 Submit Appointment'
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Right side - Image and Info */}
          <div className="w-full hidden lg:flex flex-col gap-6">
            {/* Image Container */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-80 lg:h-96">
              <img 
                src={learnin} 
                alt="Technology learning and implementation" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>

            {/* Info Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border-l-4 border-blue-500">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <span className="text-2xl">💡</span> Our Focus
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                We are focused on discussing how technology can be implemented and used efficiently. Our team ensures that every solution is tailored to your specific needs, maximizing both performance and value.
              </p>
              
              {/* Benefits list */}
              <div className="mt-6 space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-blue-500 font-bold mt-1">✓</span>
                  <p className="text-gray-700 text-sm sm:text-base">Expert consultation on technology implementation</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-500 font-bold mt-1">✓</span>
                  <p className="text-gray-700 text-sm sm:text-base">Custom solutions for your unique requirements</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-500 font-bold mt-1">✓</span>
                  <p className="text-gray-700 text-sm sm:text-base">Efficient delivery and ongoing support</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile-only info section */}
        <div className="lg:hidden mt-8 sm:mt-12 bg-white rounded-2xl shadow-lg p-6 sm:p-8 border-l-4 border-blue-500">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span className="text-2xl">💡</span> Our Focus
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            We are focused on discussing how technology can be implemented and used efficiently. Our team ensures that every solution is tailored to your specific needs, maximizing both performance and value.
          </p>
          
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-blue-500 font-bold mt-1">✓</span>
              <p className="text-gray-700">Expert consultation on technology implementation</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-blue-500 font-bold mt-1">✓</span>
              <p className="text-gray-700">Custom solutions for your unique requirements</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-blue-500 font-bold mt-1">✓</span>
              <p className="text-gray-700">Efficient delivery and ongoing support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experts