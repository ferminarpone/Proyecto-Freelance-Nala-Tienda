import React from "react";
import icono from "../assets/navBar/Icono.png";
import icono1 from "../assets/navBar/Icono1.png";
import { Grid, GridItem, Box, Divider } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";

export const NavBar = () => {
  const locationOne = useLocation();
  console.log(locationOne.pathname);

  return (
    <Box mr="10" ml="10" pt="6">
      <Grid
        id="navBar"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
      >
        <GridItem rowSpan={1} colSpan={1}>
          <Link to={"/productos"}>
            <h2>PRODUCTOS</h2>
          </Link>
        </GridItem>
        <GridItem>
          <Link to={"/personalizados"}>
            <h2>PERSONALIZADOS</h2>
          </Link>
        </GridItem>
        <GridItem display="flex" justifyContent="center">
          <Link to={"/"}>
            <img src={icono} />
            <img src={icono1} />
          </Link>
        </GridItem>
        <GridItem>
          <Link to={"/nosotros"}>
            <h2>NOSOTROS</h2>
          </Link>
        </GridItem>
        <GridItem>
          <Link to={"/contactanos"}>
            <h2>CONTÁCTANOS</h2>
          </Link>
        </GridItem>
        <GridItem colSpan={2}>
          <Divider
            orientation="horizontal"
            border="1px solid"
            className="underline"
          />
        </GridItem>
        <GridItem colStart={4} colSpan={2}>
          <Divider
            orientation="horizontal"
            border="1px solid"
            className="underline"
          />
        </GridItem>
      </Grid>
    </Box>
  );
};
