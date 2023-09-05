import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import SearchIcon from '@mui/icons-material/Search';

export default function ToggleButtonDisplay() {
  const [toggleValue, setToggleValue] =  React.useState();

  const handleToggleClick = (event) => {   
    setToggleValue(event.target.value);    
    alert(toggleValue);    
  };

  return (
    <ToggleButtonGroup
      color="primary"      
      exclusive
      onChange={handleToggleClick}
      aria-label="Platform"
      value={toggleValue}
    >
        <ToggleButton value="MEL">MEL-SYD</ToggleButton>
        <ToggleButton value="DepDate">14 Nov- 16 Nov</ToggleButton>
        <ToggleButton value="1 Guest">1 Guest</ToggleButton>
        <ToggleButton value="Search"><SearchIcon/></ToggleButton>
    </ToggleButtonGroup>
  );
}
