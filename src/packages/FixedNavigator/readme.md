# Fixed Nav component.

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
            <td style="text-align:left;">fixedPosition</td>
            <td style="text-align:center;"><code>string</code></td>
            <td style="text-align:center;">Optional, defaults to <code>"bottom"</code></td>
            <td style="text-align:left;">fixed position for navigation</td>
        </tr>
        <tr>
            <td style="text-align:left;">navMenu</td>
            <td style="text-align:center;"><code>Array[{label: string; iconFont: any; isSelected: boolean; link: string;}]</code></td>
            <td style="text-align:center;">Required</td>
            <td style="text-align:left;">Navigation menu list</td>
        </tr>
        <tr>
            <td style="text-align:left;">clickHandler</td>
            <td style="text-align:center;"><code>function</code></td>
            <td style="text-align:center;">Required</td>
            <td style="text-align:left;">Click Handler function</td>
        </tr>
    </tbody>
</table>

