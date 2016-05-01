$(document).ready(function() {
  $('#hobbs1, #hobbs2').keyup(function(e) {
    var output = Math.round(Math.abs($('#hobbs1').val() - $('#hobbs2').val()) * 10) / 10
    $('#hobbsDecimal').val(moment.duration(output, 'hours').format('h [hrs]', 2))
    $('#hobbsHm').val(moment.duration(output, 'hours').format('h:mm'))
  })

  $('#hm1, #hm2').keyup(function(e) {
    var output = moment.duration($('#hm1').val(), 'hours').add(moment.duration($('#hm2').val()))
    $('#hmOutD').val(output.format('h [hrs]', 2))
    $('#hmOutHm').val(output.format('h:mm'))
  })
})
