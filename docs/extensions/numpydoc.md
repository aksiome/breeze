# numpydoc

Sphinx extension that provides support for the Numpy docstring format in Sphinx.

- **Documentation**: https://numpydoc.readthedocs.io/
- **Source Code**: https://github.com/numpy/numpydoc

## Example

```{raw} html
<p>Docstring for the example.py module.</p>
<p>Modules names should have short, all-lowercase names.  The module name may
have underscores if this improves readability.</p>
<p>Every module should have a docstring at the very top of the file.  The
module’s docstring may extend over multiple lines.  If your docstring does
extend over multiple lines, the closing three quotation marks must be on
a line by itself, preferably preceded by a blank line.</p>
<dl class="py function">
<dt class="sig sig-object py" id="example.foo">
<span class="sig-prename descclassname"><span class="pre">example.</span></span><span class="sig-name descname"><span class="pre">foo</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">var1</span></span></em>, <em class="sig-param"><span class="n"><span class="pre">var2</span></span></em>, <em class="sig-param"><span class="o"><span class="pre">*</span></span><span class="n"><span class="pre">args</span></span></em>, <em class="sig-param"><span class="n"><span class="pre">long_var_name</span></span><span class="o"><span class="pre">=</span></span><span class="default_value"><span class="pre">'hi'</span></span></em>, <em class="sig-param"><span class="n"><span class="pre">only_seldom_used_keyword</span></span><span class="o"><span class="pre">=</span></span><span class="default_value"><span class="pre">0</span></span></em>, <em class="sig-param"><span class="o"><span class="pre">**</span></span><span class="n"><span class="pre">kwargs</span></span></em><span class="sig-paren">)</span><a class="reference internal" href="_modules/example.html#foo"><span class="viewcode-link"><span class="pre">[source]</span></span></a><a class="headerlink" href="#example.foo" title="Link to this definition">#</a></dt>
<dd><p>Summarize the function in one line.</p>
<p>Several sentences providing an extended description. Refer to
variables using back-ticks, e.g. <cite>var</cite>.</p>
<dl class="field-list">
<dt class="field-odd">Parameters<span class="colon">:</span></dt>
<dd class="field-odd"><dl>
<dt><strong>var1</strong><span class="classifier"><a class="reference external" href="https://numpy.org/doc/stable/glossary.html#term-array_like" title="(in NumPy v2.4)"><span>array_like</span></a></span></dt><dd><p>Array_like means all those objects – lists, nested lists, etc. –
that can be converted to an array.  We can also refer to
variables like <cite>var1</cite>.</p>
</dd>
<dt><strong>var2</strong><span class="classifier"><a class="reference external" href="https://docs.python.org/3/library/functions.html#int" title="(in Python v3.14)"><code class="docutils literal notranslate"><span class="pre">int</span></code></a></span></dt><dd><p>The type above can either refer to an actual Python type
(e.g. <code class="docutils literal notranslate"><span class="pre">int</span></code>), or describe the type of the variable in more
detail, e.g. <code class="docutils literal notranslate"><span class="pre">(N,)</span> <span class="pre">ndarray</span></code> or <code class="docutils literal notranslate"><span class="pre">array_like</span></code>.</p>
</dd>
<dt><strong>*args</strong><span class="classifier"><a class="reference external" href="https://docs.python.org/3/glossary.html#term-iterable" title="(in Python v3.14)"><span>iterable</span></a></span></dt><dd><p>Other arguments.</p>
</dd>
<dt><strong>long_var_name</strong><span class="classifier">{‘hi’, ‘ho’}, optional</span></dt><dd><p>Choices in brackets, default first when optional.</p>
</dd>
</dl>
</dd>
<dt class="field-even">Returns<span class="colon">:</span></dt>
<dd class="field-even"><dl>
<dt><a class="reference external" href="https://docs.python.org/3/library/functions.html#type" title="(in Python v3.14)"><code class="xref py py-obj docutils literal notranslate"><span class="pre">type</span></code></a></dt><dd><p>Explanation of anonymous return value of type <code class="docutils literal notranslate"><span class="pre">type</span></code>.</p>
</dd>
<dt><strong>describe</strong><span class="classifier"><a class="reference external" href="https://docs.python.org/3/library/functions.html#type" title="(in Python v3.14)"><code class="xref py py-obj docutils literal notranslate"><span class="pre">type</span></code></a></span></dt><dd><p>Explanation of return value named <cite>describe</cite>.</p>
</dd>
<dt><strong>out</strong><span class="classifier"><a class="reference external" href="https://docs.python.org/3/library/functions.html#type" title="(in Python v3.14)"><code class="xref py py-obj docutils literal notranslate"><span class="pre">type</span></code></a></span></dt><dd><p>Explanation of <cite>out</cite>.</p>
</dd>
<dt>type_without_description</dt><dd></dd>
</dl>
</dd>
<dt class="field-odd">Other Parameters<span class="colon">:</span></dt>
<dd class="field-odd"><dl>
<dt><strong>only_seldom_used_keyword</strong><span class="classifier"><a class="reference external" href="https://docs.python.org/3/library/functions.html#int" title="(in Python v3.14)"><code class="docutils literal notranslate"><span class="pre">int</span></code></a>, optional</span></dt><dd><p>Infrequently used parameters can be described under this optional
section to prevent cluttering the Parameters section.</p>
</dd>
<dt><strong>**kwargs</strong><span class="classifier"><a class="reference external" href="https://docs.python.org/3/library/stdtypes.html#dict" title="(in Python v3.14)"><code class="docutils literal notranslate"><span class="pre">dict</span></code></a></span></dt><dd><p>Other infrequently used keyword arguments. Note that all keyword
arguments appearing after the first parameter specified under the
Other Parameters section, should also be described under this
section.</p>
</dd>
</dl>
</dd>
<dt class="field-even">Raises<span class="colon">:</span></dt>
<dd class="field-even"><dl class="simple">
<dt>BadException</dt><dd><p>Because you shouldn’t have done that.</p>
</dd>
</dl>
</dd>
</dl>
<div class="admonition seealso">
<p class="admonition-title">See also</p>
<dl class="simple">
<dt><a class="reference external" href="https://numpy.org/doc/stable/reference/generated/numpy.array.html#numpy.array" title="(in NumPy v2.4)"><code class="xref py py-obj docutils literal notranslate"><span class="pre">numpy.array</span></code></a></dt><dd><p>Relationship (optional).</p>
</dd>
<dt><a class="reference external" href="https://numpy.org/doc/stable/reference/generated/numpy.ndarray.html#numpy.ndarray" title="(in NumPy v2.4)"><code class="xref py py-obj docutils literal notranslate"><span class="pre">numpy.ndarray</span></code></a></dt><dd><p>Relationship (optional), which could be fairly long, in which case the line wraps here.</p>
</dd>
<dt><a class="reference external" href="https://numpy.org/doc/stable/reference/generated/numpy.dot.html#numpy.dot" title="(in NumPy v2.4)"><code class="xref py py-obj docutils literal notranslate"><span class="pre">numpy.dot</span></code></a>, <a class="reference external" href="https://numpy.org/doc/stable/reference/generated/numpy.linalg.norm.html#numpy.linalg.norm" title="(in NumPy v2.4)"><code class="xref py py-obj docutils literal notranslate"><span class="pre">numpy.linalg.norm</span></code></a>, <a class="reference external" href="https://numpy.org/doc/stable/reference/generated/numpy.eye.html#numpy.eye" title="(in NumPy v2.4)"><code class="xref py py-obj docutils literal notranslate"><span class="pre">numpy.eye</span></code></a></dt><dd></dd>
</dl>
</div>
<p class="rubric">References</p>
<p>Cite the relevant literature, e.g. <a class="reference internal" href="#r1a7d9ce27141-1" id="id2">[1]</a>.  You may also cite these
references in the notes section above.</p>
<div role="list" class="citation-list">
<div class="citation" id="r1a7d9ce27141-1" role="doc-biblioentry">
<span class="label"><span class="fn-bracket">[</span><a role="doc-backlink" href="#id2">1</a><span class="fn-bracket">]</span></span>
<p>O. McNoleg, “The integration of GIS, remote sensing,
expert systems and adaptive co-kriging for environmental habitat
modelling of the Highland Haggis using object-oriented, fuzzy-logic
and neural-network techniques,” Computers &amp; Geosciences, vol. 22,
pp. 585-588, 1996.</p>
</div>
</div>
<p class="rubric">Examples</p>
<p>These are written in doctest format, and should illustrate how to
use the function.</p>
<div class="doctest highlight-default notranslate"><div class="highlight"><pre><span></span><span class="gp">&gt;&gt;&gt; </span><span class="n">a</span> <span class="o">=</span> <span class="p">[</span><span class="mi">1</span><span class="p">,</span> <span class="mi">2</span><span class="p">,</span> <span class="mi">3</span><span class="p">]</span>
<span class="gp">&gt;&gt;&gt; </span><span class="nb">print</span><span class="p">([</span><span class="n">x</span> <span class="o">+</span> <span class="mi">3</span> <span class="k">for</span> <span class="n">x</span> <span class="ow">in</span> <span class="n">a</span><span class="p">])</span>
<span class="go">[4, 5, 6]</span>
<span class="gp">&gt;&gt;&gt; </span><span class="nb">print</span><span class="p">(</span><span class="s2">&quot;a</span><span class="se">\n</span><span class="s2">b&quot;</span><span class="p">)</span>
<span class="go">a</span>
<span class="go">b</span>
</pre></div>
</div>
</dd></dl>
```
