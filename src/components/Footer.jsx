import React from 'react';
import '../App.css'; // Asegúrate de importar los estilos globales

const Footer = () => {
  return (
    <footer className="footer-iush">
      <p>Biblioteca Virtual IUSH</p>
      <p>Medellín, Colombia</p>
      <p>biblioteca@iush.edu.co |  (604) 444 55 00</p>
      <p>© {new Date().getFullYear()} IUSH - Todos los derechos reservados</p>
    </footer>
  );
};

export default Footer;