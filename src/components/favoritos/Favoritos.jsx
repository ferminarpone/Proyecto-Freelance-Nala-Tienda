import "./styles/favoritos.css";
import { Button, Center, Container, Flex} from "@chakra-ui/react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AiOutlineLeft } from "react-icons/ai";
import { Footer, NavBar, FavItem, FormularioFav } from "../index";
import { FavoritoContext } from "../../context/FavContext";
import { useModal } from "../../hooks";

export const Favoritos = () => {
  const { fav, isOpen, itemFav, navExtend } = useContext(FavoritoContext);
  const { form, setForm, modalClosed } = useModal();
  return (
    <>
      <div className={form ? "mediaOpen" : ""}>
        {form ? <FormularioFav  modalClosed={ modalClosed }/> : ""}
        <div onClick={ modalClosed }>
          <NavBar />
          <div onClick={navExtend}>
            <Container
              className={`containerFav ${isOpen ? "openNavFavoritos" : ""}`}
            >
              <div className="linkRegresar">
                <Link to={"/productos"}>
                  {itemFav() ? (
                    <Flex className="regresar">
                      <div>
                        <AiOutlineLeft />
                      </div>
                      <p>Seguir eligiendo</p>
                    </Flex>
                  ) : (
                    ""
                  )}
                </Link>
              </div>
              {itemFav() ? (
                <div id="favoritos">
                  {fav.map((item) => (
                    <div key={item.id} className="item">
                      <FavItem
                        nombre={item.nombre}
                        img={item.img}
                        cantidad={item.quantity}
                        id={item.id}
                      />
                      <hr className="dividerFavoritos" />
                    </div>
                  ))}
                  {!form ? (
                    <Button
                      onClick={()=>setForm(!form)}
                      className="comprarWsp"
                    >
                      COMPRAR POR WHATSAPP
                    </Button>
                  ) : (
                     <div className="espacio">.</div> 
                  )}
                </div>
              ) : (
                <Center
                  minHeight="400px"
                  display="flex"
                  flexDirection="column"
                  id="sinFav"
                >
                  <h1>No tienes productos en tu lista de favoritos.</h1>
                  <Link to={"/productos"}>
                    <Button> Ver productos </Button>
                  </Link>
                </Center>
              )}
            </Container>
            <div className={isOpen ? "footerOpenFav" : ""}>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
