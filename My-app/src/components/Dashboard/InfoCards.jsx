import React from "react";
import { FaShippingFast, FaUndoAlt, FaHeadset } from "react-icons/fa";

const InfoCards = () => {
  const cards = [
    {
      id: 1,
      icon: <FaShippingFast size={40} className="mb-2" />,
      title: "Free Shipping",
      desc: "On all orders over $50",
    },
    {
      id: 2,
      icon: <FaUndoAlt size={40} className="mb-2" />,
      title: "Easy Returns",
      desc: "30-day hassle-free returns",
    },
    {
      id: 3,
      icon: <FaHeadset size={40} className="mb-2" />,
      title: "24/7 Support",
      desc: "We’re here to help anytime",
    },


  ];

  return (
    <div className="container my-5"> 
      <div className="row g-4 text-center ">
        {cards.map((card) => (
          <div key={card.id} className="col-12 col-md-4 ">
            <div className="card h-100 border-0 shadow-sm py-4 bg-dark text-white p-4 rounded py-5 px-3 radius-15 ">
              <div className="card-body d-flex flex-column align-items-center">
                {card.icon}
                <h5 className="card-title mt-2">{card.title}</h5>
                <p className="card-text">{card.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoCards;