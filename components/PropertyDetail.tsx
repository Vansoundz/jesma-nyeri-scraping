/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";

export interface PropertyDetailProps {
  title: string;
  rent: string;
  images: string[];
  features: string[];
}

export default function PropertyDetail({
  property,
}: {
  property: PropertyDetailProps;
}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { title, rent, images, features } = property;

  return (
    <div className="max-w-4xl mx-auto p-4  flex flex-col md:flex-row">
      {/* Image and Navigation */}
      <div className="flex-shrink-0 md:w-1/2">
        <img
          src={images[currentImageIndex]}
          alt={`Property Image ${currentImageIndex + 1}`}
          className="w-full h-80 object-contain rounded-lg"
        />
        <div className="flex mt-2 gap-2 flex-wrap">
          {images?.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Property Image ${index + 1}`}
              className="w-12 h-12 object-cover rounded-md cursor-pointer shadow-sm"
              onClick={() => setCurrentImageIndex(index)}
            />
          ))}
        </div>
      </div>

      {/* Property Details */}
      <div className="mt-4 md:mt-0 md:ml-6 md:w-1/2">
        <h2 className="text-xl font-bold text-amber-900">{title}</h2>
        <p className="text-lg text-gray-700">{rent}</p>
        <div className="mt-4">
          <h3 className="text-xl font-semibold">Features</h3>
          <ul className="list-disc list-inside">
            {features.map((feature, index) => (
              <li key={index} className="text-gray-600">
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
