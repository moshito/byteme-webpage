import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <Container>
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="caption" sx={{ display: "block", color: "text.secondary" }}>
            © Copy it! Its your right 2026
          </Typography>
          <Typography variant="caption" sx={{ display: "block", color: "text.secondary" }}>
            by <Link href="https://www.moshos.se"  style={{ color: "inherit", textDecoration: "none" }} target="_blank">mosho</Link>
          </Typography>
        </Box>
      </Container>
    </>
  );
}
