//交通流量
var panel =
[[0.9799278069918603, 0.996961157061422, 0.9978984055026492, 0.9982365978259666, 0.9985502232593065, 0.9986584633525095, 0.9988261292370273, 0.9989838632624773, 0.9990184222605725, 0.9991418546777818, 0.999266445920333, 0.9993213923114049], [766, 1658, 2488, 3298, 4035, 4703, 5401, 6054, 6901, 7723, 8412, 9114], [3, 4, 9, 3, 6, 5, 6, 6, 5, 4, 7, 5], [0.05883611111111122, 0.07410138888888931, 0.07139930555555586, 0.07294583333333361, 0.06437430555555551, 0.05901111111111098, 0.062286111111111084, 0.05386319444444431, 0.06734930555555571, 0.07196597222222219, 0.05681458333333324, 0.06019236111111099], [0.052386111111111175, 0.09697847222222207, 0.09301458333333383, 0.08683888888888915, 0.08688819444444484, 0.07545138888888918, 0.08366736111111144, 0.07551944444444461, 0.08911180555555552, 0.10199583333333309, 0.082059027777778, 0.08257986111111135], [0.8887777777777776, 0.8289201388888884, 0.835586111111111, 0.8402152777777777, 0.8487374999999997, 0.8655375000000016, 0.8540465277777798, 0.8706173611111123, 0.8435388888888862, 0.8260381944444439, 0.8611263888888914, 0.8572277777777795], [9.958333333333334, 10.0, 10.0, 10.0, 10.0, 10.0, 10.0, 10.0, 10.0, 10.0, 10.0, 10.0], [624.8556929669745, 611.5379459705579, 613.9477180372713, 650.6601095632044, 605.2394001170524, 632.4711449153965, 636.1059106727506, 602.0647822006405, 583.3405666563269, 610.9147240435598, 604.6571003352799, 586.0528211737391]]


var data = {
    id: 'multipleBarsLines',
    legendBar: ['Finished order', 'Cancelled order'],
    symbol: ' ', //数值是否带百分号        --默认为空 ''
    xAxis: ['10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00'],
    yAxis: [
        panel[1],
        panel[2]
    ],
    barColor: ['#009883', '#e66922'], //柱子颜色 必填参数
}

var myData = (function test() {
    let yAxis = data.yAxis || []
    let lines = data.lines || []
    let legendBar = data.legendBar || []
    let legendLine = data.legendLine || []
    var symbol = data.symbol || ' '
    let seriesArr = []
    let legendArr = []
    yAxis && yAxis.forEach((item, index) => {
        legendArr.push({
            name: legendBar && legendBar.length > 0 && legendBar[index]
        })
        seriesArr.push({
            name: legendBar && legendBar.length > 0 && legendBar[index],
            type: 'bar',
            barGap: '0.4px',
            data: item,
            barWidth: data.barWidth || 12,
            label: {
                normal: {
                    show: false,
                    formatter: '{c}' + symbol,
                    position: 'top',
                    textStyle: {
                        color: '#000',
                        fontStyle: 'normal',
                        fontFamily: '微软雅黑',
                        textAlign: 'left',
                        fontSize: 12,
                    },
                },
            },
            itemStyle: { //图形样式
                normal: {
                    barBorderRadius:0,
                    borderWidth:1,
                    borderColor:'#ddd',
                    color: data.barColor[index]
                },
            }
        })
    })


    return {
        seriesArr,
        legendArr
    }
})()
option1 = {
    animationDuration: 30000,

    title: {
        show: true,
        text: data.title,
        subtext: data.subTitle,
        link: '1111'
    },
    tooltip: {
        trigger: 'axis',
        formatter: function(params) {
            var time = '';
            var str = '';
            for (var i of params) {
                time = i.name.replace(/\n/g, '') + '<br/>';
                if (i.data == 'null' || i.data == null) {
                    str += i.seriesName + '：无数据' + '<br/>'
                } else {
                    str += i.seriesName + '：' + i.data + symbol + '%<br/>'
                }

            }
            return time + str;
        },
        axisPointer: {
            type: 'none'
        },
    },
    legend: {
        right: data.legendRight || '30%',
        top: 0,
        right:10,
        itemGap: 16,
        itemWidth: 10,
        itemHeight: 10,
        data: myData.legendArr,
        textStyle: {
            color: '#fff',
            fontStyle: 'normal',
            fontFamily: '微软雅黑',
            fontSize: 12,
        }
    },
    grid: {
        x: 0,
        y: 30,
        x2: 0,
        y2: 25,
    },
    xAxis: {
        type: 'category',
        data: data.xAxis,
        axisTick: {
            show: false,
        },

        axisLine: {
            show: false,
        },
        axisLabel: {       //轴标
            show: true,
            interval: '0',
            textStyle: {
                lineHeight:5,
                padding: [2, 2, 0, 2],
                height: 50,
                fontSize: 12,
                color:'#fff',
            },
            rich: {
                Sunny: {
                    height: 50,
                    // width: 60,
                    padding: [0, 5, 0, 5],
                    align: 'center',
                },
            },
            formatter: function(params, index) {
                var newParamsName = "";
                var splitNumber = 5;
                var paramsNameNumber = params && params.length;
                if (paramsNameNumber && paramsNameNumber <= 4) {
                    splitNumber = 4;
                } else if (paramsNameNumber >= 5 && paramsNameNumber <= 7) {
                    splitNumber = 5;
                } else if (paramsNameNumber >= 8 && paramsNameNumber <= 9) {
                    splitNumber = 5;
                } else if (paramsNameNumber >= 10 && paramsNameNumber <= 14) {
                    splitNumber = 5;
                } else {
                    params = params && params.slice(0, 15);
                }

                var provideNumber = splitNumber; //一行显示几个字
                var rowNumber = Math.ceil(paramsNameNumber / provideNumber) || 0;
                if (paramsNameNumber > provideNumber) {
                    for (var p = 0; p < rowNumber; p++) {
                        var tempStr = "";
                        var start = p * provideNumber;
                        var end = start + provideNumber;
                        if (p == rowNumber - 1) {
                            tempStr = params.substring(start, paramsNameNumber);
                        } else {
                            tempStr = params.substring(start, end) + "\n";
                        }
                        newParamsName += tempStr;
                    }

                } else {
                    newParamsName = params;
                }
                params = newParamsName;
                return '{Sunny|' + params + '}';
            },
            color: '#687284',
        },

    },
    yAxis: {
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#F1F3F5',
                type: 'solid'
            },
            interval: 2
        },
        splitNumber: 4,
    },
    series: myData.seriesArr
}
//////////////////////交通流量 end

//交通工具流量
option2 = {
    animationDuration: 10000,

    tooltip: {//鼠标指上时的标线
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#fff'
            }
        }
    },
    legend: {
        icon: 'rect',
        itemWidth: 14,
        itemHeight: 5,
        itemGap: 13,
        data: ['Matching rate', 'Pickup ratio', 'Delivery ratio', 'Idle ratio'],
        right: '10px',
        top: '0px',
        textStyle: {
            fontSize: 12,
            color: '#fff'
        }
    },
    grid: {
        x: 35,
        y: 25,
        x2: 8,
        y2: 25,
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        axisLine: {
            lineStyle: {
                color: '#57617B'
            }
        },
        axisLabel: {
            textStyle: {
                color:'#fff',
            },
        },
        data: ['11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00']
    }],
    yAxis: [{
        type: 'value',
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#57617B'
            }
        },
        axisLabel: {
            margin: 10,
            textStyle: {
                fontSize: 14
            },
            textStyle: {
                color:'#fff',
            },
        },
        splitLine: {
            lineStyle: {
                color: '#57617B'
            }
        }
    }],
    series: [{
        name: 'Matching rate',
        type: 'line',
        smooth: true,
        lineStyle: {
            normal: {
                width: 2
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(137, 189, 27, 0.3)'
                }, {
                    offset: 0.8,
                    color: 'rgba(137, 189, 27, 0)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
        itemStyle: {
            normal: {
                color: 'rgb(137,189,27)'
            }
        },
        data: panel[0]
    }, {
        name: 'Pickup ratio',
        type: 'line',
        smooth: true,
        lineStyle: {
            normal: {
                width: 2
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(0, 136, 212, 0.3)'
                }, {
                    offset: 0.8,
                    color: 'rgba(0, 136, 212, 0)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
        itemStyle: {
            normal: {
                color: 'rgb(0,136,212)'
            }
        },
        data: panel[3]
    }, {
        name: 'Delivery ratio',
        type: 'line',
        smooth: true,
        lineStyle: {
            normal: {
                width: 2
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(219, 50, 51, 0.3)'
                }, {
                    offset: 0.8,
                    color: 'rgba(219, 50, 51, 0)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
        itemStyle: {
            normal: {
                color: 'rgb(219,50,51)'
            }
        },
        data: panel[4]
    }, {
        name: 'Idle ratio',
        type: 'line',
        smooth: true,
        lineStyle: {
            normal: {
                width: 2
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(219,28,192, 0.3)'
                }, {
                    offset: 0.8,
                    color: 'rgba(219,28,192, 0)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
        itemStyle: {
            normal: {
                color: 'rgb(219,28,192)'
            }
        },
        data: panel[5]
    }]
};
//////////////////////交通工具流量 end
option21 = {
    animationDuration: 10000,

    tooltip: {//鼠标指上时的标线
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#fff'
            }
        }
    },
    legend: {
        icon: 'rect',
        itemWidth: 14,
        itemHeight: 5,
        itemGap: 13,
        data: ['Passenger pickup time', 'Passenger waiting time'],
        right: '10px',
        top: '0px',
        textStyle: {
            fontSize: 12,
            color: '#fff'
        }
    },
    grid: {
        x: 35,
        y: 25,
        x2: 8,
        y2: 25,
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        axisLine: {
            lineStyle: {
                color: '#57617B'
            }
        },
        axisLabel: {
            textStyle: {
                color:'#fff',
            },
        },
        data: ['11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00']
    }],
    yAxis: [{
        type: 'value',
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#57617B'
            }
        },
        axisLabel: {
            margin: 10,
            textStyle: {
                fontSize: 14
            },
            textStyle: {
                color:'#fff',
            },
        },
        splitLine: {
            lineStyle: {
                color: '#57617B'
            }
        }
    }],
    series: [{
        name: 'Passenger pickup time',
        type: 'line',
        smooth: true,
        lineStyle: {
            normal: {
                width: 2
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(137, 189, 27, 0.3)'
                }, {
                    offset: 0.8,
                    color: 'rgba(137, 189, 27, 0)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
        itemStyle: {
            normal: {
                color: 'rgb(137,189,27)'
            }
        },
        data: panel[6]
    }, {
        name: 'Passenger waiting time',
        type: 'line',
        smooth: true,
        lineStyle: {
            normal: {
                width: 2
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(0, 136, 212, 0.3)'
                }, {
                    offset: 0.8,
                    color: 'rgba(0, 136, 212, 0)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
        itemStyle: {
            normal: {
                color: 'rgb(0,136,212)'
            }
        },
        data: panel[7]
    }]
};
//本月发生事件1
var color = ['#e9df3d', '#f79c19', '#21fcd6', '#08c8ff', '#df4131'];
var data = [{
        "name": "Finished",
        "value": 30
    },
    {
        "name": "Cancelled kuz driver",
        "value": 30
    },
    {
        "name": "Cancelled kuz passenger",
        "value": 42
    },
    {
        "name": "Unmatched",
        "value": 50
    },
    {
        "name": "Cancelled kuz far",
        "value": 34
    }
];

var max = data[0].value;
data.forEach(function(d) {
    max = d.value > max ? d.value : max;
});

var renderData = [{
    value: [],
    name: "Order status",
    symbol: 'none',
    lineStyle: {
        normal: {
            color: '#ecc03e',
            width: 2
        }
    },
    areaStyle: {
        normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0,
                [{
                    offset: 0,
                    color: 'rgba(203, 158, 24, 0.8)'
                }, {
                    offset: 1,
                    color: 'rgba(190, 96, 20, 0.8)'
                }],
                false)
        }
    }
}];


data.forEach(function(d, i) {
    var value = ['', '', '', '', ''];
    value[i] = max,
    renderData[0].value[i] = d.value;
    renderData.push({
        value: value,
        symbol: 'circle',
        symbolSize: 12,
        lineStyle: {
            normal: {
                color: 'transparent'
            }
        },
        itemStyle: {
            normal: {
                color: color[i],
            }
        }
    })
})
var indicator = [];

data.forEach(function(d) {
    indicator.push({
        name: d.name,
        max: max,
        color: '#fff'
    })
})


option3 = {
    tooltip: {
        show: true,
        trigger: "item"
    },
    radar: {
        center: ["50%", "50%"],//偏移位置
        radius: "80%",
        startAngle: 40, // 起始角度
        splitNumber: 4,
        shape: "circle",
        splitArea: {
            areaStyle: {
                color: 'transparent'
            }
        },
        axisLabel: {
            show: false,
            fontSize: 20,
            color: "#000",
            fontStyle: "normal",
            fontWeight: "normal"
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "rgba(255, 255, 255, 0.5)"
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: "rgba(255, 255, 255, 0.5)"
            }
        },
        indicator: indicator
    },
    series: [{
        type: "radar",
        data: renderData
    }]
}
//////////////////////本月发生事件1 end
//本月发生事件2
var color = ['#e9df3d', '#f79c19', '#21fcd6', '#08c8ff', '#df4131'];
var data = [{
        "name": "Finished",
        "value": 15
    },
    {
        "name": "Cancelled kuz driver",
        "value": 14
    },
    {
        "name": "Cancelled kuz passenger",
        "value": 23
    },
    {
        "name": "Unmatched",
        "value": 2
    },
    {
        "name": "Cancelled kuz far",
        "value": 50
    }
];

var max = data[0].value;
data.forEach(function(d) {
    max = d.value > max ? d.value : max;
});

var renderData = [{
    value: [],
    name: "Order status",
    symbol: 'none',
    lineStyle: {
        normal: {
            color: '#ecc03e',
            width: 2
        }
    },
    areaStyle: {
        normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0,
                [{
                    offset: 0,
                    color: 'rgba(203, 158, 24, 0.8)'
                }, {
                    offset: 1,
                    color: 'rgba(190, 96, 20, 0.8)'
                }],
                false)
        }
    }
}];


data.forEach(function(d, i) {
    var value = ['', '', '', '', ''];
    value[i] = max,
    renderData[0].value[i] = d.value;
    renderData.push({
        value: value,
        symbol: 'circle',
        symbolSize: 12,
        lineStyle: {
            normal: {
                color: 'transparent'
            }
        },
        itemStyle: {
            normal: {
                color: color[i],
            }
        }
    })
})
var indicator = [];

data.forEach(function(d) {
    indicator.push({
        name: d.name,
        max: max,
        color: '#fff'
    })
})


option31 = {
    tooltip: {
        show: true,
        trigger: "item"
    },
    radar: {
        center: ["50%", "50%"],//偏移位置
        radius: "80%",
        startAngle: 40, // 起始角度
        splitNumber: 4,
        shape: "circle",
        splitArea: {
            areaStyle: {
                color: 'transparent'
            }
        },
        axisLabel: {
            show: false,
            fontSize: 20,
            color: "#000",
            fontStyle: "normal",
            fontWeight: "normal"
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "rgba(255, 255, 255, 0.5)"
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: "rgba(255, 255, 255, 0.5)"
            }
        },
        indicator: indicator
    },
    series: [{
        type: "radar",
        data: renderData
    }]
}
//////////////////////本月发生事件2 end



//收费站收费排行1
var spirit = '../images.ksh45.png';

var maxData = 200;

option4 = {
   "title": {
      "text": " ",
      "left": "center",
      "y": "10",
      "textStyle": {
        "color": "#fff"
      }
    },
    
    "grid": {
      "left": 30,
      "top": 0,
      "bottom": 10
    },
    "tooltip": {
      "trigger": "item",
      "textStyle": {
        "fontSize": 12
      },
      "formatter": "{b0}:{c0}"
    },
    "xAxis": {
      "max": 100,
      "splitLine": {
        "show": false
      },
      "axisLine": {
        "show": false
      },
      "axisLabel": {
        "show": false
      },
      "axisTick": {
        "show": false
      }
    },
    "yAxis": [
      {
        "type": "category",
        "inverse": false,
        "data": [
          "Manhattan",
          "Brooklyn",
        ],
        "axisLine": {
          "show": false
        },
        "axisTick": {
          "show": false
        },
        "axisLabel": {
          "margin": -24,
          "textStyle": {
            "color": "#fff",
            "fontSize": 11
          }
        }
      },
    
    ],
    "series": [
      {
        "type": "pictorialBar",
        "symbol": "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAADYElEQVR4nO2dz0sUYRjHP7tIdAmxQ1LdlhCKMohAIsgiyEuHjkUEFQTlpejS/xCCBB06RBGBBKIG4cGyH0qHBKE9eKyFqBQPRQeNCt06vGNY7bq7szPfeZLnAwuzM+/zgw/DDvMu70wOIVveLscJOwycA44A24CfwAfgKXAbeFVvovlC/o/vuVwuTj+x0FWiYdGbgXvA8RrjHgAXgIVaCbMU3SKr1BhtwEtgZx1jTwI7gG7ga5pNNUO+9pBMuEN9klfYD9xMqZdEsCj6AHAiRtxZYFeyrSSHRdGnYsblCD8jJrEoek8TsbsT6yJhLIrelFFsqlgUPZtRbKpYFP2kidjxxLpIGIuiB4AvMeLmgJGEe0kMi6I/AVdjxPVSx91hVlgUDXAXuEaY16jFMnAJeJhqR01iVTTAdeAYUFxjzBRwCLgl6agJrM51rDAO7AP2EmbxthPO8vfAc2Ams84axLpoCGKLrH1mm8eC6KPAGaAL2Fpj7AZgY7T9DfhRY/wc4eflPmH+OjOynI8uEGbpukXlJ4Dz84V8aWWHcj46q4thFzCNTjJRren2UrlLWPM3WYjuAMYIk/tq2oCx9lK5Q11YLboFGARaxXVX0woMtpfK0uuTWvRFoFNcsxKdhF5kqEX3iuuthbQXtehG/gdMG2kvlm/B1xUuWoSLFmFF9CRwg2TnM4pRzskEc8bGiugR4ArhNjkpJqKcJv51sSJ63eOiRbhoES5ahIsW4aJFuGgRLlqEixbhokW4aBEuWoSLFuGiRbhoES5ahIsW4aJFuGgRLlqEWvTHKvs/p1izWu5qvaSCWvTlCvtmgeEUaw5TeUVtpV5SQy16COgBRoHXhMWb3aS7PnAhqjEQ1RwFeuYL+aEUa/5DFmtYHkefOEwQVmcBvKD+FQNvgNN/P+pHiV8MRbhoES5ahIsW4aJFuGgRLlqEixbhokW4aBEuWoSLFuGiRbhoES5ahIsW4aJFuGgRLlqEixbhokVYEx3nudGKXE1jTfS6xUWLcNEiXLQIFy3CRYtw0SJctAgXLcJFi3DRIv430eUq2+axJvp7jePPqmzHySXFmuhHwFKVYzNA/6rv/VR/s9BSlMsM1kTPEN4DPkU4I8vAO6APOAgsrhq7GO3ri8aUo5ipKIep1zv9AtipgOACGIrLAAAAAElFTkSuQmCC",
        "symbolRepeat": "fixed",
        "symbolMargin": "5%",
        "symbolClip": true,
        "symbolSize": 22.5,
        "symbolPosition": "start",
        "symbolOffset": [
          20,
          0
        ],
        "symbolBoundingData": 300,
        "data": [
          13,
          42,
          
        ],
        "z": 10
      },
      {
        "type": "pictorialBar",
        "itemStyle": {
          "normal": {
            "opacity": 0.3
          }
        },
        "label": {
          "normal": {
            "show": false
          }
        },
        "animationDuration": 0,
        "symbolRepeat": "fixed",
        "symbolMargin": "5%",
        "symbol": "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAADYElEQVR4nO2dz0sUYRjHP7tIdAmxQ1LdlhCKMohAIsgiyEuHjkUEFQTlpejS/xCCBB06RBGBBKIG4cGyH0qHBKE9eKyFqBQPRQeNCt06vGNY7bq7szPfeZLnAwuzM+/zgw/DDvMu70wOIVveLscJOwycA44A24CfwAfgKXAbeFVvovlC/o/vuVwuTj+x0FWiYdGbgXvA8RrjHgAXgIVaCbMU3SKr1BhtwEtgZx1jTwI7gG7ga5pNNUO+9pBMuEN9klfYD9xMqZdEsCj6AHAiRtxZYFeyrSSHRdGnYsblCD8jJrEoek8TsbsT6yJhLIrelFFsqlgUPZtRbKpYFP2kidjxxLpIGIuiB4AvMeLmgJGEe0kMi6I/AVdjxPVSx91hVlgUDXAXuEaY16jFMnAJeJhqR01iVTTAdeAYUFxjzBRwCLgl6agJrM51rDAO7AP2EmbxthPO8vfAc2Ams84axLpoCGKLrH1mm8eC6KPAGaAL2Fpj7AZgY7T9DfhRY/wc4eflPmH+OjOynI8uEGbpukXlJ4Dz84V8aWWHcj46q4thFzCNTjJRren2UrlLWPM3WYjuAMYIk/tq2oCx9lK5Q11YLboFGARaxXVX0woMtpfK0uuTWvRFoFNcsxKdhF5kqEX3iuuthbQXtehG/gdMG2kvlm/B1xUuWoSLFmFF9CRwg2TnM4pRzskEc8bGiugR4ArhNjkpJqKcJv51sSJ63eOiRbhoES5ahIsW4aJFuGgRLlqEixbhokW4aBEuWoSLFuGiRbhoES5ahIsW4aJFuGgRLlqEWvTHKvs/p1izWu5qvaSCWvTlCvtmgeEUaw5TeUVtpV5SQy16COgBRoHXhMWb3aS7PnAhqjEQ1RwFeuYL+aEUa/5DFmtYHkefOEwQVmcBvKD+FQNvgNN/P+pHiV8MRbhoES5ahIsW4aJFuGgRLlqEixbhokW4aBEuWoSLFuGiRbhoES5ahIsW4aJFuGgRLlqEixbhokVYEx3nudGKXE1jTfS6xUWLcNEiXLQIFy3CRYtw0SJctAgXLcJFi3DRIv430eUq2+axJvp7jePPqmzHySXFmuhHwFKVYzNA/6rv/VR/s9BSlMsM1kTPEN4DPkU4I8vAO6APOAgsrhq7GO3ri8aUo5ipKIep1zv9AtipgOACGIrLAAAAAElFTkSuQmCC",
        "symbolSize": 22.5,
        "symbolBoundingData": 300,
        "symbolPosition": "start",
        "symbolOffset": [
          20,
          0
        ],
        "data": [
          13,
          42,
          
        ],
        "z": 5
      }
    ]
};

var shadowColor = '#374b86';
var value1 = 80;
option51 = {
    title: {
        //text: `${value}万辆`,
        text: `Matching Rate`,
        subtext: '',
        left: 'center',
        top: 'center',//top待调整
        textStyle: {
            color: '#fff',
            fontSize: 14,
            fontFamily: 'PingFangSC-Regular'
        },
        subtextStyle: {
            color: '#ff',
            fontSize: 14,
            fontFamily: 'PingFangSC-Regular',
            top: 'center'
        },
        itemGap: -1//主副标题间距
    },

    series: [{
        name: 'pie1',
        type: 'pie',
        clockWise: true,
        radius: ['65%', '70%'],
        itemStyle: {
            normal: {
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                }
            }
        },
        hoverAnimation: false,
        data: [{
            value: value1,
            name: 'completed',
            itemStyle: {
                normal: {
                    borderWidth: 8,
                    borderColor: {
                        colorStops: [{
                            offset: 0,
                            color: '#1d54f7' || '#00cefc' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#68eaf9' || '#367bec' // 100% 处的颜色
                        }]
                    },
                    color: { // 完成的圆环的颜色
                        colorStops: [{
                            offset: 0,
                            color: '#1d54f7' || '#00cefc' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#68eaf9' || '#367bec' // 100% 处的颜色
                        }]
                    },
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                }
            }
        }, {
            name: 'gap',
            value: 1 - value1,
            itemStyle: {
                normal: {
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    },
                    color: 'rgba(0, 0, 0, 0)',
                    borderColor: 'rgba(0, 0, 0, 0)',
                    borderWidth: 0
                }
            }
        }]
    }]
}
var shadowColor = '#374b86';
var value1 = 80;
option52 = {
    title: {
        //text: `${value}万辆`,
        text: `Pickup Ratio`,
        subtext: '',
        left: 'center',
        top: 'center',//top待调整
        textStyle: {
            color: '#fff',
            fontSize: 14,
            fontFamily: 'PingFangSC-Regular'
        },
        subtextStyle: {
            color: '#ff',
            fontSize: 14,
            fontFamily: 'PingFangSC-Regular',
            top: 'center'
        },
        itemGap: -1//主副标题间距
    },

    series: [{
        name: 'pie1',
        type: 'pie',
        clockWise: true,
        radius: ['65%', '70%'],
        itemStyle: {
            normal: {
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                }
            }
        },
        hoverAnimation: false,
        data: [{
            value: value1,
            name: 'completed',
            itemStyle: {
                normal: {
                    borderWidth: 8,
                    borderColor: {
                        colorStops: [{
                            offset: 0,
                            color: '#1d54f7' || '#00cefc' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#68eaf9' || '#367bec' // 100% 处的颜色
                        }]
                    },
                    color: { // 完成的圆环的颜色
                        colorStops: [{
                            offset: 0,
                            color: '#1d54f7' || '#00cefc' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#68eaf9' || '#367bec' // 100% 处的颜色
                        }]
                    },
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                }
            }
        }, {
            name: 'gap',
            value: 100 - value1,
            itemStyle: {
                normal: {
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    },
                    color: 'rgba(0, 0, 0, 0)',
                    borderColor: 'rgba(0, 0, 0, 0)',
                    borderWidth: 0
                }
            }
        }]
    }]
}


var shadowColor = '#374b86';
var value = 85;
option6 = {

    title: {
        //text: `${value}万辆`,
        text: `Delivery Ratio`,
        subtext: '',
        left: 'center',
        top: 'center',//top待调整
        textStyle: {
            color: '#fff',
            fontSize: 14,
            fontFamily: 'PingFangSC-Regular'
        },
        subtextStyle: {
            color: '#ff',
            fontSize: 14,
            fontFamily: 'PingFangSC-Regular',
            top: 'center'
        },
        itemGap: -1//主副标题间距
    },

    series: [{
        name: 'pie1',
        type: 'pie',
        clockWise: true,
        radius: ['65%', '70%'],
        itemStyle: {
            normal: {
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                }
            }
        },
        hoverAnimation: false,
        data: [{
            value: value,
            name: 'completed',
            itemStyle: {
                normal: {
                    borderWidth: 8,
                    borderColor: {
                        colorStops: [{
                            offset: 0,
                            color: '#02df94' || '#25d6bc' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#28d3d0' || '#14dbaa' // 100% 处的颜色
                        }]
                    },
                    color: { // 完成的圆环的颜色
                        colorStops: [{
                            offset: 0,
                            color: '#02df94' || '#25d6bc' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#28d3d0' || '#14dbaa' // 100% 处的颜色
                        }]
                    },
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                }
            }
        }, {
            name: 'gap',
            value: 100 - value,
            itemStyle: {
                normal: {
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    },
                    color: 'rgba(0, 0, 0, 0)',
                    borderColor: 'rgba(0, 0, 0, 0)',
                    borderWidth: 0
                }
            }
        }]
    }]
}

var shadowColor = '#374b86';
var value = 46;
option7 = {

    title: {
        //text: `${value}万辆`,
        text: `Idle Ratio`,
        subtext: '',
        left: 'center',
        top: 'center',//top待调整
        textStyle: {
            color: '#fff',
            fontSize: 14,
            fontFamily: 'PingFangSC-Regular'
        },
        subtextStyle: {
            color: '#ff',
            fontSize: 14,
            fontFamily: 'PingFangSC-Regular',
            top: 'center'
        },
        itemGap: -1//主副标题间距
    },

    series: [{
        name: 'pie1',
        type: 'pie',
        clockWise: true,
        radius: ['65%', '70%'],
        itemStyle: {
            normal: {
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                }
            }
        },
        hoverAnimation: false,
        data: [{
            value: value,
            name: 'completed',
            itemStyle: {
                normal: {
                    borderWidth: 8,
                    borderColor: {
                    colorStops: [{
                            offset: 0,
                            color: '#eb3600' || '#cc9a00' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#d0a00e' || '#d0570e' // 100% 处的颜色
                        }]
                    },
                    color: { // 完成的圆环的颜色
                        colorStops: [{
                            offset: 0,
                            color: '#eb3600' || '#cc9a00' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#d0a00e' || '#d0570e' // 100% 处的颜色
                        }]
                    },
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                }
            }
        }, {
            name: 'gap',
            value: 100 - value,
            itemStyle: {
                normal: {
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    },
                    color: 'rgba(0, 0, 0, 0)',
                    borderColor: 'rgba(0, 0, 0, 0)',
                    borderWidth: 0
                }
            }
        }]
    }]
}
//////////////////////今日实时收费 end

















