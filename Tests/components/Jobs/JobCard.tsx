import Header from "../../components/Home/Header"
import Footer from '../../components/Home/Footer'
import { useState, useEffect, useCallback, useMemo, useRef } from "react"


// const job_data = [
//   {
//     title:"Frontend Developer",
//     id: 1,
//     link: "/apply",
//     description: "Frontend developer needed"
//   },
//   {
//     title:"Frontend Developer",
//     id: 2,
//     link: "/apply",
//     description: "Frontend developer needed"
//   },
//   {
//     title:"Backend",
//     id: 3,
//     link: "/apply",
//     description: "Frontend developer needed"
//   }
// ]


const BASE_URL = "http://localhost:3000/api/v1"

interface Data {
  _id: string;  // MongoDB typically returns _id
  id?: string;
  title: string;
  description: string;
  link?: string;  // Added based on your JSX
  available: string;
  contractType: string;  // Fixed typo
  salary: string;
  period: string;
}

const JobCard = () => {
  const [data, setData] = useState<Data[]>([])  // ✅ Fixed type
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string>("")  // ✅ lowercase string

  useEffect(() => { 
    fetchJobs()  // ✅ Actually call the function
  }, [])

  const fetchJobs = async () => {
    try {
      setLoading(true)
      setError("")
      const res = await fetch(`${BASE_URL}/get`)
      if (!res.ok) throw new Error(`HTTP error ${res.status}`)
      const result = await res.json()
      setData(result)
    } catch (err) {
      setError("Failed to get jobs")
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Header />
      <div className='min-h-screen'>
        <div className="flex justify-between w-full h-full">
          <div className="fixed h-[700px] w-[300px] bg-[rgb(150,150,147)] shadow-md overflow-auto">
            <div className="flex flex-col gap-3.5 mt-2">
              <p className="hover:bg-[#424142]"><a href="#">Current Jobs</a></p>
              <p className="hover:bg-[#424142]"><a href="#">Contribute</a></p>
              <p className="hover:bg-[#424142]"><a href="#">Saved</a></p>
            </div>
          </div>
          <div className="w-full bg-gray-100 mt-20">
            <div className="text-center">
              <h1>Current available roles at Ibonnis</h1>
              
              {/* ✅ Show loading state */}
              {loading && <p className="text-gray-500">Loading jobs...</p>}
              
              {/* ✅ Show error state */}
              {error && <p className="text-red-500">{error}</p>}
              
              <div className="flex justify-between flex-wrap gap-4">
                {data.map((item) => (
                  <div 
                    key={item._id || item.id} 
                    className="flex flex-col bg-[#cfcdcd] w-[300px] h-[400px] p-4 rounded shadow"
                  >
                    <h2 className="font-bold">{item.title}</h2>
                    {item.link && <a href={item.link} className="text-blue-600 underline">View Job</a>}
                    <p className="text-sm flex-1">{item.description}</p>
                    <div className="text-xs text-gray-700 mt-auto">
                      <p><strong>Salary:</strong> {item.salary}</p>
                      <p><strong>Period:</strong> {item.period}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default JobCard