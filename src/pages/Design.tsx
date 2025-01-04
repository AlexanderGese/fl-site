import React from 'react';

const designs = [
  {
    id: 1,
    title: "Minimalist Living",
    description: "Clean lines and purposeful spaces",
    image: "https://images.unsplash.com/photo-1600210492493-0946911123ea"
  },
  {
    id: 2,
    title: "Urban Luxury",
    description: "Sophisticated city living at its finest",
    image: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87"
  },
];

export default function Design() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-light mb-12">Design Gallery</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {designs.map((design) => (
          <div key={design.id} className="space-y-4">
            <img
              src={design.image}
              alt={design.title}
              className="w-full h-[400px] object-cover"
            />
            <h3 className="text-xl font-light">{design.title}</h3>
            <p className="text-neutral-600">{design.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}