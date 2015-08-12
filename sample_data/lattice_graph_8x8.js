(function(nSatohOthello) {
  'use strict';

  /*-- directions --
        0  1  2
        3  x  4
        5  6  7
  -----------------*/

  /*
  +---+---+---+---+---+---+---+---+   
  |///|///|///|///|///|///|///|///|   
  +---+---+---+---+---+---+---+---+   
  |///|///|///|///|///|///|///|///|   
  +---+---+---+---+---+---+---+---+   
  |///|///|///|///|///|///|///|///|   
  +---+---+---+---+---+---+---+---+   
  |///|///|///|///|///|///|///|///|   
  +---+---+---+---+---+---+---+---+   
  |///|///|///|///|///|///|///|///|   
  +---+---+---+---+---+---+---+---+   
  |///|///|///|///|///|///|///|///|   
  +---+---+---+---+---+---+---+---+   
  |///|///|///|///|///|///|///|///|   
  +---+---+---+---+---+---+---+---+   
  |///|///|///|///|///|///|///|///|   
  +---+---+---+---+---+---+---+---+   
                                      
  */
  var Graph = window.nSatohOthello.Graph;
  var graph_directions = [[-1, -1], [0, -1], [1, -1], [-1, 0], [1, 0], [-1, 1], [0, 1], [1, 1]];
  var graph_data = new Graph(64);
  var v = graph_data.getVertices();

  v[0].addEdge(v[8], 4);
  v[0].addEdge(v[1], 6);
  v[0].addEdge(v[9], 7);
  v[1].addEdge(v[0], 1);
  v[1].addEdge(v[8], 2);
  v[1].addEdge(v[9], 4);
  v[1].addEdge(v[2], 6);
  v[1].addEdge(v[10], 7);
  v[2].addEdge(v[1], 1);
  v[2].addEdge(v[9], 2);
  v[2].addEdge(v[10], 4);
  v[2].addEdge(v[3], 6);
  v[2].addEdge(v[11], 7);
  v[3].addEdge(v[2], 1);
  v[3].addEdge(v[10], 2);
  v[3].addEdge(v[11], 4);
  v[3].addEdge(v[4], 6);
  v[3].addEdge(v[12], 7);
  v[4].addEdge(v[3], 1);
  v[4].addEdge(v[11], 2);
  v[4].addEdge(v[12], 4);
  v[4].addEdge(v[5], 6);
  v[4].addEdge(v[13], 7);
  v[5].addEdge(v[4], 1);
  v[5].addEdge(v[12], 2);
  v[5].addEdge(v[13], 4);
  v[5].addEdge(v[6], 6);
  v[5].addEdge(v[14], 7);
  v[6].addEdge(v[5], 1);
  v[6].addEdge(v[13], 2);
  v[6].addEdge(v[14], 4);
  v[6].addEdge(v[7], 6);
  v[6].addEdge(v[15], 7);
  v[7].addEdge(v[6], 1);
  v[7].addEdge(v[14], 2);
  v[7].addEdge(v[15], 4);
  v[8].addEdge(v[0], 3);
  v[8].addEdge(v[16], 4);
  v[8].addEdge(v[1], 5);
  v[8].addEdge(v[9], 6);
  v[8].addEdge(v[17], 7);
  v[9].addEdge(v[0], 0);
  v[9].addEdge(v[8], 1);
  v[9].addEdge(v[16], 2);
  v[9].addEdge(v[1], 3);
  v[9].addEdge(v[17], 4);
  v[9].addEdge(v[2], 5);
  v[9].addEdge(v[10], 6);
  v[9].addEdge(v[18], 7);
  v[10].addEdge(v[1], 0);
  v[10].addEdge(v[9], 1);
  v[10].addEdge(v[17], 2);
  v[10].addEdge(v[2], 3);
  v[10].addEdge(v[18], 4);
  v[10].addEdge(v[3], 5);
  v[10].addEdge(v[11], 6);
  v[10].addEdge(v[19], 7);
  v[11].addEdge(v[2], 0);
  v[11].addEdge(v[10], 1);
  v[11].addEdge(v[18], 2);
  v[11].addEdge(v[3], 3);
  v[11].addEdge(v[19], 4);
  v[11].addEdge(v[4], 5);
  v[11].addEdge(v[12], 6);
  v[11].addEdge(v[20], 7);
  v[12].addEdge(v[3], 0);
  v[12].addEdge(v[11], 1);
  v[12].addEdge(v[19], 2);
  v[12].addEdge(v[4], 3);
  v[12].addEdge(v[20], 4);
  v[12].addEdge(v[5], 5);
  v[12].addEdge(v[13], 6);
  v[12].addEdge(v[21], 7);
  v[13].addEdge(v[4], 0);
  v[13].addEdge(v[12], 1);
  v[13].addEdge(v[20], 2);
  v[13].addEdge(v[5], 3);
  v[13].addEdge(v[21], 4);
  v[13].addEdge(v[6], 5);
  v[13].addEdge(v[14], 6);
  v[13].addEdge(v[22], 7);
  v[14].addEdge(v[5], 0);
  v[14].addEdge(v[13], 1);
  v[14].addEdge(v[21], 2);
  v[14].addEdge(v[6], 3);
  v[14].addEdge(v[22], 4);
  v[14].addEdge(v[7], 5);
  v[14].addEdge(v[15], 6);
  v[14].addEdge(v[23], 7);
  v[15].addEdge(v[6], 0);
  v[15].addEdge(v[14], 1);
  v[15].addEdge(v[22], 2);
  v[15].addEdge(v[7], 3);
  v[15].addEdge(v[23], 4);
  v[16].addEdge(v[8], 3);
  v[16].addEdge(v[24], 4);
  v[16].addEdge(v[9], 5);
  v[16].addEdge(v[17], 6);
  v[16].addEdge(v[25], 7);
  v[17].addEdge(v[8], 0);
  v[17].addEdge(v[16], 1);
  v[17].addEdge(v[24], 2);
  v[17].addEdge(v[9], 3);
  v[17].addEdge(v[25], 4);
  v[17].addEdge(v[10], 5);
  v[17].addEdge(v[18], 6);
  v[17].addEdge(v[26], 7);
  v[18].addEdge(v[9], 0);
  v[18].addEdge(v[17], 1);
  v[18].addEdge(v[25], 2);
  v[18].addEdge(v[10], 3);
  v[18].addEdge(v[26], 4);
  v[18].addEdge(v[11], 5);
  v[18].addEdge(v[19], 6);
  v[18].addEdge(v[27], 7);
  v[19].addEdge(v[10], 0);
  v[19].addEdge(v[18], 1);
  v[19].addEdge(v[26], 2);
  v[19].addEdge(v[11], 3);
  v[19].addEdge(v[27], 4);
  v[19].addEdge(v[12], 5);
  v[19].addEdge(v[20], 6);
  v[19].addEdge(v[28], 7);
  v[20].addEdge(v[11], 0);
  v[20].addEdge(v[19], 1);
  v[20].addEdge(v[27], 2);
  v[20].addEdge(v[12], 3);
  v[20].addEdge(v[28], 4);
  v[20].addEdge(v[13], 5);
  v[20].addEdge(v[21], 6);
  v[20].addEdge(v[29], 7);
  v[21].addEdge(v[12], 0);
  v[21].addEdge(v[20], 1);
  v[21].addEdge(v[28], 2);
  v[21].addEdge(v[13], 3);
  v[21].addEdge(v[29], 4);
  v[21].addEdge(v[14], 5);
  v[21].addEdge(v[22], 6);
  v[21].addEdge(v[30], 7);
  v[22].addEdge(v[13], 0);
  v[22].addEdge(v[21], 1);
  v[22].addEdge(v[29], 2);
  v[22].addEdge(v[14], 3);
  v[22].addEdge(v[30], 4);
  v[22].addEdge(v[15], 5);
  v[22].addEdge(v[23], 6);
  v[22].addEdge(v[31], 7);
  v[23].addEdge(v[14], 0);
  v[23].addEdge(v[22], 1);
  v[23].addEdge(v[30], 2);
  v[23].addEdge(v[15], 3);
  v[23].addEdge(v[31], 4);
  v[24].addEdge(v[16], 3);
  v[24].addEdge(v[32], 4);
  v[24].addEdge(v[17], 5);
  v[24].addEdge(v[25], 6);
  v[24].addEdge(v[33], 7);
  v[25].addEdge(v[16], 0);
  v[25].addEdge(v[24], 1);
  v[25].addEdge(v[32], 2);
  v[25].addEdge(v[17], 3);
  v[25].addEdge(v[33], 4);
  v[25].addEdge(v[18], 5);
  v[25].addEdge(v[26], 6);
  v[25].addEdge(v[34], 7);
  v[26].addEdge(v[17], 0);
  v[26].addEdge(v[25], 1);
  v[26].addEdge(v[33], 2);
  v[26].addEdge(v[18], 3);
  v[26].addEdge(v[34], 4);
  v[26].addEdge(v[19], 5);
  v[26].addEdge(v[27], 6);
  v[26].addEdge(v[35], 7);
  v[27].addEdge(v[18], 0);
  v[27].addEdge(v[26], 1);
  v[27].addEdge(v[34], 2);
  v[27].addEdge(v[19], 3);
  v[27].addEdge(v[35], 4);
  v[27].addEdge(v[20], 5);
  v[27].addEdge(v[28], 6);
  v[27].addEdge(v[36], 7);
  v[28].addEdge(v[19], 0);
  v[28].addEdge(v[27], 1);
  v[28].addEdge(v[35], 2);
  v[28].addEdge(v[20], 3);
  v[28].addEdge(v[36], 4);
  v[28].addEdge(v[21], 5);
  v[28].addEdge(v[29], 6);
  v[28].addEdge(v[37], 7);
  v[29].addEdge(v[20], 0);
  v[29].addEdge(v[28], 1);
  v[29].addEdge(v[36], 2);
  v[29].addEdge(v[21], 3);
  v[29].addEdge(v[37], 4);
  v[29].addEdge(v[22], 5);
  v[29].addEdge(v[30], 6);
  v[29].addEdge(v[38], 7);
  v[30].addEdge(v[21], 0);
  v[30].addEdge(v[29], 1);
  v[30].addEdge(v[37], 2);
  v[30].addEdge(v[22], 3);
  v[30].addEdge(v[38], 4);
  v[30].addEdge(v[23], 5);
  v[30].addEdge(v[31], 6);
  v[30].addEdge(v[39], 7);
  v[31].addEdge(v[22], 0);
  v[31].addEdge(v[30], 1);
  v[31].addEdge(v[38], 2);
  v[31].addEdge(v[23], 3);
  v[31].addEdge(v[39], 4);
  v[32].addEdge(v[24], 3);
  v[32].addEdge(v[40], 4);
  v[32].addEdge(v[25], 5);
  v[32].addEdge(v[33], 6);
  v[32].addEdge(v[41], 7);
  v[33].addEdge(v[24], 0);
  v[33].addEdge(v[32], 1);
  v[33].addEdge(v[40], 2);
  v[33].addEdge(v[25], 3);
  v[33].addEdge(v[41], 4);
  v[33].addEdge(v[26], 5);
  v[33].addEdge(v[34], 6);
  v[33].addEdge(v[42], 7);
  v[34].addEdge(v[25], 0);
  v[34].addEdge(v[33], 1);
  v[34].addEdge(v[41], 2);
  v[34].addEdge(v[26], 3);
  v[34].addEdge(v[42], 4);
  v[34].addEdge(v[27], 5);
  v[34].addEdge(v[35], 6);
  v[34].addEdge(v[43], 7);
  v[35].addEdge(v[26], 0);
  v[35].addEdge(v[34], 1);
  v[35].addEdge(v[42], 2);
  v[35].addEdge(v[27], 3);
  v[35].addEdge(v[43], 4);
  v[35].addEdge(v[28], 5);
  v[35].addEdge(v[36], 6);
  v[35].addEdge(v[44], 7);
  v[36].addEdge(v[27], 0);
  v[36].addEdge(v[35], 1);
  v[36].addEdge(v[43], 2);
  v[36].addEdge(v[28], 3);
  v[36].addEdge(v[44], 4);
  v[36].addEdge(v[29], 5);
  v[36].addEdge(v[37], 6);
  v[36].addEdge(v[45], 7);
  v[37].addEdge(v[28], 0);
  v[37].addEdge(v[36], 1);
  v[37].addEdge(v[44], 2);
  v[37].addEdge(v[29], 3);
  v[37].addEdge(v[45], 4);
  v[37].addEdge(v[30], 5);
  v[37].addEdge(v[38], 6);
  v[37].addEdge(v[46], 7);
  v[38].addEdge(v[29], 0);
  v[38].addEdge(v[37], 1);
  v[38].addEdge(v[45], 2);
  v[38].addEdge(v[30], 3);
  v[38].addEdge(v[46], 4);
  v[38].addEdge(v[31], 5);
  v[38].addEdge(v[39], 6);
  v[38].addEdge(v[47], 7);
  v[39].addEdge(v[30], 0);
  v[39].addEdge(v[38], 1);
  v[39].addEdge(v[46], 2);
  v[39].addEdge(v[31], 3);
  v[39].addEdge(v[47], 4);
  v[40].addEdge(v[32], 3);
  v[40].addEdge(v[48], 4);
  v[40].addEdge(v[33], 5);
  v[40].addEdge(v[41], 6);
  v[40].addEdge(v[49], 7);
  v[41].addEdge(v[32], 0);
  v[41].addEdge(v[40], 1);
  v[41].addEdge(v[48], 2);
  v[41].addEdge(v[33], 3);
  v[41].addEdge(v[49], 4);
  v[41].addEdge(v[34], 5);
  v[41].addEdge(v[42], 6);
  v[41].addEdge(v[50], 7);
  v[42].addEdge(v[33], 0);
  v[42].addEdge(v[41], 1);
  v[42].addEdge(v[49], 2);
  v[42].addEdge(v[34], 3);
  v[42].addEdge(v[50], 4);
  v[42].addEdge(v[35], 5);
  v[42].addEdge(v[43], 6);
  v[42].addEdge(v[51], 7);
  v[43].addEdge(v[34], 0);
  v[43].addEdge(v[42], 1);
  v[43].addEdge(v[50], 2);
  v[43].addEdge(v[35], 3);
  v[43].addEdge(v[51], 4);
  v[43].addEdge(v[36], 5);
  v[43].addEdge(v[44], 6);
  v[43].addEdge(v[52], 7);
  v[44].addEdge(v[35], 0);
  v[44].addEdge(v[43], 1);
  v[44].addEdge(v[51], 2);
  v[44].addEdge(v[36], 3);
  v[44].addEdge(v[52], 4);
  v[44].addEdge(v[37], 5);
  v[44].addEdge(v[45], 6);
  v[44].addEdge(v[53], 7);
  v[45].addEdge(v[36], 0);
  v[45].addEdge(v[44], 1);
  v[45].addEdge(v[52], 2);
  v[45].addEdge(v[37], 3);
  v[45].addEdge(v[53], 4);
  v[45].addEdge(v[38], 5);
  v[45].addEdge(v[46], 6);
  v[45].addEdge(v[54], 7);
  v[46].addEdge(v[37], 0);
  v[46].addEdge(v[45], 1);
  v[46].addEdge(v[53], 2);
  v[46].addEdge(v[38], 3);
  v[46].addEdge(v[54], 4);
  v[46].addEdge(v[39], 5);
  v[46].addEdge(v[47], 6);
  v[46].addEdge(v[55], 7);
  v[47].addEdge(v[38], 0);
  v[47].addEdge(v[46], 1);
  v[47].addEdge(v[54], 2);
  v[47].addEdge(v[39], 3);
  v[47].addEdge(v[55], 4);
  v[48].addEdge(v[40], 3);
  v[48].addEdge(v[56], 4);
  v[48].addEdge(v[41], 5);
  v[48].addEdge(v[49], 6);
  v[48].addEdge(v[57], 7);
  v[49].addEdge(v[40], 0);
  v[49].addEdge(v[48], 1);
  v[49].addEdge(v[56], 2);
  v[49].addEdge(v[41], 3);
  v[49].addEdge(v[57], 4);
  v[49].addEdge(v[42], 5);
  v[49].addEdge(v[50], 6);
  v[49].addEdge(v[58], 7);
  v[50].addEdge(v[41], 0);
  v[50].addEdge(v[49], 1);
  v[50].addEdge(v[57], 2);
  v[50].addEdge(v[42], 3);
  v[50].addEdge(v[58], 4);
  v[50].addEdge(v[43], 5);
  v[50].addEdge(v[51], 6);
  v[50].addEdge(v[59], 7);
  v[51].addEdge(v[42], 0);
  v[51].addEdge(v[50], 1);
  v[51].addEdge(v[58], 2);
  v[51].addEdge(v[43], 3);
  v[51].addEdge(v[59], 4);
  v[51].addEdge(v[44], 5);
  v[51].addEdge(v[52], 6);
  v[51].addEdge(v[60], 7);
  v[52].addEdge(v[43], 0);
  v[52].addEdge(v[51], 1);
  v[52].addEdge(v[59], 2);
  v[52].addEdge(v[44], 3);
  v[52].addEdge(v[60], 4);
  v[52].addEdge(v[45], 5);
  v[52].addEdge(v[53], 6);
  v[52].addEdge(v[61], 7);
  v[53].addEdge(v[44], 0);
  v[53].addEdge(v[52], 1);
  v[53].addEdge(v[60], 2);
  v[53].addEdge(v[45], 3);
  v[53].addEdge(v[61], 4);
  v[53].addEdge(v[46], 5);
  v[53].addEdge(v[54], 6);
  v[53].addEdge(v[62], 7);
  v[54].addEdge(v[45], 0);
  v[54].addEdge(v[53], 1);
  v[54].addEdge(v[61], 2);
  v[54].addEdge(v[46], 3);
  v[54].addEdge(v[62], 4);
  v[54].addEdge(v[47], 5);
  v[54].addEdge(v[55], 6);
  v[54].addEdge(v[63], 7);
  v[55].addEdge(v[46], 0);
  v[55].addEdge(v[54], 1);
  v[55].addEdge(v[62], 2);
  v[55].addEdge(v[47], 3);
  v[55].addEdge(v[63], 4);
  v[56].addEdge(v[48], 3);
  v[56].addEdge(v[49], 5);
  v[56].addEdge(v[57], 6);
  v[57].addEdge(v[48], 0);
  v[57].addEdge(v[56], 1);
  v[57].addEdge(v[49], 3);
  v[57].addEdge(v[50], 5);
  v[57].addEdge(v[58], 6);
  v[58].addEdge(v[49], 0);
  v[58].addEdge(v[57], 1);
  v[58].addEdge(v[50], 3);
  v[58].addEdge(v[51], 5);
  v[58].addEdge(v[59], 6);
  v[59].addEdge(v[50], 0);
  v[59].addEdge(v[58], 1);
  v[59].addEdge(v[51], 3);
  v[59].addEdge(v[52], 5);
  v[59].addEdge(v[60], 6);
  v[60].addEdge(v[51], 0);
  v[60].addEdge(v[59], 1);
  v[60].addEdge(v[52], 3);
  v[60].addEdge(v[53], 5);
  v[60].addEdge(v[61], 6);
  v[61].addEdge(v[52], 0);
  v[61].addEdge(v[60], 1);
  v[61].addEdge(v[53], 3);
  v[61].addEdge(v[54], 5);
  v[61].addEdge(v[62], 6);
  v[62].addEdge(v[53], 0);
  v[62].addEdge(v[61], 1);
  v[62].addEdge(v[54], 3);
  v[62].addEdge(v[55], 5);
  v[62].addEdge(v[63], 6);
  v[63].addEdge(v[54], 0);
  v[63].addEdge(v[62], 1);
  v[63].addEdge(v[55], 3);

  nSatohOthello.graphData = graph_data;

})(window.nSatohOthello);