import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <h2>Contact</h2>
      <div style={{display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap', margin: 5}}>
        <a href="https://github.com/MelissaPastore" target="_blank" rel="noopener noreferrer" style={{color: 'white'}}>
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/melissalpastore/" target="_blank" rel="noopener noreferrer" style={{color: 'white'}}>
          LinkedIn
        </a>
        <a href="mailto: melissa.pastore@gmail.com" target="_blank" rel="noopener noreferrer" style={{color: 'white'}}>
          Email
        </a>
      </div>
    </div>
  );
};

export default Footer;
