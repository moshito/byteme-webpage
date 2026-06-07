"use client";

import CodeBackground from "@/components/CodeBackground";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const stadgar = [
  {
    paragraf: "§ 1 Föreningens namn",
    innehall: ["Föreningens namn är Byte me."],
  },
  {
    paragraf: "§ 2 Säte",
    innehall: ["Föreningen har sitt säte i Uppsala."],
  },
  {
    paragraf: "§ 3 Ändamål",
    innehall: [
      "Byte me är en ideell förening vars ändamål är att:",
      "● Bygga ett nära och aktivt techcommunity i Uppsala där medlemmar kan mötas, samarbeta och inspirera varandra.",
      "● Skapa en plats där likasinnade inom teknik kan hitta samarbetspartners, vänner och mentorer.",
      "● Arrangera aktiviteter, evenemang och lärotilfällen som är roliga, inkluderande och kunskapsfrämjande.",
      "● Samarbeta med techföretag, startups och organisationer för att erbjuda spännande möten och öppna upp nya möjligheter för medlemmarna – alltid med fokus på att det ska vara genuint kul och givande.",
      "Föreningen är partipolitiskt och religiöst obunden.",
    ],
  },
  {
    paragraf: "§ 4 Medlemskap",
    innehall: [
      "4.1 Vem kan bli medlem? Medlemskap är öppet för alla fysiska personer som delar föreningens värderingar och ändamål. Ingen teknisk bakgrund krävs – nyfikenhet på teknik räcker.",
      "4.2 Ansökan om medlemskap. Medlemskap beviljas av styrelsen efter inlämnad ansökan och inbetald medlemsavgift. Styrelsen kan delegera beslutanderätten.",
      "4.3 Medlemsavgift. Årsmötet fastställer medlemsavgiftens storlek för nästkommande verksamhetsår. Medlemsavgiften ska vara betald för att rättigheter som följer av medlemskapet ska gälla.",
      "4.4 Uteslutning. Styrelsen äger rätt att utesluta en medlem som motverkar föreningens ändamål, uppträder på ett sätt som skadar föreningen eller dess medlemmar, eller underlåter att betala fastställd medlemsavgift.",
    ],
  },
  {
    paragraf: "§ 5 Styrelse",
    innehall: [
      "5.1 Sammansättning. Föreningens angelägenheter sköts av en styrelse bestående av minst tre (3) och högst sju (7) ledamöter, varav en ordförande, en kassör och en sekreterare. Styrelsen bör ha en jämn könsfördelning.",
      "5.2 Val och mandattid. Styrelseledamöter väljs av årsmötet för en mandatperiod om ett (1) år. Omval är möjligt.",
      "5.3 Beslutsfattande. Styrelsen beslutar när mer än hälften av ledamöterna är närvarande. Beslut fattas med enkel majoritet. Vid lika röstetal har ordföranden utslagsröst.",
      "5.4 Firmateckning. Föreningens firma tecknas av ordföranden och kassören var för sig, eller av två ledamöter gemensamt.",
      "5.5 Styrelsemöten. Styrelsen sammanträder på kallelse av ordföranden, eller när minst två ledamöter begär det.",
    ],
  },
  {
    paragraf: "§ 6 Revisorer",
    innehall: [
      "Föreningen ska ha en (1) revisor och en (1) revisorssuppleant, valda av årsmötet för ett (1) år. Revisorerna ska granska föreningens räkenskaper och förvaltning, samt avge revisionsberättelse inför ordinarie årsmöte. Revisor får ej vara ledamot av styrelsen.",
    ],
  },
  {
    paragraf: "§ 7 Verksamhetsår och räkenskapsår",
    innehall: [
      "Föreningens verksamhetsår och räkenskapsår löper från 1 januari till 31 december.",
    ],
  },
  {
    paragraf: "§ 8 Valberedning",
    innehall: [
      "Valberedningen utses av årsmötet och består av minst en (1) ledamot. Valberedningens uppgift är att inför nästkommande ordinarie årsmöte förbereda och ta fram förslag på kandidater till styrelse och revisorer.",
      "Om årsmötet beslutar att inte utse en valberedning kan nomineringar ske fritt bland medlemmarna direkt under mötets gång.",
    ],
  },
  {
    paragraf: "§ 9 Föreningsmöten",
    innehall: [
      "9.1 Ordinarie årsmöte hålls en gång per år, senast under april månad. Kallelse och agenda skickas till samtliga medlemmar senast tre (3) veckor före mötet.",
      "9.2 Rösträtt och beslutsfattande. Varje medlem som betalat sin medlemsavgift har en röst. Beslut fattas med enkel majoritet om inte annat anges i stadgarna.",
      "9.3 Extra årsmöte hålls när styrelsen finner det nödvändigt, eller när minst en tredjedel (1/3) av föreningens röstberättigade medlemmar skriftligen begär det.",
    ],
  },
  {
    paragraf: "§ 10 Samarbeten och externa relationer",
    innehall: [
      "Byte me välkomnar samarbeten med företag, organisationer och andra föreningar som delar vår syn på teknik, lärande och gemenskap. Styrelsen ansvarar för att inleda, utvärdera och avsluta samarbeten.",
      "Samarbeten ska alltid vara transparenta gentemot medlemmarna.",
    ],
  },
  {
    paragraf: "§ 11 Stadgeändring",
    innehall: [
      "Ändring av dessa stadgar kräver beslut med minst två tredjedelars (2/3) majoritet av medlemmarna vid två på varandra följande föreningsmöten, varav ett ska vara ordinarie årsmöte.",
    ],
  },
  {
    paragraf: "§ 12 Upplösning",
    innehall: [
      "Beslut om upplösning av föreningen kräver minst tre fjärdedelars (3/4) majoritet av medlemmarna vid två på varandra följande föreningsmöten, varav ett ska vara ordinarie årsmöte.",
      "Vid upplösning ska föreningens tillgångar, efter att skulder reglerats, överlåtas till en annan ideell organisation med liknande ändamål.",
    ],
  },
];

export default function Stadgar() {
  return (
    <>
      <CodeBackground />
      <Box
        sx={{
          position: "relative",
          zIndex: 10,
          bgcolor: "background.default",
          mt: "25vh",
          minHeight: "90vh",
          p: 4,
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
            {"Våra stadgar"}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary", mb: 4 }}>
            {"Antagna 2026-05-03"}
          </Typography>
          {stadgar.map((s) => (
            <Accordion key={s.paragraf}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography sx={{ fontWeight: 600 }}>{s.paragraf}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {s.innehall.map((text, i) => (
                  <Typography
                    key={i}
                    variant="body2"
                    sx={{ color: "text.secondary", mb: 1 }}
                  >
                    {text}
                  </Typography>
                ))}
              </AccordionDetails>
            </Accordion>
          ))}
        </Container>
      </Box>
    </>
  );
}
