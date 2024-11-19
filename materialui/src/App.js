import { Face2Sharp, FavoriteBorderSharp } from '@mui/icons-material'
import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
// import { CiBarcode } from "react-icons/ci";

export default function App() {
  return (
    <div>
      <Grid sx={{width:"100%",height:"100vh",backgroundColor:"yellow"}}>
        <Box sx={{width:"100%",height:"80px",backgroundColor:"red",display:"flex",alignItems:"center",justifyContent:"space-around"}}>
          <Typography sx={{fontSize:"30px"}}>Logo</Typography>
          <Box sx={{width:"700px",height:"100%",backgroundColor:"white",display:{xl:"flex",lg:"flex",md:"flex",sm:"none",xs:"none"}}}></Box>
        {/* <CiBarcode /> */}
        <FavoriteBorderSharp/>
        </Box>
      </Grid>
    </div>
  )
}
