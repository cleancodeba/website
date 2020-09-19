import Head from 'next/head'
import {Test} from "../components/Test";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Clean Code BA</title>
      </Head>
      <nav className="navbar is-fixed-top container has-shadow is-transparent" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link href="/">
            <a className="pt-2"><img src="/logo@2x.png" height="90" width="90" /></a>
          </Link>
        </div>
        <div className="navbar-menu">
          <Link href="/meetup">
            <a className="navbar-item">
              Meetup
            </a>
          </Link>
          <Link href="/katas">
            <a className="navbar-item">
              Katas
            </a>
          </Link>
          <Link href="/jobs">
            <a className="navbar-item">
              Clean Jobs
            </a>
          </Link>
        </div>
      </nav>
      <section className="container has-navbar-fixed-top">
        <h1>Hola</h1>
        <h1>Hola</h1>
        <h1>Hola</h1>
        <h1>Hola</h1>
        <h1>Hola</h1>
        <h1>Hola</h1>
        <h1>Hola</h1>
        <h1>Hola</h1>
      </section>
      <footer className="footer">
        <div className="content has-text-centered">
          <p>
            <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is licensed
            <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
            is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
          </p>
        </div>
      </footer>
    </div>
  )
}
