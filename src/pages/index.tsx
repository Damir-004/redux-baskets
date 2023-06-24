import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useAppSelector } from "../store/store";
import ProductItem from "../components/ProductItem";
import CartItem from "../components/CartItem";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, } = props;
  return (
    <div>
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default function Shop() {
  const { shop, products } = useAppSelector((state) => state.shop);
  console.log(products);

  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
        >
          <Tab label="Products"/>
          <Tab label="Cart"/>
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <ul className="products">
          {products.map((item) => (
            <ProductItem key={item.id} item={item} />
          ))}
        </ul>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ul className="carts">
          {shop.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </ul>
      </TabPanel>
      <TabPanel value={value} index={1}>
        {shop.length >= 0 ? (
          <ul className="carts">
            {shop.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </ul>
        ) : (
          <div>Пусто!</div>
        )}
      </TabPanel>
    </Box>
  );
}
