import React from 'react'

export const BoxInformation: React.FC = () => {
  return (<div className="box">
    <article className="media">
      <div className="media-content">
        <div className="content">
          <img src={"/meetup_opti.jpg"}/>
          <p className={"is-size-5 has-text-centered"}>
            Buscamos empresas interesadas en
            publicar de forma <b>gratuita</b> ofertas de trabajo.
          </p>
        </div>
      </div>
    </article>
  </div>);
}
