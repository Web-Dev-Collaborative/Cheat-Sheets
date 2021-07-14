---
title: Bash parameter expansion cheatsheet
date: "2007-03-29"
url: /blog/2007/03/29/bash-parameter-expansion-cheatsheet/
categories:
  - Programming
---

The bash shell has a powerful parameter expansion syntax, but it's complex and hard to remember. I always forget which syntax does what, even though I use it all the time for scripts and one-off jobs. Unfortunately, I find the man page unhelpful as a reference, so I've made a cheat sheet for myself. Perhaps you'll find it useful too.

[![Thumbnail](/media/2007/03/bash-parameter-expansion-cheatsheet.png)](/media/2007/03/bash-parameter-expansion-cheatsheet.pdf)

If you want the whole story, type `man bash` into a terminal, and search for the section titled EXPANSION. There you'll find the full details, such as this:

> ${parameter%word}  
> ${parameter%%word}
>
> The word is expanded to produce a pattern just as in pathname expansion. If the pattern matches a trailing portion of the expanded value of parameter, then the result of the expansion is the expanded value of parameter with the shortest matching pattern (the "%" case) or the longest matching pattern (the "%%" case) deleted. If parameter is @ or \*, the pattern removal operation is applied to each positional parameter in turn, and the expansion is the resultant list. If parameter is an array variable subscripted with @ or \*, the pattern removal operation is applied to each member of the array in turn, and the expansion is the resultant list.

Hence the need for the cheatsheet :-)
