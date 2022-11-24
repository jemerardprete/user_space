import React from 'react';
import './Hack.css';
import QRCode from "react-qr-code";

const selectContact = async () => {
  const contactView = document.getElementById('contactView');

  if (!('contacts' in navigator)) {
    contactView.innerHTML = 'Navigateur non compatible';
    return null;
  }

  const contact = await navigator.contacts.select(['name', 'tel'], {
    multiple: false,
  });

  contactView.innerHTML = `${contact[0].name[0]} - ${contact[0].tel[0]}`;
}

const Hack = () => {

  return (
    <section>
      <button onClick={() => selectContact()}>Hack</button>
      <div id="contactView"></div>
      <div className="qrcode">
        <QRCode
          size={256}
          style={{ height: "auto", maxWidth: "100%", width: "100%" }}
          value="https://console.firebase.google.com/project/userspace-60a2c/overview"
          viewBox={`0 0 256 256`}
        />
      </div>
    </section>
  );
}

export default Hack;

