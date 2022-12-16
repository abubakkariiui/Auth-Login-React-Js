import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Container,
  Typography,
  Link,
  Box,
  Divider,
  TextField,
} from "@mui/material";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import ForgotPasswordForm from "../components/ForgotPasswordForm";
const RootStyle = styled("div")({
  background: "rgb(249, 250, 251)",
  height: "100vh",
  display: "grid",
  placeItems: "center",
});

const HeadingStyle = styled(Box)({
  textAlign: "left",
});

const ContentStyle = styled("div")({
  maxWidth: 480,
  padding: 25,
  margin: "auto",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  background: "#fff",
});

let easing = [0.6, -0.05, 0.01, 0.99];
const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
  animates: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easing,
      delay: 0.2,
    },
  },
};

const ForgotPassword = () => {
  return (
    <RootStyle>
      <Container maxWidth="sm">
        <ContentStyle>
          <HeadingStyle component={motion.div} {...fadeInUp}>
            <Typography
              sx={{
                color: "text.secondary",
                mb: 2,
                fontSize: "18px",
                fontWeight: 700,
              }}
            >
              Forgot Password
            </Typography>
          </HeadingStyle>
          {/* <ForgotPasswordForm /> */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 3,
            }}
            component={motion.div}
            initial={{ opacity: 0, y: 40 }}
            animate={fadeInUp.animates}
          >
            <TextField
              fullWidth
              autoComplete="username"
              type="email"
              label="Email Address"
            />
          </Box>
          <Typography
            component={motion.p}
            {...fadeInUp}
            variant="body2"
            align="left"
            sx={{ mt: 3 }}
          >
            Back to?{" "}
            <Link variant="subtitle2" component={RouterLink} to="/Login">
              Sign In
            </Link>
          </Typography>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
};

export default ForgotPassword;
