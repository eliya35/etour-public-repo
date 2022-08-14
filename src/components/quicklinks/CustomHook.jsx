import React, { useState } from 'react';

const countryArray = [
    { value: '', text: "Open this select menu", },
    { value: 'EGYPT', text: "EGYPT", },
    { value: 'MOROCCO', text: "MOROCCO", },
    { value: 'SOUTH AFRICA', text: "SOUTH AFRICA", },
    { value: 'TUNISIA', text: "TUNISIA", },
    { value: 'ALGERIA', text: "ALGERIA", },
    { value: 'ZIMBABWE', text: "ZIMBABWE", },
    { value: 'MOZAMBIQUE', text: "MOZAMBIQUE", },
    { value: 'IVORY COST', text: "IVORY COST", },
    { value: 'BOSTSWANA', text: "BOSTSWANA", },
    { value: 'USA', text: "USA", },
    { value: 'MEXICO', text: "MEXICO", },
    { value: 'CANADA', text: "CANADA", },
    { value: 'ARGENTINA', text: "ARGENTINA", },
    { value: 'DOMINICAN REPUBLIC', text: "DOMINICAN REPUBLIC", },
    { value: 'BRAZLLE', text: "BRAZLLE", },
    { value: 'CHILE', text: "CHILE", },
    { value: 'PERU', text: "PERU", },
    { value: 'CUBA', text: "CUBA", },
    { value: 'COLOMBIA', text: "COLOMBIA", },
    { value: 'CHINA', text: "CHINA", },
    { value: 'THAILAND', text: "THAILAND", },
    { value: 'JAPAN', text: "JAPAN", },
    { value: 'MALAYSIA', text: "MALAYSIA", },
    { value: 'HONG KONG', text: "HONG KONG", },
    { value: 'MACAU', text: "MACAU", },
    { value: 'VIETNAM', text: "VIETNAM", },
    { value: 'INDONESIA', text: "INDONESIA", },
    { value: 'FRANCE', text: "FRANCE", },
    { value: 'SPAIN', text: "SPAIN", },
    { value: 'ITALY', text: "ITALY", },
    { value: 'TURKEY', text: "TURKEY", },
    { value: 'GERMANY', text: "GERMANY", },
    { value: 'UNITED KINGDOM', text: "UNITED KINGDOM", },
    { value: 'AUSTRALIA', text: "AUSTRALIA", },
    { value: 'GREECE', text: "GREECE", },
    { value: 'PORTUGOL', text: "PORTUGOL", },
    { value: 'RUSSIA', text: "RUSSIA", },
    { value: 'UNITED ARAB EMIRATES', text: "UNITED ARAB EMIRATES", },
    { value: 'LEBANON', text: "LEBANON", },
    { value: 'ISRAEL', text: "ISRAEL", },
    { value: 'JORDAN', text: "JORDAN", },
    { value: 'QATAR', text: "QATAR", },
    { value: 'IRAN', text: "IRAN", },
    { value: 'BAHRAIN', text: "BAHRAIN", },
    { value: 'IRAQ', text: "IRAQ", },
    { value: 'SOUTH KOREA', text: "SOUTH KOREA" }
];

export const useCountry = () => {
    const [country] = useState(countryArray);

    return country;
}