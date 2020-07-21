import ConvertProcess from 'dotnetcoreconvermodels/index.js';

var Go = new ConvertProcess([
    '../BackEnd/Data/Model1',
    '../BackEnd/Data/Model2',
    '../BackEnd/Data/Model3'
], './src/app/shared/models', {
    camelCase: false,
    usingDefaultInTsFile: true
});