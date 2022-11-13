import { Box, Divider, Flex, Heading, HStack, Text } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleGetToCart } from "../../Redux/AppReducer/action";
import { getCartDataApi } from "../../Redux/CartReducer/cart.actions";
import CartItem from "./CartItem";
import { useState } from "react";

const CartList = () => {
  const [cartItem, setCartItem] = useState([]);
  const dispatch = useDispatch();
  const location = useLocation();

  const { Bag, isLoading, isError, cart } = useSelector(
    (state) => state.AppReducer
  );
  useEffect(() => {
    if (Bag.length == 0 || location) {
      dispatch(handleGetToCart());
    }
  }, [dispatch, Bag.length]);

  const getcartData = () => {
    axios
      .get(`https://thecoolclub.onrender.com/cart/`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        console.log("cartdata", res.data);
        setCartItem(res.data);
      });
  };
  //  console.log(cartItem);
  const deleteCartItem = (id) => {
    console.log(id);
    axios
      .delete(`https://thecoolclub.onrender.com/cart/${id}`, {
        headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => getcartData())
      .catch((err) => console.log(err));
    // console.log(id)
    // dispatch(getCartDataApi(id));
  };

  // console.log("item",cartItem)
  useEffect(() => {
    getcartData();
  }, []);

  return (
    <Box>
      <HStack p="15px" bg="#f2f2f2" justify="center" mt="20px">
        <Text w="40%" textAlign="center" fontSize="14px" fontWeight="semibold">
          ITEM
        </Text>
        <HStack w="60%" justifyContent="space-between">
          <Text textAlign="center" fontSize="14px" fontWeight="semibold">
            PRICE
          </Text>
          <Text textAlign="center" fontSize="14px" fontWeight="semibold">
            QUANTITY
          </Text>
          <Text textAlign="center" fontSize="14px" fontWeight="semibold">
            TOTAL PRICE
          </Text>
          <Text textAlign="center" fontSize="14px" fontWeight="semibold">
            REMOVE
          </Text>
        </HStack>
      </HStack>
      <Divider mt="0px" mb="20px" />
      {cartItem.length > 0 &&
        cartItem?.map((item) => {
          return (
            <Box border="1px solid black" mt="0.7rem" key={item._id}>
              <CartItem
                key={item._id}
                item={item}
                deleteCartItem={(id) => deleteCartItem(id)}
              />
            </Box>
          );
        })}
    </Box>
  );
};

export default CartList;
