import { Redirect, useRouter } from 'expo-router';
import ChooseLanguage from "./(public)/chooseLanguage";


const App = () => {
   const router = useRouter()
   const isLogged = false

   if(isLogged) {
      return router.replace('/auth/home')
   }

   return <ChooseLanguage />
}

export default App
