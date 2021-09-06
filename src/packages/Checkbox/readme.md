# Checkbox component

<table>
    <thead>
        <tr>
            <th style="text-align:left;">Attributes</th>
            <th style="text-align:center;">Type</th>
            <th style="text-align:center;">Required/Default</th>
            <th style="text-align:left;">Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td style="text-align:left;">preferCheckBoxPropState</td>
            <td style="text-align:center;"><code>boolean</code></td>
            <td style="text-align:center;">Optional</td>
            <td style="text-align:left;">Prefered checkbox props state</td>
        </tr>
        <tr>
            <td style="text-align:left;">checkboxState</td>
            <td style="text-align:center;"><code>boolean</code></td>
            <td style="text-align:center;">Required</td>
            <td style="text-align:left;">Check box state</td>
        </tr>
        <tr>
            <td style="text-align:left;">checkboxType</td>
            <td style="text-align:center;"><code>string</code></td>
            <td style="text-align:center;">Required, <code>"DEFAULT_CHECKBOX"</code> or <code>"SWITCH_CHECKBOX"</code></td>
            <td style="text-align:left;">Check box UI type</td>
        </tr>
        <tr>
            <td style="text-align:left;">handleSelection</td>
            <td style="text-align:center;"><code>function</code></td>
            <td style="text-align:center;">Required</td>
            <td style="text-align:left;">Handler for checkbox selection state</td>
        </tr>
        <tr>
            <td style="text-align:left;">handleUnSelection</td>
            <td style="text-align:center;"><code>function</code></td>
            <td style="text-align:center;">Required</td>
            <td style="text-align:left;">Handler for checkbox unselection state</td>
        </tr>
        <tr>
            <td style="text-align:left;">radius</td>
            <td style="text-align:center;"><code>number</code></td>
            <td style="text-align:center;">Optional</td>
            <td style="text-align:left;">Checkbox radius</td>
        </tr>
        <tr>
            <td style="text-align:left;">width</td>
            <td style="text-align:center;"><code>number</code></td>
            <td style="text-align:center;">Optional</td>
            <td style="text-align:left;">Checkbox width</td>
        </tr>
        <tr>
            <td style="text-align:left;">height</td>
            <td style="text-align:center;"><code>number</code></td>
            <td style="text-align:center;">Optional</td>
            <td style="text-align:left;">Checkbox height</td>
        </tr>
        <tr>
            <td style="text-align:left;">background</td>
            <td style="text-align:center;"><code>string</code></td>
            <td style="text-align:center;">Optional</td>
            <td style="text-align:left;">Background color</td>
        </tr>
        <tr>
            <td style="text-align:left;">border</td>
            <td style="text-align:center;"><code>string</code></td>
            <td style="text-align:center;">Optional</td>
            <td style="text-align:left;">Checkbox border</td>
        </tr>
        <tr>
            <td style="text-align:left;">customCheckBoxClass</td>
            <td style="text-align:center;"><code>boolean</code></td>
            <td style="text-align:center;">Optional</td>
            <td style="text-align:left;">Flag to enable use of custom checkbox icons</td>
        </tr>
        <tr>
            <td style="text-align:left;">checkedClass</td>
            <td style="text-align:center;"><code>string</code></td>
            <td style="text-align:center;">Required, if <code>customCheckBoxClass</code> is <code>true</code></td>
            <td style="text-align:left;">Checked icon font</td>
        </tr>
        <tr>
            <td style="text-align:left;">uncheckClass</td>
            <td style="text-align:center;"><code>string</code></td>
            <td style="text-align:center;">Required, if <code>customCheckBoxClass</code> is <code>true</code></td>
            <td style="text-align:left;">Unchecked icon font</td>
        </tr>
    </tbody>
</table>

