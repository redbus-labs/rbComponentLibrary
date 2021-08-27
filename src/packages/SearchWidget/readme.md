# Search Widget component

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
            <td style="text-align:left;">fromLbl</td>
            <td style="text-align:center;"><code>string</code></td>
            <td style="text-align:center;">Required, defaults to <code>"From"</code></td>
            <td style="text-align:left;">From Label</td>
        </tr>
        <tr>
            <td style="text-align:left;">fromIconClass</td>
            <td style="text-align:center;"><code>string</code></td>
            <td style="text-align:center;">Required</td>
            <td style="text-align:left;">From icon class</td>
        </tr>
        <tr>
            <td style="text-align:left;">sourcePlaceholder</td>
            <td style="text-align:center;"><code>string</code></td>
            <td style="text-align:center;">Required, defaults to <code>"Enter Source"</code></td>
            <td style="text-align:left;">Source input placeholder</td>
        </tr>
        <tr>
            <td style="text-align:left;">srcName</td>
            <td style="text-align:center;"><code>string</code></td>
            <td style="text-align:center;">Required</td>
            <td style="text-align:left;">Source city name</td>
        </tr>
        <tr>
            <td style="text-align:left;">toLbl</td>
            <td style="text-align:center;"><code>string</code></td>
            <td style="text-align:center;">Required, defaults to <code>"To"</code></td>
            <td style="text-align:left;">To Label</td>
        </tr>
        <tr>
            <td style="text-align:left;">toIconClass</td>
            <td style="text-align:center;"><code>string</code></td>
            <td style="text-align:center;">Required</td>
            <td style="text-align:left;">To IconClass</td>
        </tr>
        <tr>
            <td style="text-align:left;">destPlaceholder</td>
            <td style="text-align:center;"><code>string</code></td>
            <td style="text-align:center;">Required, defaults to <code>"Enter Destination"</code></td>
            <td style="text-align:left;">Dest input placeholder</td>
        </tr>
        <tr>
            <td style="text-align:left;">destName</td>
            <td style="text-align:center;"><code>string</code></td>
            <td style="text-align:center;">Required</td>
            <td style="text-align:left;">Destination city name</td>
        </tr>
        <tr>
            <td style="text-align:left;">toggleIconClass</td>
            <td style="text-align:center;"><code>string</code></td>
            <td style="text-align:center;">Required</td>
            <td style="text-align:left;">Swap cities image url</td>
        </tr>
        <tr>
            <td style="text-align:left;">sourceId</td>
            <td style="text-align:center;"><code>string</code></td>
            <td style="text-align:center;">Required, defaults to <code>"sourceCity"</code></td>
            <td style="text-align:left;">sourceid to pass to input click function</td>
        </tr>
        <tr>
            <td style="text-align:left;">destinationId</td>
            <td style="text-align:center;"><code>string</code></td>
            <td style="text-align:center;">Required, defaults to <code>"destinationCity</code></td>
            <td style="text-align:left;">destinationid to pass to input click function</td>
        </tr>
        <tr>
            <td style="text-align:left;">openSuggestWindowHandler</td>
            <td style="text-align:center;"><code>function</code></td>
            <td style="text-align:center;">Required</td>
            <td style="text-align:left;">Function to handle input click</td>
        </tr>
        <tr>
            <td style="text-align:left;">swapCitiesHandler</td>
            <td style="text-align:center;"><code>function</code></td>
            <td style="text-align:center;">Required</td>
            <td style="text-align:left;">Function to handler swap cities button click</td>
        </tr>
    </tbody>
</table>

