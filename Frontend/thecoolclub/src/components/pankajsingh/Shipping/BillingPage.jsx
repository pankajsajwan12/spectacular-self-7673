import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Heading,
  Text,
  Select,
  Checkbox,
  Radio,
  Link
} from "@chakra-ui/react";

import "./shippingPage.css";

const BillingPage = () => {
  const [email, setEmail] = useState(null);
  const handleInputChange = (e) => setEmail(e.target.value);
  const isError = email === "";

  const [password, setPassword] = useState(false);
  const handlePassowrdChange = (e) => setPassword(e.target.value);
  const isPasswordError = password === "";

  const [show, setShow] = useState(false);
  const handleClick = () => setPassword(!show);

  const [firstName , setFirstName] = useState(null);
  const isErrorFirstName = firstName === "";

  const [lastName , setLastName] = useState(null);
  const isErrorLastName = lastName === "";

  const [address, setAddress] = useState(null);
  const isErrorAddress = address === "";

  const [city, setCity] = useState(null);
  const isErrorCity = city === "";

  const [zipCode, setZipCode] = useState(null);
  const isErrorZIP = zipCode === "";

  const [phone, setPhone] = useState(null);
  const isErrorPhone = phone === "";

  const userDetails = [
    {
      user_name:"Pankaj Singh",
      user_address : "Bhojgan laubaj garur bageshwar uttrakhand Bhojgan, KY 39201",
      user_state : "Uttrakhand",
      user_number : "8851505898"
    }
  ]
  return (
    <div>
      <div className="main_shipping_page">
        <div className="shipping_page_slider"></div>
        <div className="shipping_page">
          <div className="shipping_page_right_main">
            <div className="shipping_page_right_main_accordion">
            <h3>BILLING ADDRESS</h3>
                <Box>
                {
                  userDetails.map((item) => (
                    <div>
                      <p>{item.user_name}</p>
                    <p>{item.user_address}</p>
                    <p>{item.user_state}</p>
                    <p>{item.user_number}</p>
                    </div>
                  ))
                }
                </Box> 
            </div>
            <div className="shipping_page_right_main_shippingAddress">
              <Heading textAlign='left'ml="1rem" mt="2.3rem"> CONTACT INFORMATION </Heading>
              <FormControl isInvalid={isErrorFirstName} isRequired>
              <Box display='flex' justifyContent='space-between'>
              <FormLabel marginLeft="0.8rem">Email</FormLabel>
              <FormLabel marginLeft="0.8rem">Required</FormLabel>
              </Box>
                <Input
                  paddingLeft="0.5rem"
                  marginTop="1rem"
                  type="email"
                  value={email}
                //   onChange={handleChange}
                  width="90%"
                  height="30px"
                />
                {!isErrorFirstName ? (
                  <FormHelperText marginLeft="0.8rem">{""}</FormHelperText>
                ) : (
                  <FormErrorMessage marginLeft="0.8rem" color="red">
                    please enter your email
                  </FormErrorMessage>
                )}
              </FormControl>




            

              

             

              

             
                
            </div>
            <div className="shipping_page_right_main_shippingMethod">
            <Accordion defaultIndex={[0]} allowMultiple>
                <AccordionItem>
                  <h2>
                    <AccordionButton
                      backgroundColor="white"
                      border="1px dashed black"
                      cursor="pointer"
                    >
                      <Box flex="1" textAlign="left">
                        <h2> PROMOTION CODE </h2>
                      </Box>
                      <AccordionIcon marginLeft="3rem" />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel>
                    <FormControl  isRequired>
                      <FormLabel marginLeft="0.8rem">Promotion Code</FormLabel>
                      <InputGroup marginTop="1rem" marginLeft="0.8rem">
                        <Input
                          paddingLeft="0.5rem"
                          // pr='4.5rem'
                        //   value={promo}
                        //   onChange={handlePassowrdChange}
                          width="70%"
                          height="30px"
                        />
                        <Button w="18%" h="35px" onClick={handleClick}>
                          APPLY
                        </Button>
                      </InputGroup>

                      <Text fontSize='13px' textAlign='justify'>Only one promotion code can be applied per order. You can submit a different code by entering it in the field above and clicking apply.</Text>
                    </FormControl>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>

            </div>
            <div className="shipping_page_right_main_shippingMethod">
            <Accordion defaultIndex={[0]} allowMultiple>
                <AccordionItem>
                  <h2>
                    <AccordionButton
                      backgroundColor="white"
                      border="1px dashed black"
                      cursor="pointer"
                    >
                      <Box flex="1" textAlign="left">
                        <h2> GIFT CARDS </h2>
                      </Box>
                      <AccordionIcon marginLeft="3rem" />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel>
                    <FormControl  isRequired>
                      <FormLabel marginLeft="0.8rem">Gift Card Number</FormLabel>
                        <Input
                          paddingLeft="0.5rem"
                          // pr='4.5rem'
                        //   value={promo}
                        //   onChange={handlePassowrdChange}
                          width="70%"
                          height="30px"
                        />
                      <FormControl> PIN</FormControl>
                      <Input />
                      
                      <Box display='flex'>
                        <Button> APPLY </Button>
                        <Text> Or</Text>
                        <Text> Check Gift Card Balance</Text>
                      </Box>

                      <Text>Up to 2 Gift Cards can be applied per order.</Text>
                    </FormControl>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>

            </div>

            <div className="payment_method">

            </div>
          </div>



          <div className="shipping_page_left_main">
            <Box>
               <Heading fontWeight='400'> YOUR ORDER</Heading>
            </Box>
            <Box display='flex' className="border_product">
               <Box mt="1rem">
                 <img src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwb15abfdd/hires/026573586.jpg?sw=177&yocs=o_s_" alt="" 
                 className="productImage"/>
               </Box>
               <Box className="img_Div" ml="1rem">
                  <p className="lineHeight lineHeigh_heading">TWISTED PEPPERMINT</p>
                  <p className="lineHeight">Gentle Foaming Hand Soap</p>
                  <p className="lineHeight">Size: 8.75 fl oz / 259 mL</p>
                  <p className="lineHeight">Qty : 1</p>
               </Box>
            </Box>
            <Box borderBottom="5px solid rgb(229,229,229)" textAlign='right' >
                <Text mr="2.5rem">$7.50</Text>
            </Box>

            <Box display='flex'>
               <Box width='60%' textAlign='left'ml="1.5rem"> 
                  <Text mt="1.5rem"> MERCHANDISE SUBTOTAL</Text>
                  <Text mt="1.5rem"> ESTIMATED SHIPPING & <br/> HANDLING - Standart</Text>
                  <Text mt="1.5rem"> SALES TAX</Text>
               </Box>
               <Box ml='5rem'>
                  <Text mt="1.5rem"> $7.50</Text>
                  <Text mt="1.5rem"> $10.99</Text>
                  <Text mt="2.5rem" > $1.85</Text>
               </Box>
            </Box>
            <Box width='60%' textAlign='justify' ml="1.5rem" mb="1rem"> Tax is estimated and will be calculated when your order is processed</Box>

            <Box display='flex' justifyContent='space-between' borderTop="5px solid rgb(229,229,229)" pt="1rem" fontWeight='bold'>
               <Box ml="2rem"> ORDER TOTAL (USD)</Box>
               <Box mr="3rem"> $20.34</Box>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingPage;