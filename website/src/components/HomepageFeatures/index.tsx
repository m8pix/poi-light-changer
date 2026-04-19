import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'MA対応で簡単導入',
    Svg: require('@site/static/img/undraw_puzzle-solved_qdjq.svg').default,
    description: (
      <>
        ModularAvatarに対応！<br />
        <strong>Prefabを置くだけ</strong>で導入が可能です。
      </>
    ),
  },
  {
    title: 'NDMF準拠の非破壊',
    Svg: require('@site/static/img/undraw_split-testing_lkzx.svg').default,
    description: (
      <>
        ビルド時にのみ処理を行う非破壊設計！<br />
        <strong>元のアバターに変更を加えない</strong>為<br />安全にご使用いただけます。
      </>
    ),
  },
  {
    title: 'Poiyomi 9.3〜10.xに対応',
    Svg: require('@site/static/img/poi.svg').default,
    description: (
      <>
        <strong>Poiyomi Toon | Pro</strong>をサポート！<br />
        新しい機能にも適時対応いたします。
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
