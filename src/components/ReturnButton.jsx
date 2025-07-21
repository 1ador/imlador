import { useNavigate } from "react-router-dom";

function ReturnButton({ className = "" }) {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <button
      type="button"
      className={`back-button ${className}`}
      tabIndex="0"
      onClick={goBack}
      aria-label="Go back to last page"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 29">
        <path d="M14.7296 1.27539L1.64359 12.9817C0.469808 14.0326 -0.103288 15.6033 0.116887 17.1699C0.337062 18.7366 1.32089 20.0884 2.73887 20.7751L18.5446 28.4209C20.108 29.1779 21.9594 29.0084 23.3622 27.9803C24.7626 26.9524 25.4858 25.2317 25.2429 23.5035L22.5238 4.15601C22.2809 2.4278 21.1115 0.973085 19.482 0.371072C17.8501 -0.230612 16.0237 0.116823 14.7296 1.27539Z" />
      </svg>
    </button>
  );
}

export default ReturnButton;