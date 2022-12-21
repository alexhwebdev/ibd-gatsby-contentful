import React, { createContext, useMemo, useState } from 'react';

const SearchModalContext = createContext();

const SearchModalContextProvider = ({ children }) => {
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  // 'useMemo() used here so that it will render whenever the dependency changes'
  const initialValue = useMemo(
    () => ({
      isSearchModalOpen,
      openSearchModal: () => {
        setIsSearchModalOpen(true);
      },
      closeSearchModal: () => {
        setIsSearchModalOpen(false);
      },
    }),
    [isSearchModalOpen]
  );

  return (
    <SearchModalContext.Provider value={initialValue}>
      {children}
    </SearchModalContext.Provider>
  );
};

export { SearchModalContext, SearchModalContextProvider };