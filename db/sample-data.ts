import { hashSync } from "bcrypt-ts-edge";

const sampleData = {
  users: [
    {
      name: "John Edited",
      email: "admin@example.com",
      password: hashSync("Password123", 10),
      role: "admin",
    },
    {
      name: "Jane Edited",
      email: "user@example.com",
      password: hashSync("Password123", 10),
      role: "user",
    },
  ],
  products: [
    {
      name: "RadRover™ 6 Plus Electric Fat Tire Bike",
      slug: "radrover-6-plus-electric-fat-tire-bike",
      category: "Bikes",
      description:
        "Commute. Explore. Or simply do more. The ebike that started it all, does it all. Now in its sixth iteration, our flagship model combines durability and agility into one irresistible ride. Hop on and discover why this is the most imitated ebike in the industry.",
      images: ["/images/model2.png", "/images/model2.1.png"],
      price: 1599,
      brand: "Rad Power Bikes",
      rating: 4.9,
      numReviews: 10,
      stock: 5,
      isFeatured: true,
      banner: "banner-1.jpg",
    },
    {
      name: "RadRunner™ Plus",
      slug: "radrunner-plus",
      category: "Bikes",
      description:
        "Perfect for errands, perfect for fun, this electric utility bike comes fully-loaded with exclusive accessories to elevate your everyday experiences. The passenger package invites you to bring a friend for the ride, while the premium headlight gives you the confidence to hit the road any time.",
      images: ["/images/model3.png", "/images/model3.1.png"],
      price: 85.9,
      brand: "Rad Power Bikes",
      rating: 4.6,
      numReviews: 8,
      stock: 10,
      isFeatured: true,
      banner: "banner-2.jpg",
    },
    {
      name: "RadRunner™ 2 Electric Utility Bike",
      slug: "radrunner2-electric-utility-bike",
      category: "Bikes",
      description:
        "This head turner delivers on more than just style: it can help you carry cargo, passengers, and even your morning joe. Factor in over 330 possible accessory combinations, and you can customize this moped-style ebike to your heart’s content.",
      images: ["/images/model4.png", "/images/model4.1.png"],
      price: 999,
      brand: "Rad Power Bikes",
      rating: 4.9,
      numReviews: 3,
      stock: 0,
      isFeatured: false,
      banner: null,
    },
    {
      name: "Radster™ Trail Electric Off-Road Bike",
      slug: "radster-trail-electric-off-road-bike",
      category: "Bikes",
      description:
        "The Radster Trail is an electric off-road bike with the power to do anything, and the range to go anywhere. The 100 Nm motor makes quick work of hills, the 28 mph top speed promises fast-paced fun, and with two frame sizes for a personalized fit, it’s so comfortable that you’ll barely feel like you’re roughing it.",
      images: ["/images/model5.png", "/images/model5.1.png"],
      price: 2199,
      brand: "Rad Power Bikes",
      rating: 5.0,
      numReviews: 5,
      stock: 10,
      isFeatured: false,
      banner: null,
    },
    {
      name: "Bern Brentwood™ 2.0 MIPS Helmet",
      slug: "bern-brentwood-2-0-mips-helmet",
      category: "Gear",
      description:
        "Ride safe, stylish, and comfortable with the Brentwood 2.0 MIPS Helmet.",
      images: ["/images/gear1.png", "/images/gear1.1.png"],
      price: 110,
      brand: "Bern Brentwood",
      rating: 4.7,
      numReviews: 18,
      stock: 6,
      isFeatured: false,
      banner: null,
    },
    {
      name: "WTACTFUL™ Rubber Guard Tactical Gloves",
      slug: "wtactful-rubber-guard-tactical-gloves",
      category: "Gear",
      description:
        "Not just for riding, tactical, these gloves for any activity you want to use them for where you would want high dexterity, comfort, and tactility with protection.",
      images: ["/images/gear2.png", "/images/gear2.1.png"],
      price: 29.99,
      brand: "WTACTFUL",
      rating: 4.6,
      numReviews: 12,
      stock: 8,
      isFeatured: true,
      banner: null,
    },
  ],
};

export default sampleData;
