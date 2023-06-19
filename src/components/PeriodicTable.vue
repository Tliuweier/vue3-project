<template>
    <div style="text-align: center;">
        <h1>
            <slot name="head"></slot>
        </h1>
    </div>
    <table id="element">
        <tbody>
            <!-- 第一行 -->
            <tr>
                <td>
                    <div class="element">
                        <div class="info">
                            <h3>&lt;html&gt;</h3>
                            <p>Document root element.</p>
                            <ul class="links">
                                <li>
                                    <a data-id="html" @click="openMozilla($event)">
                                        Mozilla
                                    </a>
                                </li>
                                <li>
                                    <a data-id="html" @click="openW3C($event)">
                                        W3C Reference
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="icon root">html</div>
                    </div>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>

                    <div class="element">
                        <div class="info">
                            <h3>&lt;col&gt;</h3>
                            <p>Columns in a table.</p>
                            <ul class="links">
                                <li>
                                    <a data-id="col" @click="openMozilla($event)">
                                        Mozilla
                                    </a>
                                </li>
                                <li>
                                    <a data-id="col" @click="openW3C($event)">
                                        W3C Reference
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="icon table">col</div>
                    </div>
                </td>
                <td>
                    <div class="element">
                        <div class="info">
                            <h3>&lt;table&gt;</h3>
                            <p>Table of multi-dimensional data.</p>
                            <ul class="links">
                                <li>
                                    <a data-id="table" @click="openMozilla($event)">
                                        Mozilla
                                    </a>
                                </li>
                                <li>
                                    <a data-id="table" @click="openW3C($event)">
                                        W3C Reference
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="icon table">table</div>
                    </div>
                </td>
            </tr>
            <!-- 第二行 -->
            <tr>
                <td>
                    <div class="element">
                        <div class="info">
                            <h3>&lt;head&gt;</h3>
                            <p>Table of multi-dimensional data.</p>
                            <ul class="links">
                                <li>
                                    <a data-id="head" @click="openMozilla($event)">
                                        Mozilla
                                    </a>
                                </li>
                                <li>
                                    <a data-id="head" @click="openW3C($event)">
                                        W3C Reference
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="icon meta">head</div>
                    </div>
                </td>
                <td>
                    <div class="element">
                        <div class="info">
                            <h3>&lt;span&gt;</h3>
                            <p>Container with no semantic meaning.</p>
                            <ul class="links">
                                <li>
                                    <a data-id="span" @click="openMozilla($event)">
                                        Mozilla
                                    </a>
                                </li>
                                <li>
                                    <a data-id="span" @click="openW3C($event)">
                                        W3C Reference
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="icon text">span</div>
                    </div>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                    <div class="element">
                        <div class="info">
                            <h3>&lt;div&gt;</h3>
                            <p>Container with no semantic meaning.</p>
                            <ul class="links">
                                <li>
                                    <a data-id="div" @click="openMozilla($event)">
                                        Mozilla
                                    </a>
                                </li>
                                <li>
                                    <a data-id="div" @click="openW3C($event)">
                                        W3C Reference
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="icon group">div</div>
                    </div>
                </td>
                <td>
                    <div class="element">
                        <div class="info">
                            <h3>&lt;fieldset&gt;</h3>
                            <p>Set of form controls grouped by theme.</p>
                            <ul class="links">
                                <li>
                                    <a data-id="fieldset" @click="openMozilla($event)">
                                        Mozilla
                                    </a>
                                </li>
                                <li>
                                    <a data-id="fieldset" @click="openW3C($event)">
                                        W3C Reference
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="icon form">fieldset</div>
                    </div>
                </td>
                <td>
                    <div class="element">
                        <div class="info">
                            <h3>&lt;form&gt;</h3>
                            <p>Form.</p>
                            <ul class="links">
                                <li>
                                    <a data-id="form" @click="openMozilla($event)">
                                        Mozilla
                                    </a>
                                </li>
                                <li>
                                    <a data-id="form" @click="openW3C($event)">
                                        W3C Reference
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="icon form">form</div>
                    </div>
                </td>
                <td>
                    <div class="element">
                        <div class="info">
                            <h3>&lt;body&gt;</h3>
                            <p>Document content.</p>
                            <ul class="links">
                                <li>
                                    <a data-id="body" @click="openMozilla($event)">
                                        Mozilla
                                    </a>
                                </li>
                                <li>
                                    <a data-id="body" @click="openW3C($event)">
                                        W3C Reference
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="icon document">body</div>
                    </div>
                </td>
                <td>
                    <div class="element">
                        <div class="info">
                            <h3>&lt;h1&gt;</h3>
                            <p>Heading for the current section.</p>
                            <ul class="links">
                                <li>
                                    <a data-id="h1" @click="openMozilla($event)">
                                        Mozilla
                                    </a>
                                </li>
                                <li>
                                    <a data-id="h1" @click="openW3C($event)">
                                        W3C Reference
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="icon document">h1</div>
                    </div>
                </td>
                <td>
                    <div class="element">
                        <div class="info">
                            <h3>&lt;section&gt;</h3>
                            <p>Contains elements grouped by theme, for example a chapter or tab box.</p>
                            <ul class="links">
                                <li>
                                    <a data-id="section" @click="openMozilla($event)">
                                        Mozilla
                                    </a>
                                </li>
                                <li>
                                    <a data-id="section" @click="openW3C($event)">
                                        W3C Reference
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="icon document">section</div>
                    </div>
                </td>
                <td>
                    <div class="element">
                        <div class="info">
                            <h3>&lt;colgroup&gt;</h3>
                            <p>Defines a group of columns in a table.</p>
                            <ul class="links">
                                <li>
                                    <a data-id="colgroup" @click="openMozilla($event)">
                                        Mozilla
                                    </a>
                                </li>
                                <li>
                                    <a data-id="colgroup" @click="openW3C($event)">
                                        W3C Reference
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="icon table">colgroup</div>
                    </div>
                </td>
                <td>
                    <div class="element">
                        <div class="info">
                            <h3>&lt;tr&gt;</h3>
                            <p>A row of cells.</p>
                            <ul class="links">
                                <li>
                                    <a data-id="tr" @click="openMozilla($event)">
                                        Mozilla
                                    </a>
                                </li>
                                <li>
                                    <a data-id="tr" @click="openW3C($event)">
                                        W3C Reference
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="icon table">tr</div>
                    </div>
                </td>
            </tr>
            <!-- 第三行  -->
            <tr>
                <td>
                    <div class="element">
                        <div class="info">
                            <h3>&lt;title&gt;</h3>
                            <p>Document title.</p>
                            <ul class="links">
                                <li>
                                    <a data-id="title" @click="openMozilla($event)">
                                        Mozilla
                                    </a>
                                </li>
                                <li>
                                    <a data-id="title" @click="openW3C($event)">
                                        W3C Reference
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="icon meta">title</div>
                    </div>
                </td>
                <td>
                    <div class="element">
                        <div class="info">
                            <h3>&lt;a&gt;</h3>
                            <p>Hyperlink.</p>
                            <ul class="links">
                                <li>
                                    <a data-id="a" @click="openMozilla($event)">
                                        Mozilla
                                    </a>
                                </li>
                                <li>
                                    <a data-id="a" @click="openW3C($event)">
                                        W3C Reference
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="icon text">a</div>
                    </div>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                    <div class="element">
                        <div class="info">
                            <h3>&lt;pre&gt;</h3>
                            <p>Text that is preformatted in the HTML code.</p>
                            <ul class="links">
                                <li>
                                    <a data-id="pre" @click="openMozilla($event)">
                                        Mozilla
                                    </a>
                                </li>
                                <li>
                                    <a data-id="pre" @click="openW3C($event)">
                                        W3C Reference
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="icon group">pre</div>
                    </div>
                </td>
                <td>
                    <div class="element">
                        <div class="info">
                            <h3>&lt;meter&gt;</h3>
                            <p>Control for entering a numeric value in a known range.</p>
                            <ul class="links">
                                <li>
                                    <a data-id="meter" @click="openMozilla($event)">
                                        Mozilla
                                    </a>
                                </li>
                                <li>
                                    <a data-id="meter" @click="openW3C($event)">
                                        W3C Reference
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="icon form">meter</div>
                    </div>

                </td>
                <td>

                    <div class="element">
                        <div class="info">
                            <h3>&lt;select&gt;</h3>
                            <p>Control for selecting from multiple options.</p>
                            <ul class="links">
                                <li>
                                    <a data-id="select" @click="openMozilla($event)">
                                        Mozilla
                                    </a>
                                </li>
                                <li>
                                    <a data-id="select" @click="openW3C($event)">
                                        W3C Reference
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="icon form">select</div>
                    </div>
                </td>
                <td>

                    <div class="element">
                        <div class="info">
                            <h3>&lt;aside&gt;</h3>
                            <p>Content related to surrounding elements that doesn't belong inline, such as a advertising or
                                quotes.</p>
                            <ul class="links">
                                <li>
                                    <a data-id="aside" @click="openMozilla($event)">
                                        Mozilla
                                    </a>
                                </li>
                                <li>
                                    <a data-id="aside" @click="openW3C($event)">
                                        W3C Reference
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="icon document">aside</div>
                    </div>
                </td>
                <td>

                    <div class="element">
                        <div class="info">
                            <h3>&lt;h2&gt;</h3>
                            <p>Heading for the current section.</p>
                            <ul class="links">
                                <li>
                                    <a data-id="h2" @click="openMozilla($event)">
                                        Mozilla
                                    </a>
                                </li>
                                <li>
                                    <a data-id="h2" @click="openW3C($event)">
                                        W3C Reference
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="icon document">h2</div>
                    </div>
                </td>
                <td>

                    <div class="element">
                        <div class="info">
                            <h3>&lt;header&gt;</h3>
                            <p>Navigation or introductory elements for the current section.</p>
                            <ul class="links">
                                <li>
                                    <a data-id="header" @click="openMozilla($event)">
                                        Mozilla
                                    </a>
                                </li>
                                <li>
                                    <a data-id="header" @click="openW3C($event)">
                                        W3C Reference
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="icon document">header</div>
                    </div>
                </td>
                <td>

                    <div class="element">
                        <div class="info">
                            <h3>&lt;caption&gt;</h3>
                            <p>Title of a table.</p>
                            <ul class="links">
                                <li>
                                    <a data-id="caption" @click="openMozilla($event)">
                                        Mozilla
                                    </a>
                                </li>
                                <li>
                                    <a data-id="caption" @click="openW3C($event)">
                                        W3C Reference
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="icon table">caption</div>
                    </div>
                </td>
                <td>

                    <div class="element">
                        <div class="info">
                            <h3>&lt;td&gt;</h3>
                            <p>Table cell.</p>
                            <ul class="links">
                                <li>
                                    <a data-id="td" @click="openMozilla($event)">
                                        Mozilla
                                    </a>
                                </li>
                                <li>
                                    <a data-id="td" @click="openW3C($event)">
                                        W3C Reference
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="icon table">td</div>
                    </div>
                </td>
            </tr>
            <!-- 第四行 -->
            <tr>
                <td>
                    <div class="element">
                        <div class="info">
                            <h3>&lt;meta&gt;</h3>
                            <p>Document metadata that can't be represented with other elements.</p>
                            <ul class="links">
                                <li>
                                    <a data-id="meta" @click="openMozilla($event)">
                                        Mozilla
                                    </a>
                                </li>
                                <li>
                                    <a data-id="meta" @click="openW3C($event)">
                                        W3C Reference
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="icon meta">meta</div>
                    </div>

                </td>
                <td>
                    <div class="element">
                        <div class="info">
                            <h3>&lt;rt&gt;</h3>
                            <p>Annotation of preceding text.</p>
                            <ul class="links">
                                <li>
                                    <a data-id="rt" @click="openMozilla($event)">
                                        Mozilla
                                    </a>
                                </li>
                                <li>
                                    <a data-id="rt" @click="openW3C($event)">
                                        W3C Reference
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="icon text">rt</div>
                    </div>

                </td>
                <td>
                    <div class="element">
                        <div class="info">
                            <h3>&lt;dfn&gt;</h3>
                            <p>Term being defined by the parent section.</p>
                            <ul class="links">
                                <li>
                                    <a data-id="dfn" @click="openMozilla($event)">
                                        Mozilla
                                    </a>
                                </li>
                                <li>
                                    <a data-id="dfn" @click="openW3C($event)">
                                        W3C Reference
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="icon text">dfn</div>
                    </div>

                </td>
                <td>
                    <div class="element">
                        <div class="info">
                            <h3>&lt;em&gt;</h3>
                            <p>Text that should be emphasised.</p>
                            <ul class="links">
                                <li>
                                    <a data-id="em" @click="openMozilla($event)">
                                        Mozilla
                                    </a>
                                </li>
                                <li>
                                    <a data-id="em" @click="openW3C($event)">
                                        W3C Reference
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="icon text">em</div>
                    </div>

                </td>
                <td>
                    <div class="element">
                        <div class="info">
                            <h3>&lt;i&gt;</h3>
                            <p>Text in a alternate voice or mood, such as a technical term.</p>
                            <ul class="links">
                                <li>
                                    <a data-id="i" @click="openMozilla($event)">
                                        Mozilla
                                    </a>
                                </li>
                                <li>
                                    <a data-id="i" @click="openW3C($event)">
                                        W3C Reference
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="icon text">i</div>
                    </div>

                </td>
                <td>
                    <div class="element">
                        <div class="info">
                            <h3>&lt;small&gt;</h3>
                            <p>An aside, such as fine print.</p>
                            <ul class="links">
                                <li>
                                    <a data-id="small" @click="openMozilla($event)">
                                        Mozilla
                                    </a>
                                </li>
                                <li>
                                    <a data-id="small" @click="openW3C($event)">
                                        W3C Reference
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="icon text">small</div>
                    </div>

                </td>
                <td>
                    <div class="element">
                        <div class="info">
                            <h3>&lt;ins&gt;</h3>
                            <p>Text that has been inserted during document editing.</p>
                            <ul class="links">
                                <li>
                                    <a data-id="ins" @click="openMozilla($event)">
                                        Mozilla
                                    </a>
                                </li>
                                <li>
                                    <a data-id="ins" @click="openW3C($event)">
                                        W3C Reference
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="icon text">ins</div>
                    </div>

                </td>
                <td>
                    <div class="element">
                        <div class="info">
                            <h3>&lt;s&gt;</h3>
                            <p>Text that is outdated or no longer accurate.</p>
                            <ul class="links">
                                <li>
                                    <a data-id="s" @click="openMozilla($event)">
                                        Mozilla
                                    </a>
                                </li>
                                <li>
                                    <a data-id="s" @click="openW3C($event)">
                                        W3C Reference
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="icon text">s</div>
                    </div>

                </td>
                <td>
                    <div class="element">
                        <div class="info">
                            <h3>&lt;br&gt;</h3>
                            <p>Line break.</p>
                            <ul class="links">
                                <li>
                                    <a data-id="br" @click="openMozilla($event)">
                                        Mozilla
                                    </a>
                                </li>
                                <li>
                                    <a data-id="br" @click="openW3C($event)">
                                        W3C Reference
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="icon group">br</div>
                    </div>

                </td>
                <td>
                    <div class="element">
                        <div class="info">
                            <h3>&lt;p&gt;</h3>
                            <p>Paragraph content.</p>
                            <ul class="links">
                                <li>
                                    <a data-id="p" @click="openMozilla($event)">
                                        Mozilla
                                    </a>
                                </li>
                                <li>
                                    <a data-id="p" @click="openW3C($event)">
                                        W3C Reference
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="icon group">p</div>
                    </div>

                </td>
                <td>
                    <div class="element">
                        <div class="info">
                            <h3>&lt;blockquote&gt;</h3>
                            <p>Quote from another source.</p>
                            <ul class="links">
                                <li>
                                    <a data-id="blockquote" @click="openMozilla($event)">
                                        Mozilla
                                    </a>
                                </li>
                                <li>
                                    <a data-id="blockquote" @click="openW3C($event)">
                                        W3C Reference
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="icon group">blockquote</div>
                    </div>

                </td>
                <td>
                    <div class="element">
                        <div class="info">
                            <h3>&lt;legend&gt;</h3>
                            <p>Define a name for a fieldset.</p>
                            <ul class="links">
                                <li>
                                    <a data-id="legend" @click="openMozilla($event)">
                                        Mozilla
                                    </a>
                                </li>
                                <li>
                                    <a data-id="legend" @click="openW3C($event)">
                                        W3C Reference
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="icon form">legend</div>
                    </div>

                </td>
                <td>
                    <div class="element">
                        <div class="info">
                            <h3>&lt;optgroup&gt;</h3>
                            <p>Group of option.</p>
                            <ul class="links">
                                <li>
                                    <a data-id="optgroup" @click="openMozilla($event)">
                                        Mozilla
                                    </a>
                                </li>
                                <li>
                                    <a data-id="optgroup" @click="openW3C($event)">
                                        W3C Reference
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="icon form">optgroup</div>
                    </div>

                </td>
                <td>
                    <div class="element">
                        <div class="info">
                            <h3>&lt;address&gt;</h3>
                            <p>Contact information for the current article.</p>
                            <ul class="links">
                                <li>
                                    <a data-id="address" @click="openMozilla($event)">
                                        Mozilla
                                    </a>
                                </li>
                                <li>
                                    <a data-id="address" @click="openW3C($event)">
                                        W3C Reference
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="icon document">address</div>
                    </div>

                </td>
                <td>
                    <div class="element">
                        <div class="info">
                            <h3>&lt;h3&gt;</h3>
                            <p>Heading for the current section.</p>
                            <ul class="links">
                                <li>
                                    <a data-id="h3" @click="openMozilla($event)">
                                        Mozilla
                                    </a>
                                </li>
                                <li>
                                    <a data-id="h3" @click="openW3C($event)">
                                        W3C Reference
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="icon document">h3</div>
                    </div>

                </td>
                <td>
                    <div class="element">
                        <div class="info">
                            <h3>&lt;nav&gt;</h3>
                            <p>Contains a collection of links.</p>
                            <ul class="links">
                                <li>
                                    <a data-id="nav" @click="openMozilla($event)">
                                        Mozilla
                                    </a>
                                </li>
                                <li>
                                    <a data-id="nav" @click="openW3C($event)">
                                        W3C Reference
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="icon document">nav</div>
                    </div>

                </td>
                <td>
                    <div class="element">
                        <div class="info">
                            <h3>&lt;menu&gt;</h3>
                            <p>Set of commands.</p>
                            <ul class="links">
                                <li>
                                    <a data-id="menu" @click="openMozilla($event)">
                                        Mozilla
                                    </a>
                                </li>
                                <li>
                                    <a data-id="menu" @click="openW3C($event)">
                                        W3C Reference
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="icon interactive">menu</div>
                    </div>

                </td>
                <td>
                    <div class="element">
                        <div class="info">
                            <h3>&lt;th&gt;</h3>
                            <p>Table heading.</p>
                            <ul class="links">
                                <li>
                                    <a data-id="th" @click="openMozilla($event)">
                                        Mozilla
                                    </a>
                                </li>
                                <li>
                                    <a data-id="th" @click="openW3C($event)">
                                        W3C Reference
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="icon table">th</div>
                    </div>

                </td>
            </tr>
            <!-- 第五行 -->
            <tr>
                <td>
                    <div class="element">
                        <div class="info">
                            <h3>&lt;base&gt;</h3>
                            <p>Specifies URL which non-absolute URLs are relative to.</p>
                            <ul class="links">
                                <li>
                                    <a data-id="base" @click="openMozilla($event)">
                                        Mozilla
                                    </a>
                                </li>
                                <li>
                                    <a data-id="base" @click="openW3C($event)">
                                        W3C Reference
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="icon meta">base</div>
                    </div>

                </td>
                <td>
                    <div class="element">
                        <div class="info">
                            <h3>&lt;rp&gt;</h3>
                            <p>Contains semantically meaningless markup for browsers that don't understand ruby annotations.
                            </p>
                            <ul class="links">
                                <li>
                                    <a data-id="rp" @click="openMozilla($event)">
                                        Mozilla
                                    </a>
                                </li>
                                <li>
                                    <a data-id="rp" @click="openW3C($event)">
                                        W3C Reference
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="icon text">rp</div>
                    </div>

                </td>
                <td>
                    <div class="element">
                        <div class="info">
                            <h3>&lt;abbr&gt;</h3>
                            <p>Abbreviation or acronym.</p>
                            <ul class="links">
                                <li>
                                    <a data-id="abbr" @click="openMozilla($event)">
                                        Mozilla
                                    </a>
                                </li>
                                <li>
                                    <a data-id="abbr" @click="openW3C($event)">
                                        W3C Reference
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="icon text">abbr</div>
                    </div>

                </td>
                <td>
                    <div class="element">
                        <div class="info">
                            <h3>&lt;time&gt;</h3>
                            <p>Time defined in a machine readable format.</p>
                            <ul class="links">
                                <li>
                                    <a data-id="time" @click="openMozilla($event)">
                                        Mozilla
                                    </a>
                                </li>
                                <li>
                                    <a data-id="time" @click="openW3C($event)">
                                        W3C Reference
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="icon text">time</div>
                    </div>

                </td>
                <td>
                    <div class="element">
                        <div class="info">
                            <h3>&lt;b&gt;</h3>
                            <p>Stylistically separated text of equal importance, such as a product name.</p>
                            <ul class="links">
                                <li>
                                    <a data-id="b" @click="openMozilla($event)">
                                        Mozilla
                                    </a>
                                </li>
                                <li>
                                    <a data-id="b" @click="openW3C($event)">
                                        W3C Reference
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="icon text">b</div>
                    </div>

                </td>
                <td>
                    <div class="element">
                        <div class="info">
                            <h3>&lt;strong&gt;</h3>
                            <p>Text that is important.</p>
                            <ul class="links">
                                <li>
                                    <a data-id="strong" @click="openMozilla($event)">
                                        Mozilla
                                    </a>
                                </li>
                                <li>
                                    <a data-id="strong" @click="openW3C($event)">
                                        W3C Reference
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="icon text">strong</div>
                    </div>

                </td>
                <td>
                    <div class="element">
                        <div class="info">
                            <h3>&lt;del&gt;</h3>
                            <p>Text that has been removed during document editing.</p>
                            <ul class="links">
                                <li>
                                    <a data-id="del" @click="openMozilla($event)">
                                        Mozilla
                                    </a>
                                </li>
                                <li>
                                    <a data-id="del" @click="openW3C($event)">
                                        W3C Reference
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="icon text">del</div>
                    </div>

                </td>
                <td>
                    <div class="element">
                        <div class="info">
                            <h3>&lt;kbd&gt;</h3>
                            <p>Example input (usually keyboard) for a program.</p>
                            <ul class="links">
                                <li>
                                    <a data-id="kbd" @click="openMozilla($event)">
                                        Mozilla
                                    </a>
                                </li>
                                <li>
                                    <a data-id="kbd" @click="openW3C($event)">
                                        W3C Reference
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="icon text">kbd</div>
                    </div>

                </td>
                <td>
                    <div class="element">
                        <div class="info">
                            <h3>&lt;hr&gt;</h3>
                            <p>Thematic break within a paragraph.</p>
                            <ul class="links">
                                <li>
                                    <a data-id="hr" @click="openMozilla($event)">
                                        Mozilla
                                    </a>
                                </li>
                                <li>
                                    <a data-id="hr" @click="openW3C($event)">
                                        W3C Reference
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="icon group">hr</div>
                    </div>

                </td>
                <td>
                    <div class="element">
                        <div class="info">
                            <h3>&lt;ol&gt;</h3>
                            <p>Ordered list.</p>
                            <ul class="links">
                                <li>
                                    <a data-id="ol" @click="openMozilla($event)">
                                        Mozilla
                                    </a>
                                </li>
                                <li>
                                    <a data-id="ol" @click="openW3C($event)">
                                        W3C Reference
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="icon group">ol</div>
                    </div>

                </td>
                <td>
                    <div class="element">
                        <div class="info">
                            <h3>&lt;dl&gt;</h3>
                            <p>List of term-description pairs.</p>
                            <ul class="links">
                                <li>
                                    <a data-id="dl" @click="openMozilla($event)">
                                        Mozilla
                                    </a>
                                </li>
                                <li>
                                    <a data-id="dl" @click="openW3C($event)">
                                        W3C Reference
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="icon group">dl</div>
                    </div>

                </td>
                <td>
                    <div class="element">
                        <div class="info">
                            <h3>&lt;label&gt;</h3>
                            <p>Caption for a form control.</p>
                            <ul class="links">
                                <li>
                                    <a data-id="label" @click="openMozilla($event)">
                                        Mozilla
                                    </a>
                                </li>
                                <li>
                                    <a data-id="label" @click="openW3C($event)">
                                        W3C Reference
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="icon form">label</div>
                    </div>

                </td>
                <td>
                    <div class="element">
                        <div class="info">
                            <h3>&lt;option&gt;</h3>
                            <p>Single option within a select control.</p>
                            <ul class="links">
                                <li>
                                    <a data-id="option" @click="openMozilla($event)">
                                        Mozilla
                                    </a>
                                </li>
                                <li>
                                    <a data-id="option" @click="openW3C($event)">
                                        W3C Reference
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="icon form">option</div>
                    </div>

                </td>
                <td>
                    <div class="element">
                        <div class="info">
                            <h3>&lt;datalist&gt;</h3>
                            <p>Define sets of options.</p>
                            <ul class="links">
                                <li>
                                    <a data-id="datalist" @click="openMozilla($event)">
                                        Mozilla
                                    </a>
                                </li>
                                <li>
                                    <a data-id="datalist" @click="openW3C($event)">
                                        W3C Reference
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="icon form">datalist</div>
                    </div>

                </td>
                <td>
                    <div class="element">
                        <div class="info">
                            <h3>&lt;h4&gt;</h3>
                            <p>Heading for the current section.</p>
                            <ul class="links">
                                <li>
                                    <a data-id="h4" @click="openMozilla($event)">
                                        Mozilla
                                    </a>
                                </li>
                                <li>
                                    <a data-id="h4" @click="openW3C($event)">
                                        W3C Reference
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="icon document">h4</div>
                    </div>

                </td>
                <td>
                    <div class="element">
                        <div class="info">
                            <h3>&lt;article&gt;</h3>
                            <p>Section of the page content, such as a blog or forum post.</p>
                            <ul class="links">
                                <li>
                                    <a data-id="article" @click="openMozilla($event)">
                                        Mozilla
                                    </a>
                                </li>
                                <li>
                                    <a data-id="article" @click="openW3C($event)">
                                        W3C Reference
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="icon document">article</div>
                    </div>

                </td>
                <td>
                    <div class="element">
                        <div class="info">
                            <h3>&lt;command&gt;</h3>
                            <p>Command the user can perform, such as publishing an article.</p>
                            <ul class="links">
                                <li>
                                    <a data-id="command" @click="openMozilla($event)">
                                        Mozilla
                                    </a>
                                </li>
                                <li>
                                    <a data-id="command" @click="openW3C($event)">
                                        W3C Reference
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="icon interactive">command</div>
                    </div>

                </td>
                <td>
                    <div class="element">
                        <div class="info">
                            <h3>&lt;tbody&gt;</h3>
                            <p>Contains rows that hold the table's data.</p>
                            <ul class="links">
                                <li>
                                    <a data-id="tbody" @click="openMozilla($event)">
                                        Mozilla
                                    </a>
                                </li>
                                <li>
                                    <a data-id="tbody" @click="openW3C($event)">
                                        W3C Reference
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="icon table">tbody</div>
                    </div>

                </td>
            </tr>
            <!-- 第六行 -->
            <tr>
                <td>
                    <div class="element">
                        <div class="info">
                            <h3>&lt;link&gt;</h3>
                            <p>Other resources related to the document.</p>
                            <ul class="links">
                                <li>
                                    <a data-id="link" @click="openMozilla($event)">
                                        Mozilla
                                    </a>
                                </li>
                                <li>
                                    <a data-id="link" @click="openW3C($event)">
                                        W3C Reference
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="icon meta">link</div>
                    </div>

                </td>
                <td>
                    <div class="element">
                        <div class="info">
                            <h3>&lt;noscript&gt;</h3>
                            <p>Contains elements that are part of the document only if scripting is disabled.</p>
                            <ul class="links">
                                <li>
                                    <a data-id="noscript" @click="openMozilla($event)">
                                        Mozilla
                                    </a>
                                </li>
                                <li>
                                    <a data-id="noscript" @click="openW3C($event)">
                                        W3C Reference
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="icon meta">noscript</div>
                    </div>

                </td>
                <td>
                    <div class="element">
                        <div class="info">
                            <h3>&lt;q&gt;</h3>
                            <p>Quoted text.</p>
                            <ul class="links">
                                <li>
                                    <a data-id="q" @click="openMozilla($event)">
                                        Mozilla
                                    </a>
                                </li>
                                <li>
                                    <a data-id="q" @click="openW3C($event)">
                                        W3C Reference
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="icon text">q</div>
                    </div>

                </td>
                <td>
                    <div class="element">
                        <div class="info">
                            <h3>&lt;var&gt;</h3>
                            <p>Mathematical or programming variable.</p>
                            <ul class="links">
                                <li>
                                    <a data-id="var" @click="openMozilla($event)">
                                        Mozilla
                                    </a>
                                </li>
                                <li>
                                    <a data-id="var" @click="openW3C($event)">
                                        W3C Reference
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="icon text">var</div>
                    </div>

                </td>
                <td>
                    <div class="element">
                        <div class="info">
                            <h3>&lt;sub&gt;</h3>
                            <p>Subscript text.</p>
                            <ul class="links">
                                <li>
                                    <a data-id="sub" @click="openMozilla($event)">
                                        Mozilla
                                    </a>
                                </li>
                                <li>
                                    <a data-id="sub" @click="openW3C($event)">
                                        W3C Reference
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="icon text">sub</div>
                    </div>

                </td>
                <td>
                    <div class="element">
                        <div class="info">
                            <h3>&lt;mark&gt;</h3>
                            <p>Text highlighted for referencing elsewhere.</p>
                            <ul class="links">
                                <li>
                                    <a data-id="mark" @click="openMozilla($event)">
                                        Mozilla
                                    </a>
                                </li>
                                <li>
                                    <a data-id="mark" @click="openW3C($event)">
                                        W3C Reference
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="icon text">mark</div>
                    </div>

                </td>
                <td>
                    <div class="element">
                        <div class="info">
                            <h3>&lt;bdi&gt;</h3>
                            <p>Text that is separated from directional formatting of its surroundings.</p>
                            <ul class="links">
                                <li>
                                    <a data-id="bdi" @click="openMozilla($event)">
                                        Mozilla
                                    </a>
                                </li>
                                <li>
                                    <a data-id="bdi" @click="openW3C($event)">
                                        W3C Reference
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="icon text">bdi</div>
                    </div>

                </td>
                <td>
                    <div class="element">
                        <div class="info">
                            <h3>&lt;wbr&gt;</h3>
                            <p>Opportunity for a line break.</p>
                            <ul class="links">
                                <li>
                                    <a data-id="wbr" @click="openMozilla($event)">
                                        Mozilla
                                    </a>
                                </li>
                                <li>
                                    <a data-id="wbr" @click="openW3C($event)">
                                        W3C Reference
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="icon text">wbr</div>
                    </div>

                </td>
                <td>
                    <div class="element">
                        <div class="info">
                            <h3>&lt;figcaption&gt;</h3>
                            <p>Caption for a figure.</p>
                            <ul class="links">
                                <li>
                                    <a data-id="figcaption" @click="openMozilla($event)">
                                        Mozilla
                                    </a>
                                </li>
                                <li>
                                    <a data-id="figcaption" @click="openW3C($event)">
                                        W3C Reference
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="icon group">figcaption</div>
                    </div>

                </td>
                <td>
                    <div class="element">
                        <div class="info">
                            <h3>&lt;ul&gt;</h3>
                            <p>Unordered list.</p>
                            <ul class="links">
                                <li>
                                    <a data-id="ul" @click="openMozilla($event)">
                                        Mozilla
                                    </a>
                                </li>
                                <li>
                                    <a data-id="ul" @click="openW3C($event)">
                                        W3C Reference
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="icon group">ul</div>
                    </div>

                </td>
                <td>
                    <div class="element">
                        <div class="info">
                            <h3>&lt;dt&gt;</h3>
                            <p>Term which will be described.</p>
                            <ul class="links">
                                <li>
                                    <a data-id="dt" @click="openMozilla($event)">
                                        Mozilla
                                    </a>
                                </li>
                                <li>
                                    <a data-id="dt" @click="openW3C($event)">
                                        W3C Reference
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="icon group">dt</div>
                    </div>

                </td>
                <td>
                    <div class="element">
                        <div class="info">
                            <h3>&lt;input&gt;</h3>
                            <p>Generic form input.</p>
                            <ul class="links">
                                <li>
                                    <a data-id="input" @click="openMozilla($event)">
                                        Mozilla
                                    </a>
                                </li>
                                <li>
                                    <a data-id="input" @click="openW3C($event)">
                                        W3C Reference
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="icon form">input</div>
                    </div>

                </td>
                <td>
                    <div class="element">
                        <div class="info">
                            <h3>&lt;output&gt;</h3>
                            <p>Contains the results of a calculation.</p>
                            <ul class="links">
                                <li>
                                    <a data-id="output" @click="openMozilla($event)">
                                        Mozilla
                                    </a>
                                </li>
                                <li>
                                    <a data-id="output" @click="openW3C($event)">
                                        W3C Reference
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="icon form">output</div>
                    </div>

                </td>
                <td>
                    <div class="element">
                        <div class="info">
                            <h3>&lt;keygen&gt;</h3>
                            <p>Generates private-public key pairs.</p>
                            <ul class="links">
                                <li>
                                    <a data-id="keygen" @click="openMozilla($event)">
                                        Mozilla
                                    </a>
                                </li>
                                <li>
                                    <a data-id="keygen" @click="openW3C($event)">
                                        W3C Reference
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="icon form">keygen</div>
                    </div>

                </td>
                <td>
                    <div class="element">
                        <div class="info">
                            <h3>&lt;h5&gt;</h3>
                            <p>Heading for the current section.</p>
                            <ul class="links">
                                <li>
                                    <a data-id="h5" @click="openMozilla($event)">
                                        Mozilla
                                    </a>
                                </li>
                                <li>
                                    <a data-id="h5" @click="openW3C($event)">
                                        W3C Reference
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="icon document">h5</div>
                    </div>

                </td>
                <td>
                    <div class="element">
                        <div class="info">
                            <h3>&lt;footer&gt;</h3>
                            <p>Footer of the current section.</p>
                            <ul class="links">
                                <li>
                                    <a data-id="footer" @click="openMozilla($event)">
                                        Mozilla
                                    </a>
                                </li>
                                <li>
                                    <a data-id="footer" @click="openW3C($event)">
                                        W3C Reference
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="icon document">footer</div>
                    </div>

                </td>
                <td>
                    <div class="element">
                        <div class="info">
                            <h3>&lt;summary&gt;</h3>
                            <p>Caption of a details element.</p>
                            <ul class="links">
                                <li>
                                    <a data-id="summary" @click="openMozilla($event)">
                                        Mozilla
                                    </a>
                                </li>
                                <li>
                                    <a data-id="summary" @click="openW3C($event)">
                                        W3C Reference
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="icon interactive">summary</div>
                    </div>

                </td>
                <td>
                    <div class="element">
                        <div class="info">
                            <h3>&lt;thead&gt;</h3>
                            <p>Contains rows with table headings.</p>
                            <ul class="links">
                                <li>
                                    <a data-id="thead" @click="openMozilla($event)">
                                        Mozilla
                                    </a>
                                </li>
                                <li>
                                    <a data-id="thead" @click="openW3C($event)">
                                        W3C Reference
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="icon table">thead</div>
                    </div>

                </td>
            </tr>
            <!-- 第七行 -->
            <tr>
                <td>
                    <div class="element">
                        <div class="info">
                            <h3>&lt;style&gt;</h3>
                            <p>Styling defined inline data.</p>
                            <ul class="links">
                                <li>
                                    <a data-id="style" @click="openMozilla($event)">
                                        Mozilla
                                    </a>
                                </li>
                                <li>
                                    <a data-id="style" @click="openW3C($event)">
                                        W3C Reference
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="icon meta">style</div>
                    </div>

                </td>
                <td>
                    <div class="element">
                        <div class="info">
                            <h3>&lt;script&gt;</h3>
                            <p>Inline or linked client side scripts.</p>
                            <ul class="links">
                                <li>
                                    <a data-id="script" @click="openMozilla($event)">
                                        Mozilla
                                    </a>
                                </li>
                                <li>
                                    <a data-id="script" @click="openW3C($event)">
                                        W3C Reference
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="icon meta">script</div>
                    </div>

                </td>
                <td>
                    <div class="element">
                        <div class="info">
                            <h3>&lt;cite&gt;</h3>
                            <p>Title of a referenced piece of work.</p>
                            <ul class="links">
                                <li>
                                    <a data-id="cite" @click="openMozilla($event)">
                                        Mozilla
                                    </a>
                                </li>
                                <li>
                                    <a data-id="cite" @click="openW3C($event)">
                                        W3C Reference
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="icon text">cite</div>
                    </div>

                </td>
                <td>
                    <div class="element">
                        <div class="info">
                            <h3>&lt;samp&gt;</h3>
                            <p>Sample output of a program.</p>
                            <ul class="links">
                                <li>
                                    <a data-id="samp" @click="openMozilla($event)">
                                        Mozilla
                                    </a>
                                </li>
                                <li>
                                    <a data-id="samp" @click="openW3C($event)">
                                        W3C Reference
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="icon text">samp</div>
                    </div>

                </td>
                <td>
                    <div class="element">
                        <div class="info">
                            <h3>&lt;sup&gt;</h3>
                            <p>Superscript text.</p>
                            <ul class="links">
                                <li>
                                    <a data-id="sup" @click="openMozilla($event)">
                                        Mozilla
                                    </a>
                                </li>
                                <li>
                                    <a data-id="sup" @click="openW3C($event)">
                                        W3C Reference
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="icon text">sup</div>
                    </div>

                </td>
                <td>
                    <div class="element">
                        <div class="info">
                            <h3>&lt;ruby&gt;</h3>
                            <p>Contains text with annotations, such as pronounciation hints. Commonly used in East Asian
                                text.</p>
                            <ul class="links">
                                <li>
                                    <a data-id="ruby" @click="openMozilla($event)">
                                        Mozilla
                                    </a>
                                </li>
                                <li>
                                    <a data-id="ruby" @click="openW3C($event)">
                                        W3C Reference
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="icon text">ruby</div>
                    </div>

                </td>
                <td>
                    <div class="element">
                        <div class="info">
                            <h3>&lt;bdo&gt;</h3>
                            <p>Defines directional formatting for content.</p>
                            <ul class="links">
                                <li>
                                    <a data-id="bdo" @click="openMozilla($event)">
                                        Mozilla
                                    </a>
                                </li>
                                <li>
                                    <a data-id="bdo" @click="openW3C($event)">
                                        W3C Reference
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="icon text">bdo</div>
                    </div>

                </td>
                <td>
                    <div class="element">
                        <div class="info">
                            <h3>&lt;code&gt;</h3>
                            <p>Fragment of code.</p>
                            <ul class="links">
                                <li>
                                    <a data-id="code" @click="openMozilla($event)">
                                        Mozilla
                                    </a>
                                </li>
                                <li>
                                    <a data-id="code" @click="openW3C($event)">
                                        W3C Reference
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="icon text">code</div>
                    </div>

                </td>
                <td>
                    <div class="element">
                        <div class="info">
                            <h3>&lt;figure&gt;</h3>
                            <p>Contains elements related to single concept, such as an illustration or code example.</p>
                            <ul class="links">
                                <li>
                                    <a data-id="figure" @click="openMozilla($event)">
                                        Mozilla
                                    </a>
                                </li>
                                <li>
                                    <a data-id="figure" @click="openW3C($event)">
                                        W3C Reference
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="icon group">figure</div>
                    </div>

                </td>
                <td>
                    <div class="element">
                        <div class="info">
                            <h3>&lt;li&gt;</h3>
                            <p>List item.</p>
                            <ul class="links">
                                <li>
                                    <a data-id="li" @click="openMozilla($event)">
                                        Mozilla
                                    </a>
                                </li>
                                <li>
                                    <a data-id="li" @click="openW3C($event)">
                                        W3C Reference
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="icon group">li</div>
                    </div>

                </td>
                <td>
                    <div class="element">
                        <div class="info">
                            <h3>&lt;dd&gt;</h3>
                            <p>Description for the preceding term.</p>
                            <ul class="links">
                                <li>
                                    <a data-id="dd" @click="openMozilla($event)">
                                        Mozilla
                                    </a>
                                </li>
                                <li>
                                    <a data-id="dd" @click="openW3C($event)">
                                        W3C Reference
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="icon group">dd</div>
                    </div>

                </td>
                <td>
                    <div class="element">
                        <div class="info">
                            <h3>&lt;textarea&gt;</h3>
                            <p>Multiline free-form text input.</p>
                            <ul class="links">
                                <li>
                                    <a data-id="textarea" @click="openMozilla($event)">
                                        Mozilla
                                    </a>
                                </li>
                                <li>
                                    <a data-id="textarea" @click="openW3C($event)">
                                        W3C Reference
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="icon form">textarea</div>
                    </div>

                </td>
                <td>
                    <div class="element">
                        <div class="info">
                            <h3>&lt;button&gt;</h3>
                            <p>A button.</p>
                            <ul class="links">
                                <li>
                                    <a data-id="button" @click="openMozilla($event)">
                                        Mozilla
                                    </a>
                                </li>
                                <li>
                                    <a data-id="button" @click="openW3C($event)">
                                        W3C Reference
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="icon form">button</div>
                    </div>

                </td>
                <td>
                    <div class="element">
                        <div class="info">
                            <h3>&lt;progress&gt;</h3>
                            <p>Control for displaying progress of a task.</p>
                            <ul class="links">
                                <li>
                                    <a data-id="progress" @click="openMozilla($event)">
                                        Mozilla
                                    </a>
                                </li>
                                <li>
                                    <a data-id="progress" @click="openW3C($event)">
                                        W3C Reference
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="icon form">progress</div>
                    </div>

                </td>
                <td>
                    <div class="element">
                        <div class="info">
                            <h3>&lt;h6&gt;</h3>
                            <p>Heading for the current section.</p>
                            <ul class="links">
                                <li>
                                    <a data-id="h6" @click="openMozilla($event)">
                                        Mozilla
                                    </a>
                                </li>
                                <li>
                                    <a data-id="h6" @click="openW3C($event)">
                                        W3C Reference
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="icon document">h6</div>
                    </div>

                </td>
                <td>
                    <div class="element">
                        <div class="info">
                            <h3>&lt;hgroup&gt;</h3>
                            <p>Collection of headings for the current section. The highest ranked heading represents the
                                group in the document outline.</p>
                            <ul class="links">
                                <li>
                                    <a data-id="hgroup" @click="openMozilla($event)">
                                        Mozilla
                                    </a>
                                </li>
                                <li>
                                    <a data-id="hgroup" @click="openW3C($event)">
                                        W3C Reference
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="icon document">hgroup</div>
                    </div>

                </td>
                <td>
                    <div class="element">
                        <div class="info">
                            <h3>&lt;details&gt;</h3>
                            <p>Contains additional information, such as the contents of an accordian view.</p>
                            <ul class="links">
                                <li>
                                    <a data-id="details" @click="openMozilla($event)">
                                        Mozilla
                                    </a>
                                </li>
                                <li>
                                    <a data-id="details" @click="openW3C($event)">
                                        W3C Reference
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="icon interactive">details</div>
                    </div>

                </td>
                <td>
                    <div class="element">
                        <div class="info">
                            <h3>&lt;tfoot&gt;</h3>
                            <p>Contains rows with summary of data.</p>
                            <ul class="links">
                                <li>
                                    <a data-id="tfoot" @click="openMozilla($event)">
                                        Mozilla
                                    </a>
                                </li>
                                <li>
                                    <a data-id="tfoot" @click="openW3C($event)">
                                        W3C Reference
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="icon table">tfoot</div>
                    </div>

                </td>
            </tr>
            <!-- 空白行 -->
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <!-- 最后一行 -->
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                    <div class="element">
                        <div class="info">
                            <h3>&lt;img&gt;</h3>
                            <p>An image.</p>
                            <ul class="links">
                                <li>
                                    <a data-id="img" @click="openMozilla($event)">
                                        Mozilla
                                    </a>
                                </li>
                                <li>
                                    <a data-id="img" @click="openW3C($event)">
                                        W3C Reference
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="icon embedding">img</div>
                    </div>
                </td>
                <td>
                    <div class="element">
                        <div class="info">
                            <h3>&lt;area&gt;</h3>
                            <p>Hyperlink area in an image map.</p>
                            <ul class="links">
                                <li>
                                    <a data-id="area" @click="openMozilla($event)">
                                        Mozilla
                                    </a>
                                </li>
                                <li>
                                    <a data-id="area" @click="openMozilla($event)">
                                        W3C Reference
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="icon embedding">area</div>
                    </div>
                </td>
                <td>
                    <div class="element">
                        <div class="info">
                            <h3>&lt;map&gt;</h3>
                            <p>Image map for adding hyperlinks to parts of an image.</p>
                            <ul class="links">
                                <li>
                                    <a data-id="map" @click="openMozilla($event)">
                                        Mozilla
                                    </a>
                                </li>
                                <li>
                                    <a data-id="map" @click="openMozilla($event)">
                                        W3C Reference
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="icon embedding">map</div>
                    </div>
                </td>
                <td>
                    <div class="element">
                        <div class="info">
                            <h3>&lt;embed&gt;</h3>
                            <p>Reference to non-HTML content.</p>
                            <ul class="links">
                                <li>
                                    <a data-id="embed" @click="openMozilla($event)">
                                        Mozilla
                                    </a>
                                </li>
                                <li>
                                    <a data-id="embed" @click="openMozilla($event)">
                                        W3C Reference
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="icon embedding">embed</div>
                    </div>
                </td>
                <td>
                    <div class="element">
                        <div class="info">
                            <h3>&lt;object&gt;</h3>
                            <p>Reference to non-HTML content.</p>
                            <ul class="links">
                                <li>
                                    <a data-id="object" @click="openMozilla($event)">
                                        Mozilla
                                    </a>
                                </li>
                                <li>
                                    <a data-id="object" @click="openMozilla($event)">
                                        W3C Reference
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="icon embedding">object</div>
                    </div>
                </td>
                <td>
                    <div class="element">
                        <div class="info">
                            <h3>&lt;param&gt;</h3>
                            <p>Parameters for the parent object.</p>
                            <ul class="links">
                                <li>
                                    <a data-id="param" @click="openMozilla($event)">
                                        Mozilla
                                    </a>
                                </li>
                                <li>
                                    <a data-id="param" @click="openMozilla($event)">
                                        W3C Reference
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="icon embedding">param</div>
                    </div>
                </td>
                <td>
                    <div class="element">
                        <div class="info">
                            <h3>&lt;source&gt;</h3>
                            <p>Alternative sources for parent video or audio elements.</p>
                            <ul class="links">
                                <li>
                                    <a data-id="source" @click="openMozilla($event)">
                                        Mozilla
                                    </a>
                                </li>
                                <li>
                                    <a data-id="source" @click="openMozilla($event)">
                                        W3C Reference
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="icon embedding">source</div>
                    </div>
                </td>
                <td>
                    <div class="element">
                        <div class="info">
                            <h3>&lt;iframe&gt;</h3>
                            <p>Nested browser frame.</p>
                            <ul class="links">
                                <li>
                                    <a data-id="iframe" @click="openMozilla($event)">
                                        Mozilla
                                    </a>
                                </li>
                                <li>
                                    <a data-id="iframe" @click="openMozilla($event)">
                                        W3C Reference
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="icon embedding">iframe</div>
                    </div>
                </td>
                <td>
                    <div class="element">
                        <div class="info">
                            <h3>&lt;canvas&gt;</h3>
                            <p>Bitmap which is editable by client side scripts.</p>
                            <ul class="links">
                                <li>
                                    <a data-id="canvas" @click="openMozilla($event)">
                                        Mozilla
                                    </a>
                                </li>
                                <li>
                                    <a data-id="canvas" @click="openMozilla($event)">
                                        W3C Reference
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="icon embedding">canvas</div>
                    </div>
                </td>
                <td>
                    <div class="element">
                        <div class="info">
                            <h3>&lt;track&gt;</h3>
                            <p>Specifies external timing track for media elements.</p>
                            <ul class="links">
                                <li>
                                    <a data-id="track" @click="openMozilla($event)">
                                        Mozilla
                                    </a>
                                </li>
                                <li>
                                    <a data-id="track" @click="openMozilla($event)">
                                        W3C Reference
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="icon embedding">track</div>
                    </div>
                </td>
                <td>
                    <div class="element">
                        <div class="info">
                            <h3>&lt;audio&gt;</h3>
                            <p>Audio file.</p>
                            <ul class="links">
                                <li>
                                    <a data-id="audio" @click="openMozilla($event)">
                                        Mozilla
                                    </a>
                                </li>
                                <li>
                                    <a data-id="audio" @click="openMozilla($event)">
                                        W3C Reference
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="icon embedding">audio</div>
                    </div>
                </td>
                <td>
                    <div class="element">
                        <div class="info">
                            <h3>&lt;video&gt;</h3>
                            <p>Video.</p>
                            <ul class="links">
                                <li>
                                    <a data-id="video" @click="openMozilla($event)">
                                        Mozilla
                                    </a>
                                </li>
                                <li>
                                    <a data-id="video" @click="openMozilla($event)">
                                        W3C Reference
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="icon embedding">video</div>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
    <div class="legend-box">
        <div class="legend">
            <div class="icon root"></div>
            根元素
        </div>
        <div class="legend">
            <div class="icon text"></div>
            文本级别语义
        </div>
        <div class="legend">
            <div class="icon form"></div>
            表单
        </div>
        <div class="legend">
            <div class="icon table"></div>
            表格数据
        </div>
        <div class="legend">
            <div class="icon meta"></div>
            元数据和脚本
        </div>
        <div class="legend">
            <div class="icon group"></div>
            组合内容
        </div>
        <div class="legend">
            <div class="icon document"></div>
            文档章节
        </div>
        <div class="legend">
            <div class="icon interactive"></div>
            交互元素
        </div>
        <div class="legend">
            <div class="icon embedding"></div>
            嵌入式内容
        </div>
    </div>
</template>
<script setup lang="ts">
// 元素周期表
import { onMounted } from 'vue'
let openMozilla = (e: any) => {
    let id = e.currentTarget.dataset.id
    let url = `https://developer.mozilla.org/en-US/docs/Web/HTML/Element/${id}`
    window.open(url, '_blank')
}
let openW3C = (e: any) => {
    let id = e.currentTarget.dataset.id
    let url = `https://html.spec.whatwg.org/multipage/semantics.html#the-${id}-element-0`
    window.open(url, '_blank')
}

onMounted(() => {
    document.querySelectorAll('#element td').forEach(item => {
        item.addEventListener('click', (e: Event) => {
            let dom = e.target as HTMLInputElement
            let self = dom.parentElement?.children[0].classList.contains('active')
            document.querySelector('.active')?.classList.remove('active')
            if (self) {
                dom.parentElement?.children[0].classList.remove('active')
            } else {
                dom.parentElement?.children[0].classList.add('active')
            }
        })
    })
})
</script>

<style scoped lang="scss">
$rootColor: #9bff9b;
$textColor: #ffff64;
$formColor: #64ff64;
$tableColor: #ff9664;
$metaColor: #788cff;
$groupColor: #ff9650;
$docColor: #a0afff;
$interactiveColor: #ffffff;
$embeddingColor: #ff96ff;

td {
    width: 4em;
    height: 4em;
    border-radius: 4px;
}

#element {
    margin: 2.3em auto;
}

.element {
    width: 4em;
    height: 4em;
    display: block;
}

.root {
    background-color: $rootColor;
}

.text {
    background-color: $textColor;
}

.form {
    background-color: $formColor;
}

.table {
    background-color: $tableColor;
}

.meta {
    background-color: $metaColor;
}

.group {
    background-color: $groupColor;
}

.document {
    background-color: $docColor;
}

.interactive {
    background-color: $interactiveColor;
}

.embedding {
    background-color: $embeddingColor;
}

.element .icon {
    text-align: center;
    color: #000;
    border-radius: 4px;
    width: 100%;
    height: 100%;
    line-height: 4em;
    display: block;
    opacity: .8;
    position: relative;

    &:hover {
        transform: scale(1.1);
        transition: .6s;
        opacity: 1;
        z-index: 100;
        box-shadow: rgba(0, 0, 0, 0.75) 0 0 8px 2px;
    }
}

.info {
    width: 20em;
    min-height: 5em;
    background: #272b38;
    border-radius: .5em;
    margin-top: 4.2em;
    position: absolute;
    display: none;
    color: #fff;
    padding: 0.75em;
    z-index: 200;

    .links {
        list-style: none;
        margin: 0;
        padding: 0;

        li {
            display: inline;

            a {
                cursor: pointer;
                text-decoration: none;
                color: #fff;
            }
        }
    }
}

.active {
    display: block;
}

.legend-box {
    width: 70em;
    margin: 4em auto;
}

.legend {
    width: 24%;
    float: left;
    padding: 0.125em 0
}

.legend .icon {
    width: 1.5em;
    height: 1.5em;
    display: inline-block;
    margin: 0 0.5em;
    vertical-align: middle;
}</style>