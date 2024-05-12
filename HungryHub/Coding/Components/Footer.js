// Footer component for footer section
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      <i className="fa-solid fa-copyright"></i>
        <strong>
        Copyright {year} Hungry Hub by Akash, All right reserved.
        </strong>
    </div>
  );
};

export default Footer;
