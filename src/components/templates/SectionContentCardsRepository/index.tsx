import React from 'react';
import { FixedSizeList } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';

import { CardRepository } from 'components/CardRepository';
import { IRepository } from 'shared/models';

import './styles.scss';

type SectionContentCardsRepositoryProps = {
  repositories: IRepository[];
};

export function SectionContentCardsRepository({
  repositories,
}: SectionContentCardsRepositoryProps) {
  const row = ({
    index,
    style,
  }: {
    index: number;
    style: React.CSSProperties;
  }) => {
    const data = repositories[index];
    return (
      <CardRepository style={style} key={String(data.id)} repository={data} />
    );
  };

  return (
    <>
      {!!repositories.length && (
        <section className="contentCardsRepository">
          <AutoSizer>
            {({ height, width }) => (
              <FixedSizeList
                className="contentCardsRepository__list"
                height={height}
                itemCount={repositories.length}
                itemSize={125}
                width={width}
              >
                {row}
              </FixedSizeList>
            )}
          </AutoSizer>
        </section>
      )}
    </>
  );
}
