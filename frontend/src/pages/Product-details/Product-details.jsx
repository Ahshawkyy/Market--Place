import React from "react";
import "./Product-details.css";
import { useGetOneProductsQuery } from "../../Redux/productApi";
import { Badge, Box, Button, CircularProgress, IconButton, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { Add, Remove, ShoppingCart } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import styled from "@emotion/styled";
import { decreaseQuantity,increaseQuantity, addToCart } from "../../Redux/cartSlice";
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {},
}));
const ProductDetails = () => {
  const { selectedProducts, selectedProductsID } = useSelector(
    // @ts-ignore
    (state) => state.carttt
  );
  const productQuantity = (itemAPI) => {
    const myProduct = selectedProducts.find((itemUser) => {
      return itemUser.id === itemAPI.id;
    });

    return myProduct.quantity;
  };
  let { id } = useParams();
  const { data, error, isLoading } = useGetOneProductsQuery(id);
  const dispatch = useDispatch();
  console.log(data);

  if (isLoading) {
    return (
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ display: "flex" }}>
        <Typography variant="h1" color="error">
          ERROR
        </Typography>
      </Box>
    );
  }

  if (data) {
    return (
      <div className="app ">
        <div className="details">
          <div className="big-img">
            <img src={data.imageLink} alt="" />
          </div>
          <div className="details-text" >
            <div className="row">
              <h1 >{data.productName}</h1>
              <p>{data.description}</p>
              <span >${data.price}</span>
            </div>
            
            {/* <button className="cart">
            <ShoppingCart sx={{mr:1}}/> Add To Cart</button> */}

{selectedProductsID.includes(data.id) ? (
          <div
           
            style={{ display: "flex", alignItems: "center"  , marginLeft: "100px" , marginTop: "100px" 
              
             }}
          >
          
          <IconButton
              color="primary"
              sx={{ mr: "10px"  }}
              onClick={() => {
                dispatch(decreaseQuantity(data));
              }}
            >
              <Remove  />
            </IconButton>

            <StyledBadge
              badgeContent={productQuantity(data)}
              color="error"
            />


            <IconButton
              color="primary"
              sx={{ ml: "10px" }}
              onClick={() => {
                dispatch(increaseQuantity(data));
              }}
            >
              <Add  />
            </IconButton>



          </div>
      ) : (
          <Button
            sx={{ textTransform: "capitalize", p: 1, lineHeight: 1.1  , marginLeft: "100px" , marginTop: "100px" }}
            variant="contained"
            color="primary"
            onClick={() => {
              dispatch(addToCart(data));
            }}
          >
             <ShoppingCart sx={{mr:1}}/>   Add to cart
          </Button>
      
    )}
          </div>
        </div>
      </div>
    );
  }
};
export default ProductDetails;
