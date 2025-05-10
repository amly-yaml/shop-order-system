"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  Box,
  Typography,
  Button,
  IconButton,
  Tabs,
  Tab,
  Grid,
  styled,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Image from "next/image";
import productsData from "../../../data/products.json";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addToOrder } from "../../../../redux/orderSlice";


const OptionButton = styled(Button)(({ theme }) => ({
  marginRight: theme.spacing(1),
  marginBottom: theme.spacing(1),
  border: `1px solid #D3D3D3`, 
  borderRadius: theme.spacing(2),
  backgroundColor: "#FFCC80", 
  color: "#2D2D2D", 
  "&.selected": {
    backgroundColor: "#6F4F37",
    color: "#FFFFFF", 
    borderColor: "#6F4F37",
  },
  "&:hover": {
    backgroundColor: "#FFB74D",
    color: "#6F4F37", 
  },
}));


const CustomTab = styled(Tab)(({ theme }) => ({
  textTransform: "none",
  fontWeight: theme.typography.fontWeightRegular,
  color: "#6F4F37",
  "&.Mui-selected": {
    fontWeight: theme.typography.fontWeightMedium,
    color: "#6F4F37",
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
      {value === index && <Box sx={{ p: 2 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `custom-tab-${index}`,
    "aria-controls": `custom-tabpanel-${index}`,
  };
}

 function ProductDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [tabValue, setTabValue] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    const findProduct = () => {
      const foundProduct = productsData.find((item) => item.id.toString() === id);
      setProduct(foundProduct);
    };

    findProduct();
  }, [id]);

  const handleSizeSelect = (sizeName) => {
    setSelectedSize(sizeName === selectedSize ? null : sizeName);
  };

  const handleOptionSelect = (optionType, optionName) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [optionType]: prevOptions[optionType] === optionName ? null : optionName,
    }));
  };

  const handleMultiOptionSelect = (optionType, optionName) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [optionType]: prevOptions[optionType]?.includes(optionName)
        ? prevOptions[optionType].filter((o) => o !== optionName)
        : [...(prevOptions[optionType] || []), optionName],
    }));
  };

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleAddToOrder = () => {
    if (product) {
      const itemToAdd = {
        id: product.id,
        name: product.name,
        price: product.price,
        size: selectedSize,
        options: selectedOptions,
        quantity: 1,
      };
      dispatch(addToOrder(itemToAdd));
    }
  };

  if (!product) {
    return <Typography>Loading product details...</Typography>;
  }

  const customizationTabs = [
    { label: 'Sizes', key: 'sizes' },
    { label: 'Toppings', key: 'toppings' },
  ];

  return (
    <Box sx={{ p: 3, bgcolor: '#FFF8E1', borderRadius: 10 }}>
      <IconButton onClick={() => router.back()} sx={{ mb: 2 }}>
        <ArrowBackIcon />
      </IconButton>

      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 3 }}>
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

        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h5" component="div" gutterBottom sx={{ color: '#6F4F37' }}>
            {product.name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" gutterBottom>
            Price: ${product.price ? product.price.toFixed(2) : 'N/A'}
          </Typography>
          <Typography variant="body2" color="text.secondary" paragraph>
            {product.description || 'No description available.'}
          </Typography>

          <Box sx={{ width: '100%', mt: 2 }}>
            <Tabs value={tabValue} onChange={handleTabChange} aria-label="customization tabs" TabIndicatorProps={{ style: { backgroundColor: '#6F4F37' } }}>
              {customizationTabs.map((tab, index) => (
                <CustomTab key={tab.key} label={tab.label} {...a11yProps(index)} />
              ))}
            </Tabs>

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

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Button variant="contained" sx={{ mt: 2, mr: 3, backgroundColor: "#6F4F37", color: "#fff" }} onClick={handleAddToOrder}>
              Add to Order
            </Button>
            <Link href="/my-orders" style={{ textDecoration: "none" }}>
              <Button variant="contained" sx={{ mt: 2, backgroundColor: "#FFCC80", color: "#2D2D2D" }}>
                Go to My Orders
              </Button>
            </Link>
            <Link href="/" style={{ textDecoration: "none", marginLeft: 10 }}>
              <Button variant="contained" sx={{ mt: 2, backgroundColor: "#6F4F37", color: "#fff" }}>
                Cancel Item
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
export default ProductDetailPage;