'use client';
import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Box, Typography, Button, IconButton, Tabs, Tab, Grid, styled } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Image from 'next/image';
import productsData from '../../../data/products.json';


const OptionButton = styled(Button)(({ theme }) => ({
  marginRight: theme.spacing(1),
  marginBottom: theme.spacing(1),
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.spacing(2),
  '&.selected': {
    backgroundColor: '#A0522D', 
    color: theme.palette.common.white,
    borderColor: '#A0522D', 
  },
}));

const CustomTab = styled(Tab)(({ theme }) => ({
  textTransform: 'none',
  fontWeight: theme.typography.fontWeightRegular,
  '&.Mui-selected': {
    fontWeight: theme.typography.fontWeightMedium,
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`custom-tabpanel-${index}`}
      aria-labelledby={`custom-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 2 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `custom-tab-${index}`,
    'aria-controls': `custom-tabpanel-${index}`,
  };
}

export default function ProductDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState({}); 
  const [tabValue, setTabValue] = useState(0);

  useEffect(() => {
    const findProduct = () => {
      const foundProduct = productsData.find(item => item.id.toString() === id);
      setProduct(foundProduct);
    };

    findProduct();
  }, [id]);

  const handleSizeSelect = (sizeName) => {
    setSelectedSize(sizeName === selectedSize ? null : sizeName);
  };

  const handleOptionSelect = (optionType, optionName) => {
    setSelectedOptions({
      ...selectedOptions,
      [optionType]: selectedOptions[optionType] === optionName ? null : optionName,
    });
  };

  const handleMultiOptionSelect = (optionType, optionName) => {
    setSelectedOptions({
      ...selectedOptions,
      [optionType]: selectedOptions[optionType]?.includes(optionName)
        ? selectedOptions[optionType].filter((o) => o !== optionName)
        : [...(selectedOptions[optionType] || []), optionName],
    });
  };

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  if (!product) {
    return <Typography>Loading product details...</Typography>;
  }

  const customizationTabs = [
    { label: 'Sizes', key: 'sizes' },
    { label: 'Toppings', key: 'toppings' },
    { label: 'Sauces', key: 'sauces' },
    // နောက်ထပ် Tabs များ ထည့်နိုင်သည်
  ];

  return (
    <Box sx={{ p: 3 }}>
      <IconButton onClick={() => router.back()} sx={{ mb: 2 }}>
        <ArrowBackIcon />
      </IconButton>

      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 3 }}>
        {/* ဘယ်ဘက်ခြမ်း - ပုံ */}
        <Box sx={{ maxWidth: 400, width: '100%' }}>
          {product.image && (
            <Image
              src={product.image}
              alt={product.name}
              width={400}
              height={300}
              style={{ objectFit: 'contain', width: '100%', height: 'auto' }}
            />
          )}
        </Box>

        {/* ညာဘက်ခြမ်း - အသေးစိတ်အချက်အလက်များ */}
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h5" component="div" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" gutterBottom>
            Price: ${product.price ? product.price.toFixed(2) : 'N/A'}
          </Typography>
          <Typography variant="body2" color="text.secondary" paragraph>
            {product.description || 'No description available.'}
          </Typography>

          {/* Customization Tabs */}
          <Box sx={{ width: '100%', mt: 2 }}>
            <Tabs value={tabValue} onChange={handleTabChange} aria-label="customization tabs" TabIndicatorProps={{ style: { backgroundColor: '#A0522D' } }}>
              {customizationTabs.map((tab, index) => (
                <CustomTab key={tab.key} label={tab.label} {...a11yProps(index)} />
              ))}
            </Tabs>

            {/* Tab Panels */}
            {customizationTabs.map((tab, index) => (
              <TabPanel key={tab.key} value={tabValue} index={index}>
                <Grid container spacing={2}>
                  {product[tab.key]?.map((option) => (
                    <Grid item xs={6} sm={4} md={3} key={option.name}>
                      {tab.key === 'sizes' ? (
                        <OptionButton
                          variant="outlined"
                          fullWidth
                          className={selectedSize === option.name ? 'selected' : ''}
                          onClick={() => handleSizeSelect(option.name)}
                        >
                          <Typography variant="subtitle2">{option.name}</Typography>
                          {option.price && <Typography variant="caption" color="text.secondary">(+ ${option.price.toFixed(2)})</Typography>}
                          {option.priceModifier !== undefined && <Typography variant="caption" color="text.secondary">(+ ${option.priceModifier.toFixed(2)})</Typography>}
                        </OptionButton>
                      ) : (
                        <OptionButton
                          variant="outlined"
                          fullWidth
                          className={selectedOptions[tab.key]?.includes(option.name) ? 'selected' : ''}
                          onClick={() => handleMultiOptionSelect(tab.key, option.name)}
                        >
                          <Typography variant="subtitle2">{option.name}</Typography>
                          {option.price && <Typography variant="caption" color="text.secondary">(+ ${option.price.toFixed(2)})</Typography>}
                          {option.priceModifier !== undefined && <Typography variant="caption" color="text.secondary">(+ ${option.priceModifier.toFixed(2)})</Typography>}
                        </OptionButton>
                      )}
                    </Grid>
                  ))}
                </Grid>
              </TabPanel>
            ))}
          </Box>

          <Button variant="contained" color="primary" sx={{ mt: 2 }}>
            Add to Cart
          </Button>
        </Box>
      </Box>
    </Box>
  );
}