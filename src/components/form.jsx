import React, { useState } from "react";
import axios from "axios";

import "./form.css";

const FormArea = () => {
  const [formData, setFormData] = useState({
    isim: "",
    boyut: "",
    hamurTipi: "",
    toppings: [],
    extraNotes: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [counter, setCounter] = useState(1);

  const pizzaBasePrice = 20;
  const extraToppingPrice = 5;
  const pizzaBoyut = ["small", "medium", "large"];
  const pizzaToppings = [
    { id: 1, name: "Mantar" },
    { id: 2, name: "Sucuk" },
    { id: 3, name: "Sosis" },
    { id: 4, name: "Zeytin" },
    { id: 5, name: "Biber" },
    { id: 6, name: "Mısır" },
    { id: 7, name: "Patlıcan" },
    { id: 8, name: "Hamsi" },
    { id: 9, name: "Beyaz Peynir" },
  ];

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    setFormData((prevFormData) => {
      let newToppings = checked
        ? [...prevFormData.toppings, value]
        : prevFormData.toppings.filter((topping) => topping !== value);
      return {
        ...prevFormData,
        toppings: newToppings,
      };
    });
  };

  const handleCounterChange = (increment) => {
    setCounter((prevCounter) => {
      const newCounter = increment ? prevCounter + 1 : prevCounter - 1;
      return newCounter > 0 ? newCounter : 1;
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    try {
      const response = await axios.post(
        "https://reqres.in/api/pizza",
        formData
      );
      console.log("Yanıt:", response.data);
    } catch (error) {
      console.error("Hata:", error);
    } finally {
      setSubmitting(false);
    }
  };

  const isFormValid = () => {
    const { isim, boyut, hamurTipi, toppings } = formData;
    return isim && boyut && hamurTipi && toppings.length >= 4 && !submitting;
  };

  const totalToppingPrice = formData.toppings.length * extraToppingPrice;
  const totalPrice = (pizzaBasePrice + totalToppingPrice) * counter;

  return (
    <main>
      <section className="pizza-section">
        <h2>Pizza Adı</h2>
        <h3>{pizzaBasePrice}₺</h3>
        <p>4.9</p>
        <p>(200)</p>
        <div className="formAlani">
          <form onSubmit={handleSubmit}>
            <label>
              İsim:
              <input
                type="text"
                name="isim"
                value={formData.isim}
                onChange={handleInputChange}
                minLength={3}
                required
                disabled={submitting}
              />
            </label>
            <br />
            <div className="options">
              <label className="pizzaboyut-container">
                Boyut Seç:<span style={{ color: "red" }}>*</span>
                {pizzaBoyut.map((size) => (
                  <label key={size}>
                    <input
                      type="radio"
                      name="boyut"
                      value={size}
                      onChange={handleInputChange}
                      required
                      checked={formData.boyut === size}
                      disabled={submitting}
                    />
                    {size.charAt(0).toUpperCase() + size.slice(1)}
                  </label>
                ))}
              </label>
              <label className="pizzahamur-container">
                Hamur Tipi:<span style={{ color: "red" }}>*</span>
                <select
                  name="hamurTipi"
                  value={formData.hamurTipi}
                  onChange={handleInputChange}
                  required
                  disabled={submitting}
                >
                  <option value="">Hamur Tipi Seçiniz</option>
                  <option value="ince">İnce</option>
                  <option value="standart">Standart</option>
                  <option value="kalin">Kalın</option>
                </select>
              </label>
            </div>
            <br />
            <label>Pizza Toppings:</label>
            <div className="toppings">
              {pizzaToppings.map((topping) => (
                <label key={topping.id}>
                  <input
                    type="checkbox"
                    name="toppings"
                    value={topping.name}
                    onChange={handleCheckboxChange}
                    checked={formData.toppings.includes(topping.name)}
                    disabled={submitting}
                  />
                  {topping.name}
                </label>
              ))}
            </div>
            <br />
            <label>
              Ek Notlar:
              <textarea
                name="extraNotes"
                value={formData.extraNotes}
                onChange={handleInputChange}
                disabled={submitting}
              ></textarea>
            </label>
            <hr />
            <div className="order-summary">
              <div className="counter">
                <button
                  type="button"
                  onClick={() => handleCounterChange(true)}
                  disabled={submitting}
                >
                  +
                </button>
                <div className="counter-value">{counter}</div>
                <button
                  type="button"
                  onClick={() => handleCounterChange(false)}
                  disabled={submitting}
                >
                  -
                </button>
              </div>
              <div className="order-total">
                <div>Pizza Price: {pizzaBasePrice} TL</div>
                <div>Extra Topping Price: {totalToppingPrice} TL</div>
                <div>Order Total: {totalPrice} TL</div>
                <button type="submit" disabled={!isFormValid()}>
                  Sipariş Ver
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default FormArea;
