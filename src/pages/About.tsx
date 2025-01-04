import React from 'react';

export default function About() {
  return (
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-10xl mx-auto">
          <div className="grid md:grid-cols-1 gap-12 items-center">
            <div>
              <img
                  src="https://i.imgur.com/l3AeAo1.png"
                  alt="Florence Maya Gonot"
                  className="w-full h-[800px] object-cover mb-12"
              />
            </div>
            <div>
              <h1 className="font-display text-4xl text-gold mb-6">Florence Maya Gonot</h1>
              <p className="font-caption text-xl text-beige mb-4">Interior Architect and Designer</p>
              <div className="space-y-4 text-offwhite font-body">
                <p>
                  Born and raised in Paris in a family of architects spanning three generations, embodies a heritage of architectural excellence deeply rooted in French heritage. Immersed from an early age in the grandeur of both classical and contemporary architecture, she has developed a deep appreciation of spaces that reflect the art of living and the soul of their inhabitants. This rich experience fuels her ambition to create noble and inspiring environments.
                </p>
                <p>
                  Florence's passion for art, culture and theatre infuses her work with vibrant creativity. Her extensive travels to cities and nature serve as a source of inspiration, nourishing her senses and informing her unique perspective on design. Each project she undertakes is a bespoke creation, meticulously crafted to reflect the personality and culture of her clients. She skilfully responds to the ergonomic, architectural and identity needs of the individual and the space, ensuring a harmonious union between them.
                </p>
                <p>
                  Florence's philosophy compares a building to a human body, which has an envelope, a structure, a volume and internal mechanisms. She strives to integrate these elements perfectly, believing that this balance makes it possible to create spaces that radiate harmony and promote happiness. She also believes that it is necessary to integrate the presence of nature and natural light, the source of life, which is why she and her team often extend their study to include the treatment of external landscapes, offering new perspectives from inside the premises.
                </p>
                <p>
                  In her 25-year career, Florence has founded and directed interior architecture and design studios in France, China and now Dubai. Her portfolio ranges from the renovation of prestigious properties to the transformation of office buildings. This international experience equips her with a global perspective and the ability to blend classical elegance with modern functionality.
                </p>
                <p>
                  FMG French Interior Design Studio offers end-to-end transformation projects that encompass the design of interior spaces, but we are also aware of the role of nature in our personal environment, so we design outdoor spaces.
                </p>
                <p>
                  We design walls and ceilings, as well as bespoke furniture and lighting. Working with the most renowned brands in Italy and France, Florence ensures that every piece of space is of exceptional quality and design.
                </p>
                <p>
                  Florence’s extensive network of master craftsmen allows her to source and commission bespoke pieces that add unparalleled uniqueness to her projects. From designing custom furniture and lighting to procuring the most exquisite marble work from Italy, unique fabrics and master locksmith works from France, chandeliers from Bohemia, master art carpets from Turkey, or artistic glass panels from famed glass factories near Venice, Florence's attention to detail is the foundation of the uniqueness and excellence of her projects. These elements are carefully selected and crafted to resonate with the client's vision, creating an environment that is both luxurious and deeply personal to the client and their culture.
                </p>
                <p>
                  With FMG French Interior Design Studio, clients embark on a journey to create a living space that is a true reflection of their aspirations, culture and lifestyle. They can expect a transformative experience that culminates in a space of enduring beauty and harmony—a bespoke interior that is as unique as they are.
                </p>
                <div className="pt-6">
                  <ul className="space-y-2">
                    <li>Interior Architect & Designer</li>
                    <li>Ecole Supérieure des Arts Modernes et Design de Paris</li>
                  </ul>
                </div>
                <div className="pt-6">
                  <h2 className="font-display text-2xl text-gold mb-4">Founder</h2>
                  <ul className="space-y-2">
                    <li><strong>2022</strong></li>
                    <li>ARPHODES - French Interior Design Studio - Dubai</li>
                    <li>Founder, Chief Interior Architect</li>
                    <li></li>
                    <li><strong>2008 - 2021</strong></li>
                    <li>ARPHODES STUDIO - Paris</li>
                    <li>Founder, Chief Interior Architect</li>
                    <li></li>
                    <li><strong>2011 - 2020</strong></li>
                    <li>ARPHODES ARCHITECTURE & DESIGN - Paris</li>
                    <li>Founder & Partner, Chief Interior Architect</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
