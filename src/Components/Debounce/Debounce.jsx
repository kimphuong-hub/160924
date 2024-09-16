import React, { useState, useCallback } from 'react';
import debounce from 'lodash.debounce';

const data = [
  { id: 1, name: 'Apple' },
  { id: 2, name: 'Banana' },
  { id: 3, name: 'Cherry' },
  { id: 4, name: 'Date' },
  { id: 5, name: 'Elderberry' },
  { id: 6, name: 'Fig' },
  { id: 7, name: 'Grape' },
  { id: 8, name: 'Honeydew' },
];

function SearchComponent() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const search = (query) => {
    setLoading(true);
    setError(null);

    try {
      const filteredResults = data.filter(item =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filteredResults);
    } catch (err) {
      setError('Có lỗi xảy ra khi tìm kiếm.');
    } finally {
      setLoading(false);
    }
  };
  const debouncedSearch = useCallback(
    debounce((query) => search(query), 300),
    []
  );
  const handleChange = (event) => {
    const newQuery = event.target.value;
    setQuery(newQuery);
    debouncedSearch(newQuery);
  };
  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Nhập từ khóa tìm kiếm"
      />
      {loading && <p>Đang tìm kiếm...</p>}
      {error && <p>{error}</p>}
      
      <ul>
        {results.map((result) => (
          <li key={result.id}>{result.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchComponent;
