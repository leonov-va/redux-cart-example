import * as constans from "../constants/products";

const initialState = {
  items: [
    { id: "#1", name: "iPad 4 Mini", price: 500, count: 0 },
    { id: "#2", name: "H&M T-Shirt White", price: 10, count: 0 },
    { id: "#3", name: "Charli XCX - Sucker CD", price: 699, count: 0 },
  ],
};

export default function productReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case constans.ADD_PRODUCT:
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === payload.id) {
            return {
              ...item,
              count: item.count + 1,
            };
          }

          return item;
        }),
      };
    case constans.REMOVE_PRODUCT:
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === payload.id) {
            return {
              ...item,
              count: item.count - 1,
            };
          }

          return item;
        }),
      };
    default:
      return state;
  }
}
