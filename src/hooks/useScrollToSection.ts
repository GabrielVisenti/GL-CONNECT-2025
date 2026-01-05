import { useNavigate, useLocation } from "react-router-dom";
import { useCallback } from "react";

export const useScrollToSection = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = useCallback((id: string, callback?: () => void) => {
    const performScroll = () => {
      // Wait a bit for the page to render
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        } else if (id === "home") {
          // If "home" section doesn't exist, scroll to top
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
        callback?.();
      }, 150);
    };

    // If we're not on the home page, navigate to home first
    if (location.pathname !== "/") {
      navigate("/");
      performScroll();
    } else {
      // If we're already on the home page, just scroll
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      } else if (id === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      callback?.();
    }
  }, [navigate, location.pathname]);

  return scrollToSection;
};
