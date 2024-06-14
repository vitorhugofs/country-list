import { Country } from "@/interface/api";
import Link from "next/link";

export default function CountryCard({ country }: { country: Country }) {
    return (
        <Link href={`/detail?country=${country.name.common.toLowerCase().replace(/\s/g, '%20')}`}>
            <div key={country.name.common} className="">
                <img src={country.flags.svg || country.flags.png } alt={country.flags.alt} />
                <h2>{country.name.common}</h2>
                <p>Capital: {country.capital}</p>
                <p>Region: {country.region}</p>
                <p>Population: {country.population}</p>
            </div>
        </Link>
    );
}