import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Container,
  Link,
} from "@mui/material";

const MedicinePage = () => {
  const articles = [
    {
      title: "Health Effects of Ultraprocessed Foods",
      description:
        "Researchers at the National Institutes of Health (NIH) are conducting a study to understand the health effects of ultraprocessed foods, which constitute over 70% of the U.S. food supply. Preliminary results suggest that consuming ultraprocessed foods leads to increased calorie intake and weight gain. These findings may influence future dietary guidelines and health policies.",
      source: "APNEWS.COM",
    },
    {
      title: "Genetic Benefits of Regular Blood Donation",
      description:
        "Regular blood donation has been linked to beneficial genetic mutations in the DNMT3A gene, enhancing blood cell production and potentially reducing the risk of blood cancers. Additionally, frequent blood donors may experience lower blood pressure, contributing to overall cardiovascular health.",
      source: "THE SUN",
    },
    {
      title: "Health Risks Associated with Slushies Containing Glycerol",
      description:
        "A study found that at least 21 children in the U.K. and Ireland were hospitalized after consuming slush ice drinks containing glycerol, a common ingredient used to create the 'slush' effect. Symptoms included decreased consciousness, low blood sugar, and low potassium levels.",
      source: "PEOPLE",
    },
    {
      title: "Potential Cure for Recurrent Urinary Tract Infections",
      description:
        "Researchers are exploring a new method to deliver antibiotics directly into bladder tissue to treat recurrent urinary tract infections (UTIs). This approach aims to improve treatment efficacy and reduce the risk of antibiotic resistance.",
      source: "SCIENCE DAILY",
    },
    {
      title: "Impact of Microplastics on Brain Health",
      description:
        "Emerging research indicates that microplastics are present in human brains, raising concerns about potential health implications. Experts recommend limiting exposure to these pollutants to mitigate possible risks.",
      source: "MEDICALNEWSTODAY.COM",
    },
    {
      title: "Strength Training as a Remedy for Insomnia in Older Adults",
      description:
        "Studies suggest that strength training exercises may help older adults overcome insomnia, improving sleep quality and overall health.",
      source: "MEDICALNEWSTODAY.COM",
    },
    {
      title: "Advances in Polio Vaccines",
      description:
        "Researchers are developing more affordable and lower-risk polio vaccines, aiming to enhance global vaccination efforts and prevent the disease's resurgence.",
      source: "SCIENCE DAILY",
    },
    {
      title: "Blood Test Shows Promise for Early Detection of Dementia",
      description:
        "A new blood test could predict the development of dementia years before symptoms appear, particularly in individuals with certain sleep disorders.",
      source: "SCIENCE DAILY",
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom align="center">
        Recent Developments in Medicine
      </Typography>
      <Grid container spacing={4}>
        {articles.map((article, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h6" component="h2" gutterBottom>
                  {article.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {article.description}
                </Typography>
                <Link
                  href="#"
                  variant="body2"
                  color="primary"
                  underline="hover"
                >
                  Read more at {article.source}
                </Link>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default MedicinePage;
