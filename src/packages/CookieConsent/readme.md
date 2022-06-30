# Cookie Consent component

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
            <td style="text-align:left;">header</td>
            <td style="text-align:center;"><code>string</code></td>
            <td style="text-align:center;">Required</td>
            <td style="text-align:left;">Top heading on main page</td>
        </tr>
        <tr>
            <td style="text-align:left;">defaultText</td>
            <td style="text-align:center;"><code>string</code></td>
            <td style="text-align:center;">Required</td>
            <td style="text-align:left;">Default description on the cookies</td>
        </tr>
        <tr>
            <td style="text-align:left;">acceptAllText</td>
            <td style="text-align:center;"><code>string</code></td>
            <td style="text-align:center;">Required</td>
            <td style="text-align:left;">Label on "Accept all" button</td>
        </tr>
        <tr>
            <td style="text-align:left;">manageSettingsText</td>
            <td style="text-align:center;"><code>string</code></td>
            <td style="text-align:center;">Required</td>
            <td style="text-align:left;">Label on "Manage Settings" button</td>
        </tr>
        <tr>
            <td style="text-align:left;">howWeUseCookies</td>
            <td style="text-align:center;"><code>string</code></td>
            <td style="text-align:center;">Required</td>
            <td style="text-align:left;">Top Heading on opened page</td>
        </tr>
        <tr>
            <td style="text-align:left;">openContentText</td>
            <td style="text-align:center;"><code>string</code></td>
            <td style="text-align:center;">Required</td>
            <td style="text-align:left;">Description on opened page</td>
        </tr>
        <tr>
            <td style="text-align:left;">saveLbl</td>
            <td style="text-align:center;"><code>string</code></td>
            <td style="text-align:center;">Required</td>
            <td style="text-align:left;">Label on "Save" button</td>
        </tr>
        <tr>
            <td style="text-align:left;">cookiesArray</td>
            <td style="text-align:center;"><code>Array</code></td>
            <td style="text-align:center;">Required, format as in <code>CookieConsent.stories.tsx</code></td>
            <td style="text-align:left;">Array of Cookie objects</td>
        </tr>
        <tr>
            <td style="text-align:left;">onSaveClick</td>
            <td style="text-align:center;"><code>Function</code></td>
            <td style="text-align:center;">Required</td>
            <td style="text-align:left;">Onclick function to save cookie consent</td>
        </tr>
    </tbody>
</table>
