'use client';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  selectBrandValue,
  selectFindValue,
  selectPriceSortvalue,
} from '@/redux/slice/filterSlice';
import ProductCard from '@/components/ProductCard';
import axios from 'axios';
import { links } from '../../links/PROD-URLS';
import useSWR from 'swr';

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

function FilteredLaptopsComponent() {
  const [findLaptops, setFindLaptops] = useState([]);
  const [loading, setLoading] = useState(true);
  const findValue = useSelector(selectFindValue);
  const [laptopsState, setLaptopsState] = useState([]);
  const sortValue = useSelector(selectPriceSortvalue);
  const selectedBrands = useSelector(selectBrandValue);

  const { data, error } = useSWR(links.getLaptops, fetcher);

  useEffect(() => {
    if (error) {
      console.error('Error fetching laptops:', error);
      setLoading(false);
      return;
    }

    if (!data) {
      return;
    }
    console.log(data);
    const productListWithImages = data.map((product) => {
      if (typeof product === 'object' && product.hasOwnProperty('images')) {
        const productWithImages = { ...product };
        productWithImages.images = product.images.map((image) => ({
          position: image.imagePosition,
          image: image.imageUrl,
        }));
        return productWithImages;
      }
      return product;
    });

    setLaptopsState(productListWithImages);
    setFindLaptops(productListWithImages);
    setLoading(false);
  }, [data, error]);

  useEffect(() => {
    if (!loading) {
      let filteredLaptops = laptopsState
        .filter((laptop) =>
          laptop.title.toLowerCase().includes(findValue.toLowerCase())
        )
        .slice(); //

      if (selectedBrands.length > 0) {
        filteredLaptops = filteredLaptops.filter(
          (product) =>
            selectedBrands.includes('all') ||
            selectedBrands.includes(product.brand)
        );
      }

      if (sortValue === 'to-up') {
        filteredLaptops.sort((a, b) => a.price - b.price);
      } else if (sortValue === 'to-down') {
        filteredLaptops.sort((a, b) => b.price - a.price);
      }

      setFindLaptops(filteredLaptops);
    }
  }, [findValue, laptopsState, sortValue, selectedBrands]);

  return (
    <div>
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, minmax(0,1fr))',
              gap: '1rem',
              paddingTop: '1.25rem',
            }}
          >
            {findLaptops.length > 0
              ? findLaptops.map((laptop) => (
                  <ProductCard
                    key={laptop.id}
                    title={laptop.title}
                    price={laptop.price}
                    id={laptop.id}
                    images={laptop.images}
                  />
                ))
              : findLaptops.length > 0 && <p>No laptops found.</p>}
          </div>
        )}
      </div>
    </div>
  );
}

export default FilteredLaptopsComponent;
