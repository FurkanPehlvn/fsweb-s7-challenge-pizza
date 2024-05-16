import React, { useState } from "react";
import axios from "axios";

const FormArea = () => {
  const [formData, setFormData] = useState({
    isim: "",
    boyut: "",
    hamurTipi: "",
    toppings: [],
    extraNotes: "",
  });
  const [submitting, setSubmitting] = useState(false); // Gönderim durumunu takip etmek için state

  const pizzaToppings = [
    { id: 1, name: "Mantar" },
    { id: 2, name: "Sucuk" },
    { id: 3, name: "Sosis" },
    { id: 4, name: "Zeytin" },
    { id: 5, name: "Biber" },
    { id: 6, name: "Mısır" },
    // Diğer pizza topping'leri buraya eklenebilir
  ];

  const handleNameChange = (event) => {
    setFormData({
      ...formData,
      isim: event.target.value,
    });
  };

  const handleSizeChange = (event) => {
    setFormData({
      ...formData,
      boyut: event.target.value,
    });
  };

  const handleDoughChange = (event) => {
    setFormData({
      ...formData,
      hamurTipi: event.target.value,
    });
  };

  const handleToppingChange = (event) => {
    const selectedTopping = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      setFormData({
        ...formData,
        toppings: [...formData.toppings, selectedTopping],
      });
    } else {
      const updatedToppings = formData.toppings.filter(
        (topping) => topping !== selectedTopping
      );
      setFormData({
        ...formData,
        toppings: updatedToppings,
      });
    }
  };

  const handleExtraNotesChange = (event) => {
    setFormData({
      ...formData,
      extraNotes: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Formun gönderimini başlat
    setSubmitting(true);

    try {
      // Axios ile POST isteği gönder
      const response = await axios.post(
        "https://reqres.in/api/pizza",
        formData
      );

      // Yanıtı konsola yazdır
      console.log("Yanıt:", response.data);
    } catch (error) {
      console.error("Hata:", error);
    } finally {
      // Form gönderimini tamamla
      setSubmitting(false);
    }
  };

  // Formun gönderilebilir olup olmadığını kontrol etmek için bir işlev
  const isFormValid = () => {
    return (
      formData.isim &&
      formData.boyut &&
      formData.hamurTipi &&
      formData.toppings.length >= 4 &&
      !submitting
    );
  };

  return (
    <main className="formAlani">
      <form onSubmit={handleSubmit}>
        <label>
          İsim:
          <input
            type="text"
            value={formData.isim}
            onChange={handleNameChange}
            minLength={3}
            required
            disabled={submitting}
          />
        </label>

        <br />

        <label>
          Boyut Seç
          <input
            type="radio"
            name="boyut"
            value="small"
            onChange={handleSizeChange}
            required
            disabled={submitting}
          />
          Küçük
          <input
            type="radio"
            name="boyut"
            value="medium"
            onChange={handleSizeChange}
            required
            disabled={submitting}
          />
          Orta
          <input
            type="radio"
            name="boyut"
            value="large"
            onChange={handleSizeChange}
            required
            disabled={submitting}
          />
          Büyük
        </label>

        <br />

        <label>
          Hamur Tipi
          <select
            value={formData.hamurTipi}
            onChange={handleDoughChange}
            required
            disabled={submitting}
          >
            <option value="">Hamur Tipi Seçiniz</option>
            <option value="ince">İnce</option>
            <option value="standart">Standart</option>
            <option value="kalin">Kalın</option>
          </select>
        </label>

        <br />

        <label>Pizza Toppings:</label>
        <div>
          {pizzaToppings.map((topping) => (
            <label key={topping.id}>
              <input
                type="checkbox"
                value={topping.name}
                onChange={handleToppingChange}
                checked={formData.toppings.includes(topping.name)}
                disabled={submitting}
              />
              {topping.name}
            </label>
          ))}
        </div>

        <label>
          Ek Notlar:
          <textarea
            value={formData.extraNotes}
            onChange={handleExtraNotesChange}
            disabled={submitting}
          ></textarea>
        </label>

        <button type="submit" disabled={!isFormValid()}>
          {submitting ? "Gönderiliyor..." : "Sipariş Ver"}
        </button>
      </form>
    </main>
  );
};

export default FormArea;
