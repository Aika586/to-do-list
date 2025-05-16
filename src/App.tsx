import { Text,Button,Icon } from "@chakra-ui/react"
import { RiAddLargeLine } from "react-icons/ri";
function App() {


  return (
    <>
   <Text color="fg.inputText" fontSize={'4xl'}>Hello</Text>
   <Button variant='solid' size="sm"  boxShadow="0 4px 4px rgba(0, 0, 0, 0.25)"><Icon as={RiAddLargeLine} boxSize='7' /></Button>
   
  
        
    </>
  )
}

export default App
 