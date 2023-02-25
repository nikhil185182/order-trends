import { Delete } from '@mui/icons-material';
import Autocomplete from '@mui/material/Autocomplete/Autocomplete';
import Chip from '@mui/material/Chip/Chip';
import TextField from '@mui/material/TextField/TextField';
import { useState } from 'react';
import { company } from '../shared/dto/companyLevelOrderDTO';
import { useAppSelector } from '../shared/utils/redux/hooks';
import { CompanySelector } from '../shared/utils/redux/selectors/companySelector';




const CompanyAutocomplete = () => {
    const options: company[] = useAppSelector(CompanySelector)||[{CompanyName:"Option 1"}];

    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
    const handleSelect = (_: any, value: string) => {
        setSelectedOptions([...selectedOptions, value]);
      };
      const handleRemove = (option: company) => {
        setSelectedOptions(selectedOptions.filter((o) => o !== option.CompanyName));
      };
            



return(
    <Autocomplete
    multiple
    disablePortal
    options={options}
    getOptionLabel={(option:company)=>option.CompanyName!}
    sx={{ width: 300 }}
    renderTags={(value, getTagProps) =>
        value.map((option, index) => (
          <Chip
            label={option.CompanyName}
            variant="outlined"
            deleteIcon={<Delete />}
            {...getTagProps({ index })}
          />
        ))
      }
    renderInput={(params) => <TextField {...params} label="Select a company" />}
  />
)
}
export default CompanyAutocomplete;


  