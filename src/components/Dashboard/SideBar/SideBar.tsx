import { Box, List, Stack, Typography } from "@mui/material";
import Image from "next/image";
import assets from "@/assets";
import Link from "next/link";
import { UserRole } from "@/types";
import { useEffect, useState } from "react";
import { drawerItems } from "@/utils/drawerItems";
import Divider from "@mui/material/Divider";
import SidebarItem from "./SidebarItem";
import { getUserInfo } from "@/services/auth/auth.services";

const SideBar = () => {
  const [userRole, setUserRole] = useState("");
  const userInfo = getUserInfo();
  // console.log("side bar", userInfo);
  useEffect(() => {
    const { role } = getUserInfo() as any;
    setUserRole(role);
  }, []);

  return (
    <Box>
      <Stack
        sx={{
          py: 1,
          mt: 1,
        }}
        direction="row"
        justifyContent="center"
        alignItems="center"
        gap={1}
        component={Link}
        href="/"
      >
        <Image src={assets.svgs.logo} width={40} height={40} alt="logo" />
        <Typography
          variant="h6"
          component="h1"
          sx={{
            cursor: "pointer",
          }}
        >
          PH Health Care
        </Typography>
      </Stack>
      <List>
        {drawerItems(userRole as UserRole).map((item, index) => (
          <SidebarItem key={index} item={item} />
        ))}
      </List>
      <Divider />
    </Box>
  );
};

export default SideBar;
