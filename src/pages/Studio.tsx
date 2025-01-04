import React from 'react';

const studioImages = [
  {
    id: 1,
    title: "Design Process",
    description: "Our team collaborating on new concepts",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf"
  },
  {
    id: 2,
    title: "Material Selection",
    description: "Curating the perfect materials for each project",
    image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c"
  },
  // Add more images as needed
];

export default function Studio() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-light mb-12">Studio in Action</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {studioImages.map((item) => (
          <div key={item.id} className="space-y-4">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-[300px] object-cover"
            />
            <h3 className="text-xl font-light">{item.title}</h3>
            <p className="text-neutral-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}