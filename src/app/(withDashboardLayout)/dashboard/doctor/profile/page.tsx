"use client";
import { useGetSingleUserQuery } from "@/redux/api/userApi";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Avatar,
  Paper,
} from "@mui/material";
import { blue } from "@mui/material/colors";
import {
  ContactPhone,
  Email,
  AdminPanelSettings,
  LockOpen,
  AccessTime,
} from "@mui/icons-material";

const Profile = () => {
  const { data, isLoading, error } = useGetSingleUserQuery({});

  if (isLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Typography variant="h6" color="textSecondary">
          Loading user info...
        </Typography>
      </Box>
    );
  }

  if (error) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Typography variant="h6" color="error">
          Failed to load user data
        </Typography>
      </Box>
    );
  }

  const user = data;

  return (
    <Box sx={{ padding: 4 }}>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={8} md={6}>
          {/* User Info Card */}
          <Card variant="outlined" sx={{ borderRadius: 3, boxShadow: 3 }}>
            <CardContent>
              {/* User Profile Avatar */}
              <Box display="flex" justifyContent="center" mb={3}>
                <Avatar
                  sx={{
                    width: 120,
                    height: 120,
                    bgcolor: blue[500],
                    fontSize: 48,
                  }}
                  alt={user?.name || "User"}
                >
                  {user?.name?.[0]}
                </Avatar>
              </Box>

              {/* User Name */}
              <Typography variant="h5" align="center" gutterBottom>
                {user?.name || "User Name"}
              </Typography>

              {/* User Details */}
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Paper elevation={3} sx={{ padding: 2 }}>
                    <Typography
                      variant="body1"
                      color="textSecondary"
                      display="flex"
                      alignItems="center"
                    >
                      <Email sx={{ marginRight: 1 }} />
                      {user?.email}
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Paper elevation={3} sx={{ padding: 2 }}>
                    <Typography
                      variant="body1"
                      color="textSecondary"
                      display="flex"
                      alignItems="center"
                    >
                      <ContactPhone sx={{ marginRight: 1 }} />
                      {user?.contactNumber || "Not Available"}
                    </Typography>
                  </Paper>
                </Grid>
              </Grid>

              <Grid container spacing={2} mt={2}>
                <Grid item xs={12} sm={6}>
                  <Paper elevation={3} sx={{ padding: 2 }}>
                    <Typography
                      variant="body1"
                      color="textSecondary"
                      display="flex"
                      alignItems="center"
                    >
                      <AdminPanelSettings sx={{ marginRight: 1 }} />
                      {user?.role}
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Paper elevation={3} sx={{ padding: 2 }}>
                    <Typography
                      variant="body1"
                      color="textSecondary"
                      display="flex"
                      alignItems="center"
                    >
                      <AccessTime sx={{ marginRight: 1 }} />
                      {new Date(user?.createdAt).toLocaleDateString()}
                    </Typography>
                  </Paper>
                </Grid>
              </Grid>

              {/* Status and Password Change */}
              <Box mt={3} display="flex" justifyContent="space-between">
                <Paper elevation={3} sx={{ padding: 2, flex: 1, mr: 1 }}>
                  <Typography
                    variant="body1"
                    color="textSecondary"
                    display="flex"
                    alignItems="center"
                  >
                    <LockOpen sx={{ marginRight: 1 }} />
                    {user?.needPasswordChange
                      ? "Password Change Required"
                      : "Password Updated"}
                  </Typography>
                </Paper>

                <Paper elevation={3} sx={{ padding: 2, flex: 1, ml: 1 }}>
                  <Typography
                    variant="body1"
                    color="textSecondary"
                    display="flex"
                    alignItems="center"
                  >
                    <LockOpen sx={{ marginRight: 1 }} />
                    {user?.status === "ACTIVE" ? "Active" : "Inactive"}
                  </Typography>
                </Paper>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Profile;
