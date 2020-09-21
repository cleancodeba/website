import * as React from 'react';
import Head from "next/head";
import InformationSection from "../components/informationSection/InformationSection";

export default function Home() {
  return (
    <>
    <Head>
      <title>Clean Code BA</title>
    </Head>

    <InformationSection title={"Eventos"}
                        image={"/meetup.jpg"}
                        buttonTitle={"Ver en Meetup.com!"}
                        description={"Armamos eventos informales de programación en el que realizamos charlas especificas o katas aplicando TDD."}
                        link={"https://www.meetup.com/Clean-Code-Buenos-Aires/"} />

    <InformationSection title={"Slack"}
                        image={"/slack.jpg"}
                        buttonTitle={"Entrar!"}
                        description={"Compartimos links, eventos, opiniones, todo lo relacionado a las comunidad!"}
                        link={"http://bitly.com/ccbaslack"}
                        right/>

    </>

);
}
