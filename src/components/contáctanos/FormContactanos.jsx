import { Input, Textarea, Button, Center, Box } from "@chakra-ui/react";
import { useForm } from "react-hook-form";

export const FormContactanos = () => {
  const { register, handleSubmit, reset } = useForm();

  //Funcion... recibe los datos del formulario(data)
  const onSubmit = (data) => {
    const url = `https://web.whatsapp.com/send?phone=34617429097&text=%0A%2ANala%20tienda%2A%0AConsulta%20personalizada%0A%0A%2ADatos%20cliente%2A%0ANombre%3A%20${data.nombre} %0AEmail%3A%20${data.email}%0ATel%C3%A9fono%3A${data.telefono}%0A%0A%2AConsulta%3A%2A%0A${data.consulta}`;
    window.open(url, "_blank");
    reset();
  };

  return (
    <Box id="formContactanos">
      <h3>Envíanos un correo</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          placeholder="Nombre *"
          className="input"
          mt="20px"
          {...register("nombre")}
          isRequired
        />
        <Input
          type="email"
          placeholder="Correo electrónico"
          className="input"
          mt="10px"
          {...register("email")}
        />
        <Input
          type="tel"
          placeholder="Télefono *"
          className="input"
          mt="10px"
          {...register("telefono")}
          isRequired
        />
        <Textarea
          placeholder="Mensaje *"
          h="150px"
          mt="10px"
          {...register("consulta")}
          isRequired
        />
        <p className="requerido">* Campos requeridos</p>
        <Center>
          <Button type="submit" colorScheme="teal" size="lg" mt="20px">
            ENVIAR
          </Button>
        </Center>
      </form>
    </Box>
  );
};
