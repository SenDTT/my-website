/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        light: {
          // Existing colors (unchanged, for context)
          bg: "#F3E8EE",
          text: "#3A3F5A",
          logo: "#9E768F",
          accent: "#C9A9E9",
          border: "#E8DCE5",
          toggle: "#D7C7E2",
          toggleBall: "#FFF5FA",
          scrollbarThumbHover: "#B392D6",
          cardBg: "#E8F3F0",
          sidebarBg: "#F0E8F9",
          modalBg: "#FDF0EA",
          sidebarBg: "#EAF4FC",
          secondaryText: "#4C506E",
          highlightText: "#8254A2",
          buttonBg: "#D8B4F0",
          buttonHoverBg: "#C79DE3",
          buttonText: "#2F3550",
          divBorder: "#D9C9D6",
          divAccent: "#A8879C",
          tertiaryBg: "#FFF1E6",
          hoverBg: "#F0F9F2",
          linkText: "#D974A1",
          panelBg: "#E6F3FA",
          divider: "#E8E4F0",
          icon: "#FFAA80",
          activeBg: "#F5EAF5",
          tooltipBg: "#E8F7F0",
          tooltipText: "#3E566B",
          footerBg: "#FFF6ED",
          headerBg: "#F2F0FA",
          // New brighter, happier colors with unique names
          contentBg: "#FFF9E6", // Lemon Chiffon
          navBg: "#E9F8F6", // Aqua Mist
          accentText: "#FF8C9D", // Cherry Pop
          widgetBg: "#F0F5FF", // Cloud Blue
          separator: "#F0E8F5", // Lilac Haze
          glyph: "#FFB266", // Mango Spark
          selectedBg: "#F7EAF2", // Rose Quartz
          popupBg: "#E6FAF0", // Mint Shine
          popupText: "#2F5A5F", // Deep Aqua
          bannerBg: "#FFF2EA", // Peach Bliss
          overlayBg: "#F5F7EB", // Lime Frost
          contactBg: "#0f5460", // Soft Plum
          contactText: "#1a8da2", // Soft Teal
          contactIcon: "#F8A7C1", // Cotton Pink
          contactHover: "#E6B8F0", // Lilac Glow
          achievementBg: "#F8F4FB", // Lavender Mist
          achievementText: "#F5EBF7", // Soft Slate
          achievementAccent: "#E8B2D6", // Pastel Rose
          awsBadge: "#e5e5e5", // AWS Orange
          skillsBg: "#F9F0F7", // Cotton Lilac
        },
        // Pastel Dream Dark (Unchanged)
        dark: {
          // Existing colors (unchanged, for context)
          bg: "#4d4267",
          text: "#E2D6E8",
          logo: "#D4A7C9",
          accent: "#B392D6",
          border: "#5C5470",
          toggle: "#716197",
          toggleBall: "#F8E8F0",
          scrollbarThumbHover: "#9E76B4",
          cardBg: "#3B2D2A",
          sidebarBg: "#433635",
          modalBg: "#352928",
          secondaryBg: "#4A3734",
          secondaryText: "#C9AEA8",
          highlightText: "#E5A69D",
          buttonBg: "#E8AFA6",
          buttonHoverBg: "#D4998F",
          buttonText: "#F5E3DE",
          divBorder: "#6F5955",
          divAccent: "#B88B83",
          tertiaryBg: "#3B2E3E",
          hoverBg: "#4A3F4C",
          linkText: "#F4A8C1",
          panelBg: "#2E3A41",
          divider: "#626773",
          icon: "#FFB39B",
          activeBg: "#4C3C4F",
          tooltipBg: "#3A4147",
          tooltipText: "#E8D8E0",
          footerBg: "#34333F",
          headerBg: "#3C3642",
          // New brighter, happier colors with unique names
          contentBg: "#3A2F3C", // Vibrant Plum
          navBg: "#2F3C44", // Teal Shadow
          accentText: "#FF99B3", // Coral Bloom
          widgetBg: "#373F4A", // Slate Indigo
          separator: "#5F6775", // Graphite Glow
          glyph: "#FFCC99", // Amber Spark
          selectedBg: "#4B3A4E", // Magenta Dusk
          popupBg: "#323C45", // Deep Cyan
          popupText: "#E6DCE8", // Pale Mist
          bannerBg: "#3C333F", // Dusky Violet
          overlayBg: "#353A42", // Midnight Haze
          contactBg: "#fffade", // Pale Mint
          contactText: "#F0E6F5", // Light Mist
          contactIcon: "#F7B8D0", // Peach Blossom
          contactHover: "#C7A3E6", // Pastel Violet
          achievementBg: "#2A90B9", // Muted Violet
          achievementText: "#F5EBF7", // Pale Lilac
          achievementAccent: "#E7A7D0", // Soft Magenta
          awsBadge: "#e5e5e5", // AWS Orange
          skillsBg: "#4B3D62", // Velvet Dusk
          viewProjects: "#fff7de", // Soft Lilac
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".clip-flower": {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        },
        ".scrollbar-thin": {
          "scrollbar-width": "thin",
          "&::-webkit-scrollbar": {
            width: "8px",
            height: "8px",
          },
        },
        ".scrollbar-light": {
          "scrollbar-color": "#2F3550 #F0E8F4",
          "&::-webkit-scrollbar-track": {
            background: "#F0E8F4",
            borderRadius: "4px",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "#2F3550",
            borderRadius: "4px",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            background: "#3A3F5A",
          },
        },
        ".scrollbar-dark": {
          "scrollbar-color": "#F5E3DE #3A2F4A",
          "&::-webkit-scrollbar-track": {
            background: "#3A2F4A",
            borderRadius: "4px",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "#F5E3DE",
            borderRadius: "4px",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            background: "#FFE8E3",
          },
        },
      });
    },
  ],
};
