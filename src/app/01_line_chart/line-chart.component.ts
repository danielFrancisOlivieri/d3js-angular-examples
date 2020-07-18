import { Component, ViewEncapsulation, OnInit } from '@angular/core';

import * as d3 from 'd3-selection';
import * as d3Scale from 'd3-scale';
import * as d3Shape from 'd3-shape';
import * as d3Array from 'd3-array';
import * as d3Axis from 'd3-axis';

import { MYSTOCKS } from '../shared/myStocks';
import { LIGAMENT } from '../shared/ligament';

@Component({
    selector: 'app-line-chart',
    encapsulation: ViewEncapsulation.None,
    templateUrl: './line-chart.component.html',
    styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

    title = 'Terwillger Bunts One';

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
        this.initAxis();
        this.drawAxis();
        this.drawLine();
        this.drawDifferentTypeOfLine();
    }

    private initSvg() {
        this.svg = d3.select('svg')
            .append('g')
            .attr('class', 'whole')
            .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');
    }

    private initAxis() {
        this.x = d3Scale.scaleLinear().range([0, this.width]);
        
        this.y = d3Scale.scaleLinear().range([this.height, 0]);
        this.x.domain(d3Array.extent(MYSTOCKS, (d) => d.number ));
        this.y.domain(d3Array.extent(MYSTOCKS, (d) => d.value ));

        this.x.domain(d3Array.extent(LIGAMENT, (d2) => d2.number ));
        this.y.domain(d3Array.extent(LIGAMENT, (d2) => d2.value ));
    }

    private drawAxis() {

        this.svg.append('g')
            .attr('class', 'axis axis--x')
            .attr('transform', 'translate(0,' + this.height + ')')
            .call(d3Axis.axisBottom(this.x) 
            .ticks(5) );

        this.svg.append('g')
            .attr('class', 'axis axis--y')
            .call(d3Axis.axisLeft(this.y))
            .append('text')
            .attr('class', 'axis-title')
            .attr('transform', 'rotate(-90)')
            .attr('y', 6)
            .attr('dy', '.71em')
            .style('text-anchor', 'end')
            .text('Dankness ($)');
            
    }

    private drawLine() {
        this.line = d3Shape.line()
            .x( (d: any) => this.x(d.number) )
            .y( (d: any) => this.y(d.value) );

        this.mainLine = d3Shape.line()
        .x( (d: any) => this.x(d.number) )
        .y( (d: any) => this.y(d.value) );

        this.svg.append('path')
            .datum(MYSTOCKS)
            .attr('class', 'line')
            .attr('d', this.line);

            this.svg.append('path')
            .datum(LIGAMENT)
            .attr('class', 'line buster')
            .attr('d', this.mainLine);

    }

    private drawDifferentTypeOfLine() {
        this.svg.append('line')
        .style("stroke", "black")
        .style("stroke-width", 1)
        .attr("x1", 553)
        .attr("y1", 0)
        .attr("x2", 553)
        .attr("y2", 450); 

        this.svg.append('line')
        .style("stroke", "black")
        .style("stroke-width", 1)
        .attr("x1", 0)
        .attr("y1", 227)
        .attr("x2", 553)
        .attr("y2", 227); 


    };
       
    }

