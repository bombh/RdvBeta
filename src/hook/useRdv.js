import { useState, useEffect } from "react"
import axios from "axios"

// import { REACT_APP_RAPID_API_KEY, REACT_APP_RAPID_API_HOST } from '@env'
// const apiKey = REACT_APP_RAPID_API_KEY

const baseUrl = 'https://devfr.rendez-vous.be/scripts/api/v3_react/mobile.cfc'

// method: 'GET | POST | PUT | DELETE'
// endpoint: mobile.cfc method
// query: endpoint params
const useRdv = (method, endpoint, query) => {
   
      const [data, setData] = useState([])
      const [isLoading, setIsLoading] = useState(false)
      const [error, setError] = useState(null)
   
      const options = {
         url: baseUrl,
         method: method,
         headers: { },
         params: {
            method: endpoint,
            ...query,
         },
      }

      const fetchData = async () => {
         setIsLoading(true)
         setError(null)
         
         try {
            const response = await axios.request(options)
            setData(response.data)
            console.log(endpoint, '\n', options, '\n', response.data.profile)
            
            setIsLoading(false)
   
         } catch (error) {
            setError(error)
            //console.log('RAPIDAPI in useFetch', error)
         } finally {
            setIsLoading(false)
         }
      }

      useEffect( () => {
         fetchData()
      }, []);

      const refetch = () => {
         setIsLoading(true)
         fetchData()
      }

      return { data, isLoading, error, refetch };
}

export default useRdv