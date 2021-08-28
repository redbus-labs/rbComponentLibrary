# SideMenu component.

<table class="table table-bordered table-striped">
    <thead>
    <tr>
        <th style="width: 100px;">name</th>
        <th style="width: 50px;">type</th>
        <th style="width: 50px;">default</th>
        <th>description</th>
    </tr>
    </thead>
    <tbody>
        <tr>
          <td>setting</td>
          <td>object</td>
          <td>empty</td>
          <td>
		  {
			list: [{
				iconClass: string;
				displayText: string;
				link?: string;
				newTab?: boolean;
				onClickHandler?: () => void;
				onClickEnabled?: boolean;
				optionalMsg?: string;
			}];
			fontSize?: string;
			fontColor?: string;
			iconSize?: string;
			iconColor?: string;
			backgroundColor?: string;
			overlayDisplay?: boolean;
			overlayColor?: string;
			boxShadow?: string;
			textTransform?: string;
			padding?: string;
		  }<br/>
		  </td>
        </tr>
        <tr>
          <td>list</td>
          <td>Array</td>
          <td></td>
          <td>
            {
              iconClass: string;
              displayText: string;
              link?: string;
              newTab?: boolean;
              onClickHandler?: () => void;
              onClickEnabled?: boolean;
              optionalMsg?: string;
            }
          </td>
        </tr>
        <tr>
          <td>iconClass</td>
          <td>string</td>
          <td>no class</td>
          <td>icon class name eg: icon-user</td>
        </tr>
        <tr>
          <td>displayText</td>
          <td>string</td>
          <td>default</td>
          <td>text to display as link</td>
        </tr>
        <tr>
          <td>link</td>
          <td>string</td>
          <td>none (optional)</td>
          <td>link to redirect or value of href</td>
        </tr>
        <tr>
          <td>newTab</td>
          <td>string</td>
          <td>none</td>
          <td>enable/disable open into new tab</td>
        </tr>
        <tr>
          <td>onClickHandler</td>
          <td>function</td>
          <td>none (optional)</td>
          <td>on click of link execution of function</td>
        </tr>
        <tr>
          <td>onClickEnabled</td>
          <td>string</td>
          <td>false (mandatory when using onClickHandler)</td>
          <td>to enable function execution pass true</td>
        </tr>
        <tr>
          <td>optionalMsg</td>
          <td>string</td>
          <td>blank</td>
          <td>to show optional message along with link text</td>
        </tr>
        <tr>
          <td>marginFromIcon</td>
          <td>string</td>
          <td>0 1em 0 0</td>
          <td>space b/w icon and text</td>
        </tr>
        <tr>
          <td>iconSize</td>
          <td>string</td>
          <td>1em or same as font size</td>
          <td>set font size for icon</td>
        </tr>
        <tr>
          <td>iconColor</td>
          <td>string</td>
          <td>#3e3e52 or same as font color</td>
          <td>set color for icon</td>
        </tr>
        <tr>
          <td>iconWeight</td>
          <td>string</td>
          <td>normal</td>
          <td>set font weight for icon</td>
        </tr>
        <tr>
          <td>fontSize</td>
          <td>string</td>
          <td>1em</td>
          <td>set font size for text</td>
        </tr>
	    	<tr>
          <td>fontColor</td>
          <td>string</td>
          <td>#3e3e52</td>
          <td>set color for font</td>
        </tr>
		    <tr>
          <td>fontWeight</td>
          <td>string</td>
          <td>normal</td>
          <td>set font weight for text</td>
        </tr>
		    <tr>
          <td>textTransform</td>
          <td>string</td>
          <td>capitalize</td>
          <td>set text-transform for text</td>
        </tr>
    </tbody>
</table>
