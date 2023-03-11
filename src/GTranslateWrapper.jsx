import React, { useEffect } from 'react';

const GTranslateWrapper = () => {
  useEffect(() => {
    console.log('GTranslateWrapper montado');
    if (window.gtranslateSettings) {
      console.log('As configurações de tradução já existem');
      return;
    }
    console.log('As configurações de tradução não existem, criando');
    window.gtranslateSettings = {
      "languages": ["en", "es", "pt", "ar"],
      "alt_flags": {
        "en": "usa",
        "pt": "brazil"
      }
    };
    
    const script = document.createElement('script');
    script.src = 'https://cdn.gtranslate.net/widgets/latest/flags.js';
    script.defer = true;
    document.body.appendChild(script);
    
    return () => {
      console.log('GTranslateWrapper desmontado');
    };
  }, []);

  return (
    <div className="gtranslate_wrapper"></div>
  );
};

export default GTranslateWrapper;
