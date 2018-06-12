import { Component } from '@angular/core';
import * as $ from 'jquery';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Date Converter';

  public ngOnInit()
  {
    $(document).ready(function(){
        //var input_tgl = $('#isoDate').val();
		let today = moment($('#isoDate').val(),'MM/DD/YYYY HH:mm').toISOString();
		let formatted = moment(today, moment.ISO_8601).format('MM/DD/YYYY HH:mm');
		
		$('.convert').on('click', function() {
			console.log(moment($('#isoDate').val(),'MM/DD/YYYY HH:mm'));
			formatted = moment(today, moment.ISO_8601).format('ddd, MMM Do HH:MMa');
			$('#dateformat').append(formatted);
		});
    });
  }
}
