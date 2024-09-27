
// import React from 'react';
import './testimonials.modular.css'; 

const TestimonialGrid = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Gladis Lennon',
      position: 'Head of SEO',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet, molestiae aliquam incidunt suscipit recusandae labore ratione doloremque, architecto et illo minus quo tenetur ducimus, voluptatibus repellendus fuga aperiam vel ab! Ipsam corrupti blanditiis dolorum! Officia assumenda rem nam, eveniet enim ad inventore laudantium est illum voluptatem quis.',
    },
    {
      id: 2,
      name: 'Gladis Lennon',
      position: 'Head of SEO',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio beatae incidunt perferendis soluta facilis voluptas dicta repudiandae quasi asperiores libero, exercitationem molestiae autem sapiente dolore nulla non consequatur. Eaque, dolores.',
    },
    {
      id: 3,
      name: 'Gladis Lennon',
      position: 'Head of SEO',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi a voluptatum quidem nulla quisquam natus velit provident earum esse, odio numquam labore recusandae similique sunt.',
    },
    {
      id: 4,
      name: 'Gladis Lennon',
      position: 'Head of SEO',
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore vel quo deserunt quos expedita minima incidunt sed tempora, a architecto consectetur reprehenderit, in repellat voluptatum.',
    },
    {
      id: 5,
      name: 'Gladis Lennon',
      position: 'Head of SEO',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloribus eius aut unde, dolores accusantium!',
    },
    {
      id: 6,
      name: 'Gladis Lennon',
      position: 'Head of SEO',
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius ut necessitatibus, repudiandae qui dolor minima.',
    },
  ];

  return (
    <div className="testimonial-grid">
      {testimonials.map((testimonial) => (
        <div className="testimonial-card" key={testimonial.id}>
          <p>{testimonial.text}</p>
          <div className="testimonial-footer">
            <img
              src="https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80" // Placeholder for user image
              alt={testimonial.name}
              className="testimonial-image"
            />
            <div className="testimonial-info">
              <strong>{testimonial.name}</strong>
              <p>{testimonial.position}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TestimonialGrid;