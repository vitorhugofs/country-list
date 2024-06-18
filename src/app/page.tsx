'use client';

import CountriesList from "@/components/countries-list";
import { Country } from "../interface/api";
import { useEffect, useState } from "react";

export default function Home() {

  const [countriesList, setCountriesList] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      if (!loading) {
          return;
      }

      fetch(`https://restcountries.com/v3.1/all?fields=name,flags,capital,region,population`)
      .then((res) => res.json())
      .then((data: Country[]) => {
          setCountriesList(data);
          setLoading(false);
      });
  })

  return (
    <main className="flex min-h-screen flex-col items-center p-4 text-very-dark-blue bg-very-light-gray dark:bg-dark-blue dark:text-white">
      {countriesList.length > 0 && <CountriesList countriesList={countriesList} />}
    </main>
  );
}
