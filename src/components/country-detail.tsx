import { Country } from "@/interface/api"

export default function CountryDetail({ country }: { country: Country }) {
    return (
        <div className="flex flex-col md:flex-row md:gap-8 max-w-[1366px] w-full">
            <img className="mb-4 md:w-1/2" src={country.flags.svg || country.flags.png} alt={country.flags.alt} />
            <div className="flex flex-col ">
                <h2 className="text-lg font-bold mb-6">{country.name.common}</h2>

                <div className="flex gap-1 mb-2">
                    <p className="shrink-0 text-sm font-bold">Native Name:</p> <span>{country.name.official}</span>
                </div>

                <div className="flex gap-1 mb-2">
                    <p className="shrink-0 text-sm font-bold">Population:</p> <span>{country.population}</span>
                </div>

                <div className="flex gap-1 mb-2">
                    <p className="shrink-0 text-sm font-bold">Region:</p> <span>{country.region}</span>
                </div>

                <div className="flex gap-1 mb-2">
                    <p className="shrink-0 text-sm font-bold">Sub Region:</p> <span>{country.subregion}</span>
                </div>

                <div className="flex gap-1 mb-8">
                    <p className="shrink-0 text-sm font-bold">Capital:</p> <span>{country.capital}</span>
                </div>


                <div className="flex gap-1 mb-2">
                    <p className="shrink-0 text-sm font-bold">Top Level Domain:</p> <span>{country.tld[0]}</span>
                </div>

                <div className="flex gap-1 mb-2">
                    <p className="shrink-0 text-sm font-bold">Currencies:</p> { Object.keys(country.currencies).map((key, index) => {
                    return <span key={index}>{ country.currencies[key].name + (index === Object.keys(country.currencies).length - 1 ? '' : ', ')}</span>}) }
                </div>

                <div className="flex gap-1">
                <p className="shrink-0 text-sm font-bold">Languages:</p> { Object.keys(country.languages).map((key, index) => {
                    return <span key={index}>{ country.languages[key] + (index === Object.keys(country.languages).length - 1 ? '' : ', ')}</span>}) }

                </div>
            </div>
        </div>
    )
}