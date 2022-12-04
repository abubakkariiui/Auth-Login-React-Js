import { Icon } from "@iconify/react";
import { Stack, Button, IconButton } from "@mui/material";

const SocialAuth = () => {
  return (
    <>
      <Stack direction="row" spacing={2} mt={2}>
        <IconButton
          sx={{
            border: "2px solid #ccc",
            borderRadius: "5px",
            padding: "0.5675rem",
            fontSize: "14px",
            fontWeight: 700,
            flex: 1,
          }}
        >
          <Icon icon="logos:google-icon" width={22} height={22} />
          &nbsp; Login With Google
        </IconButton>
        <IconButton
          sx={{
            border: "2px solid #ccc",
            borderRadius: "5px",
            padding: "0.5675rem",
            fontSize: "14px",
            fontWeight: 700,
            flex: 1,
          }}
        >
          <Icon icon="uil:apple" color="#000000" width={22} height={22} />
          &nbsp; Login With Apple
        </IconButton>
      </Stack>
    </>
  );
};

export default SocialAuth;
