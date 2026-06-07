import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import CodeBackground from "@/components/CodeBackground";

export default function OmOss() {
  return (
    <>
      <CodeBackground />
      {/* Innehåll som scrollar ovanpå */}
      <Box
        sx={{
          position: "relative",
          zIndex: 10,
          bgcolor: "background.default",
          mt: "30vh",
          minHeight: "90vh",
          p: 4,
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
            {"Om oss"}
          </Typography>
          <Typography variant="body1" sx={{ color: "text.secondary", mb: 2 }}>
            {
              "Byte me är en ideell techförening grundad i Uppsala med siktet inställt på att bygga ett nära och engagerande community för alla som brinner för teknik."
            }
          </Typography>
          <Typography variant="body1" sx={{ color: "text.secondary", mb: 4 }}>
            {
              "Vi tror att de bästa idéerna föds i mötet mellan människor – i fikarummet, på ett hackathon eller vid ett spontant samtal om det senaste inom AI."
            }
          </Typography>

          <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
            {"Föreningen vilar på tre grundpelare:"}
          </Typography>
          <ul>
            <li>
              <Typography
                variant="body1"
                sx={{ color: "text.secondary", mb: 1 }}
              >
                {"Ha kul – teknik ska vara roligt och engagerande"}
              </Typography>
            </li>
            <li>
              <Typography
                variant="body1"
                sx={{ color: "text.secondary", mb: 1 }}
              >
                {"Gemenskap – skapa äkta relationer och ett tryggt nätverk"}
              </Typography>
            </li>
            <li>
              <Typography
                variant="body1"
                sx={{ color: "text.secondary", mb: 1 }}
              >
                {"Lära sig nytt – dela kunskap och växa tillsammans"}
              </Typography>
            </li>
          </ul>

          <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, mt: 4 }}>
            {"Ändamål"}
          </Typography>
          <Typography variant="body1" sx={{ color: "text.secondary", mb: 2 }}>
            {"Byte me är en ideell förening vars ändamål är att:"}
          </Typography>
          <ul>
            <li>
              <Typography
                variant="body1"
                sx={{ color: "text.secondary", mb: 1 }}
              >
                {
                  "Bygga ett nära och aktivt techcommunity i Uppsala där medlemmar kan mötas, samarbeta och inspirera varandra."
                }
              </Typography>
            </li>
            <li>
              <Typography
                variant="body1"
                sx={{ color: "text.secondary", mb: 1 }}
              >
                {
                  "Skapa en plats där likasinnade inom teknik kan hitta samarbetspartners, vänner och mentorer."
                }
              </Typography>
            </li>
            <li>
              <Typography
                variant="body1"
                sx={{ color: "text.secondary", mb: 1 }}
              >
                {
                  "Arrangera aktiviteter, evenemang och lärotilfällen som är roliga, inkluderande och kunskapsfrämjande."
                }
              </Typography>
            </li>
            <li>
              <Typography
                variant="body1"
                sx={{ color: "text.secondary", mb: 1 }}
              >
                {
                  "Samarbeta med techföretag, startups och organisationer för att erbjuda spännande möten och öppna upp nya möjligheter för medlemmarna – alltid med fokus på att det ska vara genuint kul och givande."
                }
              </Typography>
            </li>
          </ul>
          <Typography variant="body1" sx={{ color: "text.secondary", mt: 2 }}>
            {"Föreningen är partipolitiskt och religiöst obunden."}
          </Typography>
        </Container>
      </Box>
    </>
  );
}
