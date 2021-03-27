# BudgetAppProject
Main purpose of the project was to create simple budget app which will be track incomes and expenses in the household. The currency is defined as PLN and cannot be changed.

App project is based on the main **class Budget**.

## Adding elements to the list
To add incomes and expenses to the lists I've created **addExpenseItem()** and **addIncomeItem()** functions. 
Based on condition if element is already on the list or it is new one, element is update (**updateExpenseItem()** or **updateIncomeItem()** is used ) or create new element on the list, where each new item get unique id. To inject new element to the list I used **insertAdjacentHTML method**.

Each new element is defined by following functions:
* **createIncomeItem()** - contains structure for list element for Incomes list
* **createExpenseItem()** - contains structure for list element for Expenses list

Values for input are caught by functions **getIncomeInput()** and **getExpenseInput()**.

## Edit list elements
To caught if elements need to be edit or delete it is used EventListener which checks dataset of clicked button.

* **editListItem()** - to edit item, here it is checked if button parent Element contain expenses or incomes class and based on this proper income or expense will be edited


## Delete list elements
To caught if elements need to be edit or delete it is used EventListener which checks dataset of clicked button.
* **deleteListItem()** - to delete item, here it is checked if button parent Element contain expenses or incomes class and based on this proper income or expense will be delete. This function create new income or expense list based on filtering elements by id.

## Counting sums
* for increase incomes values I've created **increaseIncome()** function which iterate trough each array element and count its values
* for increase expenses values I've created **increaseExpenses()** function which iterate trough each array element and count its values
* the value of the entire budget is count by function **countSumm()**.


## Alerts
When values for inputs are inproper following alerts appears.
To make it I've created separete functions for both expenses and incomes tables. By default alert is hide.
* **showAlertIn()** - remove class with hide feature for Incomes
* **showAlertEx()** - remove class with hide feature for Expenses
* **hideAlertIn()** - add class with hide feature for Incomes
* **hideAlertEx()** - for Expenses

If the sum of incomes is greater than the expenses, the application displays the message: "You can still spend XXX PLN more". If the difference is 0, the message is “The balance is zero!”. If there are more expenses than incomes, the message is following “The balance is negative. You are XXX PLN under the budget!".