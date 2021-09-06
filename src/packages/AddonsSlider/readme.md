# Addons Slider Component

<table>
    <thead>
        <tr>
            <th style="text-align:left;">Attributes</th>
            <th style="text-align:left;">Type</th>
            <th style="text-align:center;">Required/Default</th>
            <th style="text-align:left;">Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td style="text-align:left;">DataAddons</td>
            <td style="text-align:left;"><code>object</code></td>
            <td style="text-align:center;">Required, object format as in <code>defaultProps.ts</code></td>
            <td style="text-align:left;">Addons data for the slider</td>
        </tr>
        <tr>
            <td style="text-align:left;">currency</td>
            <td style="text-align:left;"><code>string</code></td>
            <td style="text-align:center;">Optional, defaults to <code>"₹"</code></td>
            <td style="text-align:left;">Currency symbol to display</td>
        </tr>
        <tr>
            <td style="text-align:left;">Orientation</td>
            <td style="text-align:left;"><code>string</code></td>
            <td style="text-align:center;">Optional, defaults to <code>"row"</code></td>
            <td style="text-align:left;">orientation of the slider</td>
        </tr>
        <tr>
            <td style="text-align:left;">BackgroundAddon</td>
            <td style="text-align:left;"><code>string</code></td>
            <td style="text-align:center;">Optional, defaults to <code>"#fff"</code></td>
            <td style="text-align:left;">background color of each addon card</td>
        </tr>
        <tr>
            <td style="text-align:left;">marginColumn</td>
            <td style="text-align:left;"><code>string</code></td>
            <td style="text-align:center;">Optional</td>
            <td style="text-align:left;">Left margin spacing for the slider</td>
        </tr>
        <tr>
            <td style="text-align:left;">icon</td>
            <td style="text-align:left;"><code>string</code></td>
            <td style="text-align:center;">Optional</td>
            <td style="text-align:left;">Close icon classname for the addons view details overlay</td>
        </tr>
        <tr>
            <td style="text-align:left;">BackgroundColourAddons</td>
            <td style="text-align:left;"><code>string</code></td>
            <td style="text-align:center;">Optional, defaults to <code>"#fff"</code></td>
            <td style="text-align:left;">background color of the slider</td>
        </tr>
        <tr>
            <td style="text-align:left;">AddonsToDisplay</td>
            <td style="text-align:left;"><code>number</code></td>
            <td style="text-align:center;">Optional</td>
            <td style="text-align:center;">Count size of addons to display in the slider</td>
        </tr>
        <tr>
            <td style="text-align:left;">AddonsHeader1</td>
            <td style="text-align:left;"><code>string</code></td>
            <td style="text-align:center;">Optional</td>
            <td style="text-align:center;">Addons slider main heading</td>
        </tr>
        <tr>
            <td style="text-align:left;">AddonsHeader2</td>
            <td style="text-align:left;"><code>string</code></td>
            <td style="text-align:center;">Optional</td>
            <td style="text-align:center;">Addons slider sub heading</td>
        </tr>
        <tr>
            <td style="text-align:left;">ViewDiscription</td>
            <td style="text-align:left;"><code>string</code></td>
            <td style="text-align:center;">Optional</td>
            <td style="text-align:center;">Description label in details overlay</td>
        </tr>
        <tr>
            <td style="text-align:left;">ViewInclusion</td>
            <td style="text-align:left;"><code>string</code></td>
            <td style="text-align:center;">Optional</td>
            <td style="text-align:center;">Inclusion label in details overlay</td>
        </tr>
        <tr>
            <td style="text-align:left;">ViewExclusion</td>
            <td style="text-align:left;"><code>string</code></td>
            <td style="text-align:center;">Optional</td>
            <td style="text-align:center;">Exclusion label in details overlay</td>
        </tr>
        <tr>
            <td style="text-align:left;">ViewHowToRedeem</td>
            <td style="text-align:left;"><code>string</code></td>
            <td style="text-align:center;">Optional</td>
            <td style="text-align:center;">Redemption policy label in details overlay</td>
        </tr>
        <tr>
            <td style="text-align:left;">ViewTnC</td>
            <td style="text-align:left;"><code>string</code></td>
            <td style="text-align:center;">Optional</td>
            <td style="text-align:center;">Terms & Conditions label in details overlay</td>
        </tr>
        <tr>
            <td style="text-align:left;">ViewCancelPolicy</td>
            <td style="text-align:left;"><code>string</code></td>
            <td style="text-align:center;">Optional</td>
            <td style="text-align:center;">Cancellation policy label in details overlay</td>
        </tr>
        <tr>
            <td style="text-align:left;">AddonsCount</td>
            <td style="text-align:left;"><code>function</code></td>
            <td style="text-align:center;">Required</td>
            <td style="text-align:center;">Addons count selection handler</td>
        </tr>
        <tr>
            <td style="text-align:left;">OnViewClick</td>
            <td style="text-align:left;"><code>function</code></td>
            <td style="text-align:center;">Optional</td>
            <td style="text-align:center;">View Details click handler to open overlay</td>
        </tr>
        <tr>
            <td style="text-align:left;">OnCrossClick</td>
            <td style="text-align:left;"><code>function</code></td>
            <td style="text-align:center;">Optional</td>
            <td style="text-align:center;">Close button icon handler to close view details overlay</td>
        </tr>
    </tbody>
</table>

