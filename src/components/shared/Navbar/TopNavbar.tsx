
import { Box, Container, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const TopNavbar = () => {
  return (
    <Box
      sx={{
        display: { xs: "none", md: "block" },
        width: "100%",
        backgroundColor: "primary.main",
        borderBottom: "1px solid rgba(0,0,0,0.1)",
        px: { xs: 2, md: 3, lg: 5 },
        zIndex: 1300, // higher than default
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          height: 40,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Left Links */}
        <Stack direction="row" spacing={3}>
          <Typography
            component={Link}
            to="/dashboard/index"
            sx={{
              fontSize: 14,
              fontWeight: 600,
              color: "zinc.100",
              textDecoration: "none",
              "&:hover": { color: "grey.300" },
            }}
          >
            My Account
          </Typography>
          <Typography
            component={Link}
            to="/about-us"
            sx={{
              fontSize: 14,
              fontWeight: 600,
              color: "zinc.100",
              textDecoration: "none",
              "&:hover": { color: "grey.300" },
            }}
          >
            About Us
          </Typography>
          <Typography
            component={Link}
            to="/contact"
            sx={{
              fontSize: 14,
              fontWeight: 600,
              color: "zinc.100",
              textDecoration: "none",
              "&:hover": { color: "grey.300" },
            }}
          >
            Contact
          </Typography>
        </Stack>

        {/* Right Info */}
        <Typography
          component={Link}
          to=""
          sx={{
            fontSize: 14,
            fontWeight: 600,
            color: "zinc.100",
            textDecoration: "none",
            "&:hover": { color: "grey.300" },
          }}
        >
          Call Us +880 1234-567890
        </Typography>
      </Container>
    </Box>
  );
};

export default TopNavbar;
