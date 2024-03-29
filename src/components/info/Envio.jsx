import { Box, Center, Divider } from "@chakra-ui/react";
import {
  MdPedalBike,
  MdOutlineMoped,
  MdOutlineLocalShipping,
} from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";

export const Envio = () => {
  return (
    <>
      <Box id="envio">
        <Center>
          <h1 className="titleEnvios">Métodos De Envío</h1>
        </Center>
        <Center>
          <h2>Modalidades de entrega dependiendo la zona</h2>
        </Center>
        <div className="envios">
          <div className="bicicleta">
            <MdPedalBike size="45px" />
            <p>Cadete en bicicleta</p>
          </div>
          <div className="moto">
            <MdOutlineMoped size="45px" />
            <p>Cadete en moto</p>
          </div>
        </div>
        <Center>
          <div className="correo">
            <MdOutlineLocalShipping size="45px" />
            <p>Enviós por correo</p>
          </div>
        </Center>
        <Box>
          <Center>
            <Divider className="dividerFooter" />
          </Center>
          <Center id="footerEnvio">
            <h4>Síguenos</h4>
            <a
              href="https://instagram.com/nala_tiendaa?igshid=MzRlODBiNWFlZA=="
              target="_blank"
            >
              <BsInstagram size="30px" />
            </a>
            <a href="https://www.tiktok.com/@nalatienda" target="_blank">
              <FaTiktok size="30px" />
            </a>
          </Center>
        </Box>
      </Box>
    </>
  );
};
