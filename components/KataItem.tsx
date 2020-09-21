import React from "react";
import {Kata} from "../core/entities/Kata";

export interface KataItemProps {
  kata: Kata
}

export default function KataItem({kata}: KataItemProps) {

  return (<div className="box">
      <article className="media">
        <div className="media-content">
          <div className="tags mb-0">
            <span className="tag is-success is-light">One</span>
          </div>
          <div className="content">
            <p>
              <strong>{kata.name}</strong>
              <br />
              {kata.shortDescription}
            </p>
          </div>
          <nav className="level is-mobile">
            <div className="level-left">
              <div className="level-item">
              </div>
            </div>
            <div className="level-right">
              <div className="level-item">
                <a className="button is-small is-dark">
                  VER
                </a>
              </div>
            </div>
          </nav>
        </div>
      </article>
  </div>)
}
