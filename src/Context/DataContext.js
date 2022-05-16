import React, { createContext, useState } from "react";

const DataContext = createContext();

const DataProvider = ({ children }) => {
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [isError, setError] = useState(null);

    return (
        <DataContext.Provider value={{ data, setData, isLoading, setLoading, isError, setError }}>
            {children}
        </DataContext.Provider>
    )
}

export { DataContext, DataProvider };