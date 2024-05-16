import { useState } from "react";

const FormArea = () => {
  const [formData, setFormData] = useState({
    isim: "",
    boyut: "",
    hamurTipi: "",
    toppings: [],
  });

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

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.toppings.length < 4) {
      alert("En az 4 pizza topping seçmelisiniz!");
      return;
    }
    console.log(formData); // Form verisini konsola yazdırma veya istediğiniz şekilde kullanma
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
          />
          Küçük
          <input
            type="radio"
            name="boyut"
            value="medium"
            onChange={handleSizeChange}
            required
          />
          Orta
          <input
            type="radio"
            name="boyut"
            value="large"
            onChange={handleSizeChange}
            required
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
              />
              {topping.name}
            </label>
          ))}
        </div>

        <button type="submit">Gönder</button>
      </form>
    </main>
  );
};

export default FormArea;
