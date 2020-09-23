import * as React from 'react';
import * as typeformEmbed from '@typeform/embed';

export default function Jobs() {
  function openTypeform(url: string) {
    const typeform = typeformEmbed.makePopup(url, {});
    typeform.open()
  }

  function openForm() {
    openTypeform("https://form.typeform.com/to/OAJqKlIH");
  }

  function openNewsletterForm() {
    openTypeform("https://form.typeform.com/to/UrgxlLER")
  }

  return (
    <>
      <div className="container">
        <div className="level">
          <div className={"level-item"}>
            <div className="title">
              Clean Jobs
            </div>
          </div>
        </div>
        <div className="columns is-multiline is-mobile">
          <div className="column is-full">
            <div className="box">
              <div className={"columns"}>
                <div className={"column"}>
                  <article className="media">
                    <div className="media-content">
                      <div className="content">
                        <img src={"/cleanjobs_opti.jpg"}/>
                      </div>
                    </div>
                  </article>
                </div>
                <div className={"column"}>
                  <article className="media">
                    <div className="media-content">
                      <div className="content is-desktop">
                        <ul className="is-size-5">
                          <li>Estamos trabajando para sumar empresas interesadas en publicar de forma <b>gratuita</b> ofertas de trabajo.</li>
                          <li>Es muy importante conocer la metodología de trabajo, lenguajes, stacks, cultura, etc.</li>
                          <li>Van a ser destacadas las oportunidades para perfiles <b>trainees/juniors</b></li>
                        </ul>
                      </div>
                      <div className={"level-item"}>
                        <button className="button is-medium is-success mt-3" onClick={openForm} style={{ cursor: 'pointer' }}>
                          ¡Quiero publicar! 👏
                        </button>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="content">
          <p>En esta industria es <b>muy facil equivocarse</b> y tomar propuestas laborales que <b>no</b> suman a nuestro crecimiento profesional.</p>

          <p>Es importante tener en cuenta lo que un trabajo
            puede darte para mejorar tus conocimientos, mantenerte actualizado
            y sobre todas las cosas seguir <b>apasionado por lo que haces</b>.</p>
          <ul>
            <li>¿Sos un dev?</li>
            <li>¿Querés cambiar de trabajo?</li>
            <li>¿Necesitás ayuda para conseguir tu primer empleo?</li>
            <li>¿No sabes que propuesta elegir?</li>
          </ul>
          <br />
          <button className="button is-medium is-success" onClick={openNewsletterForm} style={{ cursor: 'pointer' }}>
            ¡Manteneme al tanto! 🤝
          </button>
        </div>
      </div>
    </>
  );
}
