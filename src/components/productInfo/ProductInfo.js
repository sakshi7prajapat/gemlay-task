import { Box, Container, Typography , Grid} from "@mui/material";
import React from "react";
const ProductInfo = () =>{
     return (<>
<Container>
    <Box>
        <Typography sx={{
            color: "rgb(48, 47, 47)",
            fontSize:" 15px",
            fontWeight: 500,
            lineHeight: "18px",
            letterSpacing: "1px"
        }}>Product Information</Typography>
        <Grid Container>
            <Grid item><Box></Box></Grid>
        <Grid item><Box>
            
            </Box></Grid>
        
        </Grid>
       
     </Box></Container>
     
     
     </>);

}

export default ProductInfo;