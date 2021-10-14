class checkColor {
    constructor(values) { 
        if (values[0]>255 || values[1] < 0 || values[0] == null)
            throw new RangeError(
            'color RED must be bigger than 0 and less than 255'
          );
        else if (values[1]>255 || values[1] < 0 || values[1] == null)
            throw new RangeError(
            'color GREEN must be bigger than 0 and less than 255'
        );
        else if (values[2]>255 || values[2] < 0 || values[2] == null)
            throw new RangeError(
            'color BLUE must be bigger than 0 and less than 255'
        );
        else if (values[3]>1|| values[3] < 0 || values[3] == null)
            throw new RangeError(
            'transparency must be bigger than 0 and less than 1'
        );

      this.values = values;
    }
    out() {
      console.log(`RGBa is ${this.values}`);
    }
  }


const color1 = new checkColor([255,244,233,0.5]);



