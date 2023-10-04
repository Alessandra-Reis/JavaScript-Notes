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

         A variable that has been declared, but is either set to null or, at one time was a different value and is now null

      ============
      CODE EXAMPLE
      ============

      // To have a cart field on a website that instead of showing zero items when the user press clear, it will be just empty:

      <button id="manqtyzero" onclick="javascript: document.getElementById('manqty').value = null;"></button> 


____________________________________________________________________________________________________
____________________________________________________________________________________________________

      !!! UNDEFINED !!!

      -> An Undefined variable is one that has been declared, but has never had a value. In other words, 
         it does not have a number, Boolean or string value, and it is not considered null.
         Variables which are declared specifically as variables but have never had anything assigned to them.

      ============
      CODE EXAMPLE
      ============

      // var is being used to ensure that JS knows these are variables and not objects.
      
      var subtotal;
      var grandtotal; 

      // Now these variables are declared but undefined, since they have never had a value assigned to them. 

____________________________________________________________________________________________________
____________________________________________________________________________________________________

      !!! 'TypeOf' OPERATOR !!!

      -> The typeof operator reveals which data type is assigned to a variable. This is a valuable tool in JS
         especially since we do not assign data types to variables when declaring them.

        If a variable is not acting the way it should, check the data type is a way to make sure if that is not the problem.

      ============
      CODE EXAMPLE
      ============

      On the browser >> open developer tools >> open the console >> write: "typeof(subtotal)" and press enter. 
      Then the output will show which type of variable the "subtotal" is.

____________________________________________________________________________________________________
____________________________________________________________________________________________________

      !!! TYPE CHECKING FUNCTIONS !!!

      -> JavaScript is a loosely-typed language, there are not that many types.
         JS makes no distinction between an integer and floating number.
         Any numbered variable is a floating decimal in JavaScript. 
         However, we can use type checking functions to see if a specific number is an integer or not.

      ============
      CODE EXAMPLE
      ============

      If we type in the console (through the web developer tools) the command: 
      
      >> Number.isInteger(variableName)

      And then press enter, it will print true or false as a result.
____________________________________________________________________________________________________
____________________________________________________________________________________________________

      !!! USE STRICT !!!

      -> One way to make sure we are declaring variables as explicit variables is to use the use strict command.
         To force any variable in this function to be explicitly declared.

      ============
      CODE EXAMPLE
      ============

      function getPracticeHours() {
        "use strict";
        try
        {
          //to make the "use strict" work it is important to add "var" before the variable.
          //in this way you tell JavaScript exactly what is a variable and what is an object, that means a faster performance.
          var hoursEntered = parseInt(document.getElementById('practiceHours').value);
          document.getElementById('practiceWeeks').innerHTML = 
                'It will take you ' +20 / hoursEntered + 'weeks to finish the course.'
                + hoursEntered + ' hours per week.';
        }
        catch(error)
        {
          alert("Error: " + error.description);
        }
      }

____________________________________________________________________________________________________
____________________________________________________________________________________________________

      !!! CONVERT BETWEEN DATA TYPES !!!

      -> 
          What is straightforward for variables, it is not so straightforward for objects, such as input fields.
          In many cases, a data type has to be explicity converted before it can be used.

      ============
      CODE EXAMPLE
      ============

     
         <div class="order_buttons">
            <p> <input type="button" class="buttons" value="Update Cart" 
                  onclick="javascript: document.getElementById('subtotal').innerHTML                      
                        = parseFloat(document.getElementById('mantotal').innerHTML)
                        + parseFloat(document.getElementById('drumtotal').innerHTML)
                        + parseFloat(document.getElementById('tromtotal').innerHTML);
                        document.getElementById('salesTax').innerHTML = parseFloat(document.getElementById('subtotal).innerHTML * .07).toFixed(2);
                        document.getElementById('grandTotal').innerHTML
                            = parseFloat(document.getElementById('subtotal').innerHTML)
                            + parseFloat(document.getElementById('salesTax').innerHTML)
                            - parseFloat(document.getElementById('discount').innerHTML)).toFixed(2);
                      
                      <p><input type="button" class="buttons" value="Checkout" </p>
            </p>
         </div>

          // In the piece of code above if we look for the typeof the 'mantotal' the data type will be identified as an OBJECT.
          // In this case we can't add objects, only numbers.

          // parseFloat converts this to a float decimal, parseInt would convert any object to a whole number

____________________________________________________________________________________________________
____________________________________________________________________________________________________

      !!! FORMAT NUMBERS !!!

      -> Even though JS doesn't have a bunch of different data types for numbers. Sometimes, though, 
         We need to control the amount of decimal places past a number. 
         Sometimes we need numbers to be whole numbers.

         Below there are two examples of formatting numbers. 

      ============
      CODE EXAMPLE
      ============

      (EXAMPLE 1 - toFixed - Line 613)

         <div class="order_buttons">
            <p>
                <input type="button" class="buttons" value="Update Cart" 
                    onclick="javascript: document.getElementById('subtotal').innerHTML                      
                        = parseFloat(document.getElementById('mantotal').innerHTML)
                        + parseFloat(document.getElementById('drumtotal').innerHTML)
                        + parseFloat(document.getElementById('tromtotal').innerHTML);
                        document.getElementById('salesTax').innerHTML = parseFloat(document.getElementById('subtotal).innerHTML * .07).toFixed(2);
                        document.getElementById('grandTotal').innerHTML
                            = parseFloat(document.getElementById('subtotal').innerHTML)
                            + parseFloat(document.getElementById('salesTax').innerHTML)
                            - parseFloat(document.getElementById('discount').innerHTML)).toFixed(2);
                      
                      <p><input type="button" class="buttons" value="Checkout" </p>
            </p>
         </div>

      (EXAMPLE 2 - Convert a number to currency)

      ... 

                            = '$ ' + parseFloat(document.getElementById('subtotal').innerHTML)
                            + parseFloat(document.getElementById('salesTax').innerHTML)
                            - parseFloat(document.getElementById('discount').innerHTML)).toFixed(2);
      
      ...

      // JS doesn't have a built-in currency format, so the easiest way to accomplish this is to just add a dollar sign in front of a number.

____________________________________________________________________________________________________
____________________________________________________________________________________________________

      !!! STRING OPERATIONS !!!

      -> JS has many different ways in which strings can be manipulated.
         Eg.: 
            - Retrieve the length of a string
            - Concatente strings

         toFixed -> Returns a number with a fixed number of decimals.
         toPrecision -> Returns a number with a fixed number of digits.

      ============
      CODE EXAMPLE
      ============

      function getPracticeHours() {
        "use strict";
        try{
          var hoursEntered = parseInt (document.getElementById('practiceHours').value);
              var msg1 = 'It will take you'
              var msg2 = (20 / hoursEntered).toPrecision(3);
              var msg3 = ' weeks to finish this program.'
              var msg4 = 'Can you do '
              var msg5 = hoursEntered
              var msg6 = ' per week for '
              var msg7 = 'weeks? Or is this just a "dream?"'

              document.getElementById('practiceWeeks').innerHTML = 
                  msg1.concat(msg2, msg3) + '<br />' + msg4.concat 
                  (msg5, msg6, msg2, msg7);

                  //The var is needed because this code is set to "use strict", which means variable types must be declared.
                  var currentDate = new Date();

              //document.getElementById('practiceWeeks').innerHTML += 
              '<br />' + currentDate.toLocaleString(); 
        }

        catch(error)
        {

        }

      }
      
____________________________________________________________________________________________________
____________________________________________________________________________________________________

      !!! NESTING QUOTES !!!

      -> When it comes to using single or double, it usually does not matter which ones you use. 

         - It matters though when you are nesting quotes. You have to go with opposites in this case. 
           If you start with single quotes, use double quotes inside.



      ============
      CODE EXAMPLE
      ============

              // to use dream in double quotes, is needed to wrap single quotes around it.
              var msg7 = 'weeks? Or is this just a "dream?"'
____________________________________________________________________________________________________
____________________________________________________________________________________________________

      !!! INITIALIZATION !!!

      -> Initialization is the act of storing a value in a variable.
         Declaration is the act of create new variable.

         - If you know what a variable should store when you declare it, by all means, initialize it then.
           If not, you can initialize it when needed.

      ============
      CODE EXAMPLE
      ============

      //This variable is declared and initialized.
      discount = 10;
      // subtotal and grandtotal are declared but not initialized
      var subtotal;
      var grandtotal;
      checkOutExists = false;

____________________________________________________________________________________________________
____________________________________________________________________________________________________

----------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------

                                    ----------------------
                                    DECLARE AND USE ARRAYS
                                    ----------------------  

----------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------


      !!! BUILD AND DEFINE AN ARRAY !!!

      -> An array is defined as an object with multiple containers, holding multiple values.
         
         - Think of a variable as a single box storing a single item.
         - Think of an array as having a box but with multiple sections, with each section storing one or more items.
              
      ============
      CODE EXAMPLE
      ============

      SINGLE-DIMENSIONAL ARRAY:

      <button class="buttons" onclick="updateList();"> Update list </button>

      <script>
          tuningList =["Tuning Lever", "Tuning Fork"];
          function updateList(){
            document.getElementById('tuningList').innerHTML = tuningList;
            document.getElementById('tuningList').innerHTML += "<br /> A tuning lever and tuning fork is a must-have for any tuning kit";
          }
      </script>
  
____________________________________________________________________________________________________
____________________________________________________________________________________________________

      !!! ITERATION AND LENGTH !!!

      -> To show one item at a time in the form of a list, like a bulleted list, we need two things:
      
          - A way to iterate through the array;
          - And a way to determine the arrays length.

          

      ============
      CODE EXAMPLE
      ============

      - To use a loop to iterate through the array list and show each item as a bulleted item:

       <script>
          tuningList =["Tuning Lever", "Tuning Fork"];
          function updateList(){
            document.getElementById('tuningList').innerHTML = "<ul>";
            for (var i = 0; i < tuningList.length; i++) {
              document.getElementById('tuningList').innerHTML += "<li>" + tuningList[i] + "</li>"
            }
            document.getElementById('tuningList').innerHTML = "</ul>";
            document.getElementById('tuningList').innerHTML += "<br /> A tuning lever and tuning fork is a must-have for any tuning kit";
          }
      </script>
____________________________________________________________________________________________________
____________________________________________________________________________________________________

       !!! INITIALIZATION !!!    
       
       -> The concept of initialization works for arrays in the same way as it does for variables. 
         Arrays that are coded but not filled in, are considered declared.
         When the array is filled with values, it becomes initialized. In other words, these are initialized when they start to hold data.
              
      ============
      CODE EXAMPLE
      ============     
      
      // this is a initialized array because it has values inside of the square brackets.
      tuningList =["Tuning Lever", "Tuning Fork"];

      // this array is declared but not initialized as it has no values in it.
      fieldTotals = [];

____________________________________________________________________________________________________
____________________________________________________________________________________________________

      !!! SORTING AND SEARCHING !!!

      -> To the beginning of the function that updates and display the array, it is needed to add a statement to sort the array:
        with the nameOfTheArray.sort()

        -> To search through the console:

              >> tuningList.indexOf("Tuning Lever") > -1;

           It will print as 'true', meaning that this Tuning Lever phrase is somewhere inside of this array 


      ============
      CODE EXAMPLE
      ============    

      <script>
          tuningList =["Tuning Lever", "Tuning Fork"];
          fieldTotals = [];
          function updateList(){
            // the list will be sorted alphabetically
            tuningList.sort();
            document.getElementById('tuningList').innerHTML = "<ul>";
            for (var i = 0; i < tuningList.length; i++) {
              document.getElementById('tuningList').innerHTML += "<li>" + tuningList[i] + "</li>"
            }
            document.getElementById('tuningList').innerHTML = "</ul>";
            document.getElementById('tuningList').innerHTML += "<br /> A tuning lever and tuning fork is a must-have for any tuning kit";
          }
      </script>

____________________________________________________________________________________________________
____________________________________________________________________________________________________

      !!! PUSH AND POP !!!

      -> Push adds an item to an array while pop removes the last item from the array.
      
      ============
      CODE EXAMPLE
      ============

      <article class="threecol1">
          <p><input type="checkbox" title="Electronic tuner" id="electronicTuner"> Electronic tuner </p>          
          <p><input type="checkbox" title="Wedge mute" id="wedgeMute" onclick="tuningList.push('Wedge mute')"; > Wedge mute </p>
      </article>

      <article class="threecol1">
          <p><input type="checkbox" title="Papps mute" id="pappsMute"> Papps mute </p>
          <p><input type="checkbox" title="Felt strips" id="feltStrips" > Felt strips </p>
      </article>

      <article>
          <p><button class="buttons" onclick="updateList();"> Update list </button></p>
      </article>

      ============
      ************
      ============

      - To pop off the last item, use the console and type:

        >>  tuningList.pop();

        It will actually do two things: it will remove the last item, and it will tell us what was removed.
        To make sure it is off the array, type >> tuningList; << in the console and press enter and it will show the updated list.

____________________________________________________________________________________________________
____________________________________________________________________________________________________

      !!! SHIFT AND UNSHIFT !!!

      -> Shift and unshift are the other two array methods.

          - SHIFT is the opposite of POP,
            While pop removes the last item from an array, shift removes the first item from an array.

          - UNSHIFT is the opposite of PUSH,
            While push adds an item to end of an array, unshift adds an item at the top of an array.


      ============
      CODE EXAMPLE
      ============

      // To add the item at the top of the list:
      <p><input type="checkbox" title="Wedge mute" id="wedgeMute" onclick="tuningList.unshift('Wedge mute')"; > Wedge mute </p>
      ___________________________________

      To remove the first item type in the console:

      tuningList.shift();

      Then you can see that the first item has been removed.
      ___________________________________

      *** Note that if you are using sort to order alphabetically, the item might not go to the top when using unshift,
          so you might want to comment this piece of text out >>>  tuningList.sort();  <<<
      

____________________________________________________________________________________________________
____________________________________________________________________________________________________

      !!! ACCESS AN ELEMENT !!!

      -> To access an element in an array, you can refer to it by its index number. 
         The first item in an array has an index number of 0.

         - Index numbers are indicated in square brackets when they are being referenced.
           
         The coding example is more of a way to test for something than to apply an action to it in real life.

      ============
      CODE EXAMPLE
      ============

      <script>
          tuningList =["Tuning Lever", "Tuning Fork"];
          fieldTotals = [];
          function updateList(){
            // tuningList.sort();
            document.getElementById('tuningList').innerHTML = "<ul>";
            for (var i = 0; i < tuningList.length; i++) {
              document.getElementById('tuningList').innerHTML += "<li>" + tuningList[i] + "</li>"
            }
            document.getElementById('tuningList').innerHTML = "</ul>";
            document.getElementById('tuningList').innerHTML += "<br /> A tuning lever and tuning fork is a must-have for any tuning kit";

            // the alert below is just to show the name of the first item in the array          
            alert("The first item in this array is " + tuningList[0]);

          }
      </script>

____________________________________________________________________________________________________
____________________________________________________________________________________________________

      !!! UNDERSTAND MULTI-DIMENSIONAL ARRAYS !!!

      -> All the arrays shown until here are single-dimensional arrays.
         Meaning that there is a single object with one group of values within the object.

            - Consider this array:

            >> tuningList = ["Tuning fork", "Tuning lever"]

            What if, for each item in this tuning list, we wanted two possible colors: Red and Black.
            So that the final array looks like this:

            ["Tuning fork","Red"]
            ["Tuning fork","Black"]
            ["Tuning lever","Red"]
            ["Tuning lever","Black"]

            There are several ways to accomplish this, but the most common method involves one or more FOR loops to loop values into an array. 

      ============
      CODE EXAMPLE
      ============

      function multiArray() {
        var a1 = new Array(2);
        for (i = 0; i <2; i++) {
          a1[i] = new Array(2);
          for (j = 0; j < 2; j++) {
            a1[i][j] = '[' + i + ', ' + j + ']';
          }
        }
        a1[0][0] = '[Tuning Fork, Red]'
        document.getElementById('tuningList').innerHTML = a1;
      }

____________________________________________________________________________________________________
____________________________________________________________________________________________________


----------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------

                                    ----------------------------------
                                    COMPLETE AND DEBUG CODE ON OBJECTS
                                    ----------------------------------  

----------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------


      !!! PROPERTIES !!!

      ->    JavaScript uses objects in code. 
            Objects can be manipulated. 
            HTML tags, arrays, and variables are examples of objects.
            Windows and screen sizes are example of browser objects
            These objects have properties, which are characteristics that define them.
            It can help to think of objects as items, things, or even nouns.
            Properties can be thought of as characteristics or adjectives.

            Sometimes, properties need to be retrieved, and other times they need to be changed.

      ============
      CODE EXAMPLE
      ============


      <div class="itemtotal">

            //  *** The paragraph tag (p) is the object, and the subtotal is contained in the id property
            <p id="subtotal">&nbsp;</p>
            <p id="salesTax">&nbsp;</p>
            <p id="discount">10.00;</p>
            <p>______________</p>
            <h2 style="margin-top: 0" id="grandtotal">total</h2>
      </div>

      ____________________________________________
     
         <div class="order_buttons">
            <p> <input type="button" class="buttons" value="Update Cart" 

                  // *** document is an object. *** 'subtotal' is a property of an HTML object. 
                  onclick="javascript: document.getElementById('subtotal').innerHTML 

                        // *** innerHTML is a property of the object. This property is being changed, because it is being set to be equal to the addition of three other properties                                                                               | This property is being changed,                                        
                        = parseFloat(document.getElementById('mantotal').innerHTML)
                        + parseFloat(document.getElementById('drumtotal').innerHTML)
                        + parseFloat(document.getElementById('tromtotal').innerHTML);
                        document.getElementById('salesTax').innerHTML = parseFloat(document.getElementById('subtotal).innerHTML * .07).toFixed(2);
                        document.getElementById('grandTotal').innerHTML
                            = parseFloat(document.getElementById('subtotal').innerHTML)
                            + parseFloat(document.getElementById('salesTax').innerHTML)
                            - parseFloat(document.getElementById('discount').innerHTML)).toFixed(2);
                      
                      <p><input type="button" class="buttons" value="Checkout" </p>
            </p>
         </div>  
           
____________________________________________________________________________________________________
____________________________________________________________________________________________________

      !!! METHODS !!!

      ->    Methods take action on objects and their properties
            A good comparison analogy is this:
            adjective is to property as verb is to method. 
            All methods have parentheses at the end (sometimes empty), in case we need to specify what is being taken action on.
      
      ============
      CODE EXAMPLE
      ============

            // toFixed is a method called to fix the result to two decimal points. It is taking action on the result of a formula.
            - parseFloat(document.getElementById('discount').innerHTML)).toFixed(2);


            // The action being taken in the array with the method unshift is to add Wedge mute to the beginning of the array. 
            <p><input type="checkbox" title="Wedge mute" id="wedgeMute" onclick="tuningList.unshift('Wedge mute')"; > Wedge mute </p>

____________________________________________________________________________________________________
____________________________________________________________________________________________________

      !!! INSTANTIATION !!!

      ->    A fancy way of saying creation, as in the creation of a new template for an object, otherwise known as a class.
            An example of this would be for a shirt. A template for a shirt could include its size, color, and sleeve length.
            From there, you could create multiple shirt objects, each with a different size, color, and sleeve length.
            Having classes define objects helps ensure consistency among objects. 

      ============
      CODE EXAMPLE
      ============

      // *JS FILE
      const salesTaxRate = .075;
      incMsg = "This site is under construction and will be fully functional soon.";
      function product(item, size, price) {
            this.item = item;
            this.size = size;
            this.price = price;
      }

      // *HTML FILE

      <script>
            var mandolin = new product ('Mandolin', '36"', 379.99);
            var drum = new product ('Drum', '32"', 129.99)
      </script>

      // *CONSOLE / BROWSER
      // Type one of the objects and one of the properties to get some response:

      mandolin.size

____________________________________________________________________________________________________
____________________________________________________________________________________________________

      !!! DATE AND TIME OBJECT !!!

      -> The example below will build a message that will use todays date, a future date, and display parts of
         those dates to show when new lessons start. 

     
      ============
      CODE EXAMPLE
      ============

      lessonStartDate = new Date('October 2, 2017 6:00 PM');
      today = new Date();
      function getPracticeHours() {
            try
            {
                  var hoursEntered = parseInt(document.getElementById('practiceHours').value);
                  var msg1 = 'It will take you '
                  var msg2 = 20 / hoursEntered
                  var msg3 = ' weeks to finish this program.'
                  var msg4 = 'Can you do '
                  var msg5 = hoursEntered
                  var msg6 = ' per week for '
                  var msg7 = ' weeks? Or is this just a "dream?"' 

                  document.getElementById('practiceWeeks').innerHTML = 
                        //put concat here
                        msg1.concat(msg2, msg3) + '<br />' + msg4.concat(msg5, msg6, msg2, msg7);                        
            }     
            catch(error)
      }


      // ** BROWSER'S CONSOLE

      lessonStartDate

      today

____________________________________________________________________________________________________
____________________________________________________________________________________________________

      !!! RETRIEVING DATE PARTS !!!

      -> A key to work with dates is to be able to retrieve parts of a date at any time.

      JavaScript returns most date parts as numbers, which can make trying to display a month name tricky 
      at first, but not hard.
      
      ============
      CODE EXAMPLE
      ============

      
      lessonStartDate = new Date('October 2, 2017 6:00 PM');
      today = new Date();
      function getPracticeHours() {
            try
            {
                  var hoursEntered = parseInt(document.getElementById('practiceHours').value);
                  var msg1 = 'It will take you '
                  var msg2 = 20 / hoursEntered
                  var msg3 = ' weeks to finish this program.'
                  var msg4 = 'Can you do '
                  var msg5 = hoursEntered
                  var msg6 = ' per week for '
                  var msg7 = ' weeks? Or is this just a "dream?"' 

                  document.getElementById('practiceWeeks').innerHTML = 
                        //put concat here
                        msg1.concat(msg2, msg3) + '<br />' + msg4.concat(msg5, msg6, msg2, msg7);                        
                        document.getElementById('practiceDetails').innerHTML = "New classes start on " + lessonStartDate.getMonth() + " " 
                        + lessonStartDate.getDate() + "."
            }     
            catch(error)
            {
                  alert("Error: " + error.description);
            }
      }

      // JavaScript uses numbers 0 through 11 as month numbers. The example above would print the month of October as 9 then.
      _______________________________________

      // The best way to convert the number to the actual month is to build and then refer to an array of months:

      
      lessonStartDate = new Date('October 2, 2017 6:00 PM');
      today = new Date();
      var monthName = ["January", "February, "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      function getPracticeHours() {
            try
            {
                  var hoursEntered = parseInt(document.getElementById('practiceHours').value);
                  var msg1 = 'It will take you '
                  var msg2 = 20 / hoursEntered
                  var msg3 = ' weeks to finish this program.'
                  var msg4 = 'Can you do '
                  var msg5 = hoursEntered
                  var msg6 = ' per week for '
                  var msg7 = ' weeks? Or is this just a "dream?"' 

                  document.getElementById('practiceWeeks').innerHTML = 
                        //put concat here
                        msg1.concat(msg2, msg3) + '<br />' + msg4.concat(msg5, msg6, msg2, msg7);           
                                                                                                      //    wrap the monthName array around the getMonth method of the lessons start date        
                        document.getElementById('practiceDetails').innerHTML = "New classes start on " + monthName[lessonStartDate.getMonth()] + " " 
                        + lessonStartDate.getDate() + "."
            }     
            catch(error)
            {
                  alert("Error: " + error.description);
            }
      }


____________________________________________________________________________________________________
____________________________________________________________________________________________________

      !!! LOCALIZATION !!!

      - Date localization uses the toLocaleDateString method to get a date to display in a localized format.
        
      ============
      CODE EXAMPLE
      ============

      document.getElementById('practiceWeeks').innerHTML = 
                        //put concat here
                        msg1.concat(msg2, msg3) + '<br />' + msg4.concat(msg5, msg6, msg2, msg7);           
                                                                                                      //    wrap the monthName array around the getMonth method of the lessons start date        
                        document.getElementById('practiceDetails').innerHTML = "New classes start on " 
                        // + monthName[lessonStartDate.getMonth()] + " " 

                        // gb for Great Britain  to get the dd/mm format for the date. If the method is with empty brackets, then the format will be mm/dd
                        + lessonStartDate.toLocaleDateString(en-gb) ".";
                        // + lessonStartDate.getDate() + "."
____________________________________________________________________________________________________
____________________________________________________________________________________________________

      !!! ADD AND SUBTRACT DATES !!!

      -> Adding and subtracting date:

      - To enhance the message that displays when a user enters practice hours for the week in two ways.
            - First display a date that is eight weeks out (specifically 56 days from the start date).
            - Then show the number of days between todays date and the start date for the lessons.
     
      ============
      CODE EXAMPLE
      ============

      <script language="JavaScript">
            lessonStartDate = new Date('October 2, 2017 6:00 PM');
            
            // here was added a variable called lessonEndDate. Initially, it is set, as a date, to the lessonStartDate value
            var lessonEndDate = new Date(lessonStartDate);
            
            // here is used the setDate method on this lessonEndDate to set this to be the current lessonEndDate + 56 days.
            lessonEndDate.setDate(lessonEndDate.getDate() + 56);
            
            today = new Date();
            
            // It was added a variable called daysUntilStart and it was set to be an integer of the following: the lessonStartDate minus today
            var daysUntilStart = parseInt((lessonStartDate - today) / 86400000)  // number of milliseconds.
            // When we subtract two dates in JS, the difference appears in milliseconds. Needs to take any date subtraction and divide that out by the number of milliseconds to get the number of days.

            var monthName = ["January", "February, "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            function getPracticeHours(){
                  try
                  {
                        var hoursEntered = parseInt(document.getElementById('practiceHours').value);
                        var msg1 = 'It will take you '
                        var msg2 = 20 / hoursEntered
                        var msg3 = ' weeks to finish this program.'
                        var msg4 = 'Can you do '
                        var msg5 = hoursEntered
                        var msg6 = ' per week for '
                        var msg7 = ' weeks? Or is this just a "dream?"' 

                        document.getElementById('practiceWeeks').innerHTML = 
                              //put concat here
                              msg1.concat(msg2, msg3) + '<br />' + msg4.concat(msg5, msg6, msg2, msg7);                                                                                                                 
                              document.getElementById('practiceDetails').innerHTML = 
                              "New classes start on " 
                              + monthName[lessonStartDate.getMonth()] + " " 

                              // below a coma was added and then the number of days until the "start date" 
                              + lessonStartDate.getDate() + ", "
                              // here was added the number of days until the start, as part of the message.
                              + daysUntilStart + " days from now." + 
                              // and then it was added Lessons end on, and then it was taken the lessonEndDate and converted it to the localeDateString.
                              "<br /> Lessons end on " + lessonEndDate.toLocaleDateString();
                            //+ lessonStartDate.toLocaleDateString() + "."
                  }    
                  catch(error)
                  {
                        alert("Error: " + error.description);
                  }
            }
      </script>
   

____________________________________________________________________________________________________
____________________________________________________________________________________________________

----------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------

                                    -----------------------
                                    BUILT-IN MATH FUNCTIONS
                                    -----------------------  

----------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------


      !!! RANDOM !!!

      ->    One possibility with JS is that it can be used as a tool to generate some sort of online quiz or game.
            In this case you may want a random number generator to add the element of surprise to the quiz or game.
            
      ============
      CODE EXAMPLE
      ============

      <head>
            ...
      </head>

      //First when the body loads, the function below runs.
      <body onload="loadJukebox();">
            
      
            <script>

                  function loadJukeBox() {

                        // the variable videoNumber is set to be the equal to the floor value of a random number *2
                        // the Math.random function will always return a number between 0 and 1. 
                        // Then, that number, for this instance, is multiplied by 2, because there are two possible videos
                        var videoNumber = Math.floor((Math.random() * 2));

                        // The floor function lowers the number of its base integer. 
                        // For example: if the random generator spit out a number like .7, and then that is multiplied by 2, 
                        // which equals 1.4, the floor function will reduce that number to the integer of 1.
                        // In this case the videoNumber can be only 0 or 1.

                        //if it is 0 will play the Blues.mp4, and if it is 1, it will play Happy.mp4 
                        if (videoNumber == 0) {

                              // in JS, a backslash "\" is an escape character, used when is needed an extra quotation mark or line break or similar character.
                              // but to get an actual backslash here, the escape character is needed. Otherwise, the source will not have a backslash in between the folder and the file.
                              document.getElementById('videoJukeBox').src = "videos\\Blues.mp4";
                        }
                        else {
                              document.getElementById('videoJukebox').src = "videos\\Happy.mp4";
                        }
                  }

            </script>

      </body>

____________________________________________________________________________________________________
____________________________________________________________________________________________________

      !!! ROUND !!!

      ->    The round number method in JS rounds a number to the nearest whole number. 
            For example, 3.49 is rounded down to 3, while 3.5 and higher would be rounded up to 4.
                   
      ============
      CODE EXAMPLE
      ============
    
      var hoursEntered = parseInt(document.getElementById('practiceHours').value);
            var msg1 = 'It will take you '
            // the Maths.round was applied to the calculation below.
            var msg2 = Maths.round(20 / hoursEntered)
            var msg3 = ' weeks to finish this program.'
            var msg4 = 'Can you do '
            var msg5 = hoursEntered
            var msg6 = ' per week for '
            var msg7 = ' weeks? Or is this just a "dream?"'

____________________________________________________________________________________________________
____________________________________________________________________________________________________

      !!! ABS !!!



      
      ============
      CODE EXAMPLE
      ============





____________________________________________________________________________________________________
____________________________________________________________________________________________________


      !!! FLOOR AND CEILING !!!



      
      ============
      CODE EXAMPLE
      ============




____________________________________________________________________________________________________
____________________________________________________________________________________________________

      !!! MIN AND MAX !!!




      
      ============
      CODE EXAMPLE
      ============




____________________________________________________________________________________________________
____________________________________________________________________________________________________

      !!! POW !!!



      
      ============
      CODE EXAMPLE
      ============




____________________________________________________________________________________________________
____________________________________________________________________________________________________

      !!! SQRT !!!




      
      ============
      CODE EXAMPLE
      ============



____________________________________________________________________________________________________
____________________________________________________________________________________________________


----------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------

                                    ----------------------------
                                    PARAMETERS AND RETURN VALUES
                                    ----------------------------  

----------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------


      !!! REUSABLE CODE !!!





      
      ============
      CODE EXAMPLE
      ============




____________________________________________________________________________________________________
____________________________________________________________________________________________________

      !!! LOCAL VS. GLOBAL SCOPE !!!




      
      ============
      CODE EXAMPLE
      ============



____________________________________________________________________________________________________
____________________________________________________________________________________________________

      !!! REDEFINING VARIABLES !!!



      
      ============
      CODE EXAMPLE
      ============



____________________________________________________________________________________________________
____________________________________________________________________________________________________

      !!! PASSING PARAMETERS !!!


      
      ============
      CODE EXAMPLE
      ============



____________________________________________________________________________________________________
____________________________________________________________________________________________________

      !!! VALUE VS. REFERENCE !!!






      
      ============
      CODE EXAMPLE
      ============


      

____________________________________________________________________________________________________
____________________________________________________________________________________________________

      !!! RETURN VALUES 1 !!!




      
      ============
      CODE EXAMPLE
      ============




____________________________________________________________________________________________________
____________________________________________________________________________________________________

      !!! RETURN VALUES 2 !!!





      
      ============
      CODE EXAMPLE
      ============




____________________________________________________________________________________________________
____________________________________________________________________________________________________

      !!! DOMAIN 2 EXAM TIPS !!!





      
      ============
      CODE EXAMPLE
      ============




____________________________________________________________________________________________________
____________________________________________________________________________________________________

      !!!  !!!

____________________________________________________________________________________________________
____________________________________________________________________________________________________

      !!!  !!!

____________________________________________________________________________________________________
____________________________________________________________________________________________________

      !!!  !!!


____________________________________________________________________________________________________
____________________________________________________________________________________________________

      !!!  !!!


____________________________________________________________________________________________________
____________________________________________________________________________________________________

      !!!  !!!


____________________________________________________________________________________________________
____________________________________________________________________________________________________


*/