import React, { useEffect, useState } from 'react';
import { Container, Typography, Table, TableHead, TableBody, TableCell, TableRow, Avatar, TableContainer, Paper } from '@mui/material';

function Allproducts() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((e) => console.log("There is something wrong"));
  }, []);

  return (
    <Container sx={{ marginTop: 4 }}>
      <Typography variant="h4" gutterBottom align="center">
        All Products
      </Typography>
      <br></br>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Rating</TableCell>
              <TableCell>Count</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((ecom) => (
              <TableRow key={ecom.id}>
                <TableCell>{ecom.id}</TableCell>
                <TableCell>{ecom.title}</TableCell>
                <TableCell>${ecom.price.toFixed(2)}</TableCell>
                <TableCell>{ecom.description}</TableCell>
                <TableCell>{ecom.category}</TableCell>
                <TableCell>
                  <Avatar variant="square" src={ecom.image} sx={{ width: 60, height: 60 }} />
                </TableCell>
                <TableCell>{ecom.rating.rate}</TableCell>
                <TableCell>{ecom.rating.count}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <br></br>
    </Container>
  );
}

export default Allproducts;
