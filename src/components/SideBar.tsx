'use client';
import {
  updateFindValue,
  selectFindValue,
  updatePriceSortValue,
  selectPriceSortvalue,
  selectBrandValue,
  updateBrandValue,
} from '@/redux/slice/filterSlice';
import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/joy';

import { useDispatch, useSelector } from 'react-redux';
// import { updateFindValue, selectFindValue } from
// import { FormControl, Radio, RadioGroup } from '@mui/joy';
import {
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from '@mui/material';
import { laptopBrands } from '@/data/laptopBrands';
import fetchLaptops from '@/data/Laptops';

function SideBar() {
  const dispatch = useDispatch();
  const findValue = useSelector(selectFindValue);
  const sortValue = useSelector(selectPriceSortvalue);
  const brandValue = useSelector(selectBrandValue);
  const handleInputChange = (event) => {
    const newValue = event.target.value;
    dispatch(updateFindValue(newValue));
  };
  const handleSortChange = (event) => {
    const newSortValue = event.target.value;
    dispatch(updatePriceSortValue(newSortValue));
  };
  const handleBrandChange = (event) => {
    const { value, checked } = event.target;
    dispatch(updateBrandValue(event.target));
  };

  const [laptops, setLaptops] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedLaptops = await fetchLaptops();
      setLaptops(fetchedLaptops);
    };

    fetchData();
  }, []);
  const brandCounts = laptopBrands.reduce((counts, brand) => {
    counts[brand] = laptops.filter((product) => product.brand === brand).length;
    return counts;
  }, {});
  const filteredBrands = laptopBrands.filter((brand) => brandCounts[brand] > 0);

  return (
    <div className="flex flex-row justify-center items-center p-4 bg-gray-100 rounded-lg shadow-md space-x-4">
      <div className="flex flex-col items-center ">
        <label htmlFor="sortSelector" className="font-semibold">
          Сортування
        </label>
        <select
          className="bg-white border border-gray-300 rounded-md text-gray-700 h-10 pl-3 pr-6 text-base focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          id="sortSelector"
          name="sortOrder"
          value={sortValue}
          onChange={handleSortChange}
        >
          <option value="to-up">Від дешевих до дорогих</option>
          <option value="to-down">Від дорогих до дешевих</option>
        </select>
      </div>
      <div className="flex flex-col items-center ">
        <label htmlFor="findSelector" className="font-semibold">
          Пошук
        </label>
        <input
          className=" bg-white border border-gray-300 rounded-md text-gray-700 h-10 pl-3 pr-6 text-base focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Поиск"
          id="findSelector"
          type="text"
          value={findValue}
          onChange={handleInputChange}
        />
      </div>
      <div className="flex flex-col absolute left-5 top-[120%]">
        <label className="font-semibold mb-2">Производитель</label>

        <FormControl className="bg-white border border-gray-300 rounded-md text-gray-700">
          <FormGroup className="bg-gray-100 w-48 p-4 border border-gray-300 rounded-md text-gray-700 text-xl">
            <FormControlLabel
              value="all"
              control={<Checkbox checked={brandValue.includes('all')} />}
              label={
                <Typography
                  className="text-lg"
                  variant="body1"
                  color="textPrimary"
                >
                  Все
                </Typography>
              }
              onChange={(event) => handleBrandChange(event)}
            />
            {filteredBrands.map((brand) => (
              <FormControlLabel
                key={brand}
                value={brand}
                control={<Checkbox checked={brandValue.includes(brand)} />}
                label={
                  <Typography
                    className="text-lg"
                    variant="body1"
                    color="textPrimary"
                  >
                    {brand}
                  </Typography>
                }
                onChange={(event) => handleBrandChange(event)}
              />
            ))}
          </FormGroup>
        </FormControl>
      </div>
    </div>
  );
}
export default SideBar;
