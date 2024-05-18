import hlogo from "../assets/home-banner.png";

const Anasayfa = () => {
  return (
    <>
      <div className="homepage-content">
        <img className="homepage-content img" src={hlogo} alt={hlogo}></img>
        <p>KOD ACIKTIRIR</p>
      </div>
    </>
  );
};

export default Anasayfa;
