import Image from 'next/image';
import { CustomFilter, Hero, Searchbar } from '@/components';

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-X padding-Y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalouge</h1>
          <p>Explore the cars you might like</p>
          <div className="home__filters">
            <Searchbar />
            <div className="home__filter-container">
              <CustomFilter title="fuel" />
              <CustomFilter title="year" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
