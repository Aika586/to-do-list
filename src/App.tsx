import { Box, Heading, Stack, Input} from "@chakra-ui/react";
function App() {
  return (
    <Box maxW="750px" mx="auto" mt="40px" mb="20px">
      <Heading fontSize={"26px"} fontWeight={"medium"} textAlign={"center"}>
        TO DO LIST
      </Heading>
      <Stack>
        <Input/>
      </Stack>
    </Box>
  );
}

export default App;
