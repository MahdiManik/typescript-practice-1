{
  // getter and setter

  class BankAccount {
    public readonly id: number;
    public name: string;
    protected balance: number;

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this.balance = balance;
    }

    // setter
    set addDeposit(amount: number) {
      this.balance = this.balance + amount;
    }
    // addDeposit = (amount: number) => {
    //   this.balance = this.balance + amount;
    //       };

    // getter
    get currentBalance() {
      return this.balance;
    }
    //     getBalance() {
    //       return this.balance;
    //     }
  }

  const poorManAccount = new BankAccount(111, "Mr. poor", 50);
  //   poorManAccount.addDeposit(300); // call the function is needed
  poorManAccount.addDeposit = 50;
  //   const myBalance = poorManAccount.getBalance(); // call the function is needed
  const myBalance = poorManAccount.currentBalance; // call the function is not needed
  console.log(myBalance);
}
