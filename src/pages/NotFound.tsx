
import React from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-lg">
        <h1 className="text-orange text-8xl font-bold mb-4">404</h1>
        <h2 className="text-3xl font-bold text-navy mb-6">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <a
          href="/"
          className="inline-flex items-center bg-navy text-white px-6 py-3 rounded-full font-medium hover:bg-navy/90 transition-colors"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Homepage
        </a>
      </div>
      <div className="absolute bottom-10 text-center">
        <p className="text-gray-500">
          © {new Date().getFullYear()} <span className="text-orange">Rox</span>Dev. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
