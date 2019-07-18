## Installation

vg-vector has a really easy installation.

```node
                           npm i vg-vector
```

Now, Inside a JS file you can call it as a normal module

```node
                    import { Vector2D } from "vg-vector"
```
or if you are usign commonjs modules
```
                  const { Vector2D } = require("vg-vector")
```
## Development

|Github|
|------|
|https://github.com/vg-angel/vg-vector|

## Head-ups

vg-vector can work with both [Node.js](https://nodejs.org/) for server side or browsers like chrome, mozilla, opera, etc, for client side.

Actually there is only one subclass 'Vector2D' tha comes from the main class Vector, it works as an abtract class that makes the API extensible. In the near future it will implement 'Vector3D' but in general 'VectorND' that stands for vectors in n-dimentions, with the purpose to store data in the format of TypedArrays, and aslso providing basic posible operation.

'Vector2D' and 'Vector3D' and 'Quaternions' will be created with the purpose to work in the field of computer graphics.  

Methods directly inherited from the class 'Vector2D' are mutable, but there exist the static vertion for each function that is immutable.

## Author

|Name:|Angel Vega Garcia|
|-----|-----------------|
|email:| math_dev@outlook.com|