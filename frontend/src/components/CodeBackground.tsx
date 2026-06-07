import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function CodeBackground() {
  return (
    <Box
      sx={{
        position: "fixed",
        top: { xs: "56px", sm: "64px" },
        left: 0,
        width: "100%",
        height: "25vh",
        bgcolor: "#004aad",
        backgroundImage:
          "radial-gradient(rgba(0, 42, 96, 0.10) 1px, transparent 1px)",
        backgroundSize: "4px 4px",
        zIndex: 1,
        pl: 4,
        overflowY: "hidden",
      }}
    >
      <Typography
        component="pre"
        sx={{ color: "#a4b3f0", fontSize: "0.85rem", lineHeight: 1.8 }}
      >
        {[68, 69, 70].map((n) => (
          <span key={n}>
            <span style={{ color: "#6270aa", marginRight: "2em" }}>{n}.</span>
            {"\n"}
          </span>
        ))}

        {/* rad 71 – goosePhrases */}
        <span style={{ color: "#6270aa", marginRight: "2em" }}>{"71."}</span>
        <span style={{ color: "lightskyblue" }}>{"const "}</span>
        <span style={{ color: "#eee" }}>{"goosePhrases "}</span>
        <span style={{ color: "red" }}>{"= "}</span>
        <span style={{ color: "yellow" }}>{"[ "}</span>
        {["Hack or DIIIIIIIIIE!!!", "Let's gooose!", "Stop goose-lighting me."].map((phrase, i) => (
          <span key={i}>
            <span style={{ color: "orange" }}>{`"${phrase}"`}</span>
            {i < 2 ? ", " : " "}
          </span>
        ))}
        <span style={{ color: "yellow" }}>{"]"}</span>
        {"\n"}

        {/* rad 72 – tom */}
        <span style={{ color: "#6270aa", marginRight: "2em" }}>{"72."}</span>
        {"\n"}

        {/* rad 73 – ny const */}
        <span style={{ color: "#6270aa", marginRight: "2em" }}>{"73."}</span>
        <span style={{ color: "lightskyblue" }}>{"const "}</span>
        <span style={{ color: "#eee" }}>{"hackathonsInUppsala "}</span>
        <span style={{ color: "red" }}>{"= "}</span>
        <span style={{ color: "orange" }}>{'"< Byte Me />"'}</span>
        {"\n"}

        {/* rad 74 – tom */}
        <span style={{ color: "#6270aa", marginRight: "2em" }}>{"74."}</span>
        {"\n"}

        {/* rad 75 – export */}
        <span style={{ color: "#6270aa", marginRight: "2em" }}>{"75."}</span>
        <span style={{ color: "lightskyblue" }}>{"export default function "}</span>
        <span style={{ color: "#eee" }}>{"GooseApp"}</span>
        <span style={{ color: "yellow" }}>{"() {"}</span>
        {"\n"}

        {/* rad 76 – return */}
        <span style={{ color: "#6270aa", marginRight: "2em" }}>{"76."}</span>
        {"  "}
        <span style={{ color: "lightskyblue" }}>{"return "}</span>
        <span style={{ color: "red" }}>{"<"}</span>
        <span style={{ color: "lightskyblue" }}>{"Goose "}</span>
        <span style={{ color: "#eee" }}>{"honk"}</span>
        <span style={{ color: "red" }}>{" />"}</span>
        {"\n"}

        {/* rad 77 – stäng funktion */}
        <span style={{ color: "#6270aa", marginRight: "2em" }}>{"77."}</span>
        <span style={{ color: "yellow" }}>{"}"}</span>
        {"\n"}

        {/* rader 78–83 – tomma */}
        {[78, 79, 80, 81, 82, 83].map((n) => (
          <span key={n}>
            <span style={{ color: "#6270aa", marginRight: "2em" }}>{n}.</span>
            {"\n"}
          </span>
        ))}
      </Typography>
    </Box>
  );
}