import  React, {useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { useDispatch } from 'react-redux/es/exports';
import { useNavigate } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { loginUser } from '../slices/authSlice';
function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignIn() {
   const auth = useSelector((state)=> state.auth);
   console.log(auth)
  const dispatch = useDispatch();
const navigate =  useNavigate();
useEffect(()=>{
  if (auth.email) {
    navigate("/starter")
  }
},[auth.email , navigate]);
 const [user,setUser] = useState({
  email : "",
  password : ""
 })


  const handleSubmit = async(event) => {
    event.preventDefault();
    dispatch(loginUser(user))
// try {
//   const response = await axios.post(LOGIN_URL,
//    JSON.stringify({email,password}),{
//     headers : {'Content-Type' : 'application/json'},
//     withCredentails: true
//    } )
//    console.log(JSON.stringify(response?.data))
//    const Token = response?.data;
//    if (authCtx.isLoggedIn()) {
//     return <Navigate to ="/starter"/>
//    }
//    console.log(Token)
//    console.log( location());
//   } catch (error) {
//   if (!error?.response) {
//       console.log("******errr No server response ")
//   }else if(error.response?.status === 400){
//     console.log('missing email or password');
//   }else if(error.response?.status === 401){
//     console.log('Unauthorized');
//   }
// }
  };

  return (

    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
      
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
                        onChange={(e) =>setUser({...user, email: e.target.value})}
                    
      
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) =>setUser({...user, password: e.target.value})}
                      
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              
            >
             {auth.loginStatus === "pending" ? "submitting" : "Login"}
            </Button>
            {auth.loginStatus === "rejected" ? (<p> error</p> ): null}
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );

    
}  