import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

const URL = "http://apis.data.go.kr/3460000";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setError(null);
      setData(null);
      setLoading(true);

      const response = await axios.get(URL, {
        params: {
          serviceKey: process.env.REACT_APP_API_KEY,
          numOfRows: 1,
          pageNo: 10
        }
      });

      setData(response.data);
    } catch(e) {
      setError(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if(loading) return <div>Loading...</div>;
  if(error)   return <div>Error...</div>;
  if(!data)   return null;


}

export default App;