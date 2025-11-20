import { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Stack,
  Alert,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const bduser = "yoel";
const bdpasswd = "1234";

export default function Login() {
  const [user, setUser] = useState("");
  const [passwd, setPasswd] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();

    console.log("Usuario:", user, "Contraseña:", passwd);

    if (user === bduser && passwd === bdpasswd) {
      setLoginStatus("success");
      setTimeout(() => navigate("/home"), 1000); // espera 1s y redirige
    } else {
      setLoginStatus("error");
    }
  };

  return (
    <Container sx={{ textAlign: "center", mt: 4 }}>
      <Typography variant="h3" mb={2}>
        Login
      </Typography>

      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          label="Usuario"
          variant="outlined"
          fullWidth
          required
          margin="normal"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <TextField
          label="Contraseña"
          type="password"
          variant="outlined"
          fullWidth
          required
          margin="normal"
          value={passwd}
          onChange={(e) => setPasswd(e.target.value)}
        />
        <Button fullWidth variant="contained" type="submit" sx={{ mt: 2 }}>
          Acceder
        </Button>
      </Box>

      {loginStatus === "success" && (
        <Alert severity="success" sx={{ mt: 2 }}>
          Acceso autorizado. Entrando...
        </Alert>
      )}
      {loginStatus === "error" && (
        <Alert severity="error" sx={{ mt: 2 }}>
          Usuario o contraseña incorrectos.
        </Alert>
      )}
    </Container>
  );
}

