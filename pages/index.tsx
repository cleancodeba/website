import * as React from 'react';
import Head from "next/head";

export default function Home() {
  return (
    <>
    <Head>
      <title>Clean Code BA</title>
    </Head>

  <div className="columns is-vcentered">
    <div className="column is-6">
      <h1 className="title is-title is-size-1 has-text-weight-bold">Eventos</h1>
      <p className="subtitle is-4 has-margin-top-20 is-family-primary">
        Armamos eventos informales de programación en el que realizamos charlas especificas o katas aplicando TDD.
      </p>
        <div className="field has-addons has-margin-top-30">
          <div className="control">
            <button className="button is-danger is-medium">
              Ver en Meetup.com!
            </button>
          </div>
        </div>
    </div>
    <div className="column is-6 has-text-centered is-hidden-mobile">
      <figure className="image">
        <img src="/meetup.jpg" alt="Meetup" />
      </figure>
    </div>
  </div>

  <div className="columns is-vcentered mt-6">
    <div className="column is-6 has-text-centered mr-6 is-hidden-mobile">
      <figure className="image">
        <img src="/slack.jpg" alt="Slack" />
      </figure>
    </div>

    <div className="column is-6">
      <h1 className="title is-title is-size-1 has-text-weight-bold">Slack</h1>
      <p className="subtitle is-4 has-margin-top-20 is-family-primary">
        Canal para hablar de lo que quieras!
      </p>
      <div className="field has-addons has-margin-top-30">
        <div className="control">
          <button className="button is-warning is-medium">
            Entrar
          </button>
        </div>
      </div>
    </div>
  </div>

    </>

);
}
