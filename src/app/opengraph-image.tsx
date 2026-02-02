import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#000000",
          color: "#f4f4f5",
          fontFamily:
            "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(70% 50% at 50% 0%, rgba(255, 122, 24, 0.18), transparent 60%), radial-gradient(60% 60% at 10% 10%, rgba(255, 122, 24, 0.10), transparent 65%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(to right, rgba(244, 244, 245, 0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(244, 244, 245, 0.06) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage:
              "radial-gradient(circle at 50% 25%, black 45%, transparent 80%)",
            opacity: 0.7,
          }}
        />

        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 16,
            padding: 64,
          }}
        >
          <div
            style={{
              width: 96,
              height: 96,
              borderRadius: 999,
              border: "1px solid rgba(244, 244, 245, 0.12)",
              background:
                "radial-gradient(circle at 30% 20%, rgba(255, 122, 24, 0.18), transparent 60%), linear-gradient(145deg, rgba(244, 244, 245, 0.14), rgba(244, 244, 245, 0.02))",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
              fontWeight: 700,
              letterSpacing: "-0.02em",
            }}
          >
            Y
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 8,
            }}
          >
            <div
              style={{
                fontSize: 52,
                fontWeight: 750,
                letterSpacing: "-0.03em",
                lineHeight: 1.05,
              }}
            >
              Yuri Cunha
            </div>
            <div
              style={{
                fontSize: 22,
                color: "#a1a1aa",
              }}
            >
              Links to my profiles, socials, and projects.
            </div>
          </div>

          <div
            style={{
              marginTop: 10,
              padding: "10px 16px",
              borderRadius: 999,
              border: "1px solid rgba(244, 244, 245, 0.12)",
              backgroundColor: "rgba(11, 11, 12, 0.85)",
              color: "rgba(244, 244, 245, 0.92)",
              fontSize: 18,
            }}
          >
            links.yuricunha.com
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
