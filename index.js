
const dataset = [1, 2, 3, 4, 5]
const w = 500
const h = 200

const svg = d3.select('body')
  .append('svg')
  .attr('width', w)
  .attr('height', h)

svg.selectAll('rect')
  .data(dataset)
  .enter()
  .append('rect')
  .attr('width', 25)
  .attr('height', 100)
  .attr('x', (d, i) => {
    return i * 30
  })
  .attr('y', 0)