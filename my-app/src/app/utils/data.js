export const products = {
  home: [
    {
      title: "Coffee",
      image:
        "https://i.pinimg.com/736x/75/ff/4b/75ff4bd9c9368c0b27f80988026bdb4a.jpg",
    },
    {
      title: "Non-Coffee",
      image:
        "https://i.pinimg.com/736x/96/ee/d9/96eed9822024adfcf31109821b87ab2d.jpg",
    },
    {
      title: "Dessert",
      image:
        "https://i.pinimg.com/736x/8c/3f/a4/8c3fa4a775c6c64ae8438119fcf278e0.jpg",
    },
    {
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
      caffèmacchiato: [
        {
          name: "Caffè Macchiato",
          image:
            "https://i.pinimg.com/736x/75/ff/4b/75ff4bd9c9368c0b27f80988026bdb4a.jpg",
          choice: ["Hot Coffee", "Cold Coffee"],
          size: ["Short", "Tall", "Grande"],
          toppings: [
            {
              name: "Brown Sugar",
              price: "$12.50",
            },
            {
              name: "Vanilla",
              price: "$12.50",
            },
            {
              name: "Cream",
              price: "$12.50",
            },
          ],
        },
      ],
    },
    {
      title: "Latte",
      image:
        "https://i.pinimg.com/736x/8c/3f/a4/8c3fa4a775c6c64ae8438119fcf278e0.jpg",
      price: "$12.30",
      latte: [
        {
          name: "Latte",
          image:
            "https://i.pinimg.com/736x/75/ff/4b/75ff4bd9c9368c0b27f80988026bdb4a.jpg",
          choice: ["Hot Coffee", "Cold Coffee"],
          size: ["Short", "Tall", "Grande"],
          toppings: [
            {
              name: "Brown Sugar",
              price: "$12.50",
            },
            {
              name: "Vanilla",
              price: "$12.50",
            },
            {
              name: "Cream",
              price: "$12.50",
            },
          ],
        },
      ],
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
              price: "$12.50",
            },
            {
              name: "Vanilla",
              price: "$12.50",
            },
            {
              name: "Cream",
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

export const items = [
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
          price: "$12.50",
        },
        {
          name: "Vanilla",
          price: "$12.50",
        },
        {
          name: "Cream",
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
          price: "$12.50",
        },
        {
          name: "Vanilla",
          price: "$12.50",
        },
        {
          name: "Cream",
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
          price: "$12.50",
        },
        {
          name: "Vanilla",
          price: "$12.50",
        },
        {
          name: "Cream",
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
          price: "$12.50",
        },
        {
          name: "Vanilla",
          price: "$12.50",
        },
        {
          name: "Cream",
          price: "$12.50",
        },
      ],
    },
  },
];

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
    slug: "cake",
    name: "Cake",
  },
  //   {
  //     slug: "order",
  //     name: "My Order",
  //   },
];
