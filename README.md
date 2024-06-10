# BillTipAndSplitCalculator

A calculator for a restaurant bill and tip, with a split option.  
Made with Angular.  
This is an improved and refactored version of [this](https://github.com/Artour64/bill-calculator-angular) repository.  
Additional time taken on improvements and refactoring: 41 minutes.  
I liked how components allowed me to make logical partitions in the code and to reuse it.  
My two highlights would be the number-input and result components.  
That being said, I may have been a bit overeager to make partitions, perhaps extracting the input form, tip-input, results-all, and results-per-person components was a bit much.  
The most important change is that all the business logic was moved into an Angular service.  
Separating the business logic from the UI is a major improvement on it's own.  
The service also simplified the code significantly and made the code much more readable and easy to follow, it also reduced the amount of imports.  
I should have done it this way from the start.  
Miscellaneous improvements include some formatting for readability, removing of unnecessary code, and other minor improvements like rounding decimals to two places.  
Testing was done by using the product and checking that the displayed results are the same as expected.  
Perhaps some unit tests could be made for the service with the business logic, more specifically that the properties are calculated correctly.  
For comparison, [here](https://github.com/Artour64/bill-calculator-vanilla) is the same project using only HTML and JavaScript, no libraries or frameworks.
