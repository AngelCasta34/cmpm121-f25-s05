// CMPM 121 Refactored Counter App
// Refactored to remove code smells duplicated code, global variables, and unclear naming.

// The CounterApp class encapsulates all logic and state for the counter
class CounterApp {
  // Private variable to keep track of the counter
  private count = 0;

  // References to key DOM elements
  private counterDisplay: HTMLElement;
  private buttons: NodeListOf<HTMLButtonElement>;

  constructor() {
    // Build the HTML interface for the counter
    document.body.innerHTML = `
      <h1>CMPM 121 Project</h1>
      <p>Counter: <span id="counter">0</span></p>
      <button data-action="increment">Increment</button>
      <button data-action="decrement">Decrement</button>
      <button data-action="reset">Reset</button>
    `;

    // Get references to the counter display and buttons
    this.counterDisplay = document.getElementById("counter")!;
    this.buttons = document.querySelectorAll("button");

    // Add event listeners for each button
    // Instead of three separate click functions, we use one shared handler
    this.buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const action = btn.dataset.action;
        this.handleAction(action!);
      });
    });
  }

  // Handles button actions based on their data-action attribute
  private handleAction(action: string) {
    // Modify the count value based on the action type
    if (action === "increment") this.count++;
    else if (action === "decrement") this.count--;
    else if (action === "reset") this.count = 0;

    // Update the display after every action
    this.updateDisplay();
  }

  // Updates the visible counter, title, and background color
  private updateDisplay() {
    // Update the counter number on screen
    this.counterDisplay.textContent = `${this.count}`;

    // Update the document title to show number of clicks
    document.title = `Clicked ${this.count}`;

    // Change background color based on even/odd count
    document.body.style.backgroundColor = this.count % 2 === 0
      ? "lightblue"
      : "pink";
  }
}

// Start the app when the script runs
new CounterApp();
