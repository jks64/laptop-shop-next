import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  priceSort: '',
  findValue: '',
  selectedBrands: [],
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialState,
  reducers: {
    updateFindValue: (state, action: PayloadAction<string>) => {
      state.findValue = action.payload;
    },
    updatePriceSortValue: (state, action: PayloadAction<string>) => {
      state.priceSort = action.payload;
    },
    updateBrandValue: (state, action: PayloadAction<>) => {
      const eventTarget = action.payload;
  
      const newSelectedBrands = eventTarget.checked
        ? [...state.selectedBrands, eventTarget.value]
        : state.selectedBrands.filter((brand) => brand !== eventTarget.value);
      return {
        ...state,
        selectedBrands: newSelectedBrands,
      };
    },
  },
});

export const { updateFindValue, updatePriceSortValue, updateBrandValue } =
  filterSlice.actions;

export const selectFindValue = (state: { filter }) => state.filter.findValue;
export const selectPriceSortvalue = (state: { filter }) =>
  state.filter.priceSort;
export const selectBrandValue = (state: { filter }) =>
  state.filter.selectedBrands;

export default filterSlice.reducer;
