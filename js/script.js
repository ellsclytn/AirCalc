$(document).ready(function() {
  $('#timeIn1, #timeIn2').keyup(function() {
    var time1 = parseDuration($('#timeIn1').val())
    var time2 = parseDuration($('#timeIn2').val())

    if (time1 && time2) {
      var output;
      if ($('#operator').prop('checked')) {
        output = time1.add(time2)
      } else {
        output = time1.subtract(time2)
      }

      $('#timeOutD').val(output.format('h [hrs]', 2))
      $('#timeOutHm').val(output.format('h:mm'))
    }
  })
})

function parseDuration(input) {
  if (input.indexOf(':') > -1 && input.indexOf('.') === -1) {
    return moment.duration(input, 'hours')
  } else if ($.isNumeric(input)) {
    return moment.duration(
      moment.duration(
        Math.round(input * 10) / 10, 'hours')
      .format('h:mm'))
  } else {
    return false
  }
}
