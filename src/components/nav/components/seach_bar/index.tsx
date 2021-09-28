import React from 'react';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import { Search } from '@components';
import { useSearchBar } from './hooks';

const SearchBar: React.FC<{className?: string, isNetwork?: boolean}> = ({
  className, isNetwork,
}) => {
  const { t } = useTranslation('common');

  const {
    handleOnSubmit,
  } = useSearchBar(t);

  return (
    <Search
      className={classnames(className, { open: isNetwork })}
      placeholder={t('searchBarPlaceholder')}
      callback={handleOnSubmit}
      isNetwork={isNetwork}
    />
  );
};

export default SearchBar;
