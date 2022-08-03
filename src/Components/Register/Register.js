import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createUser, setMessage } from '../../slices/user/userSlice';


export default function SignUp() {

  const dispatch = useDispatch();
  const { users, message } = useSelector(state => state.user);
  const navigate = useNavigate();

  const isExistingUser = (email) => {
    return users.find(user => user.email === email);
  }

  const verifyData = (data) => {
    const email = data.get('email').trim();
    const password = data.get('password').trim();
    const confirmPassword = data.get('confirmPassword').trim();
    const name = data.get('firstName').trim();
    const lastName = data.get('lastName').trim();

    if (!name) {
      dispatch(setMessage({ message: 'Completa tu nombre' }));
      return false;
    } 

    if (!lastName) {
      dispatch(setMessage({ message: 'Completa tu apellido' }));
      return false;
    } 
    if (!email) {
      dispatch(setMessage({ message: 'Completa la dirección de correo electrónico' }));
      return false;
    } 

    if (!password) {
      dispatch(setMessage({ message: 'Completa la contraseña' }));
      return false;
    } 

    if (!confirmPassword) {
      dispatch(setMessage({ message: 'Completa la verificación de contraseña' }));
      return false;
    } 

     if (password !== confirmPassword) {
      console.log('No coinciden!');
      dispatch(setMessage({ message: 'Las contraseñas no coinciden'}));
      return false;
    } 
    
    if (isExistingUser(email)) {
      console.log('Ya existe el usuario!');
      dispatch(setMessage({ message: 'El usuario ya existe'}));
      return false;
    } 

      return true;
    
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    if (verifyData(data)) {
      const user = {
        name: data.get('firstName'),
        lastName: data.get('lastName'),
        email: data.get('email'),
        password: data.get('password'),
      }
      dispatch(createUser(user));
      navigate('/');
      dispatch(setMessage({ message: ''}));
    } 

  };



  return (
    <div className='container'>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Registro de Usuarios
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="Nombre"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Apellido"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Correo Electrónico"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Contraseña"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Repetir contraseña"
                  type="password"
                  id="confirmPassword"
                  autoComplete="repeat-password"
                />
              </Grid>
            </Grid>
            <Typography component="h6" variant="h6">
              {message && message}
            </Typography>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Registrarse
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/" variant="body2">
                  ¿Ya tienes una cuenta? Inicia Sesión
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </div>
  );
}