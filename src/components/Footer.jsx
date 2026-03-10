import '../styles/Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; {year} Iván Brian Cruz. Todos los derechos reservados.</p>
        <p>Desarrollado con <span className="heart">♥</span> usando React + Vite</p>
      </div>
    </footer>
  );
}
