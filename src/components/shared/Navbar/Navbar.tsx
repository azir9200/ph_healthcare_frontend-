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
import MenuIcon from "@mui/icons-material/Menu";
import dynamic from "next/dynamic";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import TopNavbar from "./TopNavbar";

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

  const navLinks = [
    { name: "Consultation", path: "/consultation" },
    { name: "Health Plans", path: "/healthPlans" },
    { name: "Medicine", path: "/medicine" },
    { name: "Diagnostics", path: "/diagnostics" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <Box
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 1200,
        backgroundColor: "white",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
      }}
    >
      {/* Top Strip */}
      {/* <TopNavbar /> */}

      {/* Main Navbar */}
      <Container>
        <Stack
          py={2}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          {/* Logo */}
          <Typography variant="h5" fontWeight={600}>
            <Link href="/" passHref>
              <Box
                component="span"
                sx={{ textDecoration: "none", color: "black" }}
              >
                P
                <Box component="span" color="primary.main">
                  H
                </Box>{" "}
                Health Care
              </Box>
            </Link>
          </Typography>

          {/* Mobile Menu Icon */}
          <Box sx={{ display: { xs: "block", sm: "none" } }}>
            <IconButton onClick={() => setOpenMenu(true)} color="primary">
              <MenuIcon />
            </IconButton>
          </Box>

          {/* Desktop Nav Links */}
          <Stack
            direction="row"
            spacing={2}
            sx={{ display: { xs: "none", sm: "flex" } }}
          >
            {navLinks.map(({ name, path }) => (
              <Link key={path} href={path} passHref>
                <Button
                  variant={isActive(path) ? "contained" : "outlined"}
                  color="primary"
                  size="small"
                >
                  {name}
                </Button>
              </Link>
            ))}

            {/* Auth button (Desktop) */}
            {userInfo ? (
              <Button color="error" onClick={handleLogOut}>
                Logout
              </Button>
            ) : (
              <AuthButton />
            )}
          </Stack>
        </Stack>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={openMenu}
        onClose={() => setOpenMenu(false)}
        sx={{ display: { xs: "block", sm: "none" } }}
      >
        <Box sx={{ width: 250, p: 2 }}>
          {navLinks.map(({ name, path }) => (
            <Link key={path} href={path} passHref>
              <Button
                fullWidth
                sx={{ mb: 1 }}
                variant={isActive(path) ? "contained" : "outlined"}
                onClick={() => setOpenMenu(false)}
              >
                {name}
              </Button>
            </Link>
          ))}
          {userInfo ? (
            <Button fullWidth color="error" onClick={handleLogOut}>
              Logout
            </Button>
          ) : (
            <AuthButton />
          )}
        </Box>
      </Drawer>
    </Box>
  );
};

export default Navbar;
