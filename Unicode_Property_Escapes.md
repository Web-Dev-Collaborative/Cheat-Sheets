---
description: |
    Unicode property escapes Regular Expressions allows for matching
    characters based on their Unicode properties. A character is described
    by several properties which are either binary (\"boolean-like\") or
    non-binary. For instance, unicode property escapes can be used to match
    emojis, punctuations, letters (even letters from specific languages or
    scripts), etc.
lang: en
robots: 'index, follow'
title: 'Unicode property escapes - JavaScript \| MDN'
twitter:card: summary
twitter:creator: '\@MozDevNet'
twitter:description: |
    Unicode property escapes Regular Expressions allows for matching
    characters based on their Unicode properties. A character is described
    by several properties which are either binary (\"boolean-like\") or
    non-binary. For instance, unicode property escapes can be used to match
    emojis, punctuations, letters (even letters from specific languages or
    scripts), etc.
twitter:image: 'https://developer.mozilla.org/static/img/opengraph-logo.72382e605ce3.png'
twitter:site: '\@MozDevNet'
twitter:title: Unicode property escapes
twitter:url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular\_Expressions/Unicode\_Property\_Escapes'
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
        🌐](../../../../../../../external.html?link=https://github.com/mdn/sprints/issues/new?template=issue-template.md&projects=mdn/sprints/2&labels=user-report&title=/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Unicode_Property_Escapes)
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
5.  [[Unicode property escapes]{property="name"
    aria-current="page"}](Unicode_Property_Escapes.html){.crumb-current-page}

::: {.dropdown-container .language-menu}
English[▼]{.dropdown-arrow-down aria-hidden="true"}

-   [Español](../../../../../../../external.html?link=https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions/Escapes_de_propiedades_Unicode "Spanish")
-   [Français](../../../../../../../external.html?link=https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Expressions_régulières/Échappement_propriétés_Unicode "French")
-   [中文
    (简体)](../../../../../../../external.html?link=https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions/Unicode_Property_Escapes "Chinese (Simplified)")
-   [Add a
    translation](../../../../../../../external.html?link=https://wiki.developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Unicode_Property_Escapes$locales){#translations-add}
:::
:::
:::

::: {.wiki-left-present .content-layout}
::: {.section .document-toc}
On this Page
------------

Jump to section

-   [Syntax](#Syntax)
-   [Rationale](#Rationale)
-   [Examples](#Examples)
-   [Specifications](#Specifications)
-   [Browser compatibility](#Browser_compatibility)
-   [See also](#See_also)
-   [Related topics](#sidebar-quicklinks)
:::

::: {#content .article .text-content}
**Unicode property escapes** [Regular
Expressions](../Regular_Expressions.html) allows for matching characters
based on their Unicode properties. A character is described by several
properties which are either binary (\"boolean-like\") or non-binary. For
instance, unicode property escapes can be used to match emojis,
punctuations, letters (even letters from specific languages or scripts),
etc.

<div>

</div>

::: {.blockIndicator .note}
**Note:** For Unicode property escapes to work, a regular expression
must use [the `u`
flag](../Regular_Expressions.html#Advanced_searching_with_flags) which
indicates a string must be considered as a series of Unicode code
points. See also `RegExp.prototype.unicode`.
:::

::: {.blockIndicator .note}
**Note:** Some Unicode properties encompasses much more characters than
some [character classes](Character_Classes.html) (such as `\w` which
matches only latin letters, `a` to `z`) but the latter is better
supported among browsers (as of January 2020).
:::

Syntax {#Syntax}
------

::: {.hidden}
The following section is also duplicated on [this
cheatsheet](Cheatsheet.html). Do not forget to edit it as well, thanks!
:::

``` {.brush: .js .notranslate}
// Non-binary values
\p{UnicodePropertyValue}
\p{UnicodePropertyName=UnicodePropertyValue}

// Binary and non-binary values
\p{UnicodeBinaryPropertyName}

// Negation: \P is negated \p
\P{UnicodePropertyValue}
\P{UnicodeBinaryPropertyName}
```

-   [General\_Category](../../../../../../../external.html?link=https://unicode.org/reports/tr18/#General_Category_Property){.external}
    (`gc`)
-   [Script](../../../../../../../external.html?link=https://unicode.org/reports/tr24/#Script){.external} (`sc`)
-   [Script\_Extensions](../../../../../../../external.html?link=https://unicode.org/reports/tr24/#Script_Extensions){.external} (`scx`)

See also
[PropertyValueAliases.txt[ ]{style="display: none;"}](../../../../../../../external.html?link=https://www.unicode.org/Public/UCD/latest/ucd/PropertyValueAliases.txt){.external}

UnicodeBinaryPropertyName
:   The name of a [binary
    property](../../../../../../../external.html?link=https://tc39.es/ecma262/#table-binary-unicode-properties){.external}.
    E.g.: `ASCII`, `Alpha`, `Math`,
    `Diacritic`, `Emoji`, `Hex_Digit`, `Math`, `White_space`, etc. See
    [Unicode
    Data PropList.txt](../../../../../../../external.html?link=https://www.unicode.org/Public/UCD/latest/ucd/PropList.txt){.external}
    for more info.

UnicodePropertyName
:   The name of a
    [non-binary](../../../../../../../external.html?link=https://tc39.es/ecma262/#table-nonbinary-unicode-properties){.external}
    property:

UnicodePropertyValue
:   One of the tokens listed in the Values section, below. Many values
    have aliases or shorthand (e.g. the value `Decimal_Number` for the
    `General_Category` property may be written `Nd`, `digit`, or
    `Decimal_Number`). For most values, the *`UnicodePropertyName`* part
    and equals sign may be omitted. If a *`UnicodePropertyName` *is
    specified, the value must correspond to the property type given.

::: {.blockIndicator .note}
**Note:** As there are many properties and values available, we will not
describe them exhaustively here but rather provide various examples
:::

Rationale {#Rationale}
---------

Before ES2018 there was no performance-efficient way to match characters
from different sets based on `scripts` (like Macedonian, Greek, Georgian
etc.) or `propertyName` (like Emoji etc) in JavaScript. Check out [tc39
Proposal on Unicode Property
Escapes](../../../../../../../external.html?link=https://github.com/tc39/proposal-regexp-unicode-property-escapes){.external}
for more info.

Examples {#Examples}
--------

### General categories {#General_categories}

General categories are used to classify Unicode characters and
subcategories are available to define a more precise categorization. It
is possible to use both short or long forms in Unicode property escapes.

They can be used to match letters, numbers, symbols, punctuations,
spaces, etc. For a more exhaustive list of general categories, please
refer to [the Unicode
specification](../../../../../../../external.html?link=https://unicode.org/reports/tr18/#General_Category_Property){.external}.

``` {.brush: .js .notranslate}
// finding all the letters of a text
let story = "It’s the Cheshire Cat: now I shall have somebody to talk to.";

// Most explicit form
story.match(/\p{General_Category=Letter}/gu);

// It is not mandatory to use the property name for General categories
story.match(/\p{Letter}/gu);

// This is equivalent (short alias):
story.match(/\p{L}/gu);

// This is also equivalent (conjunction of all the subcategories using short aliases)
story.match(/\p{Lu}|\p{Ll}|\p{Lt}|\p{Lm}|\p{Lo}/gu);
```

### Scripts and script extensions {#Scripts_and_script_extensions}

Some languages use different scripts for their writing system. For
instance, English and Spanish are written using the Latin script while
Arabic and Russian are written with other scripts (respectively Arabic
and Cyrillic). The `Script` and `Script_Extensions` Unicode properties
allow regular expression to match characters according to the script
they are mainly used with (`Script`) or according to the set of scripts
they belong to (`Script_Extensions`).

For example, `A` belongs to the `Latin` script and `ε` to the `Greek`
script.

``` {.brush: .js .notranslate}
let mixedCharacters = "aεЛ";

// Using the canonical "long" name of the script
mixedCharacters.match(/\p{Script=Latin}/u); // a

// Using a short alias for the script
mixedCharacters.match(/\p{Script=Greek}/u); // ε

// Using the short name Sc for the Script property
mixedCharacters.match(/\p{Sc=Cyrillic}/u); // Л
```

For more details, please refer to [the Unicode
specification](../../../../../../../external.html?link=https://unicode.org/reports/tr24/#Script){.external}
and the [Scripts table in the ECMAScript
specification](../../../../../../../external.html?link=https://tc39.es/ecma262/#table-unicode-script-values){.external}.

If a character is used in a limited set of scripts, the `Script`
property will only match for the \"predominant\" used script. If we want
to match characters based on a \"non-predominant\" script, we could use
the `Script_Extensions` property (`Scx` for short).

``` {.brush: .js .notranslate}
// ٢ is the digit 2 in Arabic-Indic notation
// while it is predominantly written within the Arabic script
// it can also be written in the Thaana script

"٢".match(/\p{Script=Thaana}/u);
// null as Thaana is not the predominant script        super()

"٢".match(/\p{Script_Extensions=Thaana}/u);
// ["٢", index: 0, input: "٢", groups: undefined]
```

### Unicode property escapes vs. character classes {#Unicode_property_escapes_vs._character_classes}

With JavaScript regular expressions, it is also possible to use
[character classes](Character_Classes.html) and especially `\w` or `\d`
to match letters or digits. However, such forms only match characters
from the *Latin* script (in other words, `a` to `z` and `A` to `Z` for
`\w` and `0` to `9` for `\d`). As shown in [this
example](Character_Classes.html#Looking_for_a_word_from_Unicode_characters),
it might be a bit clumsy to work with non Latin texts.

Unicode property escapes categories encompass much more characters and
`\p{Letter}` or `\p{Number}` will work for any script.

``` {.brush: .js .notranslate}
// Trying to use ranges to avoid \w limitations:

const nonEnglishText = "Приключения Алисы в Стране чудес";
const regexpBMPWord = /([\u0000-\u0019\u0021-\uFFFF])+/gu;
// BMP goes through U+0000 to U+FFFF but space is U+0020

console.table(nonEnglishText.match(regexpBMPWord));

// Using Unicode property escapes instead
const regexpUPE = /\p{L}+/gu;
console.table(nonEnglishText.match(regexpUPE));
```

Specifications {#Specifications}
--------------

  --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  Specification
  --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  [ECMAScript (ECMA-262)\
  [The definition of \'RegExp: Unicode property escapes\' in that specification.]{.small}](../../../../../../../external.html?link=https://tc39.es/ecma262/#sec-runtime-semantics-unicodematchproperty-p){.external}

  --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Browser compatibility {#Browser_compatibility}
---------------------

For browser compatibility information, check out the [main Regular
Expressions compatibility
table](../Regular_Expressions.html#Browser_compatibility).

See also {#See_also}
--------

-   [Regular expressions guide](../Regular_Expressions.html)
    -   [Character classes](Character_Classes.html)
    -   [Assertions](Assertions.html)
    -   [Quantifiers](Quantifiers.html)
    -   [Groups and ranges](Groups_and_Ranges.html)
-   [The `RegExp()`
    constructor](../../Reference/Global_Objects/RegExp.html)
-   `RegExp.prototype.unicode`
-   [Unicode character property ---
    Wikipedia](../../../../../../../external.html?link=https://en.wikipedia.org/wiki/Unicode_character_property){.external}
-   [A blog post from Axel Rauschmayer about Unicode property
    escapes](../../../../../../../external.html?link=https://2ality.com/2017/07/regexp-unicode-property-escapes.html){.external}
-   [The Unicode document for Unicode
    properties](../../../../../../../external.html?link=https://unicode.org/reports/tr18/#Categories){.external}

::: {.metadata}
::: {.section .document-meta}
#### Metadata

-   **Last modified:** Jul 12, 2020, [by MDN
    contributors](../../../../../../../external.html?link=https://wiki.developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Unicode_Property_Escapes$history)
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
    1.  [Client-side JavaScript
        frameworks](../../../../../../../external.html?link=https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks)
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
        title="This is an experimental API that should not be used in production code."}]{.sidebar-icon}[AggregateError](../../Reference/Global_Objects/AggregateError.html "The AggregateError object represents an error when several errors need to be wrapped in a single error. It is thrown when multiple errors need to be reported by an operation, for example by Promise.any(), when all promises passed to it reject.")
    2.  [Array](../../Reference/Global_Objects/Array.html "The JavaScript Array class is a global object that is used in the construction of arrays; which are high-level, list-like objects.")
    3.  [ArrayBuffer](../../Reference/Global_Objects/ArrayBuffer.html "The ArrayBuffer object is used to represent a generic, fixed-length raw binary data buffer.")
    4.  [AsyncFunction](../../Reference/Global_Objects/AsyncFunction.html "The AsyncFunction constructor creates a new async function object. In JavaScript, every asynchronous function is actually an AsyncFunction object.")
    5.  [Atomics](../../Reference/Global_Objects/Atomics.html "The Atomics object provides atomic operations as static methods. They are used with SharedArrayBuffer and ArrayBuffer objects.")
    6.  [BigInt](../../Reference/Global_Objects/BigInt.html "BigInt is a built-in object that provides a way to represent whole numbers larger than 253 - 1, which is the largest number JavaScript can reliably represent with the Number primitive and represented by the Number.MAX_SAFE_INTEGER constant. BigInt can be used for arbitrarily large integers.")
    7.  [BigInt64Array](../../Reference/Global_Objects/BigInt64Array.html "The BigInt64Array typed array represents an array of 64-bit signed integers in the platform byte order. If control over byte order is needed, use DataView instead. The contents are initialized to 0n. Once established, you can reference elements in the array using the object's methods, or by using standard array index syntax (that is, using bracket notation).")
    8.  [BigUint64Array](../../Reference/Global_Objects/BigUint64Array.html "The BigUint64Array typed array represents an array of 64-bit unsigned integers in the platform byte order. If control over byte order is needed, use DataView instead. The contents are initialized to 0n. Once established, you can reference elements in the array using the object's methods, or by using standard array index syntax (that is, using bracket notation).")
    9.  [Boolean](../../Reference/Global_Objects/Boolean.html "The Boolean object is an object wrapper for a boolean value.")
    10. [DataView](../../Reference/Global_Objects/DataView.html "The DataView view provides a low-level interface for reading and writing multiple number types in a binary ArrayBuffer, without having to care about the platform's endianness.")
    11. [Date](../../Reference/Global_Objects/Date.html "JavaScript Date objects represent a single moment in time in a platform-independent format.")
    12. [Error](../../Reference/Global_Objects/Error.html "Error objects are thrown when runtime errors occur. The Error object can also be used as a base object for user-defined exceptions. See below for standard built-in error types.")
    13. [EvalError](../../Reference/Global_Objects/EvalError.html "The EvalError object indicates an error regarding the global eval() function. This exception is not thrown by JavaScript anymore, however the EvalError object remains for compatibility.")
    14. [FinalizationRegistry](../../Reference/Global_Objects/FinalizationRegistry.html "A FinalizationRegistry object lets you request a callback when an object is garbage-collected.")
    15. [Float32Array](../../Reference/Global_Objects/Float32Array.html "The Float32Array typed array represents an array of 32-bit floating point numbers (corresponding to the C float data type) in the platform byte order. If control over byte order is needed, use DataView instead. The contents are initialized to 0. Once established, you can reference elements in the array using the object's methods, or using standard array index syntax (that is, using bracket notation).")
    16. [Float64Array](../../Reference/Global_Objects/Float64Array.html "The Float64Array typed array represents an array of 64-bit floating point numbers (corresponding to the C double data type) in the platform byte order. If control over byte order is needed, use DataView instead. The contents are initialized to 0. Once established, you can reference elements in the array using the object's methods, or using standard array index syntax (that is, using bracket notation).")
    17. [Function](../../Reference/Global_Objects/Function.html "Every JavaScript function is actually a Function object. This can be seen with the code (function(){}).constructor === Function, which returns true.")
    18. [Generator](../../Reference/Global_Objects/Generator.html "The Generator object is returned by a generator function and it conforms to both the iterable protocol and the iterator protocol.")
    19. [GeneratorFunction](../../Reference/Global_Objects/GeneratorFunction.html "The GeneratorFunction constructor creates a new generator function object. In JavaScript, every generator function is actually a GeneratorFunction object.")
    20. [Infinity](../../Reference/Global_Objects/Infinity.html "The global property Infinity is a numeric value representing infinity.")
    21. [Int16Array](../../Reference/Global_Objects/Int16Array.html "The Int16Array typed array represents an array of twos-complement 16-bit signed integers in the platform byte order. If control over byte order is needed, use DataView instead. The contents are initialized to 0. Once established, you can reference elements in the array using the object's methods, or using standard array index syntax (that is, using bracket notation).")
    22. [Int32Array](../../Reference/Global_Objects/Int32Array.html "The Int32Array typed array represents an array of twos-complement 32-bit signed integers in the platform byte order. If control over byte order is needed, use DataView instead. The contents are initialized to 0. Once established, you can reference elements in the array using the object's methods, or using standard array index syntax (that is, using bracket notation).")
    23. [Int8Array](../../Reference/Global_Objects/Int8Array.html "The Int8Array typed array represents an array of twos-complement 8-bit signed integers. The contents are initialized to 0. Once established, you can reference elements in the array using the object's methods, or using standard array index syntax (that is, using bracket notation).")
    24. [InternalError](../../Reference/Global_Objects/InternalError.html "The InternalError object indicates an error that occurred internally in the JavaScript engine.")
    25. [Intl](../../Reference/Global_Objects/Intl.html "The Intl object is the namespace for the ECMAScript Internationalization API, which provides language sensitive string comparison, number formatting, and date and time formatting. The Intl object provides access to several constructors as well as functionality common to the internationalization constructors and other language sensitive functions.")
    26. [JSON](../../Reference/Global_Objects/JSON.html "The JSON object contains methods for parsing JavaScript Object Notation (JSON) and converting values to JSON. It can't be called or constructed, and aside from its two method properties, it has no interesting functionality of its own.")
    27. [Map](../../Reference/Global_Objects/Map.html "The Map object holds key-value pairs and remembers the original insertion order of the keys.")
    28. [Math](../../Reference/Global_Objects/Math.html "Math is a built-in object that has properties and methods for mathematical constants and functions. It’s not a function object.")
    29. [NaN](../../Reference/Global_Objects/NaN.html "The global NaN property is a value representing Not-A-Number.")
    30. [Number](../../Reference/Global_Objects/Number.html "The Number constructor contains constants and methods for working with numbers. Values of other types can be converted to numbers using the Number() function.")
    31. [Object](../../Reference/Global_Objects/Object.html "The Object class represents one of JavaScript's data types. It is used to store various keyed collections and more complex entities. Objects can be created using the Object() constructor or the object initializer / literal syntax.")
    32. [Promise](../../Reference/Global_Objects/Promise.html "The Promise object represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.")
    33. [Proxy](../../Reference/Global_Objects/Proxy.html "The Proxy object enables you to create a proxy for another object, which can intercept and redefine fundamental operations for that object.")
    34. [RangeError](../../Reference/Global_Objects/RangeError.html "The RangeError object indicates an error when a value is not in the set or range of allowed values.")
    35. [ReferenceError](../../Reference/Global_Objects/ReferenceError.html "The ReferenceError object represents an error when a non-existent variable is referenced.")
    36. [Reflect](../../Reference/Global_Objects/Reflect.html "Reflect is a built-in object that provides methods for interceptable JavaScript operations. The methods are the same as those of proxy handlers. Reflect is not a function object, so it's not constructible.")
    37. [RegExp](../../Reference/Global_Objects/RegExp.html "The RegExp object is used for matching text with a pattern.")
    38. [Set](../../Reference/Global_Objects/Set.html "The Set object lets you store unique values of any type, whether primitive values or object references.")
    39. [SharedArrayBuffer](../../Reference/Global_Objects/SharedArrayBuffer.html "The SharedArrayBuffer object is used to represent a generic, fixed-length raw binary data buffer, similar to the ArrayBuffer object, but in a way that they can be used to create views on shared memory. Unlike an ArrayBuffer, a SharedArrayBuffer cannot become detached.")
    40. [String](../../Reference/Global_Objects/String.html "The String object is used to represent and manipulate a sequence of characters.")
    41. [Symbol](../../Reference/Global_Objects/Symbol.html "The data type symbol is a primitive data type. The Symbol() function returns a value of type symbol, has static properties that expose several members of built-in objects, has static methods that expose the global symbol registry, and resembles a built-in object class, but is incomplete as a constructor because it does not support the syntax "new Symbol()".")
    42. [SyntaxError](../../Reference/Global_Objects/SyntaxError.html "The SyntaxError object represents an error when trying to interpret syntactically invalid code. It is thrown when the JavaScript engine encounters tokens or token order that does not conform to the syntax of the language when parsing code.")
    43. [TypeError](../../Reference/Global_Objects/TypeError.html "The TypeError object represents an error when an operation could not be performed, typically (but not exclusively) when a value is not of the expected type.")
    44. [TypedArray](../../Reference/Global_Objects/TypedArray.html "A TypedArray object describes an array-like view of an underlying binary data buffer. There is no global property named TypedArray, nor is there a directly visible TypedArray constructor.  Instead, there are a number of different global properties, whose values are typed array constructors for specific element types, listed below. On the following pages you will find common properties and methods that can be used with any typed array containing elements of any type.")
    45. [URIError](../../Reference/Global_Objects/URIError.html "The URIError object represents an error when a global URI handling function was used in a wrong way.")
    46. [Uint16Array](../../Reference/Global_Objects/Uint16Array.html "The Uint16Array typed array represents an array of 16-bit unsigned integers in the platform byte order. If control over byte order is needed, use DataView instead. The contents are initialized to 0. Once established, you can reference elements in the array using the object's methods, or using standard array index syntax (that is, using bracket notation).")
    47. [Uint32Array](../../Reference/Global_Objects/Uint32Array.html "The Uint32Array typed array represents an array of 32-bit unsigned integers in the platform byte order. If control over byte order is needed, use DataView instead. The contents are initialized to 0. Once established, you can reference elements in the array using the object's methods, or using standard array index syntax (that is, using bracket notation).")
    48. [Uint8Array](../../Reference/Global_Objects/Uint8Array.html "The Uint8Array typed array represents an array of 8-bit unsigned integers. The contents are initialized to 0. Once established, you can reference elements in the array using the object's methods, or using standard array index syntax (that is, using bracket notation).")
    49. [Uint8ClampedArray](../../Reference/Global_Objects/Uint8ClampedArray.html "The Uint8ClampedArray typed array represents an array of 8-bit unsigned integers clamped to 0-255; if you specified a value that is out of the range of [0,255], 0 or 255 will be set instead; if you specify a non-integer, the nearest integer will be set. The contents are initialized to 0. Once established, you can reference elements in the array using the object's methods, or using standard array index syntax (that is, using bracket notation).")
    50. [WeakMap](../../Reference/Global_Objects/WeakMap.html "The WeakMap object is a collection of key/value pairs in which the keys are weakly referenced. The keys must be objects and the values can be arbitrary values.")
    51. [WeakRef](../../Reference/Global_Objects/WeakRef.html "A WeakRef object lets you hold a weak reference to another object, without preventing that object from getting garbage-collected.")
    52. [WeakSet](../../Reference/Global_Objects/WeakSet.html "The WeakSet object lets you store weakly held objects in a collection.")
    53. [WebAssembly](../../Reference/Global_Objects/WebAssembly.html "The WebAssembly JavaScript object acts as the namespace for all WebAssembly-related functionality.")
    54. [decodeURI()](../../Reference/Global_Objects/decodeURI.html "The decodeURI() function decodes a Uniform Resource Identifier (URI) previously created by encodeURI() or by a similar routine.")
    55. [decodeURIComponent()](../../Reference/Global_Objects/decodeURIComponent.html "The decodeURIComponent() function decodes a Uniform Resource Identifier (URI) component previously created by encodeURIComponent or by a similar routine.")
    56. [encodeURI()](../../Reference/Global_Objects/encodeURI.html "The encodeURI() function encodes a URI by replacing each instance of certain characters by one, two, three, or four escape sequences representing the UTF-8 encoding of the character (will only be four escape sequences for characters composed of two "surrogate" characters).")
    57. [encodeURIComponent()](../../Reference/Global_Objects/encodeURIComponent.html "The encodeURIComponent() function encodes a URI by replacing each instance of certain characters by one, two, three, or four escape sequences representing the UTF-8 encoding of the character (will only be four escape sequences for characters composed of two "surrogate" characters).")
    58. [[ ]{.icon-only-inline
        title="This deprecated API should no longer be used, but will probably still work."}]{.sidebar-icon}[escape()](../../Reference/Global_Objects/escape.html "The escape() function computes a new string in which certain characters have been replaced by a hexadecimal escape sequence.")
    59. [eval()](../../Reference/Global_Objects/eval.html "The eval() function evaluates JavaScript code represented as a string.")
    60. [globalThis](../../Reference/Global_Objects/globalThis.html "The global globalThis property contains the global this value, which is akin to the global object.")
    61. [isFinite()](../../Reference/Global_Objects/isFinite.html "The global isFinite() function determines whether the passed value is a finite number. If  needed, the parameter is first converted to a number.")
    62. [isNaN()](../../Reference/Global_Objects/isNaN.html "The isNaN() function determines whether a value is NaN or not. Note, coercion inside the isNaN function has interesting rules; you may alternatively want to use Number.isNaN(), as defined in ECMAScript 2015.")
    63. [null](../../Reference/Global_Objects/null.html "The value null represents the intentional absence of any object value. It is one of JavaScript's primitive values and is treated as falsy for boolean operations.")
    64. [parseFloat()](../../Reference/Global_Objects/parseFloat.html "The parseFloat() function parses an argument (converting it to a string first if needed) and returns a floating point number.")
    65. [parseInt()](../../Reference/Global_Objects/parseInt.html "The parseInt() function parses a string argument and returns an integer of the specified radix (the base in mathematical numeral systems).")
    66. [undefined](../../Reference/Global_Objects/undefined.html "The global undefined property represents the primitive value undefined. It is one of JavaScript's primitive types.")
    67. [[ ]{.icon-only-inline
        title="This deprecated API should no longer be used, but will probably still work."}]{.sidebar-icon}[unescape()](../../Reference/Global_Objects/unescape.html "The unescape() function computes a new string in which hexadecimal escape sequences are replaced with the character that it represents. The escape sequences might be introduced by a function like escape. Usually, decodeURI or decodeURIComponent are preferred over unescape.")
    68. [[ ]{.icon-only-inline
        title="This API has not been standardized."}]{.sidebar-icon}[uneval()](../../Reference/Global_Objects/uneval.html "The uneval() function creates a string representation of the source code of an Object.")
9.  Expressions & operators
    1.  [Addition
        (+)](../../Reference/Operators/Addition.html "The addition operator (+) produces the sum of numeric operands or string concatenation.")
    2.  [Addition assignment
        (+=)](../../Reference/Operators/Addition_assignment.html "The addition assignment operator (+=) adds the value of the right operand to a variable and assigns the result to the variable. The types of the two operands determine the behavior of the addition assignment operator. Addition or concatenation is possible.")
    3.  [Assignment
        (=)](../../Reference/Operators/Assignment.html "The simple assignment operator (=) is used to assign a value to a variable. The assignment operation evaluates to the assigned value. Chaining the assignment operator is possible in order to assign a single value to multiple variables")
    4.  [Bitwise AND
        (&)](../../Reference/Operators/Bitwise_AND.html "The bitwise AND operator (&) returns a 1 in each bit position for which the corresponding bits of both operands are 1s.")
    5.  [Bitwise AND assignment
        (&=)](../../Reference/Operators/Bitwise_AND_assignment.html "The bitwise AND assignment operator (&=) uses the binary representation of both operands, does a bitwise AND operation on them and assigns the result to the variable.")
    6.  [Bitwise NOT
        (\~)](../../Reference/Operators/Bitwise_NOT.html "The bitwise NOT operator (~) inverts the bits of its operand.")
    7.  [Bitwise OR
        (\|)](../../Reference/Operators/Bitwise_OR.html "The bitwise OR operator (|) returns a 1 in each bit position for which the corresponding bits of either or both operands are 1s.")
    8.  [Bitwise OR assignment
        (\|=)](../../Reference/Operators/Bitwise_OR_assignment.html "The bitwise OR assignment operator (|=) uses the binary representation of both operands, does a bitwise OR operation on them and assigns the result to the variable.")
    9.  [Bitwise XOR
        (\^)](../../Reference/Operators/Bitwise_XOR.html "The bitwise XOR operator (^) returns a 1 in each bit position for which the corresponding bits of either but not both operands are 1s.")
    10. [Bitwise XOR assignment
        (\^=)](../../Reference/Operators/Bitwise_XOR_assignment.html "The bitwise XOR assignment operator (^=) uses the binary representation of both operands, does a bitwise XOR operation on them and assigns the result to the variable.")
    11. [Comma operator
        (,)](../../Reference/Operators/Comma_Operator.html "The comma operator (,) evaluates each of its operands (from left to right) and returns the value of the last operand. This lets you create a compound expression in which multiple expressions are evaluated, with the compound expression's final value being the value of the rightmost of its member expressions. This is commonly used to provide multiple parameters to a for loop.")
    12. [Conditional (ternary)
        operator](../../Reference/Operators/Conditional_Operator.html "The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition is truthy followed by a colon (:), and finally the expression to execute if the condition is falsy.")
    13. [Decrement
        (\--)](../../Reference/Operators/Decrement.html "The decrement operator (--) decrements (subtracts one from) its operand and returns a value.")
    14. [Destructuring
        assignment](../../Reference/Operators/Destructuring_assignment.html "The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.")
    15. [Division
        (/)](../../Reference/Operators/Division.html "The division operator (/) produces the quotient of its operands where the left operand is the dividend and the right operand is the divisor.")
    16. [Division assignment
        (/=)](../../Reference/Operators/Division_assignment.html "The division assignment operator (/=) divides a variable by the value of the right operand and assigns the result to the variable.")
    17. [Equality
        (==)](../../Reference/Operators/Equality.html "The equality operator (==) checks whether its two operands are equal, returning a Boolean result. Unlike the strict equality operator, it attempts to convert and compare operands that are of different types.")
    18. [Exponentiation
        (\*\*)](../../Reference/Operators/Exponentiation.html "The exponentiation operator (**) returns the result of raising the first operand to the power of the second operand.")
    19. [Exponentiation assignment
        (\*\*=)](../../Reference/Operators/Exponentiation_assignment.html "The exponentiation assignment operator (**=) raises the value of a variable to the power of the right operand.")
    20. [Function
        expression](../../Reference/Operators/function.html "The function keyword can be used to define a function inside an expression.")
    21. [Greater than
        (\>)](../../Reference/Operators/Greater_than.html "The greater than operator (>) returns true if the left operand is greater than the right operand, and false otherwise.")
    22. [Greater than or equal
        (\>=)](../../Reference/Operators/Greater_than_or_equal.html "The greater than or equal operator (>=) returns true if the left operand is greater than or equal to the right operand, and false otherwise.")
    23. [Grouping operator (
        )](../../Reference/Operators/Grouping.html "The grouping operator ( ) controls the precedence of evaluation in expressions.")
    24. [Increment
        (++)](../../Reference/Operators/Increment.html "The increment operator (++) increments (adds one to) its operand and returns a value.")
    25. [Inequality
        (!=)](../../Reference/Operators/Inequality.html "The inequality operator (!=) checks whether its two operands are not equal, returning a Boolean result. Unlike the strict inequality operator, it attempts to convert and compare operands that are of different types.")
    26. [Left shift
        (\<\<)](../../Reference/Operators/Left_shift.html "The left shift operator (<<) shifts the first operand the specified number of bits to the left. Excess bits shifted off to the left are discarded. Zero bits are shifted in from the right.")
    27. [Left shift assignment
        (\<\<=)](../../Reference/Operators/Left_shift_assignment.html "The left shift assignment operator (<<=) moves the specified amount of bits to the left and assigns the result to the variable.")
    28. [Less than
        (\<)](../../Reference/Operators/Less_than.html "The less than operator (<) returns true if the left operand is less than the right operand, and false otherwise.")
    29. [Less than or equal
        (\<=)](../../Reference/Operators/Less_than_or_equal.html "The less than or equal operator (<=) returns true if the left operand is less than or equal to the right operand, and false otherwise.")
    30. [Logical AND
        (&&)](../../Reference/Operators/Logical_AND.html "The logical AND (&&) operator (logical conjunction) for a set of operands is true if and only if all of its operands are true. It is typically used with Boolean (logical) values. When it is, it returns a Boolean value. However, the && operator actually returns the value of one of the specified operands, so if this operator is used with non-Boolean values, it will return a non-Boolean value.")
    31. [Logical AND assignment
        (&&=)](../../Reference/Operators/Logical_AND_assignment.html "The logical AND assignment (x &&= y) operator only assigns if x is truthy.")
    32. [Logical NOT
        (!)](../../Reference/Operators/Logical_NOT.html "The logical NOT (!) operator (logical complement, negation) takes truth to falsity and vice versa. It is typically used with Boolean (logical) values. When used with non-Boolean values, it returns false if its single operand can be converted to true; otherwise, returns true.")
    33. [Logical OR
        (\|\|)](../../Reference/Operators/Logical_OR.html "The logical OR (||) operator (logical disjunction) for a set of operands is true if and only if one or more of its operands is true. It is typically used with Boolean (logical) values. When it is, it returns a Boolean value. However, the || operator actually returns the value of one of the specified operands, so if this operator is used with non-Boolean values, it will return a non-Boolean value.")
    34. [Logical OR assignment
        (\|\|=)](../../Reference/Operators/Logical_OR_assignment.html "The logical OR assignment (x ||= y) operator only assigns if x is falsy.")
    35. [Logical nullish assignment
        (??=)](../../Reference/Operators/Logical_nullish_assignment.html "The logical nullish assignment (x ??= y) operator only assigns if x is nullish (null or undefined).")
    36. [Multiplication
        (\*)](../../Reference/Operators/Multiplication.html "The multiplication operator (*) produces the product of the operands.")
    37. [Multiplication assignment
        (\*=)](../../Reference/Operators/Multiplication_assignment.html "The multiplication assignment operator (*=) multiplies a variable by the value of the right operand and assigns the result to the variable.")
    38. [Nullish coalescing operator
        (??)](../../Reference/Operators/Nullish_coalescing_operator.html "The nullish coalescing operator (??) is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.")
    39. [Object
        initializer](../../Reference/Operators/Object_initializer.html "Objects can be initialized using new Object(), Object.create(), or using the literal notation (initializer notation). An object initializer is a comma-delimited list of zero or more pairs of property names and associated values of an object, enclosed in curly braces ({}).")
    40. [Operator
        precedence](../../Reference/Operators/Operator_Precedence.html "Operator precedence determines how operators are parsed concerning each other. Operators with higher precedence become the operands of operators with lower precedence.")
    41. [Optional chaining
        (?.)](../../Reference/Operators/Optional_chaining.html "The ?. operator functions similarly to the . chaining operator, except that instead of causing an error if a reference is nullish (null or undefined), the expression short-circuits with a return value of undefined.")
    42. [[ ]{.icon-only-inline
        title="This is an experimental API that should not be used in production code."}]{.sidebar-icon}[Pipeline
        operator
        (\|\>)](../../Reference/Operators/Pipeline_operator.html "The experimental pipeline operator |> (currently at stage 1) pipes the value of an expression into a function. This allows the creation of chained function calls in a readable manner. The result is syntactic sugar in which a function call with a single argument can be written like this:")
    43. [Property
        accessors](../../Reference/Operators/Property_Accessors.html "Property accessors provide access to an object's properties by using the dot notation or the bracket notation.")
    44. [Remainder
        (%)](../../Reference/Operators/Remainder.html "The remainder operator (%) returns the remainder left over when one operand is divided by a second operand. It always takes the sign of the dividend.")
    45. [Remainder assignment
        (%=)](../../Reference/Operators/Remainder_assignment.html "The remainder assignment operator (%=) divides a variable by the value of the right operand and assigns the remainder to the variable.")
    46. [Right shift
        (\>\>)](../../Reference/Operators/Right_shift.html "The right shift operator (>>) shifts the first operand the specified number of bits to the right. Excess bits shifted off to the right are discarded. Copies of the leftmost bit are shifted in from the left. Since the new leftmost bit has the same value as the previous leftmost bit, the sign bit (the leftmost bit) does not change. Hence the name "sign-propagating".")
    47. [Right shift assignment
        (\>\>=)](../../Reference/Operators/Right_shift_assignment.html "The right shift assignment operator (>>=) moves the specified amount of bits to the right and assigns the result to the variable.")
    48. [Spread syntax
        (\...)](../../Reference/Operators/Spread_syntax.html "Spread syntax (...) allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.")
    49. [Strict equality
        (===)](../../Reference/Operators/Strict_equality.html "The strict equality operator (===) checks whether its two operands are equal, returning a Boolean result. Unlike the equality operator, the strict equality operator always considers operands of different types to be different.")
    50. [Strict inequality
        (!==)](../../Reference/Operators/Strict_inequality.html "The strict inequality operator (!==) checks whether its two operands are not equal, returning a Boolean result. Unlike the inequality operator, the strict inequality operator always considers operands of different types to be different.")
    51. [Subtraction
        (-)](../../Reference/Operators/Subtraction.html "The subtraction operator (-) subtracts the two operands, producing their difference.")
    52. [Subtraction assignment
        (-=)](../../Reference/Operators/Subtraction_assignment.html "The subtraction assignment operator (-=) subtracts the value of the right operand from a variable and assigns the result to the variable.")
    53. [Unary negation
        (-)](../../Reference/Operators/Unary_negation.html "The unary negation operator (-) precedes its operand and negates it.")
    54. [Unary plus
        (+)](../../Reference/Operators/Unary_plus.html "The unary plus operator (+) precedes its operand and evaluates to its operand but attempts to convert it into a number, if it isn't already.")
    55. [Unsigned right shift
        (\>\>\>)](../../Reference/Operators/Unsigned_right_shift.html "The unsigned right shift operator (>>>) (zero-fill right shift) shifts the first operand the specified number of bits to the right. Excess bits shifted off to the right are discarded. Zero bits are shifted in from the left. The sign bit becomes 0, so the result is always non-negative.  Unlike the other bitwise operators, zero-fill right shift returns an unsigned 32-bit integer.")
    56. [Unsigned right shift assignment
        (\>\>\>=)](../../Reference/Operators/Unsigned_right_shift_assignment.html "The unsigned right shift assignment operator (>>>=) moves the specified amount of bits to the right and assigns the result to the variable.")
    57. [async function
        expression](../../Reference/Operators/async_function.html "The async function keyword can be used to define async functions inside expressions.")
    58. [await](../../Reference/Operators/await.html "The await operator is used to wait for a Promise. It can only be used inside an async function.")
    59. [class
        expression](../../Reference/Operators/class.html "The class expression is one way to define a class in ECMAScript 2015. Similar to function expressions, class expressions can be named or unnamed. If named, the name of the class is local to the class body only. ")
    60. [delete
        operator](../../Reference/Operators/delete.html "The JavaScript delete operator removes a property from an object; if no more references to the same property are held, it is eventually released automatically.")
    61. [function\*
        expression](../../Reference/Operators/function_.html "The function* keyword can be used to define a generator function inside an expression.")
    62. [in
        operator](../../Reference/Operators/in.html "The in operator returns true if the specified property is in the specified object or its prototype chain.")
    63. [instanceof](../../Reference/Operators/instanceof.html "The instanceof operator tests whether the prototype property of a constructor appears anywhere in the prototype chain of an object.")
    64. [new
        operator](../../Reference/Operators/new.html "The new operator lets developers create an instance of a user-defined object type or of one of the built-in object types that has a constructor function.")
    65. [new.target](../../Reference/Operators/new-2.html "The new.target pseudo-property lets you detect whether a function or constructor was called using the new operator. In constructors and functions invoked using the new operator, new.target returns a reference to the constructor or function. In normal function calls, new.target is undefined.")
    66. [super](../../Reference/Operators/super.html "The super keyword is used to access and call functions on an object's parent.")
    67. [this](../../Reference/Operators/this.html "A function's this keyword behaves a little differently in JavaScript compared to other languages. It also has some differences between strict mode and non-strict mode.")
    68. [typeof](../../Reference/Operators/typeof.html "The typeof operator returns a string indicating the type of the unevaluated operand.")
    69. [void
        operator](../../Reference/Operators/void.html "The void operator evaluates the given expression and then returns undefined.")
    70. [yield](../../Reference/Operators/yield.html "The yield keyword is used to pause and resume a generator function (function* or legacy generator function).")
    71. [yield\*](../../Reference/Operators/yield_.html "The yield* expression is used to delegate to another generator or iterable object.")
10. Statements & declarations
    1.  [async
        function](../../Reference/Statements/async_function.html "An async function is a function declared with the async keyword. Async functions are instances of the AsyncFunction constructor, and the await keyword is permitted within them. The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains.")
    2.  [block](../../Reference/Statements/block.html "A block statement (or compound statement in other languages) is used to group zero or more statements. The block is delimited by a pair of braces ("curly brackets") and may optionally be labelled:")
    3.  [break](../../Reference/Statements/break.html "The break statement terminates the current loop, switch, or label statement and transfers program control to the statement following the terminated statement.")
    4.  [class](../../Reference/Statements/class.html "The class declaration creates a new class with a given name using prototype-based inheritance.")
    5.  [const](../../Reference/Statements/const.html "Constants are block-scoped, much like variables defined using the let keyword. The value of a constant can't be changed through reassignment, and it can't be redeclared.")
    6.  [continue](../../Reference/Statements/continue.html "The continue statement terminates execution of the statements in the current iteration of the current or labeled loop, and continues execution of the loop with the next iteration.")
    7.  [debugger](../../Reference/Statements/debugger.html "The debugger statement invokes any available debugging functionality, such as setting a breakpoint. If no debugging functionality is available, this statement has no effect.")
    8.  [do\...while](../../Reference/Statements/do...html "The do...while statement creates a loop that executes a specified statement until the test condition evaluates to false. The condition is evaluated after executing the statement, resulting in the specified statement executing at least once.")
    9.  [empty](../../Reference/Statements/Empty.html "An empty statement is used to provide no statement, although the JavaScript syntax would expect one.")
    10. [export](../../Reference/Statements/export.html "The export statement is used when creating JavaScript modules to export live bindings to functions, objects, or primitive values from the module so they can be used by other programs with the import statement. Bindings that are exported can still be modified locally; when imported, although they can only be read by the importing module the value updates whenever it is updated by the exporting module.")
    11. [for](../../Reference/Statements/for.html "The for statement creates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by a statement (usually a block statement) to be executed in the loop.")
    12. [for
        await\...of](../../Reference/Statements/for-await...html "The for await...of statement creates a loop iterating over async iterable objects as well as on sync iterables, including: built-in String, Array, Array-like objects (e.g., arguments or NodeList), TypedArray, Map, Set, and user-defined async/sync iterables. It invokes a custom iteration hook with statements to be executed for the value of each distinct property of the object. Like await operator, the statement can only be used inside an async function.")
    13. [for\...in](../../Reference/Statements/for...html "The for...in statement iterates over all enumerable properties of an object that are keyed by strings (ignoring ones keyed by Symbols), including inherited enumerable properties.")
    14. [for\...of](../../Reference/Statements/for..-2.html "The for...of statement creates a loop iterating over iterable objects, including: built-in String, Array, array-like objects (e.g., arguments or NodeList), TypedArray, Map, Set, and user-defined iterables. It invokes a custom iteration hook with statements to be executed for the value of each distinct property of the object.")
    15. [function
        declaration](../../Reference/Statements/function.html "The function declaration (function statement) defines a function with the specified parameters.")
    16. [function\*](../../Reference/Statements/function_.html "The function* declaration (function keyword followed by an asterisk) defines a generator function, which returns a Generator object.")
    17. [if\...else](../../Reference/Statements/if...html "The if statement executes a statement if a specified condition is truthy. If the condition is falsy, another statement can be executed.")
    18. [import](../../Reference/Statements/import.html "The static import statement is used to import read only live bindings which are exported by another module. ")
    19. [import.meta](../../Reference/Statements/import-2.html "The import.meta object exposes context-specific metadata to a JavaScript module. It contains information about the module, like the module's URL.")
    20. [label](../../Reference/Statements/label.html "The labeled statement can be used with break or continue statements. It is prefixing a statement with an identifier which you can refer to.")
    21. [let](../../Reference/Statements/let.html "The let statement declares a block-scoped local variable, optionally initializing it to a value.")
    22. [return](../../Reference/Statements/return.html "The return statement ends function execution and specifies a value to be returned to the function caller.")
    23. [switch](../../Reference/Statements/switch.html "The switch statement evaluates an expression, matching the expression's value to a case clause, and executes statements associated with that case, as well as statements in cases that follow the matching case.")
    24. [throw](../../Reference/Statements/throw.html "The throw statement throws a user-defined exception. Execution of the current function will stop (the statements after throw won't be executed), and control will be passed to the first catch block in the call stack. If no catch block exists among caller functions, the program will terminate.")
    25. [try\...catch](../../Reference/Statements/try...html "The try...catch statement marks a block of statements to try and specifies a response should an exception be thrown.")
    26. [var](../../Reference/Statements/var.html "The var statement declares a function-scoped or globally-scoped variable, optionally initializing it to a value.")
    27. [while](../../Reference/Statements/while.html "The while statement creates a loop that executes a specified statement as long as the test condition evaluates to true. The condition is evaluated before executing the statement.")
    28. [[ ]{.icon-only-inline
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
    1.  [Private class
        fields](../../Reference/Classes/Private_class_fields.html "Class properties are public by default and can be examined or modified outside the class. In ES2019, the ability to define private class fields using a hash # prefix is added.")
    2.  [Public class
        fields](../../Reference/Classes/Public_class_fields.html "Both static and instance public fields are writable, enumerable, and configurable properties. As such, unlike their private counterparts, they participate in prototype inheritance.")
    3.  [constructor](../../Reference/Classes/constructor.html "The constructor method is a special method for creating and initializing an object created within a class.")
    4.  [extends](../../Reference/Classes/extends.html "The extends keyword is used in class declarations or class expressions to create a class that is a child of another class.")
    5.  [static](../../Reference/Classes/static.html "The static keyword defines a static method for a class. Static methods aren't called on instances of the class. Instead, they're called on the class itself.")
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
Github](../../../../../../../external.html?link=https://developer.mozilla.org/users/github/login/?next=%2Fen-US%2Fdocs%2FWeb%2FJavaScript%2FGuide%2FRegular_Expressions%2FUnicode_Property_Escapes){.github-auth}
[Sign in with
Google](../../../../../../../external.html?link=https://developer.mozilla.org/users/google/login/?next=%2Fen-US%2Fdocs%2FWeb%2FJavaScript%2FGuide%2FRegular_Expressions%2FUnicode_Property_Escapes){.google-auth}
:::

Close modal
:::
:::
