# dotnetcoreconvermodels
dotnetcoreconvermodels is a nodejs library that convert the C# models into typescript models.

## Installation
```bash
npm i dotnetcoreconvertmodels
```

## Usage

```javascript
import ConvertProcess from 'dotnetcoreconvertmodels/index.js';

var g = new ConvertProcess([
    '../BackEnd/Data/Model1',
    '../BackEnd/Data/Model2',
    '../BackEnd/Data/Model3'
], './src/app/shared/models', {
    camelCase: false,
    usingDefaultInTsFile: true
});
```

first parameters are the pathes to the C# models.
second parameter is the path to put the TypeScript models in.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
