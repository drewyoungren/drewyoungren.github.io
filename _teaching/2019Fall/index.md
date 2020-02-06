---
layout: default
title: Multivariable Calculus for Engineers and Applied Scientists
semester: 2019_Fall
---

<style>
div.collapsible * {
    display: inline-block
}

.collapsible > h3::before {
  content: '\02795 '; /* Unicode character for "plus" sign (+) */
  font-size: 13px;
  color: #777;
  float: right;
  margin-left: 5px;
}

.active > h3::before {
  content: " \02796 "; /* Unicode character for "minus" sign (-) */
}
</style>


<div class="collapsible" style="background: #AAAAAA;">
<h3>Lecture 04</h3>
</div>
<div class="collapse" style="display: none;"> 
<ul id="group_1" style="background-color: #f1f1f1;">
<li>
<p>Objectives</p>
<ul>
<li>Form the equation of a plane using a point and a normal vector.</li>
<li>Extract the latter from the former.</li>
<li>Specify lines and planes based on relationships to other points/lines/planes.</li>
<li>Measure distances among points/lines/planes using projections.</li>
<li>Sketch traces of quadric surfaces</li>
<li>Match contour plots to graphs.</li>
</ul>
</li>
<li>
<p>Resources</p>
<ul>
<li>Content
<ul>
<li>Stewart: &sect;12.5&ndash;6</li>
<li>New Strang:&nbsp;<a href="https://cnx.org/contents/oxzXkyFi@5.30:YM6I55EW@6/2-5-Equations-of-Lines-and-Planes-in-Space" target="_blank" rel="noopener">&sect;2.5</a>&nbsp;<a href="https://cnx.org/contents/oxzXkyFi@5.30:xr_RDPv0@6/2-6-Quadric-Surfaces" target="_blank" rel="noopener">&sect;2.6</a></li>
<li><a href="https://hub.columbiajupyter2.org/hub/user-redirect/git-pull?repo=https%3A%2F%2Fgithub.com%2Fdrewyoungren%2Fmvc-f19&amp;urlpath=tree%2Fmvc-f19%2Fslides%2Fmvc-L04.ipynb" target="_blank" rel="noopener">Slides</a>&nbsp;via JupyterHub</li>
</ul>
</li>
<li>Practice
<ul>
<li>Mooculus:&nbsp;<a href="https://ximera.osu.edu/mooculus/calculus3/linesAndCurvesInSpace/digInLinesAndCurvesInSpace" target="_blank" rel="noopener">Lines</a>&nbsp;<a href="https://ximera.osu.edu/mooculus/calculus3/normalVectors/digInPlanesInSpace" target="_blank" rel="noopener">Planes</a>&nbsp;*not everything is relevant</li>
</ul>
</li>
<li>Extras
<ul>
<li>CalcBLUE:&nbsp;<a class="" href="https://www.youtube.com/watch?v=owMT-d4RRpw&amp;index=3&amp;list=PL8erL0pXF3JYm7VaTdKDaWc8Q3FuP8Sa7" target="_blank" rel="noopener">Lines &amp; Planes</a>&nbsp;<a class="" href="https://youtu.be/5y1bhGsYG8o" target="_blank" rel="noopener">Quadric surfaces</a></li>
</ul>
</li>
</ul>
</li>
</ul>
</div>

<script>
    let coll = document.getElementsByClassName("collapsible");

    for (i=0; i < coll.length; i++) {
        console.log(i,coll[i])
        coll[i].onclick = function() {
            console.log("You got ",this)
            let el = this.nextElementSibling;
            if (el.style.display != "none") {
                this.classList.remove("active");
                el.style.display = 'none';
            } else {
                this.classList.add("active");
                el.style.display = 'block';
            }
        }
    }
</script>



<h1>&nbsp;</h1>
<h1 id="Lecture-05">Lecture 05</h1>
<ul>
<li>
<p>Objectives</p>
<ul>
<li>Connect the formula of space curves with their graphs.</li>
<li>Compute limits, derivatives, and integrals of vector-valued functions.</li>
<li>Interpret first and second derivatives.</li>
<li>Compute arc length of curves.</li>
</ul>
</li>
<li>
<p>Resources</p>
<ul>
<li>Content
<ul>
<li>Stewart: &sect;13.1&ndash;3</li>
<li>New Strang:&nbsp;<a href="https://cnx.org/contents/oxzXkyFi@5.30:II6x1ElB@7/3-1-Vector-Valued-Functions-and-Space-Curves" target="_blank" rel="noopener">&sect;3.1</a>&nbsp;<a href="https://cnx.org/contents/oxzXkyFi@5.30:b6_oskIJ@4/3-2-Calculus-of-Vector-Valued-Functions" target="_blank" rel="noopener">&sect;3.2</a></li>
<li><a href="https://hub.columbiajupyter2.org/hub/user-redirect/git-pull?repo=https%3A%2F%2Fgithub.com%2Fdrewyoungren%2Fmvc-f19&amp;urlpath=tree%2Fmvc-f19%2Fslides%2Fmvc-L05.ipynb" target="_blank" rel="noopener">Slides</a>&nbsp;via JupyterHub</li>
</ul>
</li>
<li>Visualization
<ul>
<li><a href="https://www.monroecc.edu/faculty/paulseeburger/calcnsf/CalcPlot3D/" target="_blank" rel="noopener">CalcPlot3D</a></li>
</ul>
</li>
<li>Practice
<ul>
<li>Mooculus:&nbsp;<a href="https://ximera.osu.edu/mooculus/calculus3/linesAndCurvesInSpace/digInLinesAndCurvesInSpace" target="_blank" rel="noopener">Lines and Curves</a>&nbsp;<a href="https://ximera.osu.edu/mooculus/calculus3/calculusAndVectorValuedFunctions/titlePage" target="_blank" rel="noopener">Calculus of Vector-valued Functions</a></li>
</ul>
</li>
<li>Extras
<ul>
<li>CalcBLUE:&nbsp;<a class="" href="https://youtu.be/8WzHSgE0Kus" target="_blank" rel="noopener">Derivatives of Curves</a>&nbsp;<a class="" href="https://youtu.be/TAQPEP9pEhw" target="_blank" rel="noopener">Arc Length</a></li>
</ul>
</li>
</ul>
</li>
</ul>
<p>&nbsp;</p>
<h1 id="Lecture-06">Lecture 06<a class="anchor-link" href="http://localhost:8888/notebooks/mvc/mvc-f19/slides/mvc-L06.ipynb#Lecture-06"></a></h1>
<ul>
<li>
<p>Objectives</p>
<ul>
<li>Describe motion of objects using calculus of curves.</li>
<li>Compute arc length of curves.</li>
<li>Explain thquantity&nbsp;<span id="MathJax-Element-20-Frame" class="MathJax" style="display: inline-table; font-style: normal; font-weight: normal; line-height: normal; font-size: 14px; text-indent: 0px; text-align: left; white-space: nowrap; float: none; direction: ltr; max-width: none; max-height: none; min-width: 0px; min-height: 0px; border: 0px; padding: 0px; margin: 0px; position: relative;" role="presentation" data-mathml="&lt;math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;&gt;&lt;mi&gt;&amp;#x03BA;&lt;/mi&gt;&lt;/math&gt;"><span id="MathJax-Span-398" class="math"><span id="MathJax-Span-399" class="mrow"><span id="MathJax-Span-400" class="mi">𝜅</span></span></span><span class="MJX_Assistive_MathML" role="presentation"><math xmlns="http://www.w3.org/1998/Math/MathML"><mi>&kappa;</mi></math></span></span>, the curvature.</li>
</ul>
</li>
<li>
<p>Resources</p>
<ul>
<li>Content
<ul>
<li>Stewart: &sect;13.3-4</li>
<li>New Strang:&nbsp;<a href="https://cnx.org/contents/oxzXkyFi@5.30:9fEOYsBF@9/3-3-Arc-Length-and-Curvature" target="_blank" rel="noopener">&sect;3.3</a>&nbsp;<a href="http://localhost:8888/notebooks/mvc/mvc-f19/slides/mvc-L06.ipynb" target="_blank" rel="noopener">&sect;3.4</a></li>
<li><a href="https://hub.columbiajupyter2.org/hub/user-redirect/git-pull?repo=https%3A%2F%2Fgithub.com%2Fdrewyoungren%2Fmvc-f19&amp;urlpath=tree%2Fmvc-f19%2Fslides%2Fmvc-L06.ipynb" target="_blank" rel="noopener">Slides</a>&nbsp;via JupyterHub</li>
</ul>
</li>
<li>Visualization
<ul>
<li><a href="https://www.monroecc.edu/faculty/paulseeburger/calcnsf/CalcPlot3D/" target="_blank" rel="noopener">CalcPlot3D</a></li>
</ul>
</li>
<li>Practice
<ul>
<li>Mooculus:&nbsp;<a href="https://ximera.osu.edu/mooculus/calculus3/motionAndPathsInSpace/titlePage" target="_blank" rel="noopener">Motion and Paths in Space</a></li>
</ul>
</li>
<li>Extras
<ul>
<li>CalcBLUE:</li>
<li><a class="" href="https://www.youtube.com/watch?v=rq4kxVFnOUA&amp;index=48&amp;list=PL8erL0pXF3JYm7VaTdKDaWc8Q3FuP8Sa7" target="_blank" rel="noopener">Vector Calculus and Motion</a></li>
</ul>
</li>
</ul>
</li>
</ul>
<p>&nbsp;</p>
<h1 id="Lecture-07">Lecture 07<a class="anchor-link" href="http://localhost:8888/notebooks/mvc/mvc-f19/slides/mvc-L07.ipynb#Lecture-07"></a></h1>
<ul>
<li>
<p>Objectives</p>
<ul>
<li>Sketch contour plot of a function of 2 variables</li>
<li>Relate level sets to a graph</li>
<li>Explore limits and continuity of&nbsp;<span id="MathJax-Element-6-Frame" class="MathJax" style="display: inline-table; font-style: normal; font-weight: normal; line-height: normal; font-size: 14px; text-indent: 0px; text-align: left; white-space: nowrap; float: none; direction: ltr; max-width: none; max-height: none; min-width: 0px; min-height: 0px; border: 0px; padding: 0px; margin: 0px; position: relative;" role="presentation" data-mathml="&lt;math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;&gt;&lt;mi&gt;f&lt;/mi&gt;&lt;mo stretchy=&quot;false&quot;&gt;(&lt;/mo&gt;&lt;mi&gt;x&lt;/mi&gt;&lt;mo&gt;,&lt;/mo&gt;&lt;mi&gt;y&lt;/mi&gt;&lt;mo stretchy=&quot;false&quot;&gt;)&lt;/mo&gt;&lt;/math&gt;"><span id="MathJax-Span-67" class="math"><span id="MathJax-Span-68" class="mrow"><span id="MathJax-Span-69" class="mi">𝑓</span><span id="MathJax-Span-70" class="mo">(</span><span id="MathJax-Span-71" class="mi">𝑥</span><span id="MathJax-Span-72" class="mo">,</span><span id="MathJax-Span-73" class="mi">𝑦</span><span id="MathJax-Span-74" class="mo">)</span></span></span><span class="MJX_Assistive_MathML" role="presentation"><math xmlns="http://www.w3.org/1998/Math/MathML"><mi>f</mi><mo stretchy="false">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy="false">)</mo></math></span></span>.</li>
<li>Define partial derivatives</li>
</ul>
</li>
<li>
<p>Resources</p>
<ul>
<li>Content
<ul>
<li>Stewart: &sect;14.1&ndash;2</li>
<li>New Strang:&nbsp;<a href="https://cnx.org/contents/oxzXkyFi@5.30:t-PZBc8c@6/4-1-Functions-of-Several-Variables" target="_blank" rel="noopener">&sect;4.1</a>&nbsp;<a href="https://cnx.org/contents/oxzXkyFi@5.30:2YObsFkq@7/4-2-Limits-and-Continuity" target="_blank" rel="noopener">&sect;4.2</a></li>
<li><a href="https://hub.columbiajupyter2.org/hub/user-redirect/git-pull?repo=https%3A%2F%2Fgithub.com%2Fdrewyoungren%2Fmvc-f19&amp;urlpath=tree%2Fmvc-f19%2Fslides%2Fmvc-L07.ipynb" target="_blank" rel="noopener">Slides</a>&nbsp;via JupyterHub</li>
</ul>
</li>
<li>Visualization
<ul>
<li><a href="https://www.monroecc.edu/faculty/paulseeburger/calcnsf/CalcPlot3D/" target="_blank" rel="noopener">CalcPlot3D</a></li>
</ul>
</li>
<li>Practice
<ul>
<li>Mooculus:&nbsp;<a href="https://ximera.osu.edu/mooculus/calculus3/functionsOfSeveralVariables/digInFunctionsOfSeveralVariables" target="_blank" rel="noopener">Functions of Several Variables</a>&nbsp;<a href="https://ximera.osu.edu/mooculus/calculus3/functionsOfSeveralVariables/digInLevelSets" target="_blank" rel="noopener">Level Sets</a>&nbsp;<a href="https://ximera.osu.edu/mooculus/calculus3/continuityOfFunctionsOfSeveralVariables/digInContinuity" target="_blank" rel="noopener">Continuity</a></li>
</ul>
</li>
<li>Extras
<ul>
<li>CalcBLUE:&nbsp;<a class="" href="https://www.youtube.com/watch?v=owMT-d4RRpw&amp;index=4&amp;list=PL8erL0pXF3JYm7VaTdKDaWc8Q3FuP8Sa7" target="_blank" rel="noopener">Multivariate Functions</a></li>
</ul>
</li>
</ul>
</li>
</ul>
<h1 id="Lecture-08">Lecture 08<a class="anchor-link" href="http://localhost:8888/notebooks/mvc/mvc-f19/slides/mvc-L08.ipynb#Lecture-08"></a></h1>
<ul>
<li>
<p>Objectives</p>
<ul>
<li>Explore limits and continuity of&nbsp;<span id="MathJax-Element-24-Frame" class="MathJax" style="display: inline-table; font-style: normal; font-weight: normal; line-height: normal; font-size: 14px; text-indent: 0px; text-align: left; white-space: nowrap; float: none; direction: ltr; max-width: none; max-height: none; min-width: 0px; min-height: 0px; border: 0px; padding: 0px; margin: 0px; position: relative;" role="presentation" data-mathml="&lt;math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;&gt;&lt;mi&gt;f&lt;/mi&gt;&lt;mo stretchy=&quot;false&quot;&gt;(&lt;/mo&gt;&lt;mi&gt;x&lt;/mi&gt;&lt;mo&gt;,&lt;/mo&gt;&lt;mi&gt;y&lt;/mi&gt;&lt;mo stretchy=&quot;false&quot;&gt;)&lt;/mo&gt;&lt;/math&gt;"><span id="MathJax-Span-288" class="math"><span id="MathJax-Span-289" class="mrow"><span id="MathJax-Span-290" class="mi">𝑓</span><span id="MathJax-Span-291" class="mo">(</span><span id="MathJax-Span-292" class="mi">𝑥</span><span id="MathJax-Span-293" class="mo">,</span><span id="MathJax-Span-294" class="mi">𝑦</span><span id="MathJax-Span-295" class="mo">)</span></span></span><span class="MJX_Assistive_MathML" role="presentation"><math xmlns="http://www.w3.org/1998/Math/MathML"><mi>f</mi><mo stretchy="false">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy="false">)</mo></math></span></span>.</li>
<li>Define partial derivatives</li>
<li>Estimate partial derivatives from contour maps and tables.</li>
</ul>
</li>
<li>
<p>Resources</p>
<ul>
<li>Content
<ul>
<li>Stewart: &sect;14.2&mdash;3</li>
<li>New Strang:&nbsp;<a href="https://cnx.org/contents/oxzXkyFi@5.30:2YObsFkq@7/4-2-Limits-and-Continuity" target="_blank" rel="noopener">&sect;4.2</a></li>
<li><a href="https://hub.columbiajupyter2.org/hub/user-redirect/git-pull?repo=https%3A%2F%2Fgithub.com%2Fdrewyoungren%2Fmvc-f19&amp;urlpath=tree%2Fmvc-f19%2Fslides%2Fmvc-L08.ipynb" target="_blank" rel="noopener">Slides</a>&nbsp;via JupyterHub</li>
</ul>
</li>
<li>Visualization
<ul>
<li><a href="https://www.monroecc.edu/faculty/paulseeburger/calcnsf/CalcPlot3D/" target="_blank" rel="noopener">CalcPlot3D</a></li>
</ul>
</li>
<li>Practice
<ul>
<li>Mooculus:&nbsp;<a href="https://ximera.osu.edu/mooculus/calculus3/continuityOfFunctionsOfSeveralVariables/digInContinuity" target="_blank" rel="noopener">Continuity</a>&nbsp;<a href="https://ximera.osu.edu/mooculus/calculus3/partialDerivativesAndTheGradientVector/digInPartialDerivatives" target="_blank" rel="noopener">Partial Derivatives</a></li>
</ul>
</li>
<li>Extras
<ul>
<li>CalcBLUE:&nbsp;<a class="" href="https://youtu.be/3QqfUIbQpfg" target="_blank" rel="noopener">Partial Derivatives</a></li>
</ul>
</li>
</ul>
</li>
</ul>
<h1 id="Lecture-09">Lecture 09<a class="anchor-link" href="http://localhost:8888/notebooks/mvc-f19/slides/mvc-L09.ipynb#Lecture-09"></a></h1>
<ul>
<li>
<p>Objectives</p>
<ul>
<li>Relate "differentiability" to linear functions.</li>
<li>Find the tangent plane to the graph of a function of two variables.</li>
<li>Use linearization and/or differentials to estimate quantities.</li>
</ul>
</li>
<li>
<p>Resources</p>
<ul>
<li>Content
<ul>
<li>Stewart: &sect;14.4</li>
<li>New Strang:&nbsp;<a href="https://cnx.org/contents/oxzXkyFi@3.2:M_GqncFF@8/Tangent-Planes-and-Linear-Approximations" target="_blank" rel="noopener">&sect;4.4</a></li>
<li><a href="https://hub.columbiajupyter2.org/hub/user-redirect/git-pull?repo=https%3A%2F%2Fgithub.com%2Fdrewyoungren%2Fmvc-f19&amp;urlpath=tree%2Fmvc-f19%2Fslides%2Fmvc-L09.ipynb" target="_blank" rel="noopener">Slides</a>&nbsp;via JupyterHub</li>
</ul>
</li>
<li>Practice
<ul>
<li>Mooculus:&nbsp;<a href="https://ximera.osu.edu/mooculus/calculus3/tangentPlanesAndDifferentiability/digInTangentPlanes" target="_blank" rel="noopener">Tangent Planes</a></li>
</ul>
</li>
<li>Extras
<ul>
<li>CalcBLUE:&nbsp;<a class="" href="https://www.youtube.com/watch?v=xDV2ikha320&amp;index=64&amp;list=PL8erL0pXF3JZZTnqjginERYYEi1WpLE_V" target="_blank" rel="noopener">Tangent Spaces</a>&nbsp;<a class="" href="https://www.youtube.com/watch?v=Pb4VkLXTinU&amp;index=70&amp;list=PL8erL0pXF3JZZTnqjginERYYEi1WpLE_V" target="_blank" rel="noopener">Linearization</a></li>
</ul>
</li>
</ul>
</li>
</ul>
<h1 id="Lecture-10">Lecture 10<a class="anchor-link" href="http://localhost:8888/notebooks/mvc-f19/slides/mvc-L10.ipynb#Lecture-10"></a></h1>
<ul>
<li>
<p>Objectives</p>
<ul>
<li>Compute derivatives of compositions.</li>
<li>Compute derivatives from implicit relations.</li>
<li>Review for midterm.</li>
</ul>
</li>
<li>
<p>Resources</p>
<ul>
<li>Content
<ul>
<li>Stewart: &sect;14.5</li>
<li>New Strang:&nbsp;<a href="https://cnx.org/contents/oxzXkyFi@6.1:8QoqMp7K@7/4-5-The-Chain-Rule" target="_blank" rel="noopener">&sect;4.5</a></li>
<li><a href="https://hub.columbiajupyter2.org/hub/user-redirect/git-pull?repo=https%3A%2F%2Fgithub.com%2Fdrewyoungren%2Fmvc-f19&amp;urlpath=tree%2Fmvc-f19%2Fslides%2Fmvc-L10.ipynb" target="_blank" rel="noopener">Slides</a>&nbsp;via JupyterHub</li>
</ul>
</li>
<li>Practice
<ul>
<li>Mooculus:&nbsp;<a href="https://ximera.osu.edu/mooculus/calculus3/directionalDerivativeAndChainRule/digInChainRule" target="_blank" rel="noopener">Chain Rule</a></li>
</ul>
</li>
<li>Extras
<ul>
<li>CalcBLUE: WARNING! This is very matrix-dependent (and thus extra)&nbsp;<a class="" href="https://youtu.be/3WtjD3bewBk" target="_blank" rel="noopener">The Chain Rule</a></li>
</ul>
</li>
</ul>
</li>
</ul>
<h1 id="Lecture-11">Lecture 11<a class="anchor-link" href="http://localhost:8888/notebooks/mvc-f19/slides/mvc-L11.ipynb#Lecture-11"></a></h1>
<ul>
<li>
<p>Objectives</p>
<ul>
<li>Define directional derivatives.</li>
<li>Compute&nbsp;<span id="MathJax-Element-79-Frame" class="MathJax" style="display: inline-table; font-style: normal; font-weight: normal; line-height: normal; font-size: 14px; text-indent: 0px; text-align: left; white-space: nowrap; float: none; direction: ltr; max-width: none; max-height: none; min-width: 0px; min-height: 0px; border: 0px; padding: 0px; margin: 0px; position: relative;" role="presentation" data-mathml="&lt;math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;&gt;&lt;msub&gt;&lt;mi&gt;D&lt;/mi&gt;&lt;mrow class=&quot;MJX-TeXAtom-ORD&quot;&gt;&lt;mi mathvariant=&quot;bold&quot;&gt;u&lt;/mi&gt;&lt;/mrow&gt;&lt;/msub&gt;&lt;mi&gt;f&lt;/mi&gt;&lt;/math&gt;"><span id="MathJax-Span-1181" class="math"><span id="MathJax-Span-1182" class="mrow"><span id="MathJax-Span-1183" class="msubsup"><span id="MathJax-Span-1184" class="mi">𝐷</span><span id="MathJax-Span-1185" class="texatom"><span id="MathJax-Span-1186" class="mrow"><span id="MathJax-Span-1187" class="mi">𝐮</span></span></span></span><span id="MathJax-Span-1188" class="mi">𝑓</span></span></span><span class="MJX_Assistive_MathML" role="presentation"><math xmlns="http://www.w3.org/1998/Math/MathML"><msub><mi>D</mi><mrow class="MJX-TeXAtom-ORD"><mi mathvariant="bold">u</mi></mrow></msub><mi>f</mi></math></span></span>&nbsp;using the gradient.</li>
<li>Use the properties of&nbsp;<span id="MathJax-Element-80-Frame" class="MathJax" style="display: inline-table; font-style: normal; font-weight: normal; line-height: normal; font-size: 14px; text-indent: 0px; text-align: left; white-space: nowrap; float: none; direction: ltr; max-width: none; max-height: none; min-width: 0px; min-height: 0px; border: 0px; padding: 0px; margin: 0px; position: relative;" role="presentation" data-mathml="&lt;math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;&gt;&lt;mi mathvariant=&quot;normal&quot;&gt;&amp;#x2207;&lt;/mi&gt;&lt;mi&gt;f&lt;/mi&gt;&lt;/math&gt;"><span id="MathJax-Span-1189" class="math"><span id="MathJax-Span-1190" class="mrow"><span id="MathJax-Span-1191" class="mi">&nabla;</span><span id="MathJax-Span-1192" class="mi">𝑓</span></span></span><span class="MJX_Assistive_MathML" role="presentation"><math xmlns="http://www.w3.org/1998/Math/MathML"><mi mathvariant="normal">&nabla;</mi><mi>f</mi></math></span></span>&nbsp;to compute tangent spaces and the like.</li>
</ul>
</li>
<li>
<p>Resources</p>
<ul>
<li>Content
<ul>
<li>Stewart: &sect;14.6</li>
<li>New Strang:&nbsp;<a href="https://cnx.org/contents/oxzXkyFi@6.1:gkQNvJr6@7/4-6-Directional-Derivatives-and-the-Gradient" target="_blank" rel="noopener">&sect;4.6</a></li>
<li><a href="https://hub.columbiajupyter2.org/hub/user-redirect/git-pull?repo=https%3A%2F%2Fgithub.com%2Fdrewyoungren%2Fmvc-f19&amp;urlpath=tree%2Fmvc-f19%2Fslides%2Fmvc-L11.ipynb" target="_blank" rel="noopener">Slides</a>&nbsp;via JupyterHub</li>
</ul>
</li>
<li>Practice
<ul>
<li>Mooculus:&nbsp;<a href="https://ximera.osu.edu/mooculus/calculus3/interpretingTheGradient/digInGradient" target="_blank" rel="noopener">The Gradient</a></li>
</ul>
</li>
<li>Extras
<ul>
<li>CalcBLUE:&nbsp;<a class="" href="https://www.youtube.com/watch?v=zEvGUXXW1BI&amp;list=PL8erL0pXF3JZZTnqjginERYYEi1WpLE_V&amp;index=58" target="_blank" rel="noopener">Gradients</a></li>
</ul>
</li>
</ul>
</li>
</ul>
<h1 id="Lecture-12">Lecture 12<a class="anchor-link" href="http://localhost:8888/notebooks/mvc-f19/slides/mvc-L12.ipynb#Lecture-12"></a></h1>
<ul>
<li>
<p>Objectives</p>
<ul>
<li>Define local minima/maxima.</li>
<li>Classify critical points using the second derivative test.</li>
<li>Solve unconstrained optimization problems</li>
</ul>
</li>
<li>
<p>Resources</p>
<ul>
<li>Content
<ul>
<li>Stewart: &sect;14.7</li>
<li>New Strang:&nbsp;<a href="https://openstax.org/books/calculus-volume-3/pages/4-7-maxima-minima-problems" target="_blank" rel="noopener">&sect;4.7</a></li>
<li><a href="https://hub.columbiajupyter2.org/hub/user-redirect/git-pull?repo=https%3A%2F%2Fgithub.com%2Fdrewyoungren%2Fmvc-f19&amp;urlpath=tree%2Fmvc-f19%2Fslides%2Fmvc-L12.ipynb" target="_blank" rel="noopener">Slides</a>&nbsp;via JupyterHub</li>
</ul>
</li>
<li>Practice
<ul>
<li>Mooculus:&nbsp;<a href="https://ximera.osu.edu/mooculus/calculus3/maximumsAndMinimumsOfFunctionsOfSeveralVariables/digInMaximaAndMinima" target="_blank" rel="noopener">Minima and Maxima</a></li>
</ul>
</li>
<li>Extras
<ul>
<li>CalcBLUE:&nbsp;<a class="" href="https://youtu.be/J1HS6hmBtC0" target="_blank" rel="noopener">Critical Points</a></li>
</ul>
</li>
</ul>
</li>
</ul>
<h1>&nbsp;</h1>
<div class="ctb_hideshow ctb_show">
<div class="celltoolbar">
<div class="button_container">Slide Type - Slide Sub-Slide Fragment Skip Notes</div>
</div>
</div>
<div class="text_cell_render rendered_html">
<h1 id="Lecture-13">Lecture 13<a class="anchor-link" href="http://localhost:8888/notebooks/mvc/mvc-f19/slides/mvc-L13.ipynb#Lecture-13"></a></h1>
<ul>
<li>Objectives
<ul>
<li>Identify open and closed sets</li>
<li>Solve unconstrained optimization problems</li>
<li>Solve constrained optimization problems (Lagrange Multipliers)</li>
</ul>
</li>
</ul>
<ul>
<li>Resources
<ul>
<li>Content
<ul>
<li>Stewart: &sect;14.8</li>
<li>New Strang:&nbsp;<a href="https://openstax.org/books/calculus-volume-3/pages/4-8-lagrange-multipliers" target="_blank" rel="noopener">&sect;4.8</a></li>
<li><a href="https://hub.columbiajupyter2.org/hub/user-redirect/git-pull?repo=https%3A%2F%2Fgithub.com%2Fdrewyoungren%2Fmvc-f19&amp;urlpath=tree%2Fmvc-f19%2Fslides%2Fmvc-L13.ipynb" target="_blank" rel="noopener">Slides</a>&nbsp;via JupyterHub</li>
</ul>
</li>
<li>Practice
<ul>
<li>Mooculus:&nbsp;<a href="https://ximera.osu.edu/mooculus/calculus3/constrainedOptimization/digInConstrainedOptimization" target="_blank" rel="noopener">Constrained Optimization</a>&nbsp;<a href="https://ximera.osu.edu/mooculus/calculus3/lagrangeMultipliers/digInLagrangeMultipliers" target="_blank" rel="noopener">Lagrange Multipliers</a></li>
</ul>
</li>
<li>Extras
<ul>
<li>CalcBLUE:&nbsp;<a class="" href="https://www.youtube.com/watch?v=CBWMHf1MfEs&amp;list=PL8erL0pXF3JZZTnqjginERYYEi1WpLE_V&amp;index=110" target="_blank" rel="noopener">Optimization</a></li>
</ul>
</li>
</ul>
</li>
</ul>
</div>
<h1>&nbsp;</h1>
<h1 id="Lecture-14">Lecture 14<a class="anchor-link" href="http://localhost:8888/notebooks/mvc/mvc-f19/slides/mvc-L14.ipynb#Lecture-14"></a></h1>
<ul>
<li>
<p>Objectives</p>
<ul>
<li>Integration.
<ul>
<li>Define the double integral</li>
<li>Compute using iterated integrals</li>
<li>Convert from rectangular to polar coordinates.</li>
</ul>
</li>
</ul>
</li>
<li>
<p>Resources</p>
<ul>
<li>Content
<ul>
<li>Stewart: &sect;15.1</li>
<li>New Strang:&nbsp;<a href="https://openstax.org/books/calculus-volume-3/pages/5-1-double-integrals-over-rectangular-regions" target="_blank" rel="noopener">&sect;5.1</a>&nbsp;<a href="https://openstax.org/books/calculus-volume-3/pages/5-2-double-integrals-over-general-regions" target="_blank" rel="noopener">&sect;5.2</a>&nbsp;<a href="https://openstax.org/books/calculus-volume-3/pages/5-3-double-integrals-in-polar-coordinates" target="_blank" rel="noopener">&sect;5.3</a></li>
<li><a href="https://hub.columbiajupyter2.org/hub/user-redirect/git-pull?repo=https%3A%2F%2Fgithub.com%2Fdrewyoungren%2Fmvc-f19&amp;urlpath=tree%2Fmvc-f19%2Fslides%2Fmvc-L14.ipynb" target="_blank" rel="noopener">Slides</a>&nbsp;via JupyterHub</li>
</ul>
</li>
<li>Practice
<ul>
<li>Mooculus:&nbsp;<a href="https://ximera.osu.edu/mooculus/calculus3/multipleIntegrals/titlePage" target="_blank" rel="noopener">Multiple Integrals</a>&nbsp;<a href="https://ximera.osu.edu/mooculus/calculus3/commonCoordinates/digInPolarCoordinates" target="_blank" rel="noopener">Polar Coordinnates</a></li>
</ul>
</li>
<li>Extras
<ul>
<li>CalcBLUE:&nbsp;<a href="https://www.math.upenn.edu/~ghrist/BLUE.html#VOL3" target="_blank" rel="noopener">Integrals</a></li>
</ul>
</li>
</ul>
</li>
</ul>
<h1 id="Lecture-15">Lecture 15<a class="anchor-link" href="http://localhost:8888/notebooks/mvc/mvc-f19/slides/mvc-L15.ipynb#Lecture-15"></a></h1>
<ul>
<li>
<p>Objectives</p>
<ul>
<li>Integration
<ul>
<li>See examples using polar coordinates.</li>
<li>Applications of integration:
<ul>
<li>Center of mass</li>
<li>Moment of intertia</li>
<li>Probability</li>
</ul>
</li>
<li>Preview triple integrals.</li>
</ul>
</li>
</ul>
</li>
<li>
<p>Resources</p>
<ul>
<li>Content
<ul>
<li>Stewart: &sect;15.3&ndash;4</li>
<li>New Strang:&nbsp;<a href="https://openstax.org/books/calculus-volume-3/pages/5-3-double-integrals-in-polar-coordinates" target="_blank" rel="noopener">&sect;5.3</a>&nbsp;<a href="https://openstax.org/books/calculus-volume-3/pages/5-6-calculating-centers-of-mass-and-moments-of-inertia" target="_blank" rel="noopener">&sect;5.6</a></li>
<li><a href="https://hub.columbiajupyter2.org/hub/user-redirect/git-pull?repo=https%3A%2F%2Fgithub.com%2Fdrewyoungren%2Fmvc-f19&amp;urlpath=tree%2Fmvc-f19%2Fslides%2Fmvc-L15.ipynb" target="_blank" rel="noopener">Slides</a>&nbsp;via JupyterHub</li>
</ul>
</li>
<li>Practice
<ul>
<li>Mooculus:&nbsp;<a href="https://ximera.osu.edu/mooculus/calculus3/commonCoordinates/digInPolarCoordinates" target="_blank" rel="noopener">Polar Coordinates</a>&nbsp;<a href="https://ximera.osu.edu/mooculus/calculus3/computationsAndInterpretations/digInMassMomentsAndCenterOfMass" target="_blank" rel="noopener">Mass and Moments</a></li>
</ul>
</li>
<li>Extras
<ul>
<li>CalcBLUE:&nbsp;<a href="https://www.math.upenn.edu/~ghrist/BLUE.html#VOL3" target="_blank" rel="noopener">Integrals</a></li>
</ul>
</li>
</ul>
</li>
</ul>
<h1 id="Lecture-16">Lecture 16<a class="anchor-link" href="http://localhost:8888/notebooks/mvc/mvc-f19/slides/mvc-L16.ipynb#Lecture-16"></a></h1>
<ul>
<li>Objectives
<ul>
<li>Triple Integration
<ul>
<li>Change order of integration for nonrectangular domains.</li>
<li>Cylindrical Coordinates.</li>
<li>Spherical Coordinates.</li>
</ul>
</li>
</ul>
</li>
<li>Resources
<ul>
<li>Content
<ul>
<li>Stewart: &sect;15.5&ndash;7</li>
<li>New Strang:
<ul>
<li><a href="https://openstax.org/books/calculus-volume-3/pages/5-4-triple-integrals" target="_blank" rel="noopener">&sect;5.4</a>&nbsp;Some good practice on changing order of integration here, Particularly, nos. 203&ndash;206, 211, 212, 215&ndash;220, 235, 240</li>
<li><a href="https://openstax.org/books/calculus-volume-3/pages/5-5-triple-integrals-in-cylindrical-and-spherical-coordinates" target="_blank" rel="noopener">&sect;5.5</a></li>
</ul>
</li>
<li><a href="https://hub.columbiajupyter2.org/hub/user-redirect/git-pull?repo=https%3A%2F%2Fgithub.com%2Fdrewyoungren%2Fmvc-f19&amp;urlpath=tree%2Fmvc-f19%2Fslides%2Fmvc-L16.ipynb" target="_blank" rel="noopener">Slides</a>&nbsp;via JupyterHub</li>
</ul>
</li>
<li>Practice
<ul>
<li>Mooculus:&nbsp;<a href="https://ximera.osu.edu/mooculus/calculus3/commonCoordinates/digInCylindricalCoordinates" target="_blank" rel="noopener">Cylindrical Coordinates</a>&nbsp;<a href="https://ximera.osu.edu/mooculus/calculus3/computationsAndInterpretations/digInMassMomentsAndCenterOfMass" target="_blank" rel="noopener">Spherical</a></li>
</ul>
</li>
<li>Extras
<ul>
<li>CalcBLUE:&nbsp;<a class="" href="https://www.youtube.com/watch?v=YIi7muLgI9U&amp;list=PL8erL0pXF3JaJdUcmc_PeGV-vG5z87BkD&amp;index=90" target="_blank" rel="noopener">Cylindrical Coordinates</a>&nbsp;<a class="" href="https://www.youtube.com/watch?v=Zc8uCT-e5KI&amp;list=PL8erL0pXF3JaJdUcmc_PeGV-vG5z87BkD&amp;index=98" target="_blank" rel="noopener">Spherical Coordinates</a></li>
</ul>
</li>
</ul>
</li>
</ul>
<p>&nbsp;</p>
<h1 id="Lecture-17">Lecture 17<a class="anchor-link" href="http://localhost:8888/notebooks/mvc/mvc-f19/slides/mvc-L17.ipynb#Lecture-17">&para;</a></h1>
<ul>
<li>Objectives
<ul>
<li>Triple Integration
<ul>
<li>Integrals in Spherical and Cylindrical Coords</li>
<li>Integration Review</li>
<li>Midterm 2 review.</li>
</ul>
</li>
</ul>
</li>
<li>Resources
<ul>
<li>Content
<ul>
<li>Stewart: &sect;15.5&ndash;7</li>
<li>New Strang:
<ul>
<li><a href="https://openstax.org/books/calculus-volume-3/pages/5-4-triple-integrals" target="_blank" rel="noopener">&sect;5.4</a>&nbsp;Some good practice on changing order of integration here, Particularly, nos. 203&ndash;206, 211, 212, 215&ndash;220, 235, 240</li>
<li><a href="https://openstax.org/books/calculus-volume-3/pages/5-5-triple-integrals-in-cylindrical-and-spherical-coordinates" target="_blank" rel="noopener">&sect;5.5</a></li>
</ul>
</li>
<li><a href="https://hub.columbiajupyter2.org/hub/user-redirect/git-pull?repo=https%3A%2F%2Fgithub.com%2Fdrewyoungren%2Fmvc-f19&amp;urlpath=tree%2Fmvc-f19%2Fslides%2Fmvc-L17.ipynb" target="_blank" rel="noopener">Slides</a>&nbsp;via JupyterHub</li>
</ul>
</li>
<li>Practice
<ul>
<li>Mooculus:&nbsp;<a href="https://ximera.osu.edu/mooculus/calculus3/commonCoordinates/digInCylindricalCoordinates" target="_blank" rel="noopener">Cylindrical Coordinates</a>&nbsp;<a href="https://ximera.osu.edu/mooculus/calculus3/computationsAndInterpretations/digInMassMomentsAndCenterOfMass" target="_blank" rel="noopener">Spherical</a></li>
</ul>
</li>
<li>Extras
<ul>
<li>CalcBLUE:&nbsp;<a class="" href="https://www.youtube.com/watch?v=YIi7muLgI9U&amp;list=PL8erL0pXF3JaJdUcmc_PeGV-vG5z87BkD&amp;index=90" target="_blank" rel="noopener">Cylindrical Coordinates</a>&nbsp;<a class="" href="https://www.youtube.com/watch?v=Zc8uCT-e5KI&amp;list=PL8erL0pXF3JaJdUcmc_PeGV-vG5z87BkD&amp;index=98" target="_blank" rel="noopener">Spherical Coordinates</a></li>
</ul>
</li>
</ul>
</li>
</ul>
<div class="ctb_hideshow ctb_show">
<div class="celltoolbar">
<div class="button_container">&nbsp;</div>
<div class="button_container">
<h1 id="Lecture-18">Lecture 18<a class="anchor-link" href="http://localhost:8888/notebooks/mvc/mvc-f19/slides/mvc-L18.ipynb#Lecture-18"></a></h1>
<ul>
<li>Objectives
<ul>
<li>Vector Fields
<ul>
<li>examples, plots</li>
<li>examples from physics</li>
</ul>
</li>
<li>Conservative vector fields and potentials</li>
</ul>
</li>
<li>Resources
<ul>
<li>Content
<ul>
<li>Stewart: &sect;16.1&ndash;2</li>
<li>New Strang:
<ul>
<li><a href="https://ximera.osu.edu/mooculus/calculus3/vectorFields/digInVectorFields" target="_blank" rel="noopener">&sect;6.1</a></li>
</ul>
</li>
<li><a href="https://hub.columbiajupyter2.org/hub/user-redirect/git-pull?repo=https%3A%2F%2Fgithub.com%2Fdrewyoungren%2Fmvc-f19&amp;urlpath=tree%2Fmvc-f19%2Fslides%2Fmvc-L18.ipynb" target="_blank" rel="noopener">Slides</a>&nbsp;via JupyterHub</li>
</ul>
</li>
<li>Practice
<ul>
<li>Mooculus:&nbsp;<a href="https://ximera.osu.edu/mooculus/calculus3/vectorFields/digInVectorFields" target="_blank" rel="noopener">Vector Fields</a></li>
</ul>
</li>
<li>Extras
<ul>
<li>CalcBLUE:&nbsp;<a class="" href="https://www.youtube.com/watch?v=GmPN18JDtEI&amp;t=0s&amp;list=PL8erL0pXF3JYCn8Xukv0DqVIXtXJbOqdo&amp;index=2" target="_blank" rel="noopener">Fields</a></li>
</ul>
</li>
</ul>
</li>
</ul>
</div>
<div class="button_container">&nbsp;</div>
</div>
</div>
<div class="text_cell_render rendered_html">
<h1 id="Lecture-19">Lecture 19<a class="anchor-link" href="http://localhost:8888/notebooks/mvc/mvc-f19/slides/mvc-L19.ipynb#Lecture-19"></a></h1>
<ul>
<li>Objectives
<ul>
<li>Line Integrals
<ul>
<li>examples, plots</li>
<li>examples from physics</li>
</ul>
</li>
<li>Conservative vector fields and potentials</li>
</ul>
</li>
<li>Resources
<ul>
<li>Content
<ul>
<li>Stewart: &sect;16.1&ndash;3</li>
<li>New Strang:
<ul>
<li><a href="https://openstax.org/books/calculus-volume-3/pages/6-2-line-integrals" target="_blank" rel="noopener">&sect;6.2</a></li>
</ul>
</li>
<li><a href="https://hub.columbiajupyter2.org/hub/user-redirect/git-pull?repo=https%3A%2F%2Fgithub.com%2Fdrewyoungren%2Fmvc-f19&amp;urlpath=tree%2Fmvc-f19%2Fslides%2Fmvc-L19.ipynb" target="_blank" rel="noopener">Slides</a>&nbsp;via JupyterHub</li>
</ul>
</li>
<li>Practice
<ul>
<li>Mooculus:&nbsp;<a href="https://ximera.osu.edu/mooculus/calculus3/lineIntegrals/digInLineIntegrals" target="_blank" rel="noopener">Line Integrals</a></li>
</ul>
</li>
<li>Extras
<ul>
<li>CalcBLUE:&nbsp;<a class="" href="https://www.youtube.com/watch?v=8333W0vsqBc&amp;list=PL8erL0pXF3JYCn8Xukv0DqVIXtXJbOqdo&amp;index=9" target="_blank" rel="noopener">Path Integrals</a></li>
</ul>
</li>
</ul>
</li>
</ul>
<h1 id="Lecture-20">Lecture 20<a class="anchor-link" href="http://localhost:8888/notebooks/mvc/mvc-f19/slides/mvc-L20.ipynb#Lecture-20"></a></h1>
<ul>
<li>Objectives
<ul>
<li>Fundamental Theorem of Line Integrals
<ul>
<li>Relation to path-independence</li>
<li>Why "conservative"?</li>
</ul>
</li>
<li>Green's Theorem (if time)</li>
</ul>
</li>
<li>Resources
<ul>
<li>Content
<ul>
<li>Stewart: &sect;16.4</li>
<li>New Strang:
<ul>
<li><a href="https://openstax.org/books/calculus-volume-3/pages/6-3-conservative-vector-fields" target="_blank" rel="noopener">&sect;6.3</a></li>
<li><a href="https://openstax.org/books/calculus-volume-3/pages/6-4-greens-theorem" target="_blank" rel="noopener">&sect;6.4</a></li>
</ul>
</li>
<li><a href="https://hub.columbiajupyter2.org/hub/user-redirect/git-pull?repo=https%3A%2F%2Fgithub.com%2Fdrewyoungren%2Fmvc-f19&amp;urlpath=tree%2Fmvc-f19%2Fslides%2Fmvc-L20.ipynb" target="_blank" rel="noopener">Slides</a>&nbsp;via JupyterHub</li>
</ul>
</li>
<li>Practice
<ul>
<li>Mooculus:&nbsp;<a href="https://ximera.osu.edu/mooculus/calculus3/lineIntegrals/digInLineIntegrals" target="_blank" rel="noopener">Line Integrals</a>&nbsp;<a href="https://ximera.osu.edu/mooculus/calculus3/greensTheorem/titlePage" target="_blank" rel="noopener">Green's Theorem</a></li>
</ul>
</li>
<li>Extras
<ul>
<li>CalcBLUE:&nbsp;<a class="" href="https://www.youtube.com/watch?v=Wgd8RA-pagQ&amp;list=PL8erL0pXF3JYCn8Xukv0DqVIXtXJbOqdo&amp;index=23" target="_blank" rel="noopener">Path Independence</a></li>
</ul>
</li>
</ul>
</li>
</ul>
<h1 id="Lecture-21">Lecture 21<a class="anchor-link" href="http://localhost:8888/notebooks/mvc/mvc-f19/slides/mvc-L21.ipynb#Lecture-21"></a></h1>
<ul>
<li>Objectives
<ul>
<li>Green's Theorem
<ul>
<li>Know the statement.</li>
<li>Know the ingredients.</li>
<li>Scalar curl</li>
<li>Divergence in 2D</li>
</ul>
</li>
</ul>
</li>
<li>Resources
<ul>
<li>Content
<ul>
<li>Stewart: &sect;16.5</li>
<li>New Strang:
<ul>
<li><a href="https://openstax.org/books/calculus-volume-3/pages/6-4-greens-theorem" target="_blank" rel="noopener">&sect;6.4</a></li>
</ul>
</li>
<li><a href="https://hub.columbiajupyter2.org/hub/user-redirect/git-pull?repo=https%3A%2F%2Fgithub.com%2Fdrewyoungren%2Fmvc-f19&amp;urlpath=tree%2Fmvc-f19%2Fslides%2Fmvc-L21.ipynb" target="_blank" rel="noopener">Slides</a>&nbsp;via JupyterHub</li>
</ul>
</li>
<li>Practice
<ul>
<li>Mooculus:&nbsp;<a href="https://ximera.osu.edu/mooculus/calculus3/greensTheorem/titlePage" target="_blank" rel="noopener">Green's Theorem</a></li>
</ul>
</li>
<li>Extras
<ul>
<li>CalcBLUE:&nbsp;<a class="" href="https://www.youtube.com/watch?v=AUriw3-RoBo&amp;list=PL8erL0pXF3JYCn8Xukv0DqVIXtXJbOqdo&amp;index=37" target="_blank" rel="noopener">Green's</a></li>
</ul>
</li>
</ul>
</li>
</ul>
<div class="ctb_hideshow ctb_show">
<div class="celltoolbar">
<div class="button_container">Slide Type - Slide Sub-Slide Fragment Skip Notes</div>
</div>
</div>
<div class="text_cell_render rendered_html">
<h1 id="Lecture-22">Lecture 22<a class="anchor-link" href="http://localhost:8888/notebooks/mvc/mvc-f19/slides/mvc-L22.ipynb#Lecture-22"></a></h1>
<ul>
<li>Objectives
<ul>
<li>Find parametrizations for the following surfaces in&nbsp;<span id="MathJax-Element-65-Frame" class="MathJax" style="display: inline-table; font-style: normal; font-weight: normal; line-height: normal; font-size: 14px; text-indent: 0px; text-align: left; white-space: nowrap; float: none; direction: ltr; max-width: none; max-height: none; min-width: 0px; min-height: 0px; border: 0px; padding: 0px; margin: 0px; position: relative;" role="presentation" data-mathml="&lt;math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;&gt;&lt;msup&gt;&lt;mrow class=&quot;MJX-TeXAtom-ORD&quot;&gt;&lt;mi mathvariant=&quot;double-struck&quot;&gt;R&lt;/mi&gt;&lt;/mrow&gt;&lt;mn&gt;3&lt;/mn&gt;&lt;/msup&gt;&lt;/math&gt;"><span id="MathJax-Span-1196" class="math"><span id="MathJax-Span-1197" class="mrow"><span id="MathJax-Span-1198" class="msubsup"><span id="MathJax-Span-1199" class="texatom"><span id="MathJax-Span-1200" class="mrow"><span id="MathJax-Span-1201" class="mi">ℝ</span></span></span><span id="MathJax-Span-1202" class="mn">3</span></span></span></span><span class="MJX_Assistive_MathML" role="presentation"><math xmlns="http://www.w3.org/1998/Math/MathML"><msup><mrow class="MJX-TeXAtom-ORD"><mi mathvariant="double-struck">R</mi></mrow><mn>3</mn></msup></math></span></span>:
<ul>
<li>graphs of functions (of 2 variables)</li>
<li>parts of spheres</li>
<li>surfaces of revolution</li>
</ul>
</li>
<li>Compute surface integrals
<ul>
<li>with respect to surface area</li>
<li>of a vector field (flux integrals)</li>
</ul>
</li>
</ul>
</li>
<li>Resources
<ul>
<li>Content
<ul>
<li>Stewart: &sect;16.6-7</li>
<li>New Strang:
<ul>
<li><a href="https://openstax.org/books/calculus-volume-3/pages/6-6-surface-integrals" target="_blank" rel="noopener">&sect;6.6</a></li>
</ul>
</li>
<li><a href="https://hub.columbiajupyter2.org/hub/user-redirect/git-pull?repo=https%3A%2F%2Fgithub.com%2Fdrewyoungren%2Fmvc-f19&amp;urlpath=tree%2Fmvc-f19%2Fslides%2Fmvc-L22.ipynb" target="_blank" rel="noopener">Slides</a>&nbsp;via JupyterHub</li>
<li><a class="" href="https://youtu.be/l-DJOmZmNLo" target="_blank" rel="noopener">Screencast</a></li>
</ul>
</li>
<li>Practice
<ul>
<li><a href="https://www.monroecc.edu/faculty/paulseeburger/calcnsf/CalcPlot3D/" target="_blank" rel="noopener">CalcPlot3D</a></li>
<li>Mooculus:&nbsp;<a href="https://ximera.osu.edu/mooculus/calculus3/shapeOfThingsToCome/digInSurfaceIntegrals" target="_blank" rel="noopener">Surface Integrals</a></li>
</ul>
</li>
<li>Extras
<ul>
<li>CalcBLUE:&nbsp;<a class="" href="https://www.youtube.com/watch?v=LNaAEy_K-Cg&amp;list=PL8erL0pXF3JYCn8Xukv0DqVIXtXJbOqdo&amp;index=64" target="_blank" rel="noopener">2-Form Fields</a>&nbsp;*Use with caution. This is a different and more general formulation of surface integrals.</li>
</ul>
</li>
</ul>
</li>
</ul>
<h1 id="Lecture-23">Lecture 23<a class="anchor-link" href="http://localhost:8888/notebooks/mvc/mvc-f19/slides/mvc-L23.ipynb#Lecture-23"></a></h1>
<ul>
<li>Objectives
<ul>
<li>Compute surface integrals
<ul>
<li>of a vector field (flux integrals)</li>
</ul>
</li>
<li>Divergence Theorem
<ul>
<li>know what divergence measures</li>
<li>describe it as a conservation law</li>
<li>use it to compute flux</li>
</ul>
</li>
</ul>
</li>
<li>Resources
<ul>
<li>Content
<ul>
<li>Stewart: &sect;16.6-9</li>
<li>New Strang:
<ul>
<li><a href="https://openstax.org/books/calculus-volume-3/pages/6-5-divergence-and-curl" target="_blank" rel="noopener">&sect;6.5</a>&nbsp;<a href="https://openstax.org/books/calculus-volume-3/pages/6-6-surface-integrals" target="_blank" rel="noopener">&sect;6.6</a>&nbsp;<a href="https://openstax.org/books/calculus-volume-3/pages/6-8-the-divergence-theorem" target="_blank" rel="noopener">&sect;6.8</a></li>
</ul>
</li>
<li><a href="https://hub.columbiajupyter2.org/hub/user-redirect/git-pull?repo=https%3A%2F%2Fgithub.com%2Fdrewyoungren%2Fmvc-f19&amp;urlpath=tree%2Fmvc-f19%2Fslides%2Fmvc-L23.ipynb" target="_blank" rel="noopener">Slides</a>&nbsp;via JupyterHub</li>
<li><a href="https://www.monroecc.edu/faculty/paulseeburger/calcnsf/CalcPlot3D/" target="_blank" rel="noopener">CalcPlot3D</a></li>
<li>Mooculus:&nbsp;<a href="https://ximera.osu.edu/mooculus/calculus3/shapeOfThingsToCome/digInSurfaceIntegrals" target="_blank" rel="noopener">Surface Integrals</a>&nbsp;<a href="https://ximera.osu.edu/mooculus/calculus3/shapeOfThingsToCome/digInDivergenceTheorem" target="_blank" rel="noopener">Divergence Theorem</a></li>
</ul>
</li>
</ul>
</li>
</ul>
<h1 id="Lecture-24">Lecture 24<a class="anchor-link" href="http://localhost:8888/notebooks/mvc/mvc-f19/slides/mvc-L24.ipynb#Lecture-24"></a></h1>
<ul>
<li>Objectives
<ul>
<li>Curl
<ul>
<li>compute the curl of a vector field</li>
<li>interpret direction and magtitude of curl vector</li>
<li>relate to grad and div</li>
</ul>
</li>
<li>Stokes' Theorem
<ul>
<li>orient a surface and its boundary</li>
<li>recognize when it applies</li>
<li>relate to divergence theorem</li>
</ul>
</li>
</ul>
</li>
<li>Resources
<ul>
<li>Content
<ul>
<li>Stewart: &sect;16.6-9</li>
<li>New Strang:
<ul>
<li><a href="https://openstax.org/books/calculus-volume-3/pages/6-7-stokes-theorem" target="_blank" rel="noopener">&sect;6.7</a></li>
</ul>
</li>
<li><a href="https://hub.columbiajupyter2.org/hub/user-redirect/git-pull?repo=https%3A%2F%2Fgithub.com%2Fdrewyoungren%2Fmvc-f19&amp;urlpath=tree%2Fmvc-f19%2Fslides%2Fmvc-L24.ipynb" target="_blank" rel="noopener">Slides</a>&nbsp;via JupyterHub</li>
<li><a href="https://www.monroecc.edu/faculty/paulseeburger/calcnsf/CalcPlot3D/" target="_blank" rel="noopener">CalcPlot3D</a></li>
<li>Mooculus:&nbsp;<a href="https://ximera.osu.edu/mooculus/calculus3/shapeOfThingsToCome/digInSurfaceIntegrals" target="_blank" rel="noopener">Surface Integrals</a>&nbsp;<a href="https://ximera.osu.edu/mooculus/calculus3/shapeOfThingsToCome/digInStokesTheorem" target="_blank" rel="noopener">Stokes' Theorem</a></li>
</ul>
</li>
<li>Extras
<ul>
<li>CalcBLUE:&nbsp;<a class="" href="https://www.youtube.com/watch?v=ypFo3YPtWBg&amp;list=PL8erL0pXF3JYCn8Xukv0DqVIXtXJbOqdo&amp;index=77" target="_blank" rel="noopener">Stokes' Theorem</a>&nbsp;*Use with caution. This is a different and more general formulation of surface integrals.</li>
</ul>
</li>
</ul>
</li>
</ul>
</div>
</div>