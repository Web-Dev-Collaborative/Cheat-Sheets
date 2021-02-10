---
description: |
    Assertions include boundaries, which indicate the beginnings and endings
    of lines and words, and other patterns indicating in some way that a
    match is possible (including look-ahead, look-behind, and conditional
    expressions).
lang: en
robots: 'index, follow'
title: 'Assertions - JavaScript \| MDN'
twitter:card: summary
twitter:creator: '\@MozDevNet'
twitter:description: |
    Assertions include boundaries, which indicate the beginnings and endings
    of lines and words, and other patterns indicating in some way that a
    match is possible (including look-ahead, look-behind, and conditional
    expressions).
twitter:image: 'https://developer.mozilla.org/static/img/opengraph-logo.72382e605ce3.png'
twitter:site: '\@MozDevNet'
twitter:title: Assertions
twitter:url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular\_Expressions/Assertions'
viewport: 'width=device-width, initial-scale=1'
---

::: {#react-container data-component-name="SPA"}
::: {.loading-bar}
:::

-   [Skip to main content](#content){#skip-main}
-   [Select language](#language){#skip-language}
-   [Skip to search](#main-q){#skip-search}

<!-- -->

-   Technologies
    -   [Technologies
        Overview](../../../../../../../external.html?link=https://developer.mozilla.org/en-US/docs/Web)
    -   [HTML](../../../../../../../external.html?link=https://developer.mozilla.org/en-US/docs/Web/HTML)
    -   [CSS](../../../../../../../external.html?link=https://developer.mozilla.org/en-US/docs/Web/CSS)
    -   [JavaScript](../../../../../../../external.html?link=https://developer.mozilla.org/en-US/docs/Web/JavaScript)
    -   [Graphics](../../../../../../../external.html?link=https://developer.mozilla.org/en-US/docs/Web/Guide/Graphics)
    -   [HTTP](../../../../../../../external.html?link=https://developer.mozilla.org/en-US/docs/Web/HTTP)
    -   [APIs /
        DOM](../../../../../../../external.html?link=https://developer.mozilla.org/en-US/docs/Web/API)
    -   [Browser
        Extensions](../../../../../../../external.html?link=https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions)
    -   [MathML](../../../../../../../external.html?link=https://developer.mozilla.org/en-US/docs/Web/MathML)
-   References & Guides
    -   [Learn web
        development](../../../../../../../external.html?link=https://developer.mozilla.org/en-US/docs/Learn)
    -   [Tutorials](../../../../../../../external.html?link=https://developer.mozilla.org/en-US/docs/Web/Tutorials)
    -   [References](../../../../../../../external.html?link=https://developer.mozilla.org/en-US/docs/Web/Reference)
    -   [Developer
        Guides](../../../../../../../external.html?link=https://developer.mozilla.org/en-US/docs/Web/Guide)
    -   [Accessibility](../../../../../../../external.html?link=https://developer.mozilla.org/en-US/docs/Web/Accessibility)
    -   [Game
        development](../../../../../../../external.html?link=https://developer.mozilla.org/en-US/docs/Games)
    -   [\...more
        docs](../../../../../../../external.html?link=https://developer.mozilla.org/en-US/docs/Web)
-   Feedback
    -   [Send
        Feedback](../../../../../../../external.html?link=https://developer.mozilla.org/en-US/docs/MDN/Feedback)
    -   [Get Firefox help
        🌐](../../../../../../../external.html?link=https://support.mozilla.org/)
    -   [Get web development help
        🌐](../../../../../../../external.html?link=https://stackoverflow.com/)
    -   [Join the MDN
        community](../../../../../../../external.html?link=https://developer.mozilla.org/en-US/docs/MDN/Community)
    -   [Report a content problem
        🌐](../../../../../../../external.html?link=https://github.com/mdn/sprints/issues/new?template=issue-template.md&projects=mdn/sprints/2&labels=user-report&title=/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Assertions)
    -   [Report an issue
        🌐](../../../../../../../external.html?link=https://github.com/mdn/kuma/issues/new/choose)

::: {.header-search}
Search MDN

Open search
:::

::: {role="main"}
::: {.titlebar-container}
::: {.titlebar}
:::
:::

::: {.full-width-row-container}
::: {.max-content-width-container}
1.  [[See ]{.pre-text}[Web technology for
    developers]{property="name"}](../../../../../../../external.html?link=https://developer.mozilla.org/en-US/docs/Web){.breadcrumb-chevron}
2.  [[See ]{.pre-text}[JavaScript]{property="name"}](../../../../../../../external.html?link=https://developer.mozilla.org/en-US/docs/Web/JavaScript){.breadcrumb-chevron}
3.  [[See ]{.pre-text}[JavaScript
    Guide]{property="name"}](../../Guide.html){.breadcrumb-chevron}
4.  [[See ]{.pre-text}[Regular
    expressions]{property="name"}](../Regular_Expressions.html){.breadcrumb-previous}
5.  [[Assertions]{property="name"
    aria-current="page"}](Assertions.html){.crumb-current-page}

::: {.dropdown-container .language-menu}
English[▼]{.dropdown-arrow-down aria-hidden="true"}

-   [Español](../../../../../../../external.html?link=https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions/Aserciones "Spanish")
-   [Français](../../../../../../../external.html?link=https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Expressions_régulières/Assertions "French")
-   [日本語](../../../../../../../external.html?link=https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Regular_Expressions/Assertions "Japanese")
-   [한국어](../../../../../../../external.html?link=https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/정규식/Assertions "Korean")
-   [Русский](../../../../../../../external.html?link=https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Regular_Expressions/Assertions "Russian")
-   [中文
    (简体)](../../../../../../../external.html?link=https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions/Assertions "Chinese (Simplified)")
-   [Add a
    translation](../../../../../../../external.html?link=https://wiki.developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Assertions$locales){#translations-add}
:::
:::
:::

::: {.wiki-left-present .content-layout}
::: {.section .document-toc}
On this Page
------------

Jump to section

-   [Types](#Types)
-   [Examples](#Examples)
-   [Specifications](#Specifications)
-   [Browser compatibility](#Browser_compatibility)
-   [See also](#See_also)
-   [Related topics](#sidebar-quicklinks)
:::

::: {#content .article .text-content}
Assertions include boundaries, which indicate the beginnings and endings
of lines and words, and other patterns indicating in some way that a
match is possible (including look-ahead, look-behind, and conditional
expressions).

<div>

</div>

Types {#Types}
-----

::: {.hidden}
The following section is also duplicated on [this
cheatsheet](Cheatsheet.html). Do not forget to edit it as well, thanks!
:::

### Boundary-type assertions {#Boundary-type_assertions}

+-----------------------------------+-----------------------------------+
| Characters                        | Meaning                           |
+===================================+===================================+
| `^`                               | Matches the beginning of input.   |
|                                   | If the multiline flag is set to   |
|                                   | true, also matches immediately    |
|                                   | after a line break character. For |
|                                   | example, `/^A/` does not match    |
|                                   | the \"A\" in \"an A\", but does   |
|                                   | match the first \"A\" in \"An     |
|                                   | A\".                              |
|                                   |                                   |
|                                   | ::: {.blockIndicator .note}       |
|                                   | This character has a different    |
|                                   | meaning when it appears at the    |
|                                   | start of a                        |
|                                   | [group](Groups_and_Ranges.html).  |
|                                   | :::                               |
+-----------------------------------+-----------------------------------+
| `$`                               | Matches the end of input. If the  |
|                                   | multiline flag is set to true,    |
|                                   | also matches immediately before a |
|                                   | line break character. For         |
|                                   | example, `/t$/` does not match    |
|                                   | the \"t\" in \"eater\", but does  |
|                                   | match it in \"eat\".              |
+-----------------------------------+-----------------------------------+
| `\b`                              | Matches a word boundary. This is  |
|                                   | the position where a word         |
|                                   | character is not followed or      |
|                                   | preceded by another               |
|                                   | word-character, such as between a |
|                                   | letter and a space. Note that a   |
|                                   | matched word boundary is not      |
|                                   | included in the match. In other   |
|                                   | words, the length of a matched    |
|                                   | word boundary is zero.            |
|                                   |                                   |
|                                   | Examples:                         |
|                                   |                                   |
|                                   | -   `/\bm/` matches the \"m\" in  |
|                                   |     \"moon\".                     |
|                                   | -   `/oo\b/` does not match the   |
|                                   |     \"oo\" in \"moon\", because   |
|                                   |     \"oo\" is followed by \"n\"   |
|                                   |     which is a word character.    |
|                                   | -   `/oon\b/` matches the \"oon\" |
|                                   |     in \"moon\", because \"oon\"  |
|                                   |     is the end of the string,     |
|                                   |     thus not followed by a word   |
|                                   |     character.                    |
|                                   | -   `/\w\b\w/` will never match   |
|                                   |     anything, because a word      |
|                                   |     character can never be        |
|                                   |     followed by both a non-word   |
|                                   |     and a word character.         |
|                                   |                                   |
|                                   | To match a backspace character    |
|                                   | (`[\b]`), see [Character          |
|                                   | Classes](Character_Classes.html). |
+-----------------------------------+-----------------------------------+
| `\B`                              | Matches a non-word boundary. This |
|                                   | is a position where the previous  |
|                                   | and next character are of the     |
|                                   | same type: Either both must be    |
|                                   | words, or both must be non-words, |
|                                   | for example between two letters   |
|                                   | or between two spaces. The        |
|                                   | beginning and end of a string are |
|                                   | considered non-words. Same as the |
|                                   | matched word boundary, the        |
|                                   | matched non-word boundary is also |
|                                   | not included in the match. For    |
|                                   | example, `/\Bon/` matches \"on\"  |
|                                   | in \"at noon\", and `/ye\B/`      |
|                                   | matches \"ye\" in \"possibly      |
|                                   | yesterday\".                      |
+-----------------------------------+-----------------------------------+

### Other assertions {#Other_assertions}

::: {.blockIndicator .note}
**Note**: The `?` character may also be used as a quantifier.
:::

+-----------------------------------+-----------------------------------+
| Characters                        | Meaning                           |
+===================================+===================================+
| `x(?=y)`                          | **Lookahead assertion: **Matches  |
|                                   | \"x\" only if \"x\" is followed   |
|                                   | by \"y\". For example,            |
|                                   | /`Jack(?=Sprat)/` matches         |
|                                   | \"Jack\" only if it is followed   |
|                                   | by \"Sprat\".\                    |
|                                   | `/Jack(?=Sprat|Frost)/` matches   |
|                                   | \"Jack\" only if it is followed   |
|                                   | by \"Sprat\" or \"Frost\".        |
|                                   | However, neither \"Sprat\" nor    |
|                                   | \"Frost\" is part of the match    |
|                                   | results.                          |
+-----------------------------------+-----------------------------------+
| `x(?!y)`                          | **Negative lookahead              |
|                                   | assertion: **Matches \"x\" only   |
|                                   | if \"x\" is not followed by       |
|                                   | \"y\". For example, `/\d+(?!\.)/` |
|                                   | matches a number only if it is    |
|                                   | not followed by a decimal         |
|                                   | point. `/\d+(?!\.)/.exec('3.141') |
|                                   | `                                 |
|                                   | matches \"141\" but not \"3.      |
+-----------------------------------+-----------------------------------+
| `(?<=y)x`                         | **Lookbehind assertion: **Matches |
|                                   | \"x\" only if \"x\" is            |
|                                   | preceded by \"y\". For example,   |
|                                   | `/(?<=Jack)Sprat/` matches        |
|                                   | \"Sprat\" only if it is preceded  |
|                                   | by                                |
|                                   | \"Jack\". `/(?<=Jack|Tom)Sprat/`  |
|                                   | matches \"Sprat\" only if it is   |
|                                   | preceded by \"Jack\" or \"Tom\".  |
|                                   | However, neither \"Jack\" nor     |
|                                   | \"Tom\" is part of the match      |
|                                   | results.                          |
+-----------------------------------+-----------------------------------+
| `(?<!y)x`                         | **Negative lookbehind             |
|                                   | assertion: **Matches \"x\" only   |
|                                   | if \"x\" is not preceded by       |
|                                   | \"y\". For example, `/(?<!-)\d+/` |
|                                   | matches a number only if it is    |
|                                   | not preceded by a minus           |
|                                   | sign. `/(?<!-)\d+/.exec('3')`     |
|                                   | matches                           |
|                                   | \"3\". `/(?<!-)\d+/.exec('-3')`   |
|                                   |  match is not found because       |
|                                   | the number is preceded by the     |
|                                   | minus sign.                       |
+-----------------------------------+-----------------------------------+

Examples {#Examples}
--------

### General boundary-type overview example {#General_boundary-type_overview_example}

``` {.brush: .js}
// Using Regex boundaries to fix buggy string.
buggyMultiline = `tey, ihe light-greon apple
tangs on ihe greon traa`;

// 1) Use ^ to fix the matching at the begining of the string, and right after newline.
buggyMultiline = buggyMultiline.replace(/^t/gim,'h'); 
console.log(1, buggyMultiline); // fix 'tey', 'tangs' => 'hey', 'hangs'. Avoid 'traa'.

// 2) Use $ to fix matching at the end of the text.
buggyMultiline = buggyMultiline.replace(/aa$/gim,'ee.'); 
console.log(2, buggyMultiline); // fix  'traa' => 'tree'.

// 3) Use \b to match characters right on border between a word and a space.
buggyMultiline = buggyMultiline.replace(/\bi/gim,'t');
console.log(3, buggyMultiline); // fix  'ihe' but does not touch 'light'.

// 4) Use \B to match characters inside borders of an entity.
fixedMultiline = buggyMultiline.replace(/\Bo/gim,'e');
console.log(4, fixedMultiline); // fix  'greon' but does not touch 'on'.
```

### Matching the beginning of input using a \^ control character {#Matching_the_beginning_of_input_using_a_control_character}

Use `^` for matching at the beginning of input. In this example, we can
get the fruits that start with \'A\' by a `/^A/` regex. For selecting
appropriate fruits we can use the
[filter](../../Reference/Global_Objects/Array/filter.html) method with
an [arrow](../../Reference/Functions/Arrow_functions.html) function. 

``` {.brush: .js}
let fruits = ["Apple", "Watermelon", "Orange", "Avocado", "Strawberry"];

// Select fruits started with 'A' by /^A/ Regex.
// Here '^' control symbol used only in one role: Matching beginning of an input.

let fruitsStartsWithA = fruits.filter(fruit => /^A/.test(fruit));
console.log(fruitsStartsWithA); // [ 'Apple', 'Avocado' ]
```

In the second example `^` is used both for matching at the beginning of
input and for creating negated or complemented character sets when used
within [groups](Groups_and_Ranges.html).

``` {.brush: .js}
let fruits = ["Apple", "Watermelon", "Orange", "Avocado", "Strawberry"];

// Selecting fruits that dose not start by 'A' by a /^[^A]/ regex.
// In this example, two meanings of '^' control symbol are represented:
// 1) Matching begining of the input
// 2) A negated or complemented character set: [^A]
// That is, it matches anything that is not enclosed in the brackets.

let fruitsStartsWithNotA = fruits.filter(fruit => /^[^A]/.test(fruit));

console.log(fruitsStartsWithNotA); // [ 'Watermelon', 'Orange', 'Strawberry' ]
```

### Matching a word boundary {#Matching_a_word_boundary}

``` {.brush: .js}
let fruitsWithDescription = ["Red apple", "Orange orange", "Green Avocado"];

// Select descriptions that contains 'en' or 'ed' words endings:
let enEdSelection = fruitsWithDescription.filter(descr => /(en|ed)\b/.test(descr));

console.log(enEdSelection); // [ 'Red apple', 'Green Avocado' ]
```

### Lookahead assertion {#Lookahead_assertion}

``` {.brush: .js}
// JS Lookahead assertion x(?=y)

let regex = /First(?= test)/g;

console.log('First test'.match(regex)); // [ 'First' ]
console.log('First peach'.match(regex)); // null
console.log('This is a First test in a year.'.match(regex)); // [ 'First' ]
console.log('This is a First peach in a month.'.match(regex)); // null
```

### Basic negative lookahead assertion {#Basic_negative_lookahead_assertion}

For example, `/\d+(?!\.)/` matches a number only if it is not followed
by a decimal point. `/\d+(?!\.)/.exec('3.141')` matches \"141\" but not
\"3.

``` {.brush: .js}
console.log(/\d+(?!\.)/g.exec('3.141')); // [ '141', index: 2, input: '3.141' ]
```

### Different meaning of \'?!\' combination usage in Assertions and  Ranges  {#Different_meaning_of_!_combination_usage_in_Assertions_and_Ranges}

Different meaning of `?!` combination usage in
[Assertions](Assertions.html) `/x(?!y)/ `and
[Ranges](Groups_and_Ranges.html) `[^?!]`.

``` {.brush: .js}
let orangeNotLemon = "Do you want to have an orange? Yes, I do not want to have a lemon!";

// Different meaning of '?!' combination usage in Assertions /x(?!y)/ and  Ranges /[^?!]/
let selectNotLemonRegex = /[^?!]+have(?! a lemon)[^?!]+[?!]/gi
console.log(orangeNotLemon.match(selectNotLemonRegex)); // [ 'Do you want to have an orange?' ]

let selectNotOrangeRegex = /[^?!]+have(?! an orange)[^?!]+[?!]/gi
console.log(orangeNotLemon.match(selectNotOrangeRegex)); // [ ' Yes, I do not want to have a lemon!' ]
```

### Lookbehind assertion {#Lookbehind_assertion}

``` {.brush: .js}
let oranges = ['ripe orange A ', 'green orange B', 'ripe orange C',];

let ripe_oranges = oranges.filter( fruit => fruit.match(/(?<=ripe )orange/));
console.log(ripe_oranges); // [ 'ripe orange A ', 'ripe orange C' ]
```

Specifications {#Specifications}
--------------

  -----------------------------------------------------------------------------------------------------------------------------------------------------------------------
  Specification
  -----------------------------------------------------------------------------------------------------------------------------------------------------------------------
  [ECMAScript (ECMA-262)\
  [The definition of \'RegExp: Assertions\' in that specification.]{.small}](../../../../../../../external.html?link=https://tc39.es/ecma262/#sec-assertion){.external}

  -----------------------------------------------------------------------------------------------------------------------------------------------------------------------

Browser compatibility {#Browser_compatibility}
---------------------

For browser compatibility information, check out the [main Regular
Expressions compatibility
table](../Regular_Expressions.html#Browser_compatibility).

See also {#See_also}
--------

-   [Regular expressions guide](../Regular_Expressions.html)
    -   [Character classes](Character_Classes.html)
    -   [Quantifiers](Quantifiers.html)
    -   [Unicode property escapes](Unicode_Property_Escapes.html)
    -   [Groups and ranges](Groups_and_Ranges.html)
-   [The `RegExp()`
    constructor](../../Reference/Global_Objects/RegExp.html)

::: {.metadata}
::: {.section .document-meta}
#### Metadata

-   **Last modified:** May 10, 2020, [by MDN
    contributors](../../../../../../../external.html?link=https://wiki.developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Assertions$history)
:::
:::
:::

::: {#sidebar-quicklinks .sidebar}
::: {.quick-links}
::: {.quick-links-head .sidebar-heading}
Related Topics
:::

<div>

1.  [***JavaScript***](../../../../../../../external.html?link=https://developer.mozilla.org/en-US/docs/Web/JavaScript)
2.  [**Tutorials:**](../../../../../../../external.html?link=https://developer.mozilla.org/en-US/docs/Web/JavaScript)
3.  Complete beginners
    1.  [JavaScript
        basics](../../../../../../../external.html?link=https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics)
    2.  [JavaScript first
        steps](../../../../../../../external.html?link=https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps)
    3.  [JavaScript building
        blocks](../../../../../../../external.html?link=https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks)
    4.  [Introducing JavaScript
        objects](../../../../../../../external.html?link=https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects)
4.  JavaScript Guide
    1.  [Introduction](../Introduction.html)
    2.  [Grammar and types](../Grammar_and_Types-2.html)
    3.  [Control flow and error
        handling](../Control_flow_and_error_handling.html)
    4.  [Loops and iteration](../Loops_and_iteration.html)
    5.  [Functions](../Functions.html)
    6.  [Expressions and operators](../Expressions_and_Operators.html)
    7.  [Numbers and dates](../Numbers_and_dates.html)
    8.  [Text formatting](../Text_formatting.html)
    9.  [Regular expressions](../Regular_Expressions.html)
    10. [Indexed collections](../Indexed_collections.html)
    11. [Keyed collections](../Keyed_collections.html)
    12. [Working with objects](../Working_with_Objects.html)
    13. [Details of the object
        model](../Details_of_the_Object_Model.html)
    14. [Using promises](../Using_promises.html)
    15. [Iterators and generators](../Iterators_and_generators-2.html)
    16. [Meta programming](../Meta_programming.html)
    17. [JavaScript modules](../Modules.html)
5.  Intermediate
    1.  [Introducing JavaScript
        objects](../../../../../../../external.html?link=https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects)
    2.  [Client-side web
        APIs](../../../../../../../external.html?link=https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs)
    3.  [A re-introduction to
        JavaScript](../../A_re-introduction_to_JavaScript.html)
    4.  [JavaScript data structures](../../Data_structures.html)
    5.  [Equality comparisons and
        sameness](../../Equality_comparisons_and_sameness.html)
    6.  [Closures](../../Closures.html)
6.  Advanced
    1.  [Inheritance and the prototype
        chain](../../Inheritance_and_the_prototype_chain.html)
    2.  [Strict mode](../../Reference/Strict_mode.html)
    3.  [JavaScript typed arrays](../../Typed_arrays.html)
    4.  [Memory Management](../../Memory_Management.html)
    5.  [Concurrency model and Event Loop](../../EventLoop.html)
7.  **[References:](../../Reference.html)**
8.  Built-in objects
    1.  [[ ]{.icon-only-inline
        title="This is an experimental API that should not be used in production code."}]{.sidebar-icon}[AggregateError](../../Reference/Global_Objects/AggregateError.html "The AggregateError object represents an error when several errors need to be wrapped in a single error.")
    2.  [Array](../../Reference/Global_Objects/Array.html "The JavaScript Array class is a global object that is used in the construction of arrays; which are high-level, list-like objects.")
    3.  [ArrayBuffer](../../Reference/Global_Objects/ArrayBuffer.html "The ArrayBuffer object is used to represent a generic, fixed-length raw binary data buffer.")
    4.  [AsyncFunction](../../Reference/Global_Objects/AsyncFunction.html "The AsyncFunction constructor creates a new async function object. In JavaScript, every asynchronous function is actually an AsyncFunction object.")
    5.  [Atomics](../../Reference/Global_Objects/Atomics.html "The Atomics object provides atomic operations as static methods. They are used with SharedArrayBuffer objects.")
    6.  [BigInt](../../Reference/Global_Objects/BigInt.html "BigInt is a built-in object that provides a way to represent whole numbers larger than 253 - 1, which is the largest number JavaScript can reliably represent with the Number primitive and represented by the Number.MAX_SAFE_INTEGER constant. BigInt can be used for arbitrarily large integers.")
    7.  [BigInt64Array](../../Reference/Global_Objects/BigInt64Array.html "The BigInt64Array typed array represents an array of 64-bit signed integers in the platform byte order. If control over byte order is needed, use DataView instead. The contents are initialized to 0n. Once established, you can reference elements in the array using the object's methods, or by using standard array index syntax (that is, using bracket notation).")
    8.  [BigUint64Array](../../Reference/Global_Objects/BigUint64Array.html "The BigUint64Array typed array represents an array of 64-bit unsigned integers in the platform byte order. If control over byte order is needed, use DataView instead. The contents are initialized to 0n. Once established, you can reference elements in the array using the object's methods, or by using standard array index syntax (that is, using bracket notation).")
    9.  [Boolean](../../Reference/Global_Objects/Boolean.html "The Boolean object is an object wrapper for a boolean value.")
    10. [DataView](../../Reference/Global_Objects/DataView.html "The DataView view provides a low-level interface for reading and writing multiple number types in a binary ArrayBuffer, without having to care about the platform's endianness.")
    11. [Date](../../Reference/Global_Objects/Date.html "JavaScript Date objects represent a single moment in time in a platform-independent format.")
    12. [Error](../../Reference/Global_Objects/Error.html "Error objects are thrown when runtime errors occur. The Error object can also be used as a base object for user-defined exceptions. See below for standard built-in error types.")
    13. [EvalError](../../Reference/Global_Objects/EvalError.html "The EvalError object indicates an error regarding the global eval() function. This exception is not thrown by JavaScript anymore, however the EvalError object remains for compatibility.")
    14. [Float32Array](../../Reference/Global_Objects/Float32Array.html "The Float32Array typed array represents an array of 32-bit floating point numbers (corresponding to the C float data type) in the platform byte order. If control over byte order is needed, use DataView instead. The contents are initialized to 0. Once established, you can reference elements in the array using the object's methods, or using standard array index syntax (that is, using bracket notation).")
    15. [Float64Array](../../Reference/Global_Objects/Float64Array.html "The Float64Array typed array represents an array of 64-bit floating point numbers (corresponding to the C double data type) in the platform byte order. If control over byte order is needed, use DataView instead. The contents are initialized to 0. Once established, you can reference elements in the array using the object's methods, or using standard array index syntax (that is, using bracket notation).")
    16. [Function](../../Reference/Global_Objects/Function.html "Every JavaScript function is actually a Function object. This can be seen with the code (function(){}).constructor === Function, which returns true.")
    17. [Generator](../../Reference/Global_Objects/Generator.html "The Generator object is returned by a generator function and it conforms to both the iterable protocol and the iterator protocol.")
    18. [GeneratorFunction](../../Reference/Global_Objects/GeneratorFunction.html "The GeneratorFunction constructor creates a new generator function object. In JavaScript every generator function is actually a GeneratorFunction object.")
    19. [Infinity](../../Reference/Global_Objects/Infinity.html "The global property Infinity is a numeric value representing infinity.")
    20. [Int16Array](../../Reference/Global_Objects/Int16Array.html "The Int16Array typed array represents an array of twos-complement 16-bit signed integers in the platform byte order. If control over byte order is needed, use DataView instead. The contents are initialized to 0. Once established, you can reference elements in the array using the object's methods, or using standard array index syntax (that is, using bracket notation).")
    21. [Int32Array](../../Reference/Global_Objects/Int32Array.html "The Int32Array typed array represents an array of twos-complement 32-bit signed integers in the platform byte order. If control over byte order is needed, use DataView instead. The contents are initialized to 0. Once established, you can reference elements in the array using the object's methods, or using standard array index syntax (that is, using bracket notation).")
    22. [Int8Array](../../Reference/Global_Objects/Int8Array.html "The Int8Array typed array represents an array of twos-complement 8-bit signed integers. The contents are initialized to 0. Once established, you can reference elements in the array using the object's methods, or using standard array index syntax (that is, using bracket notation).")
    23. [InternalError](../../Reference/Global_Objects/InternalError.html "The InternalError object indicates an error that occurred internally in the JavaScript engine.")
    24. [Intl](../../Reference/Global_Objects/Intl.html "The Intl object is the namespace for the ECMAScript Internationalization API, which provides language sensitive string comparison, number formatting, and date and time formatting. The Intl object provides access to several constructors as well as functionality common to the internationalization constructors and other language sensitive functions.")
    25. [JSON](../../Reference/Global_Objects/JSON.html "The JSON object contains methods for parsing JavaScript Object Notation (JSON) and converting values to JSON. It can't be called or constructed, and aside from its two method properties, it has no interesting functionality of its own.")
    26. [Map](../../Reference/Global_Objects/Map.html "The Map object holds key-value pairs and remembers the original insertion order of the keys.")
    27. [Math](../../Reference/Global_Objects/Math.html "Math is a built-in object that has properties and methods for mathematical constants and functions. It’s not a function object.")
    28. [NaN](../../Reference/Global_Objects/NaN.html "The global NaN property is a value representing Not-A-Number.")
    29. [Number](../../Reference/Global_Objects/Number.html "The JavaScript Number type is double-precision 64-bit binary format IEEE 754 value. There is no integer type. In more recent implementations, JavaScript also supports integers with arbitrary precision using the BigInt type.")
    30. [Object](../../Reference/Global_Objects/Object.html "The Object class represents one of JavaScript's data types. It is used to store various keyed collections and more complex entities. Objects can be created using the Object() constructor or the object initializer / literal syntax.")
    31. [Promise](../../Reference/Global_Objects/Promise.html "The Promise object represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.")
    32. [Proxy](../../Reference/Global_Objects/Proxy.html "The Proxy object is used to define custom behavior for fundamental operations (e.g., property lookup, assignment, enumeration, function invocation, etc.).")
    33. [RangeError](../../Reference/Global_Objects/RangeError.html "The RangeError object indicates an error when a value is not in the set or range of allowed values.")
    34. [ReferenceError](../../Reference/Global_Objects/ReferenceError.html "The ReferenceError object represents an error when a non-existent variable is referenced.")
    35. [Reflect](../../Reference/Global_Objects/Reflect.html "Reflect is a built-in object that provides methods for interceptable JavaScript operations. The methods are the same as those of proxy handlers. Reflect is not a function object, so it's not constructible.")
    36. [RegExp](../../Reference/Global_Objects/RegExp.html "The RegExp object is used for matching text with a pattern.")
    37. [Set](../../Reference/Global_Objects/Set.html "The Set object lets you store unique values of any type, whether primitive values or object references.")
    38. [SharedArrayBuffer](../../Reference/Global_Objects/SharedArrayBuffer.html "The SharedArrayBuffer object is used to represent a generic, fixed-length raw binary data buffer, similar to the ArrayBuffer object, but in a way that they can be used to create views on shared memory. Unlike an ArrayBuffer, a SharedArrayBuffer cannot become detached.")
    39. [String](../../Reference/Global_Objects/String.html "The String global object is a constructor for strings or a sequence of characters.")
    40. [Symbol](../../Reference/Global_Objects/Symbol.html "The data type symbol is a primitive data type. The Symbol() function returns a value of type symbol, has static properties that expose several members of built-in objects, has static methods that expose the global symbol registry, and resembles a built-in object class, but is incomplete as a constructor because it does not support the syntax "new Symbol()".")
    41. [SyntaxError](../../Reference/Global_Objects/SyntaxError.html "The SyntaxError object represents an error when trying to interpret syntactically invalid code. It is thrown when the JavaScript engine encounters tokens or token order that does not conform to the syntax of the language when parsing code.")
    42. [TypeError](../../Reference/Global_Objects/TypeError.html "The TypeError object represents an error when an operation could not be performed, typically (but not exclusively) when a value is not of the expected type.")
    43. [TypedArray](../../Reference/Global_Objects/TypedArray.html "A TypedArray object describes an array-like view of an underlying binary data buffer. There is no global property named TypedArray, nor is there a directly visible TypedArray constructor.  Instead, there are a number of different global properties, whose values are typed array constructors for specific element types, listed below. On the following pages you will find common properties and methods that can be used with any typed array containing elements of any type.")
    44. [URIError](../../Reference/Global_Objects/URIError.html "The URIError object represents an error when a global URI handling function was used in a wrong way.")
    45. [Uint16Array](../../Reference/Global_Objects/Uint16Array.html "The Uint16Array typed array represents an array of 16-bit unsigned integers in the platform byte order. If control over byte order is needed, use DataView instead. The contents are initialized to 0. Once established, you can reference elements in the array using the object's methods, or using standard array index syntax (that is, using bracket notation).")
    46. [Uint32Array](../../Reference/Global_Objects/Uint32Array.html "The Uint32Array typed array represents an array of 32-bit unsigned integers in the platform byte order. If control over byte order is needed, use DataView instead. The contents are initialized to 0. Once established, you can reference elements in the array using the object's methods, or using standard array index syntax (that is, using bracket notation).")
    47. [Uint8Array](../../Reference/Global_Objects/Uint8Array.html "The Uint8Array typed array represents an array of 8-bit unsigned integers. The contents are initialized to 0. Once established, you can reference elements in the array using the object's methods, or using standard array index syntax (that is, using bracket notation).")
    48. [Uint8ClampedArray](../../Reference/Global_Objects/Uint8ClampedArray.html "The Uint8ClampedArray typed array represents an array of 8-bit unsigned integers clamped to 0-255; if you specified a value that is out of the range of [0,255], 0 or 255 will be set instead; if you specify a non-integer, the nearest integer will be set. The contents are initialized to 0. Once established, you can reference elements in the array using the object's methods, or using standard array index syntax (that is, using bracket notation).")
    49. [WeakMap](../../Reference/Global_Objects/WeakMap.html "The WeakMap object is a collection of key/value pairs in which the keys are weakly referenced. The keys must be objects and the values can be arbitrary values.")
    50. [WeakSet](../../Reference/Global_Objects/WeakSet.html "The WeakSet object lets you store weakly held objects in a collection.")
    51. [WebAssembly](../../Reference/Global_Objects/WebAssembly.html "The WebAssembly JavaScript object acts as the namespace for all WebAssembly-related functionality.")
    52. [decodeURI()](../../Reference/Global_Objects/decodeURI.html "The decodeURI() function decodes a Uniform Resource Identifier (URI) previously created by encodeURI() or by a similar routine.")
    53. [decodeURIComponent()](../../Reference/Global_Objects/decodeURIComponent.html "The decodeURIComponent() function decodes a Uniform Resource Identifier (URI) component previously created by encodeURIComponent or by a similar routine.")
    54. [encodeURI()](../../Reference/Global_Objects/encodeURI.html "The encodeURI() function encodes a URI by replacing each instance of certain characters by one, two, three, or four escape sequences representing the UTF-8 encoding of the character (will only be four escape sequences for characters composed of two "surrogate" characters).")
    55. [encodeURIComponent()](../../Reference/Global_Objects/encodeURIComponent.html "The encodeURIComponent() function encodes a URI by replacing each instance of certain characters by one, two, three, or four escape sequences representing the UTF-8 encoding of the character (will only be four escape sequences for characters composed of two "surrogate" characters).")
    56. [[ ]{.icon-only-inline
        title="This deprecated API should no longer be used, but will probably still work."}]{.sidebar-icon}[escape()](../../Reference/Global_Objects/escape.html "The escape() function computes a new string in which certain characters have been replaced by a hexadecimal escape sequence.")
    57. [eval()](../../Reference/Global_Objects/eval.html "The eval() function evaluates JavaScript code represented as a string.")
    58. [globalThis](../../Reference/Global_Objects/globalThis.html "The global globalThis property contains the global this value, which is akin to the global object.")
    59. [isFinite()](../../Reference/Global_Objects/isFinite.html "The global isFinite() function determines whether the passed value is a finite number. If  needed, the parameter is first converted to a number.")
    60. [isNaN()](../../Reference/Global_Objects/isNaN.html "The isNaN() function determines whether a value is NaN or not. Note, coercion inside the isNaN function has interesting rules; you may alternatively want to use Number.isNaN(), as defined in ECMAScript 2015.")
    61. [null](../../Reference/Global_Objects/null.html "The value null represents the intentional absence of any object value. It is one of JavaScript's primitive values and is treated as falsy for boolean operations.")
    62. [parseFloat()](../../Reference/Global_Objects/parseFloat.html "The parseFloat() function parses an argument (converting it to a string first if needed) and returns a floating point number.")
    63. [parseInt()](../../Reference/Global_Objects/parseInt.html "The parseInt() function parses a string argument and returns an integer of the specified radix (the base in mathematical numeral systems).")
    64. [undefined](../../Reference/Global_Objects/undefined.html "The global undefined property represents the primitive value undefined. It is one of JavaScript's primitive types.")
    65. [[ ]{.icon-only-inline
        title="This deprecated API should no longer be used, but will probably still work."}]{.sidebar-icon}[unescape()](../../Reference/Global_Objects/unescape.html "The unescape() function computes a new string in which hexadecimal escape sequences are replaced with the character that it represents. The escape sequences might be introduced by a function like escape. Usually, decodeURI or decodeURIComponent are preferred over unescape.")
    66. [[ ]{.icon-only-inline
        title="This API has not been standardized."}]{.sidebar-icon}[uneval()](../../Reference/Global_Objects/uneval.html "The uneval() function creates a string representation of the source code of an Object.")
9.  Expressions & operators
    1.  [Arithmetic
        operators](../../Reference/Operators.html "Arithmetic operators take numerical values (either literals or variables) as their operands and return a single numerical value. The standard arithmetic operators are addition (+), subtraction (-), multiplication (*), and division (/).")
    2.  [Assignment
        operators](../../Reference/Operators%23Assignment_operators.html "An assignment operator assigns a value to its left operand based on the value of its right operand.")
    3.  [Bitwise
        operators](../../Reference/Operators.html "Bitwise operators treat their operands as a sequence of 32 bits (zeroes and ones), rather than as decimal, hexadecimal, or octal numbers. For example, the decimal number nine has a binary representation of 1001. Bitwise operators perform their operations on such binary representations, but they return standard JavaScript numerical values.")
    4.  [Comma
        operator](../../Reference/Operators/Comma_Operator.html "The comma operator (,) evaluates each of its operands (from left to right) and returns the value of the last operand. This lets you create a compound expression in which multiple expressions are evaluated, with the compound expression's final value being the value of the rightmost of its member expressions. This is commonly used to provide multiple parameters to a for loop.")
    5.  [Comparison
        operators](../../Reference/Operators.html "JavaScript has both strict and type–converting comparisons. A strict comparison (e.g., ===) is only true if the operands are of the same type and the contents match. The more commonly-used abstract comparison (e.g. ==) converts the operands to the same type before making the comparison. For relational abstract comparisons (e.g., <=), the operands are first converted to primitives, then to the same type, before comparison.")
    6.  [Conditional (ternary)
        operator](../../Reference/Operators/Conditional_Operator.html "The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition is truthy followed by a colon (:), and finally the expression to execute if the condition is falsy.")
    7.  [Destructuring
        assignment](../../Reference/Operators/Destructuring_assignment.html "The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.")
    8.  [Function
        expression](../../Reference/Operators/function.html "The function keyword can be used to define a function inside an expression.")
    9.  [Grouping
        operator](../../Reference/Operators/Grouping.html "The grouping operator ( ) controls the precedence of evaluation in expressions.")
    10. [Logical
        operators](../../Reference/Operators.html "Logical operators are typically used with Boolean (logical) values. When they are, they return a Boolean value. However, the && and || operators actually return the value of one of the specified operands, so if these operators are used with non-Boolean values, they will return a non-Boolean value.")
    11. [Nullish coalescing
        operator](../../Reference/Operators/Nullish_coalescing_operator.html "The nullish coalescing operator (??) is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.")
    12. [Object
        initializer](../../Reference/Operators/Object_initializer.html "Objects can be initialized using new Object(), Object.create(), or using the literal notation (initializer notation). An object initializer is a comma-delimited list of zero or more pairs of property names and associated values of an object, enclosed in curly braces ({}).")
    13. [Operator
        precedence](../../Reference/Operators/Operator_Precedence.html "Operator precedence determines how operators are parsed concerning each other. Operators with higher precedence become the operands of operators with lower precedence.")
    14. [Optional
        chaining](../../Reference/Operators/Optional_chaining.html "The ?. operator functions similarly to the . chaining operator, except that instead of causing an error if a reference is nullish (null or undefined), the expression short-circuits with a return value of undefined.")
    15. [[ ]{.icon-only-inline
        title="This is an experimental API that should not be used in production code."}]{.sidebar-icon}[Pipeline
        operator](../../Reference/Operators/Pipeline_operator.html "The experimental pipeline operator |> (currently at stage 1) pipes the value of an expression into a function. This allows the creation of chained function calls in a readable manner. The result is syntactic sugar in which a function call with a single argument can be written like this:")
    16. [Property
        accessors](../../Reference/Operators/Property_Accessors.html "Property accessors provide access to an object's properties by using the dot notation or the bracket notation.")
    17. [Spread
        syntax](../../Reference/Operators/Spread_syntax.html "Spread syntax allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.")
    18. [async function
        expression](../../Reference/Operators/async_function.html "The async function keyword can be used to define async functions inside expressions.")
    19. [await](../../Reference/Operators/await.html "The await operator is used to wait for a Promise. It can only be used inside an async function.")
    20. [class
        expression](../../Reference/Operators/class.html "The class expression is one way to define a class in ECMAScript 2015. Similar to function expressions, class expressions can be named or unnamed. If named, the name of the class is local to the class body only. ")
    21. [delete
        operator](../../Reference/Operators/delete.html "The JavaScript delete operator removes a property from an object; if no more references to the same property are held, it is eventually released automatically.")
    22. [function\*
        expression](../../Reference/Operators/function_.html "The function* keyword can be used to define a generator function inside an expression.")
    23. [in
        operator](../../Reference/Operators/in.html "The in operator returns true if the specified property is in the specified object or its prototype chain.")
    24. [instanceof](../../Reference/Operators/instanceof.html "The instanceof operator tests whether the prototype property of a constructor appears anywhere in the prototype chain of an object.")
    25. [new
        operator](../../Reference/Operators/new.html "The new operator lets developers create an instance of a user-defined object type or of one of the built-in object types that has a constructor function.")
    26. [new.target](../../Reference/Operators/new-2.html "The new.target pseudo-property lets you detect whether a function or constructor was called using the new operator. In constructors and functions invoked using the new operator, new.target returns a reference to the constructor or function. In normal function calls, new.target is undefined.")
    27. [super](../../Reference/Operators/super.html "The super keyword is used to access and call functions on an object's parent.")
    28. [this](../../Reference/Operators/this.html "A function's this keyword behaves a little differently in JavaScript compared to other languages. It also has some differences between strict mode and non-strict mode.")
    29. [typeof](../../Reference/Operators/typeof.html "The typeof operator returns a string indicating the type of the unevaluated operand.")
    30. [void
        operator](../../Reference/Operators/void.html "The void operator evaluates the given expression and then returns undefined.")
    31. [yield](../../Reference/Operators/yield.html "The yield keyword is used to pause and resume a generator function (function* or legacy generator function).")
    32. [yield\*](../../Reference/Operators/yield_.html "The yield* expression is used to delegate to another generator or iterable object.")
10. Statements & declarations
    1.  [async
        function](../../Reference/Statements/async_function.html "An async function is a function declared with the async keyword. Async functions are instances of the AsyncFunction constructor, and the await keyword is permitted within them. The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains.")
    2.  [block](../../Reference/Statements/block.html "A block statement (or compound statement in other languages) is used to group zero or more statements. The block is delimited by a pair of braces (“curly brackets”) and may optionally be labelled:")
    3.  [break](../../Reference/Statements/break.html "The break statement terminates the current loop, switch, or label statement and transfers program control to the statement following the terminated statement.")
    4.  [class](../../Reference/Statements/class.html "The class declaration creates a new class with a given name using prototype-based inheritance.")
    5.  [const](../../Reference/Statements/const.html "Constants are block-scoped, much like variables defined using the let keyword. The value of a constant can't be changed through reassignment, and it can't be redeclared.")
    6.  [continue](../../Reference/Statements/continue.html "The continue statement terminates execution of the statements in the current iteration of the current or labeled loop, and continues execution of the loop with the next iteration.")
    7.  [debugger](../../Reference/Statements/debugger.html "The debugger statement invokes any available debugging functionality, such as setting a breakpoint. If no debugging functionality is available, this statement has no effect.")
    8.  [default](../../Reference/Statements/switch.html "The default keyword can be used in two situations in JavaScript: within a switch statement, or with an export statement.")
    9.  [do\...while](../../Reference/Statements/do...html "The do...while statement creates a loop that executes a specified statement until the test condition evaluates to false. The condition is evaluated after executing the statement, resulting in the specified statement executing at least once.")
    10. [empty](../../Reference/Statements/Empty.html "An empty statement is used to provide no statement, although the JavaScript syntax would expect one.")
    11. [export](../../Reference/Statements/export.html "The export statement is used when creating JavaScript modules to export live bindings to functions, objects, or primitive values from the module so they can be used by other programs with the import statement. Bindings that are exported can still be modified locally; when imported, although they can only be read by the importing module the value updates whenever it is updated by the exporting module.")
    12. [for](../../Reference/Statements/for.html "The for statement creates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by a statement (usually a block statement) to be executed in the loop.")
    13. [for
        await\...of](../../Reference/Statements/for-await...html "The for await...of statement creates a loop iterating over async iterable objects as well as on sync iterables, including: built-in String, Array, Array-like objects (e.g., arguments or NodeList), TypedArray, Map, Set, and user-defined async/sync iterables. It invokes a custom iteration hook with statements to be executed for the value of each distinct property of the object.")
    14. [for\...in](../../Reference/Statements/for...html "The for...in statement iterates over all enumerable properties of an object that are keyed by strings (ignoring ones keyed by Symbols), including inherited enumerable properties.")
    15. [for\...of](../../Reference/Statements/for..-2.html "The for...of statement creates a loop iterating over iterable objects, including: built-in String, Array, array-like objects (e.g., arguments or NodeList), TypedArray, Map, Set, and user-defined iterables. It invokes a custom iteration hook with statements to be executed for the value of each distinct property of the object.")
    16. [function
        declaration](../../Reference/Statements/function.html "The function declaration (function statement) defines a function with the specified parameters.")
    17. [function\*](../../Reference/Statements/function_.html "The function* declaration (function keyword followed by an asterisk) defines a generator function, which returns a Generator object.")
    18. [if\...else](../../Reference/Statements/if...html "The if statement executes a statement if a specified condition is truthy. If the condition is falsy, another statement can be executed.")
    19. [import](../../Reference/Statements/import.html "The static import statement is used to import read only live bindings which are exported by another module. ")
    20. [import.meta](../../Reference/Statements/import-2.html "The import.meta object exposes context-specific metadata to a JavaScript module. It contains information about the module, like the module's URL.")
    21. [label](../../Reference/Statements/label.html "The labeled statement can be used with break or continue statements. It is prefixing a statement with an identifier which you can refer to.")
    22. [let](../../Reference/Statements/let.html "The let statement declares a block-scoped local variable, optionally initializing it to a value.")
    23. [return](../../Reference/Statements/return.html "The return statement ends function execution and specifies a value to be returned to the function caller.")
    24. [switch](../../Reference/Statements/switch.html "The switch statement evaluates an expression, matching the expression's value to a case clause, and executes statements associated with that case, as well as statements in cases that follow the matching case.")
    25. [throw](../../Reference/Statements/throw.html "The throw statement throws a user-defined exception. Execution of the current function will stop (the statements after throw won't be executed), and control will be passed to the first catch block in the call stack. If no catch block exists among caller functions, the program will terminate.")
    26. [try\...catch](../../Reference/Statements/try...html "The try...catch statement marks a block of statements to try and specifies a response should an exception be thrown.")
    27. [var](../../Reference/Statements/var.html "The var statement declares a function-scoped or globally-scoped variable, optionally initializing it to a value.")
    28. [while](../../Reference/Statements/while.html "The while statement creates a loop that executes a specified statement as long as the test condition evaluates to true. The condition is evaluated before executing the statement.")
    29. [[ ]{.icon-only-inline
        title="This deprecated API should no longer be used, but will probably still work."}]{.sidebar-icon}[with](../../Reference/Statements/with.html "The with statement extends the scope chain for a statement.")
11. Functions
    1.  [Arrow function
        expressions](../../Reference/Functions/Arrow_functions.html "An arrow function expression is a syntactically compact alternative to a regular function expression, although without its own bindings to the this, arguments, super, or new.target keywords. Arrow function expressions are ill suited as methods, and they cannot be used as constructors.")
    2.  [Default
        parameters](../../Reference/Functions/Default_parameters.html "Default function parameters allow named parameters to be initialized with default values if no value or undefined is passed.")
    3.  [Method
        definitions](../../Reference/Functions/Method_definitions.html "Starting with ECMAScript 2015, a shorter syntax for method definitions on objects initializers is introduced. It is a shorthand for a function assigned to the method's name.")
    4.  [Rest
        parameters](../../Reference/Functions/rest_parameters.html "The rest parameter syntax allows us to represent an indefinite number of arguments as an array.")
    5.  [The arguments
        object](../../Reference/Functions/arguments.html "arguments is an Array-like object accessible inside functions that contains the values of the arguments passed to that function.")
    6.  [getter](../../Reference/Functions/get.html "The get syntax binds an object property to a function that will be called when that property is looked up.")
    7.  [setter](../../Reference/Functions/set.html "The set syntax binds an object property to a function to be called when there is an attempt to set that property.")
12. Classes
    1.  [Class
        fields](../../Reference/Classes/Public_class_fields.html "Both static and instance public fields are writable, enumerable, and configurable properties. As such, unlike their private counterparts, they participate in prototype inheritance.")
    2.  [constructor](../../Reference/Classes/constructor.html "The constructor method is a special method for creating and initializing an object created within a class.")
    3.  [extends](../../Reference/Classes/extends.html "The extends keyword is used in class declarations or class expressions to create a class which is a child of another class.")
    4.  [static](../../Reference/Classes/static.html "The static keyword defines a static method for a class. Static methods aren't called on instances of the class. Instead, they're called on the class itself.")
13. Errors
    1.  [Error: Permission denied to access property
        \"x\"](../../Reference/Errors/Property_access_denied.html "The JavaScript exception "Permission denied to access property" occurs when there was an attempt to access an object for which you have no permission.")
    2.  [InternalError: too much
        recursion](../../Reference/Errors/Too_much_recursion.html "The JavaScript exception "too much recursion" or "Maximum call stack size exceeded" occurs when there are too many function calls, or a function is missing a base case.")
    3.  [RangeError: argument is not a valid code
        point](../../Reference/Errors/Not_a_codepoint.html "The JavaScript exception "Invalid code point" occurs when NaN values, negative Integers (-1), non-Integers (5.4), or values larger than 0x10FFFF (1114111) are used with String.fromCodePoint().")
    4.  [RangeError: invalid array
        length](../../Reference/Errors/Invalid_array_length.html "The JavaScript exception "Invalid array length" occurs when creating an Array or an ArrayBuffer which has a length which is either negative or larger or equal to 232, or when setting the Array.length property to a value which is either negative or larger or equal to 232.")
    5.  [RangeError: invalid
        date](../../Reference/Errors/Invalid_date.html "The JavaScript exception "invalid date" occurs when a string leading to an invalid date has been provided to Date or Date.parse().")
    6.  [RangeError: precision is out of
        range](../../Reference/Errors/Precision_range.html "The JavaScript exception "precision is out of range" occurs when a number that's outside of the range of 0 and 20 (or 21) was passed into toFixed or toPrecision.")
    7.  [RangeError: radix must be an
        integer](../../Reference/Errors/Bad_radix.html "The JavaScript exception "radix must be an integer at least 2 and no greater than 36" occurs when the optional radix parameter of the Number.prototype.toString() or the BigInt.prototype.toString() method was specified and is not between 2 and 36.")
    8.  [RangeError: repeat count must be less than
        infinity](../../Reference/Errors/Resulting_string_too_large.html "The JavaScript exception "repeat count must be less than infinity" occurs when the String.prototype.repeat() method is used with a count argument that is infinity.")
    9.  [RangeError: repeat count must be
        non-negative](../../Reference/Errors/Negative_repetition_count.html "The JavaScript exception "repeat count must be non-negative" occurs when the String.prototype.repeat() method is used with a count argument that is a negative number.")
    10. [ReferenceError: \"x\" is not
        defined](../../Reference/Errors/Not_defined.html "The JavaScript exception "variable is not defined" occurs when there is a non-existent variable referenced somewhere.")
    11. [ReferenceError: assignment to undeclared variable
        \"x\"](../../Reference/Errors/Undeclared_var.html "The JavaScript strict mode-only exception "Assignment to undeclated variable" occurs when the value has been assigned to an undeclared variable.")
    12. [ReferenceError: can\'t access lexical declaration\`X\' before
        initialization](../../Reference/Errors/Cant_access_lexical_declaration_before_init.html "The JavaScript exception "can't access lexical declaration `variable' before initialization" occurs when a lexical variable was accessed before it was initialized. This happens within any block statement, when let or const declarations are accessed before they are defined.")
    13. [ReferenceError: deprecated caller or arguments
        usage](../../Reference/Errors/Deprecated_caller_or_arguments_usage.html "The JavaScript strict mode-only exception "deprecated caller or arguments usage" occurs when the deprecated Function.caller or Function.arguments properties are used.")
    14. [ReferenceError: invalid assignment left-hand
        side](../../Reference/Errors/Invalid_assignment_left-hand_side.html "The JavaScript exception "invalid assignment left-hand side" occurs when there was an unexpected assignment somewhere. For example, a single "=" sign was used instead of "==" or "===".")
    15. [ReferenceError: reference to undefined property
        \"x\"](../../Reference/Errors/Undefined_prop.html "The JavaScript warning "reference to undefined property" occurs when a script attempted to access an object property which doesn't exist.")
    16. [SyntaxError: \"0\"-prefixed octal literals and octal escape
        seq. are
        deprecated](../../Reference/Errors/Deprecated_octal.html "The JavaScript strict mode-only exception "0-prefixed octal literals and octal escape sequences are deprecated; for octal literals use the "0o" prefix instead" occurs when deprecated octal literals and octal escape sequences are used.")
    17. [SyntaxError: \"use strict\" not allowed in function with
        non-simple
        parameters](../../Reference/Errors/Strict_Non_Simple_Params.html "The JavaScript exception "'use strict' not allowed in function" occurs when a "use strict" directive is used at the top of a function with default parameters, rest parameters, or destructuring parameters.")
    18. [SyntaxError: \"x\" is a reserved
        identifier](../../Reference/Errors/Reserved_identifier.html "The JavaScript exception "variable is a reserved identifier" occurs when reserved keywords are used as identifiers.")
    19. [SyntaxError: JSON.parse: bad
        parsing](../../Reference/Errors/JSON_bad_parse.html "The JavaScript exceptions thrown by JSON.parse() occur when string failed to be parsed as JSON.")
    20. [SyntaxError: Malformed formal
        parameter](../../Reference/Errors/Malformed_formal_parameter.html "The JavaScript exception "malformed formal parameter" occurs when the argument list of a Function() constructor call is invalid somehow.")
    21. [SyntaxError: Unexpected
        token](../../Reference/Errors/Unexpected_token.html "The JavaScript exceptions "unexpected token" occur when a specific language construct was expected, but something else was provided. This might be a simple typo.")
    22. [SyntaxError: Using //@ to indicate sourceURL pragmas is
        deprecated. Use //\#
        instead](../../Reference/Errors/Deprecated_source_map_pragma.html "The JavaScript warning "Using //@ to indicate sourceURL pragmas is deprecated. Use //# instead" occurs when there is a deprecated source map syntax in a JavaScript source.")
    23. [SyntaxError: a declaration in the head of a for-of loop can\'t
        have an
        initializer](../../Reference/Errors/Invalid_for-of_initializer.html "The JavaScript exception "a declaration in the head of a for-of loop can't have an initializer" occurs when the head of a for...of loop contains an initializer expression such as |for (var i = 0 of iterable)|. This is not allowed in for-of loops.")
    24. [SyntaxError: applying the \'delete\' operator to an unqualified
        name is
        deprecated](../../Reference/Errors/Delete_in_strict_mode.html "The JavaScript strict mode-only exception "applying the 'delete' operator to an unqualified name is deprecated" occurs when variables are attempted to be deleted using the delete operator.")
    25. [SyntaxError: for-in loop head declarations may not have
        initializers](../../Reference/Errors/Invalid_for-in_initializer.html "The JavaScript strict mode-only exception "for-in loop head declarations may not have initializers" occurs when the head of a for...in contains an initializer expression, such as |for (var i = 0 in obj)|. This is not allowed in for-of loops in strict mode.")
    26. [SyntaxError: function statement requires a
        name](../../Reference/Errors/Unnamed_function_statement.html "The JavaScript exception "function statement requires a name" occurs when there is a function statement in the code that requires a name.")
    27. [SyntaxError: identifier starts immediately after numeric
        literal](../../Reference/Errors/Identifier_after_number.html "The JavaScript exception "identifier starts immediately after numeric literal" occurs when an identifier started with a digit. Identifiers can only start with a letter, underscore (_), or dollar sign ($).")
    28. [SyntaxError: illegal
        character](../../Reference/Errors/Illegal_character.html "The JavaScript exception "illegal character" occurs when there is an invalid or unexpected token that doesn't belong at this position in the code.")
    29. [SyntaxError: invalid regular expression flag
        \"x\"](../../Reference/Errors/Bad_regexp_flag.html "The JavaScript exception "invalid regular expression flag" occurs when the flags, defined after the second slash in regular expression literal, are not one of g, i, m, u, or y.")
    30. [SyntaxError: missing ) after argument
        list](../../Reference/Errors/Missing_parenthesis_after_argument_list.html "The JavaScript exception "missing ) after argument list" occurs when there is an error with how a function is called. This might be a typo, a missing operator, or an unescaped string.")
    31. [SyntaxError: missing ) after
        condition](../../Reference/Errors/Missing_parenthesis_after_condition.html "The JavaScript exception "missing ) after condition" occurs when there is an error with how an if condition is written. It must appear in parenthesis after the if keyword.")
    32. [SyntaxError: missing : after property
        id](../../Reference/Errors/Missing_colon_after_property_id.html "The JavaScript exception "missing : after property id" occurs when objects are created using the object initializer syntax. A colon (:) separates keys and values for the object's properties. Somehow, this colon is missing or misplaced.")
    33. [SyntaxError: missing ; before
        statement](../../Reference/Errors/Missing_semicolon_before_statement.html "The JavaScript exception "missing ; before statement" occurs when there is a semicolon (;) missing somewhere and can't be added by automatic semicolon insertion (ASI). You need to provide a semicolon, so that JavaScript can parse the source code correctly.")
    34. [SyntaxError: missing = in const
        declaration](../../Reference/Errors/Missing_initializer_in_const.html "The JavaScript exception "missing = in const declaration" occurs when a const declaration was not given a value in the same statement (like const RED_FLAG;). You need to provide one (const RED_FLAG = '#ff0').")
    35. [SyntaxError: missing \] after element
        list](../../Reference/Errors/Missing_bracket_after_list.html "The JavaScript exception "missing ] after element list" occurs when there is an error with the array initializer syntax somewhere. Likely there is a closing bracket ("]") or a comma (",") missing.")
    36. [SyntaxError: missing formal
        parameter](../../Reference/Errors/Missing_formal_parameter.html "The JavaScript exception "missing formal parameter" occurs when your function declaration is missing valid parameters.")
    37. [SyntaxError: missing name after .
        operator](../../Reference/Errors/Missing_name_after_dot_operator.html "The JavaScript exception "missing name after . operator" occurs when there is a problem with how the dot operator (.) is used for property access.")
    38. [SyntaxError: missing variable
        name](../../Reference/Errors/No_variable_name.html "The JavaScript exception "missing variable name" occurs way too often as naming things is so hard. Or maybe a comma is wrong. Check for typos!")
    39. [SyntaxError: missing } after function
        body](../../Reference/Errors/Missing_curly_after_function_body.html "The JavaScript exception "missing } after function body" occurs when there is a syntax mistake when creating a function somewhere. Check if any closing curly brackets or parenthesis are in the correct order.")
    40. [SyntaxError: missing } after property
        list](../../Reference/Errors/Missing_curly_after_property_list.html "The JavaScript exception "missing } after property list" occurs when there is a mistake in the object initializer syntax somewhere. Might be in fact a missing curly bracket, but could also be a missing comma.")
    41. [SyntaxError: redeclaration of formal parameter
        \"x\"](../../Reference/Errors/Redeclared_parameter.html "The JavaScript exception "redeclaration of formal parameter" occurs when the same variable name occurs as a function parameter and is then redeclared using a let assignment in a function body again.")
    42. [SyntaxError: return not in
        function](../../Reference/Errors/Bad_return_or_yield.html "The JavaScript exception "return (or yield) not in function" occurs when a return or yield statement is called outside of a function.")
    43. [SyntaxError: test for equality (==) mistyped as assignment
        (=)?](../../Reference/Errors/Equal_as_assign.html "The JavaScript warning "test for equality (==) mistyped as assignment (=)?" occurs when there was an assignment (=) when you would normally expect a test for equality (==).")
    44. [SyntaxError: unterminated string
        literal](../../Reference/Errors/Unterminated_string_literal.html "The JavaScript error "unterminated string literal" occurs when there is an unterminated String somewhere. String literals must be enclosed by single (') or double (") quotes.")
    45. [TypeError: \"x\" has no
        properties](../../Reference/Errors/No_properties.html "The JavaScript exception "null (or undefined) has no properties" occurs when you attempt to access properties of null and undefined. They don't have any.")
    46. [TypeError: \"x\" is (not)
        \"y\"](../../Reference/Errors/Unexpected_type.html "The JavaScript exception "x is (not) y" occurs when there was an unexpected type. Oftentimes, unexpected undefined or null values.")
    47. [TypeError: \"x\" is not a
        constructor](../../Reference/Errors/Not_a_constructor.html "The JavaScript exception "is not a constructor" occurs when there was an attempt to use an object or a variable as a constructor, but that object or variable is not a constructor.")
    48. [TypeError: \"x\" is not a
        function](../../Reference/Errors/Not_a_function.html "The JavaScript exception "is not a function" occurs when there was an attempt to call a value from a function, but the value is not actually a function.")
    49. [TypeError: \"x\" is not a non-null
        object](../../Reference/Errors/No_non-null_object.html "The JavaScript exception "is not a non-null object" occurs when an object is expected somewhere and wasn't provided. null is not an object and won't work.")
    50. [TypeError: \"x\" is
        read-only](../../Reference/Errors/Read-only.html "The JavaScript strict mode-only exception "is read-only" occurs when a global variable or object property that was assigned to is a read-only property.")
    51. [TypeError: \'x\' is not
        iterable](../../Reference/Errors/is_not_iterable.html "The JavaScript exception "is not iterable" occurs when the value which is given as the right hand-side of for…of or as argument of a function such as Promise.all or TypedArray.from, is not an iterable object.")
    52. [TypeError: More arguments
        needed](../../Reference/Errors/More_arguments_needed.html "The JavaScript exception "more arguments needed" occurs when there is an error with how a function is called. More arguments need to be provided.")
    53. [TypeError: Reduce of empty array with no initial
        value](../../Reference/Errors/Reduce_of_empty_array_with_no_initial_value.html "The JavaScript exception "reduce of empty array with no initial value" occurs when a reduce function is used.")
    54. [TypeError: X.prototype.y called on incompatible
        type](../../Reference/Errors/Called_on_incompatible_type.html "The JavaScript exception "called on incompatible target (or object)" occurs when a function (on a given object), is called with a this not corresponding to the type expected by the function.")
    55. [TypeError: can\'t access dead
        object](../../Reference/Errors/Dead_object.html "The JavaScript exception "can't access dead object" occurs when Firefox disallows add-ons to keep strong references to DOM objects after their parent document has been destroyed to improve in memory usage and to prevent memory leaks.")
    56. [TypeError: can\'t access property \"x\" of
        \"y\"](../../Reference/Errors/Cant_access_property.html "The JavaScript exception "can't access property" occurs when property access was operated on undefined or null values.")
    57. [TypeError: can\'t assign to property \"x\" on \"y\": not an
        object](../../Reference/Errors/Cant_assign_to_property.html "The JavaScript strict mode exception "can't assign to property" occurs when attempting to create a property on primitive value such as a symbol, a string, a number or a boolean. Primitive values cannot hold any property.")
    58. [TypeError: can\'t define property \"x\": \"obj\" is not
        extensible](../../Reference/Errors/Cant_define_property_object_not_extensible.html "The JavaScript exception "can't define property "x": "obj" is not extensible" occurs when Object.preventExtensions() marked an object as no longer extensible, so that it will never have properties beyond the ones it had at the time it was marked as non-extensible.")
    59. [TypeError: can\'t delete non-configurable array
        element](../../Reference/Errors/Non_configurable_array_element.html "The JavaScript exception "can't delete non-configurable array element" occurs when it was attempted to shorten the length of an array, but one of the array's elements is non-configurable.")
    60. [TypeError: can\'t redefine non-configurable property
        \"x\"](../../Reference/Errors/Cant_redefine_property.html "The JavaScript exception "can't redefine non-configurable property" occurs when it was attempted to redefine a property, but that property is non-configurable.")
    61. [TypeError: cannot use \'in\' operator to search for \'x\' in
        \'y\'](../../Reference/Errors/in_operator_no_object.html "The JavaScript exception "right-hand side of 'in' should be an object" occurs when the in operator was used to search in strings, or in numbers, or other primitive types. It can only be used to check if a property is in an object.")
    62. [TypeError: cyclic object
        value](../../Reference/Errors/Cyclic_object_value.html "The JavaScript exception "cyclic object value" occurs when object references were found in JSON. JSON.stringify() doesn't try to solve them and fails accordingly.")
    63. [TypeError: invalid \'instanceof\' operand
        \'x\'](../../Reference/Errors/invalid_right_hand_side_instanceof_operand.html "The JavaScript exception "invalid 'instanceof' operand" occurs when the right hand side operands of the instanceof operator isn't used with a constructor object, i.e. an object which has a prototype property and is callable.")
    64. [TypeError: invalid Array.prototype.sort
        argument](../../Reference/Errors/Array_sort_argument.html "The JavaScript exception "invalid Array.prototype.sort argument" occurs when the argument of Array.prototype.sort() isn't either undefined or a function which compares its operands.")
    65. [TypeError: invalid
        arguments](../../Reference/Errors/Typed_array_invalid_arguments.html "The JavaScript exception "invalid arguments" occurs when typed array constructors are provided with a wrong argument.")
    66. [TypeError: invalid assignment to const
        \"x\"](../../Reference/Errors/Invalid_const_assignment.html "The JavaScript exception "invalid assignment to const" occurs when it was attempted to alter a constant value. JavaScript const declarations can't be re-assigned or redeclared.")
    67. [TypeError: property \"x\" is non-configurable and can\'t be
        deleted](../../Reference/Errors/Cant_delete.html "The JavaScript exception "property is non-configurable and can't be deleted" occurs when it was attempted to delete a property, but that property is non-configurable.")
    68. [TypeError: setting getter-only property
        \"x\"](../../Reference/Errors/Getter_only.html "The JavaScript strict mode-only exception "setting getter-only property" occurs when there is an attempt to set a new value to a property for which only a getter is specified.")
    69. [TypeError: variable \"x\" redeclares
        argument](../../Reference/Errors/Var_hides_argument.html "The JavaScript strict mode-only exception "variable redeclares argument" occurs when the same variable name occurs as a function parameter and is then redeclared using a var assignment in a function body again.")
    70. [URIError: malformed URI
        sequence](../../Reference/Errors/Malformed_URI.html "The JavaScript exception "malformed URI sequence" occurs when URI encoding or decoding wasn't successful.")
    71. [Warning: -file- is being assigned a //\# sourceMappingURL, but
        already has
        one](../../Reference/Errors/Already_has_pragma.html "The JavaScript warning "-file- is being assigned a //# sourceMappingURL, but already has one." occurs when a source map has been specified more than once for a given JavaScript source.")
    72. [Warning: 08/09 is not a legal ECMA-262 octal
        constant](../../Reference/Errors/Bad_octal.html "The JavaScript warning "08 (or 09) is not a legal ECMA-262 octal constant" occurs when 08 or 09 number literals are used. They can't be interpreted as an octal number.")
    73. [Warning: Date.prototype.toLocaleFormat is
        deprecated](../../Reference/Errors/Deprecated_toLocaleFormat.html "The JavaScript warning "Date.prototype.toLocaleFormat is deprecated; consider using Intl.DateTimeFormat instead" occurs when the non-standard Date.prototype.toLocaleFormat method is used.")
    74. [Warning: JavaScript 1.6\'s for-each-in loops are
        deprecated](../../Reference/Errors/For-each-in_loops_are_deprecated.html "The JavaScript warning "JavaScript 1.6's for-each-in loops are deprecated; consider using ES6 for-of instead" occurs when a for each (variable in obj) statement is used.")
    75. [Warning: String.x is deprecated; use String.prototype.x
        instead](../../Reference/Errors/Deprecated_String_generics.html "The JavaScript warning about string generics occurs in Firefox versions prior to 68. String generics have been removed starting with Firefox 68.")
    76. [Warning: expression closures are
        deprecated](../../Reference/Errors/Deprecated_expression_closures.html "The JavaScript warning "expression closures are deprecated" occurs when the non-standard expression closure syntax (shorthand function syntax) is used.")
    77. [Warning: unreachable code after return
        statement](../../Reference/Errors/Stmt_after_return.html "The JavaScript warning "unreachable code after return statement" occurs when using an expression after a return statement, or when using a semicolon-less return statement but including an expression directly after.")
14. Misc
    1.  [JavaScript technologies
        overview](../../JavaScript_technologies_overview.html)
    2.  [Lexical grammar](../../Reference/Lexical_grammar.html)
    3.  [JavaScript data structures](../../Data_structures.html)
    4.  [Enumerability and ownership of
        properties](../../Enumerability_and_ownership_of_properties.html)
    5.  [Iteration protocols](../../Reference/Iteration_protocols.html)
    6.  [Strict mode](../../Reference/Strict_mode.html)
    7.  [Transitioning to strict
        mode](../../Reference/Strict_mode/Transitioning_to_strict_mode.html)
    8.  [Template literals](../../Reference/Template_literals.html)
    9.  [Deprecated
        features](../../Reference/Deprecated_and_obsolete_features.html)

</div>
:::
:::
:::
:::

::: {.section .newsletter-container}
::: {#newsletter-form-container .newsletter}
::: {.section .newsletter-head}
Learn the best of web development {#learn-the-best-of-web-development .newsletter-teaser}
---------------------------------

Get the latest and greatest from MDN delivered straight to your inbox.

The newsletter is offered in English only at the moment.
:::

::: {.form-group .newsletter-group-email}
E-mail
:::

::: {#newsletter-privacy .form-group .form-group-agree .newsletter-group-privacy aria-hidden="false"}
I'm okay with Mozilla handling my info as explained in this [Privacy
Policy](../../../../../../../external.html?link=https://www.mozilla.org/privacy/).
:::

::: {.newsletter-group-submit}
Sign up now
:::

Hide Newsletter Sign-up
:::
:::

::: {.content-container}
[MDN Web
Docs](../../../../../../../external.html?link=https://developer.mozilla.org/en-US/){.nav-footer-logo}

-   [Web
    Technologies](../../../../../../../external.html?link=https://developer.mozilla.org/en-US/docs/Web)
-   [Learn Web
    Development](../../../../../../../external.html?link=https://developer.mozilla.org/en-US/docs/Learn)
-   [About
    MDN](../../../../../../../external.html?link=https://developer.mozilla.org/en-US/docs/MDN/About)
-   [Feedback](../../../../../../../external.html?link=https://developer.mozilla.org/en-US/docs/MDN/Feedback)

<!-- -->

-   [About](../../../../../../../external.html?link=https://www.mozilla.org/about/)
-   [MDN Web Docs
    Store](../../../../../../../external.html?link=https://shop.spreadshirt.com/mdn-store/)
-   [Contact
    Us](../../../../../../../external.html?link=https://www.mozilla.org/contact/)
-   [Firefox](../../../../../../../external.html?link=https://www.mozilla.org/firefox/?utm_source=developer.mozilla.org&utm_campaign=footer&utm_medium=referral)

::: {.social .social-mdn}
#### MDN

-   -   
:::

::: {.social .social-moz}
#### Mozilla

-   -   
:::

© 2005-2020 Mozilla and individual contributors. Content is available
under [these
licenses](../../../../../../../external.html?link=https://developer.mozilla.org/docs/MDN/About#Copyrights_and_licenses).

-   [Terms](../../../../../../../external.html?link=https://www.mozilla.org/about/legal/terms/mozilla)
-   [Privacy](../../../../../../../external.html?link=https://www.mozilla.org/privacy/websites/)
-   [Cookies](../../../../../../../external.html?link=https://www.mozilla.org/privacy/websites/#cookies)
:::
:::

::: {#auth-modal .modal .hidden}
::: {.section .auth-providers tabindex="-1" role="dialog" aria-modal="true" aria-labelledby="modal-main-heading"}
Sign In {#modal-main-heading}
-------

Sign in to enjoy the benefits of an MDN account. If you haven't already
created an account, you will be prompted to do so after signing in.

::: {.auth-button-container}
[Sign in with
Github](../../../../../../../external.html?link=https://developer.mozilla.org/users/github/login/?next=%2Fen-US%2Fdocs%2FWeb%2FJavaScript%2FGuide%2FRegular_Expressions%2FAssertions){.github-auth}
[Sign in with
Google](../../../../../../../external.html?link=https://developer.mozilla.org/users/google/login/?next=%2Fen-US%2Fdocs%2FWeb%2FJavaScript%2FGuide%2FRegular_Expressions%2FAssertions){.google-auth}
:::

Close modal
:::
:::
