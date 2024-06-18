
'use client';

import { Country } from "@/interface/api";
import { useState } from "react";
import CountryCard from "./country-card";

export default function CountriesList({ countriesList }: { countriesList: Country[] }) {
    const [ filteredCountriesList, setFilteredCountriesList ] = useState(countriesList);
    // create string array of regions keeping only unique values
    const regions = countriesList.map<string>((country: Country) => country.region);

    const regionsFiltered = regions.filter((element, index) => {
        return regions.indexOf(element) === index;
    });

    const handleSearch = (name: string) => {
        // add delay to filter
        const timeout = setTimeout(() => {
            setFilteredCountriesList(countriesList.filter((country: any) => country.name.common.toLowerCase().includes(name.toLowerCase())));
            clearTimeout(timeout);
        }, 200);
    }

    const handleRegionSearch = (option: string) => {
        if (option === 'none') {
            setFilteredCountriesList(countriesList);
            return;
        };

        setFilteredCountriesList(countriesList.filter((country: any) => country.region.includes(option)));
    }
   
    return (
        <div className="max-w-[1366px]">
            <form className="flex flex-col md:flex-row md:justify-between w-full justify-center gap-4 mb-8">
                <input
                type="text"
                placeholder="Search for a country..."
                className="w-full md:w-[480px] rounded placeholder:text-very-dark-blue dark:placeholder:text-white bg-white shadow 
                shadow-very-dark-blue/50 dark:bg-blue dark:text-white p-2 pl-4 focus:outline-none"
                onChange={(e) => handleSearch(e.target.value)}
                />

                <select className="w-48 rounded bg-white shadow shadow-very-dark-blue/50 dark:bg-blue dark:text-white p-2 focus:outline-none" onChange={(e) => handleRegionSearch(e.target.value)}>
                    <option className="rounded-t " value="none">Select Region</option>
                    {regionsFiltered.map((region: string) => <option key={region} value={region}>{region}</option>)}
                </select>
            </form>
            <div className="flex flex-wrap justify-center lg:justify-between gap-12">
                {filteredCountriesList.length === 0 ? <p>No countries found</p> : null}
                {filteredCountriesList?.map((country: Country) => (
                    <CountryCard key={country.name.common} country={country} />
                ))}
            </div>
        </div>
    )
}