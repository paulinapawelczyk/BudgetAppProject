class Budget {
    incomeAddDesc = null;
    incomeAddVal = null;
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

    editItem = null;

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

        this.incomeAddDesc.addEventListener('blur', () => this.hideAlertIn());
        this.incomeAddVal.addEventListener('blur', () => this.hideAlertIn());
        this.incomeAddBtn.addEventListener('blur', () => this.hideAlertIn());
        this.expenseAddDesc.addEventListener('blur', () => this.hideAlertEx());
        this.expenseAddVal.addEventListener('blur', () => this.hideAlertEx());
        this.expenseAddBtn.addEventListener('blur', () => this.hideAlertEx());


        this.incomesList.addEventListener('click', (e) => {
            this.clickTarget(e.target);
        })

        this.expensesList.addEventListener('click', (e) => {
            this.clickTarget(e.target);
        })

    }

    clickTarget(target) {
        if (target.dataset && target.dataset.editButton !== undefined) {
            this.editListItem(target);
        } else if (target.dataset && target.dataset.deleteButton !== undefined) {
            this.deleteListItem(target);
        }
    }

    editListItem(target) {
        const listClass = target.parentElement.parentElement.parentElement.parentElement.parentElement.className;
        const listItem = target.parentElement.parentElement.parentElement;
        const listItemId = listItem.id;

        this.editItem = listItem;
        let selectedElem;

        //put into form divs values

        if (listClass == "incomes_list") {
            selectedElem = this.incomesItems.find((elem) => elem.id == listItemId);

            this.incomeAddDesc.value = selectedElem.inDesc;
            this.incomeAddVal.value = selectedElem.inValue;

        } else if (listClass == "expenses_list") {
            selectedElem = this.expensesItems.find((elem) => elem.id == listItemId);

            this.expenseAddDesc.value = selectedElem.exDesc;
            this.expenseAddVal.value = selectedElem.exValue;
        }


    }

    updateIncomeItem() {

        const newTable = [...this.incomesItems];
        newTable.findIndex((item) => {
            if (item.id == this.editItem.id) {
                item.inValue = this.incomeAddVal.value;
                item.inDesc = this.incomeAddDesc.value;
                this.increaseIncome();
                this.countSumm();
            }
        })

        this.incomesItems = newTable;
        this.editItem.querySelector(this.AppElements.itemDesc).textContent = this.incomeAddDesc.value;
        this.editItem.querySelector(this.AppElements.itemValue).textContent = `${Number(this.incomeAddVal.value).toFixed(2)} PLN`;

        this.incomeAddDesc.value = '';
        this.incomeAddVal.value = '';
        this.editItem = null;

    }

    updateExpenseItem() {

        const newTable = [...this.expensesItems];
        newTable.findIndex((item) => {
            if (item.id == this.editItem.id) {
                item.exValue = this.expenseAddVal.value;
                item.exDesc = this.expenseAddDesc.value;
                this.increaseExpenses();
                this.countSumm();
            }
        })

        this.expensesItems = newTable;
        this.editItem.querySelector(this.AppElements.itemDesc).textContent = this.expenseAddDesc.value;
        this.editItem.querySelector(this.AppElements.itemValue).textContent = `${Number(this.expenseAddVal.value).toFixed(2)} PLN`;

        this.expenseAddDesc.value = '';
        this.expenseAddVal.value = '';
        this.editItem = null;

    }

    deleteListItem(target) {
        const listClass = target.parentElement.parentElement.parentElement.parentElement.parentElement.className;
        const listItem = target.parentElement.parentElement.parentElement;
        const listItemId = listItem.id;
        const newTable = [];

        if (listClass == "incomes_list") {
            const newTable = [...this.incomesItems];
            this.incomesItems = newTable.filter((elem) => elem.id != listItemId);
            listItem.remove();

            this.increaseIncome();

        } else if (listClass == "expenses_list") {
            const newTable = [...this.expensesItems];
            this.expensesItems = newTable.filter((elem) => elem.id != listItemId);
            listItem.remove();
            this.increaseExpenses();
        }

        this.countSumm();
    }



    countSumm() {
        const sumOfBudget = this.incomesSumm - this.expensesSumm;
        if (sumOfBudget > 0) {
            this.budgetSummInfo.innerHTML = `<p >You can still spend ${sumOfBudget.toFixed(2)} PLN more<p>`;
            this.budgetSummInfo.className = '';
            this.budgetSummInfo.classList.add('sumPositive');
        } else if (sumOfBudget == 0) {
            this.budgetSummInfo.innerHTML = `<p>The balance is zero!<p>`;
            this.budgetSummInfo.className = '';
        } else if (sumOfBudget < 0) {
            this.budgetSummInfo.innerHTML = `<p>The balance is negative. You are ${Math.abs(sumOfBudget).toFixed(2)} PLN under the budget!<p>`;
            this.budgetSummInfo.className = '';
            this.budgetSummInfo.classList.add('sumNegative');
        }
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
                            <p class="income_item_value" data-item-value>${Number(inValue).toFixed(2)} PLN</p>
                            <div class="income_item_buttons">
                                <button class="income_edit"><i class="fas fa-edit" data-edit-button></i></button>
                                <button class="income_delete"><i
                                        class="fas fa-trash-alt" data-delete-button></i></button>
                            </div>
                        </li>`
    }

    createExpenseItem(exDesc, exValue, id) {
        return `<li class="expense_item" id="${id}">
                            <p class="expense_item_desc" data-item-desc>${exDesc}</p>
                            <p class="expense_item_value" data-item-value>${Number(exValue).toFixed(2)} PLN</p>
                            <div class="expense_item_buttons">
                                <button class="expense_edit"><i class="fas fa-edit" data-edit-button></i></button>
                                <button class="expense_delete"><i
                                        class="fas fa-trash-alt" data-delete-button></i></button>
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

    increaseExpenses() {
        this.expensesSumm = 0;
        this.expensesItems.forEach(({ exValue }) => {

            this.expensesSumm += parseFloat(exValue, 10);
        })
        this.expensesSummInfo.innerHTML = `${(this.expensesSumm).toFixed(2)} zł`;
    }

    addIncomeItem() {
        const newIncome = this.getIncomeInput();
        if (!newIncome) {
            this.showAlertIn();
        } else if (this.editItem) {
            this.updateIncomeItem();
            return;
        } else {
            this.incomesList.insertAdjacentHTML('beforeend', this.createIncomeItem(newIncome.inDesc, newIncome.inValue, newIncome.id));
            this.incomesItems.push(newIncome);
            this.numberOfIncomes++; //make id's for exit and delete function

            this.increaseIncome();
            this.countSumm();

            this.incomeAddDesc.value = '';
            this.incomeAddVal.value = '';
        }
    }

    addExpenseItem() {
        const newExpense = this.getExpenseInput();
        if (!newExpense) {
            this.showAlertEx();
        } else if (this.editItem) {
            this.updateExpenseItem();
            return;
        }
        else {
            this.expensesList.insertAdjacentHTML('beforeend', this.createExpenseItem(newExpense.exDesc, newExpense.exValue, newExpense.id));
            this.expensesItems.push(newExpense);
            this.numberOfExpenses++;

            this.increaseExpenses();
            this.countSumm();

            this.expenseAddDesc.value = '';
            this.expenseAddVal.value = '';
        }
    }
}



const app = new Budget();
app.init();