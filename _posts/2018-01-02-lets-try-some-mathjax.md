---
layout: post
title: "Let's Try Some MathJax"
date: 2018-01-02
math: true
---

Ok, $$H_e \vec r^e$$ goes. That was made with this:

```$$H_e \vec r^e$$```

 but looks like math mode.

Let's try \\[ T\hbar_i \mathbf{s} ~~~ \mu_e \iint \\] for display, maybe?

That the stuff. The delimiters are `\\[` and `\\]`.

What about good old `$$$`?

$$$\lim_{r\to\infty} \oint_{C_r} \vec F(x,y) \cdot d\vec r$$$

_Noooope_.

### Fix that limit

Let's see if `\displaystyle` works in math mode. $$\displaystyle \lim_{r\to\infty} \oint_{C_r} \vec F(x,y) \cdot d\vec r $$.

Oooh.

Of course, display mode shouldn't have an issue. \\[\lim\_{r\to\infty} \oint\_{C_r} \vec F(x,y) \cdot d\vec r \\]

Indeed not.

### To escape or not to escape

It's worth noting that escaping the underscores withing a LaTeX expression is not necessary here. But here is the dilemma: My editor (VSCode) does not recognize MathJax and so treats each `_` as an emphasis indicator, sometimes.

Another day.