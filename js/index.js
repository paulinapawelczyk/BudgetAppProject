class Budget {
    incomeAddDesc = null;
    icnomeAddVal = null;
    incomeAddBtn = null;
    expenseAddDesc = null;
    expenseAddVal = null;
    expenseAddBtn = null;
    incomesList = null;
    expensesList = null;
    editListBtn = null;
    deleteListBtn = null;
    itemDesc = null;
    itemValue = null;

    budgetSummInfo = null;
    budgetSumm = 0;
    incomesSummInfo = null;
    incomesSumm = 0;
    expensesSummInfo = null;
    expensesSumm = 0;

    alertIncomes = null;
    alertExpenses = null;
    numberOfIncomes = 0;
    numberOfExpenses = 0;
    incomesItems = [];
    expensesItems = [];

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
        budgetSummInfo: '[data-budget-summary]',
        editListBtn: '[data-edit-button]',
        deleteListBtn: '[data-delete-button]',
        itemDesc: '[data-item-desc]',
        itemValue: '[data-item-value]',
        incomesSummInfo: '[data-incomes-summ]',
        expensesSummInfo: '[data-expenses-summ]',
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

        this.budgetSummInfo = document.querySelector(this.AppElements.budgetSummInfo);
        this.incomesSummInfo = document.querySelector(this.AppElements.incomesSummInfo);
        this.expensesSummInfo = document.querySelector(this.AppElements.expensesSummInfo);

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
                inDesc: inDesc,
                id: this.numberOfIncomes
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
                exDesc: exDesc,
                id: this.numberOfExpenses
            }
        } else {
            return null;
        }
    }

    createIncomeItem(inDesc, inValue, id) {
        return `<li class="income_item" id="${id}">
                            <p class="income_item_desc" data-item-desc>${inDesc}</p>
                            <p class="income_item_value" data-item-value>${Number(inValue).toFixed(2)} zł</p>
                            <div class="income_item_buttons">
                                <button class="income_edit" data-edit-button><i class="fas fa-edit"></i></button>
                                <button class="income_delete" data-delete-button><i
                                        class="fas fa-trash-alt"></i></button>
                            </div>
                        </li>`
    }

    createExpenseItem(exDesc, exValue, id) {
        return `<li class="expense_item" id="${id}">
                            <p class="expense_item_desc" data-item-desc>${exDesc}</p>
                            <p class="expense_item_value" data-item-value>${Number(exValue).toFixed(2)} zł</p>
                            <div class="expense_item_buttons">
                                <button class="expense_edit" data-edit-button><i class="fas fa-edit"></i></button>
                                <button class="expense_delete" data-delete-button><i
                                        class="fas fa-trash-alt"></i></button>
                            </div>
                        </li>`
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

    increaseIncome() {
        this.incomesSumm = 0;
        this.incomesItems.forEach(({ inValue }) => {

            this.incomesSumm += parseFloat(inValue, 10);
        })
        this.incomesSummInfo.innerHTML = `${(this.incomesSumm).toFixed(2)} zł`;
    }

    addIncomeItem() {
        const newIncome = this.getIncomeInput();
        if (!newIncome) {
            this.showAlertIn();
        } else {
            this.incomesList.insertAdjacentHTML('beforeend', this.createIncomeItem(newIncome.inDesc, newIncome.inValue, newIncome.id));
            this.incomesItems.push(newIncome);
            this.hideAlertIn();
            this.numberOfIncomes++; //make id's for exit and delete function

            this.increaseIncome();


            this.incomeAddDesc.value = '';
            this.incomeAddVal.value = '';


        }
    }

    addExpenseItem() {
        const newExpense = this.getExpenseInput();
        if (!newExpense) {
            this.showAlertEx();
        } else {
            this.expensesList.insertAdjacentHTML('beforeend', this.createExpenseItem(newExpense.exDesc, newExpense.exValue, newExpense.id));
            this.expensesItems.push(newExpense);
            this.hideAlertEx();
            this.numberOfExpenses++;


            this.increaseExpenses();

            this.expenseAddDesc.value = '';
            this.expenseAddVal.value = '';
        }
    }



}



const app = new Budget();
app.init();