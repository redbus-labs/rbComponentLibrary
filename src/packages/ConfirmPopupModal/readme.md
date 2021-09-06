# Confirm Modal Component

Props for ModalWithList : 
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
            <td style="text-align:left;">showMask</td>
            <td style="text-align:center;"><code>boolean</code></td>
            <td style="text-align:center;">Optional, defaults to <code>true</code></td>
            <td style="text-align:left;">To show background overlay for modal</td>
        </tr>
        <tr>
            <td style="text-align:left;">modalHeading</td>
            <td style="text-align:center;"><code>string</code></td>
            <td style="text-align:center;">Optional</td>
            <td style="text-align:left;">Modal Heading</td>
        </tr>
        <tr>
            <td style="text-align:left;">modalList</td>
            <td style="text-align:center;"><code>Array[{label: string, id?: string, isSelected: boolean, iconFont?: any}]</code></td>
            <td style="text-align:center;">Required</td>
            <td style="text-align:left;">Modal Select options</td>
        </tr>
        <tr>
            <td style="text-align:left;">cancelCta</td>
            <td style="text-align:center;"><code>string</code></td>
            <td style="text-align:center;">Optional, defaults to <code>"Cancel"</code></td>
            <td style="text-align:left;">Cancel Button Text</td>
        </tr>
        <tr>
            <td style="text-align:left;">confirmCta</td>
            <td style="text-align:center;"><code>string</code></td>
            <td style="text-align:center;">Optional, defaults to <code>"Confirm"</code></td>
            <td style="text-align:left;">Confirm Button Text</td>
        </tr>
        <tr>
            <td style="text-align:left;">bgColor</td>
            <td style="text-align:center;"><code>string</code></td>
            <td style="text-align:center;">Optional, defaults to <code>"#fff"</code></td>
            <td style="text-align:left;">Modal background color</td>
        </tr>
        <tr>
            <td style="text-align:left;">color</td>
            <td style="text-align:center;"><code>string</code></td>
            <td style="text-align:center;">Optional, defaults to <code>"#3e3e52"</code></td>
            <td style="text-align:left;">Modal Text color</td>
        </tr>
        <tr>
            <td style="text-align:left;">ctaColor</td>
            <td style="text-align:center;"><code>string</code></td>
            <td style="text-align:center;">Optional, defaults to <code>"#3e3e52"</code></td>
            <td style="text-align:left;">Modal CTA color</td>
        </tr>
        <tr>
            <td style="text-align:left;">listClickHandler</td>
            <td style="text-align:center;"><code>function</code></td>
            <td style="text-align:center;">Required</td>
            <td style="text-align:left;">Modal Options List Click Handler function</td>
        </tr>
        <tr>
            <td style="text-align:left;">cancelClickHandler</td>
            <td style="text-align:center;"><code>function</code></td>
            <td style="text-align:center;">Required</td>
            <td style="text-align:left;">Cancel/Close Modal Handler function</td>
        </tr>
        <tr>
            <td style="text-align:left;">confirmClickHandler</td>
            <td style="text-align:center;"><code>function</code></td>
            <td style="text-align:center;">Required</td>
            <td style="text-align:left;">Confirm Selected Handler function</td>
        </tr>
    </tbody>
</table>

Props for ConfirmPopupModal : 
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
            <td style="text-align:left;">showMask</td>
            <td style="text-align:center;"><code>boolean</code></td>
            <td style="text-align:center;">Optional, defaults to <code>true</code></td>
            <td style="text-align:left;">To show background overlay for modal</td>
        </tr>
        <tr>
            <td style="text-align:left;">modalHeading</td>
            <td style="text-align:center;"><code>string</code></td>
            <td style="text-align:center;">Optional</td>
            <td style="text-align:left;">Modal Heading</td>
        </tr>
        <tr>
            <td style="text-align:left;">cancelCta</td>
            <td style="text-align:center;"><code>string</code></td>
            <td style="text-align:center;">Optional, defaults to <code>"Cancel"</code></td>
            <td style="text-align:left;">Cancel Button Text</td>
        </tr>
        <tr>
            <td style="text-align:left;">confirmCta</td>
            <td style="text-align:center;"><code>string</code></td>
            <td style="text-align:center;">Optional, defaults to <code>"Confirm"</code></td>
            <td style="text-align:left;">Confirm Button Text</td>
        </tr>
        <tr>
            <td style="text-align:left;">bgColor</td>
            <td style="text-align:center;"><code>string</code></td>
            <td style="text-align:center;">Optional, defaults to <code>"#fff"</code></td>
            <td style="text-align:left;">Modal background color</td>
        </tr>
        <tr>
            <td style="text-align:left;">ctaColor</td>
            <td style="text-align:center;"><code>string</code></td>
            <td style="text-align:center;">Optional, defaults to <code>"#3e3e52"</code></td>
            <td style="text-align:left;">Modal CTA color</td>
        </tr>
        <tr>
            <td style="text-align:left;">headcolor</td>
            <td style="text-align:center;"><code>string</code></td>
            <td style="text-align:center;">Required</td>
            <td style="text-align:left;">Modal heading color</td>
        </tr>
        <tr>
            <td style="text-align:left;">isHeadbold</td>
            <td style="text-align:center;"><code>boolean</code></td>
            <td style="text-align:center;">Required</td>
            <td style="text-align:left;">Modal heading boldness</td>
        </tr>
        <tr>
            <td style="text-align:left;">body</td>
            <td style="text-align:center;"><code>any</code></td>
            <td style="text-align:center;">Required</td>
            <td style="text-align:left;">Modal body</td>
        </tr>
        <tr>
            <td style="text-align:left;">cancelClickHandler</td>
            <td style="text-align:center;"><code>function</code></td>
            <td style="text-align:center;">Required</td>
            <td style="text-align:left;">Cancel/Close Modal Handler function</td>
        </tr>
        <tr>
            <td style="text-align:left;">confirmClickHandler</td>
            <td style="text-align:center;"><code>function</code></td>
            <td style="text-align:center;">Required</td>
            <td style="text-align:left;">Confirm Selected Handler function</td>
        </tr>
    </tbody>
</table>

