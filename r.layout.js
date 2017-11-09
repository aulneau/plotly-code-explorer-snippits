const layout = {
  annotations: [
    {
      x: 1.02,
      y: 1,
      ax: 0,
      ay: 0,
      font: {color: 'rgba(0,0,0,1)', family: '', size: 14.6118721461},
      showarrow: false,
      text: 'group',
      textangle: 0,
      xanchor: 'left',
      xref: 'paper',
      yanchor: 'bottom',
      yref: 'paper'
    }
  ],
  barmode: 'relative',
  font: {color: 'rgba(0,0,0,1)', family: '', size: 14.6118721461},
  hovermode: 'closest',
  legend: {
    y: 0.935039370079,
    bgcolor: 'rgba(255,255,255,1)',
    bordercolor: 'transparent',
    borderwidth: 1.88976377953,
    font: {color: 'rgba(0,0,0,1)', family: '', size: 11.6894977169}
  },
  margin: {
    r: 7.30593607306,
    t: 43.2754946728,
    b: 39.695585997,
    l: 43.1050228311
  },
  paper_bgcolor: '#F5F7FA',
  plot_bgcolor: '#F5F7FA',
  shapes: [
    {
      line: {width: 0},
      type: 'rect',
      x0: 0,
      x1: 1,
      xref: 'paper',
      y0: 0,
      y1: 1,
      yref: 'paper'
    }
  ],
  showlegend: false,
  title: 'stacked density chart',
  titlefont: {color: 'rgba(0,0,0,1)', family: '', size: 17.5342465753},
  width: 500,
  height: 580,
  xaxis: {
    anchor: 'y',
    autorange: false,
    categoryarray: ['0', '10', '20', '30', '40'],
    categoryorder: 'array',
    domain: [0, 1],
    gridcolor: 'rgba(255,255,255,1)',
    gridwidth: 0.664176006642,
    hoverformat: '.2f',
    linewidth: 0,
    range: [-2.0494689936, 49.2821581646],
    showgrid: true,
    showline: false,
    showticklabels: true,
    tickangle: 0,
    tickcolor: 'rgba(51,51,51,1)',
    tickfont: {color: 'rgba(77,77,77,1)', family: '', size: 11.6894977169},
    ticklen: 3.65296803653,
    tickmode: 'array',
    ticks: 'outside',
    ticktext: ['0', '10', '20', '30', '40'],
    tickvals: [0, 10, 20, 30, 40],
    tickwidth: 0.664176006642,
    title: 'x',
    titlefont: {color: 'rgba(0,0,0,1)', family: '', size: 14.6118721461},
    type: 'linear',
    zeroline: false
  },
  yaxis: {
    anchor: 'x',
    autorange: false,
    categoryarray: ['0.0', '0.1', '0.2', '0.3'],
    categoryorder: 'array',
    domain: [0, 1],
    gridcolor: 'rgba(255,255,255,1)',
    gridwidth: 0.664176006642,
    hoverformat: '.2f',
    linewidth: 0,
    range: [-0.014657612284, 0.307809857964],
    showgrid: true,
    showline: false,
    showticklabels: true,
    tickangle: 0,
    tickcolor: 'rgba(51,51,51,1)',
    tickfont: {color: 'rgba(77,77,77,1)', family: '', size: 11.6894977169},
    ticklen: 3.65296803653,
    tickmode: 'array',
    ticks: 'outside',
    ticktext: ['0.0', '0.1', '0.2', '0.3'],
    tickvals: [0, 0.1, 0.2, 0.3],
    tickwidth: 0.664176006642,
    title: 'density',
    titlefont: {color: 'rgba(0,0,0,1)', family: '', size: 14.6118721461},
    type: 'linear',
    zeroline: false
  }
};


export default layout;
