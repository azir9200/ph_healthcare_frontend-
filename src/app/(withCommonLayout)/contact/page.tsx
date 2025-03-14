"use client";
import {
  Box,
  Stack,
  Typography,
  TextField,
  Button,
  Paper,
} from "@mui/material";
import { useState } from "react"; 
import { toast } from "sonner";

const ContactPage = () => {
  // State for the form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Handler for form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); 
    // Show success toast
    toast.success("Message sent successfully!");

    // Reset form fields
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <Stack spacing={4} p={4} maxWidth={800} mx="auto">
      {/* Contact Info Section */}
      <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
        <Typography variant="h4" fontWeight="bold" color="primary">
          Contact Us
        </Typography>
        <Typography variant="body1" mt={2}>
          Have questions or need assistance? Reach out to us anytime, and our
          team will be happy to help!
        </Typography>

        <Box mt={3}>
          <Typography variant="h6" fontWeight="bold">
            Address:
          </Typography>
          <Typography variant="body1">
            123 Health St, Wellness City, WP 45678
          </Typography>
        </Box>

        <Box mt={2}>
          <Typography variant="h6" fontWeight="bold">
            Email:
          </Typography>
          <Typography variant="body1">support@phhealthcare.com</Typography>
        </Box>

        <Box mt={2}>
          <Typography variant="h6" fontWeight="bold">
            Phone:
          </Typography>
          <Typography variant="body1">+1 (234) 567-890</Typography>
        </Box>
      </Paper>

      {/* Contact Form */}
      <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
        <Typography variant="h5" fontWeight="bold" color="primary">
          Get In Touch
        </Typography>
        <form onSubmit={handleSubmit}>
          <Stack spacing={2} mt={2}>
            <TextField
              label="Your Name"
              variant="outlined"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              label="Your Email"
              type="email"
              variant="outlined"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Your Message"
              multiline
              rows={4}
              variant="outlined"
              fullWidth
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <Button type="submit" variant="contained" color="primary">
              Send Message
            </Button>
          </Stack>
        </form>
      </Paper>

      {/* Article Section */}
      <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
        <Typography variant="h5" fontWeight="bold" color="primary">
          The Importance of Effective Communication in Healthcare
        </Typography>
        <Typography variant="body1" mt={2}>
          Communication is a cornerstone of effective healthcare. Whether it is
          between doctors and patients or among healthcare professionals, clear
          and accurate communication ensures proper treatment and improved
          patient outcomes. Miscommunication can lead to delays in care,
          incorrect diagnoses, and decreased patient satisfaction.
        </Typography>
        <Typography variant="body1" mt={2}>
          With the rise of digital healthcare platforms, patients now have more
          accessible ways to connect with medical professionals. Utilizing
          telemedicine, online consultations, and secure messaging systems can
          bridge the gap between doctors and patients, making healthcare more
          efficient.
        </Typography>
        <Typography variant="body1" mt={2}>
          At PH Health Care, we prioritize seamless communication by offering
          multiple channels to reach our team. Whether you prefer online
          messaging, phone calls, or in-person visits, we ensure that your
          health concerns are addressed with clarity and care.
        </Typography>
      </Paper>

      {/* Toast Container */}
      <div>
        {/* Toast container for displaying toast notifications */}
        {/* <toast.ToastContainer /> */}
      </div>
    </Stack>
  );
};

export default ContactPage;
