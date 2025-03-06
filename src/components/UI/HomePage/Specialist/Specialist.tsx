"use client";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";

// Define a type for specialties
interface Specialty {
  _id: string;
  title: string;
  icon: string;
}

const Specialist = () => {
  const [specialties, setSpecialties] = useState<Specialty[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSpecialties = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/v1/specialties", {
          next: { revalidate: 30 },
        });

        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const { data }: { data: Specialty[] } = await res.json();
        setSpecialties(data);
      } catch (error) {
        console.error("Error fetching specialties:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSpecialties();
  }, []);

  if (loading) return <Typography>Loading...</Typography>;

  return (
    <Container>
      <Box sx={{ margin: "80px 0px", textAlign: "center" }}>
        <Box sx={{ textAlign: "start" }}>
          <Typography variant="h4" fontWeight={600}>
            Explore Treatments Across Specialties
          </Typography>
          <Typography component="p" fontWeight={300} fontSize={18} mt={1}>
            Experienced Doctors Across All Specialties
          </Typography>
        </Box>

        <Stack direction="row" gap={4} mt={5} flexWrap="wrap">
          {specialties?.slice(0, 6).map((specialty) => (
            <Box
              key={specialty._id}
              sx={{
                flex: "1 1 150px",
                maxWidth: "200px",
                backgroundColor: "rgba(245, 245, 245,1)",
                border: "1px solid rgba(250, 250, 250, 1)",
                borderRadius: "10px",
                textAlign: "center",
                padding: "40px 10px",
                transition: "all 0.5s",
                "& img": {
                  width: "100px",
                  height: "100px",
                  margin: "0 auto",
                },
                "&:hover": {
                  border: "1px solid rgba(36, 153, 239, 1)",
                  cursor: "pointer",
                },
              }}
            >
              <Image
                src={specialty.icon}
                width={100}
                height={100}
                alt="specialty icon"
              />
              <Typography component="p" fontWeight={600} fontSize={18} mt={2}>
                {specialty.title}
              </Typography>
            </Box>
          ))}
        </Stack>

        <Button variant="outlined" sx={{ marginTop: "20px" }}>
          View ALL
        </Button>
      </Box>
    </Container>
  );
};

export default Specialist;
