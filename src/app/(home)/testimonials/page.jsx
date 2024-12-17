import React from "react";
import { RiDoubleQuotesR } from "react-icons/ri";


const testimonials = [
  {
    image: "/images/image1.jpg", // Replace with your image paths
    name: "Jagdeep Dhankhar",
    role: "VP",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.",
  },
  {
    image: "/images/image2.jpg",
    name: "Venu Tottempudi",
    role: "Actor",
    content: "Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla.",
  },
  {
    image: "/images/image3.jpg",
    name: "Lori Shemek",
    role: "Weightloss Expert/Author",
    content: "Maecenas ultricies mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    image: "/images/image4.jpg",
    name: "Tom House",
    role: "Baseball Pitcher",
    content:
      "Got to know about them through a friend. Once the doctor confirmed surgery, they got me fixed costs with no extra charges.",
  },
  {
    image: "/images/image5.jpg",
    name: "Roger Daltrey",
    role: "Singer and Musician",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.",
  },
];

const Testimonials = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">What Our Clients Say</h1>
      <div className="row">
        {testimonials.map((testimonial, index) => (
          <div className="col-12 mb-4" key={index}>
            <div
              className="card mx-auto p-4 h-100"
              style={{
                maxWidth: "70%", // Card width set to 70%
                border: "none",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                borderRadius: "12px",
              }}
            >
              <div className="d-flex align-items-between mb-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="rounded-circle"
                  style={{
                    width: "60px",
                    height: "60px",
                    objectFit: "cover",
                    border: "2px solid #ddd",
                  }}
                />
                <div className="ms-3">
                  <h5 className="mb-0">{testimonial.name}</h5>
                  <p className="text-muted mb-0">{testimonial.role}</p>
                </div>
                <div>
                  <div><RiDoubleQuotesR color="#787878" size={100}/></div>
                  </div>
              </div>
              <blockquote className="blockquote">
                <p className="mb-0 text-muted">{testimonial.content}</p>
              </blockquote>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
