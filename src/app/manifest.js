export default function manifest() {
  return {
    name: "AGITITE E-Commerce Template",
    short_name: "AGITITE E-COM",
    description: "E-commerce App built with Next.js",
    id: "/",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#0ff",
    icons: [
      {
        src: "/favicon.ico",
        // sizes: "48x48",
        type: "image/x-icon",
      },
      // {
      //   src: "/logos/16.png",
      //   sizes: "16x16",
      //   type: "image/png",
      // },
      // {
      //   src: "/logos/32.png",
      //   sizes: "32x32",
      //   type: "image/png",
      // },
      // {
      //   src: "/logos/apple-icon.png",
      //   sizes: "180x180",
      //   type: "image/png",
      //   purpose: "any",
      // },
      // {
      //   src: "/logos/192.png",
      //   sizes: "192x192",
      //   type: "image/png",
      // },
      // {
      //   src: "/logos/512.png",
      //   sizes: "512x512",
      //   type: "image/png",
      // },
    ],
  };
}
