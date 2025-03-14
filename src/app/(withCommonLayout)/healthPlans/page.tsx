import React from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardActionArea,
  Grid,
  Link,
} from "@mui/material";

const articles = [
  {
    title: "Health Insurance Costs Are Increasing",
    description:
      "Rising health insurance premiums are linked to market concentration among fewer companies, reducing competition and increasing prices.",
    source: "Government Accountability Office",
    link: "https://www.gao.gov/blog/health-insurance-costs-are-increasing-markets-become-more-concentrated-fewer-insurance-companies-interactive-map",
  },
  {
    title: "Growth of Private Healthcare Raises Questions for NHS",
    description:
      "The growing demand for private healthcare in the UK is raising concerns about the future of the National Health Service (NHS).",
    source: "The Times",
    link: "https://www.thetimes.co.uk/article/growth-of-private-healthcare-raises-questions-for-nhs-frh95lx88",
  },
  {
    title: "New Health Insurer Sees Major Price Hike in Ireland",
    description:
      "Level Health, a new insurance provider, announced a 6% price increase just five months after entering the Irish market.",
    source: "The Irish Sun",
    link: "https://www.thesun.ie/money/14844198/new-insurer-price-hike-irish-market-level-health-ireland",
  },
  {
    title: "Health Policy News & Insights",
    description:
      "A collection of articles discussing health equity, Medicare, Medicaid integration, and policy changes affecting health plans.",
    source: "Health Affairs",
    link: "https://www.healthaffairs.org/forefront",
  },
  {
    title: "Health News and Analysis",
    description:
      "Insights into affordability, mental health, and hospital markups from Blue Cross Blue Shield.",
    source: "Blue Cross Blue Shield",
    link: "https://www.bcbs.com/news-and-insights",
  },
];

const HealthPlanPage = () => {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Latest Updates on Health Plans
      </Typography>
      <Typography variant="body1" color="textSecondary" paragraph>
        Staying informed about health insurance changes is essential for making
        well-informed decisions. Here are some recent articles on key industry
        developments:
      </Typography>

      <Grid container spacing={3}>
        {articles.map((article, index) => (
          <Grid item xs={12} sm={6} md={6} key={index}>
            <Card sx={{ height: "100%" }}>
              <CardActionArea
                component={Link}
                href={article.link}
                target="_blank"
              >
                <CardContent>
                  <Typography variant="h6" fontWeight="bold">
                    {article.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" paragraph>
                    {article.description}
                  </Typography>
                  <Typography variant="caption" color="primary">
                    {article.source}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default HealthPlanPage;
