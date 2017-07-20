import * as React from 'react';
import { Card } from 'semantic-ui-react';
import { IHero } from '../interfaces';

type Props = {
  heroes: IHero[];
};

const HeroCards: React.SFC<Props> = props => {
  const { heroes } = props;
  const cards = heroes.map((hero, key) => {
    return { header: hero.name, description: hero.description };
  });

  return <Card.Group items={cards} itemsPerRow={4} stackable={true} />;
};

export default HeroCards;
