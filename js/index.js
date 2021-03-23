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
    alertIncomes = null;
    alertExpenses = null;

    //make anchors for elements//
    AppElements = {
        incomeAddDesc: '[data-income-desc]',
        incomeAddVal: '[data-income-value]',
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
        expensesSumm: '[data-expenses-summ]',
        alertIncomes: '[data-alert-incomes]',
        alertExpenses: '[data-alert-expenses]'
    }


    init() {

        this.incomeAddDesc = document.querySelector(this.AppElements.incomeAddDesc);
        this.incomeAddVal = document.querySelector(this.AppElements.incomeAddVal);
        this.incomeAddBtn = document.querySelector(this.AppElements.incomeAddBtn);

        this.expenseAddDesc = document.querySelector(this.AppElements.expenseAddDesc);
        this.expenseAddVal = document.querySelector(this.AppElements.expenseAddVal);
        this.expenseAddBtn = document.querySelector(this.AppElements.expenseAddBtn);

        this.incomesList = document.querySelector(this.AppElements.incomesList);
        this.expensesList = document.querySelector(this.AppElements.expensesList);

        this.budgetSumm = document.querySelector(this.AppElements.budgetSumm);
        this.incomesSumm = document.querySelector(this.AppElements.incomesSumm);
        this.expensesSumm = document.querySelector(this.AppElements.expensesSumm);

        this.alertIncomes = document.querySelector(this.AppElements.alertIncomes);
        this.alertExpenses = document.querySelector(this.AppElements.alertExpenses);

        this.addEventListenersActions();
    }

    addEventListenersActions() {
        this.incomeAddBtn.addEventListener('click', () => {
            this.addIncomeItem();
        })
        this.expenseAddBtn.addEventListener('click', () => {
            this.addExpenseItem();
        })
    }

    getIncomeInput() {
        const inValue = this.incomeAddVal.value;
        const inDesc = this.incomeAddDesc.value;

        if (inValue > 0 && inDesc) {
            return {
                inValue: inValue,
                inDesc: inDesc
            }
        } else {
            return null;
        }
    }

    getExpenseInput() {
        const exValue = this.expenseAddVal.value;
        const exDesc = this.expenseAddDesc.value;

        if (exValue > 0 && exDesc) {
            return {
                exValue: exValue,
                exDesc: exDesc
            }
        } else {
            return null;
        }
    }


    addIncomeItem() {
        const newIncome = this.getIncomeInput();
        if (!newIncome) {
            this.showAlertIn();
        }
    }

    addExpenseItem() {
        const newExpense = this.getExpenseInput();
        if (!newExpense) {
            this.showAlertEx();
        }
    }

    showAlertIn() {
        this.alertIncomes.classList.remove('hide');
    }

    showAlertEx() {
        this.alertExpenses.classList.remove('hide');
    }

    hideAlert() {
        this.alert.classList.add('hide');
    }

}



const app = new Budget();
app.init();