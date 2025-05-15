import React from "react";
import "./Brands.css";
import cl from "../../assets/punch.png";
import br from "../../assets/zikoko.png";
import kr from "../../assets/republik.png";
import tv2 from "../../assets/howtouseabortionpills.png";
import azu from "../../assets/stemgirls.png";


const Brands = () => {
  const brands = [
    { name: "Brand A", logo: kr },
    { name: "CliqueShoppa", logo: cl },
    { name: "Brand C", logo: br },
    { name: "Brand D", logo: tv2 },
    { name: "Brand E", logo: azu },

  ];

  return (
    <>
      <section className="brands-container">
        <h2 className="brands-title">As Featured In</h2>

        <div className="brands-grid-wrapper">
          <div className="brands-grid">
            {brands.map((brand, index) => (
              <div
                key={index}
                className={`brand-card ${index < 3 ? "special-logo" : ""}`}
              >
                <img
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  className="brand-logo"
                />
              </div>
            ))}
          </div>

          <div className="brands-grid">
            {brands.map((brand, index) => (
              <div
                key={index}
                className={`brand-card ${index < 3 ? "special-logo" : ""}`}
              >
                <img
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  className="brand-logo"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Brands;