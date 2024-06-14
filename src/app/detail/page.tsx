'use client';
import CountryDetail from "@/components/country-detail";
import { Country } from "@/interface/api";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

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
        <main>
            <Link href="/">
                <button> <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg> Back</button>
            </Link>
            { country && <CountryDetail country={country} /> }
        </main>
    );
}