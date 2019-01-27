
const dataset = [1, 2, 3, 4, 5]

d3.select('body')
  .selectAll('div')
  .data(dataset)
  .enter()
  .append('div')
  .attr('class', 'container')
  .style('height', d => {
    return d * 10 + 'px'
  })