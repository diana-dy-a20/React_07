export default {
  pages: {
    home: "/",
    shop: {
      index: "/products",
      byCategory: ":category",
    },
    rules: "/rules",
    contacts: "/contacts",
  },
  navigate: {
    home: "/",
    shop: {
      list: "/products",
      getCategoryProducts: (category) => `/products/${category}`,
    },
    rules: "/rules",
    contacts: "/contacts",
  },
}
