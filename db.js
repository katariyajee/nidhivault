const DB = {

  init() {
    if (!localStorage.getItem("nvData")) {
      localStorage.setItem("nvData", JSON.stringify({
        accounts: [],
        transactions: [],
        categories: [],
        subcategories: []
      }));
    }
  },

  get() {
    return JSON.parse(localStorage.getItem("nvData"));
  },

  save(data) {
    localStorage.setItem("nvData", JSON.stringify(data));
  }

};
