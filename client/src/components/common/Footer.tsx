const Footer = () => {
  return (
    <footer className="home-footer">
      <div className="container home-footer__inner">
        <div>
          <strong>Δρ. Βολωνάκης</strong>
          <span>Ορθοπεδικός Χειρουργός</span>
        </div>

        <span>
          © {new Date().getFullYear()} Όλα τα δικαιώματα διατηρούνται.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
