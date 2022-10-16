export class PaginationNav {
  constructor(activate, setIndex, max) {
    this.activate = activate;
    this.setIndex = setIndex;

    this.max = max;
    this.min = 0;
  }

  nextPage = (curIx) => {
    if (curIx < this.max) {
      this.activate(curIx + 1);
      this.setIndex(curIx + 1);
    }
  };

  prevPage = (curIx) => {
    if (curIx > this.min) {
      this.activate(curIx - 1);
      this.setIndex(curIx - 1);
    }
  };

  setPage = (ix) => {
    this.activate(ix);
    this.setIndex(ix);
  };
}
