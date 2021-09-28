import React from 'react';
import classnames from 'classnames';
import {
  InputBase, InputAdornment,
} from '@material-ui/core';
import { Search as SearchIcon } from '@material-ui/icons';
import { useStyles } from './styles';
import { useSearch } from './hooks';

const Search: React.FC<{
  className?: string;
  placeholder: string;
  callback: (value: string) => void;
  isNetwork: boolean;
}> = ({
  className,
  placeholder,
  callback,
  isNetwork,
}) => {
  const classes = useStyles();

  const {
    handleOnSubmit,
    handleOnChange,
    handleKeyDown,
    value,
  } = useSearch(callback);

  return (
    <form
      className={classnames(className, classes.root, { open: isNetwork })}
      onSubmit={handleOnSubmit}
    >
      <InputBase
        type="search"
        className={classnames({ open: isNetwork })}
        placeholder={placeholder}
        onChange={handleOnChange}
        onKeyDown={handleKeyDown}
        value={value}
        inputProps={{
				  'aria-label': placeholder,
        }}
        startAdornment={(
          <InputAdornment position="start">
            <SearchIcon fontSize="small" />
          </InputAdornment>
   )}
      />
    </form>
  );
};

export default Search;
