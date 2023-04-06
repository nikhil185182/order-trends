import React, { useState } from 'react';

import { company } from "../../shared/dto/companyLevelOrderDTO";
import { useAppSelector } from "../../shared/utils/redux/selectors/hooks";

import { CompanySelector } from "../../containers/CompanyOrderTrend/selector";
import { Container } from '@mui/material';


function AutocompleteSearch() {

    const dataArray: company[] = useAppSelector(CompanySelector) || [
        { CompanyName: "Options are loading" },
      ];
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState<company[]>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchTerm(value);

    const filteredData = dataArray.filter((data) =>
      data.CompanyName.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(filteredData);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <Container>
        {suggestions.map((suggestion) => (
          <div key={suggestion.CompanyName}>{suggestion.CompanyName}</div>
        ))}
      </Container>
    </div>
  );
}

export default AutocompleteSearch;
