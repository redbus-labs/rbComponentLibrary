# Accordion component

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
            <td style="text-align:left;">title</td>
            <td style="text-align:center;"><code>string</code></td>
            <td style="text-align:center;">Required</td>
            <td style="text-align:left;">Title for the accordion</td>
        </tr>
        <tr>
            <td style="text-align:left;">content</td>
            <td style="text-align:center;"><code>string</code></td>
            <td style="text-align:center;">Required</td>
            <td style="text-align:left;">Content for the accordion</td>
        </tr>
        <tr>
            <td style="text-align:left;">openIcon</td>
            <td style="text-align:center;"><code>string</code></td>
            <td style="text-align:center;">Optional, defaults to <code>"faq_plus"</code></td>
            <td style="text-align:left;">Open Icon font classname</td>
        </tr>
        <tr>
            <td style="text-align:left;">closeIcon</td>
            <td style="text-align:center;"><code>string</code></td>
            <td style="text-align:center;">Optional, defaults to <code>"faq_minus"</code></td>
            <td style="text-align:left;">Close Icon font classname</td>
        </tr>
        <tr>
            <td style="text-align:left;">style</td>
            <td style="text-align:center;"><code>object</code></td>
            <td style="text-align:center;">Optional, defaults to 
                <code>
                 {
                    headerColor: "#444",
                    headerBgColor: "#eee",
                    headerPadding: "0 18px",
                    contentBgColor: "#fff",
                    contentColor: "#000"
                }
                </code>
            </td>
            <td style="text-align:left;">Additional styling for each accordion</td>
        </tr>
    </tbody>
</table>

