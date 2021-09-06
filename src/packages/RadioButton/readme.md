# Radio Button component

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
            <td style="text-align:left;">radioList</td>
            <td style="text-align:center;"><code>object</code></td>
            <td style="text-align:center;">Required, format as in <code>RadioButton.stories.tsx</code></td>
            <td style="text-align:left;">Radio Button data object</td>
        </tr>
        <tr>
            <td style="text-align:left;">radioButtonType</td>
            <td style="text-align:center;"><code>string</code></td>
            <td style="text-align:center;">Required<code>"SLIDER_RADIOBUTTON"</code> or <code>"DEFAULT_RADIOBUTTON"</code> or <code>"CUSTOM_RADIOBUTTON"</code></td>
            <td style="text-align:left;">Radio button type</td>
        </tr>
        <tr>
            <td style="text-align:left;">width</td>
            <td style="text-align:center;"><code>number</code></td>
            <td style="text-align:center;">Optional, defaults to <code>200</code></td>
            <td style="text-align:left;">Radio button width</td>
        </tr>
        <tr>
            <td style="text-align:left;">height</td>
            <td style="text-align:center;"><code>number</code></td>
            <td style="text-align:center;">Optional, defaults to <code>32</code></td>
            <td style="text-align:left;">Radio button height</td>
        </tr>
        <tr>
            <td style="text-align:left;">color</td>
            <td style="text-align:center;"><code>string</code></td>
            <td style="text-align:center;">Optional, defaults to <code>"red"</code></td>
            <td style="text-align:left;">Radio button text font color</td>
        </tr>
        <tr>
            <td style="text-align:left;">background</td>
            <td style="text-align:center;"><code>string</code></td>
            <td style="text-align:center;">Optional, defaults to <code>"white"</code></td>
            <td style="text-align:left;">Slider radio button background color</td>
        </tr>
        <tr>
            <td style="text-align:left;">border</td>
            <td style="text-align:center;"><code>string</code></td>
            <td style="text-align:center;">Optional</td>
            <td style="text-align:left;">Radio button border color</td>
        </tr>
        <tr>
            <td style="text-align:left;">radioStateValue</td>
            <td style="text-align:center;"><code>string/number</code></td>
            <td style="text-align:center;">Required</td>
            <td style="text-align:left;">Selected radio option id value</td>
        </tr>
        <tr>
            <td style="text-align:left;">handleChange</td>
            <td style="text-align:center;"><code>function</code></td>
            <td style="text-align:center;">Required</td>
            <td style="text-align:left;">Radio button state change handler</td>
        </tr>
    </tbody>
</table>

