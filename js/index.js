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

    createIncomeItem() {
        return `<li class="income_item">
                            <p class="income_item_desc" data-item-desc>Lorem ipsum aaassssssaaaaaaa</p>
                            <p class="income_item_value" data-item-value>101110 zł</p>
                            <div class="income_item_buttons">
                                <button class="income_edit" data-edit-button><i class="fas fa-edit"></i></button>
                                <button class="income_delete" data-delete-button><i
                                        class="fas fa-trash-alt"></i></button>
                            </div>
                        </li>`
    }

    createExpenseItem() {
        return `<li class="expense_item">
                            <p class="expense_item_desc" data-item-desc>Lorem ipsum</p>
                            <p class="expense_item_value" data-item-value>100 zł</p>
                            <div class="expense_item_buttons">
                                <button class="expense_edit" data-edit-button><i class="fas fa-edit"></i></button>
                                <button class="expense_delete" data-delete-button><i
                                        class="fas fa-trash-alt"></i></button>
                            </div>
                        </li>`
    }

    addIncomeItem() {
        const newIncome = this.getIncomeInput();
        if (!newIncome) {
            this.showAlertIn();
        } else {
            this.incomesList.insertAdjacentHTML('beforeend', this.createIncomeItem());
            this.hideAlertIn();
        }
    }

    addExpenseItem() {
        const newExpense = this.getExpenseInput();
        if (!newExpense) {
            this.showAlertEx();
        } else {
            this.expensesList.insertAdjacentHTML('beforeend', this.createExpenseItem());
            this.hideAlertEx();
        }
    }

    showAlertIn() {
        this.alertIncomes.classList.remove('hide');
    }

    showAlertEx() {
        this.alertExpenses.classList.remove('hide');
    }

    hideAlertIn() {
        this.alertIncomes.classList.add('hide');
    }

    hideAlertEx() {
        this.alertExpenses.classList.add('hide');
    }

}



const app = new Budget();
app.init();