import React from "react";
import {
  Typography,
  Box,
  Grid,
  List,
  ListItem,
  ListItemText,
  Paper,
} from "@mui/material";

const DiagnosticsPage = () => {
  return (
    <Box sx={{ maxWidth: "1200px", margin: "auto", padding: "24px" }}>
      <Typography
        variant="h3"
        sx={{ fontWeight: "bold", marginBottom: "24px" }}
      >
        Diagnostics: Understanding the Importance in Healthcare
      </Typography>

      <Typography variant="body1" color="textSecondary" paragraph>
        Diagnostics play a crucial role in healthcare, enabling healthcare
        professionals to identify diseases, conditions, and underlying health
        issues, which are essential for planning effective treatments. In a
        broad sense, diagnostics refers to the methods, tools, and processes
        used to detect, identify, and assess various health conditions. Here is
        a breakdown of what diagnostics involves:
      </Typography>

      <Grid container spacing={4}>
        {/* Section 1: Types of Diagnostic Methods */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ padding: "24px", borderRadius: "8px" }}>
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", marginBottom: "16px" }}
            >
              1. Types of Diagnostic Methods
            </Typography>
            <List>
              <ListItem>
                <ListItemText
                  primary="Clinical Diagnosis"
                  secondary="Based on the healthcare provider's observations, patient history, physical exams, and other clinical tools."
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Laboratory Tests"
                  secondary="Involve analyzing bodily fluids like blood, urine, and saliva to uncover signs of disease or infection."
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Imaging Techniques"
                  secondary="X-rays, MRI, CT Scans, and Ultrasounds are used to provide visuals of the body's internal structures."
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Genetic Testing"
                  secondary="Advancements in genetics allow for detecting inherited diseases or genetic predispositions."
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Endoscopy"
                  secondary="Inserting a flexible tube with a camera into the body to view internal organs and structures."
                />
              </ListItem>
            </List>
          </Paper>
        </Grid>

        {/* Section 2: Diagnostic Devices */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ padding: "24px", borderRadius: "8px" }}>
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", marginBottom: "16px" }}
            >
              2. Diagnostic Devices
            </Typography>
            <List>
              <ListItem>
                <ListItemText
                  primary="Wearable Devices"
                  secondary="Devices like heart rate monitors and glucose sensors help track health data in real time."
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Point-of-care Devices"
                  secondary="Portable diagnostic tools for rapid testing, providing quick results at the site of care."
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Artificial Intelligence (AI) in Diagnostics"
                  secondary="AI analyzes medical data faster and more accurately than traditional methods, enhancing diagnostics."
                />
              </ListItem>
            </List>
          </Paper>
        </Grid>

        {/* Section 3: Importance of Diagnostics */}
        <Grid item xs={12} md={12}>
          <Paper elevation={3} sx={{ padding: "24px", borderRadius: "8px" }}>
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", marginBottom: "16px" }}
            >
              3. Importance of Diagnostics in Healthcare
            </Typography>
            <List>
              <ListItem>
                <ListItemText
                  primary="Accurate Diagnosis"
                  secondary="Ensures effective treatment options by correctly identifying the condition."
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Preventive Care"
                  secondary="Early detection helps prevent diseases or catch them in their early stages."
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Personalized Medicine"
                  secondary="Genetic testing enables tailored treatments based on individual health needs."
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Treatment Monitoring"
                  secondary="Allows doctors to monitor patient responses to treatments and adjust accordingly."
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Cost-Effective"
                  secondary="Timely, targeted interventions reduce unnecessary treatments and hospitalizations."
                />
              </ListItem>
            </List>
          </Paper>
        </Grid>

        {/* Section 4: Challenges in Diagnostics */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ padding: "24px", borderRadius: "8px" }}>
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", marginBottom: "16px" }}
            >
              4. Challenges in Diagnostics
            </Typography>
            <List>
              <ListItem>
                <ListItemText
                  primary="Access to Quality Diagnostics"
                  secondary="Limited access in many regions, especially in developing countries, leads to misdiagnoses or delays."
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="False Positives/Negatives"
                  secondary="Inaccurate diagnostic results can lead to unnecessary treatments or missed diagnoses."
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="High Costs"
                  secondary="Advanced diagnostic technologies can be expensive, limiting availability in some healthcare settings."
                />
              </ListItem>
            </List>
          </Paper>
        </Grid>

        {/* Section 5: Future of Diagnostics */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ padding: "24px", borderRadius: "8px" }}>
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", marginBottom: "16px" }}
            >
              5. Future of Diagnostics
            </Typography>
            <List>
              <ListItem>
                <ListItemText
                  primary="Telemedicine and Remote Diagnostics"
                  secondary="Remote consultations and diagnostics provide better access to healthcare in underserved areas."
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Liquid Biopsy"
                  secondary="A non-invasive test for detecting cancers and genetic mutations, revolutionizing early detection."
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Nanotechnology"
                  secondary="Nano-sized diagnostic tools could lead to precise, early disease detection before symptoms occur."
                />
              </ListItem>
            </List>
          </Paper>
        </Grid>
      </Grid>

      <Typography
        variant="body1"
        color="textSecondary"
        paragraph
        sx={{ marginTop: "32px" }}
      >
        Diagnostics are at the core of modern medicine, offering essential
        insights into a person’s health and enabling healthcare providers to
        offer timely, effective treatment. With advances in technology and
        medical research, diagnostic methods continue to evolve, bringing
        greater accuracy, accessibility, and efficiency to healthcare. Early
        diagnosis, preventive measures, and personalized treatment plans will
        ultimately improve health outcomes and quality of life for patients.
      </Typography>
    </Box>
  );
};

export default DiagnosticsPage;
