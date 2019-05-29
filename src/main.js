import { weekdays } from './weekdays';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function()  {
  $("form").submit(function(event) {
    event.preventDefault();
    let date = $("#date");
    let day = weekdays(date);

    $("#output").html(day);
  });
});
