module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1168px", // Custom container width at lg (1024px - 1279px)
          xl: "1280px", // Default xl size, unchanged
          "2xl": "1536px", // Default 2xl size, unchanged
        },
      },
    },
  },
  plugins: [],
};
