import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 15,
        background: "#F1EFEF",
      }}
    >
      <img src="/images/DH.png" alt="DH-logo" width={400} />
      <div
        style={{
          filter: "invert(100%)",
          brightness: 0,
          width: 350,
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <img src="/images/ico-facebook.png" alt="Facebook-logo" width={35} />
        <img src="/images/ico-instagram.png" alt="Instagram-logo" width={35} />
        <img src="/images/ico-tiktok.png" alt="Tiktok-logo" width={35} />
        <img src="/images/ico-whatsapp.png" alt="Whatsapp-logo" width={35} />
      </div>
    </footer>
  );
};

export default Footer;
