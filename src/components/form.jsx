import React, { useState } from "react";
import axios from "axios";
import { Button } from "reactstrap";

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

  const pizzaToppings = [
    { id: 1, name: "Mantar" },
    { id: 2, name: "Sucuk" },
    { id: 3, name: "Sosis" },
    { id: 4, name: "Zeytin" },
    { id: 5, name: "Biber" },
    { id: 6, name: "Mısır" },
  ];

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    if (type === "checkbox") {
      setFormData((prevFormData) => ({
        ...prevFormData,
        toppings: checked
          ? [...prevFormData.toppings, value]
          : prevFormData.toppings.filter((topping) => topping !== value),
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
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
      setFormData({
        isim: "",
        boyut: "",
        hamurTipi: "",
        toppings: [],
        extraNotes: "",
      });
      setCounter(1);
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
      <header>
        <h1>Teknolojik Yemekler</h1>
        <nav>
          <a href="#">Anasayfa</a>
          <a href="#">Sipariş Oluştur</a>
        </nav>
      </header>
      <section>
        <h2>Pizza Adı</h2>
      </section>
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

          <label>
            Boyut Seç:
            {["small", "medium", "large"].map((size) => (
              <label key={size}>
                <input
                  type="radio"
                  name="boyut"
                  value={size}
                  onChange={handleInputChange}
                  required
                  disabled={submitting}
                />
                {size.charAt(0).toUpperCase() + size.slice(1)}
              </label>
            ))}
          </label>

          <br />

          <label>
            Hamur Tipi:
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

          <br />

          <label>Pizza Toppings:</label>
          <div>
            {pizzaToppings.map((topping) => (
              <label key={topping.id}>
                <input
                  type="checkbox"
                  name="toppings"
                  value={topping.name}
                  onChange={handleInputChange}
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
              name="extraNotes"
              value={formData.extraNotes}
              onChange={handleInputChange}
              disabled={submitting}
            ></textarea>
          </label>

          <div className="counter">{counter}</div>
          <div>
            <Button onClick={() => handleCounterChange(true)} color="primary">
              +
            </Button>
            <Button onClick={() => handleCounterChange(false)} color="primary">
              -
            </Button>
          </div>

          <div className="order-total">
            <div>Pizza Price: {pizzaBasePrice} TL</div>
            <div>Extra Topping Price: {totalToppingPrice} TL</div>
            <div>Order Total: {totalPrice} TL</div>
          </div>

          <Button type="submit" disabled={!isFormValid()}>
            {submitting ? "Sending..." : "Place Order"}
          </Button>
        </form>
      </div>
    </main>
  );
};

export default FormArea;
