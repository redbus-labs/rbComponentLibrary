# NavList component.

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
            <td style="text-align:left;">navText</td>
            <td style="text-align:center;"><code>string</code></td>
            <td style="text-align:center;">Required</code></td>
            <td style="text-align:left;">to display nav list label</td>
        </tr>
        <tr>
            <td style="text-align:left;">color</td>
            <td style="text-align:center;"><code>string</code></td>
            <td style="text-align:center;">Optional, defaults to <code>"#000"</code></td>
            <td style="text-align:left;">Nav item color</td>
        </tr>
        <tr>
            <td style="text-align:left;">fontSize</td>
            <td style="text-align:center;"><code>string</code></td>
            <td style="text-align:center;">Optional, defaults to <code>"1em"</code></td>
            <td style="text-align:left;">Text font size in em</td>
        </tr>
        <tr>
            <td style="text-align:left;">isBold</td>
            <td style="text-align:center;"><code>boolean</code></td>
            <td style="text-align:center;">Optional, defaults to <code>false</code></td>
            <td style="text-align:left;">To make text bold</td>
        </tr>
        <tr>
            <td style="text-align:left;">leftIconUrl</td>
            <td style="text-align:center;"><code>string</code></td>
            <td style="text-align:center;">Optional</td>
            <td style="text-align:left;">Icon url before label</td>
        </tr>
        <tr>
            <td style="text-align:left;">leftIconSize</td>
            <td style="text-align:center;"><code>string</code></td>
            <td style="text-align:center;">Optional with leftIconUrl, defaults to <code>"1.8em"</code></td>
            <td style="text-align:left;">Left icon size in em</td>
        </tr>
        <tr>
            <td style="text-align:left;">rightIconUrl</td>
            <td style="text-align:center;"><code>string</code></td>
            <td style="text-align:center;">Optional</td>
            <td style="text-align:left;">Arrow icon url</td>
        </tr>
        <tr>
            <td style="text-align:left;">rightIconSize</td>
            <td style="text-align:center;"><code>string</code></td>
            <td style="text-align:center;">Optional with rightIconUrl, defaults to <code>"0.85em"</code></td>
            <td style="text-align:left;">Right icon size in em</td>
        </tr>
        <tr>
            <td style="text-align:left;">showBoxShadow</td>
            <td style="text-align:center;"><code>boolean</code></td>
            <td style="text-align:center;">Optional, defaults to <code>true</code></td>
            <td style="text-align:left;">Flag to show box shadow</td>
        </tr>
        <tr>
            <td style="text-align:left;">showBottomBorder</td>
            <td style="text-align:center;"><code>boolean</code></td>
            <td style="text-align:center;">Optional, defaults to <code>false</code></td>
            <td style="text-align:left;">Flag to show bottom border</td>
        </tr>
        <tr>
            <td style="text-align:left;">borderColor</td>
            <td style="text-align:center;"><code>string</code></td>
            <td style="text-align:center;">Optional with showBottomBorder, defaults to <code>"#f0f1f2"</code></td>
            <td style="text-align:left;">Border color</td>
        </tr>
        <tr>
            <td style="text-align:left;">isSlideable</td>
            <td style="text-align:center;"><code>boolean</code></td>
            <td style="text-align:center;">Optional, defaults to <code>false</code></td>
            <td style="text-align:left;">To slide down list to display content on click</td>
        </tr>
        <tr>
            <td style="text-align:left;">slideContent</td>
            <td style="text-align:center;"><code>string</code></td>
            <td style="text-align:center;">Optional with isSlideable</td>
            <td style="text-align:left;">Border color</td>
        </tr>
        <tr>
            <td style="text-align:left;">slideIconUrl</td>
            <td style="text-align:center;"><code>string</code></td>
            <td style="text-align:center;">Optional with isSlideable</td>
            <td style="text-align:left;">Slide content</td>
        </tr>
        <tr>
            <td style="text-align:left;">slideFontSize</td>
            <td style="text-align:center;"><code>string</code></td>
            <td style="text-align:center;">Optional with isSlideable, defaults to <code>"0.75em"</code></td>
            <td style="text-align:left;">Slide content size</td>
        </tr>
        <tr>
            <td style="text-align:left;">slideColor</td>
            <td style="text-align:center;"><code>string</code></td>
            <td style="text-align:center;">Optional with isSlideable, defaults to <code>"#7e7e8c"</code></td>
            <td style="text-align:left;">Slide content color</td>
        </tr>
        <tr>
            <td style="text-align:left;">clickHandler</td>
            <td style="text-align:center;"><code>function</code></td>
            <td style="text-align:center;">Required(if not slideable)</td>
            <td style="text-align:left;">click handler function</td>
        </tr>
    </tbody>
</table>

