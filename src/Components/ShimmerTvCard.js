import React from "react";

export default function ShimmerTvCard() {
  return (
    <div className="animate-pulse bg-white/10 rounded-2xl overflow-hidden shadow-md">
      <div className="w-full h-64 bg-gray-700"></div>
      <div className="p-4">
        <div className="h-4 bg-gray-600 rounded w-3/4 mb-2"></div>
        <div className="h-3 bg-gray-500 rounded w-1/2"></div>
      </div>
    </div>
  );
}
