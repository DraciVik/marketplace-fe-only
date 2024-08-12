import "./globals.css";
import Link from "next/link";
import { Button, AppBar, Toolbar, Typography, Container } from "@mui/material";
import {CartProvider} from "./CartContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <AppBar position="fixed">
            <Toolbar>
              <Link href="/" passHref>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    cursor: "pointer",
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  My Store
                </Typography>
              </Link>
              <div className="grow" />
              <Button color="inherit" component={Link} href="/cart">
                View Cart
              </Button>
            </Toolbar>
          </AppBar>
          <Container sx={{ marginTop: "80px" }}>{children}</Container>
        </CartProvider>
      </body>
    </html>
  );
}
