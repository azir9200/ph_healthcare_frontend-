import React from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  List,
  ListItem,
  Link,
} from "@mui/material";

const ConsultationPage = () => {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      {/* Page Title */}
      <Typography variant="h4" color="primary" textAlign="center" gutterBottom>
        Effective Doctor Consultations
      </Typography>
      <Typography
        variant="subtitle1"
        color="textSecondary"
        textAlign="center"
        mb={3}
      >
        Enhance your medical consultation experience with these key strategies.
      </Typography>

      {/* Section 1: Preparing for Your Appointment */}
      <Card sx={{ mb: 4, p: 2, boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h5" color="secondary" gutterBottom>
            1. Preparing for Your Appointment
          </Typography>
          <List>
            <ListItem>
              ✔ <strong>Prioritize Concerns:</strong> List your symptoms and
              questions.
            </ListItem>
            <ListItem>
              ✔ <strong>Honesty is Essential:</strong> Be transparent about all
              symptoms.
            </ListItem>
            <ListItem>
              ✔ <strong>Bring Support:</strong> A companion can help remember
              details.
            </ListItem>
          </List>
          <Link
            href="https://www.theguardian.com/lifeandstyle/2025/mar/02/dont-be-afraid-to-cry-or-to-interrupt-doctors-tips-for-making-the-most-of-your-medical-appointment"
            target="_blank"
            underline="hover"
          >
            Read more on The Guardian →
          </Link>
        </CardContent>
      </Card>

      {/* Section 2: Effective Communication */}
      <Card sx={{ mb: 4, p: 2, boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h5" color="secondary" gutterBottom>
            2. Effective Communication During Consultation
          </Typography>
          <List>
            <ListItem>
              ✔ <strong>Be Descriptive:</strong> Explain symptoms clearly.
            </ListItem>
            <ListItem>
              ✔ <strong>Ask Questions:</strong> Seek clarification when needed.
            </ListItem>
            <ListItem>
              ✔ <strong>Advocate for Yourself:</strong> Ensure your concerns are
              addressed.
            </ListItem>
          </List>
          <Link
            href="https://time.com/7209940/doctors-appointment-medical-symptoms-not-taken-seriously/"
            target="_blank"
            underline="hover"
          >
            Read more on TIME →
          </Link>
        </CardContent>
      </Card>

      {/* Section 3: Understanding Consultation Models */}
      <Card sx={{ mb: 4, p: 2, boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h5" color="secondary" gutterBottom>
            3. Understanding Consultation Models
          </Typography>
          <Typography>
            The <strong>Calgary–Cambridge Model</strong> structures medical
            consultations into key phases, focusing on communication and patient
            care.
          </Typography>
          <Link
            href="https://en.wikipedia.org/wiki/Calgary%E2%80%93Cambridge_model"
            target="_blank"
            underline="hover"
          >
            Learn more on Wikipedia →
          </Link>
        </CardContent>
      </Card>

      {/* Section 4: Shared Decision-Making */}
      <Card sx={{ mb: 4, p: 2, boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h5" color="secondary" gutterBottom>
            4. Shared Decision-Making
          </Typography>
          <List>
            <ListItem>
              ✔ <strong>Collaborative Approach:</strong> Discuss treatment
              options together.
            </ListItem>
            <ListItem>
              ✔ <strong>Use Tools:</strong> SURE questionnaire helps assess
              comfort with decisions.
            </ListItem>
          </List>
          <Link
            href="https://en.wikipedia.org/wiki/Shared_decision-making_in_medicine"
            target="_blank"
            underline="hover"
          >
            Learn more on Wikipedia →
          </Link>
        </CardContent>
      </Card>

      {/* Section 5: Seeking Second Opinions */}
      <Card sx={{ mb: 4, p: 2, boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h5" color="secondary" gutterBottom>
            5. Seeking Second Opinions
          </Typography>
          <List>
            <ListItem>
              ✔ <strong>When in Doubt:</strong> A second opinion provides
              reassurance.
            </ListItem>
            <ListItem>
              ✔ <strong>Empowerment:</strong> Helps reduce unnecessary
              treatments.
            </ListItem>
          </List>
          <Link
            href="https://www.theguardian.com/commentisfree/2024/nov/06/cancer-getting-a-second-opinion"
            target="_blank"
            underline="hover"
          >
            Read more on The Guardian →
          </Link>
        </CardContent>
      </Card>

      {/* Conclusion */}
      <Typography
        variant="body1"
        color="textSecondary"
        textAlign="center"
        mt={4}
      >
        Implement these strategies to improve your medical consultations and
        achieve better health outcomes.
      </Typography>
    </Container>
  );
};

export default ConsultationPage;
