import React from "react";
import CharacterCard from "./CharacterCard";

const App = props => {
    const styles = {
        display: "grid",
        gridGap: "20px",
        gridTemplateColumns: "repeat( auto-fill, minmax(250px, 1fr) )",
        gridTemplateRows: "auto"
    };

    return (
        <div style={styles}>
            {props.myCharacters &&
                props.myCharacters.map(character => {
                    return <CharacterCard {...character} />;
                })}
        </div>
    );
};

export default App;
