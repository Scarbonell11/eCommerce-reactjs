import { useState } from "react";
import { notify, notifyError } from "../../notification/Notification";
import "./CheckoutForm.css";

const CheckoutForm = ({ onConfirm }) => {
  //sincronizacion de inputs con estados
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleConfirm = (event) => {
    event.preventDefault();

    const userData = {
      name,
      phone,
      email,
    };

    if (name && phone && email) {
      onConfirm(userData);
      notify("Orden generada con exito");
    } else {
      notifyError("Completa el formulario para continuar");
    }
  };

  return (
    <section className="containerForm">
      <form onSubmit={handleConfirm} className="form">
        <div className="title">
          Checkout,
          <br />
          <span>Completa tus datos</span>
        </div>
        <input
          className="input"
          name="name"
          value={name}
          onChange={({ target }) => setName(target.value)}
          placeholder="Nombre"
          type="text"
        />
        <input
          className="input"
          name="phone"
          value={phone}
          onChange={({ target }) => setPhone(target.value)}
          placeholder="Telefono"
          type="text"
        />
        <input
          className="input"
          name="mail"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          placeholder="eMail"
          type="text"
        />
        <button className="button-confirm" type="submit">
          Crear orden →
        </button>
      </form>
    </section>
  );
};

export default CheckoutForm;
