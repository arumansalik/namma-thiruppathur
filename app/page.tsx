"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

// Sample video data
const videos = [
  {
    id: 1,
    title: "Silendra Thiruppathur",
    url: "/videos/video1.mp4",
  },
  {
    id: 2,
    title: "Kalungupatti",
    url: "/videos/video20.mp4",
  },
  {
    id: 3,
    title: "Thiruppathur Rainy Day",
    url: "/videos/video17.mp4",
  },
  {
    id: 4,
    title: "Semozhi Park",
    url: "/videos/video9.mp4",
  },
  {
    id: 5,
    title: "Last Day In TPR",
    url: "/videos/video2.mp4",
  },
  {
    id: 6,
    title: "Karaiyur Rekla ",
    url: "/videos/video3.mp4",
  },
  {
    id: 7,
    title: "A.G Churuch",
    url: "/videos/video8.mp4",
  },
  {
    id: 8,
    title: "TPR Drone View",
    url: "/videos/video16.mp4",
  },
  {
    id: 9,
    title: "In 2050?",
    url: "/videos/video5.mp4",
  },
  {
    id: 10,
    title: "Kavingar Kannadasan",
    url: "/videos/video4.mp4",
  },
  {
    id: 11,
    title: "KundraKudi",
    url: "/videos/video15.mp4",
  },
  {
    id: 12,
    title: "Thirumayam Church",
    url: "/videos/video6.mp4",
  },
  {
    id: 13,
    title: "Manjal Veyil",
    url: "/videos/video10.mp4",
  },
  {
    id: 14,
    title: "Silampatti",
    url: "/videos/video13.mp4",
  },
  {
    id: 15,
    title: "Vairavan Kovil",
    url: "/videos/video14.mp4",
  },
  {
    id: 16,
    title: "Ayyapan Kovil",
    url: "/videos/video7.mp4",
  },
  {
    id: 17,
    title: "Kalungupatti",
    url: "/videos/video12.mp4",
  },
  {
    id: 18,
    title: "TPR old Busstand",
    url: "/videos/video18.mp4",
  },
  {
    id: 19,
    title: "Seedevi Pond",
    url: "/videos/video11.mp4",
  },
  {
    id: 20,
    title: "N.Pudur Birds",
    url: "/videos/video19.mp4",
  },
];

export default function Home() {
  const [previewVideo, setPreviewVideo] = useState<string | null>(null);

  const [showHeader, setShowHeader] = useState(false);

  // Handle scroll event
  const handleScroll = () => {
    if (window.scrollY > 500) {
      setShowHeader(true);
    } else {
      setShowHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handlePreview = (videoUrl: string) => {
    setPreviewVideo(videoUrl);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-gray-100">
      {/* Hero Section */}
      <section className="relative w-full h-screen overflow-hidden">
        {/* Video Background */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay (Optional) */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>

        {/* Centered Content */}
        <div className="relative z-10 flex items-center justify-center w-full h-full text-center text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-extrabold mb-6 font-poppins">
              Welcome to Namma Thiruppathur
            </h1>
            <p className="text-sm font-medium font-poppins">
              Explore videos and reels about our native place.
            </p>
          </div>
        </div>
      </section>

      {/* Header Section - Visible only after scroll */}
      <header
        className={`bg-white sticky top-0 z-50 shadow-md transition-all duration-300 ${
          showHeader ? "opacity-100" : "opacity-0"
        } `}
      >
        <div className="container mx-auto flex justify-between items-center py-4 px-4 sm:px-6">
          <div className="flex items-center space-x-4">
            <Image
              src="/logo.png"
              alt="Logo"
              width={60}
              height={100}
              
            />
            <h1 className="text-lg sm:text-2xl font-extrabold text-gray-800">
              Namma Thiruppathur
            </h1>
          </div>
          <p className="hidden sm:block text-gray-600 text-sm">
            Explore reels & videos about our native place!
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-6 px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
          Explore Our Videos
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <div
              key={video.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transform transition duration-300"
            >
              <div className="relative group">
                <video
                  src={video.url}
                  className="w-full h-56 sm:h-64 object-cover"
                  onClick={() => handlePreview(video.url)}
                  muted
                ></video>
                <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                  <p className="text-white font-semibold text-lg">
                    {video.title}
                  </p>
                </div>
              </div>

              <div className="p-4 flex justify-between">
                <a
                  href={video.url}
                  download
                  className="inline-block px-4 py-2 bg-blue-500 text-white text-sm rounded-md hover:bg-blue-600 transition duration-300"
                >
                  Download
                </a>
                <button
                  className="inline-block px-4 py-2 bg-green-500 text-white text-sm rounded-md hover:bg-green-600 transition duration-300"
                  onClick={() => handlePreview(video.url)}
                >
                  Preview
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {previewVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg relative">
            <button
              className="absolute top-2 right-2 text-gray-600 text-xl"
              onClick={() => setPreviewVideo(null)}
            >
              ×
            </button>
            <video
              src={previewVideo}
              autoPlay
              className="w-full h-100 sm:h-96 object-cover rounded-lg shadow-lg"
            ></video>
          </div>
        </div>
      )}

      <footer className="bg-gray-800 text-gray-300 py-6">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            &copy; 2025 Namma Thiruppathur. Follow us on{" "}
            <a
              href="https://www.instagram.com/namma_thiruppathur/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Instagram
            </a>
            !
          </p>
        </div>
      </footer>
    </div>
  );
}
