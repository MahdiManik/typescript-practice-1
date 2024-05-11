{
  // access modifiers

  class BankAccount {
    public readonly id: number;
    public name: string;
    protected balance: number;

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this.balance = balance;
    }
    addDeposit = (amount: number) => {
      this.balance = this.balance + amount;
    };
    getBalance() {
      return this.balance;
    }
  }

  class Student extends BankAccount {
    test() {
      this.balance;
    }
  }
  const poorManAccount = new BankAccount(111, "Mr. poor", 20);
  poorManAccount.addDeposit(300);
  const myBalance = poorManAccount.getBalance();
  console.log(myBalance);
}
