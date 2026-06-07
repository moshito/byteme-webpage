import Image from "next/image";
import Link from "next/link";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions"; // Ha kul
import GroupIcon from "@mui/icons-material/Group"; // Gemenskap
import SchoolIcon from "@mui/icons-material/School"; // Lära sig nytt
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Page() {
  return (
    <>
      {/* Hero */}
      <Box
        sx={{
          bgcolor: "#004AAD",
          py: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Image src="/logo.svg" alt="Byte Me logo" width={150} height={150} />
        <Typography
          variant="h5"
          sx={{ color: "white", fontWeight: 700, mt: 2 }}
        >
          <span style={{ opacity: 0.7 }}>{"<"}</span>
          {" Byte Me "}
          <span style={{ opacity: 0.7 }}>{"/>"}</span>
        </Typography>
        <Link
          href="https://www.linkedin.com/company/byte-me-uppsala/"
          target="_blank"
        >
          <LinkedInIcon
            sx={{ color: "white", fontSize: 32, display: "block", mt: 3 }}
          />
        </Link>
      </Box>
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box
          sx={{
            display: "flex",
            gap: 4,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <Card sx={{ flex: 1, minWidth: 250, textAlign: "center", p: 2 }}>
            <EmojiEmotionsIcon
              sx={{ fontSize: 48, color: "primary.main", mb: 1 }}
            />
            <Typography variant="h5" sx={{ fontWeight: 700 }}>
              Ha kul
            </Typography>
            <CardContent>Teknik ska vara roligt och engagerande</CardContent>
          </Card>
          <Card sx={{ flex: 1, minWidth: 250, textAlign: "center", p: 2 }}>
            <GroupIcon sx={{ fontSize: 48, color: "primary.main", mb: 1 }} />
            <Typography variant="h5" sx={{ fontWeight: 700 }}>
              Gemenskap
            </Typography>
            <CardContent>
              Skapa äkta relationer och ett tryggt nätverk
            </CardContent>
          </Card>
          <Card sx={{ flex: 1, minWidth: 250, textAlign: "center", p: 2 }}>
            <SchoolIcon sx={{ fontSize: 48, color: "primary.main", mb: 1 }} />
            <Typography variant="h5" sx={{ fontWeight: 700 }}>
              Lära sig nytt
            </Typography>
            <CardContent>Dela kunskap och växa tillsammans</CardContent>
          </Card>
        </Box>
      </Container>
    </>
  );
}
