
import { useEffect, useState } from "react";

type Course = {
  _id: string;
  title: string;
  videoId: string;
  thumbnail: string;
  description?: string;
};

const CourseList = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_UR}/api/courses`);
        if (!res.ok) throw new Error("Failed to fetch courses");
        const data = await res.json();
        setCourses(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCourses();
  }, []);

  if (loading) return <p className="text-center mt-20 text-lg">Loading courses...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;

  return (
    <div className="p-6 mt-24 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center md:text-left">
        Free Courses Available
      </h1>

      {/* Responsive grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <div
            key={course._id}
            onClick={() => setSelectedVideo(course.videoId)}
            className="cursor-pointer bg-white rounded-lg shadow-md hover:shadow-xl transition transform hover:scale-105"
          >
            <img
              src={course.thumbnail}
              alt={course.title}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">{course.title}</h3>
              {course.description && (
                <p className="text-sm text-gray-600 mt-2 line-clamp-3">
                  {course.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="bg-white rounded-lg shadow-lg p-4 relative w-[90%] max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-2 right-2 text-red-600 font-bold text-xl"
            >
              ✕
            </button>
            <div className="aspect-video w-full">
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseList;
