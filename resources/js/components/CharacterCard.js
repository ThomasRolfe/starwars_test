import React from "react";

const CharacterCard = ({
    name,
    height,
    hair_color,
    skin_color,
    eye_color,
    birth_year,
    gender
}) => {
    const styles = {
        padding: "1rem",
        backgroundColor: "#f1f6ff",
        border: "1px solid #cdcdcd",
        borderRadius: "5px",
        fontFamily: "sans-serif"
    };

    const headerStyle = {
        marginTop: "0px",
        textAlign: "center"
    };

    return (
        <div style={styles}>
            <h1 style={headerStyle}>{name}</h1>
            <table style={{ width: "100%" }}>
                <tbody>
                    <tr>
                        <td>
                            <strong>Height</strong>
                        </td>
                        <td style={{ textAlign: "right" }}>{height}</td>
                    </tr>
                    <tr>
                        <td>
                            <strong>Hair Colour</strong>
                        </td>
                        <td style={{ textAlign: "right" }}>{hair_color}</td>
                    </tr>
                    <tr>
                        <td>
                            <strong>Skin Colour</strong>
                        </td>
                        <td style={{ textAlign: "right" }}>{skin_color}</td>
                    </tr>
                    <tr>
                        <td>
                            <strong>Eye Colour</strong>
                        </td>
                        <td style={{ textAlign: "right" }}>{eye_color}</td>
                    </tr>
                    <tr>
                        <td>
                            <strong>Birth Year</strong>
                        </td>
                        <td style={{ textAlign: "right" }}>{birth_year}</td>
                    </tr>
                    <tr>
                        <td>
                            <strong>Gender</strong>
                        </td>
                        <td style={{ textAlign: "right" }}>{gender}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default CharacterCard;
