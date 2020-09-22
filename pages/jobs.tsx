import * as React from 'react';
import { ReactTypeformEmbed } from 'react-typeform-embed';
import * as typeformEmbed from '@typeform/embed';

export default function Jobs() {

  function openForm() {
    const typeform = typeformEmbed.makePopup("https://form.typeform.com/to/OAJqKlIH", {});
    typeform.open()
  }

  return (
    <>
      <h1>Jobs</h1>
      <div className="ExamplePopup">
        {/*<ReactTypeformEmbed*/}
        {/*  popup*/}
        {/*  autoOpen={false}*/}
        {/*  url="https://form.typeform.com/to/OAJqKlIH"*/}
        {/*  hideHeaders*/}
        {/*  hideFooter*/}
        {/*  buttonText="Go!"*/}
        {/*  style={{ top: 100 }}*/}
        {/*/>*/}
        <button className="btn" onClick={openForm} style={{ cursor: 'pointer' }}>
          Click to open the popup!
        </button>
      </div>
    </>
  );
}
