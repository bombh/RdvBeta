import { Redirect, useRouter } from 'expo-router';

const App = () => {
   const isLogged = true

   //return <Redirect href="/(root)/auth/home/" />

   // if(isLogged) {
   //    return <Redirect href="/(auth)/home" />
   // }

   return <Redirect href="/auth/home" />
}

export default App
