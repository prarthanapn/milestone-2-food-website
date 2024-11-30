import React from 'react';
import { Link } from 'react-router-dom'; 

const Home = () => {
  const menuItems = [
    {
      title: "Classic Burger",
      description: "A delicious beef burger with all the fixings.",
      img: "https://th.bing.com/th?id=OIP.JJ_FIcJSsqBhm39OemhxSAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    },
    {
      title: "Veggie Pizza",
      description: "Topped with fresh veggies and a crispy crust.",
      img: "https://th.bing.com/th?id=OIP.Phw5Hx0hZF-oJxJBdlwMWgHaFW&w=294&h=212&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    },
    {
      title: "Pasta Primavera",
      description: "A fresh pasta dish with seasonal vegetables.",
      img: "https://www.bing.com/th?id=OIP.GlU4Z0RHvO5RvAaz3GsYFQAAAA&w=146&h=195&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    },
    {
      title: "Grilled Chicken Salad",
      description: "Fresh greens with grilled chicken and vinaigrette.",
      img: "https://th.bing.com/th/id/OIP.Q4Ay7pMsUpISIib62_glQQHaHa?w=192&h=192&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
    {
      title: "Chocolate Lava Cake",
      description: "A decadent molten chocolate cake with vanilla ice cream.",
      img: "https://th.bing.com/th/id/OIP.cH4DTc898BkxDUqk_utmtgHaE8?w=202&h=135&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
    {
      title: "Tacos Supreme",
      description: "Soft tortillas filled with seasoned meat and fresh toppings.",
      img: "https://th.bing.com/th/id/OIP.DE2dmtDwPuGF4vJfdaK_UwHaDt?w=311&h=175&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
  ];

  return (
    <div className="home-container">
        <div className="navbar-spacer"></div>
      <section className="welcome-section">
        <h1 className="welcome-message">Welcome to Our Delicious Menu!</h1>
        <p className="welcome-description">
          We're thrilled to have you here! Explore our featured items, and enjoy special promotions throughout the season.
        </p>
      </section>

      <section className="featured-menu">
        <h2 className="featured-heading">Featured Menu Items</h2>
        <h3> To order these items, Scroll Down  !!</h3>
        <div className="menu-items-container">
          {menuItems.map((item, index) => (
            <div className="menu-item-card" key={index}>
              <img src={item.img} alt={item.title} className="menu-item-img" />
              <h3 className="menu-item-title">{item.title}</h3>
              <p className="menu-item-description">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="promotions-section">
        <div className="promotion-card">
          <h3 className="promotion-heading">Seasonal Special!</h3>
          <p className="promotion-description">
            Get 20% off your order when you order the "Winter Wonder Burger" this season. Limited time only!
          </p>
          {/* Use Link to navigate to /order */}
          <Link to="/order" className="promotion-button">Order Now</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
