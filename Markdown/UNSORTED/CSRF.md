---
description: |
    CSRF (Cross-Site Request Forgery) is an attack that impersonates a
    trusted user and sends a website unwanted commands.
lang: en
robots: 'index, follow'
title: 'CSRF - MDN Web Docs Glossary: Definitions of Web-related terms \| MDN'
twitter:card: summary
twitter:creator: '\@MozDevNet'
twitter:description: |
    CSRF (Cross-Site Request Forgery) is an attack that impersonates a
    trusted user and sends a website unwanted commands.
twitter:image: 'https://developer.mozilla.org/static/img/opengraph-logo.72382e605ce3.png'
twitter:site: '\@MozDevNet'
twitter:title: CSRF
twitter:url: 'https://developer.mozilla.org/en-US/docs/Glossary/CSRF'
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
        Overview](../../../../external.html?link=https://developer.mozilla.org/en-US/docs/Web)
    -   [HTML](../../../../external.html?link=https://developer.mozilla.org/en-US/docs/Web/HTML)
    -   [CSS](../../../../external.html?link=https://developer.mozilla.org/en-US/docs/Web/CSS)
    -   [JavaScript](../../../../external.html?link=https://developer.mozilla.org/en-US/docs/Web/JavaScript)
    -   [Graphics](../../../../external.html?link=https://developer.mozilla.org/en-US/docs/Web/Guide/Graphics)
    -   [HTTP](../../../../external.html?link=https://developer.mozilla.org/en-US/docs/Web/HTTP)
    -   [APIs /
        DOM](../../../../external.html?link=https://developer.mozilla.org/en-US/docs/Web/API)
    -   [Browser
        Extensions](../../../../external.html?link=https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions)
    -   [MathML](../../../../external.html?link=https://developer.mozilla.org/en-US/docs/Web/MathML)
-   References & Guides
    -   [Learn web
        development](../../../../external.html?link=https://developer.mozilla.org/en-US/docs/Learn)
    -   [Tutorials](../../../../external.html?link=https://developer.mozilla.org/en-US/docs/Web/Tutorials)
    -   [References](../../../../external.html?link=https://developer.mozilla.org/en-US/docs/Web/Reference)
    -   [Developer
        Guides](../../../../external.html?link=https://developer.mozilla.org/en-US/docs/Web/Guide)
    -   [Accessibility](../../../../external.html?link=https://developer.mozilla.org/en-US/docs/Web/Accessibility)
    -   [Game
        development](../../../../external.html?link=https://developer.mozilla.org/en-US/docs/Games)
    -   [\...more
        docs](../../../../external.html?link=https://developer.mozilla.org/en-US/docs/Web)
-   Feedback
    -   [Send
        Feedback](../../../../external.html?link=https://developer.mozilla.org/en-US/docs/MDN/Feedback)
    -   [Get Firefox help
        🌐](../../../../external.html?link=https://support.mozilla.org/)
    -   [Get web development help
        🌐](../../../../external.html?link=https://stackoverflow.com/)
    -   [Join the MDN
        community](../../../../external.html?link=https://developer.mozilla.org/en-US/docs/MDN/Community)
    -   [Report a content problem
        🌐](../../../../external.html?link=https://github.com/mdn/sprints/issues/new?template=issue-template.md&projects=mdn/sprints/2&labels=user-report&title=/en-US/docs/Glossary/CSRF)
    -   [Report an issue
        🌐](../../../../external.html?link=https://github.com/mdn/kuma/issues/new/choose)

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
1.  [[See ]{.pre-text}[MDN Web Docs Glossary: Definitions of Web-related
    terms]{property="name"}](../../../../external.html?link=https://developer.mozilla.org/en-US/docs/Glossary){.breadcrumb-previous}
2.  [[CSRF]{property="name"
    aria-current="page"}](CSRF.html){.crumb-current-page}

::: {.dropdown-container .language-menu}
English[▼]{.dropdown-arrow-down aria-hidden="true"}

-   [Español](../../../../external.html?link=https://developer.mozilla.org/es/docs/Glossary/CSRF "Spanish")
-   [Français](../../../../external.html?link=https://developer.mozilla.org/fr/docs/Glossaire/CSRF "French")
-   [日本語](../../../../external.html?link=https://developer.mozilla.org/ja/docs/Glossary/CSRF "Japanese")
-   [Русский](../../../../external.html?link=https://developer.mozilla.org/ru/docs/Словарь/CSRF "Russian")
-   [中文
    (简体)](../../../../external.html?link=https://developer.mozilla.org/zh-CN/docs/Glossary/CSRF "Chinese (Simplified)")
-   [正體中文
    (繁體)](../../../../external.html?link=https://developer.mozilla.org/zh-TW/docs/Glossary/CSRF "Chinese (Traditional)")
-   [Add a
    translation](../../../../external.html?link=https://wiki.developer.mozilla.org/en-US/docs/Glossary/CSRF$locales){#translations-add}
:::
:::
:::

::: {.wiki-left-present .content-layout}
::: {.section .document-toc}
On this Page
------------

Jump to section

-   [Learn more](#Learn_more)
-   [Related topics](#sidebar-quicklinks)
:::

::: {#content .article .text-content}
[**CSRF** (Cross-Site Request Forgery) is an attack that impersonates a
trusted user and sends a website unwanted commands.]{.seoSummary} This
can be done, for example, by including malicious parameters in a
[URL](URL.html) behind a link that purports to go somewhere else:

``` {.notranslate}
<img src="https://www.example.com/index.php?action=delete&id=123">
```

For users who have modification permissions on
`https://www.example.com`, the `<img>` element executes action on
`https://www.example.com` without their noticing, even if the element is
not at `https://www.example.com`.

There are many ways to prevent CSRF, such as implementing [RESTful
API](REST.html), adding secure tokens, etc.

Learn more {#Learn_more}
----------

### General knowledge {#General_knowledge}

-   [Cross-site request
    forgery](../../../../external.html?link=https://en.wikipedia.org/wiki/Cross-site%20request%20forgery "Cross-site request forgery"){.external}
    on Wikipedia
-   [Prevention
    measures](../../../../external.html?link=https://www.owasp.org/index.php/Cross-Site_Request_Forgery_(CSRF)_Prevention_Cheat_Sheet){.external}

::: {.metadata}
::: {.section .document-meta}
#### Metadata

-   **Last modified:** Aug 4, 2020, [by MDN
    contributors](../../../../external.html?link=https://wiki.developer.mozilla.org/en-US/docs/Glossary/CSRF$history)
:::
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
Policy](../../../../external.html?link=https://www.mozilla.org/privacy/).
:::

::: {.newsletter-group-submit}
Sign up now
:::

Hide Newsletter Sign-up
:::
:::

::: {.content-container}
[MDN Web
Docs](../../../../external.html?link=https://developer.mozilla.org/en-US/){.nav-footer-logo}

-   [Web
    Technologies](../../../../external.html?link=https://developer.mozilla.org/en-US/docs/Web)
-   [Learn Web
    Development](../../../../external.html?link=https://developer.mozilla.org/en-US/docs/Learn)
-   [About
    MDN](../../../../external.html?link=https://developer.mozilla.org/en-US/docs/MDN/About)
-   [Feedback](../../../../external.html?link=https://developer.mozilla.org/en-US/docs/MDN/Feedback)

<!-- -->

-   [About](../../../../external.html?link=https://www.mozilla.org/about/)
-   [MDN Web Docs
    Store](../../../../external.html?link=https://shop.spreadshirt.com/mdn-store/)
-   [Contact
    Us](../../../../external.html?link=https://www.mozilla.org/contact/)
-   [Firefox](../../../../external.html?link=https://www.mozilla.org/firefox/?utm_source=developer.mozilla.org&utm_campaign=footer&utm_medium=referral)

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
licenses](../../../../external.html?link=https://developer.mozilla.org/docs/MDN/About#Copyrights_and_licenses).

-   [Terms](../../../../external.html?link=https://www.mozilla.org/about/legal/terms/mozilla)
-   [Privacy](../../../../external.html?link=https://www.mozilla.org/privacy/websites/)
-   [Cookies](../../../../external.html?link=https://www.mozilla.org/privacy/websites/#cookies)
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
Github](../../../../external.html?link=https://developer.mozilla.org/users/github/login/?next=%2Fen-US%2Fdocs%2FGlossary%2FCSRF){.github-auth}
[Sign in with
Google](../../../../external.html?link=https://developer.mozilla.org/users/google/login/?next=%2Fen-US%2Fdocs%2FGlossary%2FCSRF){.google-auth}
:::

Close modal
:::
:::
