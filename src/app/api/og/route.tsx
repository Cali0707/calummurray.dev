import { ImageResponse } from "next/og";
// App router includes @vercel/og.
// No need to install it.

export const runtime = "edge";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const { searchParams } = url;
  const imageParam = searchParams.get("image");
  // Convert relative URLs to absolute using the request origin
  const image = imageParam?.startsWith("/")
    ? `${url.origin}${imageParam}`
    : imageParam;
  const title = searchParams.get("title");
  if (!image) {
    return new ImageResponse(
      (
        <div
          style={{
            backgroundColor: "white",
            height: "100%",
            width: "100%",
            fontSize: 100,
            paddingTop: "100px",
            paddingLeft: "50px",
          }}
        >
          {title}
        </div>
      ),
      {
        width: 1200,
        height: 630,
      },
    );
  }

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          fontSize: 60,
          color: "black",
          background: "#ffffff",
          width: "100%",
          height: "100%",
          paddingTop: 50,
          paddingLeft: 50,
          paddingRight: 50,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img width="256" height="256" src={image} />
        <p>{title}</p>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
