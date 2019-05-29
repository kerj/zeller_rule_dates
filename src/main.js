import { Weekdays } from './weekdays';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function()  {
  $("form").submit(function(event) {
    event.preventDefault();
    let date = $("#date").val();
    let day = Weekdays(date);
    console.log(day);
    $("#output").html(day);
  });
});
