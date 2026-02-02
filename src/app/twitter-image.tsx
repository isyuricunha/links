import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 600,
};

export const contentType = "image/png";

export default function TwitterImage() {
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
              "radial-gradient(70% 55% at 50% 0%, rgba(255, 122, 24, 0.20), transparent 62%)",
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
              "radial-gradient(circle at 50% 25%, black 45%, transparent 82%)",
            opacity: 0.7,
          }}
        />

        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 28,
            padding: 64,
          }}
        >
          <div
            style={{
              width: 104,
              height: 104,
              borderRadius: 999,
              border: "1px solid rgba(244, 244, 245, 0.12)",
              background:
                "radial-gradient(circle at 30% 20%, rgba(255, 122, 24, 0.18), transparent 60%), linear-gradient(145deg, rgba(244, 244, 245, 0.14), rgba(244, 244, 245, 0.02))",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 30,
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
              gap: 10,
            }}
          >
            <div
              style={{
                fontSize: 56,
                fontWeight: 760,
                letterSpacing: "-0.03em",
                lineHeight: 1,
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
              links.yuricunha.com
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
