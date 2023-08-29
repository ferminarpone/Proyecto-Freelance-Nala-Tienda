import { Button, Grid, GridItem, Image, filter } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { FaHeart } from "react-icons/fa";
import { FavoritoContext } from "../../context/FavContext";


export const FavItem = ({ id, nombre, img, cantidad }) => {

  const {fav, setFav} = useContext(FavoritoContext);


  //Función que elimina un producto de favoritos.
  const removeItem = ()=>{
    const newFav = fav.filter((item)=> item.id !== id);
    setFav(newFav); 
  }

  // variable + función que genera el listado de productos elegidos.
/*   const productList = fav.map((e)=> ` ${JSON.stringify(e.nombre, e.id)}`)  
  const sendWsp = ()=>{
    const url = `https://web.whatsapp.com/send?phone=34617429097&text=%0A%2ANala%20tienda%2A%0AConsulta%20disponibilidad%20de%20productos%3A%0A%0A%2AProductos%3A%2A ${productList}`;
    window.open(url,'_blank') 
    
  } */
    return (
    <>
      <Grid templateColumns="repeat(10,1fr)" gap={6} mb="25px" id="favItem">
        <GridItem colSpan={2} >
          <Image src={img} w="130px" h="130px" borderRadius="10px" objectFit="cover" />
        </GridItem>
        <GridItem colSpan={3} display="flex" ml="-15%" alignItems="center">
          <h1>{nombre}</h1>
        </GridItem>
        <GridItem colSpan={4} display="flex" alignItems="center" >
        <Button className="comprarWsp">COMPRAR POR WHATSAPP</Button>
        </GridItem>
        <GridItem colSpan={1} display="flex" alignItems="center">
            <Button variant="solid"
                className="favHeart" onClick={removeItem} >
          <FaHeart />
            </Button>
        </GridItem>
      </Grid>
    </>
  );
};
