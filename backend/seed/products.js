 const products = [
  // ===========================
  // LAPTOP
  // ===========================

  {
    title: "Dell XPS 13",
    brand: "Dell",
    description:
      "Premium ultrabook with Intel Core Ultra processor.",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80",
    category: "Laptop",
    price: 94999,
    rating: 1,
    stock: 20,
    featured: false,
  },

  {
    title: "Apple MacBook Air M3",
    brand: "Apple",
    description:
      "13-inch Apple MacBook Air with M3 chip and Retina Display.",
    image:
      "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=800&q=80",
    category: "Laptop",
    price: 114999,
    rating: 4.9,
    stock: 15,
    featured: true,
  },

  // ===========================
  // MOBILE
  // ===========================

  {
    title: "Samsung Galaxy S25",
    brand: "Samsung",
    description:
      "Latest Samsung flagship smartphone.",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
    category: "Mobile",
    price: 79999,
    rating: 2,
    stock: 30,
    featured: false,
  },

  {
    title: "iPhone 16",
    brand: "Apple",
    description:
      "Apple iPhone 16 powered by the A18 chip with an advanced camera system.",
    image:
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=800&q=80",
    category: "Mobile",
    price: 89999,
    rating: 4.9,
    stock: 18,
    featured: true,
  },

  // ===========================
  // HEADPHONES
  // ===========================

  {
    title: "Sony WH-1000XM5",
    brand: "Sony",
    description:
      "Industry-leading wireless noise cancelling headphones.",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
    category: "Headphones",
    price: 28999,
    rating: 1,
    stock: 40,
    featured: true,
  },

  // ===========================
  // MEN
  // ===========================

  {
    title: "Nike Air Max Running Shoes",
    brand: "Nike",
    description:
      "Comfortable running shoes designed for everyday wear and sports.",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
    category: "Men",
    price: 6499,
    rating: 1,
    stock: 30,
    featured: true,
  },

  {
    title: "Levi's Slim Fit Jeans",
    brand: "Levi's",
    description:
      "Premium slim-fit denim jeans made from stretchable cotton fabric.",
    image:
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80",
    category: "Men",
    price: 3299,
    rating: 2,
    stock: 45,
    featured: false,
  },

  {
    title: "Allen Solly Formal Shirt",
    brand: "Allen Solly",
    description:
      "Premium cotton formal shirt suitable for office and business wear.",
    image:
      "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=800&q=80",
    category: "Men",
    price: 1999,
    rating: 3,
    stock: 40,
    featured: false,
  },

  {
    title: "Puma Casual Hoodie",
    brand: "Puma",
    description:
      "Warm cotton hoodie perfect for winter and casual outings.",
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=80",
    category: "Men",
    price: 2799,
    rating: 4.9,
    stock: 35,
    featured: true,
  },
    // ===========================
  // WOMEN
  // ===========================

  {
    title: "Lavie Handbag",
    brand: "Lavie",
    description:
      "Stylish handbag with spacious compartments for daily essentials.",
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80",
    category: "Women",
    price: 2799,
    rating: 1,
    stock: 22,
    featured: false,
  },

  {
    title: "H&M Women's Hoodie",
    brand: "H&M",
    description:
      "Soft fleece hoodie for everyday comfort and style.",
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=80",
    category: "Women",
    price: 2499,
    rating: 2,
    stock: 33,
    featured: false,
  },

  {
    title: "Biba Printed Kurti",
    brand: "Biba",
    description:
      "Traditional printed kurti crafted with premium cotton fabric.",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
    category: "Women",
    price: 1899,
    rating: 3,
    stock: 52,
    featured: true,
  },

  {
    title: "Floral Summer Dress",
    brand: "Zara",
    description:
      "Elegant floral dress designed for casual and summer occasions.",
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80",
    category: "Women",
    price: 4299,
    rating: 4.9,
    stock: 28,
    featured: true,
  },

  // ===========================
  // KIDS
  // ===========================

  {
    title: "Kids Drawing Kit",
    brand: "Faber-Castell",
    description:
      "Drawing kit with color pencils, sketch pens and eraser.",
    image:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80",
    category: "Kids",
    price: 899,
    rating: 1,
    stock: 40,
    featured: false,
  },

  {
    title: "Alphabet Flash Cards",
    brand: "Skillmatics",
    description:
      "Educational flash cards to help children learn letters and words.",
    image:
      "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80",
    category: "Kids",
    price: 249,
    rating: 2,
    stock: 65,
    featured: false,
  },

  {
    title: "Kids Puzzle Game",
    brand: "FunBlast",
    description:
      "Educational jigsaw puzzle that develops problem-solving skills.",
    image:
      "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=800&q=80",
    category: "Kids",
    price: 799,
    rating: 3,
    stock: 45,
    featured: true,
  },

  {
    title: "Kids Water Bottle",
    brand: "Milton",
    description:
      "Leak-proof BPA-free water bottle with cartoon print.",
    image:
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=800&q=80",
    category: "Kids",
    price: 499,
    rating: 4,
    stock: 70,
    featured: false,
  },

  {
    title: "Kids Sports Shoes",
    brand: "Campus",
    description:
      "Comfortable sports shoes specially designed for active kids.",
    image:
      "https://images.unsplash.com/photo-1543508282-6319a3e2621f?auto=format&fit=crop&w=800&q=80",
    category: "Kids",
    price: 1599,
    rating: 4.2,
    stock: 44,
    featured: false,
  },

  {
    title: "Kids Cartoon Backpack",
    brand: "Skybags",
    description:
      "Lightweight school backpack featuring colorful cartoon prints.",
    image:
      "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=800&q=80",
    category: "Kids",
    price: 1799,
    rating: 4.4,
    stock: 50,
    featured: true,
  },

  {
    title: "Kids Coloring Book Set",
    brand: "FunSketch",
    description:
      "Creative coloring book set with crayons for kids aged 3+.",
    image:
      "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80",
    category: "Kids",
    price: 299,
    rating: 4.6,
    stock: 80,
    featured: false,
  },

  {
    title: "Soft Teddy Bear",
    brand: "ToyJoy",
    description:
      "Cute and cuddly teddy bear made from soft plush fabric.",
    image:
      "https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=800&q=80",
    category: "Kids",
    price: 699,
    rating: 4.8,
    stock: 55,
    featured: true,
  },

  {
    title: "Baby Winter Jacket",
    brand: "Mothercare",
    description:
      "Soft fleece winter jacket that keeps kids warm during cold weather.",
    image:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=800&q=80",
    category: "Kids",
    price: 2199,
    rating: 4.9,
    stock: 20,
    featured: true,
  },

  {
    title: "Kids Toy Building Blocks",
    brand: "LEGO",
    description:
      "Creative building block set that improves imagination and learning.",
    image:
      "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=800&q=80",
    category: "Kids",
    price: 2499,
    rating: 5,
    stock: 60,
    featured: true,
  },
  // ===========================
  // ELECTRONICS
  // ===========================

  {
    title: "Logitech MX Master 3S Mouse",
    brand: "Logitech",
    description:
      "Advanced wireless productivity mouse with ergonomic design.",
    image:
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=800&q=80",
    category: "Electronics",
    price: 9999,
    rating: 1,
    stock: 40,
    featured: false,
  },

  {
    title: "Sony WH-1000XM5 Headphones",
    brand: "Sony",
    description:
      "Industry-leading wireless noise cancelling headphones.",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
    category: "Electronics",
    price: 28999,
    rating: 2,
    stock: 42,
    featured: false,
  },

  {
    title: "Samsung Galaxy S25",
    brand: "Samsung",
    description:
      "Latest Samsung flagship smartphone with AI-powered features.",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
    category: "Electronics",
    price: 79999,
    rating: 3,
    stock: 30,
    featured: true,
  },

  {
    title: "Apple MacBook Air M3",
    brand: "Apple",
    description:
      "13-inch Apple MacBook Air with M3 chip and Retina Display.",
    image:
      "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=800&q=80",
    category: "Electronics",
    price: 114999,
    rating: 4.9,
    stock: 15,
    featured: true,
  },

  // ===========================
  // HOME
  // ===========================

  {
    title: "Wooden Dining Chair",
    brand: "Home Centre",
    description:
      "Comfortable solid wood dining chair with premium finish.",
    image:
      "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=800&q=80",
    category: "Home",
    price: 4499,
    rating: 1,
    stock: 26,
    featured: false,
  },

  {
    title: "Designer Table Lamp",
    brand: "Philips",
    description:
      "Energy-efficient LED table lamp with adjustable brightness.",
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80",
    category: "Home",
    price: 2499,
    rating: 2,
    stock: 36,
    featured: false,
  },

  {
    title: "Modern Coffee Table",
    brand: "IKEA",
    description:
      "Minimal wooden coffee table suitable for modern living rooms.",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
    category: "Home",
    price: 8999,
    rating: 3,
    stock: 18,
    featured: true,
  },

  {
    title: "Luxury Sofa Set",
    brand: "Durian",
    description:
      "Premium 3-seater fabric sofa offering exceptional comfort.",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80",
    category: "Home",
    price: 45999,
    rating: 4.9,
    stock: 10,
    featured: true,
  },
];

 
export default products;