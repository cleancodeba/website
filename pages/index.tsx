import * as React from 'react';
import Head from "next/head";
import InformationSection from "../components/informationSection/InformationSection";

export default function Home() {
  return (
    <>
    <Head>
      <title>Clean Code BA</title>
    </Head>

    <InformationSection title={"Clean Jobs"}
                        image={"/cleanjobs_opti.jpg"}
                        buttonTitle={"Ver las ofertas! 🤩"}
                        description={"Ofertas de trabajo <b>curadas</b> según la <b>metodolgía de trabajo y el feedback de los Clean Coders</b>, te mostramos los lugares donde el clean code y las buenas prácticas son <b>indispensables</b>. <br /> <span class='is-size-5 mt-3'>Podes encontrar las mejores propuestas <span class=\"tag is-success\">JUNIOR FRIENDLY</span>"}
                        link={"/jobs"}
    />

    <InformationSection title={"Eventos"}
                        image={"/meetup_opti.jpg"}
                        buttonTitle={"Ir a Meetup.com!"}
                        description={"Armamos eventos informales de programación en el que realizamos charlas específicas o katas aplicando TDD."}
                        link={"https://www.meetup.com/Clean-Code-Buenos-Aires/"}
                        right/>

    <InformationSection title={"Slack"}
                        image={"/slack_opti.jpg"}
                        buttonTitle={"Entrar al canal!"}
                        description={"Compartimos links, eventos, opiniones, todo lo relacionado a las comunidades!"}
                        link={"http://bitly.com/ccbaslack"}
                        />
    </>
);
}
