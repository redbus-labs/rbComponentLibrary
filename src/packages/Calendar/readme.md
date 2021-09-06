# Calendar component

<table class="table table-bordered table-striped">
    <thead>
    <tr>
        <th style="width: 100px;">Attributes</th>
        <th style="width: 50px;">Type</th>
        <th style="width: 50px;">Default</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
        <tr>
          <td>width</td>
          <td>Number</td>
          <td>min-width: 250</td>
          <td>Can be used to resize whole calendar.</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>Boolean</td>
          <td>False</td>
          <td>Disabled the calendar.</td>
        </tr>
        <tr>
          <td>defaultOpen</td>
          <td>Boolean</td>
          <td>False</td>
          <td>additional style of root dom node</td>
        </tr>
        <tr>
          <td>hideInput</td>
          <td>Boolean</td>
          <td>False</td>
          <td>Can be used to hide input container.</td>
        </tr>
        <tr>
          <td>closeOnSelect</td>
          <td>Boolean</td>
          <td>true</td>
          <td>Close calendar on select.</td>
        </tr>
        <tr>
          <td>closeOnOutsideClick</td>
          <td>Boolean</td>
          <td>true</td>
          <td>Close calendar on select.</td>
        </tr>
        <tr>
          <td>startDate</td>
          <td>Date</td>
          <td>Today's date.</td>
          <td>Start date of the calendar</td>
        </tr>
        <tr>
          <td>selectedDate</td>
          <td>Date</td>
          <td></td>
          <td>Selected date of the calendar</td>
        </tr>
        <tr>
          <td>allowPreviousDates</td>
          <td>Date</td>
          <td>false</td>
          <td>Allow previous date before start date, "works with startDate".</td>
        </tr>
        <tr>
          <td>maxAllowedDays</td>
          <td>number</td>
          <td></td>
          <td>Max allowed days from start date, " works with startDate".</td>
        </tr>
        <tr>
          <td>customLocal</td>
          <td>Object</td>
          <td></td>
          <td>
             {
                "weekName": [
                    "MON",
                    "TUE",
                    "WED",
                    "THU",
                    "FRI",
                    "SAT",
                    "SUN"
                ],
                "holidaysList": [
                    "2019-07-21T18:30:00.000Z",
                    "2019-07-23T18:30:00.000Z",
                ]
            }<br/>
        </td>
        </tr>
        <tr>
          <td>icons</td>
          <td>Object</td>
          <td></td>
          <td>
            {
                "showCalendarIcon": true, 
                "calendar": "",
                "left": "",
                "right": ""
            }, <br/>
            Accepts path and link of image icon.
          </td>
        </tr>
        <tr>
          <td>onOutsideClick</td>
          <td>Function</td>
          <td>onOutsideClick()=> void;</td>
          <td></td>
        </tr>
        <tr>
          <td>onDateClicked</td>
          <td>Function</td>
          <td>onDateClicked(val)=> void;</td>
          <td></td>
        </tr>
    </tbody>
</table>
