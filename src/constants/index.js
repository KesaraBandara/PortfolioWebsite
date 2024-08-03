
import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.png";

export const HERO_CONTENT = `I am an undergraduate student at Cardiff Metropolitan University pursuing a degree in Software engineering. I am currently in the 3rd year, 2nd semester of my program. I am a responsible and hardworking individual, and I believe that I am a good team player. I am looking for a challenging role in a respectable firm where I can put my technical, database, and management talents to good use while also learning about new and developing trends in the IT industry.`;

export const ABOUT_TEXT = `I am a dedicated and versatile Software Engineer with a passion for creating efficient and user-friendly web applications and mobile applications. I have worked with various technologies, including React, ReactNative, Node.js, Spring Boot, MySQL, and PostgreSQL. My journey in web and mobile development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;



export const PROJECTS = [
  {
    title: "E-Commerce Website",
    id: 1,
    image: project1,
    KeyFeatures:["User registration and login","Product search and filtering","Shopping cart and checkout process","Order history and user profile management","Secure payment processing integration"],
    link: "https://www.youtube.com/embed/uIXrhscWrxE",
    git:"https://github.com/KesaraBandara/E-Commerce-app-web/tree/main/src/main/java/com/example/ecomweb",
    details: "Developed a comprehensive e-commerce web application utilizing a layered architecture. The frontend, built with Vue.js, features a responsive user interface, real-time data updates, and dynamic product displays.Built with Spring Boot, the backend handles user management, product catalog, and order processing. It integrates with a MySQL database to store user information, product details, and transaction records. The backend also includes RESTful APIs for efficient data communication between the frontend and backend. ",
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "Vue.js", "Spring Boot", "MySQL"],
  },
  {
    title: "Coffee Shop App (On going)",
    id: 2,
    image: project2,
    KeyFeatures:["Product Listing","Product Details", "Customization", "Shopping Cart","Order Tracking"],
    link: "",
    git:"https://github.com/KesaraBandara/CoffeeShopApp/tree/main/src",
    details: "The Coffee Shop App is a comprehensive mobile application designed to enhance the user experience for ordering coffee and related products. The app provides a seamless and intuitive interface for users to browse through a variety of coffee options, customize their orders, and make secure payments. The main features of the app include a product listing, detailed product descriptions, customization options, an easy-to-use cart system, and order tracking. The app is built to offer a user-friendly experience, ensuring that customers can easily navigate and complete their purchases with minimal effort.",
    description:
      "Developed a user-friendly mobile app for a coffee shop with features like product listings, detailed descriptions, customization options, an interactive cart, and real-time order tracking.",
    technologies: ["HTML","CSS", "Type script", "React Native"],
  },
  {
    title: "Portfolio Website",
    id: 3,
    image: project3,
    KeyFeatures:[""],
    link: "",
    git:"https://github.com/KesaraBandara/PortfolioWebsite/tree/main/src",
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React + vite", "Bootstrap"],
  },
];


export const CONTACT = {
  address: "C/3 Narangoda Pitagaldeniya, Kegalle, Sri Lanka",
  phoneNo: "+94717352301",
  email: "kesrabandara1998@gmail.com",
};
