import { Redirect, useRouter } from 'expo-router';
import ChooseLanguage from "./(public)/chooseLanguage";
import Home from './auth/home';


const App = () => {
   const router = useRouter()
   const isLogged = false

   if(isLogged) {
      return <Home />
   }

   return <ChooseLanguage />
}

export default App
