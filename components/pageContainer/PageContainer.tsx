import React from "react";

interface PageContainerProps {
  children: any
}

export default function PageContainer(props: PageContainerProps) {
  return (
    <section className="container is-fluid mt-6">
      <section className="container">
        {props.children}
      </section>
    </section>
  );
}
