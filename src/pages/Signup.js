import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Container,
  Typography,
  Link,
  Box,
  Divider,
  Checkbox,
} from "@mui/material";
import styled from "@emotion/styled";

import SocialAuth from "../components/SocialAuth";
import SignupForm from "../components/SignupForm";

import { motion } from "framer-motion";

const RootStyle = styled("div")({
  background: "rgb(249, 250, 251)",
  height: "100vh",
  display: "grid",
  placeItems: "center",
});

const HeadingStyle = styled(Box)({
  textAlign: "left",
});

const ContentStyle = styled(Box)({
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
    y: 40,
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
};

const Signup = ({ setAuth }) => {
  return (
    <RootStyle>
      <Container maxWidth="sm">
        <ContentStyle>
          <HeadingStyle component={motion.div} {...fadeInUp}>
            <Typography
              sx={{
                color: "text.secondary",
                fontSize: "18px",
                fontWeight: "600",
              }}
            >
              Sign Up for App
            </Typography>
          </HeadingStyle>

          <Box component={motion.div} {...fadeInUp}>
            <SocialAuth />
          </Box>

          <Divider sx={{ my: 3 }} component={motion.div} {...fadeInUp}>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              or use your email
            </Typography>
          </Divider>

          <SignupForm setAuth={setAuth} />

          <Typography
            component={motion.p}
            {...fadeInUp}
            variant="body2"
            align="left"
            sx={{ color: "text.secondary", mt: 2 }}
          >
            <Checkbox />I agree to{" "}
            <Link underline="always" color="text.primary" href="#">
              Terms of Service
            </Link>{" "}
            &{" "}
            <Link underline="always" color="text.primary" href="#">
              Privacy Policy
            </Link>
            .
          </Typography>

          <Typography
            component={motion.p}
            {...fadeInUp}
            variant="body2"
            align="left"
            sx={{ mt: 1 }}
          >
            Already a member?{" "}
            <Link variant="subtitle2" component={RouterLink} to="/login">
              Login
            </Link>
          </Typography>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
};

export default Signup;
