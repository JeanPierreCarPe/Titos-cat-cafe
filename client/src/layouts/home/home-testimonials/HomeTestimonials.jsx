import { TestimonialCard, Title } from 'components';
import React, { useState } from 'react'
import './home-testimonials.css'

const HomeTestimonials = () => {
  const testimonialsData = [
    {
      id: "1",
      name: "Dayana",
      testimonial: "Last Friday I came for restaurant week. It was FABULOUS! The portions were overly generous. Everything was so yummy – what a bargain. I will be back soon.",
      imagePath: "testimonial-image1.png",
    },
    {
      id: "2",
      name: "Angela",
      testimonial: "Lorem ipsum dolor sit amet consectetur. Ut maecenas amet ut congue. Sit sem id quis sodales.",
      imagePath: "testimonial-image2.png",
    },
    {
      id: "3",
      name: "Valentina",
      testimonial: "Lorem ipsum dolor sit amet consectetur. Ut maecenas amet ut congue. Sit sem id quis sodales.",
      imagePath: "testimonial-image3.png",
    },
    {
      id: "4",
      name: "Nubia",
      testimonial: "Lorem ipsum dolor sit amet consectetur. Ut maecenas amet ut congue. Sit sem id quis sodales.",
      imagePath: "testimonial-image4.png",
    },
    {
      id: "5",
      name: "Obeida",
      testimonial: "Lorem ipsum dolor sit amet consectetur. Ut maecenas amet ut congue. Sit sem id quis sodales.",
      imagePath: "testimonial-image5.png",
    },
    {
      id: "6",
      name: "Daniela",
      testimonial: "Lorem ipsum dolor sit amet consectetur. Ut maecenas amet ut congue. Sit sem id quis sodales.",
      imagePath: "testimonial-image6.png",
    },
  ];

  const testimonialsArray = [];

  for (let i = 0; i < 4; i++) {
    const item = testimonialsData[i];
    testimonialsArray.push(item);
  }

  const [testimonialsItems, setCatsItems] = useState([...testimonialsArray]);

  const sliderAction = (e, id) => {
    const actualCard = e.target.parentNode;
    const parent = actualCard.parentNode;
    const container = actualCard.parentNode.parentNode;
    const firstCard = container.firstChild;
    const lastCard = container.lastChild;

    const indexCard = testimonialsData.findIndex((item) => {
      return item.id === id;
    });

    console.log(firstCard);

    if (parent === lastCard) {
      testimonialsItems.shift();
      if (indexCard === testimonialsData.length - 1) {
        setCatsItems([...testimonialsItems, testimonialsData[0]]);
      }
      if (indexCard !== testimonialsData.length - 1) {
        setCatsItems([...testimonialsItems, testimonialsData[indexCard + 1]]);
      }
    }

    if (parent === firstCard) {
      testimonialsItems.pop();
      if (indexCard === 0) {
        setCatsItems([
          testimonialsData[testimonialsData.length - 1],
          ...testimonialsItems,
        ]);
      }
      if (indexCard !== 0) {
        setCatsItems([testimonialsData[indexCard - 1], ...testimonialsItems]);
      }
    }
  };

  return (
    <div className="home-testimonials">
      <Title
        text="Clientes felices"
        style={{ width: "auto", alignItems: "center", color:"#FBFBFB", fontSize:"var(--header-size-large)" }}
      />
      <div className="home-testimonials-content">
        {testimonialsItems.map((element, index) => {
          const isActive =
            index === testimonialsItems.length / 2 - 1 ||
            index === testimonialsItems.length / 2
              ? true
              : false;
          return (
            <TestimonialCard
              key={index}
              id={element.id}
              name={element.name}
              testimonial={element.testimonial}
              imagePath={element.imagePath}
              idPattern={`testimonial-image-${index}`}
              state={isActive}
              slideFunction={sliderAction}
              color="var(--primary-color)"
            />
          );
        })}
      </div>
    </div>
  );
}

export default HomeTestimonials