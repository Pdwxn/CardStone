import { useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Layout/navbar/NavBar'
import SearchBar from '../components/Layout/navbar/SearchBar'
import Footer from '../components/Layout/footer/Footer'

interface Props {
    query: string;
    setQuery: (query: string) => void;
    suggestions: string[];
    setSuggestions: (suggestions: string[]) => void;
}

function CardDetailPage({ query, setQuery, suggestions }: Props) {
    const [loading, setLoading] = useState<boolean>(false);

    return (
        <>
        <div>
            <Navbar>
                <SearchBar query={query} setQuery={setQuery} suggestions={suggestions} />
            </Navbar>
        </div>
        <div className="ml-14 mr-14">
            <h1 className="mb-12 text-4xl text-slate-50 font-semibold">Card {query}</h1>
            {/* <CardBackList loading={loading} setLoading={setLoading} /> */}
        </div>
        <Footer />
        </>
      )
}

export default CardDetailPage