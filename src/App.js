import React, { useState, useMemo, useEffect } from 'react';
import { Search, Filter, ShoppingCart, Package, TrendingUp, IndianRupee, Plus, Edit2, Trash2, List, Grid } from 'lucide-react';

const initialProducts = [
  {
    "id": 1,
    "name": "Wireless Mouse",
    "price": 799,
    "category": "Electronics",
    "stock": 25,
    "description": "A smooth and responsive wireless mouse with ergonomic design.",
    "createdAt": "2025-06-12T10:30:00Z",
    "isActive": true,
    "tags": ["accessories", "wireless", "mouse"]
  },
  {
    "id": 2,
    "name": "Bluetooth Headphones",
    "price": 2499,
    "category": "Electronics",
    "stock": 10,
    "description": "Noise-cancelling over-ear headphones with deep bass.",
    "createdAt": "2025-05-20T14:15:00Z",
    "isActive": true,
    "tags": ["audio", "wireless", "music"]
  },
  {
    "id": 3,
    "name": "Office Chair",
    "price": 5499,
    "category": "Furniture",
    "stock": 5,
    "description": "Ergonomic office chair with adjustable height and lumbar support.",
    "createdAt": "2025-03-08T09:00:00Z",
    "isActive": true,
    "tags": ["furniture", "office", "ergonomic"]
  },
  {
    "id": 4,
    "name": "Coffee Mug",
    "price": 299,
    "category": "Kitchen",
    "stock": 50,
    "description": "Ceramic coffee mug with heat-resistant handle.",
    "createdAt": "2025-07-01T08:45:00Z",
    "isActive": true,
    "tags": ["kitchen", "mug", "ceramic"]
  },
  {
    "id": 5,
    "name": "Yoga Mat",
    "price": 999,
    "category": "Sports",
    "stock": 18,
    "description": "Eco-friendly yoga mat with non-slip surface.",
    "createdAt": "2025-04-15T16:20:00Z",
    "isActive": false,
    "tags": ["fitness", "yoga", "mat"]
  },
  {
    "id": 6,
    "name": "Laptop Stand",
    "price": 1899,
    "category": "Electronics",
    "stock": 12,
    "description": "Adjustable laptop stand for better posture and cooling.",
    "createdAt": "2025-02-11T11:10:00Z",
    "isActive": true,
    "tags": ["laptop", "accessories", "stand"]
  },
  {
    "id": 7,
    "name": "Water Bottle",
    "price": 499,
    "category": "Sports",
    "stock": 40,
    "description": "Stainless steel water bottle with 1L capacity.",
    "createdAt": "2025-01-25T12:00:00Z",
    "isActive": true,
    "tags": ["sports", "bottle", "water"]
  },
  {
    "id": 8,
    "name": "Smartwatch",
    "price": 7999,
    "category": "Electronics",
    "stock": 8,
    "description": "Feature-rich smartwatch with health tracking and notifications.",
    "createdAt": "2025-06-01T09:45:00Z",
    "isActive": false,
    "tags": ["electronics", "watch", "smart"]
  },
  {
    "id": 9,
    "name": "Gaming Keyboard",
    "price": 3499,
    "category": "Electronics",
    "stock": 15,
    "description": "Mechanical keyboard with RGB lighting and customizable keys.",
    "createdAt": "2025-02-18T13:25:00Z",
    "isActive": true,
    "tags": ["gaming", "keyboard", "rgb"]
  },
  {
    "id": 10,
    "name": "Desk Lamp",
    "price": 1299,
    "category": "Furniture",
    "stock": 30,
    "description": "LED desk lamp with adjustable brightness and angle.",
    "createdAt": "2025-03-25T15:40:00Z",
    "isActive": true,
    "tags": ["lamp", "light", "desk"]
  },
  {
    "id": 11,
    "name": "Running Shoes",
    "price": 2999,
    "category": "Sports",
    "stock": 22,
    "description": "Lightweight running shoes with breathable mesh.",
    "createdAt": "2025-04-02T09:10:00Z",
    "isActive": true,
    "tags": ["shoes", "sports", "running"]
  },
  {
    "id": 12,
    "name": "Smart TV",
    "price": 34999,
    "category": "Electronics",
    "stock": 6,
    "description": "4K Ultra HD Smart TV with built-in streaming apps.",
    "createdAt": "2025-05-10T14:55:00Z",
    "isActive": true,
    "tags": ["tv", "electronics", "smart"]
  },
  {
    "id": 13,
    "name": "Blender",
    "price": 2499,
    "category": "Kitchen",
    "stock": 15,
    "description": "High-speed blender for smoothies and shakes.",
    "createdAt": "2025-02-28T08:30:00Z",
    "isActive": true,
    "tags": ["blender", "kitchen", "appliances"]
  },
  {
    "id": 14,
    "name": "Bookshelf",
    "price": 5999,
    "category": "Furniture",
    "stock": 7,
    "description": "Wooden bookshelf with 5 tiers.",
    "createdAt": "2025-03-14T11:05:00Z",
    "isActive": true,
    "tags": ["furniture", "bookshelf", "wooden"]
  },
  {
    "id": 15,
    "name": "Backpack",
    "price": 1499,
    "category": "Fashion",
    "stock": 20,
    "description": "Durable backpack with multiple compartments.",
    "createdAt": "2025-04-28T13:15:00Z",
    "isActive": true,
    "tags": ["bag", "fashion", "backpack"]
  },
  {
    "id": 16,
    "name": "Wrist Watch",
    "price": 4999,
    "category": "Fashion",
    "stock": 12,
    "description": "Classic analog wristwatch with leather strap.",
    "createdAt": "2025-01-19T09:45:00Z",
    "isActive": false,
    "tags": ["watch", "fashion", "accessory"]
  },
  {
    "id": 17,
    "name": "Microwave Oven",
    "price": 8999,
    "category": "Kitchen",
    "stock": 8,
    "description": "Compact microwave oven with quick heat function.",
    "createdAt": "2025-06-21T16:00:00Z",
    "isActive": true,
    "tags": ["kitchen", "appliance", "microwave"]
  },
  {
    "id": 18,
    "name": "Wireless Earbuds",
    "price": 1999,
    "category": "Electronics",
    "stock": 35,
    "description": "Compact wireless earbuds with noise isolation.",
    "createdAt": "2025-05-05T10:10:00Z",
    "isActive": true,
    "tags": ["audio", "earbuds", "wireless"]
  },
  {
    "id": 19,
    "name": "Tablet",
    "price": 15999,
    "category": "Electronics",
    "stock": 9,
    "description": "Lightweight tablet with 10-inch display.",
    "createdAt": "2025-04-09T11:55:00Z",
    "isActive": true,
    "tags": ["tablet", "electronics", "portable"]
  },
  {
    "id": 20,
    "name": "Portable Charger",
    "price": 1299,
    "category": "Electronics",
    "stock": 25,
    "description": "10000mAh portable charger with fast charging support.",
    "createdAt": "2025-03-12T13:40:00Z",
    "isActive": true,
    "tags": ["charger", "battery", "portable"]
  },
  {
    "id": 21,
    "name": "Camera Tripod",
    "price": 1799,
    "category": "Electronics",
    "stock": 14,
    "description": "Lightweight tripod for DSLR and smartphones.",
    "createdAt": "2025-02-05T15:15:00Z",
    "isActive": false,
    "tags": ["tripod", "camera", "stand"]
  },
  {
    "id": 22,
    "name": "Sofa",
    "price": 24999,
    "category": "Furniture",
    "stock": 3,
    "description": "Comfortable 3-seater sofa with soft cushions.",
    "createdAt": "2025-01-30T17:25:00Z",
    "isActive": true,
    "tags": ["furniture", "sofa", "home"]
  },
  {
    "id": 23,
    "name": "Electric Kettle",
    "price": 1599,
    "category": "Kitchen",
    "stock": 22,
    "description": "Stainless steel electric kettle with auto shut-off.",
    "createdAt": "2025-04-03T08:40:00Z",
    "isActive": true,
    "tags": ["kitchen", "appliance", "kettle"]
  },
  {
    "id": 24,
    "name": "T-Shirt",
    "price": 699,
    "category": "Fashion",
    "stock": 50,
    "description": "Cotton T-shirt with round neck.",
    "createdAt": "2025-06-17T09:30:00Z",
    "isActive": true,
    "tags": ["clothing", "fashion", "tshirt"]
  },
  {
    "id": 25,
    "name": "Jeans",
    "price": 1999,
    "category": "Fashion",
    "stock": 18,
    "description": "Slim-fit denim jeans.",
    "createdAt": "2025-02-14T10:20:00Z",
    "isActive": false,
    "tags": ["clothing", "fashion", "jeans"]
  },
  {
    "id": 26,
    "name": "Refrigerator",
    "price": 29999,
    "category": "Kitchen",
    "stock": 4,
    "description": "Double-door refrigerator with frost-free technology.",
    "createdAt": "2025-03-27T14:00:00Z",
    "isActive": true,
    "tags": ["appliance", "kitchen", "fridge"]
  },
  {
    "id": 27,
    "name": "Rice Cooker",
    "price": 2499,
    "category": "Kitchen",
    "stock": 10,
    "description": "Electric rice cooker with keep-warm function.",
    "createdAt": "2025-01-12T09:50:00Z",
    "isActive": true,
    "tags": ["kitchen", "appliance", "cooker"]
  },
  {
    "id": 28,
    "name": "Sunglasses",
    "price": 1499,
    "category": "Fashion",
    "stock": 15,
    "description": "Polarized sunglasses for UV protection.",
    "createdAt": "2025-04-07T12:35:00Z",
    "isActive": true,
    "tags": ["fashion", "accessory", "sunglasses"]
  },
  {
    "id": 29,
    "name": "Bean Bag",
    "price": 2999,
    "category": "Furniture",
    "stock": 6,
    "description": "Large bean bag for comfortable seating.",
    "createdAt": "2025-05-08T13:15:00Z",
    "isActive": true,
    "tags": ["furniture", "beanbag", "home"]
  },
  {
    "id": 30,
    "name": "Sneakers",
    "price": 2499,
    "category": "Fashion",
    "stock": 20,
    "description": "Casual sneakers with cushioned sole.",
    "createdAt": "2025-03-05T15:55:00Z",
    "isActive": true,
    "tags": ["shoes", "fashion", "sneakers"]
  },
  {
    "id": 31,
    "name": "Wireless Mouse",
    "price": 899,
    "category": "Electronics",
    "stock": 45,
    "description": "Ergonomic wireless mouse with precision tracking.",
    "createdAt": "2025-03-06T09:15:00Z",
    "isActive": true,
    "tags": ["electronics", "computer", "accessories"]
  },
  {
    "id": 32,
    "name": "Yoga Mat",
    "price": 1299,
    "category": "Sports",
    "stock": 30,
    "description": "Non-slip yoga mat with extra cushioning.",
    "createdAt": "2025-03-06T10:20:00Z",
    "isActive": true,
    "tags": ["fitness", "yoga", "sports"]
  },
  {
    "id": 33,
    "name": "Coffee Maker",
    "price": 3499,
    "category": "Home",
    "stock": 18,
    "description": "Programmable coffee maker with thermal carafe.",
    "createdAt": "2025-03-06T11:30:00Z",
    "isActive": true,
    "tags": ["kitchen", "appliances", "coffee"]
  },
  {
    "id": 34,
    "name": "Backpack",
    "price": 1899,
    "category": "Fashion",
    "stock": 35,
    "description": "Durable backpack with laptop compartment.",
    "createdAt": "2025-03-06T12:45:00Z",
    "isActive": true,
    "tags": ["bags", "fashion", "travel"]
  },
  {
    "id": 35,
    "name": "Desk Lamp",
    "price": 1599,
    "category": "Home",
    "stock": 25,
    "description": "LED desk lamp with adjustable brightness.",
    "createdAt": "2025-03-06T13:50:00Z",
    "isActive": true,
    "tags": ["lighting", "office", "home"]
  },
  {
    "id": 36,
    "name": "Running Shoes",
    "price": 3299,
    "category": "Sports",
    "stock": 22,
    "description": "Lightweight running shoes with breathable mesh.",
    "createdAt": "2025-03-06T14:55:00Z",
    "isActive": true,
    "tags": ["shoes", "sports", "running"]
  },
  {
    "id": 37,
    "name": "Bluetooth Speaker",
    "price": 2799,
    "category": "Electronics",
    "stock": 40,
    "description": "Portable Bluetooth speaker with 360-degree sound.",
    "createdAt": "2025-03-07T08:10:00Z",
    "isActive": true,
    "tags": ["audio", "electronics", "portable"]
  },
  {
    "id": 38,
    "name": "Water Bottle",
    "price": 699,
    "category": "Sports",
    "stock": 60,
    "description": "Insulated stainless steel water bottle.",
    "createdAt": "2025-03-07T09:25:00Z",
    "isActive": true,
    "tags": ["sports", "hydration", "accessories"]
  },
  {
    "id": 39,
    "name": "Sunglasses",
    "price": 1999,
    "category": "Fashion",
    "stock": 28,
    "description": "Polarized sunglasses with UV protection.",
    "createdAt": "2025-03-07T10:35:00Z",
    "isActive": true,
    "tags": ["accessories", "fashion", "eyewear"]
  },
  {
    "id": 40,
    "name": "Electric Kettle",
    "price": 1499,
    "category": "Home",
    "stock": 33,
    "description": "Fast-boiling electric kettle with auto shut-off.",
    "createdAt": "2025-03-07T11:40:00Z",
    "isActive": true,
    "tags": ["kitchen", "appliances", "home"]
  },
  {
    "id": 41,
    "name": "Fitness Tracker",
    "price": 2999,
    "category": "Electronics",
    "stock": 27,
    "description": "Waterproof fitness tracker with heart rate monitor.",
    "createdAt": "2025-03-07T12:50:00Z",
    "isActive": true,
    "tags": ["wearables", "fitness", "electronics"]
  },
  {
    "id": 42,
    "name": "Wall Clock",
    "price": 899,
    "category": "Home",
    "stock": 42,
    "description": "Modern wall clock with silent movement.",
    "createdAt": "2025-03-07T14:00:00Z",
    "isActive": true,
    "tags": ["home", "decor", "clocks"]
  },
  {
    "id": 43,
    "name": "Gaming Headset",
    "price": 3799,
    "category": "Electronics",
    "stock": 19,
    "description": "Surround sound gaming headset with noise cancellation.",
    "createdAt": "2025-03-08T08:20:00Z",
    "isActive": true,
    "tags": ["gaming", "audio", "electronics"]
  },
  {
    "id": 44,
    "name": "Dumbbell Set",
    "price": 4299,
    "category": "Sports",
    "stock": 15,
    "description": "Adjustable dumbbell set with storage rack.",
    "createdAt": "2025-03-08T09:30:00Z",
    "isActive": true,
    "tags": ["fitness", "weights", "sports"]
  },
  {
    "id": 45,
    "name": "Tablet Stand",
    "price": 799,
    "category": "Electronics",
    "stock": 50,
    "description": "Adjustable tablet stand for desk or bed.",
    "createdAt": "2025-03-08T10:45:00Z",
    "isActive": true,
    "tags": ["accessories", "tablet", "electronics"]
  },
  {
    "id": 46,
    "name": "Throw Pillow",
    "price": 599,
    "category": "Home",
    "stock": 55,
    "description": "Decorative throw pillow with removable cover.",
    "createdAt": "2025-03-08T11:55:00Z",
    "isActive": true,
    "tags": ["home", "decor", "bedding"]
  },
  {
    "id": 47,
    "name": "USB-C Cable",
    "price": 499,
    "category": "Electronics",
    "stock": 75,
    "description": "Braided USB-C cable with fast charging support.",
    "createdAt": "2025-03-08T13:10:00Z",
    "isActive": true,
    "tags": ["cables", "accessories", "electronics"]
  },
  {
    "id": 48,
    "name": "Baseball Cap",
    "price": 899,
    "category": "Fashion",
    "stock": 38,
    "description": "Adjustable baseball cap with embroidered logo.",
    "createdAt": "2025-03-08T14:20:00Z",
    "isActive": true,
    "tags": ["hats", "fashion", "accessories"]
  },
  {
    "id": 49,
    "name": "Blender",
    "price": 2699,
    "category": "Home",
    "stock": 21,
    "description": "High-speed blender with multiple settings.",
    "createdAt": "2025-03-09T08:35:00Z",
    "isActive": true,
    "tags": ["kitchen", "appliances", "home"]
  },
  {
    "id": 50,
    "name": "Phone Case",
    "price": 699,
    "category": "Electronics",
    "stock": 65,
    "description": "Protective phone case with shock absorption.",
    "createdAt": "2025-03-09T09:45:00Z",
    "isActive": true,
    "tags": ["accessories", "phone", "electronics"]
  },
  {
    "id": 51,
    "name": "Resistance Bands",
    "price": 999,
    "category": "Sports",
    "stock": 44,
    "description": "Set of resistance bands for home workouts.",
    "createdAt": "2025-03-09T10:55:00Z",
    "isActive": true,
    "tags": ["fitness", "sports", "accessories"]
  },
  {
    "id": 52,
    "name": "Picture Frame",
    "price": 799,
    "category": "Home",
    "stock": 48,
    "description": "Wooden picture frame with glass front.",
    "createdAt": "2025-03-09T12:05:00Z",
    "isActive": true,
    "tags": ["home", "decor", "frames"]
  },
  {
    "id": 53,
    "name": "Mechanical Keyboard",
    "price": 4999,
    "category": "Electronics",
    "stock": 16,
    "description": "RGB mechanical keyboard with tactile switches.",
    "createdAt": "2025-03-09T13:15:00Z",
    "isActive": true,
    "tags": ["keyboard", "gaming", "electronics"]
  },
  {
    "id": 54,
    "name": "Tote Bag",
    "price": 1299,
    "category": "Fashion",
    "stock": 32,
    "description": "Canvas tote bag with leather handles.",
    "createdAt": "2025-03-09T14:30:00Z",
    "isActive": true,
    "tags": ["bags", "fashion", "accessories"]
  },
  {
    "id": 55,
    "name": "Air Purifier",
    "price": 5499,
    "category": "Home",
    "stock": 12,
    "description": "HEPA air purifier with smart sensor.",
    "createdAt": "2025-03-10T08:50:00Z",
    "isActive": true,
    "tags": ["appliances", "home", "air-quality"]
  },
  {
    "id": 56,
    "name": "Jump Rope",
    "price": 499,
    "category": "Sports",
    "stock": 58,
    "description": "Adjustable jump rope for cardio workouts.",
    "createdAt": "2025-03-10T10:00:00Z",
    "isActive": true,
    "tags": ["fitness", "sports", "cardio"]
  },
  {
    "id": 57,
    "name": "External Hard Drive",
    "price": 3999,
    "category": "Electronics",
    "stock": 24,
    "description": "1TB external hard drive with USB 3.0.",
    "createdAt": "2025-03-10T11:15:00Z",
    "isActive": true,
    "tags": ["storage", "computer", "electronics"]
  },
  {
    "id": 58,
    "name": "Scented Candle",
    "price": 899,
    "category": "Home",
    "stock": 52,
    "description": "Soy wax scented candle with essential oils.",
    "createdAt": "2025-03-10T12:25:00Z",
    "isActive": true,
    "tags": ["home", "decor", "fragrance"]
  },
  {
    "id": 59,
    "name": "Smartwatch",
    "price": 8999,
    "category": "Electronics",
    "stock": 14,
    "description": "Smartwatch with GPS and health tracking features.",
    "createdAt": "2025-03-10T13:40:00Z",
    "isActive": true,
    "tags": ["wearables", "electronics", "smartwatch"]
  },
  {
    "id": 60,
    "name": "Leather Wallet",
    "price": 1499,
    "category": "Fashion",
    "stock": 36,
    "description": "Genuine leather wallet with RFID protection.",
    "createdAt": "2025-03-10T14:50:00Z",
    "isActive": true,
    "tags": ["accessories", "fashion", "wallet"]
  }
];

 function ProductManagementApp() {
  const [products, setProducts] = useState(initialProducts);
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showActiveOnly, setShowActiveOnly] = useState(false);
  const [viewMode, setViewMode] = useState('grid');
  const [showModal, setShowModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [errors, setErrors] = useState({});
  const itemsPerPage = 12;

  const [formData, setFormData] = useState({
    name: '',
    price: '',
    category: '',
    stock: '',
    description: ''
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchQuery);
      setCurrentPage(1);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  const categories = useMemo(() => {
    const cats = ['All', ...new Set(products.map(p => p.category))];
    return cats.sort();
  }, [products]);

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
                          product.description.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
                          product.tags.some(tag => tag.toLowerCase().includes(debouncedSearch.toLowerCase()));
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      const matchesActive = !showActiveOnly || product.isActive;
      
      return matchesSearch && matchesCategory && matchesActive;
    });
  }, [products, debouncedSearch, selectedCategory, showActiveOnly]);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredProducts.slice(start, start + itemsPerPage);
  }, [filteredProducts, currentPage]);

  const stats = useMemo(() => {
    const totalValue = products.reduce((sum, p) => sum + (p.price * p.stock), 0);
    const totalStock = products.reduce((sum, p) => sum + p.stock, 0);
    const activeProducts = products.filter(p => p.isActive).length;
    const lowStockItems = products.filter(p => p.stock < 10).length;

    return { totalValue, totalStock, activeProducts, lowStockItems };
  }, [products]);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.price || isNaN(formData.price) || Number(formData.price) <= 0) {
      newErrors.price = 'Valid price is required';
    }
    
    if (!formData.category.trim()) {
      newErrors.category = 'Category is required';
    }
    
    if (formData.stock !== '' && (isNaN(formData.stock) || Number(formData.stock) < 0)) {
      newErrors.stock = 'Stock must be a valid number';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    if (editingProduct) {
      setProducts(products.map(p => 
        p.id === editingProduct.id 
          ? {
              ...p,
              name: formData.name,
              price: Number(formData.price),
              category: formData.category,
              stock: formData.stock ? Number(formData.stock) : 0,
              description: formData.description
            }
          : p
      ));
    } else {
      const newProduct = {
        id: Math.max(...products.map(p => p.id)) + 1,
        name: formData.name,
        price: Number(formData.price),
        category: formData.category,
        stock: formData.stock ? Number(formData.stock) : 0,
        description: formData.description,
        createdAt: new Date().toISOString(),
        isActive: true,
        tags: []
      };
      setProducts([newProduct, ...products]);
    }

    closeModal();
  };

  const openModal = (product = null) => {
    if (product) {
      setEditingProduct(product);
      setFormData({
        name: product.name,
        price: product.price.toString(),
        category: product.category,
        stock: product.stock.toString(),
        description: product.description || ''
      });
    } else {
      setEditingProduct(null);
      setFormData({
        name: '',
        price: '',
        category: '',
        stock: '',
        description: ''
      });
    }
    setErrors({});
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setEditingProduct(null);
    setFormData({
      name: '',
      price: '',
      category: '',
      stock: '',
      description: ''
    });
    setErrors({});
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      setProducts(products.filter(p => p.id !== id));
    }
  };

  return (
    <>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />
      
      <div style={{ minHeight: '100vh', background: 'linear-gradient(to bottom right, #f8f9fa, #e9ecef)' }}>
        <div className="container py-4">
          <div className="mb-4 d-flex justify-content-between align-items-center flex-wrap">
            <div className="mb-3 mb-md-0">
              <h1 className="display-4 fw-bold text-dark mb-2">Product Management</h1>
              <p className="text-muted">Manage and monitor your product inventory</p>
            </div>
            <button
              onClick={() => openModal()}
              className="btn btn-primary btn-lg d-flex align-items-center gap-2"
            >
              <Plus size={20} />
              Add Product
            </button>
          </div>

          <div className="row g-3 mb-4">
            <div className="col-12 col-sm-6 col-lg-3">
              <div className="card shadow-sm border">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <p className="text-muted small mb-1">Total Value</p>
                      <h3 className="fw-bold mb-0">₹{stats.totalValue.toLocaleString()}</h3>
                    </div>
                    <div className="bg-primary bg-opacity-10 p-3 rounded">
                      <IndianRupee size={24} className="text-primary" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-lg-3">
              <div className="card shadow-sm border">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <p className="text-muted small mb-1">Total Stock</p>
                      <h3 className="fw-bold mb-0">{stats.totalStock}</h3>
                    </div>
                    <div className="bg-success bg-opacity-10 p-3 rounded">
                      <Package size={24} className="text-success" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-lg-3">
              <div className="card shadow-sm border">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <p className="text-muted small mb-1">Active Products</p>
                      <h3 className="fw-bold mb-0">{stats.activeProducts}</h3>
                    </div>
                    <div style={{ backgroundColor: 'rgba(153, 102, 255, 0.1)' }} className="p-3 rounded">
                      <TrendingUp size={24} style={{ color: '#9966ff' }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-lg-3">
              <div className="card shadow-sm border">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <p className="text-muted small mb-1">Low Stock Items</p>
                      <h3 className="fw-bold mb-0">{stats.lowStockItems}</h3>
                    </div>
                    <div className="bg-warning bg-opacity-10 p-3 rounded">
                      <ShoppingCart size={24} className="text-warning" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card shadow-sm border mb-4">
            <div className="card-body">
              <div className="row g-3">
                <div className="col-12 col-lg-6">
                  <div className="position-relative">
                    <Search className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted" size={20} />
                    <input
                      type="text"
                      placeholder="Search products by name... (500ms debounce)"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="form-control form-control-lg ps-5"
                    />
                  </div>
                </div>
                
                <div className="col-12 col-lg-6">
                  <div className="d-flex gap-2 flex-wrap">
                    <div className="position-relative flex-grow-1" style={{ minWidth: '150px' }}>
                      <Filter className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted" size={20} />
                      <select
                        value={selectedCategory}
                        onChange={(e) => {
                          setSelectedCategory(e.target.value);
                          setCurrentPage(1);
                        }}
                        className="form-select form-select-lg ps-5"
                      >
                        {categories.map(cat => (
                          <option key={cat} value={cat}>{cat}</option>
                        ))}
                      </select>
                    </div>

                    <button
                      onClick={() => {
                        setShowActiveOnly(!showActiveOnly);
                        setCurrentPage(1);
                      }}
                      className={`btn btn-lg ${showActiveOnly ? 'btn-primary' : 'btn-secondary'}`}
                      style={{ whiteSpace: 'nowrap' }}
                    >
                      Active Only
                    </button>

                    <div className="btn-group" role="group">
                      <button
                        onClick={() => setViewMode('grid')}
                        className={`btn btn-lg ${viewMode === 'grid' ? 'btn-light' : 'btn-outline-secondary'}`}
                        title="Grid View"
                      >
                        <Grid size={20} />
                      </button>
                      <button
                        onClick={() => setViewMode('list')}
                        className={`btn btn-lg ${viewMode === 'list' ? 'btn-light' : 'btn-outline-secondary'}`}
                        title="List View"
                      >
                        <List size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {viewMode === 'grid' ? (
            <div className="row g-3 mb-4">
              {paginatedProducts.map(product => (
                <div key={product.id} className="col-12 col-sm-6 col-lg-4 col-xl-3">
                  <div className="card h-100 shadow-sm border">
                    <div className="card-body d-flex flex-column">
                      <div className="d-flex justify-content-between align-items-start mb-2">
                        <h5 className="card-title text-truncate mb-0">{product.name}</h5>
                        {!product.isActive && (
                          <span className="badge bg-danger">Inactive</span>
                        )}
                      </div>

                      <p className="card-text text-muted small mb-3" style={{ 
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical'
                      }}>
                        {product.description}
                      </p>

                      <div className="d-flex flex-wrap gap-1 mb-3">
                        {product.tags.slice(0, 3).map(tag => (
                          <span key={tag} className="badge bg-secondary">{tag}</span>
                        ))}
                      </div>

                      <div className="d-flex justify-content-between align-items-center pt-3 border-top mb-3">
                        <div>
                          <h4 className="mb-0 fw-bold">₹{product.price}</h4>
                          <small className="text-muted">{product.category}</small>
                        </div>
                        <div className="text-end">
                          <p className={`mb-0 small fw-semibold ${product.stock < 10 ? 'text-warning' : 'text-success'}`}>
                            {product.stock} in stock
                          </p>
                        </div>
                      </div>

                      <div className="d-flex gap-2 mt-auto">
                        <button
                          onClick={() => openModal(product)}
                          className="btn btn-primary flex-grow-1 d-flex align-items-center justify-content-center gap-2"
                        >
                          <Edit2 size={16} />
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(product.id)}
                          className="btn btn-danger"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="card shadow-sm border mb-4">
              <div className="table-responsive">
                <table className="table table-hover mb-0">
                  <thead className="table-light">
                    <tr>
                      <th>Product</th>
                      <th>Category</th>
                      <th>Price</th>
                      <th>Stock</th>
                      <th>Status</th>
                      <th className="text-end">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {paginatedProducts.map((product) => (
                      <tr key={product.id}>
                        <td>
                          <div>
                            <div className="fw-semibold">{product.name}</div>
                            <small className="text-muted text-truncate d-block" style={{ maxWidth: '300px' }}>
                              {product.description}
                            </small>
                          </div>
                        </td>
                        <td>{product.category}</td>
                        <td className="fw-semibold">₹{product.price}</td>
                        <td>
                          <span className={`fw-semibold ${product.stock < 10 ? 'text-warning' : 'text-success'}`}>
                            {product.stock}
                          </span>
                        </td>
                        <td>
                          <span className={`badge ${product.isActive ? 'bg-success' : 'bg-danger'}`}>
                            {product.isActive ? 'Active' : 'Inactive'}
                          </span>
                        </td>
                        <td>
                          <div className="d-flex gap-2 justify-content-end">
                            <button
                              onClick={() => openModal(product)}
                              className="btn btn-sm btn-primary d-flex align-items-center gap-1"
                            >
                              <Edit2 size={14} />
                              Edit
                            </button>
                            <button
                              onClick={() => handleDelete(product.id)}
                              className="btn btn-sm btn-danger"
                            >
                              <Trash2 size={14} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {filteredProducts.length === 0 && (
            <div className="text-center py-5">
              <Package size={64} className="text-muted mb-3" />
              <p className="text-muted fs-5">No products found matching your criteria</p>
            </div>
          )}

          {totalPages > 1 && (
            <nav className="d-flex justify-content-center mb-4">
              <ul className="pagination">
                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                  <button
                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                    className="page-link"
                    disabled={currentPage === 1}
                  >
                    Previous
                  </button>
                </li>
                
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                  <li key={page} className={`page-item ${currentPage === page ? 'active' : ''}`}>
                    <button
                      onClick={() => setCurrentPage(page)}
                      className="page-link"
                    >
                      {page}
                    </button>
                  </li>
                ))}

                <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                  <button
                    onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                    className="page-link"
                    disabled={currentPage === totalPages}
                  >
                    Next
                  </button>
                </li>
              </ul>
            </nav>
          )}

          {showModal && (
            <div
              className="modal d-block"
              style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
              onClick={closeModal}
            >
              <div className="modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable">
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                  <div className="modal-header">
                    <h2 className="modal-title fs-3 fw-bold">
                      {editingProduct ? 'Edit Product' : 'Add New Product'}
                    </h2>
                    <button
                      type="button"
                      className="btn-close"
                      onClick={closeModal}
                    ></button>
                  </div>

                  <div className="modal-body">
                    <form onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <label className="form-label fw-semibold">
                          Name <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className={`form-control form-control-lg ${errors.name ? 'is-invalid' : ''}`}
                          placeholder="Enter product name"
                        />
                        {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                      </div>

                      <div className="row g-3 mb-3">
                        <div className="col-md-6">
                          <label className="form-label fw-semibold">
                            Price <span className="text-danger">*</span>
                          </label>
                          <input
                            type="number"
                            value={formData.price}
                            onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                            className={`form-control form-control-lg ${errors.price ? 'is-invalid' : ''}`}
                            placeholder="Enter price"
                            min="0"
                            step="0.01"
                          />
                          {errors.price && <div className="invalid-feedback">{errors.price}</div>}
                        </div>

                        <div className="col-md-6">
                          <label className="form-label fw-semibold">Stock</label>
                          <input
                            type="number"
                            value={formData.stock}
                            onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
                            className={`form-control form-control-lg ${errors.stock ? 'is-invalid' : ''}`}
                            placeholder="Enter stock quantity"
                            min="0"
                          />
                          {errors.stock && <div className="invalid-feedback">{errors.stock}</div>}
                        </div>
                      </div>

                      <div className="mb-3">
                        <label className="form-label fw-semibold">
                          Category <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          value={formData.category}
                          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                          className={`form-control form-control-lg ${errors.category ? 'is-invalid' : ''}`}
                          placeholder="Enter category"
                        />
                        {errors.category && <div className="invalid-feedback">{errors.category}</div>}
                      </div>

                      <div className="mb-3">
                        <label className="form-label fw-semibold">Description</label>
                        <textarea
                          value={formData.description}
                          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                          className="form-control form-control-lg"
                          placeholder="Enter product description (optional)"
                          rows="4"
                        />
                      </div>

                      <div className="d-flex gap-2 pt-3">
                        <button
                          type="submit"
                          className="btn btn-primary btn-lg flex-grow-1"
                        >
                          {editingProduct ? 'Update Product' : 'Add Product'}
                        </button>
                        <button
                          type="button"
                          onClick={closeModal}
                          className="btn btn-secondary btn-lg flex-grow-1"
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <footer className="bg-dark text-white py-4 mt-5">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6">
                <h5 className="fw-bold mb-3">CONTACT</h5>
                <div className="d-flex flex-column gap-2">
                  <div className="d-flex align-items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                    <span>Nellore, India</span>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="16" x="2" y="4" rx="2"/>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                    </svg>
                    <span>kilari.manoj010@gmail.com</span>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="14" height="20" x="5" y="2" rx="2" ry="2"/>
                      <path d="M12 18h.01"/>
                    </svg>
                    <span>+91 6301601328</span>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 mt-4 mt-md-0">
                <h5 className="fw-bold mb-3">About</h5>
                <p className="text-white-50">Product Management System - Efficiently manage your inventory, track stock levels, and monitor product performance with our comprehensive dashboard.</p>
              </div>
            </div>
            <hr className="my-4 bg-white opacity-25" />
            <div className="text-center">
              <p className="mb-0 text-white-50">© 2025 Product Management. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default ProductManagementApp;