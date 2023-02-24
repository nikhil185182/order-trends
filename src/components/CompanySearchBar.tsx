import React, { useState } from 'react';
import { company } from '../shared/dto/companyLevelOrderDTO';
import { useAppSelector } from '../shared/utils/redux/hooks';
import { CompanySelector } from '../shared/utils/redux/selectors/companySelector';




const AutocompleteExample = () => {


    const options: company[] = useAppSelector(CompanySelector)
    console.log(options)

  const [inputValue, setInputValue] = useState('');
  const [selectedOption, setSelectedOption] = useState<company | null>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleOptionSelected = (option: company | null) => {
    setSelectedOption(option);
  };

  const filteredOptions = options.filter((option) =>
    option.CompanyName.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <ul>
        {filteredOptions.map((option) => (
          <li key={option.CompanyName.toString()} onClick={() => handleOptionSelected(option)}>
            {option.CompanyName}
          </li>
        ))}
      </ul>
      {selectedOption && <p>Selected option: {selectedOption.CompanyName}</p>}
    </div>
  );
};

export default AutocompleteExample;


  