import { useContext } from "react";
import "./styles/nosotros.css";
import { Container, Grid, GridItem, Image } from "@chakra-ui/react";
import { NavBar, Historia, Terminos, Footer } from "../index";
import Banner from "../../assets/nosotros/ImgQueHacemos.png";
import { FavoritoContext } from "../../context/FavContext";
import { useScroll } from "../../hooks";

export const Nosotros = () => {
  const { navExtend } = useContext(FavoritoContext);
  useScroll();
  return (
    <>
      <div id="bgNosotros">
        <div className="mobile">
          <NavBar />
        </div>
        <div id="nosotrosDesktop">
          <Container maxWidth="90%">
            <Grid
              templateRows="repeat(6, 1fr)"
              templateColumns="repeat(6, 1fr)"
              gap={4}
            >
              <GridItem rowSpan={3} rowStart={2} colSpan={3}>
                <Image src={Banner} className="bannerQueHacemos" />
              </GridItem>
              <GridItem
                rowSpan={1}
                colSpan={3}
                colStart={4}
                display="flex"
                alignItems="end"
                ml="30px"
              >
                <h1 className="titleNosotros">Que Hacemos</h1>
              </GridItem>
              <GridItem rowSpan={5} colSpan={3} mb="100px" ml="30px">
                <p className="nosotrosParrafo">
                  Nala tienda es un emprendimiento que compra en la pagina
                  original de Shein, trayendo los productos de Brasil. Contamos
                  con dos tipos de venta, por un lado vendemos los productos en
                  tendencias y por otro tenemos un servicio personalizado de
                  traerte hasta tu casa lo que vos quieras dentro de las
                  categorías más accesibles por el tamaño (como maquillaje,
                  fundas de celular o auriculares, billetera, cartera, medias,
                  etc).
                </p>
              </GridItem>
            </Grid>
          </Container>
        </div>
        <div onClick={navExtend}>
          <div id="nosotrosMobile">
            <Container
              maxW="85%"
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <h1 className="titleNosotros">Qué Hacemos</h1>
              <p className="nosotrosParrafo">
                Nala tienda es un emprendimiento que compra en la pagina
                original de Shein, trayendo los productos de Brasil. Contamos
                con dos tipos de venta, por un lado vendemos los productos en
                tendencias y por otro tenemos un servicio personalizado de
                traerte hasta tu casa lo que vos quieras dentro de las
                categorías más accesibles por el tamaño (como maquillaje, fundas
                de celular o auriculares, billetera, cartera, medias, etc).
              </p>
            </Container>
          </div>
          <Historia />
          <Terminos />
        </div>
      </div>
      <Footer />
    </>
  );
};
