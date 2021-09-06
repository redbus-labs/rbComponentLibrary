# Filter Selection List component

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
            <td style="text-align:left;">popularText</td>
            <td style="text-align:center;"><code>string</code></td>
            <td style="text-align:center;">Optional</td>
            <td style="text-align:left;">Input box value</td>
        </tr>
        <tr>
            <td style="text-align:left;">otherText</td>
            <td style="text-align:center;"><code>string</code></td>
            <td style="text-align:center;">Optional</td>
            <td style="text-align:left;">Input box id</td>
        </tr>
        <tr>
            <td style="text-align:left;">font</td>
            <td style="text-align:center;"><code>string</code></td>
            <td style="text-align:center;">Required</td>
            <td style="text-align:left;">Input change handler</td>
        </tr>
        <tr>
            <td style="text-align:left;">rowColor</td>
            <td style="text-align:center;"><code>string</code></td>
            <td style="text-align:center;">Required</td>
            <td style="text-align:left;">Input click handler</td>
        </tr>
        <tr>
            <td style="text-align:left;">color</td>
            <td style="text-align:center;"><code>string</code></td>
            <td style="text-align:center;">Optional</td>
            <td style="text-align:left;">Input background color</td>
        </tr>
        <tr>
            <td style="text-align:left;">popularData</td>
            <td style="text-align:center;"><code>Array of objects</code></td>
            <td style="text-align:center;">Optional, format as in <code>filterList.stories.tsx</code></td>
            <td style="text-align:left;">Popular filter data</td>
        </tr>
        <tr>
            <td style="text-align:left;">othersData</td>
            <td style="text-align:center;"><code>Array of objects</code></td>
            <td style="text-align:center;">Optional, format as in <code>filterList.stories.tsx</code></td>
            <td style="text-align:left;">Other filter data</td>
        </tr>
        <tr>
            <td style="text-align:left;">iconRow</td>
            <td style="text-align:center;"><code>string</code></td>
            <td style="text-align:center;">Optional</td>
            <td style="text-align:left;">Row icon font</td>
        </tr>
        <tr>
            <td style="text-align:left;">onclickHandler</td>
            <td style="text-align:center;"><code>function</code></td>
            <td style="text-align:center;">Required</td>
            <td style="text-align:left;">checkbox click handler</td>
        </tr>
        <tr>
            <td style="text-align:left;">checkedClass</td>
            <td style="text-align:center;"><code>string</code></td>
            <td style="text-align:center;">Optional</td>
            <td style="text-align:left;">checked box font icon class</td>
        </tr>
        <tr>
            <td style="text-align:left;">unCheckedClass</td>
            <td style="text-align:center;"><code>string</code></td>
            <td style="text-align:center;">Optional</td>
            <td style="text-align:left;">Uncheck box font icon class</td>
        </tr>
        <tr>
            <td style="text-align:left;">rowFont</td>
            <td style="text-align:center;"><code>string</code></td>
            <td style="text-align:center;">Optional</td>
            <td style="text-align:left;">Row icon font size</td>
        </tr>
        <tr>
            <td style="text-align:left;">checkBoxWidth</td>
            <td style="text-align:center;"><code>number</code></td>
            <td style="text-align:center;">Optional, defaults to <code>19</code></td>
            <td style="text-align:left;">Checkbox width</td>
        </tr>
        <tr>
            <td style="text-align:left;">checkBoxHight</td>
            <td style="text-align:center;"><code>number</code></td>
            <td style="text-align:center;">Optional, defaults to <code>19</code></td>
            <td style="text-align:left;">Checkbox height</td>
        </tr>
        <tr>
            <td style="text-align:left;">checkBoxBorder</td>
            <td style="text-align:center;"><code>string</code></td>
            <td style="text-align:center;">Optional, defaults to <code>"#3e3e52"</code></td>
            <td style="text-align:left;">Checkbox border color</td>
        </tr>
        <tr>
            <td style="text-align:left;">checkBoxBack</td>
            <td style="text-align:center;"><code>string</code></td>
            <td style="text-align:center;">Optional, defaults to <code>"#f7f4f4"</code></td>
            <td style="text-align:left;">Checkbox background color</td>
        </tr>
        <tr>
            <td style="text-align:left;">persuasionData</td>
            <td style="text-align:center;"><code>object</code></td>
            <td style="text-align:center;">Optional</td>
            <td style="text-align:left;">Persuasion data for dynamic image</td>
        </tr>
    </tbody>
</table>

