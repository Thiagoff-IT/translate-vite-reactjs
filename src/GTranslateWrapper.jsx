import React, { useEffect } from "react";

const GoogleTranslate = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.gtranslate.net/widgets/latest/lc.js";
    script.defer = true;
    document.body.appendChild(script);

    window.gtranslateSettings = {
      default_language: "pt",
      native_language_names: true,
      detect_browser_language: true,
      languages: ["pt", "ar", "es", "en"],
      wrapper_selector: ".gtranslate_wrapper",
      gt_show_selected_languages: false,
      gt_custom_links: "#",
      gt_set_selected_languages: { from: "en", to: "pt" },
    };

    script.onload = function () {
      window.gTranslate.init();
    };
  }, []);

  return (
    <button
      type="button"
      className="google-translate-button"
      aria-label="Translate"
      title="Translate"
    >
      <div className="gtranslate_wrapper"></div>
    </button>
  );
};

export default GoogleTranslate;
