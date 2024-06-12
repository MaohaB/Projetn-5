import "./collapse.scss";
const Collapse = () => {
  return (
    <div className="Collapse-container">
      <div className="Collapse">
        <div className="collapsetitle">
          <span>Le passage de Lorem Ipsum standard, utilisé depuis 1500</span>
          <span><i className="fa-solid fa-chevron-down"></i></span>
        </div>
        <div className="collapsecontent">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </div>
      </div>
    </div>
  );
};

export default Collapse;
