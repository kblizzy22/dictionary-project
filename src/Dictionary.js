import React, { useState } from "react";
import axios from "axios";
import Results from "./Results.js";
import Photos from "./Photos.js";
import "./Dictionary.css";

export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);

    function handleDictionResponse(response) {
        setResults(response.data);
    }

    function handleImageResponse(response) {
        setPhotos(response.data.photos);
    }

    function search() {
        let apiKey = "91o0f2f84c841e4a7c38t44e6d3be32a";
        let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
        axios.get(apiUrl).then(handleDictionResponse);

        let imageApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${apiKey}`;
        axios.get(imageApiUrl).then(handleImageResponse);
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
                <Photos photos={photos} />
            </div>
        );
    } else {
        load();
        return "Loading";
    }
}