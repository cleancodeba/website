import * as React from 'react';
import {Configuration} from "../core/driver/configuration/Configuration";
import {Kata} from "../core/entities/Kata";
import {GetStaticProps} from "next";
import KataItem from "../components/KataItem";

export default function Katas({
                               katas
                             }: {
  katas: Kata[]
}) {
  return (
    <>
      <div className={"content"}>
        <h1>¿Que es un code Kata?</h1>
        <p>Basado en las artes marciales, una Kata es un entrenamiento a conciencia de las habilidades de programación</p>
        <p>Fue inicialmente ideado por Dave Thomas (The Pragmatic Programmer) y rápidamente fue incorporado por muchos que entendieron el valor que una sesión de entrenamiento y la disciplina para ejecutarla con regularidad, podría ofrecer en productividad para el día a día.</p>
        <br/>
        <h4>¿Habilidades de programación? 🤔</h4>
        <ul>
          <li>Diseño Simple</li>
          <li>Test Driven Development (TDD)</li>
          <li>Behaivor Deiven Development (BDD)</li>
          <li>Programacion Orientada a Objetos</li>
          <li>Progrmacion Funcional</li>
          <li>entre otras..</li>
        </ul>
        <br/>
        <h4>Explicación de Robert C. Martin 🙌</h4>
        <p>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/kScFczWbwRM" frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen/>
        </p>
        <h6><i>Muy pronto en esta seccion vamos a subir uan recopilacion de las mejores Katas!</i></h6>
        <h4>Mientras te dejamos unos links:</h4>
        <ul>
          <li><a href={"https://codingdojo.org/kata/"} target={"_blank"}>CodingDojo.org</a></li>
          <li><a href={"http://codekata.com/"} target={"_blank"}>CodeKata.com</a></li>
          <li><a href={"https://osherove.com/tdd-kata-1"} target={"_blank"}>String Calculator by Roy Osherove</a></li>
        </ul>
      </div>

      {/*<div className="columns is-multiline is-mobile">*/}
      {/*  {katas.map((value, index) => (*/}
      {/*    <div key={index} className="column is-half">*/}
      {/*      <KataItem kata={value} />*/}
      {/*    </div>*/}
      {/*  ))}*/}
      {/*</div>*/}
    </>
  );
}

// export const getStaticProps: GetStaticProps = async () => {
//   const katas = await Configuration.getKataInteractor().getAll();
//   return {
//     props: {
//       katas
//     }
//   }
// }
