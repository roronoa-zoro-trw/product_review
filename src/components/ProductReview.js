import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Rating, 
  TextField, 
  Button, 
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormControl
} from '@mui/material';

const ProductReview = () => {
  const [ratings, setRatings] = useState({
    qualité: 0,
    confort: 0,
    fonctionnalité: 0,
    durabilité: 0,
    livraison: 0
  });
  const [priceQualityRatio, setPriceQualityRatio] = useState(0);
  const [recommendation, setRecommendation] = useState('');
  const [feedback, setFeedback] = useState('');
  const [openDialog, setOpenDialog] = useState(false);
  const [averageRating, setAverageRating] = useState(0);

  const handleRatingChange = (category, value) => {
    setRatings(prev => ({
      ...prev,
      [category]: value
    }));
  };

  const handleReset = () => {
    setRatings({
      qualité: 0,
      confort: 0,
      fonctionnalité: 0,
      durabilité: 0,
      livraison: 0
    });
    setPriceQualityRatio(0);
    setRecommendation('');
    setFeedback('');
  };

  const handleSubmit = () => {
    if (!recommendation) {
      alert('Veuillez indiquer si vous recommanderiez ce produit.');
      return;
    }

    const weights = {
      qualité: 0.25,    // 25%
      confort: 0.25,      // 25%
      fonctionnalité: 0.20,     // 20%
      durabilité: 0.20, // 20%
      livraison: 0.10 // 10%
    };
    
    const weightedSum = Object.entries(ratings).reduce((sum, [category, value]) => {
      return sum + (value * weights[category]);
    }, 0);
    
    setAverageRating(weightedSum);
    setOpenDialog(true);
  };

  return (
    <Box sx={{ 
      maxWidth: 600, 
      margin: '2rem auto',
      padding: 4,
      backgroundColor: 'white',
      borderRadius: 3,
      boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)'
    }}>
      <Typography variant="h4" sx={{ mb: 4, textAlign: 'center', color: 'primary.main' }}>
        Formulaire d'évaluation du produit
      </Typography>
      <Box sx={{ textAlign: 'center', marginBottom: 4 }}>
        <img 
          src="/images/product.png" 
          alt="Product"
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      </Box>
      <Typography variant="h6" sx={{ mb: 3, color: 'secondary.main' }}>
        Veuillez évaluer votre expérience avec notre produit
      </Typography>

      {Object.entries(ratings).map(([category, value]) => (
        <Box 
          key={category} 
          sx={{ 
            marginBottom: 2.5,
            padding: 2,
            backgroundColor: '#f8fafc',
            borderRadius: 2
          }}
        >
          <Typography 
            component="legend" 
            sx={{ 
              textTransform: 'capitalize',
              fontWeight: 500,
              marginBottom: 1
            }}
          >
            {category}
          </Typography>
          <Rating
            name={category}
            value={value}
            onChange={(event, newValue) => handleRatingChange(category, newValue)}
            size="large"
          />
        </Box>
      ))}

      <Box 
        sx={{ 
          marginTop: 4,
          marginBottom: 2.5,
          padding: 2,
          backgroundColor: '#f8fafc',
          borderRadius: 2
        }}
      >
        <Typography 
          component="legend" 
          sx={{ 
            fontWeight: 500,
            marginBottom: 1
          }}
        >
          Rapport Qualité/Prix (1-10)
        </Typography>
        <Rating
          name="price-quality-ratio"
          value={priceQualityRatio}
          max={10}
          onChange={(event, newValue) => setPriceQualityRatio(newValue)}
          size="large"
        />
      </Box>

      <Box 
        sx={{ 
          marginTop: 4,
          marginBottom: 2.5,
          padding: 2,
          backgroundColor: '#f8fafc',
          borderRadius: 2
        }}
      >
        <Typography 
          component="legend" 
          sx={{ 
            fontWeight: 500,
            marginBottom: 1
          }}
        >
          Recommanderiez-vous ce produit ?
        </Typography>
        <FormControl>
          <RadioGroup
            row
            value={recommendation}
            onChange={(e) => setRecommendation(e.target.value)}
          >
            <FormControlLabel value="yes" control={<Radio />} label="Oui" />
            <FormControlLabel value="no" control={<Radio />} label="Non" />
          </RadioGroup>
        </FormControl>
      </Box>

      <Typography variant="h6" sx={{ mt: 4, mb: 2, color: 'secondary.main' }}>
        Partagez votre avis
      </Typography>
      <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
        Votre avis compte ! N'hésitez pas à partager vos commentaires et suggestions.
      </Typography>
      <TextField
        fullWidth
        multiline
        rows={4}
        margin="normal"
        label="Commentaires généraux"
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        sx={{
          marginTop: 3,
          '& .MuiOutlinedInput-root': {
            borderRadius: 2,
            backgroundColor: '#f8fafc',
          }
        }}
      />

      <Box sx={{ mt: 3, display: 'flex', gap: 2, justifyContent: 'center' }}>
        <Button variant="outlined" onClick={handleReset}>
          Annuler
        </Button>
        <Button variant="contained" onClick={handleSubmit}>
          Envoyer
        </Button>
      </Box>

      <Dialog 
        open={openDialog} 
        onClose={() => setOpenDialog(false)}
        PaperProps={{
          sx: {
            borderRadius: 3,
            padding: 2
          }
        }}
      >
        <DialogTitle sx={{ textAlign: 'center', fontWeight: 600 }}>
          Résumé de l'évaluation
        </DialogTitle>
        <DialogContent>
          <Typography gutterBottom>
            Note globale : {averageRating.toFixed(1)} / 5
          </Typography>
          <Typography gutterBottom>
            Rapport Qualité/Prix : {priceQualityRatio} / 10
          </Typography>
          <Typography gutterBottom>
            Recommandation : {recommendation === 'yes' ? 'Oui' : recommendation === 'no' ? 'Non' : 'Non spécifié'}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Merci d'avoir pris le temps de partager votre avis avec nous. Votre opinion nous aide à améliorer nos produits !
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Fermer</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ProductReview;
