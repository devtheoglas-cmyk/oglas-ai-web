import { ImageResponse } from "next/og";

export const alt =
  "Oglas AI — Custom Software & AI Solutions in Dubai. Software built around real business operations.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function loadManrope(weight: 500 | 600) {
  const cssResponse = await fetch(
    `https://fonts.googleapis.com/css2?family=Manrope:wght@${weight}&display=swap`,
    {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36",
      },
    },
  );
  const css = await cssResponse.text();
  const match = css.match(/src:\s*url\(([^)]+)\)\s*format\('truetype'\)/);
  if (!match) throw new Error("Could not resolve Manrope font URL");
  const fontResponse = await fetch(match[1]);
  return await fontResponse.arrayBuffer();
}

export default async function OpengraphImage() {
  const [manropeMedium, manropeSemibold] = await Promise.all([
    loadManrope(500),
    loadManrope(600),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px 96px",
          background:
            "linear-gradient(145deg, #080B0B 0%, #121716 55%, #1b1710 100%)",
          color: "#F4F7F5",
          fontFamily: "Manrope",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 16,
              background: "#080B0B",
              border: "2px solid #C8A96A",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 44,
              fontWeight: 700,
              color: "#C8A96A",
              letterSpacing: -1,
            }}
          >
            O
          </div>
          <div
            style={{
              fontSize: 34,
              fontWeight: 600,
              color: "#FFFFFF",
              letterSpacing: -0.5,
            }}
          >
            Oglas AI
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              fontSize: 22,
              fontWeight: 600,
              color: "#C8A96A",
              textTransform: "uppercase",
              letterSpacing: 2,
            }}
          >
            Custom Software &amp; AI Solutions
          </div>
          <div
            style={{
              fontSize: 74,
              fontWeight: 600,
              lineHeight: 1.05,
              color: "#FFFFFF",
              letterSpacing: -1.5,
              maxWidth: 960,
            }}
          >
            Software Built Around Real Business Operations
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid rgba(200, 169, 106, 0.35)",
            paddingTop: 24,
            fontSize: 22,
            color: "rgba(255,255,255,0.8)",
          }}
        >
          <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
            <span>ERP · Payroll · Workflow · Computer Vision · AI Dashboards</span>
          </div>
          <div style={{ color: "#C8A96A", fontWeight: 600 }}>Dubai · UAE</div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Manrope", data: manropeMedium, weight: 500, style: "normal" },
        { name: "Manrope", data: manropeSemibold, weight: 600, style: "normal" },
      ],
    },
  );
}
