import { Component, ViewEncapsulation, OnInit } from '@angular/core';

import * as d3 from 'd3-selection';
import * as d3Shape from 'd3-shape';


@Component({
    selector: 'app-sketch',
    encapsulation: ViewEncapsulation.None,
    templateUrl: './sketch.component.html',
    styleUrls: ['./sketch.component.css']
})


export class Sketch implements OnInit {

    title = 'Dankness of Memes';

    private margin = {top: 20, right: 20, bottom: 30, left: 50};
    private width: number;
    private height: number;
    private x: any;
    private y: any;
    private svg: any;
    private line: d3Shape.Line<[number, number]>;
    private mainLine: d3Shape.Line<[number, number]>;

    constructor() {
        this.width = 900 - this.margin.left - this.margin.right;
        this.height = 500 - this.margin.top - this.margin.bottom;
    }

    ngOnInit() {
        this.initSvg();
    }

    private initSvg() {
        this.svg = d3.select('svg')
            .append('g')
            .attr('class', 'whole')
            .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')')
            

            this.svg.append("circle")
            .attr("cx", 350)
       .attr("cy", 50)
       .attr("r", 50)
       .attr('class', 'whole')

       this.svg.append("circle")
       .attr("cx", 150)
  .attr("cy", 150)
  .attr("r", 150) .append('text')
  .text('heyo');

  this.svg.append('line')



    }

    }

