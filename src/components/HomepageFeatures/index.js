import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
          Just double-click Ctrl to execute any command.
          Press the tab key to switch between multiple commands.
      </>
    ),
  },
  {
    title: 'A fairly high degree of freedom',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
          You can execute arbitrary instructions as long as the current shell
          environment supports it. You can execute the mvn, gradle, nodejs and
          other instructions that come with the IDE. You can even execute scripts.
      </>
    ),
  },
  {
    title: 'More convenient command configuration',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
          You can easily add your commands and manage them in the IDE.
          If you have configured alias, it doesn't matter, you can still use it in FastShell.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
