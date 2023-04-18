import * as React from "react";
import {
  Box,
  Input,
  InputAdornment,
  List,
  ListItemButton,
  ListItemText,
  Popover,
  TextField,
  Typography,
} from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";

type Company = {
  value: string;
  label: string;
};

type Props = {
  placeholder: string;
  autoFocus?: boolean;
  data: Company[];
  clearOnSelect?: boolean;
  onSelect: (selected: Company) => void;
  onFocus?: () => void;
  leftIcon?: React.ReactNode;
  iconBoxSize?: string;
  inputHeight?: string;
  dropdownHoverColor?: string;
  onChange?: (value: string) => void;
};

const SearchBox: React.FC<Props> = ({
  placeholder,
  autoFocus = true,
  data,
  clearOnSelect,
  onSelect,
  onFocus,
  leftIcon,
  iconBoxSize = "35px",
  inputHeight = "45px",
  dropdownHoverColor = "rgba(62, 60, 60, 0.2)",
  onChange,
}) => {
  const [value, setValue] = React.useState("");
  const [anchorEl, setAnchorEl] = React.useState<HTMLDivElement | null>(null);

  const handleSelect = (selected: Company) => {
    if (clearOnSelect) {
      setValue("");
    } else {
      setValue(selected.label);
    }
    onSelect(selected);
    setAnchorEl(null);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setValue(newValue);
    onChange?.(newValue);
    setAnchorEl(newValue ? event.currentTarget : null);
  };

  const filteredData = data.filter(
    (item) =>
      item.label.toLowerCase().indexOf(value.toLowerCase()) !== -1 ||
      item.value.toLowerCase().indexOf(value.toLowerCase()) !== -1
  );

  return (
    <Box position="relative">
      <TextField
        placeholder={placeholder}
        value={value}
        onChange={handleInputChange}
        onFocus={onFocus}
        autoFocus={autoFocus}
        fullWidth
        InputProps={{
          startAdornment: leftIcon && (
            <InputAdornment position="start">{leftIcon}</InputAdornment>
          ),
        }}
      />
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
      >
        <Box sx={{ p: 2 }}>
          {filteredData.length > 0 ? (
            <List sx={{ maxHeight: "200px", overflow: "auto" }}>
              {filteredData.map((item) => (
                <ListItemButton
                  key={item.value}
                  onClick={() => handleSelect(item)}
                  sx={{ "&:hover": { background: dropdownHoverColor } }}
                >
                  <ListItemText primary={item.label} />
                </ListItemButton>
              ))}
            </List>
          ) : (
            <Typography>No results found</Typography>
          )}
        </Box>
      </Popover>
    </Box>
  );
};

export default SearchBox;
