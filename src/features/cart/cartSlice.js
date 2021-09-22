import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  total: 0,
  grandTotal: {
    total: 0,
    shipping: '50.00',
    vat: 0,
    grandTotal: 0,
  },
  openCartModal: false,
  openOrderModal: false,
};

const calcTotal = (items) => {
  return items.reduce((sum, item) => {
    const totalPrice = item.price * item.amount;

    return sum + totalPrice;
  }, 0);
};

const calcGrandTotal = (items) => {
  const total = calcTotal(items);
  let vat = total * 0.2;
  let v = vat + total;
  let gt = v + vat;

  vat = (Math.round(vat * 100) / 100).toFixed(2);
  v = (Math.round(v * 100) / 100).toFixed(2);
  gt = (Math.round(gt * 100) / 100).toFixed(2);

  return {
    total: v,
    shipping: '50.00',
    vat: vat,
    grandTotal: gt,
  };
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCart: (state, action) => {
      const itemExist = state.items.some(
        (item) => item.id === action.payload.item.id
      );

      if (itemExist) {
        state.items = state.items.map((item) => {
          return { ...item, amount: item.amount + action.payload.item.amount };
        });
      } else {
        state.items = [...state.items, action.payload.item];
      }
      state.total = calcTotal(state.items);
      state.grandTotal = calcGrandTotal(state.items);
    },

    setAmount: (state, action) => {
      state.items = state.items.map((item) => {
        if (item.id === action.payload.id) {
          if (item.amount > 0)
            return { ...item, amount: item.amount + action.payload.amount };
        }

        return item;
      });

      state.items = state.items.filter((item) => item.amount > 0);

      state.total = calcTotal(state.items);
      state.grandTotal = calcGrandTotal(state.items);
    },

    removeAll: (state) => {
      state.items = [];
      state.total = 0;
    },

    setCartModal: (state, action) => {
      state.openCartModal = action.payload;
    },

    setOrderModal: (state, action) => {
      state.openOrderModal = action.payload;
    },
  },
});

export const { setCart, setCartModal, setOrderModal, setAmount, removeAll } =
  cartSlice.actions;

export const selectCartItems = (state) => state.cart.items;
export const selectCartModal = (state) => state.cart.openCartModal;
export const selectOrderModal = (state) => state.cart.openOrderModal;
export const selectTotal = (state) => state.cart.total;
export const selectGrandTotal = (state) => state.cart.grandTotal;

export default cartSlice.reducer;
