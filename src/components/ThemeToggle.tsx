import { FaMoon } from "react-icons/fa6";
import { useTheme } from "../context/ThemeContext";
import { MdSunny } from "react-icons/md";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative inline-flex items-center h-6 w-12 rounded-full bg-light-toggle dark:bg-dark-toggle transition-colors duration-200"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      <span
        className={`inline-block h-4 w-4 rounded-full bg-light-toggleBall dark:bg-dark-toggleBall transform transition-transform duration-200 ${
          theme === "light" ? "translate-x-1" : "translate-x-7"
        }`}
      >
        {theme === "light" ? (
          <MdSunny className="text-yellow-500 size-4" />
        ) : (
            <FaMoon className="text-yellow-500 size-4" />
        )}
      </span>
    </button>
  );
}