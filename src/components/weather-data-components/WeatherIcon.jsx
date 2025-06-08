import { useEffect, useState } from "react";
import { weatherIconsDark, weatherIconsLight } from "../../helper/helperScript"

const WeatherIcon = ({ weatherMain, classBlob }) => {
  const [selectedIconPack, setSelectedIconPack] = useState(() =>
    document.documentElement.getAttribute("data-theme") === "dark"
      ? weatherIconsDark
      : weatherIconsLight
  );

  useEffect(() => {
    const updateIconPack = () => {
      const theme = document.documentElement.getAttribute("data-theme");
      setSelectedIconPack(theme === "dark" ? weatherIconsDark : weatherIconsLight);
    };

    const observer = new MutationObserver(updateIconPack);

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });
    updateIconPack();

    return () => observer.disconnect();
  }, []);

  const svgData = selectedIconPack[weatherMain] || selectedIconPack["Clear"];

  return (
    <img
      src={`data:image/svg+xml;utf8,${encodeURIComponent(svgData)}`}
      alt={weatherMain}
      className={`${classBlob}`}
    />
  );
};

export default WeatherIcon;
