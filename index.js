
const dataset = [1, 2, 3, 4, 5]

d3.select('body')
  .selectAll('div')
  .data(dataset)
  .enter()
  .append('div')
  .attr('class', 'bar')
  .style('height', d => {
    return d * 20 + 'px'
  })