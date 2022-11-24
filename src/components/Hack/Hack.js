import React from 'react';

const selectContact = async () => {
  const list = document.getElementById('list');

  if (!('contacts' in navigator)) {
    list.innerHTML = 'Navigateur non compatible';
    return null;
  }

  const contact = await navigator.contacts.select(['name', 'tel'], {
    multiple: false,
  });

  list.innerHTML = `${contact[0].name[0]} - ${contact[0].tel[0]}`;
}

const Hack = () => {

  return (
    <section>
      <button onClick={() => selectContact()}>Hack</button>
      <div id="list"></div>
    </section>
  );
}

export default Hack;

