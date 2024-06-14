import CountriesList from "@/components/countries-list";
import { Country } from "../interface/api";

async function getCountriesList(): Promise<Country[]> {
  const res = await fetch("https://restcountries.com/v3.1/all?fields=name,flags,capital,region,population");
  
  return res.json();  
}


export default async function Home() {
  const countriesList = await getCountriesList() || [];

  return (
    <main className="flex min-h-screen flex-col items-start p-24">
      <CountriesList countriesList={countriesList} />
    </main>
  );
}
