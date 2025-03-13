"use client"; // Ensure it's a client component in Next.js App Router

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Grid2,
  Typography,
} from "@mui/material";
import Image from "next/image";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useEffect, useState } from "react";
import { Doctor } from "@/types/doctor";

const TopRatedDoctors = () => {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        
        // const res = await fetch(
        //   // "http://localhost:5000/api/v1/doctor?page=1&limit=3",
        // );
        
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/v1/doctor?page=1&limit=3`
        );
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const { data } = await res.json();
        if (!data || !Array.isArray(data)) {
          throw new Error("Invalid data format");
        }
        setDoctors(data);
      } catch (error) {
        console.error("Error fetching doctors:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  if (loading) return <Typography>Loading...</Typography>;

  return (
    <Box
      sx={{
        my: 10,
        py: 30,
        backgroundColor: "rgba(20, 20, 20, 0.1)",
        clipPath: "polygon(0 0, 100% 25%, 100% 100%, 0 75%)",
      }}
    >
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h4" component="h1" fontWeight={700}>
          Our Top Rated Doctors
        </Typography>
        <Typography component="p" fontSize={18} fontWeight={400} sx={{ mt: 2 }}>
          Access to expert physicians and surgeons, advanced technologies
        </Typography>
        <Typography component="p" fontSize={18} fontWeight={400}>
          and top-quality surgery facilities right here.
        </Typography>
      </Box>

      <Container sx={{ margin: "30px auto" }}>
        <Grid container spacing={2}>
          {doctors.length > 0 ? (
            doctors.map((doctor: any, index) => (
              <Grid xs={12} md={4} key={doctor._id || index}>
                <Card>
                  <Box>
                    <Image
                      src={doctor.profilePhoto || "/images/default-doctor.jpg"}
                      alt="doctor"
                      width={500}
                      height={300}
                      style={{ objectFit: "cover" }}
                    />
                  </Box>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {doctor.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {doctor.qualification}, {doctor.designation}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" mt={1}>
                      <LocationOnIcon /> {doctor.address}
                    </Typography>
                  </CardContent>
                  <CardActions
                    sx={{
                      justifyContent: "space-between",
                      px: 2,
                      paddingBottom: "20px",
                    }}
                  >
                    <Button>Book Now</Button>
                    <Button variant="outlined">View Profile</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))
          ) : (
            <Typography>No doctors found.</Typography>
          )}
        </Grid>
        <Box sx={{ textAlign: "center" }}>
          <Button variant="outlined" sx={{ marginTop: "20px" }}>
            View ALL
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default TopRatedDoctors;
