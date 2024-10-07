import local from "next/font/local";

export const silk_serif = local({
  src: [
    {
      path: "./Silk Serif Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Silk Serif Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./Silk Serif SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./Silk Serif Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  preload: true,
});
