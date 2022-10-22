import { useNavigate } from "react-router-dom";

const NoMatch = () => {
  const navigate = useNavigate();

  const redirect = () => {
    navigate("/");
  };

  return (
    <div style={{ position: "relative", top: "200px" }}>
      <div>NoMatch</div>
      <br />
      <button style={{ width: "140px" }} onClick={redirect}>
        Go Home
      </button>
    </div>
  );
};

export default NoMatch;
