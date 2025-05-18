import { Text,Button,Icon,Input } from "@chakra-ui/react"
import { RiAddLargeLine } from "react-icons/ri";
import { VscTrash } from "react-icons/vsc";
import SelectStatus from "./components/SelectStatus";
function App() {


  return (
    <>

    <Button variant='ghost' _hover={{color:'red.500'}}><VscTrash/></Button>
    <Input variant={'outline'} mt={'28'} ml={'28'} placeholder="input" width='500px'/>
   <Text color="fg.inputText" fontSize={'4xl'}>Hello</Text>
   <Button variant='solid' size="sm"  boxShadow="0 4px 4px rgba(0, 0, 0, 0.25)"><Icon as={RiAddLargeLine} boxSize='7' /></Button>
   <SelectStatus/>
  
        
    </>
  )
}

export default App
 