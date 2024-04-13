$(document).ready(function() {
    $('#tax-form').submit(function(event) {
      event.preventDefault();
      let grossIncome = parseFloat($('#gross-income').val());
      let extraIncome = parseFloat($('#extra-income').val());
      let deductions = parseFloat($('#deductions').val());
      let age = parseInt($('#age').val());

      let totalIncome = grossIncome + extraIncome - deductions;
      let taxRate = 0;

      if (totalIncome <= 800000) {
        taxRate = 0;
      } else {
        if (age < 40) {
          taxRate = 0.3 * (totalIncome - 800000);
        } else if (age >= 40 && age < 60) {
          taxRate = 0.4 * (totalIncome - 800000);
        } else if (age >= 60) {
          taxRate = 0.1 * (totalIncome - 800000);
        }
      }

      $('#result').text(`Your total tax is: ₹${taxRate.toFixed(0)}.`);
      $('#resultModal').modal('show');
    });

    $('input').on('input', function() {
      let id = $(this).attr('id');
      let value = $(this).val();

      if (isNaN(value) || value < 0) {
        $(`#${id}-error`).addClass('visible');
      } else {
        $(`#${id}-error`).removeClass('visible');
      }

      if (id === 'age' && (isNaN(value) || value < 1)) {
        $(`#age-error`).addClass('visible');
      } else {
        $(`#age-error`).removeClass('visible');
      }
    });
  });