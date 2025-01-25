import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ICHRAS",
    short_name: "ICHRAS",
    description:
      "Unlock the future of employee health benefits with ICHRAS.COM – revolutionizing insurance solutions for businesses of every size!",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
