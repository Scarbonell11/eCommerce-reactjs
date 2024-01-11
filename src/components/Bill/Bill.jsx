import "./Bill.css";


const Bill = ({ orderId, dataClient }) => {
  const { buyer, total, printBill } = dataClient;

  return (
    <div className="container">
      <div className="card cart">
        <label className="title">Factura N°:{orderId} </label>
        <div className="steps">
          <div className="step">
            <div>
              <span>Datos personales</span>
              <p>Nombre:{buyer.name} </p>
              <p>Telefono:{buyer.phone} </p>
              <p>Mail:{buyer.email} </p>
            </div>
            <hr />
            <div>
              <span>Metodo de pago</span>
              <p>Ejemplo VISA</p>
              <p>**** **** **** 4243</p>
            </div>
            <hr />
            <div className="payments">
              <span>Pago</span>
              <div className="details">
                <span>Subtotal:</span>
                <span>${total} </span>
                <span>Envio:</span>
                <span>Gratis</span>
                <span>Tax:</span>
                <span>Gratis</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card checkout">
        <div className="footer">
          <label className="price">${total} </label>
          <button onClick={() => printBill()} className="checkout-btn">Imprimir factura</button>
        </div>
      </div>
    </div>
  );
};

export default Bill;


