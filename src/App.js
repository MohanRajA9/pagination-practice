import './App.css';
import { useState, useEffect } from 'react';
import Home from "./components/Home"
import axios from 'axios';
import Pagination from './components/Pagination';

function App() {

  const [data, setData] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [recordPerPage] = useState(10)

  
  useEffect(() => {
    axios.get("data.json")
      .then(res => setData(res.data))
      .catch(e => { console.error(e) })
  }, [])

  const lastIndex = currentPage * recordPerPage
  const firstIndex = lastIndex - recordPerPage
  const records = data.slice(firstIndex,lastIndex)
  const npages = Math.ceil(data.length/recordPerPage)

  return (
    <div className="App">
      <h3>Pagination</h3>
      <Home data={records} />
      <Pagination npages = {npages} 
      currentPage = {currentPage}
      setCurrentPage= {setCurrentPage} 
      />
    </div>
  );
}

export default App;
