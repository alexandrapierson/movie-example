export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="footer">
      <p className="footer-text">© {year} Moviedux, All Rights Reserved.</p>
    </div>
  );
}
