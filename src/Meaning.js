import React from "react";
import Synonyms from "./Synonyms.js";

export default function Meaning(props) {
    return (
        <div className="Meaning">
            <h3>{props.meaning.partOfSpeech}</h3>
            <div>
                <p>
                    <strong>Definition:</strong>{props.meaning.definition}
                    <br />
                    <strong>Example:</strong>{props.meaning.example}
                    <br />
                    <strong>Synonyms:</strong>
                    <Synonyms synonyms={props.meaning.synonyms} />
                </p>
            </div>
        </div>
    );
}