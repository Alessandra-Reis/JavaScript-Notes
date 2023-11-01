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

      <button id="manqtyzero" onclick="javascript: document.getElementById('manqty').value = null;"> Clear </button> 


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

      ->    In Maths, the absolute vale of a number is the number itself, regardless of whether it is positive or negative.
            Sometimes, it is needed a number to show its absolute value. The Math.abs method in JS will make a number represent its absolute value.


      
      ============
      CODE EXAMPLE
      ============

      // The Math.abs method wraps around the hoursEntered variable. It will take what the user entered, parse it as an integer, and then get its absolute value. 
      var hoursEntered = Math.abs(parseInt(document.getElementById('practiceHours').value))
            var msg1 = 'It will take you '
            var msg2 = Math.round(20 / hoursEntered)
            var msg3 = ' weeks to finish this program.'
            var msg4 = 'Can you do '
            var msg5 = hoursEntered
            var msg6 = ' per week for '
            var msg7 = ' weeks? Or is this just a "dream?"'



____________________________________________________________________________________________________
____________________________________________________________________________________________________


      !!! FLOOR AND CEILING !!!

      ->    Whereas the round method rounds up or down a number based on hat is after a decimal point, 
            you may want to trim a number to its lower or higher value, no matter what is after the decimal point.
            
            To move numbers to their lower whole number (2.3 or 2.7 to 2), it is used the floor method.
            Floor method is used to change numbers to the nearest lower whole number.
            
            To move a number up to its next whole number, (2.3 or 2.7 to 3), it is used the ceiling method.
            Ceiling method is used to change numbers to the nearest higher whole number.
                
      ============
      CODE EXAMPLE
      ============

            var hoursEntered = Math.abs(parseInt(document.getElementById('practiceHours').value))
            var msg1 = 'It will take you '
            // Math.ceil will move the number up. Math.floor will move the number down.
            var msg2 = Math.ceil(20 / hoursEntered)
            var msg3 = ' weeks to finish this program.'
            var msg4 = 'Can you do '
            var msg5 = hoursEntered
            var msg6 = ' per week for '
            var msg7 = ' weeks? Or is this just a "dream?"'

____________________________________________________________________________________________________
____________________________________________________________________________________________________

      !!! MIN AND MAX !!!

      -> Just like the case with a program like Microsoft Excel, min and max functions in JavaScript retrieve minimum and maximum numbers from a range of numbers.
            
      ============
      CODE EXAMPLE
      ============

      <script>
      
            var manPrice = parseFloat(document.getElementById('manPrice').innerHTML);
            var drumPrice = parseFloat(document.getElementById('drumPrice').innerHTML);
            var tromprice = parseFloat(document.getElementById('tromPrice').innerHTML);

            function showMinMax() {
                  // minPrice is a variable that uses the Math.min method to get the minimum among the prices of the instruments for sale, which are stored in variables above.
                  // The actual information comes from three named elements in the HTML file: manPrice, drumPrice, and tromPrice                  
                  var minPrice = Math.min(manPrice, drumPrice, tromPrice);

                  // maxPrice is present, and in it, the Math.max method obtains the highest value from these three item prices.
                  var maxPrice = Math.max(manPrice, drumPrice, tromPrice);

                  // Then, a message is written to an HTML element called minmax, showing the lowest price and then what it is, and the highest price and what that is.
                  document.getElementById('minmax').innerHTML = 'The lowest price is ' + minPrice
                        + ' and the highest price is '+ maxPrice;
            }

      </script>

____________________________________________________________________________________________________
____________________________________________________________________________________________________

      !!! POW !!!

      -> The Math.pow method in JS takes a number and raises it to the power specified.
         For example, Math.pow(2,3) takes the number 2 and raises it to the third power, which is 2 x 2 x 2 = 8.
               
      ============
      CODE EXAMPLE
      ============

            <p id="sqftneeded"></p>
            <p id="sqftremaining"></p>
            <p>Need to know some square footage calculations?
            Enter a side length and click square footage to get the total area.
            Or, enter an area and click side to get a side length.</p>
            <p><input id="toMeasure" />

                  // When the button below is clicked, it will run the function called getSquareFootage.
                  <button class="buttons" value="square footage" id="squareFootage" onclick="getSquareFootage();"> Square Footage </button>

                  <button class="buttons" value="side" id="squareFootage" onclick="getSide();"> Side </button>
            </p>
            <p id="toMeasureResult"></p>

            ...

            <script>

                  // the function below takes what the users entered, and using the Math.pow method, raises it to the power of 2, which will then get the square footage of the area.
                  function getSquareFootage() {
                        document.getElementById('toMeasureResult').innerHTML = 
                              // this message is then placed in the HTML for the toMeasureResult element, which a paragraph element showed above.
                              'Square Feet: ' + Math.pow(parseInt(document.getElementById('toMeasure').value), 2);
                  }
                  function getSide() {
                        document.getElementById('toMeasureResult').innerHTML =
                              'Side length: ' + Math.sqrt(parseInt(document.getElementById('toMeasure').value));
                  }
            </script>

____________________________________________________________________________________________________
____________________________________________________________________________________________________

      !!! SQRT !!!

      -> The Math.sqrt method takes a number and calculates its square root.
      The next example is a practical use of it as it will use this square root to take an area someone enters and calculate the length of a side in the room.
            
      ============
      CODE EXAMPLE
      ============
      
      <p><input id="toMeasure" />                
            <button class="buttons" value="square footage" id="squareFootage" onclick="getSquareFootage();"> Square Footage </button>

            // The side button, when clicked, runs the getSide function.
            <button class="buttons" value="side" id="squareFootage" onclick="getSide();"> Side </button>
      </p>
      <p id="toMeasureResult"></p>

      ...
      
      // This takes what was entered in the input field, parses it as an integer, and then uses the Math.sqrt method to calculate the square root of the number.
      function getSide() {
                        document.getElementById('toMeasureResult').innerHTML =
                              // This result is then placed in the HTML of a paragraph element with the ID of toMeasureResult.
                              'Side length: ' + Math.sqrt(parseInt(document.getElementById('toMeasure').value));
                  }



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

      The biggest reason to use functions, is to create reusable code.
           
      ============
      CODE EXAMPLE
      ============

      // The code below will get the existing quantity of a field, store it, increment it, and then return that increment value to the field.
      function addOne(fieldQty) {
            var qty = document.getElementById(fieldQty).value;
            qty++;
            document.getElementById(fieldQty).value = qty;
      }

      function addFive(qty) {
            var newQty += parseInt(document.getElementById(qty).value);
            newQty += 5;
            document.getElementById(qty).value = newQty;
      }

      function checkoutWindow() {
            checkWin = window.open("checkout.html", "", "width=300, height=300");
      }
      function closeCheckout() {
            checkWin.close();
      }

      ______

      HTML:

      <button id="manqtyadd" onclick="addOne('manqty');"

____________________________________________________________________________________________________
____________________________________________________________________________________________________

      !!! LOCAL VS. GLOBAL SCOPE !!!

      ->    One important concept that is needed to understand about variables is variable scope.
            Scope defines the depth to where a variable can be used in a file.
            
            Two factors determine scope: where the variable is declared, and wether it is being explicitly declared, meaning whether the var keyword is being used.

            - Variables declared outside of functions or without the var keyword are considered global.
                  Otherwise it is considered local.

            The best way to test variable scope is to use the console. You can type the variable name and press enter, 
            if the console shows as "undefined", the variable is local and can't be accessed at any time.
            
            Global variables are available any time, local variables only within their functions. 
      
      ============
      CODE EXAMPLE
      ============


____________________________________________________________________________________________________
____________________________________________________________________________________________________

      !!! REDEFINING VARIABLES !!!

      -> The concept of redefining variables in JS is simply the idea of changing a variable after it has been defined, 
      that is, after something has been assigned to it.

      Most variables can be redefined.
      Constants cannot be redefined. Attempting to do so will cause an error.
      
      ============
      CODE EXAMPLE
      ============

      var lessonEndDate = new Date(lessonStartDate);
      // below lessonEndDate is being redefined
      lessonEndDate.setDate(lessonEndDate.getDate() + 56);


____________________________________________________________________________________________________
____________________________________________________________________________________________________

      !!! PASSING PARAMETERS !!!

      -> Some functions use parameters, which basically define the what as the object a function is affecting.

      - The idea of passing a parameter through is what allows the function to be used in multiple places.
      
      ============
      CODE EXAMPLE
      ============

      // It calls the addFive function and passes through the manqty element as a parameter.
      <button id="manqtyfive" onclick="addFive(manqty);">Add Five</button>    // ** This manqty... **

      ...


      //
      function addFive(qty) {                                                 // ** ... is going to pass through this qty variable ...
            var newQty += parseInt(document.getElementById(qty).value);       // ** ... be parsed ad an integer, ...
            newQty += 5;                                                      // ** ... have five added to it, ...
            document.getElementById(qty).value = newQty;                      // ** ... and then the element will be assigned the new value (5 more that it was before)
      }

      ________________

      // Now a function that does not use parameters:

      // This function does not have a parameter, there's nothing in the parentheses. The reason, there is no existing object that is affected here.
      function checkoutWindow() {
            checkWin = window.open("checkout.html", "", "width=300, height=300");  // This function creates a new object, a new window, so no parameter is needed.
      }

      ________________

      Bottom line is:

      Is the function going to affect an existing object?
      If so, you probably need a parameter. If not, you probably do not need a parameter.
      
____________________________________________________________________________________________________
____________________________________________________________________________________________________

      !!! VALUE VS. REFERENCE !!!

      Primitive data types: numbers, Boolean, string, null, and undefined.

      Objects: mainly arrays.

      When making one variable or object equal another, what happens when the original is changed?

      It is needed to be careful with objects (especially arrays), because sometimes, setting one array to be equal to another one, 
      and then changing that array, will change both arrays. 
      Because often arrays share a memory space. For objects it is better to set each object to have its own values.
      
      ============
      CODE EXAMPLE
      ============     
 
____________________________________________________________________________________________________
____________________________________________________________________________________________________

      !!! RETURN VALUES 1 !!!

      -> When a function does a calculation, sometimes the result is used right away in an HTML element, or a form, or other calculation.
      Sometimes the function result is saved for a later use. In that case the return keyword is used.
      
      ============
      CODE EXAMPLE
      ============

      function getPracticeHours(){
            try
            {
                  var hoursEntered = Math.abs(parseInt(document.getElementById('practiceHours').value))
                  var msg1 = 'It will take you '
                  var msg2 = Math.ceil(20 / hoursEntered)
                  var msg3 = ' weeks to finish this program.'
                  var msg4 = 'Can you do '
                  var msg5 = hoursEntered
                  var msg6 = ' per week for '
                  var msg7 = ' weeks? Or is this just a "dream?"' 

                  document.getElementById('practiceWeeks').innerHTML = 
                        //put concat here
                        msg1.concat(msg2, msg3) + '<br />' + msg4.concat(msg5, msg6, msg2, msg7);                                                                                                                 
                  document.getElementById('practiceDetails').innerHTML = "New classes start on " 
                        + monthName[lessonStartDate.getMonth()] + " " + lessonStartDate.getDate() + ", "
                        + daysUntilStart + " days from now." +                         
                        "<br /> Lessons end on " + lessonEndDate.toLocaleDateString();
                        
                  // this is to get the month name, for the current month, for today to display in an alert.
                  return alert(monthName[today.getMonth()])

                  }    
                  catch(error)
                  {
                        alert("Error: " + error.description);
                  }
            }


____________________________________________________________________________________________________
____________________________________________________________________________________________________
____________________________________________________________________________________________________
____________________________________________________________________________________________________

      !!! DOMAIN 2 EXAM TIPS !!!

            >>>    What is the difference between a declared variable or array and an initialized variable or array?
                  - A declared array becomes initialized when it starts to hold values. Otherwise, it is just declared, same for variables.

            >>>   Where does the unshift method add an item to in an array?
                  - Unshift is the opposite of push, which adds an item to the end of an array.

            >>>   What bit of code makes a method a method?
                  - Parentheses at the end of each method.

            >>>   What type of variable cannot be redefined?
                  - A constant

            *** Remember that JavaScript is a loosely typed language.
            
            *** Know the main primitive data types: numbers, Boolean, string, null, and undefined. >>> Objects: mainly arrays.

            *** Be able to use typeof operator to return a data type.

            *** Know how to use conversion methods such as parseInt and parseFloat to turn text into numbers.

            *** Know when to nest quotes, which is basically a need when you have something requiring a quotation marks inside of something that already has quotation marks.

            *** Know how to build  arrays and how to manipulate them using methods: PUSH, POP, SHIFT, AND UNSHIFT.

            *** Be able to look at a piece of JavaScript code and determine what is the object, what are properties, and what are methods.

            *** Know how to generate a date variable for a fixed date or today's date.

            *** Be able to break that date up into parts and know how to add a number to a date and how to subtract two dates.

            *** Know how to use the built-in Math functions, such as random, round, abs, floor, ceiling, min, max, por, ans sqrt (square root).

            *** Know that the main purpose of a function is to be able to reuse code.

            *** Make sure you can tell a local variable from a global one.

            *** Know the role of parameters in functions.
      
____________________________________________________________________________________________________
____________________________________________________________________________________________________

      !!! FROM E-COLLEGE QUIZ !!!

      ***
      
      The indexOf() method returns the index of the first occurrence of a specified text in a string.

      The lastIndexOf() method returns the index of the last occurrence of a specified text in a string.

      The length property returns the length of a string.

      The search() method searches a string for a specified value and returns the index of where the value is found.

      ***

      shift  -  This method removes the first element from an array.

      unshift  -  This method adds an element to the beginning of an array.

      push  -  This method adds an element to the end of an array.

      pop  -  This method removes the last element from an array.

      ***

      The toFixed() method returns a string with the specified number of decimal places. 
      
      The toPrecision() method returns a string with the specified length.
      
      ***

      The sort() method sorts an array alphabetically.

      This works well for strings, as 'a' will come before 'b' and so on. 

      This doesn't work well for numbers though as 11 is deemed to come before 2 alphabetically.

      It can be fixed with the help of a compare function, but that is beyond the scope of this exam. Just remember that the sort() method only sorts elements alphabetically.
     
      ***

      Primitive data types such as number, string, boolean, null and undefined are passed by value.

      Pass by value can be seen as a snapshot of the value being used elsewhere in the application.

      Pass by reference can be seen as a snapshot of the memory location being used elsewhere in the application.

      ***

      The sort() method sorts an array alphabetically.

      This works well for strings, as 'a' will come before 'b' and so on. 

      This doesn't work well for numbers though as 11 is deemed to come before 2 alphabetically.

      It can be fixed with the help of a compare function, but that is beyond the scope of this exam. Just remember that the sort() method only sorts elements alphabetically.

      ***

      The toString() method converts a date object to a string. 

      The toString() method is implicitly called on a date object in HTML and doesn't need to be called explicitly.

      console.log(timestamp); produces exactly the same output as console.log(timestamp.toString());.

      ***

      Math.random() returns a number between 0 and 0.999999999999999

      Math.floor(randomNumber) returns the value of randomNumber, rounded down to its nearest integer.

      This will result in the value of 0 

      ***
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
    DOMAIN 3 - JAVASCRIPT NOTES
    ***************************
    
    >>> DECISION AND LOOPS <<< 

      - Evaluate expressions that use logical and comparison operators 
      !=, <, >, <=, >=, !, ==, &&, || 

      - Complete and debug decision statements 
      Single alternative (if), dual alternative (if else), multiple alternative (switch), nested if 

      - Complete and debug loops 
      for, for in, while, do while, break, continue

----------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------

                                    --------------------------------
                                    LOGICAL AND COMPARISON OPERATORS
                                    --------------------------------  

----------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------

      !!! EVALUATION EXPRESSIONS !!!

           -  ASSIGNMENT (the equal sign) and a group of operators which performed basic math calculations:

                  =, +, -, *, /

            - EVALUATION EXPRESSIONS, which compare two parts, usually an object and a value, and return a true or false value:

            ==
            !=
            <>
            <=
            !
            &&
            ||

                  >> Notice that most of these evaluation expressions have two characters.
                  This is a good mental note for separating evaluation expressions from ones that perform operations.


      ============
      CODE EXAMPLE
      ============     
 
____________________________________________________________________________________________________
____________________________________________________________________________________________________

      !!! EQUALS !!!

      ==

      -> The double EQUAL sign is an evaluation expression that means: "Is it equal to that?"      
      -  Usually, this will be used with an if statement.
            
      ============
      CODE EXAMPLE
      ============  
      
      // On the line below, the single equal sign literally means set the variable of checkOutExists to be equal to false.
      checkOutExists = false;

      // The line below with the double equal sign is asking the question: Is the variable checkOutExists equal to false?
      if(checkOutExists == false)
 
____________________________________________________________________________________________________
____________________________________________________________________________________________________
      
      !!! NO EQUALS !!!

      !=

      -> This symbol represents that something is not equal to a value, or asking if it is not equal to a value.
            
      ============
      CODE EXAMPLE
      ============  
      
      // The code below is literally asking 'is the variable checkOutExists not equal to true?'
      if (checkOutExists != true)
 
____________________________________________________________________________________________________
____________________________________________________________________________________________________

      !!! GREATER THAN AND LESS THAN !!!
                       
      - The greater > and less < than symbols.
            
      ============
      CODE EXAMPLE
      ============     
 
            // it checks to see if one entered fewer than three hours a week for practice. If they did, an extra message will appear.
            if (hoursEntered < 3) {
                  document.getElementById('practiceDetails').innerHTML += 
                  "<br /> You really should practice at least three hours a week to best retain what you learn"
            }

            // it checks to see if one entered greater than eight hours a week for practice. If they did, another message will appear.
            if (hoursEntered > 8) {
                  document.getElementById('practiceDetails').innerHTML += 
                  "<br /> More than 8 hours a week for a beginner may be too many hours."
            }

____________________________________________________________________________________________________
____________________________________________________________________________________________________

      !!! LESS THAN OR EQUAL TO !!!

      - Less than or equal to symbol: <=
            
      ============
      CODE EXAMPLE
      ============     
 
      // it checks to see if one entered fewer than or equal to three hours a week for practice. If they did, an extra message will appear.
      if (hoursEntered <= 3) {
                  document.getElementById('practiceDetails').innerHTML += 
                  "<br /> Three hours is just enough practice a week. Anything less and you may not retain skills."
            }
        

____________________________________________________________________________________________________
____________________________________________________________________________________________________

      !!! GREATER THAN OR EQUAL TO !!!

      - Greater than or equal to symbol: =>
            
      ============
      CODE EXAMPLE
      ============     
 
             
      // it checks to see if one entered greater than or equal to eight hours a week for practice. If they did, another message will appear.
      if (hoursEntered => 8) {
            document.getElementById('practiceDetails').innerHTML += 
            "<br /> Eight or more hours a week for a beginner may be too many hours."
      }
____________________________________________________________________________________________________
____________________________________________________________________________________________________

      !!! NOT !!!

      -> The exclamation point is the "NOT" and it can be used in other places besides before and after an equal sign.
      -  It is specially useful for evaluating Boolean situations.
            
      ============
      CODE EXAMPLE
      ============   
      
      // It will check to see if the variable called checkOutExists is not true. Is a shorten version for: (variableName != true)
      if(!checkOutExists)

____________________________________________________________________________________________________
____________________________________________________________________________________________________

      !!! AND !!!

      &&       

      -> To look at evaluating multiple expressions at once.
            - One of two symbols are needed in this situation:
              an 'and' symbol &&
              or an 'or' symbol ||

                  
      ============
      CODE EXAMPLE
      ============   
      
      // The line below is evaluating two expressions: that the wedgeMute bos is checked AND  that pappsMute is checked. If so, a message will appear.
      if (document.getElementById('wedgeMute').checked && document.getElementById('pappsMute').checked){
            document.getElementById('tuningList').innerHTML = "You Selected both mutes.";
      }
      else {
            document.getElementById('tuningList').innerHTML = " ";
      }

      // Both conditions should be true for the AND evaluator to return true.
 
____________________________________________________________________________________________________
____________________________________________________________________________________________________

!!! OR !!!

      ||       

      -> When evaluating two expressions, sometimes is only needed one of the expressions to be true 
            in order to take further action.

            - For this it is needed an OR operator: || (two vertical pipes), to evaluate the two expressions instead of an AND operator. 
                  
      ============
      CODE EXAMPLE
      ============   
      
      // The line below is evaluating two expressions: that the wedgeMute OR that pappsMute is checked. If so, a message will appear.
      if (document.getElementById('wedgeMute').checked || document.getElementById('pappsMute').checked){
            document.getElementById('tuningList').innerHTML = "You Selected one or more mutes.";
      }
      else {
            document.getElementById('tuningList').innerHTML = " ";
      }

      // One or both of those conditions should be true for the OR evaluator to return true.
 
____________________________________________________________________________________________________
____________________________________________________________________________________________________

----------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------

                                    -------------------
                                    DECISION STATEMENTS
                                    -------------------  

----------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------

      !!! IF !!!

      -> It checks a condition to see if it is true or if it is false and then take action based on the result.

      CONDITION: If I hear a song I like
      ACTION: I will keep listening

      ** Pay special attention to the syntax

      The CONDITION for an IF statement is always inside of parentheses.
      The ACTION takes places inside of curly brackets.
            
      ============
      CODE EXAMPLE
      ============   
            
      function openCheckOut() {
            // The CONDITION is asking if checkOutExists is not equal to true, or if doesn't exists.
            if(!checkOutExists) 
            // The action is to create a new window, and changing this variable.
            {
                  checkWin = window.open("checkout.html", "", "width=300, height=300");
                  // the checkOutExists will be set to be equal to true now.
                  checkOutExists = true;
            }
      }
       
____________________________________________________________________________________________________
____________________________________________________________________________________________________

      !!! ELSE IF !!!

      -> When using the if keyword to see if a situation is true, you may want to check for another situation in case the first situation is false.

      CONDITION 1 (IF): If it is sunny outside,
      ACTION 1: I will go ride my bike; 
      (or ELSE IF) CONDITION 2: If it is not snowing, 
      ACTION 2: I will go run errands.
      (or anything ELSE) ACTION 3: I will stay home.  

            -That case it will check the first condition if it is true, if it is false, it checks the second condition. 
             If neither condition is true, it goes with the else condition.
            
      ============
      CODE EXAMPLE
      ============  

      
      // This is going to indicate that both mutes have been checked.
      if (document.getElementById('wedgeMute').checked && document.getElementById('pappsMute').checked){
            document.getElementById('tuningList').innerHTML = "You selected both or more mutes.";
      }

      // This is going to indicate if one or more mutes have been checked.
      else if (document.getElementById('wedgeMute').checked || document.getElementById('pappsMute').checked){
            document.getElementById('tuningList').innerHTML = "You selected one or more mutes.";
      }

      // This is not going to indicate anything.
      else {
            document.getElementById('tuningList').innerHTML = " ";
      }

____________________________________________________________________________________________________
____________________________________________________________________________________________________
      
      !!! SWITCH !!!

      -> When checking a condition, you may have multiple possibilities, each requiring a different action.
            For these situations, you would not necessarily want a bunch of separate if statements or if, else if, else if ....

            In this case, we should use the switch keyword in JavaScript.
            
            Unlike an IF statement, a SWITCH statement will not stop checking a condition after a first match.
            So we have to tell it to stop and we do that with a break statement.
            
      ============
      CODE EXAMPLE
      ============  
      
      <p id="specialDiscount">&nbsp;</p>

      ...
      
      function showSpecialDiscount() {
            var today = new Date();
            var msg = document.getElementById('specialDiscount');
            
            // Here is a switch statement with the date of today's date in parentheses. This value is going to be checked against multiple conditions.
            switch (today.getDate()) {

                  // Each condition is represented with a case statement. Below for each case/day there's a different message.
                  case 1:
                  msg.innerHTML = 'First day of the month. 10% off of all orders today when you call us and mention this!';

                  // After each case a brake statement is needed to tell JavaScript to exit the switch statement if we get a match. 
                  break;

                  case 7:
                  msg.innerHTML = 'Today is the lucky 7th. 7% off of all orders today when you call us and mention this!';
                  break;

                  case 15:
                  msg.innerHTML = "It's the hump day of the month. 15% off of all orders today when you call us and mention this.!";
                  break;

                  // The default condition means that if no cases are true, do this.
                  default:
                  msg.innerHTML = 'Keep checking back for specials.'
            }
      } 

____________________________________________________________________________________________________
____________________________________________________________________________________________________

      !!! NESTED IF !!!

      -> This is an if inside of an if statement.

            
      ============
      CODE EXAMPLE
      ============     
 
      if (document.getElementById('wedgeMute').checked && document.getElementById('pappsMute').checked){
            document.getElementById('tuningList').innerHTML = "You selected both or more mutes.";
      }

      else if (document.getElementById('wedgeMute').checked || document.getElementById('pappsMute').checked){
            //The message will now be different for each condition
            if(document.getElementById('wedgeMute').checked) {
                  document.getElementById('tuningList').innerHTML = "You selected the wedge mute."
            }
            else{
                  document.getElementById('tuningList').innerHTML = "You selected the papps mute."
            }
      }

      else {
            document.getElementById('tuningList').innerHTML = " ";
      }




____________________________________________________________________________________________________
____________________________________________________________________________________________________

----------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------

                                                -----
                                                LOOPS
                                                ----- 

----------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------

      !!! FOR !!!

      -> Loops run the code either a set number of times or a conditional number of times.
            
      -> The FOR LOOP runs a set number of times, either set by us or set by a value, 
            such as the number of an element on a page or the length of an array. 
         
            - In the parentheses for a FOR LOOP we have three arguments: 
              . a starting point, 
              . the point in witch the loop will stop, 
              . and the number to increase or decrease each time we go through the loop.

      ============
      CODE EXAMPLE
      ============     
 
      <script>
     tuningList = ["Tuning Lever", "Tuning Fork"];
     fieldTotals = [];
     function updateList() {      
         document.getElementById('tuningList').innerHTML = "<ul>";

         // The purpose for this particular loop is to list all of the items in an array. 
         // Arrays are zero-based, meaning the first element has a designation of 0.
         // Thus the loop below starts at 0, this number is stored in a variable (i). 
         // The second part, which determines how long this loop will run, is the length of the array being iterated through.
         // The third part indicates that each time we loop through this code, one will be added to the counter through the increment symbol: ++.
         for (var i = 0; i < tuningList.length; i++) {

            // A list item for each array item, as used in the counter, will be created
             document.getElementById('tuningList').innerHTML +=
                 "<li>" + tuningList[i] + "</li>"
         }

         document.getElementById('tuningList').innerHTML += "</ul>";
         document.getElementById('tuningList').innerHTML +=
             "<br /> A tuning lever and tuning fork is a must-have for any tuning kit."
     }

     function toggleSelection(item) {
         if (document.getElementById(item).checked)
         {
             tuningList.push(document.getElementById(item).title);
         }
         else
         {
             tuningList.splice(tuningList.indexOf(document.getElementById(item).title));
         }
     }

 </script>


____________________________________________________________________________________________________
____________________________________________________________________________________________________

      !!! WHILE !!!

      -> The WHILE LOOP is defined as this:
            While this condition is true, run this code.

            With a shuttle bus example:
            With the bus going through an airport loop, with the condition being while there are people to pick up, run the loop
            
      ============
      CODE EXAMPLE
      ============   
            
      function lessonSchedule() {
            var lessonStartDate = new Date('October 2, 2017 06:00:00 PM');
            var lessonEndDate = new Date(lessonStartDate);
            var detailsSchedule = document.getElementById('lessonSchedule')
            // if we change 56 to 21, it will then show 3 dates (3 weeks) on the while loop
            lessonEndDate.setDate(lessonEndDate.getDate() + 56);

            detailsSchedule.innerHTML += "<br /> First lesson: "
            + lessonStartDate.toLocaleDateString() + "<br />Subsequent lessons: ";
                
            // The while condition below will run through and displays a new date, seven days after the previous date,
            // as long as the lessonStartDate is less than the lessonEndDate.  

            // The while condition, which is in parentheses, looks to run the code while lessonStartDate is less than the lessonEndDate.              
            while (lessonStartDate < lessonEndDate) {
                  // the code will add seven days to the lessonStartDate, and then displays that date on a separate line.
                  lessonStartDate.setDate(lessonStartDate.getDate() + 7);
                  detailsSchedule.innerHTML += "<br />" + lessonStartDate.toLocaleDateString();
            }
                    
      } 

____________________________________________________________________________________________________
____________________________________________________________________________________________________

      !!! DO !!!

      - DO LOOP is similar to the while loop but with the major difference.
            The DO LOOP will always run at least once.
            
            A DO LOOP runs once and then checks the condition. 
            
            The while loop by itself checks a condition before it runs. If that condition is false, loop never runs.
            
      ============
      CODE EXAMPLE
      ============     
 
      function lessonSchedule() {
            var lessonStartDate = new Date('October 2, 2017 06:00:00 PM');
            var lessonEndDate = new Date(lessonStartDate);
            var detailsSchedule = document.getElementById('lessonSchedule')
            lessonEndDate.setDate(lessonEndDate.getDate() + 56);

            detailsSchedule.innerHTML += "<br /> First lesson: "
                  + lessonStartDate.toLocaleDateString() + "<br />Subsequent lessons: ";
                

            // The code below is basically saying: do this and then check the condition.
            // So the loop will always run at least once.
            do {
                  lessonStartDate.setDate(lessonStartDate.getDate() + 7);
                  detailsSchedule.innerHTML += "<br />" + lessonStartDate.toLocaleDateString();
            }

            while (lessonStartDate < lessonEndDate)

      }



____________________________________________________________________________________________________
____________________________________________________________________________________________________

____________________________________________________________________________________________________
____________________________________________________________________________________________________

      !!! BREAK !!!

      -> Sometimes within a loop, we need to break a code. 
            For example, you may want to make sure that no matter what dates you ser for weekly meeting, 
            those meetings do not happen during the holiday season.

            
      ============
      CODE EXAMPLE
      ============     
 
      function lessonSchedule() {
            var lessonStartDate = new Date('October 2, 2017 06:00:00 PM');
            var lessonEndDate = new Date(lessonStartDate);
            var detailsSchedule = document.getElementById('lessonSchedule')
            lessonEndDate.setDate(lessonEndDate.getDate() + 56);
            var breakDate = new Date('November 20, 2017 12:00:00 AM');

            detailsSchedule.innerHTML += "<br /> First lesson: "
                  + lessonStartDate.toLocaleDateString() + "<br />Subsequent lessons: ";
                

            do {
                  // It will check if the lessonStartDate is equal to breakDate
                  if (lessonStartDate.getDate() == breakDate.getDate())
                  {
                        // if it is true, we can break this code and stop running this loop.
                        break;
                  }

                  lessonStartDate.setDate(lessonStartDate.getDate() + 7);
                  detailsSchedule.innerHTML += "<br />" + lessonStartDate.toLocaleDateString();
            }
            while (lessonStartDate < lessonEndDate)

                    
      }

____________________________________________________________________________________________________
____________________________________________________________________________________________________

      !!! CONTINUE !!!

      - Whereas the break keyword stops a loop based on a condition, 
        the CONTINUE keyword skips one iteration of a loop based on a condition.
                  
      ============
      CODE EXAMPLE
      ============     
 
       function lessonSchedule() {
            var lessonStartDate = new Date('October 2, 2017 06:00:00 PM');
            var lessonEndDate = new Date(lessonStartDate);
            var detailsSchedule = document.getElementById('lessonSchedule')
            lessonEndDate.setDate(lessonEndDate.getDate() + 56);
            var breakDate = new Date('November 20, 2017 12:00:00 AM');

            detailsSchedule.innerHTML += "<br /> First lesson: "
                  + lessonStartDate.toLocaleDateString() + "<br />Subsequent lessons: ";
                

            do {         
                  // The date will move up seven days before it checks to see if it reaches the break date (the date that can't be displayed).
                  
                  // The addition takes place to get the new start date
                  lessonStartDate.setDate(lessonStartDate.getDate() + 7);
                  
                  // Then if that start date equals to the break date ...
                  if (lessonStartDate.getDate() == breakDate.getDate())
                  {               
                        // ... will continue this and skip over that date.          
                        continue;
                  }

                  detailsSchedule.innerHTML += "<br />" + lessonStartDate.toLocaleDateString();
            }
            while (lessonStartDate < lessonEndDate)
                    
      }


____________________________________________________________________________________________________
____________________________________________________________________________________________________

     
      !!! EXAM TIPS !!!

      - Know the difference between the do loop and the while loop
            > The DO LOOP always runs once before it checks a while condition.
            > In a WHILE LOOP the condition is checked first.

      - Make sure you avoid creating an endless loop

      - Logical and comparison operators have 2 symbols

      - Be able to construct if, else if, switch, and nested if statements.
            > Remember that the condition an if statement checks goes inside of parentheses while the resulting action 
              if the condition is true goes inside curly brackets.

            > Know when you would use a switch or nested if

      - Know how to use a FOR LOOP, when to use a conditional loop (while or do), and know when to use a break or continue statement.
   

____________________________________________________________________________________________________
____________________________________________________________________________________________________
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

    ********************************
    DOMAIN 4 - DOCUMENT OBJECT MODEL
    ********************************
    
    >>> DOM <<< 

      - Help to get an understanding of this model.
      - How objects on a webpage relate to each other.
      - How we this can be used to learn about objects and their properties.


----------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------

                                                      --------
                                                      DOM TREE
                                                      -------- 

----------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------

      !!! WINDOW !!!
  
      -> The document objects (  DOM - DOCUMENT OBJECT MODEL ) that we interact with mostly in JS are HTML tags.
            If any text or image, for example, is going to be changed due to a mouse click or other interaction, 
            we need to know which HTML tags we are changing.
           
      FIRST OBJECT: 
      
      WINDOW > Properties: URL, name, and specs 

      A DOM always starts with a window object.
                   
      ============
      CODE EXAMPLE
      ============    
      
      // this function opens a new window
      function checkoutWindow() {   
            // within the open method there are some arguments: url, "", window width and height and no status bar... 
            // these are some of several attributes that can be set for the window object
            checkWin = window.open("checkout.htm", "", "width=300, height=300", "status=no");          
      }
 
____________________________________________________________________________________________________
____________________________________________________________________________________________________

      !!! DOCUMENT !!!

      -> Every HTML element and every attribute descends from this document object.

      Given that HTML is the first tag under the document object, we add that to our Document.

      ============
      CODE EXAMPLE
      ============  

      ________________________________
      |                              |          
      |           WINDOW             |
      |         Properties           |
      |     URL, name, and specs     |
      |______________________________|
      _______________|________________
      |                              |
      |          DOCUMENT            |
      |______________________________|
      _______________|________________
      |                              |
      |        <html> element        |
      |______________________________|
      
      
      // What first document elements are in this document:

      <HTML> is the first tag, the first element we see within the document 

____________________________________________________________________________________________________
____________________________________________________________________________________________________


      !!! BODY !!!

      -> <head> and <body> 

      When building pages within a website, is good to have some diagrams as the one below to see clearly 
      how the webpages flow and objects flow through the web application.

      After HEAD and BODY objects, DOMs will look different from document to document as elements within the body tag will vary.
            
      *Any property can be manipulated through JavaScript.

      ============
      CODE EXAMPLE
      ============  
      
                                                ________________________________
                                                |                              |          
                                                |           WINDOW             |
                                                |         Properties           |
                                                |     URL, name, and specs     |
                                                |______________________________|
                                                _______________|________________
                                                |                              |
                                                |          DOCUMENT            |
                                                |______________________________|
                                                _______________|________________
                                                |                              |
                                   _____________|        <html> element        |_____________
                                  |             |______________________________|             |
            ______________________|_________                                            _____|__________________________
            |                              |                                            |                              | 
            |             HEAD             |                                            |             BODY             |
            |______________________________|                                            |______________________________|
      _____________________|_____________________                                                          _______|_______
______|_____         ______|______         ______|__________________________________                       |             |               
|          |         |           |         |                                       |                       |  <section   |
|  <meta>  |         |  <title>  |         |                <link>                 |                       |  id="main"> |
|__________|         |___________|         |          href="styles\style.css"      |                       |_____________|
                                           |_______________________________________|                   ___________|___________  
                                                                                                       |                     |
                                                                                                       |      <section       |
                                                                                                       |  id="main_content"  |
                                                                                                       |_____________________|
                                                                                                        __________|___________
                                                                                                        |                    |
                                                                                                        |      <header>      |
                                                                                                        |____________________|



                                                                                                        ___________________________________________________________________________________________________
____________________________________________________________________________________________________
----------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------

                                          -----------
                                          HTML EVENTS
                                          ----------- 

----------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------

      !!! ONCHANGE !!!

      -> Object properties do not change by themselves. 
            -> Methods do not change by themselves.

                  - These two types of tasks run on EVENTS
                        An EVENT is an interaction:
                        >> mouse click, key press, object changing values, webpage loading...
                              
      -> One of the most common events in JS:

      >> onchange <<

      - Is usually used for an immediate reaction to something changing, usually an input field.
                  
            Technically the field is not changed until a user presses the Tab or Enter key or leaves the field.
                  In this scenario, with onchange event, actions will take place without a user having to click a button.
                   
            This is the essence of the onchange event: Actions happen when an object changes.

      ============
      CODE EXAMPLE
      ============   
            
      // If something in this input field changes, run the getPracticeHours function
      <input type="number" id="practiceHours" name="Practice Hours:"
                       onchange="getPracticeHours();" />
            </p>
      

      ______

      // This getPracticeHours function fills an HTML element with text that explains a lesson plan
      // The important thing for this segment, though, is the onchange event itself. 

      function getPracticeHours() {
            try
            {
                  var hoursEntered = parseInt(document.getElementById('practiceHours').value)
                  var msg1 = 'It will take you '
                  var msg2 = 20 / hoursEntered
                  var msg3 = ' weeks to finish this program.'
                  var msg4 = 'Can you do '
                  var msg5 = hoursEntered
                  var msg6 = ' per week for '
                  var msg7 = ' weeks? Or is this just a "dream?"'

                  document.getElementById('practiceWeeks').innerHTML =
                        // put concat here
                        msg1.concat(msg2, msg3) + '<br />' + msg4.concat(msg5, msg6, msg2, msg7);
                  document.getElementById('practiceDetails').innerHTML = "New classes start on "
                        + monthName[lessonStartDate.getMonth()] + " " + lessonStartDate.getDate() + ", "
                        + daysUntilStart + " days from now." + "<br />";
                            
                  lessonSchedule();
                       
                        
            }
            catch(error)
            {
                  alert("Error: " + error.description);
            }
      }
       
____________________________________________________________________________________________________
____________________________________________________________________________________________________

      !!! ONMOUSEOVER !!!

      >> onmouseover event << 
            
           - is used To make something more interactive to take place on a webpage when a user rolls a mouse over and object.
      
            A common use of this event is to roll a mouse over a thumbnail and have that trigger code to show a larger version of the picture in another image element.

      
      
      ============
      CODE EXAMPLE
      ============
      
      // - Any time you are looking through code that does some interactive action, look for an event.
      // In this case, each thumbnail image, has an onmouseover event which calls a function called mouseOverPic, and uses a parameter.

      // THESE onmouseover events TELL THIS FUNCTION TO DINAMICALLY UPDATE SOME HTML CODE.
	
		<article class="itemthumbnail">
		      <a href="" onmouseover="mouseOverPic(mandolin);"><img src="images/mandolin.jpg" alt="Mandolin" /></a>
		</article>
	        	
	    	<article class="itemthumbnail">
			<a href="" onmouseover="mouseOverPic(trombone);"><img src="images/Trombone.jpg" alt="Trombone" /></a>
		</article>

	    	<article class="itemthumbnail">
			<a href="" onmouseover="mouseOverPic(drum);"><img src="images/DRUM.jpg" alt="Drum" /></a>
		</article>

	    	<article class="itemthumbnail">
		      <a href="" onmouseover="mouseOverPic(kazoo);"><img src="images/Kazoo.jpg" alt="Kazoo" /></a>
		</article>

	    	<article class="itemthumbnail">
			<a href="" onmouseover="mouseOverPic(musicbooks);"><img src="images/musicbooks.jpg" alt="Music Books" /></a>
		</article>      

      
      _________________

      // THIS VARIABLES DEFINE THE OBJECTS

      var mandolin = new product('F-Style Mandolin',
            'The exuberant sound of a zealous Mandolin solo harkens the countryside of the Appalachians and effectively expresses the bittersweet melodies of yesteryear. The wood’s natural beauty is amplified by a high-gloss finish, while delivering a generously warm and rich sound.'
            , 350.00, 'mandolin');
      var trombone = new product('Student Trombone',
            'With an exceptional design and outstanding craftsmanship, the enhanced durability of this model will result in years of musical enjoyment and offer any student the opportunity to develop a lifelong affiliation with music.   Designed for easy tone production and projection. Includes mouthpiece and a case.'
            , 230.00, 'trombone');
      var drum = new product('Red Floor Tom',
            'Setting the standards for sound and value, this drum’s ability to resonate is a key factor in achieving an overwhelming performance.  Fitted with a birch shell and stainless steel hoops, this quality hardware comes in a variety of finishes. '
            , 150.00, 'drum');
      var kazoo = new product('Kazoo 3-Pack',
            'The easiest of all instruments to learn and play, the affordability of kazoos makes outfitting the largest of music classes an easy task. Color selection may vary based on current inventory. '
            , 3.95, 'kazoo');
      var musicbooks = new product('College Prep Textbook Pack: Volume 3',
            'This collection of textbooks will prepare any aspiring music major for their third and fourth years of study, focusing on the Romantic and Post-Tonal eras of music, instrumentation and orchestration techniques, as well as current electronic and computer-generated music and recording methods. '
            , 340.00, 'musicbooks');      

      _________________


      // the function takes a parameter and changes four HTML elements, one being an image source and the other three, innerHTML properties

      // It is using an object called product and four properties. 
      function mouseOverPic(product) {
            //the objects are defined as these variables above
            document.getElementById('itemImage').src = "images\\" + product.imgsrc + ".jpg";
            document.getElementById('itemName').innerHTML = product.item;
            document.getElementById('itemDescription').innerHTML = product.description;
            document.getElementById('itemPrice').innerHTML = product.price.toFixed(2);
      } 

      _________________

      // The product definition is in the code below:
      
      // THIS PRODUCT FUNCTION DEFINES THE OBJECT
      function product(item, description, price, imgsrc) {
            this.item = item;
            this.description = description;
            this.price = price;
            this.imgsrc = imgsrc;
      }

      
____________________________________________________________________________________________________
____________________________________________________________________________________________________
      
      !!! ONLOAD !!!

      -> With the >> onload << event, action is taken when an HTML element loads.
      
            The most common use for this event is to have something happen, such as an alert, when the body of a webpage loads.

      ============
      CODE EXAMPLE
      ============  
      
      <body onload="alert('This is an example of the onload event');"> 

      // FRIENDLY REMINDER: Because the statement starts with double quotes, any text with inner quotes needs to be single quotes.
____________________________________________________________________________________________________
____________________________________________________________________________________________________

      !!! ONCLICK !!!

      - The most commonly coded event in JavaScript is the >> onclick << event.
            Code is run when an object, usually a button, is clicked.

      
            
      ============
      CODE EXAMPLE
      ============     

      // Through all the functions you should see two main actions taken as a result of an onclick event:
            // a function runs, or code within the event runs.
 
      <div class="itemquantity">
            <p>
                  <input type="text" value="1" id="manqty"> <br/>
                        <button id="manqtyadd" onclick="addOne('manqty');">+</button>
                        <button id="manqtysubtract" onclick="javascript: document.getElementById('manqty').value--;">-</button>  
                        <button id="manqtyzero" onclick="javascript: document.getElementById('manqty').value = 0;">Clear</button>
                        <button id="manqtyfive" onclick="addFive('manqty');">Add Five</button>
             </p>
      </div>


____________________________________________________________________________________________________
____________________________________________________________________________________________________


      !!! ONMOUSEOUT !!!

      -> Different from onmouseover, the >> onmouseout << event, triggers action when a mouse is moved away from an object.

      
            
      ============
      CODE EXAMPLE
      ============     
 
      <div class="order_buttons">
            <p>
                  <input type="button" class="buttons" value="Update Cart"
                        onclick="updateCart();"
                              // The code below will display a message when someone moves their mouse away from the Update Cart button.
                        onmouseout="document.getElementById('cartMsg').innerHTML = 
                              'Click the Update Cart button to get the latest order total.'"; />
            </p>
            <p><input type="button" class="buttons" value="Checkout" onclick="checkoutWindow();"></p>
            <p><input type="button" class="buttons" value="Close Checkout" onclick="closeCheckOut();" /></p>
      </div>

            <p id="cartMsg">&nbsp;</p>

____________________________________________________________________________________________________
____________________________________________________________________________________________________


      !!! ONKEYDOWN !!!

      -> The >> onkeydown << event triggers action when a user presses a key on a keyboard.
            It is now used all that often by itself in a production environment, 
            but can be used to encourage a webpage user to use buttons instead of typing. 
                  
      ============
      CODE EXAMPLE
      ============     
 
      // The code below will use the Mandolin input field to test a message to send to a user when any key is pressed
      // while the cursor is in this input field.

      <div class="itemquantity">
            <p>
                  // on the line below there's the input tag for rhis field, which happens to control the quantity of mandolins ordered.
                  <input type="text" value="1" id="manqty"
                  // inside the input tag is the onkeydown event that should work when any key is pressed.
                  onkeydown="alert('It may be easier to use buttons to change this field');" > <br/>
                  <button id="manqtyadd" onclick="addOne('manqty');">+</button>
                  <button id="manqtysubtract" onclick="javascript: document.getElementById('manqty').value--;">-</button>  
                  <button id="manqtyzero" onclick="javascript: document.getElementById('manqty').value = 0;">Clear</button>
                  <button id="manqtyfive" onclick="addFive('manqty');">Add Five</button>
            </p>
      </div>


____________________________________________________________________________________________________
____________________________________________________________________________________________________

----------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------

                                          ------------------------
                                          OUTPUT TO HTML DOCUMENTS
                                          ------------------------

----------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------

      !!! INNER HTML !!!

      -> This allows to dynamically control the text in between the opening and closing tags of an existing HTML element.

      -> The two common ways to affect the innerHTML property for an element are:
            - to use it to change its innerHTML,
            - or to append to its existing innerHTML.

      -> The key to making the innerHTML property work is to know:
            - when to use = to replace its contents 
            - and when to use += to append to existing content.

      ============
      CODE EXAMPLE
      ============     
 
      // Whatever is currently in the element with an ID of practiceWeeks ...  
      document.getElementById('practiceWeeks').innerHTML =
      // ... is getting replaced on the line below.
            msg1.concat(msg2, msg3) + '<br />' + msg4.concat(msg5, msg6, msg2, msg7);
      // Text is also being replaced here. We know this because of the equal sign... 
      document.getElementById('practiceDetails').innerHTML = "New classes start on "
            + monthName[lessonStartDate.getMonth()] + " " + lessonStartDate.getDate() + ", "
            + daysUntilStart + " days from now." + "<br />";
      
      // ... The equals sign is the indicator that whatever was there is getting replaced.

____________________

      Sometimes though, you want to add to, or append to, existing content within an HTML tag.

      // Here the element ID of lessonSchedule is being stored inside of a variable called detailsSchedule.
      var detailsSchedule = document.getElementById('lessonSchedule')
            lessonEndDate.setDate(lessonEndDate.getDate() + 0);

      // Then, its content is being appended to, as indicated with the += as part of the code.
      detailsSchedule.innerHTML += "<br /> First lesson: "
            + lessonStartDate.toLocaleDateString() + "<br />Subsequent lessons: ";

____________________________________________________________________________________________________
____________________________________________________________________________________________________

      !!! DOCUMENT.WRITE !!!

      -> While the innerHTML property is great for being able to change text within an existing HTML element,
            the document.write is great to dynamically write text onto a page,
            even if some elements that is needed to add are not present.

      -> This method allows us to write both HTML elements and text to a webpage.
                   
      ============
      CODE EXAMPLE
      ============ 
      
      // The new window checkWin is being taken, and dynamically writing HTML to it, using the document.write method. 
      function checkoutWindow() {   
            checkWin = window.open("checkout.htm", "", "width=300, height=300");
            // specifically, a paragraph is being added telling the users that this document is current as of the current date and time.
            checkWin.document.write("<p>This document is current as of " + Date());          
      }
            
       

____________________________________________________________________________________________________
____________________________________________________________________________________________________


----------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------

                              --------------------------------
                              LOCATE, MODIFY, AND ADD ELEMENTS
                              --------------------------------

----------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------


      !!! GET ELEMENT BY ID !!!

      -> The easiest way to locate an element is by id, that is, if an element has an id.

      -> For this reason is recommended to get an id to any HTML element that could possibly be used in JavaScript code.

      -> Once you get an elements id, you can change any of its properties using JavaScript.
        
      -> The getElementById method is part of the document object, so we call the method through that object.

      -> Because getElementById is used heavily in JavaScript, 
            it is a best practice to have a consistent naming convention for your ids for your elements.

      ============
      CODE EXAMPLE
      ============    
      
      // In parentheses, we define the elements id, and from here, we can change any of that elements properties.
      // Sometimes, in a large code example, we need to be able to find the element being changed.

      document.getElementById('itemImage').src = "images\\" + product.imgsrc + ".jpg";   
      
____________________________________________________________________________________________________
____________________________________________________________________________________________________


      !!! GET ELEMENTS BY TAG NAME !!!

      -> When working with HTML files, especially large ones, you will want a way to get all elements of a certain HTML tag.
            Even if you are just using this for testing purposes, which wil usually be the case, 
            you will want to make sure that you can list these elements so that you know how many you have,
            and if something is not working, having the wrong element could be the reason why.
      
      ============
      CODE EXAMPLE
      ============   
            
      function getImages() {
            // it uses the getElementsByTagName method, in this case for the image tag. This actually creates an array of images ...            
            var imgList = document.getElementsByTagName("img");
            // which then, through a for loop, displays each image source on its own line.
            for (var i = 0; i < imgList.length; i++) {
                document.getElementById('output').innerHTML += "<br />" + imgList[i].src;
            }
        }

      ______________________

      ON THE CONSOLE:

      i=document.getElementsByTagName("img")

      // press enter to see the result

____________________________________________________________________________________________________
____________________________________________________________________________________________________


      !!! GET ELEMENTS BY CLASS NAME !!!

      -> Similar to obtaining information about tags, you may want to obtain information about classes, 
            such as how many times a class is used, for example.
            
      -> This can help you determine whether changing class attributes will have a major impact on the look of your website, or not.
     
      ============
      CODE EXAMPLE
      ============     
 
      // The function below stores the class named social in a variable called classList, using the document.getElementsByClassName method.
      function getClasses() {
            var classList = document.getElementsByClassName("social");
      // The output element is updated to show the number of times this class is being used, using this classList.length property.
                  document.getElementById('output').innerHTML += "<br />" + classList.length;
      }
       
      ... 

      // And the function above is tied to an onclick event for a button, specifically the Get Social Classes button.

      <input type="button" class="buttons" value="Get Social Classes" onclick="getClasses();"/>

____________________________________________________________________________________________________
____________________________________________________________________________________________________


      !!! SET ATTRIBUTE !!!

      -> To better cater a website to your audience, you may want to dynamically change an element attribute,
            such as its class, on an event, such as the click of a button

            - For example, you may want to change the class assigned to a heading if a user wants to see your 
                  page in a different way, after the page is loaded.

            - Remember that the getElementsByTagName method store a set of values in an array.
                  Arrays are zero-based, so the first item in the array is item 0.
                  
      ============
      CODE EXAMPLE
      ============     
 
      // When the button is clicked, a function called setAltHeadingClass runs
      <input type="button" class="buttons" value="Change Heading" onclick="setAltHeadingClass();"/>

      ...

      // The function takes the first instance of an H1 tag, using the getElementsByTagName method,
      // and then uses the setAttribute method to set the class of this tag to the altheheading class
      function setAltHeadingClass() {
            // the zero here represents the first H1 tag on the page.
            document.getElementsByTagName("h1")[0].setAttribute("class", "altheading");
      }

      ____________

      CSS

      // here is the new setting for the headings
      .altheading {
            font-size: 20pt;
            text-align: center;
            background-color: lightcyan;
      }



____________________________________________________________________________________________________
____________________________________________________________________________________________________


      !!! CREATE ELEMENT !!!

      - This method allows us to dynamically create an element and place that element in a specific spot on a webpage,
            so long as that spot is an element we can access through the getElementById method, meaning the element has an id.
                  
      ============
      CODE EXAMPLE
      ============     
 
      // here there's an onclick event that runs the addConstructionMsg function.
      <input type="button" class="buttons" value="Create Element" onclick="addConstructionMsg();"/>
      _______________

      // In this the createElement method, which is part of the document object, ...
      function addConstructionMsg() {
            // ... is used to create a new p tag, a new paragraph tag, and store it inside a variable called constructionP. 
            var constructionP = document.createElement("p");
            // Then, a text node, also a method under the document object, 
            // which is basically a text placeholder, is created and stored in a value called constructionText.
            var constructionText = document.createTextNode("This page is under construction. " +
                  "We're not actually comparing instruments right now.");
                  // that constructionText is appended on the code below to the constructionP element.
                  constructionP.appendChild(constructionText);
            // Here, we can be very specific about where this new element will appear on the page.
            // We are using the HTML element called sitelogo, and to it we are appending this new paragraph.
            document.getElementById('sitelogo').appendChild(constructionP);
      }

      ______________
       
      // the sitelogo is actually found in a div tag on another line. 
      // That explains the message displaying just after the logo on the page.
      
      <div id="sitelogo">
		<a href="index.html"><img src="images/logo.png" alt="The Music Store"/></a>
	</div>
      
____________________________________________________________________________________________________
____________________________________________________________________________________________________


      !!! EVENT HANDLERS AND LISTENERS !!!

      -> onclick is one of the most popular event handlers for the JavaScript Document Object Model or DOM for short.

      -> Event handlers can be added for HTML tags as well, as with an onload event.

      -> The other way to create interactivity is through an event listener. 
                  
      ============
      CODE EXAMPLE
      ============     
 
      <input type="button" id="getDate" class="buttons" value="Get the current date" />

      __________________

      // Here we have an event listener being added for a click on that button with the getDate id.
      document.getElementById('getDate').addEventListener("click", getCurrentDate);

      // The click event is coupled with a function called getCurrentDate which starts below.
      function getCurrentDate() {
            document.getElementById('output').innerHTML = Date();
      } 

____________________________________________________________________________________________________
____________________________________________________________________________________________________

     
      !!! EXAM TIPS !!!

      -> Know where the pieces fit in a Document Object Model
            - Everything stems downward from the document object

      -> Know the differences among the HTML events that have been covered.
            - onchange, onmouseover, onload, onclick, onmouseout, and onkeydown.
            - Know when you would use each of these.

      -> Remember that innerHTML is a property that works on an existing HTML element.
            - The document.write method dynamically writes elements and text to a webpage.

      -> When working dynamically with elements and attributes,
            - know the differences among getElementById, getElementsByTagName, getElementsByClassName
            - Know when you would use each one for the exam.
            - Know how to use SetAttribute and CreateElement methods.



      
   

____________________________________________________________________________________________________
____________________________________________________________________________________________________
 





*/