import React, { useState } from "react";
import axios from "axios";
import Results from "./Results.js";
import "./Dictionary.css";

export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] =useState(false);

    function handleResponse(response) {
        console.log(response.data);
        setResults(response.data);
    }

    function search() {
        let apiKey = "91o0f2f84c841e4a7c38t44e6d3be32a";
        let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();        
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    function load() {
        setLoaded(true);
        search();
    }

    if (loaded) {
        return (
            <div className="Dictionary">
                <section>
                    <h1>What word do you want to look up?</h1>
                    <form onSubmit={handleSubmit}>
                        <input type="search" onChange={handleKeywordChange} defaultValue={props.defaultKeyword}/>
                    </form>
                    <div className="hint">
                        example words: code, yoga, coffee, picture, etc.
                    </div>
                </section>
                <Results results={results} />
            </div>
        );
    } else {
        load();
        return "Loading";
    }
}