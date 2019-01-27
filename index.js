//working with data() and enter()
//a bit counter-intuitive to be selecting elements
//that don't exist yet

const dataset = [1, 2, 3, 4, 5]

d3.select('ul')
  .selectAll('li')//there will be only 2
  .data(dataset)//reviews the dataset
  .enter()//sees there are 2 el on the page but needs 5
  .append('li')//new li elements are appended
  .text(d => d)//text takes a callback
  .attr('class', d => {
    if (d > 4) {
      return 'high'
    } else {
      return 'low'
    }
  })