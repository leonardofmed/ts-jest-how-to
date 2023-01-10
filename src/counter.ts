export class Counter {
  public counter: number = 0;
  public mainCounterElement!: HTMLButtonElement;
  public multipleCounterElement!: HTMLButtonElement;

  public setupCounter(element: HTMLButtonElement) {
    this.mainCounterElement = element;
    this.mainCounterElement.addEventListener('click', () => {
      this.setCounter(this.counter + 1);
      this.setMultiple(this.counter * 2);
    });
    this.setCounter(0);
  }

  public setupMultiple(element: HTMLButtonElement) {
    this.multipleCounterElement = element;
  }

  private setMultiple(count: number) {
    this.multipleCounterElement.innerHTML = `multiple is ${count}`;
  }

  private setCounter(count: number) {
    this.counter = count;
    this.mainCounterElement.innerHTML = `count is ${this.counter}`;
  }

}