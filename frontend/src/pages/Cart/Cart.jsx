import {
  Box,
  Button,
  Paper,
  styled,
  IconButton,
  Badge,
  Typography,
  Divider,
  Stack,
} from "@mui/material";
import "./Cart.css";
import { Add, Delete, Remove } from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";
import {
  decreaseQuantity,
  deleteProduct,
  increaseQuantity,
} from "../../Redux/cartSlice";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#ef5350",
    color: "#fff",
  },
}));
const Cart = () => {
  // @ts-ignore
  const { selectedProducts } = useSelector((state) => state.carttt);
  const dispatch = useDispatch();
  
  
  let subtotal = 0 ;
  return (
    <Box>
      {selectedProducts.map((item) => {
        
        subtotal += Number(item.price) * Number(item.quantity)
        return (
          <Paper key={item.id} className="item-container">
            <div className="img-title-parent">
              <img src={item.imageLink} alt="" />
              <p className="product-name">{item.productName}</p>
            </div>

            <div style={{ display: "flex", alignItems: "center" }}>
            
            <IconButton
                sx={{ color: "primary", mr: "10px" }}
                onClick={() => {
                  dispatch(decreaseQuantity(item));
                }}
              >
                <Remove />
              </IconButton>
              
            
            
              <StyledBadge badgeContent={item.quantity}  />

              <IconButton
                sx={{ color: "primary", ml: "10px", 
                
                }}
                onClick={() => {
                  dispatch(increaseQuantity(item));
                }}
              >
                <Add />
              </IconButton>

            </div>

            <div className="price">${Number(item.price)*Number(item.quantity)}</div>

            <Button
              sx={{ display: { xs: "none", md: "inline-flex" } , mr: "10px"}}
              variant="contained"
              color="error"
              onClick={() => {
                dispatch(deleteProduct(item));
              }}
            >
              delete
            </Button>

            <IconButton
              sx={{
                color: "#ef5350",
                display: { xs: "inline-flex", md: "none" },
              }}
              onClick={() => {
                dispatch(deleteProduct(item));
              }}
            >
              <Delete />
            </IconButton>
          </Paper>
        );
      })}

      <Paper sx={{ width: "200px", mx: "auto", mt: "60px" }}>
        <Typography align="center" p={2} variant="h6">
          Cart Summary
        </Typography>

        <Divider />

        <Stack
          sx={{ justifyContent: "space-between", p: 1.2 }}
          direction={"row"}
        >
          <Typography variant="body1">Subtotal</Typography>
          <Typography variant="body1">$ {subtotal}</Typography>
        </Stack>

        <Divider />

        <Button fullWidth color="success" variant="contained">
          CHECKOUT
        </Button>
      </Paper>
    </Box>
  );
};
export default Cart;
