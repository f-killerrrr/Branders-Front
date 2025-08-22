import { useEffect, useState } from 'react';

declare global {
  interface Window {
    kakao: any;
  }
}

export function useKakaoMaps() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (window.kakao?.maps) {
      setLoaded(true);
      return;
    }

    const id = 'kakao-sdk';
    if (document.getElementById(id)) return;

    const appkey = import.meta.env.VITE_KAKAO_JS_KEY;
    const s = document.createElement('script');
    s.id = id;
    s.async = true;
    s.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${appkey}&autoload=false&libraries=services`;
    s.onload = () => window.kakao.maps.load(() => setLoaded(true));
    document.head.appendChild(s);
  }, []);

  return loaded;
}
