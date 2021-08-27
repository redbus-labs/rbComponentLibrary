# Calendar Wrapper Widget component

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
            <td style="text-align:left;">widgetMainLbl</td>
            <td style="text-align:center;"><code>string</code></td>
            <td style="text-align:center;">Required, defaults to <code>"Journey Date"</code></td>
            <td style="text-align:left;">Widget main label</td>
        </tr>
        <tr>
            <td style="text-align:left;">formattedDoj</td>
            <td style="text-align:center;"><code>any</code></td>
            <td style="text-align:center;">Required</td>
            <td style="text-align:left;">Formatted onward DOJ</td>
        </tr>
        <tr>
            <td style="text-align:left;">todayLbl</td>
            <td style="text-align:center;"><code>string</code></td>
            <td style="text-align:center;">Required, defaults to <code>"Today"</code></td>
            <td style="text-align:left;">Today date selection button label</td>
        </tr>
        <tr>
            <td style="text-align:left;">tomorrowLbl</td>
            <td style="text-align:center;"><code>string</code></td>
            <td style="text-align:center;">Required, defaults to <code>"Tomorrow"</code></td>
            <td style="text-align:left;">Tomorrow date selection button label</td>
        </tr>
        <tr>
            <td style="text-align:left;">calendarIconFont</td>
            <td style="text-align:center;"><code>any</code></td>
            <td style="text-align:center;">Optional</code></td>
            <td style="text-align:left;">Calendar icon/img with tag for displaying icon</td>
        </tr>
        <tr>
            <td style="text-align:left;">isRoundTrip</td>
            <td style="text-align:center;"><code>boolean</code></td>
            <td style="text-align:center;">Optional, defaults to <code>false</code></td>
            <td style="text-align:left;">Flag to show roundtrip date selection block</td>
        </tr>
        <tr>
            <td style="text-align:left;">roundTripLbl</td>
            <td style="text-align:center;"><code>string</code></td>
            <td style="text-align:center;">Optional with <code>isRoundTrip</code> = <code>true</code>, defaults to <code>"Return Date(Optional)"</code></td>
            <td style="text-align:left;">Roundtrip label</td>
        </tr>
        <tr>
            <td style="text-align:left;">formattedRTDoj</td>
            <td style="text-align:center;"><code>any</code></td>
            <td style="text-align:center;">Required if <code>isRoundTrip</code> is <code>true</code></td>
            <td style="text-align:left;">Formatted return date</td>
        </tr>
        <tr>
            <td style="text-align:left;">roundTripMsg</td>
            <td style="text-align:center;"><code>string</code></td>
            <td style="text-align:center;">Optional</td>
            <td style="text-align:left;">Text to display benefits of roundtrip</td>
        </tr>
        <tr>
            <td style="text-align:left;">removeRTDoj</td>
            <td style="text-align:center;"><code>boolean</code></td>
            <td style="text-align:center;">Optional with <code>isRoundTrip</code> = <code>true</code>, defaults to <code>false</code></td>
            <td style="text-align:left;">Flag to enable removing selected roundtrip date</td>
        </tr>
        <tr>
            <td style="text-align:left;">addDojIconFont</td>
            <td style="text-align:center;"><code>any</code></td>
            <td style="text-align:center;">Required, if <code>isRoundTrip</code> is <code>true</code></td>
            <td style="text-align:left;">Add date Icon/img with tag for roundtrip date block</td>
        </tr>
        <tr>
            <td style="text-align:left;">remDojIconFont</td>
            <td style="text-align:center;"><code>any</code></td>
            <td style="text-align:center;">Required if <code>removeRTDoj</code> is <code>true</code></td>
            <td style="text-align:left;">Remove return date icon/img with tag</td>
        </tr>
        <tr>
            <td style="text-align:left;">onwardDojClickHandler</td>
            <td style="text-align:center;"><code>function</code></td>
            <td style="text-align:center;">Required</td>
            <td style="text-align:left;">Onward doj change click handler</td>
        </tr>
        <tr>
            <td style="text-align:left;">todayTomClickHandler</td>
            <td style="text-align:center;"><code>function</code></td>
            <td style="text-align:center;">Required</td>
            <td style="text-align:left;">Today tomorrow CTA click handler</td>
        </tr>
        <tr>
            <td style="text-align:left;">returnDojClickHandler</td>
            <td style="text-align:center;"><code>function</code></td>
            <td style="text-align:center;">Required if <code>isRoundTrip</code> is <code>true</code></td>
            <td style="text-align:left;">Return doj add/change click handler</td>
        </tr>
        <tr>
            <td style="text-align:left;">removeRTDojClickHandler</td>
            <td style="text-align:center;"><code>function</code></td>
            <td style="text-align:center;">Required if <code>removeRTDoj</code> is <code>true</code></td>
            <td style="text-align:left;">Remove return date icon click handler</td>
        </tr>
    </tbody>
</table>

