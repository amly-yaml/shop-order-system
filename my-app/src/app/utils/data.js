export const categories = [
  {
    slug: "home",
    name: "Home",
  },
  {
    slug: "coffee",
    name: "Coffee",
  },
  {
    slug: "noncoffee",
    name: "Non-Coffee",
  },
  {
    slug: "dessert",
    name: "Dessert",
  },
  {
    slug: "cake",
    name: "Cake",
  },
  //   {
  //     slug: "order",
  //     name: "My Order",
  //   },
];

export const products = {
  home: [
    {
      slug: "coffee",
      title: "Coffee",
      image:
        "https://i.pinimg.com/736x/75/ff/4b/75ff4bd9c9368c0b27f80988026bdb4a.jpg",
    },
    {
      slug: "noncoffee",
      title: "Non-Coffee",
      image:
        "https://i.pinimg.com/736x/96/ee/d9/96eed9822024adfcf31109821b87ab2d.jpg",
    },
    {
      slug: "dessert",
      title: "Dessert",
      image:
        "https://i.pinimg.com/736x/8c/3f/a4/8c3fa4a775c6c64ae8438119fcf278e0.jpg",
    },
    {
      slug: "cake",
      title: "Cake",
      image:
        "https://i.pinimg.com/736x/b3/0a/8f/b30a8f1a86aac9d34887a876b8f2e55b.jpg",
    },
  ],
  coffee: [
    {
      title: "Americano",
      image:
        "https://i.pinimg.com/736x/75/ff/4b/75ff4bd9c9368c0b27f80988026bdb4a.jpg",
      price: "$12.30",
    },
    {
      title: "Caffè Macchiato",
      image:
        "https://i.pinimg.com/736x/96/ee/d9/96eed9822024adfcf31109821b87ab2d.jpg",
      price: "$12.30",
    },
    {
      title: "Latte",
      image:
        "https://i.pinimg.com/736x/8c/3f/a4/8c3fa4a775c6c64ae8438119fcf278e0.jpg",
      price: "$12.30",
    },
    {
      title: "Cappucciono",
      image:
        "https://i.pinimg.com/736x/b3/0a/8f/b30a8f1a86aac9d34887a876b8f2e55b.jpg",
      price: "$12.30",
      cappuccionoa: [
        {
          name: "Cappucciono",
          image:
            "https://i.pinimg.com/736x/75/ff/4b/75ff4bd9c9368c0b27f80988026bdb4a.jpg",
          choice: ["Hot Coffee", "Cold Coffee"],
          size: ["Short", "Tall", "Grande"],
          toppings: [
            {
              name: "Brown Sugar",
              image:
                "https://i.pinimg.com/736x/75/ff/4b/75ff4bd9c9368c0b27f80988026bdb4a.jpg",
              price: "$12.50",
            },
            {
              name: "Vanilla",
              image:
                "https://i.pinimg.com/736x/75/ff/4b/75ff4bd9c9368c0b27f80988026bdb4a.jpg",
              price: "$12.50",
            },
            {
              name: "Cream",
              image:
                "https://i.pinimg.com/736x/75/ff/4b/75ff4bd9c9368c0b27f80988026bdb4a.jpg",
              price: "$12.50",
            },
          ],
        },
      ],
    },
  ],
  noncoffee: [
    {
      title: "Coffee",
      image:
        "https://i.pinimg.com/736x/75/ff/4b/75ff4bd9c9368c0b27f80988026bdb4a.jpg",
      price: "$12.30",
    },
    {
      title: "Non-Coffee",
      image:
        "https://i.pinimg.com/736x/96/ee/d9/96eed9822024adfcf31109821b87ab2d.jpg",
      price: "$12.30",
    },
    {
      title: "Dessert",
      image:
        "https://i.pinimg.com/736x/8c/3f/a4/8c3fa4a775c6c64ae8438119fcf278e0.jpg",
      price: "$12.30",
    },
    {
      title: "Cake",
      image:
        "https://i.pinimg.com/736x/b3/0a/8f/b30a8f1a86aac9d34887a876b8f2e55b.jpg",
      price: "$12.30",
    },
  ],
  dessert: [
    {
      title: "Coffee",
      image:
        "https://i.pinimg.com/736x/75/ff/4b/75ff4bd9c9368c0b27f80988026bdb4a.jpg",
      price: "$12.30",
    },
    {
      title: "Non-Coffee",
      image:
        "https://i.pinimg.com/736x/96/ee/d9/96eed9822024adfcf31109821b87ab2d.jpg",
      price: "$12.30",
    },
    {
      title: "Dessert",
      image:
        "https://i.pinimg.com/736x/8c/3f/a4/8c3fa4a775c6c64ae8438119fcf278e0.jpg",
      price: "$12.30",
    },
    {
      title: "Cake",
      image:
        "https://i.pinimg.com/736x/b3/0a/8f/b30a8f1a86aac9d34887a876b8f2e55b.jpg",
      price: "$12.30",
    },
  ],
  cake: [
    {
      title: "Coffee",
      image:
        "https://i.pinimg.com/736x/75/ff/4b/75ff4bd9c9368c0b27f80988026bdb4a.jpg",
      price: "$12.30",
    },
    {
      title: "Non-Coffee",
      image:
        "https://i.pinimg.com/736x/96/ee/d9/96eed9822024adfcf31109821b87ab2d.jpg",
      price: "$12.30",
    },
    {
      title: "Dessert",
      image:
        "https://i.pinimg.com/736x/8c/3f/a4/8c3fa4a775c6c64ae8438119fcf278e0.jpg",
      price: "$12.30",
    },
    {
      title: "Cake",
      image:
        "https://i.pinimg.com/736x/b3/0a/8f/b30a8f1a86aac9d34887a876b8f2e55b.jpg",
      price: "$12.30",
    },
  ],
};

export const itemsCoffee = [
  {
    americano: {
      name: "Americano",
      image:
        "https://i.pinimg.com/736x/75/ff/4b/75ff4bd9c9368c0b27f80988026bdb4a.jpg",
      choice: ["Hot Coffee", "Cold Coffee"],
      size: ["Short", "Tall", "Grande"],
      toppings: [
        {
          name: "Brown Sugar",
          image:
            "https://i.pinimg.com/736x/75/ff/4b/75ff4bd9c9368c0b27f80988026bdb4a.jpg",
          price: "$12.50",
        },
        {
          name: "Vanilla",
          image:
            "https://i.pinimg.com/736x/75/ff/4b/75ff4bd9c9368c0b27f80988026bdb4a.jpg",
          price: "$12.50",
        },
        {
          name: "Cream",
          image:
            "https://i.pinimg.com/736x/75/ff/4b/75ff4bd9c9368c0b27f80988026bdb4a.jpg",
          price: "$12.50",
        },
      ],
    },
    ecaffèmacchiato: {
      name: "Caffè Macchiato",
      image:
        "https://i.pinimg.com/736x/75/ff/4b/75ff4bd9c9368c0b27f80988026bdb4a.jpg",
      choice: ["Hot Coffee", "Cold Coffee"],
      size: ["Short", "Tall", "Grande"],
      toppings: [
        {
          name: "Brown Sugar",
          image:
            "https://i.pinimg.com/736x/75/ff/4b/75ff4bd9c9368c0b27f80988026bdb4a.jpg",
          price: "$12.50",
        },
        {
          name: "Vanilla",
          image:
            "https://i.pinimg.com/736x/75/ff/4b/75ff4bd9c9368c0b27f80988026bdb4a.jpg",
          price: "$12.50",
        },
        {
          name: "Cream",
          image:
            "https://i.pinimg.com/736x/75/ff/4b/75ff4bd9c9368c0b27f80988026bdb4a.jpg",
          price: "$12.50",
        },
      ],
    },
    latte: {
      name: "Latte",
      image:
        "https://i.pinimg.com/736x/75/ff/4b/75ff4bd9c9368c0b27f80988026bdb4a.jpg",
      choice: ["Hot Coffee", "Cold Coffee"],
      size: ["Short", "Tall", "Grande"],
      toppings: [
        {
          name: "Brown Sugar",
          image:
            "https://i.pinimg.com/736x/75/ff/4b/75ff4bd9c9368c0b27f80988026bdb4a.jpg",
          price: "$12.50",
        },
        {
          name: "Vanilla",
          image:
            "https://i.pinimg.com/736x/75/ff/4b/75ff4bd9c9368c0b27f80988026bdb4a.jpg",
          price: "$12.50",
        },
        {
          name: "Cream",
          image:
            "https://i.pinimg.com/736x/75/ff/4b/75ff4bd9c9368c0b27f80988026bdb4a.jpg",
          price: "$12.50",
        },
      ],
    },
    cappucciono: {
      name: "Cappucciono",
      image:
        "https://i.pinimg.com/736x/75/ff/4b/75ff4bd9c9368c0b27f80988026bdb4a.jpg",
      choice: ["Hot Coffee", "Cold Coffee"],
      size: ["Short", "Tall", "Grande"],
      toppings: [
        {
          name: "Brown Sugar",
          image:
            "https://i.pinimg.com/736x/75/ff/4b/75ff4bd9c9368c0b27f80988026bdb4a.jpg",
          price: "$12.50",
        },
        {
          name: "Vanilla",
          image:
            "https://i.pinimg.com/736x/75/ff/4b/75ff4bd9c9368c0b27f80988026bdb4a.jpg",
          price: "$12.50",
        },
        {
          name: "Cream",
          image:
            "https://i.pinimg.com/736x/75/ff/4b/75ff4bd9c9368c0b27f80988026bdb4a.jpg",
          price: "$12.50",
        },
      ],
    },
  },
];
