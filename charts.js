const TICKS_DAILY = [ '00:00', '03:00', '06:00', '09:00', '12:00', '15:00', '18:00', '21:00', '24:00' ];
const TICKS_YEARLY = [ 'Яну', 'Фев', 'Мар', 'Апр', 'Май', 'Юни', 'Юли', 'Авг', 'Сеп', 'Окт', 'Ное', 'Дек' ];

let chart = {};

let tick = function(ticks, values) {
  let list = [];
  if (typeof(values) === 'number') {
    for (var i in ticks) list.push(values);
  } else {
    list = values;
  }
  return list;
};

let draw = function(label, heading, canvas, ticks, scale, data) {
  heading.text(data.label + ' - ' + label);

  canvas.width((window.innerWidth / 2) - 60);
  canvas.height((window.innerHeight / 3) - 60);

  let context = canvas[0].getContext("2d");

  let gradient = context.createLinearGradient(0, 0, 0, canvas.height());
  gradient.addColorStop(0, 'rgba(255, 0, 0, 0.3)');
  gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.3)');
  gradient.addColorStop(1, 'rgba(0, 0, 255, 0.3)');

  let lowerline = tick(ticks, data.limits[scale].lower);
  let upperline = tick(ticks, data.limits[scale].upper);
  let projections = tick(ticks, data.projections[scale]);

  if (chart[scale]) chart[scale].destroy();

  chart[scale] = new Chart(context, {
    type: 'line',
    data: {
      labels: ticks,
      datasets: [
        {
          label: data.unit,
          data: projections,
          backgroundColor: 'rgba(100, 230, 100)',
          borderColor: 'rgba(100, 230, 100)',
        },
        { showLine: false, pointRadius: 0, data: lowerline, fill: { value: data.limits.min }, backgroundColor: gradient, borderColor: 'rgba(0, 0, 255, 0.3)' },
        { showLine: false, pointRadius: 0, data: upperline, fill: { value: data.limits.max }, backgroundColor: gradient, borderColor: 'rgba(255, 0, 0, 0.3)' },
      ],
    },
    options: {
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        y: { title: { display: true, text: data.unit }, min: data.limits.min, max: data.limits.max },
      }
    }
  });
};

let select = function(title) {
  if (typeof(title) !== 'string') title = this.title;

  for (let i in data) {
    if (data[i].label !== title) continue;

    let selection = data[i];
    draw('Денонощен цикъл', $('#day-heading'), $('#day-canvas'), TICKS_DAILY, 'daily', selection);
    draw('Промяна за 1 година', $('#year-heading'), $('#year-canvas'), TICKS_YEARLY, 'yearly', selection);
  }
};

$(document).ready(function() {
  for (let i in data) {
    $('<li>').text(data[i].label).css('cursor', 'pointer').attr('title', data[i].label).click(select).appendTo($('#indicators'));
  }

  select("Температура");
});
