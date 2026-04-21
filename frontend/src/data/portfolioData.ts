export interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  tag: string;
  liveLink: string;
}

export const portfolioData: PortfolioItem[] = [
  {
    id: 1,
    title: "Store App",
    description: "Modern e-commerce platform for online shopping",
    category: "E-Commerce",
    image: "src/assects/store.png",
    tag: "E-Commerce",
    liveLink: "https://store-a-d9139.web.app/",
  },

  {
    id: 2,
    title: "Bakery Website",
    description: "Online bakery website with product showcase and orders",
    category: "Food & Beverage",
    image: "src/assects/bakery.png",
    tag: "Food",
    liveLink: "https://bakery-demo-1712.netlify.app/",
  },

  {
    id: 3,
    title: "Hardware Shop",
    description: "Hardware store management and product listing website",
    category: "Business",
    image: "src/assects/hardware.png",
    tag: "Business",
    liveLink: "https://plywood-and-hardware-demo.netlify.app/",
  },

  {
    id: 4,
    title: "Boutique Store",
    description: "Fashion boutique website with modern UI and catalog",
    category: "Fashion",
    image: "src/assects/boutique.png",
    tag: "Fashion",
    liveLink: "https://kishorfashions.netlify.app/",
  },

  {
    id: 5,
    title: "Hospital Management System",
    description: "Complete hospital management system with patient tracking",
    category: "Healthcare",
    image: "src/assects/hospital.png",
    tag: "Healthcare",
    liveLink: "https://hospital-crm.knight21.in/",
  },
];