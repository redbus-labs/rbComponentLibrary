# Travel Insurance component

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
            <td style="text-align:left;">logo</td>
            <td style="text-align:center;"><code>string</code></td>
            <td style="text-align:center;">Optional</td>
            <td style="text-align:left;">Logo Image</td>
        </tr>
        <tr>
            <td style="text-align:left;">heading</td>
            <td style="text-align:center;"><code>string</code></td>
            <td style="text-align:center;">Optional</td>
            <td style="text-align:left;">Heading text</td>
        </tr>
        <tr>
            <td style="text-align:left;">subHeading</td>
            <td style="text-align:center;"><code>string</code></td>
            <td style="text-align:center;">Optional</td>
            <td style="text-align:left;">Sub text</td>
        </tr>
        <tr>
            <td style="text-align:left;">disClosureSheet</td>
            <td style="text-align:center;"><code>string</code></td>
            <td style="text-align:center;">Optional</td>
            <td style="text-align:left;">Disclosure sheet link text</td>
        </tr>
        <tr>
            <td style="text-align:left;">disClosureLink</td>
            <td style="text-align:center;"><code>string</code></td>
            <td style="text-align:center;">Optional</td>
            <td style="text-align:left;">Link to view disclosure sheet</td>
        </tr>
        <tr>
            <td style="text-align:left;">benefitDetails</td>
            <td style="text-align:center;"><code>array</code></td>
            <td style="text-align:center;">Optional, format as in <code>TravelInsurance.stories.tsx</code></td>
            <td style="text-align:left;">Array of insurance objects</td>
        </tr>
        <tr>
            <td style="text-align:left;">radioItem</td>
            <td style="text-align:center;"><code>array</code></td>
            <td style="text-align:center;">Optional, format as in <code>TravelInsurance.stories.tsx</code></td>
            <td style="text-align:left;">User radio selections</td>
        </tr>
        <tr>
            <td style="text-align:left;">isOpen</td>
            <td style="text-align:center;"><code>boolean</code></td>
            <td style="text-align:center;">Optional</td>
            <td style="text-align:left;">To open down arrow</td>
        </tr>
        <tr>
            <td style="text-align:left;">downArrowClass</td>
            <td style="text-align:center;"><code>string</code></td>
            <td style="text-align:center;">Optional</td>
            <td style="text-align:left;">Class of down arrow</td>
        </tr>
         <tr>
            <td style="text-align:left;">error</td>
            <td style="text-align:center;"><code>string</code></td>
            <td style="text-align:center;">Optional</td>
            <td style="text-align:left;">Error message</td>
        </tr>
        <tr>
            <td style="text-align:left;">note</td>
            <td style="text-align:center;"><code>string</code></td>
            <td style="text-align:center;">Optional</td>
            <td style="text-align:left;">Note message</td>
        </tr>
        <tr>
            <td style="text-align:left;">handleChange</td>
            <td style="text-align:center;"><code>function</code></td>
            <td style="text-align:center;">Required</td>
            <td style="text-align:left;">Function triggered on radio change</td>
        </tr>
        <tr>
            <td style="text-align:left;">defaultSelection</td>
            <td style="text-align:center;"><code>string</code></td>
            <td style="text-align:center;">Optional</td>
            <td style="text-align:left;">Default select an option</td>
        </tr>
    </tbody>
</table>
