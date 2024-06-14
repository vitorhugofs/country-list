
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
        <>
            <form className="flex">
                <input
                type="text"
                placeholder="Search for a country..."
                className="w-96 rounded border border-gray-300 p-2"
                onChange={(e) => handleSearch(e.target.value)}
                />

                {/* create a dropdown filter for regions */}
                <select className="w-96 rounded border border-gray-300 p-2" onChange={(e) => handleRegionSearch(e.target.value)}>
                    <option value="none">Select Region</option>
                    {regionsFiltered.map((region: string) => <option key={region} value={region}>{region}</option>)}
                </select>
            </form>
            <div className="grid grid-cols-4 gap-4 p-4">
                {filteredCountriesList.length === 0 ? <p>No countries found</p> : null}
                {filteredCountriesList?.map((country: Country) => (
                    <CountryCard country={country} />
                ))}
            </div>
        </>
    )
}