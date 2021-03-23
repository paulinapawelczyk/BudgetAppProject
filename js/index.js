class Budget {
    incomeAddDesc = null;
    icnomeAddVal = null;
    incomeAddBtn = null;
    expenseAddDesc = null;
    expenseAddVal = null;
    expenseAddBtn = null;
    incomesList = null;
    expensesList = null;
    budgetSumm = null;
    editListBtn = null;
    deleteListBtn = null;
    itemDesc = null;
    itemValue = null;
    incomesSumm = null;
    expensesSumm = null;

    //make anchors for elements//
    AppElements = {
        incomeAddDesc: '[data-income-desc]',
        icnomeAddVal: '[data-income-value]',
        incomeAddBtn: '[data-income-button]',
        expenseAddDesc: '[data-expense-desc]',
        expenseAddVal: '[data-expense-value]',
        expenseAddBtn: '[data-expense-button]',
        incomesList: '[data-incomes-list]',
        expensesList: '[data-expenses-list]',
        budgetSumm: '[data-budget-summary]',
        editListBtn: '[data-edit-button]',
        deleteListBtn: '[data-delete-button]',
        itemDesc: '[data-item-desc]',
        itemValue: '[data-item-value]',
        incomesSumm: '[data-incomes-summ]',
        expensesSumm: '[data-expenses-summ]'
    }


    init() {

        this.incomeAddDesc = document.getElementById(this.AppElements.incomeAddDesc);
        this.incomeAddVal = document.getElementById(this.AppElements.incomeAddVal);
        this.incomeAddBtn = document.getElementById(this.AppElements.incomeAddBtn);

        this.expenseAddDesc = document.getElementById(this.AppElements.expenseAddDesc);
        this.expenseAddVal = document.getElementById(this.AppElements.expenseAddVal);
        this.expenseAddBtn = document.getElementById(this.AppElements.expenseAddBtn);

        this.incomesList = document.querySelector(this.AppElements.incomesList);
        this.expensesList = document.querySelector(this.AppElements.expensesList);

        this.budgetSumm = document.querySelector(this.AppElements.budgetSumm);
        this.incomesSumm = document.querySelector(this.AppElements.incomesSumm);
        this.expensesSumm = document.querySelector(this.AppElements.expensesSumm);
    }

    addEventListenersActions() {
        this.incomeAddBtn.addEventListener('click', () => {
            this.addIncomeItem();
        })
        this.expenseAddBtn.addEventListener('click', () => {
            this.addExpenseItem();
        })
    }

    addIncomeItem() {
        const inValue = this.incomeAddVal.value;
        const inDesc = this.incomeAddDesc.value;
    }

    addExpenseItem() {
        const exValue = this.expenseAddVal.value;
        const exDesc = this.expenseAddDesc.value;
    }

}



const app = new Budget();
app.init();