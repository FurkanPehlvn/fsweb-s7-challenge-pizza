const OnayPage = ({ pizzaBilgi }) => {
  return (
    <div className="onay-content">
      <h1>
        TEBRİKLER<br></br>SİPARİŞİNİZ ALINDI!
      </h1>
      <p>isim: {pizzaBilgi.isim}</p>
    </div>
  );
};
export default OnayPage;
