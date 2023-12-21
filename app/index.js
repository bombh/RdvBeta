import { Redirect, useRouter } from 'expo-router';
import ChooseLanguage from "./(public)/chooseLanguage";
import Home from './auth/home';


const App = () => {
   const router = useRouter()
   const isLogged = false

   if(isLogged) {
      return <Redirect href="/auth/home" />
   }

   return <Redirect href="/chooseLanguage" />
}

export default App
