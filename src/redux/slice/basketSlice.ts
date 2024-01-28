import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  isBasketOpen: false,
};

const basketSlice = createSlice({
  name: 'basket',
  initialState: initialState,
  reducers: {
    addBasketState: (state, action: PayloadAction<ProductCardType>) => {
      const productId = action.payload.id;

      if (!state.products.some((product) => product.id === productId)) {
        state.products.push(action.payload);
      }
    },
    deleteBasketState: (state, action: PayloadAction) => {
      // Corrected typo here
      state.products = state.products.filter(
        (productId) => productId.id !== action.payload
      );
    },
    toggleBasket: (state) => {
      state.isBasketOpen = !state.isBasketOpen;
    },
  },
});

export const { addBasketState, deleteBasketState, toggleBasket } =
  basketSlice.actions;

export const selectBasketProducts = (state: { basket }) =>
  state.basket.products; // Corrected typo here

export default basketSlice.reducer;
