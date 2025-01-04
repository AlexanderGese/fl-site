import React from 'react';

export default function About() {
    return (
        <div className="container mx-auto px-6 py-20">
            <div className="max-w-5xl mx-auto">
                {/* Erste Zeile: Bild rechts, Text links */}
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 mb-12">
                    <div>
                        <p className="text-offwhite font-body">
                            Our interior design studio began in 2008 in Paris and relocated to Dubai in 2021, where it continues to offer bespoke design services.

                            Our company is committed to delivering large international private projects with unwavering customisation.
                            Our firm is dedicated to developing a contemporary aesthetic by combining French and Italian know-how with exceptional craftsmanship.

                            Each project is an opportunity for architectural refinement and innovation to coexist.
                            Our original approach is underpinned by artistic vision and technological skills, and is based on an in-depth understanding of each client's specific needs.

                            In keeping with the whole place, unique spaces are created in each of our projects by combining the West European way of life with the vitality of Dubai, resulting in a harmonious combination of luxury and originality.
                            We create environments that tell compelling stories, paying particular attention to materials, textures and lighting.

                            FMG Studio, led by Florence Maya Gonot, is committed to providing a personalised, modern and sustainable service.

                            The studio exudes a sense of luxury and indulgence.
                            We invite you to join us in exploring the essential features of modern interior design to create your own unique and spectacular home, business and/or hospitality space.
                        </p>
                    </div>
                    <div>
                        <img
                            src="https://i.imgur.com/IKhMeha.jpeg"
                            alt="Bild 1"
                            className="w-full h-auto object-cover"
                            style={{ aspectRatio: "1 / 1" }} // Quadratisch
                        />
                    </div>
                </div>

                {/* Zweite Zeile: Text rechts, Bild links */}
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 mb-12">
                    <div className="order-2 md:order-1">
                        <img
                            src="https://i.imgur.com/kokItcJ.jpeg"
                            alt="Bild 2"
                            className="w-full h-auto object-cover"
                            style={{ aspectRatio: "1 / 1" }} // Quadratisch
                        />
                    </div>
                    <div className="order-1 md:order-2">
                        <p className="text-offwhite text-2xl font-body">
                            THE COEXISTANCE OF STYLE AND INNOVATION
                        </p>
                    </div>
                </div>

                {/* Dritte Zeile: Bild rechts, Text links */}
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
                    <div>
                        <p className="text-offwhite text-2xl font-body">
                            WE COMBINE ARTISTIC VISION AND TECHNOLOGICAL SKILL
                        </p>
                    </div>
                    <div>
                        <img
                            src="https://i.imgur.com/jZnji8G.jpeg"
                            alt="Bild 3"
                            className="w-full h-auto object-cover"
                            style={{ aspectRatio: "1 / 1" }} // Quadratisch
                        />
                    </div>
                </div>

                {/* Vierte Zeile */}
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 mb-12">
                    <div className="order-2 md:order-1">
                        <img
                            src="https://i.imgur.com/gT1TxEk.jpeg"
                            alt="Bild 2"
                            className="w-full h-auto object-cover"
                            style={{ aspectRatio: "1 / 1" }} // Quadratisch
                        />
                    </div>
                    <div className="order-1 md:order-2">
                        <p className="text-offwhite text-2xl font-body">
                            WE CREATE UNIQUE ENVIRONMENTS THAT TELL YOUR STORY
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
