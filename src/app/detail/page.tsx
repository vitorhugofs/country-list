'use client';
import CountryDetail from "@/components/country-detail";
import { Country } from "@/interface/api";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";

export default function DetailPage() {
    const params = useSearchParams();

    const [country, setCountry] = useState<Country | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!loading) {
            return;
        }

        const countryName = params.get('country') || '';

        if (!countryName) {
            window.location.href = '/';
            return
        }

        fetch(`https://restcountries.com/v3.1/name/${countryName}`)
        .then((res) => res.json())
        .then((data: Country[]) => {
            setCountry(data[0]);
            setLoading(false);
        }).catch((err) => {
            // navigate back to home
            window.location.href = '/';
        });
    })

    return (
        <main className="flex min-h-screen flex-col items-center p-8 text-very-dark-blue bg-very-light-gray dark:bg-dark-blue dark:text-white">
            <div className="flex items-start max-w-[1366px] w-full mb-16">
                <Link href="/">
                    <button className="flex gap-2 bg-white rounded shadow shadow-very-dark-blue/50 dark:bg-blue dark:text-white px-4 py-2">
                    <div className="w-6 h-6 bg-back dark:bg-back-dark"></div>
                      Back
                    </button>
                </Link>
            </div>
            { country && <CountryDetail country={country} /> }
        </main>
    );
}