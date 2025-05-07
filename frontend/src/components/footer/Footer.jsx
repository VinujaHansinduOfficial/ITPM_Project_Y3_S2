import "./footer.css";

const footerLinks = [
  {
    title: "Explore",
    links: ["Countries", "Regions", "Cities", "Neighborhoods"],
  },
  {
    title: "Properties",
    links: ["Homes", "Apartments", "Villas", "Hostels"],
  },
  {
    title: "Discover",
    links: ["Unique places", "Reviews", "Travel articles", "FAQs"],
  },
  {
    title: "Support",
    links: ["Customer Service", "Help Center", "Privacy Policy", "Terms & Conditions"],
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="footerTop">
        {footerLinks.map((section, idx) => (
          <nav key={idx} className="footerNav" aria-label={section.title}>
            <h3 className="footerHeading">{section.title}</h3>
            <ul className="footerList">
              {section.links.map((link, i) => (
                <li key={i} className="footerListItem">
                  <a href="#" className="footerLink">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="footerBottom">
        <p>&copy; {currentYear} TravelXpert. All rights reserved.</p>
        <div className="socialIcons">
          <a href="#" aria-label="Facebook" className="icon facebook">F</a>
          <a href="#" aria-label="Twitter" className="icon twitter">T</a>
          <a href="#" aria-label="Instagram" className="icon instagram">I</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
