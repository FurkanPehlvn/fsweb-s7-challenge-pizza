const OnayPage = ({ pizzaBilgi }) => {
  return (
    <div className="onay-content">
      <h1>
        TEBRİKLER<br></br>SİPARİŞİNİZ ALINDI!
      </h1>
      <p>İsim: {pizzaBilgi.isim}</p>
      <p>Pizza Boyut: {pizzaBilgi.boyut}</p>
      <p>Hamur Kalınlığı: {pizzaBilgi.hamurTipi}</p>
      <p>Ek Malzemeler: {pizzaBilgi.toppings.join(" - ")}</p>
      <p>Ek Not: {pizzaBilgi.extraNotes}</p>
      <p>Pizza Adet: {pizzaBilgi.adet}</p>
      <p>Toplam Fiyat: {pizzaBilgi.total}</p>
    </div>
  );
};
export default OnayPage;
