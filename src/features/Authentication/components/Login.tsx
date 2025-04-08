import {
  Button,
  Grid,
  GridItem,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FormProvider } from "../../../shared";
import { useForm } from "react-hook-form";
import {
  PasswordInput,
  TextFieldInput,
} from "../../../shared/components/form/input";

export const Login = () => {
  const methods = useForm();
  const onSubmit = (data: object) => {
    console.log(data);
  };
  return (
    <Grid
      templateColumns={"repeat(2,1fr)"}
      placeItems={"center"}
      minH={"100vh"}
    >
      <GridItem bg={"gray.300"} minH={"100vh"} minWidth={"100vh"}>
        <Heading>Logo Part</Heading>
      </GridItem>
      <GridItem placeItems={"center"}>
        <FormProvider methods={methods} onSubmit={onSubmit}>
          <VStack
            align={"stretch"}
            gap={4}
            border={"1px solid black"}
            p={4}
            width={"500px"}
          >
            <Text
              fontSize={"4xl"}
              fontWeight={"bolder"}
              fontFamily={"sans-serif"}
            >
              Welcome To Sitala Bhairav Login{" "}
            </Text>
            <TextFieldInput
              label="Email or Username"
              name="email"
              autoComplete="off"
              required
            />
            <PasswordInput label="Password" name="pass" required />
            <Button type="submit">Login</Button>
          </VStack>
        </FormProvider>
      </GridItem>
    </Grid>
  );
};
