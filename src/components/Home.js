import { useContext, useState } from 'react'
import CountryList from './CountryList'
import SelectOption from './SelectOption'
import SearchBar from './SearchBar'
import { ThemeContext } from '../context/ThemeContext'

export default function Home() {
  const [query, setQuery] = useState('')

  const [isDark] = useContext(ThemeContext)
  return (
    <main className={`${isDark ? 'dark' : ''}`}>
      <div className="search-filter-container">
        <SearchBar setQuery={setQuery} />
        <SelectOption setQuery={setQuery} />
      </div>
      <CountryList query={query} />
    </main>
  )
}
