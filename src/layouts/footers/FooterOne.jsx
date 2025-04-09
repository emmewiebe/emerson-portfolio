
export default function FooterOne() {
  return (
    <>
      <footer className="main-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="footer-top">
                <p>Have a project in mind?</p>
                <h2>
  <a href="mailto:emersonwiebe@gmail.com" className="connect-link">
    lets connect
  </a>
</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-sm-6">
              <p className="copy-left-text">
               {" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  
                >
                 
                </a>
              </p>
            </div>
            <div className="col-lg-6 col-sm-6">
              <p className="copy-right-text">
                © Copyright {new Date().getFullYear()}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}