const app = Vue.createApp({
  data() {
    return {
      cart: 0,
      id: null,
      product: "Socks",
      brand: "Vue Mastery",
      description: "A pair of warm, fuzzy socks",
      image: "./assets/images/socks_green.jpg",
      inStock: true,
      inventory: 10,
      details: ["80% cotton", "20% polyester", "Gender-neutral"],
      variants: [
        {
          id: 2234,
          color: "green",
          image: "./assets/images/socks_green.jpg",
          quantity: 30,
        },
        {
          id: 2235,
          color: "blue",
          image: "./assets/images/socks_blue.jpg",
          quantity: 10,
        },
      ],
      url: "https://www.vuemastery.com/courses",
    };
  },
  methods: {
    addToCart() {
      if (this.inStock) {
        this.cart += 1;
        this.inventory -= 1;
      }
    },
    updateProduct(id, image, quantity) {
      this.id = id;
      this.image = image;
      quantity > 0 ? (this.inStock = true) : (this.inStock = false);
      this.inventory = quantity;
    },
  },
  computed: {
    title() {
      return this.brand + " " + this.product;
    },
  },
});

app.mount("#app");
