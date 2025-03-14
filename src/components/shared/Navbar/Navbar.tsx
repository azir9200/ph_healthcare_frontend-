"use client";

import { getUserInfo, removeUser } from "@/services/auth/auth.services";
import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  IconButton,
  Drawer,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu"; // Import the Menu Icon
import dynamic from "next/dynamic";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const userInfo = getUserInfo();
  const [openMenu, setOpenMenu] = useState(false);

  const handleLogOut = () => {
    removeUser();
    router.refresh();
  };

  const isActive = (path: string) => pathname === path;

  const AuthButton = dynamic(
    () => import("@/components/UI/AuthButton/AuthButton"),
    { ssr: false }
  );

  const handleMenuToggle = () => {
    setOpenMenu(!openMenu); // Toggle menu visibility
  };

  return (
    <Container>
      <Stack
        py={2}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
      >
        {/* Logo */}
        <Typography
          variant="h4"
          fontWeight={600}
          textAlign={{ xs: "center", sm: "left" }}
        >
          <Link href="/" className={isActive("/") ? "active-link" : ""}>
            P
            <Box component="span" color="primary.main">
              H
            </Box>{" "}
            Health Care
          </Link>
        </Typography>

        {/* Mobile Hamburger Button */}
        <Box sx={{ display: { xs: "block", sm: "none" } }}>
          <IconButton onClick={handleMenuToggle} color="primary">
            <MenuIcon />
          </IconButton>
        </Box>

        {/* Navigation Links */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          gap={2}
          sx={{
            display: { xs: "none", sm: "flex" },
            flexWrap: "wrap",
          }}
        >
          {[
            { name: "Consultation", path: "/consultation" },
            { name: "Health Plans", path: "/healthPlans" },
            { name: "Medicine", path: "/medicine" },
            { name: "Diagnostics", path: "/diagnostics" },
            { name: "Contact", path: "/contact" },
          ].map(({ name, path }) => (
            <Link key={path} href={path}>
              <Button
                size="small"
                variant={isActive(path) ? "contained" : "outlined"}
                color="primary"
              >
                {name}
              </Button>
            </Link>
          ))}
        </Stack>

        {/* Authentication Button - For mobile or tablet */}
        <Box sx={{ display: { xs: "block", sm: "none" } }}>
          {/* <AuthButton /> */}
        </Box>
      </Stack>

      {/* Drawer Menu for Mobile */}
      <Drawer
        anchor="right"
        open={openMenu}
        onClose={handleMenuToggle}
        sx={{ display: { xs: "block", sm: "none" } }}
      >
        <Box sx={{ width: 250, p: 2 }}>
          {[
            { name: "Consultation", path: "/consultation" },
            { name: "Health Plans", path: "/healthPlans" },
            { name: "Medicine", path: "/medicine" },
            { name: "Diagnostics", path: "/diagnostics" },
            { name: "Contact", path: "/contact" },
          ].map(({ name, path }) => (
            <Link key={path} href={path}>
              <Button
                fullWidth
                variant={isActive(path) ? "contained" : "outlined"}
                color="primary"
                sx={{ mb: 1 }}
                onClick={handleMenuToggle} // Close menu after selecting a link
              >
                {name}
              </Button>
            </Link>
          ))}
        </Box>
      </Drawer>
    </Container>
  );
};

export default Navbar;
