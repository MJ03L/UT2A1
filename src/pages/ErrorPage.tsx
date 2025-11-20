import { Container, Typography, Button } from "@mui/material";
import { useRouteError, useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const error: any = useRouteError();
  const navigate = useNavigate();

  return (
    <Container sx={{ textAlign: "center", mt: 4 }}>
      <Typography variant="h4" color="error">
        ¡Ups! Algo salió mal…
      </Typography>
      <Typography>{error?.statusText || error?.message}</Typography>
      <Button variant="contained" color="primary" onClick={() => navigate("/")}>
        Volver al Login
      </Button>
    </Container>
  );
}
