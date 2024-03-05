import React, { useState } from "react";
import { supabase } from "./supabaseClient";
import { useNavigate } from "react-router-dom";
import { Card, Form } from "react-bootstrap";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import Typography from "@mui/material/Typography";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await supabase.auth.signIn({
        email,
        password,
      });
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Card style={{ width: "20rem", backgroundColor: "#f8f9fa", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)" }}>
        <Card.Body style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "20px" }}>
          <Typography variant="h4" component="div" style={{ marginBottom: "20px", color: "#007bff" }}>
            Inicia Sesión
          </Typography>
          <Form onSubmit={handleSubmit} style={{ width: "100%" }}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <div style={{ display: "flex", alignItems: "center" }}>
                <EmailIcon style={{ marginRight: "10px", color: "#007bff" }} />
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Correo Electrónico"
                  onChange={(e) => setEmail(e.target.value)}
                  style={{ border: "1px solid #ccc", borderRadius: "5px", width: "100%" }}
                />
              </div>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <div style={{ display: "flex", alignItems: "center" }}>
                <LockIcon style={{ marginRight: "10px", color: "#007bff" }} />
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Contraseña"
                  onChange={(e) => setPassword(e.target.value)}
                  style={{ border: "1px solid #ccc", borderRadius: "5px", width: "100%" }}
                />
              </div>
            </Form.Group>
            <div style={{ textAlign: "center" }}>
              <Button
                variant="contained"
                type="submit"
                style={{ backgroundColor: "#007bff", color: "#fff", marginTop: "20px", padding: "10px 20px" }}
              >
                Ingresar <SendIcon style={{ marginLeft: "5px" }} />
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Login;
