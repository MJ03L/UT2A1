import { Typography, Container, Button, Stack } from "@mui/material";

function Login() {
  return (
    <Container sx={{ textAlign: "center", mt: 4 }}>
      <Typography variant="h1" color="primary">Bienvenido Usuario</Typography>
      <Typography variant="h2" color="secondary">Login</Typography>
      <Typography variant="h3">[Yoel José Bautista Díaz]</Typography>
      <Typography variant="subtitle1">Demostración de estilos</Typography>
      <Typography variant="body1">
        Este texto utiliza la fuente y colores definidos en el tema.
      </Typography>
      <Typography variant="caption">Texto tipo caption</Typography>

      <Stack direction="row" spacing={2} justifyContent="center" mt={3}>
        <Button variant="text" color="primary">Text</Button>
        <Button variant="contained" color="secondary">Contained</Button>
        <Button variant="outlined" color="error">Outlined</Button>
        <Button variant="contained" color="success">Success</Button>
      </Stack>
    </Container>
  );
}

export default Login;
