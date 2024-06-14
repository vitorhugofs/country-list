import { Country } from "@/interface/api"

export default function CountryDetail({ country }: { country: Country }) {
    return (
        <div>
            <img className="c-detail__image" src={country.flags.svg || country.flags.png} alt={country.flags.alt} />
            <h2>{country.name.common}</h2>

            <p>Native Name:</p> <span>{country.name.official}</span>
            <p>Population:</p> <span>{country.population}</span>
            <p>Population:</p> <span>{country.population}</span>
            <p>Region:</p> <span>{country.region}</span>
            <p>Sub Region:</p> <span>{country.subregion}</span>
            <p>Capital:</p> <span>{country.capital}</span>

            <p>Top Level Domain:</p> <span>{country.tld[0]}</span>
            <p>Currencies:</p> { Object.keys(country.currencies).map((key, index) => {
                return <span key={index}>{ country.currencies[key].name + (index === Object.keys(country.currencies).length - 1 ? '' : ', ')}</span>}) }

            <p>Languages:</p> { Object.keys(country.languages).map((key, index) => {
                return <span key={index}>{ country.languages[key] + (index === Object.keys(country.languages).length - 1 ? '' : ', ')}</span>}) }
        </div>
    )
}