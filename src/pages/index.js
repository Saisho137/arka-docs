import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Heading from '@theme/Heading';
import styles from './index.module.css';

const features = [
  {
    title: '9 Microservicios',
    description: 'Clean Architecture con Java 21, Spring Boot 4, WebFlux y Virtual Threads. Paradigma híbrido reactivo/imperativo.',
  },
  {
    title: 'Event-Driven',
    description: 'Kafka 8 (KRaft) como broker central. Saga Pattern, Outbox, Event Sourcing y CQRS para consistencia distribuida.',
  },
  {
    title: 'Zero Trust',
    description: 'API Gateway con JWT (Entra ID / Cognito), Tenant Restrictions B2B, gRPC interno y persistencia políglota.',
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md padding-vert--lg">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/contexto-negocio">
            Explorar documentación →
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Inicio"
      description="Documentación técnica de Arka — Plataforma E-Commerce B2B para Colombia/LATAM">
      <HomepageHeader />
      <main>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              {features.map((props, idx) => (
                <Feature key={idx} {...props} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
