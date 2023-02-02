# Fetch spec

## Building the spec

To build the spec locally first install bikeshed:

```sh
pip3 install bikeshed && bikeshed update
```

Then to build the spec (index.bs) into HTML (index.html), run one of the below
commands:

```sh
bikeshed spec # build once

# or

bikeshed watch # rebuild on changes
```

## Formatting

Use a column width of 100 characters.

Do not use newlines inside "inline" elements, even if that means exceeding the
column width requirement.

```html
<li><p>Execute
<a href=https://w3c.github.io/webappsec-csp/#set-response-csp-list>set <var>response</var>'s CSP list</a>
on <var>response</var>. <span data-anolis-ref>CSP</span>
```

is okay and

```html
<li><p>Execute
<a href=https://w3c.github.io/webappsec-csp/#set-response-csp-list>set <var>response</var>'s CSP
list</a> on <var>response</var>. <span data-anolis-ref>CSP</span>
```

is not.

Using newlines between "inline" element tag names and their content is also
forbidden. (This actually alters the content, by adding spaces.) That is

```html
<a>token</a>
```

is fine and

```html
<a>token
</a>
```

is not.

An `<li>` element always has a `<p>` element inside it, unless it's a child of
`<ul class=brief>`.

If a "block" element contains a single "block" element, do not put it on a
newline.

Do not indent for anything except a new "block" element. For instance

```html
<li><p>Set <var>response</var>'s <span title=concept-response-url-list>url list</span> to a copy of
<var>request</var>'s <span title=concept-request-url-list>url list</span>.
```

is not indented, but

```html
 <li>
  <p>Run these substeps <span data-anolis-spec=html>in parallel</span>:

  <ol>
```

is.

End tags must be omitted when possible and attribute values must not be quoted
(if necessary, use double quotes).

Place one newline between paragraphs (including list elements). Place three
newlines before `<h2>`, and two newlines before other headings. This does not
apply when a nested heading follows the parent heading.

```html
<ul>
 <li><p>Do not place a newline above.

 <li><p>Place a newline above.
</ul>

<p>Place a newline above.


<h3>Place two newlines above.</h3>

<h4>Placing one newline is OK here.</h4>


<h4>Place two newlines above.</h4>
```

Use camel case for variable names and sentence case use spaced names for
definitions, algorithms, etc.

```html
<p>A <a for=/>request</a> has an associated
<dfn export for=request id=concept-request-redirect-mode>redirect mode</dfn>,...
```

```html
<p>Let <var>redirectMode</var> be <var>request</var>'s <a for=request>redirect mode</a>.
```

## IPR policy

This repository is being used for work in the W3C Web-Interoperable Runtimes
Community Group, governed by the
[W3C Community License Agreement (CLA)](http://www.w3.org/community/about/agreements/cla/).
To make substantive contributions, you must join the CG.

If you are not the sole contributor to a contribution (pull request), please
identify all contributors in the pull request comment.

To add a contributor (other than yourself, that's automatic), mark them one per
line as follows:

```
+@github_username
```

If you added a contributor by mistake, you can remove them in a comment with:

```
-@github_username
```

If you are making a pull request on behalf of someone else but you had no part
in designing the feature, you can remove yourself with the above syntax.
