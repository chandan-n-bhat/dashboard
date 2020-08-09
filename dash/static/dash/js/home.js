// Populating dropdown
for (i = new Date().getFullYear(); i > 1999; i--){
    $('#yearpicker').append($('<option />').val(i).html(i));
}

// Function to reset canvas

resetCanvas = function(){
    var canvas_to_be_deleted = document.getElementById('myLineChart');
    canvas_to_be_deleted.remove();
    $('#updatableChart').append('<canvas id="myLineChart" style="margin: 5px;"></canvas>');
}


function constructBarGraph(bar_labels,bar_values){

    barctx = document.getElementById('myBarChart').getContext('2d');
    myBarChart = new Chart(barctx, {

        type: 'bar',
        data: {
            // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            labels: bar_labels,
            datasets: [{
                label: '# of Items',
                // data: [12, 19, 3, 5, 2, 3],
                data: bar_values,
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 0
            }]
        },
        
        options: {
            responsive:true,
            maintainAspectRatio: false,
            // To pan and zoom
            // pan: {
            //     enabled: true,
            //     mode: 'x',
            // },
            // zoom: {
            //     enabled: true,                      
            //     mode: 'x',
            // },
            // pan zoom end
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Count'
                    }
                }],
                xAxes: [{
                    ticks: {
                        display: false
                    }
                }]
            }
        }
    });
}


function constructLineChart(cur_labels,cur_values,prev_values,year){

    linectx = document.getElementById("myLineChart").getContext('2d');
    myLineChart = new Chart(linectx, {
    type: 'line',
    data: {
        labels: cur_labels,
        datasets: [{ 
            // data: [86,114,106,106,107,111,133,221,783,278],
            data: cur_values,
            label: year,
            borderColor: "#00179c",
            fill: true
        },
        { 
            // data: [282,350,411,502,635,809,947,142,370,567],
            data: prev_values,
            label: year-1,
            borderColor: "#a60800",
            fill: true
        }
        ]
    },
    options: {
        responsive:true,
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Count of Sales'
                }
            }],
            xAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Months',
                }
            }]
        }
    }
    });

}

function doughnutPieConstructor(dpc_labels,dpc_values,pc_labels,pc_values,dpc2_labels,dpc2_values){
            
    doughctx = document.getElementById("myDoughnutChart").getContext('2d');
    myDoughnutChart = new Chart(doughctx, {
        type: 'doughnut',
        data: {
        // labels: ["Unit1", "Unit3"],
        labels: dpc_labels,
        datasets: [
            {
                // label: "Population (millions)",
                backgroundColor: ["#ff3d66","#36a2eb","#FF681F","#00FF00","#8B0000"],
                // data: [5267,433]
                data: dpc_values
            }
        ]
        },
        options: {
            responsive:true,
            maintainAspectRatio: false,
            legend: {
                display: true
            },
            elements: {
                arc:{
                    borderWidth: 1
                }
            }
        }
    });

    

    piectx = document.getElementById("myPieChart").getContext('2d');
    myPieChart = new Chart(piectx, {
        type: 'pie',
        data: {
        // labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
        labels: pc_labels,
        datasets: [{
            //backgroundColor: ["#00203FFF","#F39C12","#05ffa6"],
	    backgroundColor: ["#00203FFF","#F39C12","#05ffa6","#6AD383","#056DC9","#68959E","#B8DCEC","#33C101","#A29313","#4AC7D5","#CE0FFB","#F3BDD7","#2D6F57","#C1F269","#C95BD8","#68A2CC","#FD3751","#AC5759","#70697B","#ADDFE5","#F2B5F8","#DA38EF","#75731C","#93D92F","#FF7478","#A149C1","#E5DE35","#786C0D","#4FB422","#B4539F","#A9B06F","#7AAE9A","#3D0E44","#2576E8","#61EFD7","#857BF3","#F22454","#412312","#216C22","#15D294","#B0F28A","#879263","#CA008E","#A692DE","#447E16","#036ABA","#1221CC","#6FF250","#02A6B6","#1E02E9","#217D80","#03A1A5","#D6F296","#5B197E","#CF48AE","#836A80","#82B8A5","#5532F3","#2F0CD3","#CC2130","#C6A106","#F3242A","#E96702","#E42EED","#BD3507","#8D0DE2","#56A537","#91FE11","#F56D79","#765FE8","#0D75E6","#A5A2DF","#E63788","#6876DF","#0524B6","#021DB8","#1A81E0","#DDF68C","#15DEC1","#CFA226","#29A996","#AE1617","#A98AD6","#22C058","#06E1E7","#4BFAA3","#A53869","#D294DA","#FBA49F","#FF845E","#7F97A9","#DA10A7","#8BCABB","#E5AFB2","#374B1A","#E78274","#2F2A0C","#C8FAA6","#332926","#CD89E7","#A28AE7","#0B5DD1","#8731D2","#DCCC84","#8B7E9A","#643DA2","#3CA625","#40FD6B","#2DF040","#79F2A8","#1CF359","#FF58AB","#032A73","#BCDDFC","#029E14","#80B36F","#3E34B4","#E8CDE1","#A1DFD9","#5B6809","#B411CF","#341A68","#6C5E07","#B94D0A","#B7CAAA","#9ADA64","#C39BC8","#95DB7E","#233FFA","#DFB70B","#91895A","#66C83A","#DD1975","#DC48FD","#7DF77D","#74E30E","#46E248","#770107","#A82524","#5C66FC","#0BAA6A","#6F4D24","#C6F4DB","#5CCE08","#3A70A1","#000D97","#B39D8C","#4E0531","#074CB2","#58FF96","#B19A9D","#5318E6","#5B784A","#CB2632","#8E034F","#924CDB","#19254F","#4F861D","#CBC2A8","#A482D3","#5787D0","#7D692E","#697332","#55182F","#E014C1","#8A95CB","#6E9CA7","#6D43E8","#712495","#1C2587","#27E477","#61523C","#CF86F2","#1FE415","#9BA8B6","#1048AD","#84479C","#C5742F","#5FD63A","#5000D8","#6A9C4D","#909CEF","#E0B794","#8635DF","#599D96","#16F394","#074EF6","#2FED3D","#8785D6","#D6321B","#619667","#9C7753","#7A07F7","#F5352C","#943683","#6A5539","#86540F","#880B73","#B19F72","#C7BAE4","#B88E58","#5869E2","#076AC3","#2CA5AE","#1E1113","#658B0D","#B8BB83","#CF9A68","#D82F9C","#36C27C","#E7D1BC","#BD4A03","#6A9542","#D38667","#C11995","#733DFF","#C2FD8C","#D7DC6E","#B0F90A","#C7A8C0","#4DBDBD","#363AEB","#4AD5BC","#D24CFA","#D403E9","#8706FF","#6862F9","#369AEA","#86E3DA","#E63AB8","#C7658D","#FE2425","#9ADF57","#CBC737","#FC9AFB","#55ED3A","#2E4344","#ED0F69","#E36B97","#4F5DB2","#4393CF","#8E55D8","#FA385D","#DD1D51","#5DF6E2","#0B438F","#306E85","#64F77C","#DFF659","#3999E8","#F833A4","#D4B277","#960863","#D8142F","#263A84","#89418D","#183FC3","#9738D0","#92656E","#2FDDBB","#2BDEF2","#0DDEB2","#0E3063","#CC404A","#907D28","#80A112","#1BE33E","#FF3425","#4D8BE6","#256BE7","#830173","#824C84","#CB6928","#4AB76B","#9FC344","#A4623F","#AD9584","#00DC73","#D937D6","#7534F3","#AF72C2","#6A6F3C","#7BCC66","#136F39","#3254D5","#A28BDE","#B31BE2","#83EED9","#6D629C","#C1329E","#C13555","#E4E51B","#E7B1A7","#0B520C","#FE74B2","#20AECF","#3252B8","#2E3F99","#155FC2","#8B37E0","#C1196F","#57BD0A","#81AF09","#50D6F0","#F1F3C5","#F9EEF2","#E2FA4E","#28F459","#3361B4","#63255A","#D3BD88","#4CDBEE","#97277A","#6E3105","#352E5A","#BC3EDE","#8AC67B","#2D37D3","#2556AE","#0B734A","#C5F193","#8C7046","#6C522A","#FA5692","#BB6234","#745C63","#583178","#1108EE","#D2F42A","#0CDD34","#03E75B","#9C83B9","#9ED95B","#395F56","#1B5D13","#818114","#A4E3E4","#AC0E54","#9814C6","#C2748F","#24CAB6","#2EDA7F","#FC2410","#B7CDA1","#AE6EE6","#703AFD","#E4DF91","#0FEF0D","#F4708D","#473713","#2ACDA2","#7A94B7","#FB80FC","#A68133","#EC4E5A","#EEA761","#7E0705","#AF9CF2","#4D2FBD","#AF157D","#CC696D","#293D2D","#CBEF26","#9F672A","#98CBF5","#F0C877","#9549E8","#661020","#1C1E21","#FAC7DC","#B6CBF7","#DB8E5E","#A989EC","#6E2B5E","#924002","#212326","#ABAE81","#46A337","#7E03CB","#390E5D","#64989E","#2E1BD1","#BFFCDE","#8FF0A7","#308321","#31AF8F","#6D7571","#C1BDCB","#3BD405","#3E8FDF","#7737B7","#6514E6","#B68331","#A5EE97","#FAABCA","#C6D036","#1208EB","#8CC983","#9125B2","#2541E4","#68355F","#6E29BC","#2E0F53","#42CF63","#CDFF48","#490FEB","#C151F4","#EDD339","#6746D0","#8CE221","#42F207","#BA16E9","#484E9E","#C0604B","#89A984","#BD57F3","#23C4B8","#F4CE44","#3195A1","#80A5CA","#AC34B0","#824B66","#AB07D1","#45869B","#68AA09","#9CAA61","#A6E8D9","#87E018","#5F4DD1","#DE40F9","#424B04","#43B342","#727310","#16C732","#2A8D36","#135DE9","#FB7C94","#8EAB71","#7E7F85","#FB7FAA","#0EC540","#31E1F3","#94ED1A","#F3A410","#6355F0","#F89AD0","#454835","#66808F","#F8E39E","#73C479","#FC6CB8","#E4F0C6","#8647D2","#041AB0","#2D75A9","#B7DED8","#B112B9","#392479","#062682","#0842FF","#ACCD76","#13155D","#725581","#D330C3","#5C25C4","#A93A03","#FBC7E0","#8EA1FC","#3E8137","#533E43","#863515","#EFB91B","#1F5DE0","#8F49EA","#FCC3A7","#D62C9B","#2807C0","#8F90B7","#C0B60A","#2F0A00","#A04068","#E25F47","#890D61","#FAF243","#7C30FB","#E6C353","#A68E0B","#E95199","#0BC85F","#A005D6","#309B17","#5D72DD","#9BB6F0","#619A47","#07F53D","#4CA774","#DD2467","#DA7B70","#A7636E","#01388E","#FE1583","#5B631E","#C1AC75","#4DF04A","#B18CB7","#3EE283","#3E70E0","#2DCB6B","#19044E","#A20B7F","#16D1B1","#E20702","#273FE6","#2CB024","#9DD9C1","#D9B1CA","#6B2819","#245104","#7E7517","#F9EEB4","#09B11F","#69B3C8","#607282","#7D9C85","#3C2C49","#71546E","#68DE44","#87A695","#7E8F14","#8EC59A","#CDA82D","#D1CAA0","#1E9D09","#0A93CB","#0C56FF","#A3AC9E","#F11CA2","#A64295","#596546","#A68419","#E57E79","#02A202","#2B0FF0","#170E7D","#6B69B4","#8CCE78","#51AA9D","#77CCF5","#F66D4D","#46F21B","#4A5E95","#69366F","#F68C20","#5C55B1","#C6AB1A","#E0F56D","#0A1224","#047710","#51BCDB","#AF0C8E","#EFD26F","#B8E1F6","#0861D8","#3D4762","#1B8803","#4D238C","#687F49","#474E5D","#BCBE2B","#B2C0AE","#12575A","#C145D8","#A4D59D","#DE79F4","#E42416","#40B849","#D9C0D1","#A95D1B","#AB5342","#EE0634","#EF9D38","#6431E3","#4A8E6F","#1669B5","#8FB701","#B1FB0B","#F6DD22","#64C994","#584C8C","#55C7F3","#7B338C","#946FEE","#B0A7AF","#D5655B","#B5EAA9","#426127","#6C2AE9","#5C72EA","#FE51D9","#FF80EE","#5BDCA7","#B0CAE9","#1C7D80","#72E226","#A7ADEE","#C45B78","#0D7D93","#5EF7D6","#704FD9","#52E9ED","#840962","#4A47EC","#17F614","#CB9C83","#FA2A9A","#7B574D","#34BF5E","#143EC0","#6651A8","#C98E27","#3DD77D","#9BBC66","#39A585","#2174D3","#E2F940","#9B4F92","#3F2A54","#557C8C","#47C5D6","#8E0FE7","#6B5015","#9C79DC","#8E4BBD","#0A5751","#8B030C","#988FA2","#041B9A","#E3A1FB","#DB4A07","#EF0B4B","#C92881","#C6316F","#967520","#F27B21","#0C9464","#CFC982","#EEDD19","#528FA1","#63A9CA","#82F59E","#20CE25","#159538","#3AF19E","#B4D0A5","#966C77","#42B84C","#D60DCC","#5D2768","#BCF76D","#97C953","#4BC254","#D38C4F","#948663","#0535E4","#F19B42","#ED054F","#527F07","#A9990C","#157641","#49E7DC","#1228BC","#3A661B","#AB0426","#E7F306","#11228B","#1AE07E","#F37F27","#1AF6D4","#767D4D","#230C21","#21CC0D","#5674FE","#F8E9BB","#DEBD7D","#1FE31A","#B7A585","#17F95A","#3D580A","#2A849D","#E0A1F7","#BDA9AB","#B33952","#586C2B","#217F4C","#99588B","#E06003","#5C398D","#76F740","#1E0AED","#6D8A76","#243281","#3FBA69","#2AB434","#B2B595","#E690FF","#72BC3D","#8975DF","#2EDB3D","#C55001","#2CD879","#78DF01","#E9DCC9","#F46609","#77BD98","#54DA17","#097261","#CF4021","#D56462","#7E685F","#F9F168","#D3C79C","#21B526","#F96C6D","#26EBE4","#6A95CF","#C90F53","#AD5488","#97D62A","#B22270","#DDEE31","#5CE0BC","#9C9F26","#13F883","#DDE4D9","#3A0025","#FA376D","#914090","#3FB924","#1DFF7C","#47CE8E","#C12F2B","#60887F","#E5FA1A","#94DDC9","#2C966C","#C932FE","#F4A91A","#444182","#8E98A2","#F2413C","#8A637D","#83516E","#5FF14D","#B56FF3","#2CB243","#F5D677","#435963","#3086C2","#C1389A","#932802","#C27160","#70B68D","#A20473","#47D2B8","#76BB66","#742096","#3BEE60","#6EB3D5","#84A8FA","#81962F","#B4235D","#C1CF4D","#7E5CD6","#389463","#A29EFD","#739ABE","#7F143C","#38285A","#FCA764","#9B3622","#363E95","#C6127A","#28F0D4","#10610D","#682462","#EB476A","#7031EB","#89E515","#6D1799","#8114F1","#C8E242","#CF4DFA","#7F709B","#51473A","#2BA6A2","#986A9F","#1D95EF","#D1C68B","#671D7C","#6BD964","#D7F9AE","#7538FC","#B987F2","#3FF60E","#D8F35F","#7BE2A8","#F27DB2","#14A5CF","#10910C","#AB200E","#722966","#B87A2F","#0CFF45","#F04436","#3F63A4","#B7F53D","#8B4BD3","#538A0B","#10D644","#16EDAE","#D622AD","#4ACADA","#9463B3","#124628","#B1DE54","#7FA870","#9F06AE","#596BAF","#C8DF52","#2205EF","#B11103","#063FA7","#5C1B9E","#DDF575","#3446BC","#53CE0F","#DD222A","#366BC1","#83141B","#C7F365","#771593","#B4DE78","#C6CBCA","#02CB19","#ABBB34","#3C98AC","#433FF4","#6EC569","#CC206D","#CD9FCF","#12E79D","#690B35","#362642","#231282","#355328","#D3E02A","#28D2D3","#5DC3E3","#8D010E","#8EB7A4","#685DFE","#514075","#765BBB","#B05311","#3DD7B2","#D36712","#379E9F","#FA5621","#AFFE1B","#D869DE","#CE1D26","#1B1DBE","#6C5E99","#2B320C","#28DAE3","#82744A","#E00742","#3A4C14","#5E126D","#127C08","#E1E199","#D45A7C","#614E12","#392ADE","#6372AD","#820274","#21BD7B","#A848A0","#761854","#67275A","#2B6044","#1BAD8E","#32D9C1","#AE7A96","#7EF5A1","#4E811C","#B250D2","#D9975B","#E1B675","#7571DA","#B8A88E","#38A121","#7B0D01","#000BA1","#0241F2","#2E281C","#0EFDA1","#55B36D","#AB0622","#9D22F0","#80D2A4","#FD44D2","#804136","#AA52E3","#409592","#6BB719","#FDEEB9","#62C932","#FF92AD","#F209FA","#93DE9A","#EF6FCA","#FF2D2A","#5F3E34","#DC469D","#CDCF98","#043A38","#D4D90A","#9C049F","#0F6AA7","#DF2BE7","#6AB3B0","#86C925","#2EA284","#DA9936","#43058A","#9908E9","#00162B","#441195","#3937C5","#B4E3BA","#AFF579","#DC579C","#E24625","#CC8A43","#CA6E6F","#B521E9","#E0C712","#7E40BE","#9AFB34","#C4EDB2","#3243A3","#720B73","#DD8F7B","#087DB6","#71ACCD","#2CD1FD","#8D3B3D","#3FFC26","#364FC0","#2C737B","#4009F0","#5A4B3A","#417D0F","#69A853","#12799C","#B56E62","#E26CC5","#FE52C8","#86A49A","#35024C","#49CAE6","#2CCC50","#C9E0D4","#92AFE9","#89192E","#8E634F","#ED23A7","#AE46A9","#1D9103","#698AD0","#4BD023","#0E14AD","#A51EAB","#7EDEA8","#63DCF9","#AFB52E","#0902AF","#80C0A5","#0338E1","#1F82D9","#DB069F","#E6C14C","#7CDF07","#B456D0","#13645F","#D1FBF4","#99696B","#BFB4A6","#2B46DF","#E666C8","#55DA50","#338B59"],
            // data: [2478,5267,734,784,433]
            data: pc_values
        }]
        },
        options: {
            responsive:true,
            maintainAspectRatio: false,
            legend: {
                    display: false
            },
            elements: {
                arc:{
                    borderWidth: 0
                }
            }
        }
    });

}





/**
 * Doughnut Chart that was removed kept for useful chartjs properties
 * 
 * doughctx2 = document.getElementById("myDoughnutChart2").getContext('2d');
    myDoughnutChart2 = new Chart(doughctx2, {
        type: 'doughnut',
        data: {
        labels: dpc2_labels,
        datasets: [
            {
                backgroundColor: ['#E94B3CFF','#2460A7FF','#FFD653FF','#000000',"#ff3d66","#36a2eb","#FF681F","#FDFF00"],
                data: dpc2_values,
                borderWidth: 0
            }
        ]
        },
        options: {
            responsive:true,
            maintainAspectRatio: false,
            legend: {
                display: false
            },
            elements: {
                arc:{
                    borderWidth: 0
                }
            }
        }
    });
 */