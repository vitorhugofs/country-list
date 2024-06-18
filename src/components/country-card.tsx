import { Country } from "@/interface/api";
import Link from "next/link";

export default function CountryCard({ country }: { country: Country }) {
    return (
        <Link href={`/detail?country=${country.name.common.toLowerCase().replace(/\s/g, '%20')}`}>
            <div key={country.name.common} className="w-full min-w-[265px] min-h-[382px] md:max-w-[260px] lg:max-w-[290px] bg-white dark:bg-blue rounded shadow shadow-very-dark-blue/50">
                <img className="rounded-t " src={country.flags.svg || country.flags.png } alt={country.flags.alt} />
                <div className="p-6 pb-12 text-sm">
                    <h2 className="text-lg font-bold mb-4">{country.name.common}</h2> 
                    <div className="flex">
                        <p className="font-bold mb-1">Capital:&nbsp;</p> <span>{country.capital}</span> 
                    </div>
                    <div className="flex">
                        <p className="font-bold mb-1">Region:&nbsp;</p>  <span>{country.region}</span>                         
                    </div>
                    <div className="flex">
                        <p className="font-bold mb-1">Population:&nbsp;</p>  <span>{country.population}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
}