/*  
    ****************
    JAVASCRIPT NOTES
    ****************

    JavaScript's main purpose as a scripting language is to take HTML and make it dynamic.

    DOMAINS: 

    1 - JavaScript Operators, Methods, and Keywords
    2 - Variables, Data Types, and Functions
    3 - Decisions and Loops
    4 - Document Object Model
    5 - HTML Forms

__________________________________________________________________________________________________________
__________________________________________________________________________________________________________

    ***************************
    DOMAIN 1 - JAVASCRIPT NOTES
    ***************************

    >>> JavaScript Operators, Methods, and Keywords <<<

  *JavaScript is a very case-sensitive language. 
   Its functions require the exact correct casing when they are used.

  *A best practice is to use camel case with anything with a name (eg.: calculateTotal).
   Named objects in JavaScript cannot use spaces. It is possible to use underscores to separate words, 
   but the best practice is to use camel case.

  !!! COMPOUND ASSIGNMENT OPERATORS !!!

      >>> Addition: +=
          Subtraction: -=
          Multiplication: *=
          Division: /=

          -Instead of "x = x + 5" use x += 5

____________________________________________________________________________________________________
____________________________________________________________________________________________________
  

  !!! CONSTANTS !!!

      In JavaScript, VARIABLES are containers that store data (text, number, other types...) 
      that we plan on using within our code.
      One type of variable is a CONSTANT.
      Whereas variables can change throughout their use in code, constants cannot be changed.
      This is helpful when you want to set a rate for something and use it throughout an entire webpage/website.

____________________________________________________________________________________________________
____________________________________________________________________________________________________


  !!! RESERVED KEYWORDS !!!

      Do not use a reserved keyword as a name for a variable or an object!

        Example:

        - document
        - try
        - catch
        - debugger
        - console
        - log
        - finally
        - window
        - screen

        (and others.)
     
____________________________________________________________________________________________________
____________________________________________________________________________________________________


  !!! DEBUGGER KEYWORD !!!

    Add "debugger;" after a line or piece of code to find errors in code.
    The debugger keyword will stop the JavaScript in progress, allow to open a debugging tool, 
    and then run some tests.

____________________________________________________________________________________________________
____________________________________________________________________________________________________


  !!! TO FIX !!!

    .toFix command helps to get a value to fix to two decimal points.

    >>>            (parseFloat(document.getElementById('subtotal').innerHTML)* .07).toFixed(2);

____________________________________________________________________________________________________
____________________________________________________________________________________________________

  


  !!! SET BREAKPOINTS !!!

    Breakpoints are also used to test and debug the code. 
    This allows to see code as it happens one step at a time.

    (Visual Studio might ignore breakpoints in client-side scripting languages,
    but it is possible to add breakpoints on the browser's debugging tool as well)

____________________________________________________________________________________________________
____________________________________________________________________________________________________


  !!! CONSOLE.LOG !!!

    As a debugging tool, the console allows you to enter requests to get information about your 
    script, or if you just want to test something in general in JS.
    Similar to a command prompt, you can press the up arrow to bring back the previous
    statement.

____________________________________________________________________________________________________
____________________________________________________________________________________________________


  !!! WHEN TO USE !!!
  (JavaScript can be formed and stored)

    Directly on a webpage (inline / internal script)
    Through and external file that is referenced by one or more pages within a website.

    Like style sheets, scripts are better managed when they are EXTERNAL, as multiple pages can 
    reference the script and, if is there a change to be made, it is only made in one place.
    
    Scripts that only apply to one page can use inline script, which is good for testing.
    It is also safe to keep it external so browsers tools won't show the scripts and only expose the 
    HTML code. 

    

____________________________________________________________________________________________________
____________________________________________________________________________________________________


!!! INLINE & EXTERNAL SCRIPTS !!!
(Use both scripts)

  Whatever comes first in the code (HTML) will have the precedence.
  Either the external link or a piece of code. 
  If a variable has the value of x in the external script and in the bottom of the code the value is 10, 
  the value of 5 will be taken into consideration because the external link will be at the top of the page. 

  *Whatever is defined first, WINS!*

  ANYTHING USED ON AN EXTERNAL STYLE SHEET SHOULD NOT BE REPEATED INLINE!

____________________________________________________________________________________________________
____________________________________________________________________________________________________


!!! TRY AND CATCH !!!

  A debugger is needed to attempt to find errors since they don't pop up in a web browser when they occur.
  A try-catch block can execute code and capture errors.

  Try-catch is a block in which code (usually a block of code that is wrapped by the try-catch block) 
  tries to run and, if there is an error, the catch part controls what happens next. 

      Example:
      try {
        block of code
      }
      catch (error)
      {
        alert("Error: " + error.description);
      }

____________________________________________________________________________________________________
____________________________________________________________________________________________________


!!! FINALLY !!!

    Another part that can be added to a try-catch block is a finally block. 
    A finally block is always executed. It runs no matter which part, try or catch, runs.

    Example:
      try {
        block of code
      }
      catch (error)
      {
        alert("Error: " + error.description);
      }
      finally {
        document.getElementById('salesTax').innerHTML += '<br /> Sales tax details are provided on your receipt.'
      }

____________________________________________________________________________________________________
____________________________________________________________________________________________________


!!! MANAGE STATE !!!

      - An extra window could be open or closed;
      - A browser size could dictate the style sheet used;
      - Objects can be set to be visible or invisible

      This idea of managing states is part of the BOM (Browser Object Model).
      (Objects that belong directly to the web browser, not a document within the browser)

      Example:

        // calling the functions on the buttons
        <p><input type="button" class="buttons" value="Checkout" onclick="checkoutWindow();"> </p>
        <p><input type="button" class="buttons" value="Close Checkout" onclick="closeCheckOut();"/> </p>

        ...

        <script>

        ...

        function checkoutWindow() {
          checkWin = window.open("checkout.html", "", "width=300, heigh="300");
        }
        function closeCheckOut() {
          checkWin.close();
        }
        </script>

____________________________________________________________________________________________________
____________________________________________________________________________________________________


!!! DISPLAY DIALOGS !!!

    As part of the Browser Object Model, JavaScript has three main types of dialog boxes:

    - Alerts (message display with an OK button)
    - Prompts (ask for user inputs)
    - Confirm boxes (have ok and cancel buttons, and can direct the next action based on what a user chooses)

    Example:

      <body onload="welcome();"> // calling the welcome function

      ...

      <script>

      ... 

      // welcome function
      function welcome() {
        yourName = prompt("Enter your name");
        if (confirm(Is your name correct?) == true)
          {
            alert("Welcome + yourName");
          }
      }

      </script>

      </body>    

____________________________________________________________________________________________________
____________________________________________________________________________________________________


!!! DETERMINE SCREEN SIZE !!!

    BOM determining screen size as a page loads.

    Example:
      
        // taking screen object with the width property to be displayed on an alert.
        <body onload="alert('This screen is ' + screen.width + ' x ' + screen.height)";>
        
        </body>

    Exceptional handling allows to work through smoothly.

____________________________________________________________________________________________________
____________________________________________________________________________________________________


      *** EXAM TIPS ***

      - Study the symbols

      - Know the symbols for basic math and for the modulus

      - Know those compound assignment operators

      - Know the best practices for using comments, indentations, naming conventions, and debugging tools

      - Know what the console.log command is used for

      - When using inline and external scripts
        (whatever is listed first in a file will take precedence, all other things being equal)

      - Know how try-catch blocks work and the role of a finally statement

      - Know the concept of managing states

      - Make sure you understand the differences among the alert, confirm, and prompt display dialogs

      - Know how screen size is retrieved
      

__________________________________________________________________________________________________________
__________________________________________________________________________________________________________
__________________________________________________________________________________________________________
__________________________________________________________________________________________________________
__________________________________________________________________________________________________________
__________________________________________________________________________________________________________
__________________________________________________________________________________________________________
__________________________________________________________________________________________________________
__________________________________________________________________________________________________________
__________________________________________________________________________________________________________
__________________________________________________________________________________________________________
__________________________________________________________________________________________________________

__________________________________________________________________________________________________________
__________________________________________________________________________________________________________

    ***************************
    DOMAIN 2 - JAVASCRIPT NOTES
    ***************************
    
    >>> Variables, Data Types, and Functions <<< 

    - VARIABLES store information we can use later 
      (name or quantity)

    - DATA TYPES define these variables
      (string for a name or number for quantity)

    - FUNCTIONS allow us to take inputs and output answers
      (calculations are usually built inside functions)

----------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------

                                    --------------------
                                    PRIMITIVE DATA TYPES
                                    --------------------  

----------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------

      !!! VARIABLE !!! 

      -> A container used to hold information that can be used later in code.

            >>> discount = 10;

        "discount" is the container, "10" is the information.

            >>> orderTotal -= discount;

        This is saying take the order total and subtract the discount, which would be 10 in this case.

      -> With variables, there are naming conventions.

        - Variable names CAN have uppercase letters, lowercase letters, numbers, and some symbols 
        but not all symbols are available. Symbols like underscores and dollar signs are allowed (_, $).

        - Variable names CANNOT start with a number or have spaces.

        - The names should describe what they are being used for, but not to excess.
          The best case is to use camel casing.

      ** TYPE OF VARIABLES **

        >>>  JAVASCRIPT is a loosely typed language, 
             meaning that you don't have to declare what type of variable you are using when you declare one. 
             JavaScript will intuitively figure out what constitutes a number, text or other variable type.

        -> Number Variables:
          - Store as floating point decimals. 
            (JavaScript does not make this distinction when a variable is declared).    

____________________________________________________________________________________________________
____________________________________________________________________________________________________


      !!! BOOLEAN !!!
      
      -> Boolean variables store two possibilities: True or False.

      ============
      CODE EXAMPLE
      ============

      discount = 10;
      // The following line indicates that the check out window does not exist when the file opens.
      checkOutExists = false;

      function addFive(qty) {
        var newQty = parseInt(document.getElementById(qty).value);
        newQty += 5;
        document.getElementById(qty).value = newQty;        
      }
      function openCheckOut(){
        // Once the window is built, it does exists, so below is indicating that by changing "checkOutExists = true."
        if (checkOutExists == false) {
          checkWin = window.open("checkout.html", "", "width=300, height=300");
        }
        checkOutExists == true;
      }
      function closeCheckOut(){
        //If the window does exist, we want this to close.
        if (checkOutExists == true) {
          checkWin.close();
        }

        //Then the checkOutExists is reset to false.
        checkOutExists = false;

      }

      ============
      ============

____________________________________________________________________________________________________
____________________________________________________________________________________________________

      !!! STRING !!!

      -> The most common type of variable.
         It can store text, numbers, symbols and other characters.

         Since data types are not explicity declared in JavaScript,variables will be stored as strings
         unless they are numbers, Boolean values, nulls, or undefined.
      
      ============
      CODE EXAMPLE
      ============

      // To have a message that can appear on more than one page in website indicating that the website is under construction.

      incMsg = "This site is under construction and will be fully functional soon.";
     
      // The code below can be added to a HTML file inside the script tag

      document.write(incMsg);      


____________________________________________________________________________________________________
____________________________________________________________________________________________________

      !!! NULL !!!

      -> In storing data, sometimes a variable will be defined to be empty. By definition, that field is null.
         NULL means EMPTY, not zero!

      ============
      CODE EXAMPLE
      ============

      // To have a cart field on a website that instead of showing zero items when the user press clear, it will be just empty:

      <button id="manqtyzero" onclick="javascript: document.getElementById('manqty').value = null;"></button> 


____________________________________________________________________________________________________
____________________________________________________________________________________________________

      !!! UNDEFINED !!!



____________________________________________________________________________________________________
____________________________________________________________________________________________________

      !!! TYPE OF OPERATOR !!!



____________________________________________________________________________________________________
____________________________________________________________________________________________________









*/