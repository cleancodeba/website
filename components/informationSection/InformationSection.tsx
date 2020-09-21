import React from "react";
import Link from "next/link";
import {background} from "@storybook/theming";

export interface InformationSectionProps {
  title: string,
  image: string,
  buttonTitle: string,
  description: string,
  link: string,
  right?: boolean
}

function loadDirection(right: boolean) {
  return right ? "right" : "";
}

export default function InformationSection({right = false, ...props}: InformationSectionProps) {
  return (
    <div className={"columns is-vcentered " + loadDirection(right)}>
      <div className="column is-6 information">
        <h1 className="title is-title is-size-1 has-text-weight-bold">{props.title}</h1>
        <p className="subtitle is-4 has-margin-top-20 is-family-primary" dangerouslySetInnerHTML={{__html: props.description}}>
        </p>
        <div className="field has-addons has-margin-top-30">
          <div className="control">
            {generateLink(props)}
          </div>
        </div>
      </div>
      <div className="column is-6 has-text-centered is-hidden-mobile">
        <figure className="image">
          <img src={props.image}/>
        </figure>
      </div>
    </div>
  )
}

function generateAnchor(props: InformationSectionProps, target: string) {
  return <a href={props.link} target={target} className="button is-dark is-medium">
    {props.buttonTitle}
  </a>;
}

function generateLink(props: InformationSectionProps) {
  const normalAnchor = props.link.startsWith("http")
  const target = normalAnchor ? "_blank" : "_self"
  const anchor = generateAnchor(props, target)
  return normalAnchor ? anchor : <Link href={props.link} prefetch={normalAnchor}>
    {anchor}
  </Link>;
}

