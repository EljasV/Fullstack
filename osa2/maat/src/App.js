import {useEffect, useState} from "react";
import axios from "axios";

function Countries(props) {
    if (props.filteredCountries.length > 10) {
        return <p>Too many matches, specify another filter</p>
    }
    if (props.filteredCountries.length > 1) {
        const elements = props.filteredCountries.map((item, index) => <li key={item.ccn3}>{item.name.common}
            <button onClick={() => props.onSelectCountry(item.name.common)}>Show</button>
        </li>);
        return <ul>
            {elements}
        </ul>;
    }
    if (props.filteredCountries.length === 1) {
        const country = props.filteredCountries[0]
        const languageElements = Object.values(country.languages).map(value => <li key={value}>{value}</li>)
        return (
            <>
                <h1>{country.name.common}</h1>
                <p>Capital {country.capital[0]}</p>
                <p>Area {country.area}</p>
                <h3>Languages: </h3>
                <ul>
                    {languageElements}
                </ul>
                <img src={country.flags.svg} alt={country.flag.alt}/>
            </>
        )
    }
    return <p>No country found</p>
}

function App() {
    const [searchTerm, setSearchTerm] = useState("")
    const [countries, setCountries] = useState([])

    useEffect(() => {
        axios.get("https://restcountries.com/v3.1/all").then(value => {
            setCountries(value.data)
        })
    }, [])

    const onSelectCountry = name => {
        setSearchTerm(name)
    }


    const filtered = countries.filter(value => {
        return value.name.common.toLowerCase().includes(searchTerm.toLowerCase()) && value.ccn3 !== undefined;
    })

    return (
        <div className="App">
            <form>
                <div>Find countrires: <input value={searchTerm} onChange={event => setSearchTerm(event.target.value)}/>
                </div>
            </form>
            <Countries filteredCountries={filtered} onSelectCountry={onSelectCountry}/>
        </div>
    );
}

export default App;
