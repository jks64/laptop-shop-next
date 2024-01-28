import Hero from '@/components/Hero';
import ProductList from '@/components/ProductList';
import Image from 'next/image';

export default function Home() {
  return (
    <article>
      <Hero />
      <ProductList />
    </article>
  );
}
