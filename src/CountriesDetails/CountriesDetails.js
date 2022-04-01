import React, { useEffect, useState } from 'react';
import { Country, State, City } from 'country-state-city';

const CountriesDetails = () => {
    const [text, setText] = useState('');
    const [datas, setDatas] = useState([]);
    const [suggestions, setSuggestions] = useState([])

    useEffect(() => {
        const countriesDetails = Country.getAllCountries();
        setDatas(countriesDetails);
    }, [])
    // console.log(datas)
    const onChangeHandler = (text) => {
        let matches = [];
        if (text.length > 0) {
            matches = datas.filter(data => {
                const regex = new RegExp(`${text}`, "gi");
                return data.name.match(regex)
            })
        }
        setSuggestions(matches);
        setText(text);
    }
    const onSuggestionsHandeler1=(text)=>{
        setText(text);
        setSuggestions([])
    }
    const onSuggestionsHandeler2=(text)=>{
        setText(text);
        setSuggestions([])
    }
    return (
        <div className='search-field'>
            <div>
                <input type="text" value={text} onChange={e => onChangeHandler(e.target.value)} placeholder="Flight from" />
                {
                    suggestions && suggestions.map((suggestion, i) =>
                        <div key={i} className="suggesion" onClick={()=> onSuggestionsHandeler1(suggestion.name)}>{suggestion.name}</div>
                    )
                }
            </div>
            <div>
                <input type="text" value={text} onChange={e => onChangeHandler(e.target.value)} placeholder="Flight to"/>
                {
                    suggestions && suggestions.map((suggestion, i) =>
                        <div key={i} className="suggesion" 
                        onClick={()=> onSuggestionsHandeler2(suggestion.name)}
                        >{suggestion.name}</div>
                    )
                }
            </div>
        </div>
    );
};

export default CountriesDetails;