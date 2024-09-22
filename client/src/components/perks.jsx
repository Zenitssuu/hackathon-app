import React from 'react';
import { Grid, Card, CardContent, Typography, Box } from '@mui/material';
import { Checklist, Groups, SmartToy, Verified } from '@mui/icons-material'; // Relevant MUI icons

const ChallengeCard = ({ icon: IconComponent, title, description }) => {
  return (
    <Card 
      sx={{
        minHeight: 200,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        p: 2,
        boxShadow: 3, 
        transition: 'transform 0.3s ease',
        '&:hover': {
          transform: 'scale(1.05)',
        },
      }}
    >
      <Box mb={2} display="flex" justifyContent="center">
        {/* Pre-selected icon */}
        <IconComponent style={{ fontSize: 50, color: 'green' }} />
      </Box>
      <Typography variant="h6" align="center" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body2" align="center">
        {description}
      </Typography>
    </Card>
  );
};

const AIChallenges = () => {
  // Pre-defined card data with appropriate icons from Material UI
  const cardData = [
    {
      icon: Checklist,
      title: 'Prove your skills',
      description: 'Gain substantial experience by solving real-world problems and pit against others to come up with innovative solutions.',
    },
    {
      icon: Groups,
      title: 'Learn from community',
      description: 'One can look and analyze the solutions submitted by other Data Scientists in the community and learn from them.',
    },
    {
      icon: SmartToy,
      title: 'Challenge yourself',
      description: 'There is nothing for you to lose by participating in a challenge. You can fail safe, learn out of the entire experience and bounce back harder.',
    },
    {
      icon: Verified,
      title: 'Earn recognition',
      description: 'You will stand out from the crowd if you do well in AI challenges, it helps you shine in the community and also earns rewards.',
    },
  ];

  return (
    <Box sx={{ padding: '50px' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Why Participate in AI Challenges?
      </Typography>
      <Grid container spacing={4} sx={{ mt: 4 }}>
        {cardData.map((card, index) => (
          <Grid item xs={12} md={6} key={index}>
            {/* Grid of 2 columns on medium and larger screens */}
            <ChallengeCard 
              icon={card.icon} 
              title={card.title} 
              description={card.description} 
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AIChallenges;
