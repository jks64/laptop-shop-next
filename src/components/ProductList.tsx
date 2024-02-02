// pages/index.js
import FilteredLaptopsComponent from '@/data/FilteredLaptops';
import fetchLaptops from '@/data/Laptops';
import SideBar from './SideBar';
import ProductCard from './ProductCard';
import { useState, useEffect } from 'react';

export default function ProductList() {
  return (
    <div className="flex items-center flex-col">
      <h1 className="font-semibold text-3xl pt-10 pb-4">Каталог Товару</h1>
      <div className="flex items-center flex-row">
        <SideBar />
        <div className="mr-44">
          <FilteredLaptopsComponent />
        </div>
      </div>
    </div>
  );
}
