const Footer = () => {
  return (
    <>
      <nav className="navbar navbar-dark bg-primary fixed-bottom mt-5">
        <div className="container-fluid justify-content-center">
          <span style={{ color: "white" }}>
            Daniel Molina &copy; {new Date().getFullYear()}{" "}
          </span>
        </div>
      </nav>
    </>
  );
};

export default Footer;
