import React, { PureComponent } from 'react';
import { compareAsc } from 'date-fns';
import TagsFilter from './TagsFilter';
import GamesList from './GamesList';
import { games } from './data';

class FilteredGamesList extends PureComponent {
  state = { filterTagIds: [] };

  updateFilterTagIds = filterTagIds => this.setState({ filterTagIds });

  render() {
    const { filterTagIds } = this.state;
    const filteredGames = Object.values(games).filter(game =>
      filterTagIds.every(tagId => game.tagIds.includes(tagId))
    );

    return (
      <div>
        <TagsFilter
          filterTagIds={filterTagIds}
          onChange={this.updateFilterTagIds}
        />
        <GamesList games={filteredGames} />
      </div>
    );
  }
}

export default FilteredGamesList;
